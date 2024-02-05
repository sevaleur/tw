/*! For license information please see main.bd6efddc22be16bac1f5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetraewarren("main",{"./app/components/Canvas/Controller/pages/Work/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var s=r("./node_modules/three/build/three.module.js");Object(function(){var e=new Error("Cannot find module 'gsaap'");throw e.code="MODULE_NOT_FOUND",e}());var o=r("./node_modules/prefix/index.js"),i=r.n(o),l=r("./app/components/Canvas/Controller/pages/Work/Element/index.js");class n{constructor({scene:e,screen:t,viewport:r,geo:o}){this.scene=e,this.screen=t,this.viewport=r,this.geo=o,this.group=new s.Group,this.t_prefix=i()("transform"),this.createElements(),this.createConfig(),this.createImages(),this.onResize(),this.scene.add(this.group),this.show()}createElements(){this.work_element=document.querySelector(".work"),this.work_wrapper=document.querySelector(".work__wrapper"),this.elements=document.querySelectorAll(".work__gallery__image__figure__image"),this.links=document.querySelectorAll(".work__gallery__image__link"),this.disp=(new s.TextureLoader).load(this.elements[0].dataset.displacement)}createConfig(){this.work={scroll:{current:0,target:0,last:0,speed:.1,ease:.05}}}createImages(){this.elems=Array.from(this.elements,((e,t)=>new l.default({element:e,index:t,link:this.links[t],displacement:this.disp,template:this.template,geometry:this.geo,scene:this.group,screen:this.screen,viewport:this.viewport})))}onResize(){this.full_bounds=this.work_wrapper.getBoundingClientRect(),this.elems.forEach((e=>{e.onResize({screen:this.screen,viewport:this.viewport})})),this.work.scroll.limit=this.full_bounds.width-this.elems[0].bounds.width}show(){this.elems.forEach((e=>{e.show()}))}hide(){this.elems.forEach((e=>{e.hide()}))}onTouchDown({y:e}){this.work.scroll.position=this.work.scroll.current}onTouchMove({y:e,x:t}){const r=e.start-e.end,s=t.start-t.end;this.work.scroll.target=this.work.scroll.position-1.5*(r+s)}onTouchUp({y:e}){}onWheel({pixelY:e,pixelX:t}){this.work.scroll.target-=.6*t,this.work.scroll.target-=.6*e}update(){this.work.scroll.target=Object(function(){var e=new Error("Cannot find module 'gsaap'");throw e.code="MODULE_NOT_FOUND",e}()).clamp(-this.work.scroll.limit,0,this.work.scroll.target),this.work.scroll.current=Object(function(){var e=new Error("Cannot find module 'gsaap'");throw e.code="MODULE_NOT_FOUND",e}()).interpolate(this.work.scroll.current,this.work.scroll.target,this.work.scroll.ease),this.work_element.style[this.t_prefix]=`translateX(${this.work.scroll.current}px)`,this.work.scroll.current>-.01&&(this.work.scroll.current=0),this.elems.forEach((e=>{e.update(this.work.scroll.current,this.work.scroll.last)})),this.work.scroll.last=this.work.scroll.current}destroy(){this.scene.remove(this.group)}}}},(function(e){e.h=()=>"0d1d9274adea30311662"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFBQSxDQUFBQSxJQUFXQyxPQUFPOUQsS0FBS3VCLEtBQUtDLE9BQU9rQixNQUFPLEVBQUcxQyxLQUFLdUIsS0FBS0MsT0FBT0UsUUFDeEYxQixLQUFLdUIsS0FBS0MsT0FBT0MsUUFBVW9DLE9BQUFBLFdBQUFBLElBQUFBLEVBQUFBLElBQUFBLE1BQUFBLDhCQUFBQSxNQUFBQSxFQUFBQSxLQUFBQSxtQkFBQUEsQ0FBQUEsQ0FBQUEsSUFBV0UsWUFBWS9ELEtBQUt1QixLQUFLQyxPQUFPQyxRQUFTekIsS0FBS3VCLEtBQUtDLE9BQU9FLE9BQVExQixLQUFLdUIsS0FBS0MsT0FBT0ssTUFFdEg3QixLQUFLVyxhQUFhcUQsTUFBTWhFLEtBQUtHLFVBQWEsY0FBYUgsS0FBS3VCLEtBQUtDLE9BQU9DLGFBRXJFekIsS0FBS3VCLEtBQUtDLE9BQU9DLFNBQVcsTUFDN0J6QixLQUFLdUIsS0FBS0MsT0FBT0MsUUFBVSxHQUU3QnpCLEtBQUs4QixNQUFNVyxTQUFRSSxJQUFRQSxFQUFHZSxPQUFPNUQsS0FBS3VCLEtBQUtDLE9BQU9DLFFBQVN6QixLQUFLdUIsS0FBS0MsT0FBT0csS0FBSyxJQUVyRjNCLEtBQUt1QixLQUFLQyxPQUFPRyxLQUFPM0IsS0FBS3VCLEtBQUtDLE9BQU9DLE9BQzNDLENBTUF3QyxPQUFBQSxHQUVFakUsS0FBS0osTUFBTXNFLE9BQU9sRSxLQUFLQyxNQUN6QixrQkM3S0ZrRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhZXdhcnJlbi8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db250cm9sbGVyL3BhZ2VzL1dvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHJhZXdhcnJlbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAsIFRleHR1cmVMb2FkZXIgfSBmcm9tICd0aHJlZScgXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmsgXG57XG4gIGNvbnN0cnVjdG9yKHsgc2NlbmUsIHNjcmVlbiwgdmlld3BvcnQsIGdlbyB9KVxuICB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lIFxuICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuIFxuICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydCBcbiAgICB0aGlzLmdlbyA9IGdlbyBcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgR3JvdXAoKVxuXG4gICAgdGhpcy50X3ByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuICAgIHRoaXMuY3JlYXRlRWxlbWVudHMoKVxuICAgIHRoaXMuY3JlYXRlQ29uZmlnKClcbiAgICB0aGlzLmNyZWF0ZUltYWdlcygpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ3JvdXApXG5cbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgLyogXG4gICAgQ1JFQVRFLlxuICAqL1xuXG4gIGNyZWF0ZUVsZW1lbnRzKClcbiAge1xuICAgIHRoaXMud29ya19lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmsnKVxuICAgIHRoaXMud29ya193cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtfX3dyYXBwZXInKVxuXG4gICAgdGhpcy5lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrX19nYWxsZXJ5X19pbWFnZV9fZmlndXJlX19pbWFnZScpXG4gICAgdGhpcy5saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrX19nYWxsZXJ5X19pbWFnZV9fbGluaycpXG5cbiAgICB0aGlzLmRpc3AgPSBuZXcgVGV4dHVyZUxvYWRlcigpLmxvYWQodGhpcy5lbGVtZW50c1swXS5kYXRhc2V0LmRpc3BsYWNlbWVudClcbiAgfVxuXG4gIGNyZWF0ZUNvbmZpZygpXG4gIHtcbiAgICB0aGlzLndvcmsgPSB7IFxuICAgICAgc2Nyb2xsOiB7XG4gICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgIHRhcmdldDogMCxcbiAgICAgICAgbGFzdDogMCxcbiAgICAgICAgc3BlZWQ6IDAuMSxcbiAgICAgICAgZWFzZTogMC4wNSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVJbWFnZXMoKVxuICB7XG4gICAgdGhpcy5lbGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLmVsZW1lbnRzLFxuICAgICAgKGVsZW1lbnQsIGluZGV4KSA9PiBcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGxpbms6IHRoaXMubGlua3NbaW5kZXhdLFxuICAgICAgICAgICAgZGlzcGxhY2VtZW50OiB0aGlzLmRpc3AsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcbiAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlbywgXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCwgXG4gICAgICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLCBcbiAgICAgICAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9XG5cblxuICAvKiBcbiAgICBFVkVOVFMuXG4gICovXG5cbiAgb25SZXNpemUoKVxuICB7XG4gICAgdGhpcy5mdWxsX2JvdW5kcyA9IHRoaXMud29ya193cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLmVsZW1zLmZvckVhY2goXG4gICAgICBlbGVtZW50ID0+IFxuICAgICAge1xuICAgICAgICBlbGVtZW50Lm9uUmVzaXplKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLndvcmsuc2Nyb2xsLmxpbWl0ID0gdGhpcy5mdWxsX2JvdW5kcy53aWR0aCAtIHRoaXMuZWxlbXNbMF0uYm91bmRzLndpZHRoXG4gIH1cblxuICAvKiBcbiAgICBBTklNQVRJT05TLlxuICAqL1xuXG4gIHNob3coKVxuICB7XG4gICAgdGhpcy5lbGVtcy5mb3JFYWNoKGVsID0+IHsgZWwuc2hvdygpIH0gKVxuICB9XG5cbiAgaGlkZSgpXG4gIHtcbiAgICB0aGlzLmVsZW1zLmZvckVhY2goZWwgPT4geyBlbC5oaWRlKCkgfSlcbiAgfVxuXG4gIC8qIFxuICAgIEVWRU5UUy5cbiAgKi9cblxuICAgIG9uVG91Y2hEb3duKHsgeSB9KVxuICB7XG4gICAgdGhpcy53b3JrLnNjcm9sbC5wb3NpdGlvbiA9IHRoaXMud29yay5zY3JvbGwuY3VycmVudCBcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeSwgeCB9KVxuICB7XG4gICAgY29uc3QgZGlzdF95ID0geS5zdGFydCAtIHkuZW5kXG4gICAgY29uc3QgZGlzdF94ID0geC5zdGFydCAtIHguZW5kXG4gICBcbiAgICB0aGlzLndvcmsuc2Nyb2xsLnRhcmdldCA9IHRoaXMud29yay5zY3JvbGwucG9zaXRpb24gLSAoZGlzdF95ICsgZGlzdF94KSAqIDEuNVxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeSB9KVxuICB7XG5cbiAgfVxuXG4gIG9uV2hlZWwoeyBwaXhlbFksIHBpeGVsWCB9KVxuICB7XG4gICAgdGhpcy53b3JrLnNjcm9sbC50YXJnZXQgLT0gcGl4ZWxYICogMC42XG4gICAgdGhpcy53b3JrLnNjcm9sbC50YXJnZXQgLT0gcGl4ZWxZICogMC42XG4gIH1cblxuICAvKiBcbiAgICBVUERBVEUuXG4gICovXG5cbiAgdXBkYXRlKClcbiAge1xuICAgIHRoaXMud29yay5zY3JvbGwudGFyZ2V0ID0gZ3NhcC51dGlscy5jbGFtcCgtdGhpcy53b3JrLnNjcm9sbC5saW1pdCwgMCwgdGhpcy53b3JrLnNjcm9sbC50YXJnZXQpXG4gICAgdGhpcy53b3JrLnNjcm9sbC5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLndvcmsuc2Nyb2xsLmN1cnJlbnQsIHRoaXMud29yay5zY3JvbGwudGFyZ2V0LCB0aGlzLndvcmsuc2Nyb2xsLmVhc2UpXG5cbiAgICB0aGlzLndvcmtfZWxlbWVudC5zdHlsZVt0aGlzLnRfcHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy53b3JrLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuICAgIGlmKHRoaXMud29yay5zY3JvbGwuY3VycmVudCA+IC0wLjAxKVxuICAgICAgdGhpcy53b3JrLnNjcm9sbC5jdXJyZW50ID0gMFxuXG4gICAgdGhpcy5lbGVtcy5mb3JFYWNoKGVsID0+IHsgZWwudXBkYXRlKHRoaXMud29yay5zY3JvbGwuY3VycmVudCwgdGhpcy53b3JrLnNjcm9sbC5sYXN0KSB9KVxuXG4gICAgdGhpcy53b3JrLnNjcm9sbC5sYXN0ID0gdGhpcy53b3JrLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICAvKlxuICAgIERFU1RST1kuXG4gICovXG5cbiAgZGVzdHJveSgpXG4gIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmdyb3VwKVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGQxZDkyNzRhZGVhMzAzMTE2NjJcIikiXSwibmFtZXMiOlsiV29yayIsImNvbnN0cnVjdG9yIiwic2NlbmUiLCJzY3JlZW4iLCJ2aWV3cG9ydCIsImdlbyIsInRoaXMiLCJncm91cCIsIkdyb3VwIiwidF9wcmVmaXgiLCJQcmVmaXgiLCJjcmVhdGVFbGVtZW50cyIsImNyZWF0ZUNvbmZpZyIsImNyZWF0ZUltYWdlcyIsIm9uUmVzaXplIiwiYWRkIiwic2hvdyIsIndvcmtfZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndvcmtfd3JhcHBlciIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmtzIiwiZGlzcCIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwiZGF0YXNldCIsImRpc3BsYWNlbWVudCIsIndvcmsiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsInNwZWVkIiwiZWFzZSIsImVsZW1zIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudCIsImluZGV4IiwiRWxlbWVudCIsImxpbmsiLCJ0ZW1wbGF0ZSIsImdlb21ldHJ5IiwiZnVsbF9ib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmb3JFYWNoIiwibGltaXQiLCJ3aWR0aCIsImJvdW5kcyIsImVsIiwiaGlkZSIsIm9uVG91Y2hEb3duIiwieSIsInBvc2l0aW9uIiwib25Ub3VjaE1vdmUiLCJ4IiwiZGlzdF95Iiwic3RhcnQiLCJlbmQiLCJkaXN0X3giLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwicGl4ZWxYIiwidXBkYXRlIiwiZ3NhcCIsImNsYW1wIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsImRlc3Ryb3kiLCJyZW1vdmUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=