import { Group } from 'three' 

import Portrait from './Portrait'
import Background from './Background'
import Circle from './Circle'

export default class Home 
{
  constructor({ scene, screen, viewport, geo })
  {
    this.scene = scene 
    this.screen = screen 
    this.viewport = viewport 
    this.geo = geo 

    this.group = new Group()

    this.createElements()
    this.createHeader()
    this.createFeaturedWork()

    this.onResize()

    this.scene.add(this.group)
  }

  /* 
    CREATE.
  */

  createElements()
  {
    this.home_element = document.querySelector('.home')
    this.home_wrapper = document.querySelector('.home__wrapper')

    this.headerImage = document.querySelector('img.home__header__portrait__figure__image')
    this.background = document.querySelector('.home__showcase')
    this.workImages = document.querySelectorAll('img.home__showcase__gallery__image__figure__image')
  }

  createHeader()
  {
    this.portrait = new Portrait(
      {
        element: this.headerImage, 
        template: this.template,
        geometry: this.geo, 
        scene: this.group, 
        screen: this.screen, 
        viewport: this.viewport
      }
    )
  }
  
  createFeaturedWork()
  {
    this.background = new Background(
      {
        element: this.background, 
        geometry: this.geo, 
        scene: this.group, 
        screen: this.screen, 
        viewport: this.viewport
      }
    )

    this.works = Array.from(
      this.workImages, 
      (element, index) => 
      {
        return new Circle(
          {
            element, 
            index, 
            template: this.template, 
            geometry: this.geo, 
            scene: this.group, 
            screen: this.screen, 
            viewport: this.viewport
          }
        )
      }
    )
  }

  /* 
    EVENTS.
  */

  onResize()
  {
    this.portrait.onResize(
      {
        screen: this.screen,
        viewport: this.viewport,
      }
    )

    this.background.onResize(
      {
        screen: this.screen, 
        viewport: this.viewport
      }
    )

    this.works.forEach(
      el => 
      {
        el.onResize(
          {
            screen: this.screen, 
            viewport: this.viewport
          }
        )
      }
    )
  }

  /* 
    ANIMATIONS.
  */

  show()
  {
    this.portrait.show()
    this.background.show()
    this.works.forEach(el => { el.show() })
  }

  hide()
  {
    this.portrait.hide()
    this.background.hide()
    this.works.forEach(el => { el.hide() })
  }

  /* 
    UPDATE.
  */

  update(scroll)
  {
    const current = (scroll.current / this.screen.height) * this.viewport.height

    this.group.position.y = current * 0.9

    this.portrait.update()
    this.background.update()
    this.works.forEach(el => { el.update() })
  }

  /*
    DESTROY.
  */

  destroy()
  {
    this.scene.remove(this.group)
  }
}