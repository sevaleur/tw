import gsap from 'gsap'

export default class FP_Title
{
  constructor(element, negate=false)
  {
    this.element = element
    let value

    negate
      ? value = -100
      : value = 100

    this.createAnimation(value)
  }

  createAnimation(value)
  {
    this.onShow = gsap.fromTo(
      this.element,
    {
      yPercent: value
    },
    {
      duration: 0.8,
      opacity: 1.0,
      ease: 'power2.inOut',
      yPercent: 0,
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