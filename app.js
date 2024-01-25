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
    case 'cases': 
      return '/cases'
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

const handleReq = async(req) =>
{
  const meta = await url(
    encodeURIComponent(
      `*[_type == "metadata"]`
    )
  )

  const navigation = await url(
    encodeURIComponent(
      `*[_type == "navigation"]{
        ..., 
        nav_items[] ->
      }`
    )
  )

  return {
    meta: meta.result[0],
    navigation: navigation.result[0],
    device: req.device.type,
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

app.get('/cases', async(req, res) =>
{
  const partials = await handleReq(req)
  const cases = await url(
    encodeURIComponent(
      `*[_type == "cases"]{
        ..., 
        showcase[]-> {
          ..., 
          _type, 
          title, 
          "image": images[0], 
          "slug": slug.current
        }
      }`
    )
  )

  res.render('pages/cases',
  {
    ...partials,
    cases: cases.result[0]
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