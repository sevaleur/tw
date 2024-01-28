import { Group } from 'three' 

import Element from './Element'

export default class Home 
{
  constructor({ scene, screen, viewport, geo })
  {
    this.scene = scene 
    this.screen = screen 
    this.viewport = viewport 
    this.geo = geo 

    console.log(this.viewport)

    this.group = new Group()

    this.createElements()
    this.createShowcase()
  }

  /* 
    CREATE.
  */

  createElements()
  {
    this.home_element = document.querySelector('.home__showcase')
    this.home_wrapper = document.querySelector('.home__showcase__wrapper')

    this.images = document.querySelectorAll('.home__showcase__element__media__figure__image')
    this.hoverImages = document.querySelectorAll('.hoverImage')
    this.links = document.querySelectorAll('.home__showcase__image__link')
  }

  createShowcase()
  {
    this.elements = Array.from(
      this.images, 
      (element, index) => 
      {
        return new Element({
          element, 
          index,
          hoverImage: this.hoverImages[index],
          template: this.template, 
          link: this.links[index], 
          geometry: this.geo, 
          scene: this.scene, 
          screen: this.screen, 
          viewport: this.viewport
        })
      }
    )
  }

  /* 
    EVENTS.
  */

  onResize()
  {
    this.elements.forEach( 
      element => 
      { 
        element.onResize(
        {
          screen: this.screen,
          viewport: this.viewport,
        })
      }
    )
  }

  /* 
    ANIMATIONS.
  */

  show()
  {
    this.elements.forEach(element => element.show())
  }

  hide()
  {
    this.elements.forEach(element => element.hide())
  }

  /* 
    UPDATE.
  */

  update()
  {
    this.elements.forEach(element => element.update())
  }

  /*
    DESTROY.
  */

  destroy()
  {
    this.scene.remove(this.group)
  }
}