import{a as I}from"./chunk-UQXJZOD3.js";import{a as E}from"./chunk-JT3Q33VC.js";import{a as L}from"./chunk-73LWOPVE.js";import{a as A,b as F,d as h,g as m,j as u}from"./chunk-5M45RFC7.js";import{$ as C,Aa as O,B as b,Ba as w,N as n,T as g,V as d,Y as v,Z as y,_ as S,aa as r,ba as s,ca as x,cb as D,d as f,db as $,fb as k,hb as j,ja as _,sa as l,t as p,ta as P,va as M,z as a}from"./chunk-INOZ2VHS.js";var R=e=>[e];function z(e,i){if(e&1&&(r(0,"div",3)(1,"a",4),x(2,"fa-icon",5),s(),r(3,"h4"),l(4),s(),r(5,"p",6),l(6),s()()),e&2){let o=i.$implicit;n(),d("routerLink",w(5,R,o.url)),n(),d("icon",o.icon),n(2),M("",o.count," ",o.name,""),n(2),P(o.description)}}function B(e,i){if(e&1&&(r(0,"div",0)(1,"h2",1),l(2,"We offer you following services"),s(),r(3,"div",2),S(4,z,7,7,"div",3,y),s()()),e&2){let o=_();n(4),C(o.cards)}}var ee=(()=>{let i=class i{constructor(){this.albumService=a(I),this.photoservice=a(E),this.postService=a(L),this.helperService=a(j),this.faFolderOpen=h,this.faImages=u,this.faSignsPost=m,this.destroy$=new f,this.albums=[],this.photos=[],this.posts=[],this.cards=[]}ngOnInit(){this.helperService.updateCurrentPage("Dashboard"),this.albumService.albums$.pipe(p(this.destroy$)).subscribe(t=>{t?(this.albums=t,this.updateData()):this.albumService.getAlbums().subscribe()}),this.photoservice.photos$.pipe(p(this.destroy$)).subscribe(t=>{t?(this.photos=t,this.updateData()):this.photoservice.getPhotos().subscribe()}),this.postService.posts$.pipe(p(this.destroy$)).subscribe(t=>{t?(this.posts=t,this.updateData()):this.postService.getPosts().subscribe()})}updateData(){this.cards=[{name:"albums",url:"/album-list",count:this.albums.length,description:"A photo album is a series of photographic prints collected by an individual person or family in the form of a book.",icon:h},{name:"photos",url:"/photo-list",count:this.photos.length,description:"A photo is an image created by light falling on a photosensitive surface, usually photographic film or an electronic image sensor.",icon:u},{name:"posts",url:"/post-list",count:this.posts.length,description:"A post refers to any social media status update, photo, or video, or an item shared on a blog or forum",icon:m}]}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};i.\u0275fac=function(c){return new(c||i)},i.\u0275cmp=b({type:i,selectors:[["app-dashboard"]],standalone:!0,features:[O],decls:1,vars:1,consts:[[1,"p-4","dashboard-wrapper"],[1,"text-center","mb-5"],[1,"d-flex","flex-wrap","justify-content-center","gap-4"],[1,"card","p-4","d-flex","flex-column","justify-content-center","align-items-center","gap-2"],["routerLinkActive","router-link-active",3,"routerLink"],[1,"card-icon",3,"icon"],[1,"text-center"]],template:function(c,T){c&1&&g(0,B,6,0,"div",0),c&2&&v(0,T.cards.length?0:-1)},dependencies:[F,A,k,D,$],styles:[".dashboard-wrapper[_ngcontent-%COMP%]{color:#44637f}.dashboard-wrapper[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{font-size:30px}.dashboard-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .dashboard-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#44637f}.dashboard-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700}"]});let e=i;return e})();export{ee as DashboardComponent};