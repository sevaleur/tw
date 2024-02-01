import { Group } from 'three' 

import Element from './Element'

export default class Work 
{
  constructor({ scene, screen, viewport, geo })
  {
    this.scene = scene 
    this.screen = screen 
    this.viewport = viewport 
    this.geo = geo 

    this.group = new Group()

    this.createElements()
    this.createImages()

    this.onResize()

    this.scene.add(this.group)

    this.show()
  }

  /* 
    CREATE.
  */

  createElements()
  {
    this.home_element = document.querySelector('.work')
    this.home_wrapper = document.querySelector('.work__wrapper')

    this.elements = document.querySelectorAll('.work__gallery__image__figure__image')
  }

  createImages()
  {
    this.elems = Array.from(
      this.elements,
      (element, index) => 
      {
        return new Element(
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
    this.elems.forEach(
      element => 
      {
        element.onResize(
          {
            screen: this.screen,
            viewport: this.viewport,
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
    this.elems.forEach(el => { el.show() } )
  }

  hide()
  {
    this.elems.forEach(el => { el.hide() })
  }

  /* 
    UPDATE.
  */

  update(scroll)
  {
    //const current = (scroll.current / this.screen.height) * this.viewport.height
    
    /* this.group.position.y = current */

    this.elems.forEach(el => { el.update() })
  }

  /*
    DESTROY.
  */

  destroy()
  {
    this.scene.remove(this.group)
  }
}