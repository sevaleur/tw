import gsap from 'gsap'

import Page from 'classes/Page'

import FP_Title from 'animations/Hover/FP_Title'

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
        workLinks: '.home__showcase__gallery__image',
        workTopTitles: '.home__showcase__gallery__image__top__title',
        workBtmTitles: '.home__showcase__gallery__image__btm__title',
        aboutTitle: '.home__about__title__text',
        aboutSplit: '.home__about__title__split',
        aboutDescription: '.home__about__info__description__text',
        aboutDescriptionLink: '.home__about__info__link__about__text',
        footerTitle: '.footer__title__text',
        footerSplit: '.footer__title__split'
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
        work: {
          top: [], 
          btm: []
        }
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
        this.elements.headerDesc, 
        this.elements.headerLocation,
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

    this.home.animations.work.top = Array.from(
      this.elements.workTopTitles,
      title => 
      {
        return new FP_Title(
          title,
          true
        ) 
      }
    )

    this.home.animations.work.btm = Array.from(
      this.elements.workBtmTitles,
      title => 
      {
        return new FP_Title(
          title,
          false
        ) 
      }
    )
  }

  onMouseEnter(idx)
  {
    this.home.animations.work.top[idx].show()
    this.home.animations.work.btm[idx].show()
  }

  onMouseLeave(idx)
  {
    this.home.animations.work.top[idx].hide()
    this.home.animations.work.btm[idx].hide()
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

    return new Promise(resolve => 
      {
        this.home.animations.work.top.forEach(
          el => 
          {
            el.hide()
          }
        )

        this.home.animations.work.btm.forEach(
          el => 
          {
            el.hide()
          }
        )
        
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