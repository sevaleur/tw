import { TextureLoader } from 'three'
import gsap from 'gsap'

import Component from "classes/Component"

export default class Preloader extends Component
{
  constructor({ canvas })
  {
    super({
      element: '.preloader',
      elements: {
        numberText: '.preloader__number__text',
        nav: '.preloader__nav',
        profession: '.preloader__profession',
      }
    })

    this.canvas = canvas
    this.loaded = 0

    window.IMAGE_TEXTURES = {}

    this.createLoader()
  }

  /*
    CREATE.
  */

  createLoader()
  {
    const textureLoader = new TextureLoader()

    window.ASSETS.forEach(
      image => 
      {
        const texture = textureLoader.load(
          image,
          (data) => 
          {
            window.IMAGE_TEXTURES[image] = data
            this.onAssetLoaded()
          }  
        )
      }
    )
  }

  /*
    EVENTS.
  */

  onAssetLoaded()
  {
    this.loaded += 1

    this.percent = this.loaded / window.ASSETS.length

    this.elements.numberText.innerHTML = `${Math.round(this.percent * 100)}`

    this.animate()

    if(this.percent === 1)
      this.onLoaded()
  }

  onLoaded()
  {
    return new Promise(resolve =>
    {
      gsap.to(
        this.elements.numberText,
        {
          yPercent: 100.0,
          duration: 0.8,
          ease: 'power2.inOut',
          delay: 0.5,
          onComplete: () =>
          {
            this.emit('completed')
          }
        }
      )
    })
  }

  /*
    ANIMATIONS.
  */

  animate()
  {
    gsap.to(
      this.elements.nav, 
      {
        scaleX: this.percent,
        ease: 'linear'
      }
    )

    gsap.to(
      this.elements.profession, 
      {
        scaleX: this.percent,
        ease: 'linear'
      }
    )
  }

  /*
    DESTROY.
  */

  destroy()
  {
    this.element.parentNode.removeChild(this.element)
  }
}
