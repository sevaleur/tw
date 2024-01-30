/*! For license information please see main.04814ea947e890554e3b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetraewarren("main",{"./app/components/Canvas/Controller/pages/Home/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r("./node_modules/three/build/three.module.js");Object(function(){var e=new Error("Cannot find module './Portrait'");throw e.code="MODULE_NOT_FOUND",e}());var o=r("./app/components/Canvas/Controller/pages/Home/Background/index.js"),i=r("./app/components/Canvas/Controller/pages/Home/Circle/index.js");class h{constructor({scene:e,screen:t,viewport:r,geo:o}){this.scene=e,this.screen=t,this.viewport=r,this.geo=o,this.dGroup=new s.Group,this.sGroup=new s.Group,this.createElements(),this.createHeader(),this.createFeaturedWork(),this.onResize(),this.scene.add(this.dGroup,this.sGroup)}createElements(){this.home_element=document.querySelector(".home"),this.home_wrapper=document.querySelector(".home__wrapper"),this.headerImage=document.querySelector("img.home__header__portrait__figure__image"),this.background=document.querySelector(".home__showcase"),this.workImages=document.querySelectorAll("img.home__showcase__gallery__image__figure__image")}createHeader(){this.portrait=new Object(function(){var e=new Error("Cannot find module './Portrait'");throw e.code="MODULE_NOT_FOUND",e}())({element:this.headerImage,template:this.template,geometry:this.geo,scene:this.dGroup,screen:this.screen,viewport:this.viewport})}createFeaturedWork(){this.background=new o.default({element:this.background,geometry:this.geo,scene:this.sGroup,screen:this.screen,viewport:this.viewport}),this.works=Array.from(this.workImages,((e,t)=>new i.default({element:e,index:t,template:this.template,geometry:this.geo,scene:this.sGroup,screen:this.screen,viewport:this.viewport})))}onResize(){this.portrait.onResize({screen:this.screen,viewport:this.viewport}),this.background.onResize({screen:this.screen,viewport:this.viewport}),this.works.forEach((e=>{e.onResize({screen:this.screen,viewport:this.viewport})}))}show(){this.portrait.show(),this.background.show(),this.works.forEach((e=>{e.show()}))}hide(){this.portrait.hide(),this.background.hide(),this.works.forEach((e=>{e.hide()}))}update(e){const t=e.current/this.screen.height*this.viewport.height;this.dGroup.position.y=.9*t,this.sGroup.position.y=1*t,this.portrait.update(),this.background.update(e),this.works.forEach((e=>{e.update()}))}destroy(){this.scene.remove(this.dGroup),this.scene.remove(this.sGroup)}}}},(function(e){e.h=()=>"11d9ac1a2bf0519e2a92"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4QyxDQU1BTSxPQUFBQSxHQUVFdEMsS0FBS0osTUFBTTJDLE9BQU92QyxLQUFLQyxRQUN2QkQsS0FBS0osTUFBTTJDLE9BQU92QyxLQUFLRyxPQUN6QixrQkNqS0ZxQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhZXdhcnJlbi8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db250cm9sbGVyL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHJhZXdhcnJlbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAgfSBmcm9tICd0aHJlZScgXG5cbmltcG9ydCBQb3J0cmFpdCBmcm9tICcuL1BvcnRyYWl0J1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kJ1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBcbntcbiAgY29uc3RydWN0b3IoeyBzY2VuZSwgc2NyZWVuLCB2aWV3cG9ydCwgZ2VvIH0pXG4gIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmUgXG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW4gXG4gICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0IFxuICAgIHRoaXMuZ2VvID0gZ2VvIFxuXG4gICAgdGhpcy5kR3JvdXAgPSBuZXcgR3JvdXAoKVxuICAgIHRoaXMuc0dyb3VwID0gbmV3IEdyb3VwKClcblxuICAgIHRoaXMuY3JlYXRlRWxlbWVudHMoKVxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKClcbiAgICB0aGlzLmNyZWF0ZUZlYXR1cmVkV29yaygpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZEdyb3VwLCB0aGlzLnNHcm91cClcbiAgfVxuXG4gIC8qIFxuICAgIENSRUFURS5cbiAgKi9cblxuICBjcmVhdGVFbGVtZW50cygpXG4gIHtcbiAgICB0aGlzLmhvbWVfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJylcbiAgICB0aGlzLmhvbWVfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX193cmFwcGVyJylcblxuICAgIHRoaXMuaGVhZGVySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuaG9tZV9faGVhZGVyX19wb3J0cmFpdF9fZmlndXJlX19pbWFnZScpXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX3Nob3djYXNlJylcbiAgICB0aGlzLndvcmtJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuaG9tZV9fc2hvd2Nhc2VfX2dhbGxlcnlfX2ltYWdlX19maWd1cmVfX2ltYWdlJylcbiAgfVxuXG4gIGNyZWF0ZUhlYWRlcigpXG4gIHtcbiAgICB0aGlzLnBvcnRyYWl0ID0gbmV3IFBvcnRyYWl0KFxuICAgICAge1xuICAgICAgICBlbGVtZW50OiB0aGlzLmhlYWRlckltYWdlLCBcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlbywgXG4gICAgICAgIHNjZW5lOiB0aGlzLmRHcm91cCwgXG4gICAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sIFxuICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgICAgfVxuICAgIClcbiAgfVxuICBcbiAgY3JlYXRlRmVhdHVyZWRXb3JrKClcbiAge1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKFxuICAgICAge1xuICAgICAgICBlbGVtZW50OiB0aGlzLmJhY2tncm91bmQsIFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW8sIFxuICAgICAgICBzY2VuZTogdGhpcy5zR3JvdXAsIFxuICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLCBcbiAgICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLndvcmtzID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMud29ya0ltYWdlcywgXG4gICAgICAoZWxlbWVudCwgaW5kZXgpID0+IFxuICAgICAge1xuICAgICAgICByZXR1cm4gbmV3IENpcmNsZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50LCBcbiAgICAgICAgICAgIGluZGV4LCBcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLCBcbiAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlbywgXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zR3JvdXAsIFxuICAgICAgICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlbiwgXG4gICAgICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIC8qIFxuICAgIEVWRU5UUy5cbiAgKi9cblxuICBvblJlc2l6ZSgpXG4gIHtcbiAgICB0aGlzLnBvcnRyYWl0Lm9uUmVzaXplKFxuICAgICAge1xuICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLFxuICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLmJhY2tncm91bmQub25SZXNpemUoXG4gICAgICB7XG4gICAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sIFxuICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMud29ya3MuZm9yRWFjaChcbiAgICAgIGVsID0+IFxuICAgICAge1xuICAgICAgICBlbC5vblJlc2l6ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLCBcbiAgICAgICAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgLyogXG4gICAgQU5JTUFUSU9OUy5cbiAgKi9cblxuICBzaG93KClcbiAge1xuICAgIHRoaXMucG9ydHJhaXQuc2hvdygpXG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNob3coKVxuICAgIHRoaXMud29ya3MuZm9yRWFjaChlbCA9PiB7IGVsLnNob3coKSB9KVxuICB9XG5cbiAgaGlkZSgpXG4gIHtcbiAgICB0aGlzLnBvcnRyYWl0LmhpZGUoKVxuICAgIHRoaXMuYmFja2dyb3VuZC5oaWRlKClcbiAgICB0aGlzLndvcmtzLmZvckVhY2goZWwgPT4geyBlbC5oaWRlKCkgfSlcbiAgfVxuXG4gIC8qIFxuICAgIFVQREFURS5cbiAgKi9cblxuICB1cGRhdGUoc2Nyb2xsKVxuICB7XG4gICAgY29uc3QgY3VycmVudCA9IChzY3JvbGwuY3VycmVudCAvIHRoaXMuc2NyZWVuLmhlaWdodCkgKiB0aGlzLnZpZXdwb3J0LmhlaWdodFxuXG4gICAgdGhpcy5kR3JvdXAucG9zaXRpb24ueSA9IGN1cnJlbnQgKiAwLjlcbiAgICB0aGlzLnNHcm91cC5wb3NpdGlvbi55ID0gY3VycmVudCAqIDEuMFxuXG4gICAgdGhpcy5wb3J0cmFpdC51cGRhdGUoKVxuICAgIHRoaXMuYmFja2dyb3VuZC51cGRhdGUoc2Nyb2xsKVxuICAgIHRoaXMud29ya3MuZm9yRWFjaChlbCA9PiB7IGVsLnVwZGF0ZSgpIH0pXG4gIH1cblxuICAvKlxuICAgIERFU1RST1kuXG4gICovXG5cbiAgZGVzdHJveSgpXG4gIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmRHcm91cClcbiAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLnNHcm91cClcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjExZDlhYzFhMmJmMDUxOWUyYTkyXCIpIl0sIm5hbWVzIjpbIkhvbWUiLCJjb25zdHJ1Y3RvciIsInNjZW5lIiwic2NyZWVuIiwidmlld3BvcnQiLCJnZW8iLCJ0aGlzIiwiZEdyb3VwIiwiR3JvdXAiLCJzR3JvdXAiLCJjcmVhdGVFbGVtZW50cyIsImNyZWF0ZUhlYWRlciIsImNyZWF0ZUZlYXR1cmVkV29yayIsIm9uUmVzaXplIiwiYWRkIiwiaG9tZV9lbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaG9tZV93cmFwcGVyIiwiaGVhZGVySW1hZ2UiLCJiYWNrZ3JvdW5kIiwid29ya0ltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3J0cmFpdCIsIlBvcnRyYWl0IiwiZWxlbWVudCIsInRlbXBsYXRlIiwiZ2VvbWV0cnkiLCJCYWNrZ3JvdW5kIiwid29ya3MiLCJBcnJheSIsImZyb20iLCJpbmRleCIsIkNpcmNsZSIsImZvckVhY2giLCJlbCIsInNob3ciLCJoaWRlIiwidXBkYXRlIiwic2Nyb2xsIiwiY3VycmVudCIsImhlaWdodCIsInBvc2l0aW9uIiwieSIsImRlc3Ryb3kiLCJyZW1vdmUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=