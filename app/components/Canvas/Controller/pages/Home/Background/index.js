import { ShaderMaterial, Mesh } from 'three'
import gsap from 'gsap'

import vertex from 'shaders/home/background/vertex.glsl'
import fragment from 'shaders/home/background/fragment.glsl'

export default class Background
{
  constructor({ element, geometry, scene, screen, viewport })
  {
    this.element = element 
    this.geo = geometry 
    this.scene = scene 
    this.screen = screen 
    this.viewport = viewport

    this.createMaterial()
    this.createMesh()
    this.createBounds()
    this.createAnimations()

    this.time = 0
  }

  createMaterial()
  {
    this.material = new ShaderMaterial(
      {
        vertexShader: vertex, 
        fragmentShader: fragment, 
        uniforms: {
          u_alpha: { value: 0.0 },
          u_scroll: { value: 0.0 },
          u_planeSize: { value: [ 0.0, 0.0 ] }, 
          u_state: { value: 0.0 },
          u_time: { value: 0.0 },
          u_viewportSize: { value: [ this.viewport.width, this.viewport.height ] }
        },
        transparent: true 
      }
    )
  }

  createMesh()
  {
    this.plane = new Mesh(
      this.geo, 
      this.material
    )

    this.plane.position.z = -0.001
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
      this.material.uniforms.u_alpha,
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
      this.material.uniforms.u_state,
      {
        value: 0.0
      },
      {
        value: 1.0,
        duration: 1.0,
        ease: 'power2.inOut',
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
      .eventCallback('onComplete', () => 
      {
        this.onStateChange.play()
      }
    )
  }

  hide()
  {
    this.onStateChange.reverse()
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

  update(scroll)
  {
    if(!this.bounds) return

    this.time += 0.005 
    
    this.plane.material.uniforms.u_time.value = this.time * 0.5
    this.plane.material.uniforms.u_scroll.value = scroll.current / this.screen.height

    this.updateScale()
    this.updateX()
    this.updateY()
  }
}