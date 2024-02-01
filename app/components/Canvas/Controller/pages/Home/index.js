import { Group } from 'three' 

import DelayedElement from './DelayedElement'
import StaticElement from './StaticElement'
import Background from './Background'

export default class Home 
{
  constructor({ scene, screen, viewport, geo })
  {
    this.scene = scene 
    this.screen = screen 
    this.viewport = viewport 
    this.geo = geo 

    this.dGroup = new Group()
    this.sGroup = new Group()

    this.createElements()
    this.createImages()

    this.onResize()

    this.scene.add(this.dGroup, this.sGroup)

    this.show()
  }

  /* 
    CREATE.
  */

  createElements()
  {
    this.home_element = document.querySelector('.home')
    this.home_wrapper = document.querySelector('.home__wrapper')

    this.delayedElements = document.querySelectorAll('[data-type="delay"]')
    this.staticElements = document.querySelectorAll('[data-type="static"]')
    this.background = document.querySelector('.home__showcase')
  }

  createImages()
  {
    this.dElems = Array.from(
      this.delayedElements,
      (element, index) => 
      {
        return new DelayedElement(
          {
            element,
            index,
            template: this.template,
            geometry: this.geo, 
            scene: this.dGroup, 
            screen: this.screen, 
            viewport: this.viewport
          }
        )
      }
    )

    this.sElems = Array.from(
      this.staticElements, 
      (element, index) => 
      {
        return new StaticElement(
          {
            element, 
            index, 
            template: this.template, 
            geometry: this.geo, 
            scene: this.sGroup, 
            screen: this.screen, 
            viewport: this.viewport
          }
        )
      }
    )

    this.background = new Background(
      {
        element: this.background, 
        geometry: this.geo, 
        scene: this.sGroup, 
        screen: this.screen, 
        viewport: this.viewport
      }
    )
  }


  /* 
    EVENTS.
  */

  onResize()
  {
    this.dElems.forEach(
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

    this.sElems.forEach(
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

    this.background.onResize(
      {
        screen: this.screen, 
        viewport: this.viewport
      }
    )

  }

  /* 
    ANIMATIONS.
  */

  show()
  {
    this.dElems.forEach(el => { el.show() } )
    this.sElems.forEach(el => { el.show() } )
    this.background.show()
  }

  hide()
  {
    this.dElems.forEach(el => { el.hide() })
    this.sElems.forEach(el => { el.hide() })
    this.background.hide()
  }

  /* 
    UPDATE.
  */

  update(scroll)
  {
    const current = (scroll.current / this.screen.height) * this.viewport.height
    
    this.dGroup.position.y = current * 0.9
    this.sGroup.position.y = current

    this.dElems.forEach(el => { el.update() })
    this.sElems.forEach(el => { el.update() })
    this.background.update(scroll)
  }

  /*
    DESTROY.
  */

  destroy()
  {
    this.scene.remove(this.dGroup)
    this.scene.remove(this.sGroup)
  }
}