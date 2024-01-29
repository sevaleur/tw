import Component from "classes/Component"

import Double from "animations/Double"
import Title from "animations/Title"

export default class Navigation extends Component
{
  constructor({ template })
  {
    super({
      element: '.navigation',
      elements:
      {
        menu: '.navigation__menu', 
      }, 
    })

    this.template = template
  }

  create()
  {
    super.create()
  }

  createAnimations()
  {
    
  }

  onChange()
  {

  }

  show()
  {

  }

  addEventListeners()
  {
   
  }

  removeEventListeners()
  {
  
  }
}