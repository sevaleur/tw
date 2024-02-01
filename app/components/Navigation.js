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
        availableText: '.navigation__availability__text',
        split: '.navigation__profession__split',
        profession: '.navigation__profession__text',
        linkLeft: '.navigation__list__left__link__text',
        linkRight: '.navigation__list__right__link__text',
        logo: '.navigation__list__logo__figure__image'
      }, 
    })

    this.template = template
  }

  create()
  {
    super.create()

    this.createAnimations()
    this.createTimeline()
    
    this.available = this.elements.availability.dataset.available
  }

  createAnimations()
  {
    this.onAvailability = gsap.fromTo(
      this.elements.availability, 
      {
        backgroundColor: ANTIQUE_WHITE, 
        scale: 0.0,
      }, 
      {
        backgroundColor: CARRIBEAN_GREEN, 
        scale: 1.0,
        duration: 0.8, 
        ease: 'power2.inOut', 
        paused: true
      }
    )

    this.onBusy = gsap.fromTo(
      this.elements.availability, 
      {
        backgroundColor: ANTIQUE_WHITE, 
        scale: 0.0,
      }, 
      {
        backgroundColor: AEROSPACE_ORANGE, 
        scale: 1.0,
        duration: 0.8, 
        ease: 'power2.inOut', 
        paused: true
      }
    )

    this.onLogoShow = gsap.fromTo(
      this.elements.logo, 
      {
        y: '-100%', 
      }, 
      {
        y: '0%', 
        duration: 1.0, 
        ease: 'expo.inOut', 
        paused: true
      }
    )

    this.onNavShow = gsap.fromTo(
      [
        this.elements.profession,
        this.elements.linkLeft, 
        this.elements.linkRight,
        this.elements.availableText
      ], 
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
  }

  createTimeline()
  {
    this.onSplitShow = gsap.timeline({
      duration: .5, 
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
    this.onSplitShow.play()
      .eventCallback("onComplete", () => 
      {
        this.available === 'true' 
        ? this.onAvailability.play()
        : this.onBusy.play()

        this.onLogoShow.play()
        this.onNavShow.play()
      })
  }

  addEventListeners()
  {
   
  }

  removeEventListeners()
  {
  
  }
}