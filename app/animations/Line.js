import gsap from 'gsap'
import Splitting from 'splitting'

export default class Line
{
  constructor(element)
  {
    this.element = element 

    Splitting({
      target: this.element,
      by: 'chars'
    })

    this.words = this.element.querySelectorAll('.char')

    this.createAnimation()
  }

  createAnimation()
  {
    this.onShow = gsap.fromTo(
      this.words, 
      {
        y: '100%', 
      }, 
      {
        y: '0%',
        duration: 1.0, 
        ease: 'power2.inOut', 
        paused: true
      }
    )
  }

  show()
  {
    this.onShow.play()
  }

  hide()
  {
    this.onShow.reverse()
  }
}