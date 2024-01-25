import Component from "classes/Component"


export default class Navigation extends Component
{
  constructor({ template })
  {
    super({
      element: '.navigation',
      elements:
      {

      }, 
    })

    this.template = template
  }

  create()
  {
    super.create()
  }
}