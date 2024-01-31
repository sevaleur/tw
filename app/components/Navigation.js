import gsap from 'gsap'

import Component from "classes/Component"

import { ANTIQUE_WHITE, AEROSPACE_ORANGE, CARRIBEAN_GREEN } from 'utils/colorVariables'

export default class Navigation extends Component
{
  constructor({ template })
  {
    super({
      element: '.navigation',
      elements:
      {
        menu: '.navigation__menu', 
        availability: '.navigation__availability__color',
        split: '.navigation__profession__split',
        profession: '.navigation__profession__text'
      }, 
    })

    this.template = template
  }

  create()
  {
    super.create()

    this.createAnimations()

    
    this.available = this.elements.availability.dataset.available
  }

  createAnimations()
  {
    this.onAvailability = gsap.fromTo(
      this.elements.availability, 
      {
        backgroundColor: ANTIQUE_WHITE, 
      }, 
      {
        backgroundColor: CARRIBEAN_GREEN, 
        duration: 0.8, 
        ease: 'power2.inOut', 
        paused: true
      }
    )

    this.onBusy = gsap.fromTo(
      this.elements.availability, 
      {
        backgroundColor: ANTIQUE_WHITE, 
      }, 
      {
        backgroundColor: AEROSPACE_ORANGE, 
        duration: 0.8, 
        ease: 'power2.inOut', 
        paused: true
      }
    )

    this.onProfessionShow = gsap.fromTo(
      this.elements.profession, 
      {
        y: '100%', 
        opacity: 0.0
      }, 
      {
        y: '0%', 
        opacity: 1.0, 
        duration: 1.0, 
        ease: 'expo.inOut', 
        paused: true
      }
    )

    this.onSplitShow = gsap.timeline({
      duration: 1.0, 
      ease: 'expo.inOut', 
      paused: true
    })

    this.onSplitShow.fromTo(
      this.elements.split, 
      {
        height: '2rem', 
        scaleX: 6.0,
      }, 
      {
        scaleX: 1.0,
        transformOrigin: 'center'
      },
      'start'
    )

    this.onSplitShow.to(
      this.elements.split, 
      {
        height: '0.2rem',
        transformOrigin: 'bottom', 
      },
      'end'
    )
  }

  onChange()
  {

  }

  show()
  {
    this.available === 'true' 
      ? this.onAvailability.play()
      : this.onBusy.play()

    this.onSplitShow.play()
      .eventCallback("onComplete", () => 
      {
        this.onProfessionShow.play()
      })
  }

  addEventListeners()
  {
   
  }

  removeEventListeners()
  {
  
  }
}