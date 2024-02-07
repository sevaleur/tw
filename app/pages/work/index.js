import gsap from 'gsap'

import Page from 'classes/Page'

import Visualiser from 'animations/Hover/Visualiser'
import WP_Title from 'animations/Hover/WP_Title'

import { ANTIQUE_WHITE, DARK_JUNGLE_GREEN, AEROSPACE_ORANGE } from 'utils/colorVariables'

export default class Work extends Page 
{
  constructor()
  {
    super({ 
      element: '.work', 
      elements: {
        galleryCovers: '.work__gallery__image__cover',
        links: '.work__gallery__image__link',
        titles: '.work__titles__title__text',
        index: '.work__index', 
        indexCurrent: '.work__index__current',
        indexNumber: '.work__index__number', 
        indexNumberText: '.work__index__number__text', 
        indexSlash: '.work__index__slash',
        indexSlashText: '.work__index__slash__text',
        indexTotal: '.work__index__total',
        indexTotalText: '.work__index__total__text',
        visualiser: '.work__visualiser',
        visualiserBox: '.work__visualiser__box',
        visualiserBoxInner: '.work__visualiser__box__inner'
      }, 
      background: ANTIQUE_WHITE,
      color: DARK_JUNGLE_GREEN
    })
  }

  create()
  {
    super.create()

    this.createAnimations()

    this.elements.indexTotalText.innerHTML = this.elements.links.length
  }

  createAnimations()
  {
    super.createAnimations(false)

    this.boxSelect = Array.from(
      this.elements.visualiserBoxInner, 
      (element, idx) =>
      {
        return new Visualiser(
          element, 
          AEROSPACE_ORANGE
        )
      }
    )

    this.workSelect = Array.from(
      this.elements.titles, 
      (element, idx) => 
      {
        return new WP_Title(
          element
        )
      }
    )

    this.workSelect = Array.from(
      this.elements.titles, 
      (element, idx) => 
      {
        return new WP_Title(
          element
        )
      }
    )

    this.onIndexSlashShow = gsap.fromTo(
      this.elements.indexSlashText, 
      {
        scaleY: 0.0, 
      }, 
      {
        scaleY: 1.0, 
        duration: 1.0, 
        ease: 'power2.inOut', 
        paused: true
      }
    )

    this.onIndexNumberShow = gsap.fromTo(
      this.elements.indexNumberText,
      {
        xPercent: 100
      }, 
      {
        xPercent: 0, 
        duration: 1.0, 
        delay: 0.5,
        ease: 'power2.inOut', 
        paused: true
      }
    )

    this.onIndexTotalShow = gsap.fromTo(
      this.elements.indexTotalText, 
      {
        xPercent: -100, 
      }, 
      {
        xPercent: 0, 
        duration: 1.0, 
        delay: 0.5,
        ease: 'power2.inOut', 
        paused: true
      }
    )
  }

  onMouseEnter(idx)
  {
    this.elements.indexNumberText.innerHTML = idx + 1

    this.boxSelect[idx].show()
    this.workSelect[idx].show()
  }

  onMouseLeave(idx)
  {
    this.elements.indexNumberText.innerHTML = 0

    this.boxSelect[idx].hide()
    this.workSelect[idx].hide()
  }

  show()
  {
    super.show()

    this.onIndexSlashShow.play()
    this.onIndexNumberShow.play()
    this.onIndexTotalShow.play()
  }

  hide()
  {
    super.hide(true)

    return new Promise(
      resolve => 
      {
        this.onIndexSlashShow.reverse()
        this.onIndexNumberShow.reverse()
        this.onIndexTotalShow.reverse()
          .eventCallback(
            'onReverseComplete', 
            () => 
            {
              resolve()
            }
          )
      }
    )
  }

  addEventListeners()
  {
    super.addEventListeners()

    this.elements.links.forEach(
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
  }
}