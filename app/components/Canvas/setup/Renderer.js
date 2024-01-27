import { WebGLRenderer } from 'three'

export default class Renderer 
{
  constructor({ canvas, camera, scene, screen })
  {
    this.canvas = canvas 
    this.camera = camera
    this.scene = scene 
    this.screen = screen

    this.createInstance()
  }

  createInstance()
  {
    this.instance = new WebGLRenderer({
      canvas: this.canvas, 
      alpha: true, 
      antialias: true 
    })

    this.instance.setSize(this.screen.width, this.screen.height)
    this.instance.setPixelRatio(this.screen.pixelRatio)
  }

  onResize(screen)
  {
    this.instance.setSize(screen.width, screen.height)
    this.instance.setPixelRatio(screen.pixelRatio)
  }

  update()
  {
    this.instance.render(this.scene, this.camera)
  }
}