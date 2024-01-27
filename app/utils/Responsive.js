import EventEmitter from './EventEmitter'

export default class Responsive extends EventEmitter
{
  constructor()
  {
    super()

    this.screen = {
      width: window.innerWidth, 
      height: window.innerHeight, 
      pixelRatio: Math.min(window.devicePixelRatio, 2)
    }
  }

  onResize()
  {
    this.screen.width = window.innerWidth
    this.screen.height = window.innerHeight
    this.screen.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }
}