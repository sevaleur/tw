import { Scene, Texture, TextureLoader } from 'three'

import Camera from './setup/Camera'
import Renderer from './setup/Renderer'

import Controller from './Controller'

export default class Canvas 
{
  static instance 

  constructor({ template, canvas, screen })
  {
    if(Canvas.instance)
      return Canvas.instance 

    Canvas.instance = this 

    this.template = template 
    this.canvas = canvas
    this.screen = screen

    this.createScene()
    this.createCamera()
    this.createWebGLDimensions()
    this.createRenderer()
    this.createController()
  }

  /* 
    CREATE.
  */

  createScene()
  {
    this.scene = new Scene()
  }

  createCamera()
  {
    this.camera = new Camera({
      screen: this.screen, 
      scene: this.scene
    })
  }

  createWebGLDimensions()
  {
    const fov = this.camera.instance.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.instance.position.z
    const width = height * this.camera.instance.aspect

    this.viewport = {
      width, 
      height
    }
  }

  createRenderer()
  {
    this.renderer = new Renderer({
      canvas: this.canvas, 
      camera: this.camera.instance, 
      scene: this.scene, 
      screen: this.screen
    })
  }

  createController()
  {
    this.controller = new Controller({
      scene: this.scene, 
      screen: this.screen,
      camera: this.camera, 
      viewport: this.viewport
    })
  }

  /* 
    EVENTS.
  */

  onPreloaded()
  {
    this.controller.onChange(this.template)
  }

  onChangeStart( template, url, push )
  {
    if(!push)
        return

    this.controller.onChangeStart(template, url, push)
  }

  onChange(template)
  {
    this.controller.onChange(template)
  }

  onResize({ screen })
  {
    this.camera.onResize(screen)
    this.renderer.onResize(screen)

    if(this.controller)
    {
      this.controller.onResize({
        screen: screen, 
        viewport: this.viewport
      })
    }
  }

  update()
  {
    this.renderer.update()
  }
}