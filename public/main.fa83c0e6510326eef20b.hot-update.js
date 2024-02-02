/*! For license information please see main.fa83c0e6510326eef20b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetraewarren("main",{"./app/components/Canvas/Controller/pages/Work/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var r=s("./node_modules/three/build/three.module.js"),o=s("./app/components/Canvas/Controller/pages/Work/Element/index.js");Object(function(){var e=new Error("Cannot find module '/img/displacement.jpeg'");throw e.code="MODULE_NOT_FOUND",e}());class i{constructor({scene:e,screen:t,viewport:s,geo:o}){this.scene=e,this.screen=t,this.viewport=s,this.geo=o,this.group=new r.Group,this.createElements(),this.createImages(),this.onResize(),this.scene.add(this.group),this.show()}createElements(){this.home_element=document.querySelector(".work"),this.home_wrapper=document.querySelector(".work__wrapper"),this.elements=document.querySelectorAll(".work__gallery__image__figure__image")}createImages(){this.elems=Array.from(this.elements,((e,t)=>new o.default({element:e,index:t,displacement:Object(function(){var e=new Error("Cannot find module '/img/displacement.jpeg'");throw e.code="MODULE_NOT_FOUND",e}()),template:this.template,geometry:this.geo,scene:this.group,screen:this.screen,viewport:this.viewport})))}onResize(){this.elems.forEach((e=>{e.onResize({screen:this.screen,viewport:this.viewport})}))}show(){this.elems.forEach((e=>{e.show()}))}hide(){this.elems.forEach((e=>{e.hide()}))}update(e){this.elems.forEach((e=>{e.update()}))}destroy(){this.scene.remove(this.group)}}}},(function(e){e.h=()=>"ad62867ea09591cbd067"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYTgzYzBlNjUxMDMyNmVlZjIwYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eVlBTWUsTUFBTUEsRUFFbkJDLFdBQUFBLEVBQVksTUFBRUMsRUFBSyxPQUFFQyxFQUFNLFNBQUVDLEVBQVEsSUFBRUMsSUFFckNDLEtBQUtKLE1BQVFBLEVBQ2JJLEtBQUtILE9BQVNBLEVBQ2RHLEtBQUtGLFNBQVdBLEVBQ2hCRSxLQUFLRCxJQUFNQSxFQUVYQyxLQUFLQyxNQUFRLElBQUlDLEVBQUFBLE1BRWpCRixLQUFLRyxpQkFDTEgsS0FBS0ksZUFFTEosS0FBS0ssV0FFTEwsS0FBS0osTUFBTVUsSUFBSU4sS0FBS0MsT0FFcEJELEtBQUtPLE1BQ1AsQ0FNQUosY0FBQUEsR0FFRUgsS0FBS1EsYUFBZUMsU0FBU0MsY0FBYyxTQUMzQ1YsS0FBS1csYUFBZUYsU0FBU0MsY0FBYyxrQkFFM0NWLEtBQUtZLFNBQVdILFNBQVNJLGlCQUFpQix1Q0FDNUMsQ0FFQVQsWUFBQUEsR0FFRUosS0FBS2MsTUFBUUMsTUFBTUMsS0FDakJoQixLQUFLWSxVQUNMLENBQUNLLEVBQVNDLElBRUQsSUFBSUMsRUFBQUEsUUFDVCxDQUNFRixVQUNBQyxRQUNBRSxhQUFjQyxPQUFBQSxXQUFBQSxJQUFBQSxFQUFBQSxJQUFBQSxNQUFBQSwrQ0FBQUEsTUFBQUEsRUFBQUEsS0FBQUEsbUJBQUFBLENBQUFBLENBQUFBLElBQ2RDLFNBQVV0QixLQUFLc0IsU0FDZkMsU0FBVXZCLEtBQUtELElBQ2ZILE1BQU9JLEtBQUtDLE1BQ1pKLE9BQVFHLEtBQUtILE9BQ2JDLFNBQVVFLEtBQUtGLFlBS3pCLENBT0FPLFFBQUFBLEdBRUVMLEtBQUtjLE1BQU1VLFNBQ1RQLElBRUVBLEVBQVFaLFNBQ04sQ0FDRVIsT0FBUUcsS0FBS0gsT0FDYkMsU0FBVUUsS0FBS0YsVUFFbEIsR0FHUCxDQU1BUyxJQUFBQSxHQUVFUCxLQUFLYyxNQUFNVSxTQUFRQyxJQUFRQSxFQUFHbEIsTUFBTSxHQUN0QyxDQUVBbUIsSUFBQUEsR0FFRTFCLEtBQUtjLE1BQU1VLFNBQVFDLElBQVFBLEVBQUdDLE1BQU0sR0FDdEMsQ0FNQUMsTUFBQUEsQ0FBT0MsR0FNTDVCLEtBQUtjLE1BQU1VLFNBQVFDLElBQVFBLEVBQUdFLFFBQVEsR0FDeEMsQ0FNQUUsT0FBQUEsR0FFRTdCLEtBQUtKLE1BQU1rQyxPQUFPOUIsS0FBS0MsTUFDekIsa0JDbkhGOEIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYWV3YXJyZW4vLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ29udHJvbGxlci9wYWdlcy9Xb3JrL2luZGV4LmpzIiwid2VicGFjazovL3RyYWV3YXJyZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb3VwIH0gZnJvbSAndGhyZWUnIFxuXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL0VsZW1lbnQnXG5cbmltcG9ydCBkaXNwIGZyb20gJy9pbWcvZGlzcGxhY2VtZW50LmpwZWcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmsgXG57XG4gIGNvbnN0cnVjdG9yKHsgc2NlbmUsIHNjcmVlbiwgdmlld3BvcnQsIGdlbyB9KVxuICB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lIFxuICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuIFxuICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydCBcbiAgICB0aGlzLmdlbyA9IGdlbyBcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgR3JvdXAoKVxuXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50cygpXG4gICAgdGhpcy5jcmVhdGVJbWFnZXMoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdyb3VwKVxuXG4gICAgdGhpcy5zaG93KClcbiAgfVxuXG4gIC8qIFxuICAgIENSRUFURS5cbiAgKi9cblxuICBjcmVhdGVFbGVtZW50cygpXG4gIHtcbiAgICB0aGlzLmhvbWVfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrJylcbiAgICB0aGlzLmhvbWVfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrX193cmFwcGVyJylcblxuICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud29ya19fZ2FsbGVyeV9faW1hZ2VfX2ZpZ3VyZV9faW1hZ2UnKVxuICB9XG5cbiAgY3JlYXRlSW1hZ2VzKClcbiAge1xuICAgIHRoaXMuZWxlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5lbGVtZW50cyxcbiAgICAgIChlbGVtZW50LCBpbmRleCkgPT4gXG4gICAgICB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBkaXNwbGFjZW1lbnQ6IGRpc3AsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcbiAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlbywgXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCwgXG4gICAgICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLCBcbiAgICAgICAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9XG5cblxuICAvKiBcbiAgICBFVkVOVFMuXG4gICovXG5cbiAgb25SZXNpemUoKVxuICB7XG4gICAgdGhpcy5lbGVtcy5mb3JFYWNoKFxuICAgICAgZWxlbWVudCA9PiBcbiAgICAgIHtcbiAgICAgICAgZWxlbWVudC5vblJlc2l6ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLFxuICAgICAgICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnQsXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgLyogXG4gICAgQU5JTUFUSU9OUy5cbiAgKi9cblxuICBzaG93KClcbiAge1xuICAgIHRoaXMuZWxlbXMuZm9yRWFjaChlbCA9PiB7IGVsLnNob3coKSB9IClcbiAgfVxuXG4gIGhpZGUoKVxuICB7XG4gICAgdGhpcy5lbGVtcy5mb3JFYWNoKGVsID0+IHsgZWwuaGlkZSgpIH0pXG4gIH1cblxuICAvKiBcbiAgICBVUERBVEUuXG4gICovXG5cbiAgdXBkYXRlKHNjcm9sbClcbiAge1xuICAgIC8vY29uc3QgY3VycmVudCA9IChzY3JvbGwuY3VycmVudCAvIHRoaXMuc2NyZWVuLmhlaWdodCkgKiB0aGlzLnZpZXdwb3J0LmhlaWdodFxuICAgIFxuICAgIC8qIHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IGN1cnJlbnQgKi9cblxuICAgIHRoaXMuZWxlbXMuZm9yRWFjaChlbCA9PiB7IGVsLnVwZGF0ZSgpIH0pXG4gIH1cblxuICAvKlxuICAgIERFU1RST1kuXG4gICovXG5cbiAgZGVzdHJveSgpXG4gIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmdyb3VwKVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWQ2Mjg2N2VhMDk1OTFjYmQwNjdcIikiXSwibmFtZXMiOlsiV29yayIsImNvbnN0cnVjdG9yIiwic2NlbmUiLCJzY3JlZW4iLCJ2aWV3cG9ydCIsImdlbyIsInRoaXMiLCJncm91cCIsIkdyb3VwIiwiY3JlYXRlRWxlbWVudHMiLCJjcmVhdGVJbWFnZXMiLCJvblJlc2l6ZSIsImFkZCIsInNob3ciLCJob21lX2VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJob21lX3dyYXBwZXIiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtcyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnQiLCJpbmRleCIsIkVsZW1lbnQiLCJkaXNwbGFjZW1lbnQiLCJkaXNwIiwidGVtcGxhdGUiLCJnZW9tZXRyeSIsImZvckVhY2giLCJlbCIsImhpZGUiLCJ1cGRhdGUiLCJzY3JvbGwiLCJkZXN0cm95IiwicmVtb3ZlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9