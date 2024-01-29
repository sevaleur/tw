/*! For license information please see main.f81afa8b2a25805490af.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetraewarren("main",{"./app/components/Canvas/Controller/pages/Home/Portrait/index.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var a=i("./node_modules/three/build/three.module.js"),s=i("./node_modules/gsap/index.js"),n=i("./app/shaders/home/vertex.glsl"),r=i("./app/shaders/home/fragment.glsl");class o{constructor({element:e,template:t,link:i,geometry:a,scene:s,screen:n,viewport:r}){this.element=e,this.template=t,this.geo=a,this.scene=s,this.screen=n,this.viewport=r,this.createMaterial(),this.createTexture(),this.createMesh(),this.createBounds(),this.createAnimations()}createMaterial(){this.material=new a.ShaderMaterial({vertexShader:n.default,fragmentShader:r.default,uniforms:{tMap:{value:null},u_alpha:{value:0},u_imageSize:{value:[0,0]},u_planeSize:{value:[0,0]},u_state:{value:0},u_viewportSize:{value:[this.viewport.width,this.viewport.height]}},transparent:!0})}createTexture(){let e=this.element.getAttribute("data-src");this.texture=window.IMAGE_TEXTURES[e],this.material.uniforms.tMap.value=this.texture,this.material.uniforms.u_imageSize.value=[this.texture.source.data.naturalWidth,this.texture.source.data.naturalHeight]}createMesh(){this.plane=new a.Mesh(this.geo,this.material),this.scene.add(this.plane)}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY(),this.plane.material.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}createAnimations(){this.onAlphaChange=s.default.fromTo(this.material.uniforms.u_alpha,{value:0},{value:1,delay:.5,paused:!0}),this.onStateChange=s.default.fromTo(this.material.uniforms.u_state,{value:0},{value:1,duration:1,ease:"power2.inOut",paused:!0})}show(){this.onAlphaChange.play().eventCallback("onComplete",(()=>{this.onStateChange.play()}))}hide(){this.onStateChange.reverse(),this.onAlphaChange.reverse()}onResize(e){if(e){const{screen:t,viewport:i}=e;t&&(this.screen=t),i&&(this.viewport=i,this.plane.material.uniforms.u_viewportSize.value=[this.viewport.width,this.viewport.height])}this.createBounds()}updateScale(){this.plane.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.plane.scale.y=this.viewport.height*this.bounds.height/this.screen.height,this.plane.material.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}updateX(){this.x=this.bounds.left/this.screen.width*this.viewport.width,this.plane.position.x=-this.viewport.width/2+this.plane.scale.x/2+this.x}updateY(){this.y=this.bounds.top/this.screen.height*this.viewport.height,this.plane.position.y=this.viewport.height/2-this.plane.scale.y/2-this.y}update(){this.bounds&&(this.updateScale(),this.updateX(),this.updateY())}}},"./app/components/Canvas/Controller/pages/Home/index.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var a=i("./node_modules/three/build/three.module.js"),s=i("./app/components/Canvas/Controller/pages/Home/Portrait/index.js");Object(function(){var e=new Error("Cannot find module './Circle'");throw e.code="MODULE_NOT_FOUND",e}());class n{constructor({scene:e,screen:t,viewport:i,geo:s}){this.scene=e,this.screen=t,this.viewport=i,this.geo=s,this.group=new a.Group,this.createElements(),this.createHeader(),this.createFeaturedWork(),this.onResize(),this.scene.add(this.group)}createElements(){this.home_element=document.querySelector(".home"),this.home_wrapper=document.querySelector(".home__wrapper"),this.headerImage=document.querySelector("img.home__header__portrait__figure__image"),this.workImages=document.querySelectorAll("img.home__showcase__gallery__image__figure__image")}createHeader(){this.portrait=new s.default({element:this.headerImage,template:this.template,geometry:this.geo,scene:this.group,screen:this.screen,viewport:this.viewport})}createFeaturedWork(){this.works=Array.from(this.workImages,((e,t)=>new Object(function(){var e=new Error("Cannot find module './Circle'");throw e.code="MODULE_NOT_FOUND",e}())({element:e,index:t,template:this.template,geometry:this.geo,scene:this.group,screen:this.screen,viewport:this.viewport})))}onResize(){this.portrait.onResize({screen:this.screen,viewport:this.viewport})}show(){this.portrait.show()}hide(){this.portrait.hide()}update(e){const t=e.current/this.screen.height*this.viewport.height;this.group.position.y=.8*t,this.portrait.update()}destroy(){this.scene.remove(this.group)}}},"./app/shaders/home/fragment.glsl":(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const a="#define GLSLIFY 1\nuniform float u_alpha; \nuniform float u_state; \n\nuniform vec2 u_planeSize; \nuniform vec2 u_imageSize; \nuniform vec2 u_viewportSize; \n\nuniform sampler2D tMap; \n\nvarying vec2 v_uv; \nvarying vec3 v_position; \n\nvoid main()\n{\n  vec2 ratio = vec2(\n    min((u_planeSize.x / u_planeSize.y) / (u_imageSize.x / u_imageSize.y), 1.0), \n    min((u_planeSize.y / u_planeSize.x) / (u_imageSize.y / u_imageSize.x), 1.0)\n  ); \n\n  vec2 uv = vec2(\n    v_uv.x * ratio.x + (1.0 - ratio.x) * 0.5, \n    v_uv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n\n  vec4 image = texture2D(tMap, uv);\n\n  gl_FragColor = image;\n}"},"./app/shaders/home/vertex.glsl":(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const a="#define GLSLIFY 1\nuniform float u_alpha; \nuniform float u_state; \n\nuniform vec2 u_planeSize; \nuniform vec2 u_imageSize; \nuniform vec2 u_viewportSize; \n\nvarying vec2 v_uv; \nvarying vec3 v_position; \n\nvoid main()\n{\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); \n\n  v_uv = uv; \n  v_position = position; \n}"}},(function(e){e.h=()=>"f737ef5840df54ce75fc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVNyQixNQUNoQixDQU1BTyxNQUFBQSxDQUFPb0IsR0FFTCxNQUFNQyxFQUFXRCxFQUFPQyxRQUFVbkYsS0FBS0YsT0FBT3dCLE9BQVV0QixLQUFLRCxTQUFTdUIsT0FFdEV0QixLQUFLZ0UsTUFBTUosU0FBU2pCLEVBQWMsR0FBVndDLEVBRXhCbkYsS0FBSzRFLFNBQVNkLFFBQ2hCLENBTUFzQixPQUFBQSxHQUVFcEYsS0FBS0gsTUFBTXdGLE9BQU9yRixLQUFLZ0UsTUFDekIsK0VDeEhGLGd0QkNBQSxxWENBQXNCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFld2FycmVuLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbnRyb2xsZXIvcGFnZXMvSG9tZS9Qb3J0cmFpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90cmFld2FycmVuLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbnRyb2xsZXIvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90cmFld2FycmVuLy4vYXBwL3NoYWRlcnMvaG9tZS9mcmFnbWVudC5nbHNsIiwid2VicGFjazovL3RyYWV3YXJyZW4vLi9hcHAvc2hhZGVycy9ob21lL3ZlcnRleC5nbHNsIiwid2VicGFjazovL3RyYWV3YXJyZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck1hdGVyaWFsLCBNZXNoIH0gZnJvbSAndGhyZWUnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvaG9tZS92ZXJ0ZXguZ2xzbCdcbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL2hvbWUvZnJhZ21lbnQuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9ydHJhaXRcbntcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCB0ZW1wbGF0ZSwgbGluaywgZ2VvbWV0cnksIHNjZW5lLCBzY3JlZW4sIHZpZXdwb3J0IH0pXG4gIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50IFxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZSBcbiAgICB0aGlzLmdlbyA9IGdlb21ldHJ5IFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZSBcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbiBcbiAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnRcblxuICAgIHRoaXMuY3JlYXRlTWF0ZXJpYWwoKVxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcygpXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgfVxuXG4gIGNyZWF0ZU1hdGVyaWFsKClcbiAge1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoXG4gICAgICB7XG4gICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4LCBcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LCBcbiAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICB0TWFwOiB7IHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgdV9hbHBoYTogeyB2YWx1ZTogMC4wIH0sIFxuICAgICAgICAgIHVfaW1hZ2VTaXplOiB7IHZhbHVlOiBbIDAuMCwgMC4wIF0gfSwgXG4gICAgICAgICAgdV9wbGFuZVNpemU6IHsgdmFsdWU6IFsgMC4wLCAwLjAgXSB9LCBcbiAgICAgICAgICB1X3N0YXRlOiB7IHZhbHVlOiAwLjAgfSwgXG4gICAgICAgICAgdV92aWV3cG9ydFNpemU6IHsgdmFsdWU6IFsgdGhpcy52aWV3cG9ydC53aWR0aCwgdGhpcy52aWV3cG9ydC5oZWlnaHQgXSB9XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlIFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKVxuICB7XG4gICAgbGV0IHNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5JTUFHRV9URVhUVVJFU1tzcmNdXG5cbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRNYXAudmFsdWUgPSB0aGlzLnRleHR1cmUgXG4gICAgXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51X2ltYWdlU2l6ZS52YWx1ZSA9IFtcbiAgICAgIHRoaXMudGV4dHVyZS5zb3VyY2UuZGF0YS5uYXR1cmFsV2lkdGgsXG4gICAgICB0aGlzLnRleHR1cmUuc291cmNlLmRhdGEubmF0dXJhbEhlaWdodFxuICAgIF1cbiAgfVxuXG4gIGNyZWF0ZU1lc2goKVxuICB7XG4gICAgdGhpcy5wbGFuZSA9IG5ldyBNZXNoKFxuICAgICAgdGhpcy5nZW8sIFxuICAgICAgdGhpcy5tYXRlcmlhbFxuICAgIClcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUpXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoKVxuICB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgIHRoaXMudXBkYXRlWCgpXG4gICAgdGhpcy51cGRhdGVZKClcblxuICAgIHRoaXMucGxhbmUubWF0ZXJpYWwudW5pZm9ybXMudV9wbGFuZVNpemUudmFsdWUgPSBbdGhpcy5wbGFuZS5zY2FsZS54LCB0aGlzLnBsYW5lLnNjYWxlLnldXG4gIH1cblxuICBjcmVhdGVBbmltYXRpb25zKClcbiAge1xuICAgIHRoaXMub25BbHBoYUNoYW5nZSA9IGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51X2FscGhhLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMC4wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMS4wLFxuICAgICAgICBkZWxheTogMC41LFxuICAgICAgICBwYXVzZWQ6IHRydWVcbiAgICAgIH1cbiAgICApXG4gICAgXG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gZ3NhcC5mcm9tVG8oXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVfc3RhdGUsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwLjBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAxLjAsXG4gICAgICAgIGR1cmF0aW9uOiAxLjAsXG4gICAgICAgIGVhc2U6ICdwb3dlcjIuaW5PdXQnLFxuICAgICAgICBwYXVzZWQ6IHRydWVcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICAgIC8qXG4gICAgQU5JTUFUSU9OUy5cbiAgKi9cblxuICBzaG93KClcbiAge1xuICAgIHRoaXMub25BbHBoYUNoYW5nZS5wbGF5KClcbiAgICAgIC5ldmVudENhbGxiYWNrKCdvbkNvbXBsZXRlJywgKCkgPT4gXG4gICAgICB7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZS5wbGF5KClcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBoaWRlKClcbiAge1xuICAgIHRoaXMub25TdGF0ZUNoYW5nZS5yZXZlcnNlKClcbiAgICB0aGlzLm9uQWxwaGFDaGFuZ2UucmV2ZXJzZSgpXG4gIH1cblxuICAgLypcbiAgICBFVkVOVFMuXG4gICovXG5cbiAgb25SZXNpemUoc2l6ZXMpXG4gIHtcbiAgICBpZihzaXplcylcbiAgICB7XG4gICAgICBjb25zdCB7IHNjcmVlbiwgdmlld3BvcnQgfSA9IHNpemVzXG5cbiAgICAgIGlmKHNjcmVlbikgdGhpcy5zY3JlZW4gPSBzY3JlZW5cbiAgICAgIGlmKHZpZXdwb3J0KSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydFxuXG4gICAgICAgIHRoaXMucGxhbmUubWF0ZXJpYWwudW5pZm9ybXMudV92aWV3cG9ydFNpemUudmFsdWUgPSBbdGhpcy52aWV3cG9ydC53aWR0aCwgdGhpcy52aWV3cG9ydC5oZWlnaHRdXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICB9XG5cbiAgLypcbiAgVVBEQVRFLlxuICAqL1xuXG4gIHVwZGF0ZVNjYWxlKClcbiAge1xuICAgIHRoaXMucGxhbmUuc2NhbGUueCA9IHRoaXMudmlld3BvcnQud2lkdGggKiB0aGlzLmJvdW5kcy53aWR0aCAvIHRoaXMuc2NyZWVuLndpZHRoXG4gICAgdGhpcy5wbGFuZS5zY2FsZS55ID0gdGhpcy52aWV3cG9ydC5oZWlnaHQgKiB0aGlzLmJvdW5kcy5oZWlnaHQgLyB0aGlzLnNjcmVlbi5oZWlnaHRcblxuICAgIHRoaXMucGxhbmUubWF0ZXJpYWwudW5pZm9ybXMudV9wbGFuZVNpemUudmFsdWUgPSBbdGhpcy5wbGFuZS5zY2FsZS54LCB0aGlzLnBsYW5lLnNjYWxlLnldXG4gIH1cblxuICB1cGRhdGVYKClcbiAge1xuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0IC8gdGhpcy5zY3JlZW4ud2lkdGgpICogdGhpcy52aWV3cG9ydC53aWR0aFxuICAgIHRoaXMucGxhbmUucG9zaXRpb24ueCA9ICgtdGhpcy52aWV3cG9ydC53aWR0aCAvIDIpICsgKHRoaXMucGxhbmUuc2NhbGUueCAvIDIpICsgdGhpcy54XG4gIH1cblxuICB1cGRhdGVZKClcbiAge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgLyB0aGlzLnNjcmVlbi5oZWlnaHQpICogdGhpcy52aWV3cG9ydC5oZWlnaHRcbiAgICB0aGlzLnBsYW5lLnBvc2l0aW9uLnkgPSAodGhpcy52aWV3cG9ydC5oZWlnaHQgLyAyKSAtICh0aGlzLnBsYW5lLnNjYWxlLnkgLyAyKSAtIHRoaXMueVxuICB9XG5cbiAgdXBkYXRlKClcbiAge1xuICAgIGlmKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cbn0iLCJpbXBvcnQgeyBHcm91cCB9IGZyb20gJ3RocmVlJyBcblxuaW1wb3J0IFBvcnRyYWl0IGZyb20gJy4vUG9ydHJhaXQnXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIFxue1xuICBjb25zdHJ1Y3Rvcih7IHNjZW5lLCBzY3JlZW4sIHZpZXdwb3J0LCBnZW8gfSlcbiAge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZSBcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbiBcbiAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnQgXG4gICAgdGhpcy5nZW8gPSBnZW8gXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKClcblxuICAgIHRoaXMuY3JlYXRlRWxlbWVudHMoKVxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKClcbiAgICB0aGlzLmNyZWF0ZUZlYXR1cmVkV29yaygpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ3JvdXApXG4gIH1cblxuICAvKiBcbiAgICBDUkVBVEUuXG4gICovXG5cbiAgY3JlYXRlRWxlbWVudHMoKVxuICB7XG4gICAgdGhpcy5ob21lX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG4gICAgdGhpcy5ob21lX3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fd3JhcHBlcicpXG5cbiAgICB0aGlzLmhlYWRlckltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmhvbWVfX2hlYWRlcl9fcG9ydHJhaXRfX2ZpZ3VyZV9faW1hZ2UnKVxuICAgIHRoaXMud29ya0ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5ob21lX19zaG93Y2FzZV9fZ2FsbGVyeV9faW1hZ2VfX2ZpZ3VyZV9faW1hZ2UnKVxuICB9XG5cbiAgY3JlYXRlSGVhZGVyKClcbiAge1xuICAgIHRoaXMucG9ydHJhaXQgPSBuZXcgUG9ydHJhaXQoXG4gICAgICB7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuaGVhZGVySW1hZ2UsIFxuICAgICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvLCBcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsIFxuICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLCBcbiAgICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBjcmVhdGVGZWF0dXJlZFdvcmsoKVxuICB7XG4gICAgdGhpcy53b3JrcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLndvcmtJbWFnZXMsIFxuICAgICAgKGVsZW1lbnQsIGluZGV4KSA9PiBcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDaXJjbGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudCwgXG4gICAgICAgICAgICBpbmRleCwgXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSwgXG4gICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW8sIFxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsIFxuICAgICAgICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlbiwgXG4gICAgICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIC8qIFxuICAgIEVWRU5UUy5cbiAgKi9cblxuICBvblJlc2l6ZSgpXG4gIHtcbiAgICB0aGlzLnBvcnRyYWl0Lm9uUmVzaXplKFxuICAgIHtcbiAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcbiAgICB9KVxuICB9XG5cbiAgLyogXG4gICAgQU5JTUFUSU9OUy5cbiAgKi9cblxuICBzaG93KClcbiAge1xuICAgIHRoaXMucG9ydHJhaXQuc2hvdygpXG4gIH1cblxuICBoaWRlKClcbiAge1xuICAgIHRoaXMucG9ydHJhaXQuaGlkZSgpXG4gIH1cblxuICAvKiBcbiAgICBVUERBVEUuXG4gICovXG5cbiAgdXBkYXRlKHNjcm9sbClcbiAge1xuICAgIGNvbnN0IGN1cnJlbnQgPSAoc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcmVlbi5oZWlnaHQpICogdGhpcy52aWV3cG9ydC5oZWlnaHRcblxuICAgIHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IGN1cnJlbnQgKiAwLjhcblxuICAgIHRoaXMucG9ydHJhaXQudXBkYXRlKClcbiAgfVxuXG4gIC8qXG4gICAgREVTVFJPWS5cbiAgKi9cblxuICBkZXN0cm95KClcbiAge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMuZ3JvdXApXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBmbG9hdCB1X2FscGhhOyBcXG51bmlmb3JtIGZsb2F0IHVfc3RhdGU7IFxcblxcbnVuaWZvcm0gdmVjMiB1X3BsYW5lU2l6ZTsgXFxudW5pZm9ybSB2ZWMyIHVfaW1hZ2VTaXplOyBcXG51bmlmb3JtIHZlYzIgdV92aWV3cG9ydFNpemU7IFxcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHRNYXA7IFxcblxcbnZhcnlpbmcgdmVjMiB2X3V2OyBcXG52YXJ5aW5nIHZlYzMgdl9wb3NpdGlvbjsgXFxuXFxudm9pZCBtYWluKClcXG57XFxuICB2ZWMyIHJhdGlvID0gdmVjMihcXG4gICAgbWluKCh1X3BsYW5lU2l6ZS54IC8gdV9wbGFuZVNpemUueSkgLyAodV9pbWFnZVNpemUueCAvIHVfaW1hZ2VTaXplLnkpLCAxLjApLCBcXG4gICAgbWluKCh1X3BsYW5lU2l6ZS55IC8gdV9wbGFuZVNpemUueCkgLyAodV9pbWFnZVNpemUueSAvIHVfaW1hZ2VTaXplLngpLCAxLjApXFxuICApOyBcXG5cXG4gIHZlYzIgdXYgPSB2ZWMyKFxcbiAgICB2X3V2LnggKiByYXRpby54ICsgKDEuMCAtIHJhdGlvLngpICogMC41LCBcXG4gICAgdl91di55ICogcmF0aW8ueSArICgxLjAgLSByYXRpby55KSAqIDAuNVxcbiAgKTtcXG5cXG4gIHZlYzQgaW1hZ2UgPSB0ZXh0dXJlMkQodE1hcCwgdXYpO1xcblxcbiAgZ2xfRnJhZ0NvbG9yID0gaW1hZ2U7XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIGZsb2F0IHVfYWxwaGE7IFxcbnVuaWZvcm0gZmxvYXQgdV9zdGF0ZTsgXFxuXFxudW5pZm9ybSB2ZWMyIHVfcGxhbmVTaXplOyBcXG51bmlmb3JtIHZlYzIgdV9pbWFnZVNpemU7IFxcbnVuaWZvcm0gdmVjMiB1X3ZpZXdwb3J0U2l6ZTsgXFxuXFxudmFyeWluZyB2ZWMyIHZfdXY7IFxcbnZhcnlpbmcgdmVjMyB2X3Bvc2l0aW9uOyBcXG5cXG52b2lkIG1haW4oKVxcbntcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7IFxcblxcbiAgdl91diA9IHV2OyBcXG4gIHZfcG9zaXRpb24gPSBwb3NpdGlvbjsgXFxufVwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY3MzdlZjU4NDBkZjU0Y2U3NWZjXCIpIl0sIm5hbWVzIjpbIlBvcnRyYWl0IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwidGVtcGxhdGUiLCJsaW5rIiwiZ2VvbWV0cnkiLCJzY2VuZSIsInNjcmVlbiIsInZpZXdwb3J0IiwidGhpcyIsImdlbyIsImNyZWF0ZU1hdGVyaWFsIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJjcmVhdGVBbmltYXRpb25zIiwibWF0ZXJpYWwiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsInZlcnRleCIsImZyYWdtZW50U2hhZGVyIiwiZnJhZ21lbnQiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVfYWxwaGEiLCJ1X2ltYWdlU2l6ZSIsInVfcGxhbmVTaXplIiwidV9zdGF0ZSIsInVfdmlld3BvcnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc3BhcmVudCIsInNyYyIsImdldEF0dHJpYnV0ZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJJTUFHRV9URVhUVVJFUyIsInNvdXJjZSIsImRhdGEiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicGxhbmUiLCJNZXNoIiwiYWRkIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNjYWxlIiwieCIsInkiLCJvbkFscGhhQ2hhbmdlIiwiZ3NhcCIsImZyb21UbyIsImRlbGF5IiwicGF1c2VkIiwib25TdGF0ZUNoYW5nZSIsImR1cmF0aW9uIiwiZWFzZSIsInNob3ciLCJwbGF5IiwiZXZlbnRDYWxsYmFjayIsImhpZGUiLCJyZXZlcnNlIiwib25SZXNpemUiLCJzaXplcyIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsIkhvbWUiLCJncm91cCIsIkdyb3VwIiwiY3JlYXRlRWxlbWVudHMiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVGZWF0dXJlZFdvcmsiLCJob21lX2VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJob21lX3dyYXBwZXIiLCJoZWFkZXJJbWFnZSIsIndvcmtJbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9ydHJhaXQiLCJ3b3JrcyIsIkFycmF5IiwiZnJvbSIsImluZGV4IiwiQ2lyY2xlIiwic2Nyb2xsIiwiY3VycmVudCIsImRlc3Ryb3kiLCJyZW1vdmUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=