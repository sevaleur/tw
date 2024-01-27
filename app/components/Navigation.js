import Component from "classes/Component"

import Double from "animations/Double"

export default class Navigation extends Component
{
  constructor({ template })
  {
    super({
      element: '.navigation',
      elements:
      {
        menu: '.navigation__menu', 
          item: '.navigation__list__item',
        items: '.navigation__list__item__link__text'
      }, 
    })

    this.template = template
  }

  create()
  {
    super.create()

    this.navigation = { 
      animations: {
        menu: []
      }
    }

    this.createAnimations()
    this.addEventListeners()
  }

  createAnimations()
  {
    this.elements.items.forEach(
      item => 
      {
        this.navigation.animations.menu.push(
          new Double(item)
        )
      }
    )
  }

  onChange()
  {

  }

  onHover(idx)
  {
    this.navigation.animations.menu[idx].show()
    this.navigation.animations.menu[idx + 1].show()
  }

  onMouseLeave(idx)
  {
    this.navigation.animations.menu[idx].hide()
    this.navigation.animations.menu[idx + 1].hide()
  }

  show()
  {

  }

  hide()
  {

    this.removeEventListeners()
  }

  addEventListeners()
  {
    this.elements.item.forEach(
      (i, idx) => 
      {
        i.addEventListener('mouseenter', this.onHover.bind(this, idx))
        i.addEventListener('mouseleave', this.onMouseLeave.bind(this, idx))
      }
    )
  }

  removeEventListeners()
  {
    this.elements.item.forEach(
      (i, idx) => 
      {
        i.removeEventListener('mouseenter', this.onHover)
        i.removeEventListener('mouseleave', this.onMouseLeave)
      }
    )
  }
}