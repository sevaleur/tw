import gsap from 'gsap'
import Splitting from 'splitting'

export default class Double 
{
  constructor(element)
  {
    this.element = element 

    Splitting({
      target: this.element,
      by: 'chars'
    })

    this.chars = this.element.querySelectorAll('.char')
    this.wrap(this.chars, 'span', 'wrap')
    this.createMotion()
  }

  wrap(elms, type, cl)
  {
    elms.forEach(
      char => 
    {
        const el = document.createElement(type)
        el.classList = cl
        char.parentNode.appendChild(el)
        el.appendChild(char)
    })
  }

  createMotion()
  {
    this.onShow = gsap.to(
      this.chars,
    {
      duration: 0.6,
      ease: 'power2.inOut',
      yPercent: -100,
      stagger: 0.06,
      paused: true
    })
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