import { ShaderMaterial, Mesh } from 'three'
import gsap from 'gsap'

import vertex from 'shaders/vertex.glsl'
import fragment from 'shaders/cover/fragment.glsl'

export default class DelayedElement
{
  constructor({ element, index, template, link, geometry, scene, screen, viewport })
  {
    this.element = element 
    this.index = index
    this.template = template 
    this.geo = geometry 
    this.scene = scene 
    this.screen = screen 
    this.viewport = viewport

    this.createMaterial()
    this.createTexture()
    this.createMesh()
    this.createBounds()
    this.createAnimations()
  }

  createMaterial()
  {
    this.material = new ShaderMaterial(
      {
        vertexShader: vertex, 
        fragmentShader: fragment, 
        uniforms: {
          tMap: { value: null}, 
          uAlpha: { value: 0.0 }, 
          uImageSize: { value: [ 0.0, 0.0 ] }, 
          uPlaneSize: { value: [ 0.0, 0.0 ] }, 
          uViewportSize: { value: [ this.viewport.width, this.viewport.height ] }
        },
        transparent: true 
      }
    )
  }

  createTexture()
  {
    let src = this.element.getAttribute('data-src')

    this.texture = window.IMAGE_TEXTURES[src]

    this.material.uniforms.tMap.value = this.texture 
    
    this.material.uniforms.uImageSize.value = [
      this.texture.source.data.naturalWidth,
      this.texture.source.data.naturalHeight
    ]
  }

  createMesh()
  {
    this.plane = new Mesh(
      this.geo, 
      this.material
    )

    if(this.element.dataset.size === 'small')
      this.plane.position.z = 0.001

    this.scene.add(this.plane)
  }

  createBounds()
  {
    this.bounds = this.element.getBoundingClientRect()

    this.updateScale()
    this.updateX()
    this.updateY()

    this.plane.material.uniforms.uPlaneSize.value = [this.plane.scale.x, this.plane.scale.y]
  }

  createAnimations()
  {
    this.onAlphaChange = gsap.fromTo(
      this.material.uniforms.uAlpha,
      {
        value: 0.0
      },
      {
        value: 1.0,
        delay: 0.5,
        paused: true
      }
    )
  }

    /*
    ANIMATIONS.
  */

  show()
  {
    this.onAlphaChange.play()
  }

  hide()
  {
    if(this.element.dataset.size === 'small')
      this.onAlphaChange.reverse()
  }

   /*
    EVENTS.
  */

  onResize(sizes)
  {
    if(sizes)
    {
      const { screen, viewport } = sizes

      if(screen) this.screen = screen
      if(viewport) {
        this.viewport = viewport

        this.plane.material.uniforms.uViewportSize.value = [this.viewport.width, this.viewport.height]
      }
    }

    this.createBounds()
  }

  /*
  UPDATE.
  */

  updateScale()
  {
    this.plane.scale.x = this.viewport.width * this.bounds.width / this.screen.width
    this.plane.scale.y = this.viewport.height * this.bounds.height / this.screen.height

    this.plane.material.uniforms.uPlaneSize.value = [this.plane.scale.x, this.plane.scale.y]
  }

  updateX()
  {
    this.x = (this.bounds.left / this.screen.width) * this.viewport.width
    this.plane.position.x = (-this.viewport.width / 2) + (this.plane.scale.x / 2) + this.x
  }

  updateY()
  {
    this.y = (this.bounds.top / this.screen.height) * this.viewport.height
    this.plane.position.y = (this.viewport.height / 2) - (this.plane.scale.y / 2) - this.y
  }

  update()
  {
    if(!this.bounds) return

    this.updateScale()
    this.updateX()
    this.updateY()
  }
}