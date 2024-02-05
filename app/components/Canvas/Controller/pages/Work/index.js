import { Group, TextureLoader } from 'three' 
import gsap from 'gsap'
import Prefix from 'prefix'

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

    this.t_prefix = Prefix('transform')

    this.createElements()
    this.createConfig()
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
    this.work_element = document.querySelector('.work__gallery')
    this.work_wrapper = document.querySelector('.work__wrapper')

    this.elements = document.querySelectorAll('.work__gallery__image__figure__image')
    this.links = document.querySelectorAll('.work__gallery__image__link')

    this.disp = new TextureLoader().load(this.elements[0].dataset.displacement)
  }

  createConfig()
  {
    this.work = { 
      scroll: {
        current: 0,
        target: 0,
        last: 0,
        speed: 0.1,
        ease: 0.05,
      }
    }
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
            link: this.links[index],
            displacement: this.disp,
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
    this.full_bounds = this.work_wrapper.getBoundingClientRect()

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

    this.work.scroll.limit = this.full_bounds.width - this.elems[0].bounds.width
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
    EVENTS.
  */

    onTouchDown({ y })
  {
    this.work.scroll.position = this.work.scroll.current 
  }

  onTouchMove({ y, x })
  {
    const dist_y = y.start - y.end
    const dist_x = x.start - x.end
   
    this.work.scroll.target = this.work.scroll.position - (dist_y + dist_x) * 1.5
  }

  onTouchUp({ y })
  {

  }

  onWheel({ pixelY, pixelX })
  {
    this.work.scroll.target -= pixelX * 0.6
    this.work.scroll.target -= pixelY * 0.6
  }

  /* 
    UPDATE.
  */

  update()
  {
    this.work.scroll.target = gsap.utils.clamp(-this.work.scroll.limit, 0, this.work.scroll.target)
    this.work.scroll.current = gsap.utils.interpolate(this.work.scroll.current, this.work.scroll.target, this.work.scroll.ease)

    this.work_element.style[this.t_prefix] = `translateX(${this.work.scroll.current}px)`

    if(this.work.scroll.current > -0.01)
      this.work.scroll.current = 0

    this.elems.forEach(el => { el.update(this.work.scroll.current, this.work.scroll.last) })

    this.work.scroll.last = this.work.scroll.current
  }

  /*
    DESTROY.
  */

  destroy()
  {
    this.scene.remove(this.group)
  }
}