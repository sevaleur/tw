/*
*
** CONFIG.
*
*/

require('dotenv').config()

const fetch = require('node-fetch')

const { createClient } = require('@sanity/client')
const urlBuilder = require('@sanity/image-url')

const express = require('express')
const app = express()
this.assets = []

const path = require('path')
const device = require('express-device')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(device.capture())

const endpoint = process.env.ENDPOINT
const projectId = process.env.PROJECT_ID
const dataset = process.env.DATASET
const apiVersion = process.env.API_VERSION

const client = createClient({
  projectId, 
  dataset, 
  apiVersion, 
  useCdn: true
})

const build = urlBuilder(client)

/*
*
** FUNCTIONS.
*
*/

const url = (query) => 
{
  return fetch(
    `${endpoint}${query}`
  )
    .then(
      (res) => 
        res.json()
    )
}

const linkResolver = doc =>
{
  switch(doc._type)
  {
    case 'work': 
      return '/work'
      break
    case 'gallery': 
      return `/gallery/${doc.slug}`
      break 
    case 'about': 
      return '/about'
      break 
    default: 
      return '/'
      break
  }
}

app.use((req, res, next) => {
  res.locals.Link = linkResolver
  res.locals.Build = build

  next()
})

const handleAssets = async() => 
{
  const home_images = await url(
    encodeURIComponent(
      `*[_type == "home"]{
        "header": header.selfPortrait, 
        "aboutLeft": aboutSection.leftImages, 
        "aboutRight": aboutSection.rightImages 
      }`
    )
  )
  let portraitSrc = build.image(home_images.result[0].header.asset._ref).url()

  if(!this.assets.includes(portraitSrc))
      this.assets.push(portraitSrc)
  
  let leftLarge = build.image(home_images.result[0].aboutLeft.largeImage.asset._ref).url()

  if(!this.assets.includes(leftLarge))
      this.assets.push(leftLarge)

  let leftSmall = build.image(home_images.result[0].aboutLeft.smallImage.asset._ref).url()
  
  if(!this.assets.includes(leftSmall))
      this.assets.push(leftSmall)

  let rightLarge = build.image(home_images.result[0].aboutRight.largeImage.asset._ref).url()

  if(!this.assets.includes(rightLarge))
      this.assets.push(rightLarge)

  const all_galleries = await url(
    encodeURIComponent(
      `*[_type == "gallery"]{
        "images": images
      }`
    )
  )
  all_galleries.result.forEach(
    gallery => 
    {
      gallery.images.forEach(
        image => 
        {
          let src = build.image(image.asset._ref).url()
      
          if(!this.assets.includes(src))
            this.assets.push(src)
        }
      )
    }
  )

  const navigation = await url(
    encodeURIComponent(
      `*[_type == "navigation"]{
        "logo": navigationLinks.logo.asset
      }`
    )
  )

  let nav = build.image(navigation.result[0].logo._ref).url()

  if(!this.assets.includes(nav))
    this.assets.push(nav)
}

const handleReq = async(req) =>
{
  await handleAssets()

  const meta = await url(
    encodeURIComponent(
      `*[_type == "metadata"]`
    )
  )

  const navigation = await url(
    encodeURIComponent(
      `*[_type == "navigation"]`
    )
  )

  const footer = await url(
    encodeURIComponent(
      `*[_type == "footer"]`
    )
  )
  
  return {
    meta: meta.result[0],
    navigation: navigation.result[0],
    footer: footer.result[0],
    device: req.device.type,
    assets: this.assets
  }
}

/*
*
** ROUTES.
*
*/

app.get('/', async(req, res) =>
{
  const partials = await handleReq(req)
  const home = await url(
    encodeURIComponent(
      `*[_type == "home"]{
        ..., 
        showcase[]->{
          _type, 
          title,
          "image": images[0],
          "image2": images[1],
          "slug": slug.current
        }
      }`
    )
  )

  res.render('pages/home',
  {
    ...partials,
    home: home.result[0],
  })
})

app.get('/work', async(req, res) =>
{
  const partials = await handleReq(req)
  const work = await url(
    encodeURIComponent(
      `*[_type == "work"]{
        ..., 
        showcase[]-> {
          ..., 
          _type, 
          title, 
          "image": images[0], 
          "image2": images[1],
          "slug": slug.current
        }
      }`
    )
  )
  res.render('pages/work',
  {
    ...partials,
    work: work.result[0]
  })
})

app.get('/gallery/:uid', async(req, res) =>
{
  const partials = await handleReq(req)
  const gallery = await url(
    encodeURIComponent(
      `*[_type == "gallery" 
        && slug.current == "${req.params.uid}"
      ]`
    )
  )

  res.render('pages/gallery', {
    ...partials,
    gallery: gallery.result[0]
  })
})

app.get('/about', async(req, res) =>
{
    const partials = await handleReq(req)
    const about = await url(
      encodeURIComponent(
        '*[_type == "about"]'
      )
    )

    res.render('pages/about', {
      ...partials,
      about: about.result[0]
    })
})


/*
*
** LISTEN.
*
*/

app.listen(process.env.PORT, () =>
{
  console.log(`Listening at http://localhost:${process.env.PORT}`)
})