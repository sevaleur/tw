import gsap from 'gsap'

import Animation from 'classes/Animation'

export default class ImageCover extends Animation
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
    this.onImageShow = gsap.fromTo(
      this.element, 
      {
        scaleY: 1.0, 
      }, 
      {
        scaleY: 0.0, 
        duration: 1.0, 
        delay: 0.5, 
        ease: 'linear', 
        paused: true,
        onComplete: () => 
        {
          gsap.set(
            this.element, 
            {
              opacity: 0.0,
            }
          )
        }
      }
    )
  }

  show()
  {
    if(this.finished) return 

    this.onImageShow.play()
  }

  hide()
  {
    if(this.finished) return 

    this.onImageShow.reverse()
  }
}