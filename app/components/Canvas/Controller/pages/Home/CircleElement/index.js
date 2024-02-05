import { ShaderMaterial, Mesh } from 'three'
import gsap from 'gsap'

import vertex from 'shaders/vertex.glsl'
import fragment from 'shaders/hover/fragment.glsl'

export default class CircleElement
{
  constructor({ element, index, link, displacement, template, geometry, scene, screen, viewport })
  {
    this.element = element 
    this.index = index
    this.link = link
    this.disp = displacement
    this.template = template 
    this.geo = geometry 
    this.scene = scene 
    this.screen = screen 
    this.viewport = viewport

    this.animations = {
      time: 0,
      show: false, 
      hide: false
    }

    this.createMaterial()
    this.createTexture()
    this.createMesh()
    this.createAnimations()
    this.createBounds()
    this.addEventListeners()
  }

  createMaterial()
  {
    this.material = new ShaderMaterial(
      {
        vertexShader: vertex, 
        fragmentShader: fragment, 
        uniforms: {
          tMap: { value: null}, 
          tHover: { value: null },
          displacement: { value: this.disp },
          u_alpha: { value: 0.0 }, 
          u_state: { value: 0.0},
          u_time: { value: 0.0 },
          u_leaveState: { value: 0.0 },
          u_width: { value: 0.1 }, 
          u_radius: { value: 0.3 },
          u_imageSize: { value: [ 0.0, 0.0 ] }, 
          u_planeSize: { value: [ 0.0, 0.0 ] }, 
          u_viewportSize: { value: [ this.viewport.width, this.viewport.height ] }
        },
        transparent: true 
      }
    )
  }

  createTexture()
  {
    let src = this.element.getAttribute('data-src')
    let hoverSrc = this.element.getAttribute('data-hover')

    this.texture = window.IMAGE_TEXTURES[src]
    this.texture2 = window.IMAGE_TEXTURES[hoverSrc]

    this.material.uniforms.tMap.value = this.texture 
    this.material.uniforms.tHover.value = this.texture2
    
    this.material.uniforms.u_imageSize.value = [
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
    
    this.scene.add(this.plane)
  }

  createBounds()
  {
    this.bounds = this.element.getBoundingClientRect()

    this.updateScale()
    this.updateX()
    this.updateY()

    this.plane.material.uniforms.u_planeSize.value = [this.plane.scale.x, this.plane.scale.y]
  }

  createAnimations()
  {
    this.onAlphaChange = gsap.fromTo(
      this.plane.material.uniforms.u_alpha,
      {
        value: 0.0
      },
      {
        value: 1.0,
        duration: 1.0,
        delay: 0.5,
        paused: true
      }
    )

    this.onStateChange = gsap.fromTo(
      this.plane.material.uniforms.u_state, 
      {
        value: 0.0, 
      }, 
      {
        value: 0.2, 
        duration: 1.0, 
        ease: 'power2.inOut', 
        paused: true
      }
    )
  }

    /*
    ANIMATIONS.
  */

  onMouseEnter()
  {
    this.onStateChange.play()
  }

  onMouseLeave()
  {
    this.onStateChange.reverse()
  }

  show()
  {
    this.onAlphaChange.play()
  }

  hide()
  {
    this.material.uniforms.u_leaveState.value = 1.0
    this.material.uniforms.u_width.value = .1
    this.material.uniforms.u_radius.value = 0.12

    this.onStateChange.play()
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

        this.plane.material.uniforms.u_viewportSize.value = [this.viewport.width, this.viewport.height]
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

    this.plane.material.uniforms.u_planeSize.value = [this.plane.scale.x, this.plane.scale.y]
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

    this.animations.time += 0.005

    this.plane.material.uniforms.u_time.value = this.animations.time

    this.updateScale()
    this.updateX()
    this.updateY()
  }

  addEventListeners()
  {
    this.link.addEventListener('mouseenter', this.onMouseEnter.bind(this))
    this.link.addEventListener('mouseleave', this.onMouseLeave.bind(this))
  }

  removeEventListeners()
  {
    this.link.removeEventListener('mouseenter', this.onMouseEnter)
    this.link.removeEventListener('mouseleave', this.onMouseLeave)
  }
}