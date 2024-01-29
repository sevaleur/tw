/*! For license information please see main.a9d9bca3f0f988ed6e1a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetraewarren("main",{"./app/components/Canvas/Controller/pages/Home/Portrait/index.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var a=i("./node_modules/three/build/three.module.js"),n=i("./node_modules/gsap/index.js"),s=i("./app/shaders/home/portrait/vertex.glsl"),r=i("./app/shaders/home/portrait/fragment.glsl");class h{constructor({element:e,template:t,link:i,geometry:a,scene:n,screen:s,viewport:r}){this.element=e,this.template=t,this.geo=a,this.scene=n,this.screen=s,this.viewport=r,this.createMaterial(),this.createTexture(),this.createMesh(),this.createBounds(),this.createAnimations()}createMaterial(){this.material=new a.ShaderMaterial({vertexShader:s.default,fragmentShader:r.default,uniforms:{tMap:{value:null},u_alpha:{value:0},u_imageSize:{value:[0,0]},u_planeSize:{value:[0,0]},u_state:{value:0},u_viewportSize:{value:[this.viewport.width,this.viewport.height]}},transparent:!0})}createTexture(){let e=this.element.getAttribute("data-src");this.texture=window.IMAGE_TEXTURES[e],this.material.uniforms.tMap.value=this.texture,this.material.uniforms.u_imageSize.value=[this.texture.source.data.naturalWidth,this.texture.source.data.naturalHeight]}createMesh(){this.plane=new a.Mesh(this.geo,this.material),this.scene.add(this.plane)}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY(),this.plane.material.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}createAnimations(){this.onAlphaChange=n.default.fromTo(this.material.uniforms.u_alpha,{value:0},{value:1,delay:.5,paused:!0}),this.onStateChange=n.default.fromTo(this.material.uniforms.u_state,{value:0},{value:1,duration:1,ease:"power2.inOut",paused:!0})}show(){this.onAlphaChange.play().eventCallback("onComplete",(()=>{this.onStateChange.play()}))}hide(){this.onStateChange.reverse(),this.onAlphaChange.reverse()}onResize(e){if(e){const{screen:t,viewport:i}=e;t&&(this.screen=t),i&&(this.viewport=i,this.plane.material.uniforms.u_viewportSize.value=[this.viewport.width,this.viewport.height])}this.createBounds()}updateScale(){this.plane.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.plane.scale.y=this.viewport.height*this.bounds.height/this.screen.height,this.plane.material.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}updateX(){this.x=this.bounds.left/this.screen.width*this.viewport.width,this.plane.position.x=-this.viewport.width/2+this.plane.scale.x/2+this.x}updateY(){this.y=this.bounds.top/this.screen.height*this.viewport.height,this.plane.position.y=this.viewport.height/2-this.plane.scale.y/2-this.y}update(){this.bounds&&(this.updateScale(),this.updateX(),this.updateY())}}},"./app/shaders/home/portrait/fragment.glsl":(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const a="#define GLSLIFY 1\nuniform float u_alpha; \nuniform float u_state; \n\nuniform vec2 u_planeSize; \nuniform vec2 u_imageSize; \nuniform vec2 u_viewportSize; \n\nuniform sampler2D tMap; \n\nvarying vec2 v_uv; \nvarying vec3 v_position; \n\nvoid main()\n{\n  vec2 ratio = vec2(\n    min((u_planeSize.x / u_planeSize.y) / (u_imageSize.x / u_imageSize.y), 1.0), \n    min((u_planeSize.y / u_planeSize.x) / (u_imageSize.y / u_imageSize.x), 1.0)\n  ); \n\n  vec2 uv = vec2(\n    v_uv.x * ratio.x + (1.0 - ratio.x) * 0.5, \n    v_uv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n\n  vec4 image = texture2D(tMap, uv);\n\n  gl_FragColor = image;\n}"},"./app/shaders/home/portrait/vertex.glsl":(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const a="#define GLSLIFY 1\nuniform float u_alpha; \nuniform float u_state; \n\nuniform vec2 u_planeSize; \nuniform vec2 u_imageSize; \nuniform vec2 u_viewportSize; \n\nvarying vec2 v_uv; \nvarying vec3 v_position; \n\nvoid main()\n{\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); \n\n  v_uv = uv; \n  v_position = position; \n}"}},(function(e){e.h=()=>"91f04849e443e079db50"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUU1RixDQUVBdEIsS0FBS0ssY0FDUCxDQU1BaUMsV0FBQUEsR0FFRXRDLEtBQUtpQyxNQUFNUSxNQUFNQyxFQUFJMUMsS0FBS0QsU0FBU3NCLE1BQVFyQixLQUFLb0MsT0FBT2YsTUFBUXJCLEtBQUtGLE9BQU91QixNQUMzRXJCLEtBQUtpQyxNQUFNUSxNQUFNRSxFQUFJM0MsS0FBS0QsU0FBU3VCLE9BQVN0QixLQUFLb0MsT0FBT2QsT0FBU3RCLEtBQUtGLE9BQU93QixPQUU3RXRCLEtBQUtpQyxNQUFNMUIsU0FBU00sU0FBU0ssWUFBWUgsTUFBUSxDQUFDZixLQUFLaUMsTUFBTVEsTUFBTUMsRUFBRzFDLEtBQUtpQyxNQUFNUSxNQUFNRSxFQUN6RixDQUVBSixPQUFBQSxHQUVFdkMsS0FBSzBDLEVBQUsxQyxLQUFLb0MsT0FBT3VCLEtBQU8zRCxLQUFLRixPQUFPdUIsTUFBU3JCLEtBQUtELFNBQVNzQixNQUNoRXJCLEtBQUtpQyxNQUFNMkIsU0FBU2xCLEdBQU0xQyxLQUFLRCxTQUFTc0IsTUFBUSxFQUFNckIsS0FBS2lDLE1BQU1RLE1BQU1DLEVBQUksRUFBSzFDLEtBQUswQyxDQUN2RixDQUVBRixPQUFBQSxHQUVFeEMsS0FBSzJDLEVBQUszQyxLQUFLb0MsT0FBT3lCLElBQU03RCxLQUFLRixPQUFPd0IsT0FBVXRCLEtBQUtELFNBQVN1QixPQUNoRXRCLEtBQUtpQyxNQUFNMkIsU0FBU2pCLEVBQUszQyxLQUFLRCxTQUFTdUIsT0FBUyxFQUFNdEIsS0FBS2lDLE1BQU1RLE1BQU1FLEVBQUksRUFBSzNDLEtBQUsyQyxDQUN2RixDQUVBbUIsTUFBQUEsR0FFTTlELEtBQUtvQyxTQUVUcEMsS0FBS3NDLGNBQ0x0QyxLQUFLdUMsVUFDTHZDLEtBQUt3QyxVQUNQLHdGQ2xMRix5dEJDQUEscVhDQUF1QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhZXdhcnJlbi8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db250cm9sbGVyL3BhZ2VzL0hvbWUvUG9ydHJhaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHJhZXdhcnJlbi8uL2FwcC9zaGFkZXJzL2hvbWUvcG9ydHJhaXQvZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly90cmFld2FycmVuLy4vYXBwL3NoYWRlcnMvaG9tZS9wb3J0cmFpdC92ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly90cmFld2FycmVuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgTWVzaCB9IGZyb20gJ3RocmVlJ1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL2hvbWUvcG9ydHJhaXQvdmVydGV4Lmdsc2wnXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9ob21lL3BvcnRyYWl0L2ZyYWdtZW50Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcnRyYWl0XG57XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgdGVtcGxhdGUsIGxpbmssIGdlb21ldHJ5LCBzY2VuZSwgc2NyZWVuLCB2aWV3cG9ydCB9KVxuICB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudCBcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGUgXG4gICAgdGhpcy5nZW8gPSBnZW9tZXRyeSBcbiAgICB0aGlzLnNjZW5lID0gc2NlbmUgXG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW4gXG4gICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0XG5cbiAgICB0aGlzLmNyZWF0ZU1hdGVyaWFsKClcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG4gIH1cblxuICBjcmVhdGVNYXRlcmlhbCgpXG4gIHtcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKFxuICAgICAge1xuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleCwgXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCwgXG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgdE1hcDogeyB2YWx1ZTogbnVsbH0sIFxuICAgICAgICAgIHVfYWxwaGE6IHsgdmFsdWU6IDAuMCB9LCBcbiAgICAgICAgICB1X2ltYWdlU2l6ZTogeyB2YWx1ZTogWyAwLjAsIDAuMCBdIH0sIFxuICAgICAgICAgIHVfcGxhbmVTaXplOiB7IHZhbHVlOiBbIDAuMCwgMC4wIF0gfSwgXG4gICAgICAgICAgdV9zdGF0ZTogeyB2YWx1ZTogMC4wIH0sIFxuICAgICAgICAgIHVfdmlld3BvcnRTaXplOiB7IHZhbHVlOiBbIHRoaXMudmlld3BvcnQud2lkdGgsIHRoaXMudmlld3BvcnQuaGVpZ2h0IF0gfVxuICAgICAgICB9LFxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKClcbiAge1xuICAgIGxldCBzcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuSU1BR0VfVEVYVFVSRVNbc3JjXVxuXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50TWFwLnZhbHVlID0gdGhpcy50ZXh0dXJlIFxuICAgIFxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudV9pbWFnZVNpemUudmFsdWUgPSBbXG4gICAgICB0aGlzLnRleHR1cmUuc291cmNlLmRhdGEubmF0dXJhbFdpZHRoLFxuICAgICAgdGhpcy50ZXh0dXJlLnNvdXJjZS5kYXRhLm5hdHVyYWxIZWlnaHRcbiAgICBdXG4gIH1cblxuICBjcmVhdGVNZXNoKClcbiAge1xuICAgIHRoaXMucGxhbmUgPSBuZXcgTWVzaChcbiAgICAgIHRoaXMuZ2VvLCBcbiAgICAgIHRoaXMubWF0ZXJpYWxcbiAgICApXG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lKVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKClcbiAge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG5cbiAgICB0aGlzLnBsYW5lLm1hdGVyaWFsLnVuaWZvcm1zLnVfcGxhbmVTaXplLnZhbHVlID0gW3RoaXMucGxhbmUuc2NhbGUueCwgdGhpcy5wbGFuZS5zY2FsZS55XVxuICB9XG5cbiAgY3JlYXRlQW5pbWF0aW9ucygpXG4gIHtcbiAgICB0aGlzLm9uQWxwaGFDaGFuZ2UgPSBnc2FwLmZyb21UbyhcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudV9hbHBoYSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDAuMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDEuMCxcbiAgICAgICAgZGVsYXk6IDAuNSxcbiAgICAgICAgcGF1c2VkOiB0cnVlXG4gICAgICB9XG4gICAgKVxuICAgIFxuICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51X3N0YXRlLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMC4wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMS4wLFxuICAgICAgICBkdXJhdGlvbjogMS4wLFxuICAgICAgICBlYXNlOiAncG93ZXIyLmluT3V0JyxcbiAgICAgICAgcGF1c2VkOiB0cnVlXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgICAvKlxuICAgIEFOSU1BVElPTlMuXG4gICovXG5cbiAgc2hvdygpXG4gIHtcbiAgICB0aGlzLm9uQWxwaGFDaGFuZ2UucGxheSgpXG4gICAgICAuZXZlbnRDYWxsYmFjaygnb25Db21wbGV0ZScsICgpID0+IFxuICAgICAge1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UucGxheSgpXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaGlkZSgpXG4gIHtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UucmV2ZXJzZSgpXG4gICAgdGhpcy5vbkFscGhhQ2hhbmdlLnJldmVyc2UoKVxuICB9XG5cbiAgIC8qXG4gICAgRVZFTlRTLlxuICAqL1xuXG4gIG9uUmVzaXplKHNpemVzKVxuICB7XG4gICAgaWYoc2l6ZXMpXG4gICAge1xuICAgICAgY29uc3QgeyBzY3JlZW4sIHZpZXdwb3J0IH0gPSBzaXplc1xuXG4gICAgICBpZihzY3JlZW4pIHRoaXMuc2NyZWVuID0gc2NyZWVuXG4gICAgICBpZih2aWV3cG9ydCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnRcblxuICAgICAgICB0aGlzLnBsYW5lLm1hdGVyaWFsLnVuaWZvcm1zLnVfdmlld3BvcnRTaXplLnZhbHVlID0gW3RoaXMudmlld3BvcnQud2lkdGgsIHRoaXMudmlld3BvcnQuaGVpZ2h0XVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKClcbiAgfVxuXG4gIC8qXG4gIFVQREFURS5cbiAgKi9cblxuICB1cGRhdGVTY2FsZSgpXG4gIHtcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnggPSB0aGlzLnZpZXdwb3J0LndpZHRoICogdGhpcy5ib3VuZHMud2lkdGggLyB0aGlzLnNjcmVlbi53aWR0aFxuICAgIHRoaXMucGxhbmUuc2NhbGUueSA9IHRoaXMudmlld3BvcnQuaGVpZ2h0ICogdGhpcy5ib3VuZHMuaGVpZ2h0IC8gdGhpcy5zY3JlZW4uaGVpZ2h0XG5cbiAgICB0aGlzLnBsYW5lLm1hdGVyaWFsLnVuaWZvcm1zLnVfcGxhbmVTaXplLnZhbHVlID0gW3RoaXMucGxhbmUuc2NhbGUueCwgdGhpcy5wbGFuZS5zY2FsZS55XVxuICB9XG5cbiAgdXBkYXRlWCgpXG4gIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCAvIHRoaXMuc2NyZWVuLndpZHRoKSAqIHRoaXMudmlld3BvcnQud2lkdGhcbiAgICB0aGlzLnBsYW5lLnBvc2l0aW9uLnggPSAoLXRoaXMudmlld3BvcnQud2lkdGggLyAyKSArICh0aGlzLnBsYW5lLnNjYWxlLnggLyAyKSArIHRoaXMueFxuICB9XG5cbiAgdXBkYXRlWSgpXG4gIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wIC8gdGhpcy5zY3JlZW4uaGVpZ2h0KSAqIHRoaXMudmlld3BvcnQuaGVpZ2h0XG4gICAgdGhpcy5wbGFuZS5wb3NpdGlvbi55ID0gKHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMikgLSAodGhpcy5wbGFuZS5zY2FsZS55IC8gMikgLSB0aGlzLnlcbiAgfVxuXG4gIHVwZGF0ZSgpXG4gIHtcbiAgICBpZighdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gZmxvYXQgdV9hbHBoYTsgXFxudW5pZm9ybSBmbG9hdCB1X3N0YXRlOyBcXG5cXG51bmlmb3JtIHZlYzIgdV9wbGFuZVNpemU7IFxcbnVuaWZvcm0gdmVjMiB1X2ltYWdlU2l6ZTsgXFxudW5pZm9ybSB2ZWMyIHVfdmlld3BvcnRTaXplOyBcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCB0TWFwOyBcXG5cXG52YXJ5aW5nIHZlYzIgdl91djsgXFxudmFyeWluZyB2ZWMzIHZfcG9zaXRpb247IFxcblxcbnZvaWQgbWFpbigpXFxue1xcbiAgdmVjMiByYXRpbyA9IHZlYzIoXFxuICAgIG1pbigodV9wbGFuZVNpemUueCAvIHVfcGxhbmVTaXplLnkpIC8gKHVfaW1hZ2VTaXplLnggLyB1X2ltYWdlU2l6ZS55KSwgMS4wKSwgXFxuICAgIG1pbigodV9wbGFuZVNpemUueSAvIHVfcGxhbmVTaXplLngpIC8gKHVfaW1hZ2VTaXplLnkgLyB1X2ltYWdlU2l6ZS54KSwgMS4wKVxcbiAgKTsgXFxuXFxuICB2ZWMyIHV2ID0gdmVjMihcXG4gICAgdl91di54ICogcmF0aW8ueCArICgxLjAgLSByYXRpby54KSAqIDAuNSwgXFxuICAgIHZfdXYueSAqIHJhdGlvLnkgKyAoMS4wIC0gcmF0aW8ueSkgKiAwLjVcXG4gICk7XFxuXFxuICB2ZWM0IGltYWdlID0gdGV4dHVyZTJEKHRNYXAsIHV2KTtcXG5cXG4gIGdsX0ZyYWdDb2xvciA9IGltYWdlO1xcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBmbG9hdCB1X2FscGhhOyBcXG51bmlmb3JtIGZsb2F0IHVfc3RhdGU7IFxcblxcbnVuaWZvcm0gdmVjMiB1X3BsYW5lU2l6ZTsgXFxudW5pZm9ybSB2ZWMyIHVfaW1hZ2VTaXplOyBcXG51bmlmb3JtIHZlYzIgdV92aWV3cG9ydFNpemU7IFxcblxcbnZhcnlpbmcgdmVjMiB2X3V2OyBcXG52YXJ5aW5nIHZlYzMgdl9wb3NpdGlvbjsgXFxuXFxudm9pZCBtYWluKClcXG57XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApOyBcXG5cXG4gIHZfdXYgPSB1djsgXFxuICB2X3Bvc2l0aW9uID0gcG9zaXRpb247IFxcbn1cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MWYwNDg0OWU0NDNlMDc5ZGI1MFwiKSJdLCJuYW1lcyI6WyJQb3J0cmFpdCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsInRlbXBsYXRlIiwibGluayIsImdlb21ldHJ5Iiwic2NlbmUiLCJzY3JlZW4iLCJ2aWV3cG9ydCIsInRoaXMiLCJnZW8iLCJjcmVhdGVNYXRlcmlhbCIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiY3JlYXRlQW5pbWF0aW9ucyIsIm1hdGVyaWFsIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJ2ZXJ0ZXgiLCJmcmFnbWVudFNoYWRlciIsImZyYWdtZW50IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1X2FscGhhIiwidV9pbWFnZVNpemUiLCJ1X3BsYW5lU2l6ZSIsInVfc3RhdGUiLCJ1X3ZpZXdwb3J0U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNwYXJlbnQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0dXJlIiwid2luZG93IiwiSU1BR0VfVEVYVFVSRVMiLCJzb3VyY2UiLCJkYXRhIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInBsYW5lIiwiTWVzaCIsImFkZCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzY2FsZSIsIngiLCJ5Iiwib25BbHBoYUNoYW5nZSIsImdzYXAiLCJmcm9tVG8iLCJkZWxheSIsInBhdXNlZCIsIm9uU3RhdGVDaGFuZ2UiLCJkdXJhdGlvbiIsImVhc2UiLCJzaG93IiwicGxheSIsImV2ZW50Q2FsbGJhY2siLCJoaWRlIiwicmV2ZXJzZSIsIm9uUmVzaXplIiwic2l6ZXMiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=