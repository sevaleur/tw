import { ShaderMaterial, Mesh } from 'three'
import gsap from 'gsap'

import vertex from 'shaders/vertex.glsl'
import fragment from 'shaders/hoverSquare/fragment.glsl'

export default class Element
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
      show: false, 
      time: 0,
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
          tDisplacement: { value: this.disp },
          uAlpha: { value: 0.0 }, 
          uState: { value: 0.0},
          uTime: { value: 0.0 },
          uWidth: { value: 0.1 }, 
          uRadius: { value: 0.3 },
          uLeaveState: { value: 0.0 },
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
    let hoverSrc = this.element.getAttribute('data-hover')

    this.texture = window.IMAGE_TEXTURES[src]
    this.texture2 = window.IMAGE_TEXTURES[hoverSrc]

    this.material.uniforms.tMap.value = this.texture 
    this.material.uniforms.tHover.value = this.texture2
    
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

    this.onStateChange = gsap.fromTo(
      this.material.uniforms.uState, 
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

    this.onShow = gsap.fromTo(
      this.element, 
      {
        scale: 0.0
      },
      {
        scale: 1.0, 
        duration: 1.0, 
        delay: 0.2 * this.index, 
        ease: 'power2.inOut',
        paused: true,
        onComplete: () => 
        {
          this.animations.show = true 
        }
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
    this.onShow.play()
  }

  hide()
  {
    this.material.uniforms.uLeaveState.value = 1.0
    this.material.uniforms.uWidth.value = .1
    this.material.uniforms.uRadius.value = 0.12

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

  updateX(current=0)
  {
    this.x = ((this.bounds.left + current) / this.screen.width) * this.viewport.width
    this.plane.position.x = (-this.viewport.width / 2) + (this.plane.scale.x / 2) + this.x
  }

  updateY()
  {
    this.y = (this.bounds.top / this.screen.height) * this.viewport.height
    this.plane.position.y = (this.viewport.height / 2) - (this.plane.scale.y / 2) - this.y
  }

  update(current, last)
  {
    if(!this.bounds) return

    this.animations.time += 0.005

    this.plane.material.uniforms.uTime.value = Math.sin(10 + this.animations.time)

    if(!this.animations.show)
    {
      this.createBounds()
    }

    this.updateScale()
    this.updateX(current)
    this.updateY()
  }

  addEventListeners()
  {
    this.link.addEventListener('mouseenter', this.onMouseEnter.bind(this))
    this.link.addEventListener('mouseleave', this.onMouseLeave.bind(this))
  }
}