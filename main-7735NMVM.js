import{a as I,b as R,d as B,e as H,g as $,j as z,k as G}from"./chunk-5M45RFC7.js";import{$ as b,Aa as c,B as a,Ba as v,Fa as g,Ga as C,N as p,Sa as h,T as P,V as u,Va as k,Xa as w,Y as _,Ya as L,Z as x,Za as F,_ as O,aa as o,ab as A,ba as i,ca as r,cb as D,db as j,eb as T,fb as E,gb as U,hb as q,sa as l,ta as y,ua as S,z as f}from"./chunk-INOZ2VHS.js";var J=[{path:"",loadComponent:()=>import("./chunk-AT2VE5SE.js").then(t=>t.DashboardComponent)},{path:"album/:id",loadComponent:()=>import("./chunk-ZGBM6GWU.js").then(t=>t.AlbumComponent)},{path:"album-list",loadComponent:()=>import("./chunk-WMEONXFB.js").then(t=>t.AlbumListComponent)},{path:"photo/:id",loadComponent:()=>import("./chunk-KXIKRZUQ.js").then(t=>t.PhotoComponent)},{path:"photo-list",loadComponent:()=>import("./chunk-GBPEBXVQ.js").then(t=>t.PhotoListComponent)},{path:"post/:id",loadComponent:()=>import("./chunk-PU7XKQXA.js").then(t=>t.PostComponent)},{path:"post-list",loadComponent:()=>import("./chunk-D2UDB4MT.js").then(t=>t.PostListComponent)},{path:"user/:id",loadComponent:()=>import("./chunk-4BMD52F7.js").then(t=>t.UserComponent)},{path:"**",redirectTo:"",pathMatch:"full"}];var K={providers:[T(J),w(L())]};var N=[{name:"Dashboard",url:"/",icon:H},{name:"Albums",url:"/album-list",icon:B},{name:"Photos",url:"/photo-list",icon:z},{name:"Posts",url:"/post-list",icon:$}];var Y=t=>[t],Z=t=>({exact:t});function tt(t,e){if(t&1&&(o(0,"li")(1,"a",7),r(2,"fa-icon",8),o(3,"span",4),l(4),i()()()),t&2){let d=e.$implicit;p(),u("routerLink",v(4,Y,d.url))("routerLinkActiveOptions",v(6,Z,d.url==="/")),p(),u("icon",d.icon),p(2),y(d.name)}}var Q=(()=>{let e=class e{constructor(){this.faSun=G,this.items=N}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-left-sidebar"]],standalone:!0,features:[c],decls:10,vars:1,consts:[[1,"w-100","h-100","left-sidebar"],[1,"d-flex","flex-column","h-100","bg-primary-subtle","position-fixed","p-4","px-2","top-0","start-0","bottom-0"],[1,"d-flex","align-items-center","justify-content-center","justify-content-md-start","ps-md-1","gap-3"],[1,"d-flex","align-items-center","justify-content-center","h4","sun-icon",3,"icon"],[1,"d-none","d-md-block"],[1,"mt-5"],[1,"d-flex","flex-column","gap-2","list-unstyled"],["routerLinkActive","active",1,"text-decoration-none","p-2","d-flex","align-items-center","justify-content-center","justify-content-md-start","gap-2","rounded-1",3,"routerLink","routerLinkActiveOptions"],[1,"navbar-icon",3,"icon"]],template:function(n,s){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),r(3,"fa-icon",3),o(4,"h3",4),l(5,"My App"),i()(),o(6,"nav",5)(7,"ul",6),O(8,tt,5,8,"li",null,x),i()()()()),n&2&&(p(3),u("icon",s.faSun),p(5),b(s.items))},dependencies:[E,D,j,R,I],styles:[".left-sidebar[_ngcontent-%COMP%]{min-width:243px}.left-sidebar[_ngcontent-%COMP%]   .position-fixed[_ngcontent-%COMP%]{right:calc(100% - 243px)}.left-sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .left-sidebar[_ngcontent-%COMP%]   .sun-icon[_ngcontent-%COMP%]{color:#44637f;margin:0}.left-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#44637f!important}.left-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .left-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#44637f}.left-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .left-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%], .left-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .left-sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .navbar-icon[_ngcontent-%COMP%]{color:#fff!important}@media (max-width: 768px){.left-sidebar[_ngcontent-%COMP%]{min-width:56px}.left-sidebar[_ngcontent-%COMP%]   .position-fixed[_ngcontent-%COMP%]{right:calc(100% - 56px)}}"]});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.helperService=f(q)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-header"]],standalone:!0,features:[c],decls:5,vars:3,consts:[[1,"position-relative","z-3"],[1,"py-3","py-md-4","px-4","header","position-fixed"],[1,"text-white"]],template:function(n,s){n&1&&(o(0,"div",0)(1,"div",1)(2,"h2",2),l(3),g(4,"async"),i()()()),n&2&&(p(3),S("",C(4,1,s.helperService.currentPage$)," Page"))},dependencies:[h],styles:[".header[_ngcontent-%COMP%]{background:#44637f;top:0;right:0;left:243px;bottom:calc(100% - 90px)}@media (max-width: 768px){.header[_ngcontent-%COMP%]{bottom:calc(100% - 70px);left:56px}}"]});let t=e;return t})();function et(t,e){t&1&&(o(0,"div",0),r(1,"div",1),i())}var W=(()=>{let e=class e{constructor(){this.loaderService=f(U)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-loading-spinner"]],standalone:!0,features:[c],decls:2,vars:3,consts:[[1,"d-flex","align-items-center","justify-content-center","h-100","content","bg-white","position-absolute","top-0","start-0","bottom-0","end-0","z-3"],[1,"loader"]],template:function(n,s){n&1&&(P(0,et,2,0,"div",0),g(1,"async")),n&2&&_(0,C(1,1,s.loaderService.loading$)?0:-1)},dependencies:[h],styles:[".loader[_ngcontent-%COMP%]{width:80px;padding:8px;aspect-ratio:1;border-radius:50%;background:#cfe2ff;--_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;animation:_ngcontent-%COMP%_l3 1s infinite linear}@keyframes _ngcontent-%COMP%_l3{to{transform:rotate(1turn)}}"]});let t=e;return t})();var X=(()=>{let e=class e{constructor(){this.title="kami-test-app"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a({type:e,selectors:[["app-root"]],standalone:!0,features:[c],decls:7,vars:0,consts:[[1,"d-flex","h-100"],[1,"d-flex","flex-column","w-100","content"],[1,"h-100","position-relative"]],template:function(n,s){n&1&&(o(0,"div",0),r(1,"app-left-sidebar"),o(2,"div",1),r(3,"app-header"),o(4,"div",2),r(5,"app-loading-spinner")(6,"router-outlet"),i()()())},dependencies:[k,A,Q,V,W],styles:[".content[_ngcontent-%COMP%]{padding-top:90px}@media (max-width: 768px){.content[_ngcontent-%COMP%]{padding-top:70px}}"]});let t=e;return t})();F(X,K).catch(t=>console.error(t));