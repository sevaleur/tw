import gsap from 'gsap'

import Animation from 'classes/Animation'

export default class SplitLines extends Animation
{
  constructor({element, elements})
  {
    super({
      element,
      elements
    })

    this.finished = false 
    this.createAnimations()
  }

  createAnimations()
  {
    this.onShow = gsap.fromTo(
      this.element, 
      {
        scaleX: 0.0, 
      }, 
      {
        scaleX: 1.0,
        duration: 1.0, 
        delay: 0.5,
        ease: 'expo.inOut', 
        paused: true,
        onComplete: () => 
        {
          this.finished = true
        }
      }
    )
  }

  show()
  {
    if(this.finished) return 

    this.onShow.play()
  }

  hide()
  {
    if(this.finished) return 
    
    this.onShow.reverse()
  }
}