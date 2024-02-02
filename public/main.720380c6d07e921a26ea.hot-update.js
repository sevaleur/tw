/*! For license information please see main.720380c6d07e921a26ea.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetraewarren("main",{"./app/components/Canvas/Controller/pages/Work/Element/index.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var s=i("./node_modules/three/build/three.module.js"),a=i("./node_modules/gsap/index.js"),h=i("./app/shaders/work/vertex.glsl"),n=i("./app/shaders/work/fragment.glsl");class r{constructor({element:e,index:t,displacement:i,template:s,link:a,geometry:h,scene:n,screen:r,viewport:l}){this.element=e,this.index=t,this.disp=i,this.template=s,this.geo=h,this.scene=n,this.screen=r,this.viewport=l,this.createMaterial(),this.createTexture(),this.createMesh(),this.createBounds(),this.createAnimations()}createMaterial(){this.material=new s.ShaderMaterial({vertexShader:h.default,fragmentShader:n.default,uniforms:{tMap:{value:null},displacement:{value:this.disp},u_alpha:{value:0},u_imageSize:{value:[0,0]},u_planeSize:{value:[0,0]},u_state:{value:0},u_viewportSize:{value:[this.viewport.width,this.viewport.height]}},transparent:!0})}createTexture(){let e=this.element.getAttribute("data-src");this.texture=window.IMAGE_TEXTURES[e],this.material.uniforms.tMap.value=this.texture,this.material.uniforms.u_imageSize.value=[this.texture.source.data.naturalWidth,this.texture.source.data.naturalHeight]}createMesh(){this.plane=new s.Mesh(this.geo,this.material),this.scene.add(this.plane)}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY(),this.plane.material.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}createAnimations(){this.onAlphaChange=a.default.fromTo(this.material.uniforms.u_alpha,{value:0},{value:1,delay:.5,paused:!0})}show(){this.onAlphaChange.play()}hide(){this.onAlphaChange.reverse()}onResize(e){if(e){const{screen:t,viewport:i}=e;t&&(this.screen=t),i&&(this.viewport=i,this.plane.material.uniforms.u_viewportSize.value=[this.viewport.width,this.viewport.height])}this.createBounds()}updateScale(){this.plane.scale.x=this.viewport.width*this.bounds.width/this.screen.width,this.plane.scale.y=this.viewport.height*this.bounds.height/this.screen.height,this.plane.material.uniforms.u_planeSize.value=[this.plane.scale.x,this.plane.scale.y]}updateX(){this.x=this.bounds.left/this.screen.width*this.viewport.width,this.plane.position.x=-this.viewport.width/2+this.plane.scale.x/2+this.x}updateY(){this.y=this.bounds.top/this.screen.height*this.viewport.height,this.plane.position.y=this.viewport.height/2-this.plane.scale.y/2-this.y}update(){this.bounds&&(this.updateScale(),this.updateX(),this.updateY())}}}},(function(e){e.h=()=>"5f50b7ab034c14072bbf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLcUMsT0FBT2YsTUFBUXRCLEtBQUtGLE9BQU93QixNQUMzRXRCLEtBQUtrQyxNQUFNUSxNQUFNRSxFQUFJNUMsS0FBS0QsU0FBU3dCLE9BQVN2QixLQUFLcUMsT0FBT2QsT0FBU3ZCLEtBQUtGLE9BQU95QixPQUU3RXZCLEtBQUtrQyxNQUFNMUIsU0FBU00sU0FBU0ssWUFBWUgsTUFBUSxDQUFDaEIsS0FBS2tDLE1BQU1RLE1BQU1DLEVBQUczQyxLQUFLa0MsTUFBTVEsTUFBTUUsRUFDekYsQ0FFQUosT0FBQUEsR0FFRXhDLEtBQUsyQyxFQUFLM0MsS0FBS3FDLE9BQU9tQixLQUFPeEQsS0FBS0YsT0FBT3dCLE1BQVN0QixLQUFLRCxTQUFTdUIsTUFDaEV0QixLQUFLa0MsTUFBTXVCLFNBQVNkLEdBQU0zQyxLQUFLRCxTQUFTdUIsTUFBUSxFQUFNdEIsS0FBS2tDLE1BQU1RLE1BQU1DLEVBQUksRUFBSzNDLEtBQUsyQyxDQUN2RixDQUVBRixPQUFBQSxHQUVFekMsS0FBSzRDLEVBQUs1QyxLQUFLcUMsT0FBT3FCLElBQU0xRCxLQUFLRixPQUFPeUIsT0FBVXZCLEtBQUtELFNBQVN3QixPQUNoRXZCLEtBQUtrQyxNQUFNdUIsU0FBU2IsRUFBSzVDLEtBQUtELFNBQVN3QixPQUFTLEVBQU12QixLQUFLa0MsTUFBTVEsTUFBTUUsRUFBSSxFQUFLNUMsS0FBSzRDLENBQ3ZGLENBRUFlLE1BQUFBLEdBRU0zRCxLQUFLcUMsU0FFVHJDLEtBQUt1QyxjQUNMdkMsS0FBS3dDLFVBQ0x4QyxLQUFLeUMsVUFDUCxrQkNsS0ZtQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhZXdhcnJlbi8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db250cm9sbGVyL3BhZ2VzL1dvcmsvRWxlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly90cmFld2FycmVuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCwgTWVzaCB9IGZyb20gJ3RocmVlJ1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3dvcmsvdmVydGV4Lmdsc2wnXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy93b3JrL2ZyYWdtZW50Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRcbntcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBpbmRleCwgZGlzcGxhY2VtZW50LCB0ZW1wbGF0ZSwgbGluaywgZ2VvbWV0cnksIHNjZW5lLCBzY3JlZW4sIHZpZXdwb3J0IH0pXG4gIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50IFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuZGlzcCA9IGRpc3BsYWNlbWVudFxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZSBcbiAgICB0aGlzLmdlbyA9IGdlb21ldHJ5IFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZSBcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbiBcbiAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnRcblxuICAgIHRoaXMuY3JlYXRlTWF0ZXJpYWwoKVxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcygpXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgfVxuXG4gIGNyZWF0ZU1hdGVyaWFsKClcbiAge1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoXG4gICAgICB7XG4gICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4LCBcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50LCBcbiAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICB0TWFwOiB7IHZhbHVlOiBudWxsfSwgXG4gICAgICAgICAgZGlzcGxhY2VtZW50OiB7IHZhbHVlOiB0aGlzLmRpc3AgfSxcbiAgICAgICAgICB1X2FscGhhOiB7IHZhbHVlOiAwLjAgfSwgXG4gICAgICAgICAgdV9pbWFnZVNpemU6IHsgdmFsdWU6IFsgMC4wLCAwLjAgXSB9LCBcbiAgICAgICAgICB1X3BsYW5lU2l6ZTogeyB2YWx1ZTogWyAwLjAsIDAuMCBdIH0sIFxuICAgICAgICAgIHVfc3RhdGU6IHsgdmFsdWU6IDAuMCB9LCBcbiAgICAgICAgICB1X3ZpZXdwb3J0U2l6ZTogeyB2YWx1ZTogWyB0aGlzLnZpZXdwb3J0LndpZHRoLCB0aGlzLnZpZXdwb3J0LmhlaWdodCBdIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgY3JlYXRlVGV4dHVyZSgpXG4gIHtcbiAgICBsZXQgc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LklNQUdFX1RFWFRVUkVTW3NyY11cblxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudE1hcC52YWx1ZSA9IHRoaXMudGV4dHVyZSBcbiAgICBcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVfaW1hZ2VTaXplLnZhbHVlID0gW1xuICAgICAgdGhpcy50ZXh0dXJlLnNvdXJjZS5kYXRhLm5hdHVyYWxXaWR0aCxcbiAgICAgIHRoaXMudGV4dHVyZS5zb3VyY2UuZGF0YS5uYXR1cmFsSGVpZ2h0XG4gICAgXVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpXG4gIHtcbiAgICB0aGlzLnBsYW5lID0gbmV3IE1lc2goXG4gICAgICB0aGlzLmdlbywgXG4gICAgICB0aGlzLm1hdGVyaWFsXG4gICAgKVxuICAgIFxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUpXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoKVxuICB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgIHRoaXMudXBkYXRlWCgpXG4gICAgdGhpcy51cGRhdGVZKClcblxuICAgIHRoaXMucGxhbmUubWF0ZXJpYWwudW5pZm9ybXMudV9wbGFuZVNpemUudmFsdWUgPSBbdGhpcy5wbGFuZS5zY2FsZS54LCB0aGlzLnBsYW5lLnNjYWxlLnldXG4gIH1cblxuICBjcmVhdGVBbmltYXRpb25zKClcbiAge1xuICAgIHRoaXMub25BbHBoYUNoYW5nZSA9IGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51X2FscGhhLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMC4wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMS4wLFxuICAgICAgICBkZWxheTogMC41LFxuICAgICAgICBwYXVzZWQ6IHRydWVcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICAgIC8qXG4gICAgQU5JTUFUSU9OUy5cbiAgKi9cblxuICBzaG93KClcbiAge1xuICAgIHRoaXMub25BbHBoYUNoYW5nZS5wbGF5KClcbiAgfVxuXG4gIGhpZGUoKVxuICB7XG4gICAgdGhpcy5vbkFscGhhQ2hhbmdlLnJldmVyc2UoKVxuICB9XG5cbiAgIC8qXG4gICAgRVZFTlRTLlxuICAqL1xuXG4gIG9uUmVzaXplKHNpemVzKVxuICB7XG4gICAgaWYoc2l6ZXMpXG4gICAge1xuICAgICAgY29uc3QgeyBzY3JlZW4sIHZpZXdwb3J0IH0gPSBzaXplc1xuXG4gICAgICBpZihzY3JlZW4pIHRoaXMuc2NyZWVuID0gc2NyZWVuXG4gICAgICBpZih2aWV3cG9ydCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnRcblxuICAgICAgICB0aGlzLnBsYW5lLm1hdGVyaWFsLnVuaWZvcm1zLnVfdmlld3BvcnRTaXplLnZhbHVlID0gW3RoaXMudmlld3BvcnQud2lkdGgsIHRoaXMudmlld3BvcnQuaGVpZ2h0XVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKClcbiAgfVxuXG4gIC8qXG4gIFVQREFURS5cbiAgKi9cblxuICB1cGRhdGVTY2FsZSgpXG4gIHtcbiAgICB0aGlzLnBsYW5lLnNjYWxlLnggPSB0aGlzLnZpZXdwb3J0LndpZHRoICogdGhpcy5ib3VuZHMud2lkdGggLyB0aGlzLnNjcmVlbi53aWR0aFxuICAgIHRoaXMucGxhbmUuc2NhbGUueSA9IHRoaXMudmlld3BvcnQuaGVpZ2h0ICogdGhpcy5ib3VuZHMuaGVpZ2h0IC8gdGhpcy5zY3JlZW4uaGVpZ2h0XG5cbiAgICB0aGlzLnBsYW5lLm1hdGVyaWFsLnVuaWZvcm1zLnVfcGxhbmVTaXplLnZhbHVlID0gW3RoaXMucGxhbmUuc2NhbGUueCwgdGhpcy5wbGFuZS5zY2FsZS55XVxuICB9XG5cbiAgdXBkYXRlWCgpXG4gIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCAvIHRoaXMuc2NyZWVuLndpZHRoKSAqIHRoaXMudmlld3BvcnQud2lkdGhcbiAgICB0aGlzLnBsYW5lLnBvc2l0aW9uLnggPSAoLXRoaXMudmlld3BvcnQud2lkdGggLyAyKSArICh0aGlzLnBsYW5lLnNjYWxlLnggLyAyKSArIHRoaXMueFxuICB9XG5cbiAgdXBkYXRlWSgpXG4gIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wIC8gdGhpcy5zY3JlZW4uaGVpZ2h0KSAqIHRoaXMudmlld3BvcnQuaGVpZ2h0XG4gICAgdGhpcy5wbGFuZS5wb3NpdGlvbi55ID0gKHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMikgLSAodGhpcy5wbGFuZS5zY2FsZS55IC8gMikgLSB0aGlzLnlcbiAgfVxuXG4gIHVwZGF0ZSgpXG4gIHtcbiAgICBpZighdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWY1MGI3YWIwMzRjMTQwNzJiYmZcIikiXSwibmFtZXMiOlsiRWxlbWVudCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImluZGV4IiwiZGlzcGxhY2VtZW50IiwidGVtcGxhdGUiLCJsaW5rIiwiZ2VvbWV0cnkiLCJzY2VuZSIsInNjcmVlbiIsInZpZXdwb3J0IiwidGhpcyIsImRpc3AiLCJnZW8iLCJjcmVhdGVNYXRlcmlhbCIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiY3JlYXRlQW5pbWF0aW9ucyIsIm1hdGVyaWFsIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJ2ZXJ0ZXgiLCJmcmFnbWVudFNoYWRlciIsImZyYWdtZW50IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1X2FscGhhIiwidV9pbWFnZVNpemUiLCJ1X3BsYW5lU2l6ZSIsInVfc3RhdGUiLCJ1X3ZpZXdwb3J0U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNwYXJlbnQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0dXJlIiwid2luZG93IiwiSU1BR0VfVEVYVFVSRVMiLCJzb3VyY2UiLCJkYXRhIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInBsYW5lIiwiTWVzaCIsImFkZCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzY2FsZSIsIngiLCJ5Iiwib25BbHBoYUNoYW5nZSIsImdzYXAiLCJmcm9tVG8iLCJkZWxheSIsInBhdXNlZCIsInNob3ciLCJwbGF5IiwiaGlkZSIsInJldmVyc2UiLCJvblJlc2l6ZSIsInNpemVzIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9