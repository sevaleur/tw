import Page from 'classes/Page'

import { ANTIQUE_WHITE, DARK_JUNGLE_GREEN } from 'utils/colorVariables'

export default class Cases extends Page 
{
  constructor()
  {
    super({ 
      element: '.cases', 
      elements: {
        title: '.cases__title__text'
      }, 
      background: DARK_JUNGLE_GREEN,
      color: ANTIQUE_WHITE
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