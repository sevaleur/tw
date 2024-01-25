import Page from 'classes/Page'

import { ANTIQUE_WHITE, DARK_JUNGLE_GREEN } from 'utils/colorVariables'

export default class Gallery extends Page 
{
  constructor()
  {
    super({ 
      element: '.gallery', 
      elements: {
        title: '.gallery__title__text'
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