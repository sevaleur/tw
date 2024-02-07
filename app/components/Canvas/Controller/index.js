import { PlaneGeometry } from 'three'

import Home from './pages/Home'
import Work from './pages/Work'
import Gallery from './pages/Gallery'
import About from './pages/About'

export default class Controller 
{
  constructor({ scene, screen, camera, viewport })
  {
    this.scene = scene 
    this.screen = screen 
    this.camera = camera 
    this.viewport = viewport

    this.createGeometry()
  }

  createGeometry()
  {
    this.geo = new PlaneGeometry(
      1, 
      1, 
      1, 
      1
    )
  }

  createHome()
  {
    if(this.home) this.destroyHome()

    this.home = new Home({
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
      geo: this.geo
    })
  }

  createWork()
  {
    if(this.work) this.destroyWork()

    this.work = new Work({
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
      geo: this.geo,
    })
  }

  createGallery()
  {
    if(this.gallery) this.destroyGallery()

    this.gallery = new Gallery({
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
      geo: this.geo,
    })
  }

  createAbout()
  {
    if(this.about) this.destroyAbout()

    this.about = new About({
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
      geo: this.geo
    })
  }

  /*
  *
  ** DESTROY.
  * 
  */

  destroyHome()
  {
    if(!this.home) return

    this.home.destroy()
    this.home = null
  }

  destroyWork()
  {
    if(!this.work) return

    this.work.destroy()
    this.work = null
  }

  destroyGallery()
  {
    if(!this.gallery) return

    this.gallery.destroy()
    this.gallery = null
  }

  destroyAbout()
  {
    if(!this.about) return

    this.about.destroy()
    this.about = null
  }

/* 
*
** EVENTS.
*
*/

  onChangeStart(template, url, push)
  {
    if(!push)
      return

    if(this.home)
      this.home.hide()

    if(this.work)
      this.work.hide()

    if(this.about)
      this.about.hide()

    if(this.gallery)
      this.gallery.hide()
  }

  onChange(template)
  {
    switch(template)
    {
      case 'home':
        this.createHome()

        this.destroyWork()
        this.destroyGallery()
        this.destroyAbout()

        break
      case 'work':
        this.createWork()

        this.destroyHome()
        this.destroyGallery()
        this.destroyAbout()

        break
      case 'gallery':
        this.createGallery()

        this.destroyHome()
        this.destroyWork()
        this.destroyAbout()

        break
      case 'about':
        this.createAbout()

        this.destroyHome()
        this.destroyWork()
        this.destroyGallery()

        break
      default:
      break
    }
  }

  onResize({ screen, viewport })
  {
    if(this.home)
    {
      this.home.onResize({
        screen,
        viewport
      })
    }

    if(this.work)
    {
      this.work.onResize({
        screen,
        viewport
      })
    }

    if(this.gallery)
    {
      this.gallery.onResize({
        screen,
        viewport
      })
    }

    if(this.about)
    {
      this.about.onResize({
        screen,
        viewport
      })
    }
  }

  onTouchDown({ y, x })
  {
    if(this.work)
      this.work.onTouchDown({ y, x })

    if(this.gallery)
      this.gallery.onTouchDown({ y, x })
  }

  onTouchMove({ y, x })
  {
    if(this.work)
      this.work.onTouchMove({ y, x })

    if(this.gallery)
      this.gallery.onTouchMove({ y, x })
  }

  onTouchUp({ y, x })
  {
    if(this.work)
      this.work.onTouchUp({ y, x })

    if(this.gallery)
      this.gallery.onTouchUp({ y, x })
  }

  onWheel(e)
  {
    if(this.work)
      this.work.onWheel(e)

    if(this.gallery)
      this.gallery.onWheel(e)
  }

  /* 
  *
  ** UPDATE.
  *
  */

  update(scroll)
  {
    if(this.home)
      this.home.update(scroll)

    if(this.work)
      this.work.update()

    if(this.gallery)
      this.gallery.update()

    if(this.about)
      this.about.update(scroll)
  }
}