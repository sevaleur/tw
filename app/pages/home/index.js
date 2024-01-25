import Page from 'classes/Page'

import { ANTIQUE_WHITE, DARK_JUNGLE_GREEN } from 'utils/colorVariables'

export default class Home extends Page
{
  constructor()
  {
    super({
      element: '.home', 
      elements: {
        title: '.home__title__text'
      }, 
      background: ANTIQUE_WHITE,
      color: DARK_JUNGLE_GREEN
    })
  }

  create()
  {
    super.create()
  }

  show()
  {
    super.show()
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