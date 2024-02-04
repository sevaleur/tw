import gsap from 'gsap'

import Page from 'classes/Page'

import { ANTIQUE_WHITE, DARK_JUNGLE_GREEN } from 'utils/colorVariables'

export default class Home extends Page
{
  constructor()
  {
    super({
      element: '.home', 
      elements: {
        wrapper: '.home__wrapper',
        headerDesc: '.home__header__description__text',
        headerLocation: '.home__header__location__text',
        headerTopTitle: '.home__header__topTitle__text',
        headerBtmTitle: '.home__header__btmTitle__text',
        headerPortraitCover: '.home__header__portrait__cover',
        workGallery: '.home__showcase__gallery',
        workTitle: '.home__showcase__title__text',
        workLinks: '.home__showcase__gallery__image__link',
        workTitles: '.home__showcase__gallery__image__title',
        workSvg: '.home__showcase__gallery__image__title__svg',
        aboutTitle: '.home__about__title__text',
        aboutDescription: '.home__about__info__description__text',
        aboutDescriptionLink: '.home__about__info__link__about__text',
        footerTitle: '.footer__title__text',
        footerSplit: '.footer__title__split',
        path: '.circlepath',
      }, 
      background: ANTIQUE_WHITE,
      color: DARK_JUNGLE_GREEN
    })
  }

  create()
  {
    super.create()

    this.home = {
      animations: {
        workTitles: []
      }
    }

    this.createAnimations()
  }

  createAnimations()
  {
    super.createAnimations(true)

    this.onPortraitShow = gsap.fromTo(
      this.elements.headerPortraitCover, 
      {
        scaleY: 1.0, 
      }, 
      {
        scaleY: 0.0, 
        duration: 1.0, 
        delay: 0.5, 
        ease: 'power2.inOut', 
        paused: true
      }
    )

    this.onTitleShow = gsap.fromTo(
      [
        this.elements.headerTopTitle,
        this.elements.headerBtmTitle,
        this.elements.headerLocation,
        this.elements.headerDesc, 
        this.elements.workGallery,
        this.elements.workTitle,
        this.elements.aboutDescription,
        this.elements.aboutDescriptionLink
      ],
      {
        opacity: 0.0
      }, 
      {
        opacity: 1.0, 
        duration: 0.8, 
        paused: true
      }
    )

    this.elements.workSvg.forEach(
      svg => 
      {
        let svgShow = gsap.fromTo(
          svg, 
          {
            fontSize: '0rem',
            opacity: 0.0
          },
          {
            fontSize: '4rem',
            opacity: 1.0,
            duration: 1.0, 
            stagger: 0.2, 
            ease: 'power2.inOut', 
            paused: true
          }
        )

        this.home.animations.workTitles.push(svgShow)
      }
    )
  }

  onMouseEnter(idx)
  {
    this.home.animations.workTitles[idx].play()
  }

  onMouseLeave(idx)
  {
    this.home.animations.workTitles[idx].reverse()
  }

  show()
  {
    super.show()

    this.onPortraitShow.play()
    this.onTitleShow.play()
  }

  hide()
  {
    super.hide(true)

    return new Promise(
      resolve => 
      { 
        this.onTitleShow.reverse()
        this.onPortraitShow.reverse()
          .eventCallback(
            'onReverseComplete', () => 
          { 
            gsap.delayedCall(0.2, () => { resolve() } ) 
          }
        )
      }
    )
  }

  addEventListeners()
  {
    super.addEventListeners()

    this.elements.workLinks.forEach(
      (link, idx) => 
      {
        link.addEventListener('mouseenter', this.onMouseEnter.bind(this, idx))
        link.addEventListener('mouseleave', this.onMouseLeave.bind(this, idx))
      }
    )
  }

  removeEventListeners()
  {
    super.removeEventListeners()

    this.elements.workLinks.forEach(
      (link, idx) => 
      {
        link.removeEventListener('mouseenter', this.onMouseEnter)
        link.removeEventListener('mouseleave', this.onMouseLeave)
      }
    )
  }
}