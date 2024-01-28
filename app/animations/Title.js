import gsap from 'gsap'
import Splitting from 'splitting'

export default class Title
{
  constructor(element)
  {
    this.element = element 
    this.parentEl = this.element.parentNode

    Splitting({
      target: this.element,
      by: 'chars'
    })

    this.chars = this.element.querySelectorAll('.char')
    this.modifyText()
    this.createAnimation()
  }

  modifyText()
  {
    let whitespace = this.element.querySelector('.whitespace')
    whitespace.className = 'split'
  }

  createAnimation()
  {
    this.onTitleLocation = gsap.fromTo(
      this.parentEl, 
      {
        right: '50%', 
      }, 
      {
        right: '6%', 
        duration: 1.0, 
        ease: 'power2.inOut',
        paused: true
      }
    )

    this.onTitleSize = gsap.fromTo(
      this.element, 
      {
        fontSize: '20rem',
        lineHeight: '10rem'
      }, 
      {
        fontSize: '1.6rem', 
        lineHeight: '1.6rem',
        duration: 1.0, 
        ease: 'power2.inOut',
        paused: true, 
      }
    )
  }

  show()
  {
    this.onTitleLocation.reverse()
    this.onTitleSize.reverse()
  }

  hide()
  {
    this.onTitleLocation.play()
    this.onTitleSize.play()
  }
}