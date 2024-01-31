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
        headerBtmTitle: '.home__header__btmTitle__text'
      }, 
      background: ANTIQUE_WHITE,
      color: DARK_JUNGLE_GREEN
    })
  }

  create()
  {
    super.create()
    this.createAnimations()
  }

  createAnimations()
  {
    super.createAnimations(true)

    this.onTitleShow = gsap.fromTo(
      [
        this.elements.headerTopTitle,
        this.elements.headerBtmTitle,
        this.elements.headerDesc, 
        this.elements.headerLocation
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
  }

  show()
  {
    super.show()

    this.onTitleShow.play()
  }

  hide()
  {
    super.hide()
  }

  addEventListeners()
  {
    super.addEventListeners()
  }

  removeEventListeners()
  {
    super.removeEventListeners()
  }
}