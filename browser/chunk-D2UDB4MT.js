import{a as c,b as H,c as z,d as G,e as J,f as K}from"./chunk-RHGHHFGS.js";import{a as U}from"./chunk-73LWOPVE.js";import{a as q}from"./chunk-GZQ7Q2Y5.js";import{a as $,b as j,h as A}from"./chunk-5M45RFC7.js";import{$ as L,$a as T,Aa as M,B as P,Ba as D,F as _,Fa as F,G as x,Ha as R,N as s,T as I,Ua as V,V as l,Y as E,_ as w,aa as p,ba as n,ca as C,cb as O,d as v,fb as k,ga as b,hb as B,ia as u,ja as h,s as S,sa as m,t as y,ua as f,z as d}from"./chunk-INOZ2VHS.js";var N=[{id:0,name:"Title",value:c.DESC},{id:1,name:"Title",value:c.ASC},{id:2,name:"Body",value:c.DESC,key:"Description"},{id:3,name:"Body",value:c.ASC,key:"Description"},{id:4,name:"User",value:c.DESC},{id:5,name:"User",value:c.ASC}];var W=(o,r)=>r.id,X=o=>["/post",o];function Y(o,r){if(o&1&&(p(0,"div",6)(1,"div",8)(2,"p")(3,"span"),m(4),n()(),p(5,"div",9)(6,"a",10),C(7,"fa-icon",11),n(),C(8,"app-user-card",12),n()(),p(9,"p")(10,"span"),m(11,"Title:"),n(),m(12),n(),p(13,"p")(14,"span"),m(15,"Description:"),n(),m(16),n()()),o&2){let a=r.$implicit,e=h();s(4),f("Post ",a.id,""),s(2),l("routerLink",D(6,X,a.id)),s(),l("icon",e.faEye),s(),l("id",a.userId),s(4),f(" ",a.title,""),s(4),f(" ",a.body,"")}}function Z(o,r){if(o&1){let a=b();p(0,"app-pagination",13),u("onChangePage",function(t){_(a);let i=h();return x(i.onPaginate(t))}),n()}if(o&2){let a=h();l("pagesLength",a.postsCopy.length)("currentPage",a.startItem/10+1)}}var Pe=(()=>{let r=class r{constructor(){this.postService=d(U),this.filterService=d(H),this.helperService=d(B),this.routerService=d(z),this.route=d(T),this.destroy$=new v,this.searchValue="",this.startItem=0,this.limit=10,this.posts=[],this.postsCopy=[],this.sortParams=N,this.faEye=A}ngOnInit(){this.helperService.updateCurrentPage("Post List"),this.postService.posts$.pipe(S(e=>(e?(this.posts=e,this.postsCopy=e):this.postService.getPosts().subscribe(),this.route.queryParams.pipe(y(this.destroy$))))).subscribe(e=>{this.posts&&this.posts.length&&(e.page?(this.updateRouting(e.page),this.startItem=(+e.page-1)*this.limit):this.updateRouting(1),e.search&&(this.searchValue=e.search,this.getFilteredPosts(e.search,!1)),e.sort&&e.sortId&&(this.selectedItem=this.sortParams.find(t=>t.id===+e.sortId),this.onSort(this.selectedItem)))})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getFilteredPosts(e,t=!0){let i={search:e||""};this.postsCopy=this.filterService.onFilterData(this.posts,e,"title","body"),t&&this.routerService.updateRouting(i)}onSort(e){let t={sort:e.name,dir:e.value,sortId:e.id};this.postsCopy=this.filterService.onSortData(this.postsCopy,e.name.toLowerCase(),e.value),this.routerService.updateRouting(t)}onPaginate(e){this.startItem=(e-1)*this.limit,this.updateRouting(e)}updateRouting(e){let t={page:e,limit:this.limit};this.routerService.updateRouting(t)}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=P({type:r,selectors:[["app-post-list"]],standalone:!0,features:[M],decls:11,vars:8,consts:[[1,"p-4"],[1,"mb-5"],[1,"d-flex","align-items-lg-center","flex-column","flex-lg-row","gap-4","pb-5"],["type","photo",3,"updateValue","searchValue"],[3,"onSelect","items","selectedItem"],[1,"d-flex","flex-wrap","justify-content-center","justify-content-md-between","gap-4"],[1,"card","p-4","d-flex","flex-column","gap-2"],[3,"pagesLength","currentPage"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center","gap-2"],[3,"routerLink"],[1,"eye-icon",3,"icon"],[3,"id"],[3,"onChangePage","pagesLength","currentPage"]],template:function(t,i){t&1&&(p(0,"div",0)(1,"h5",1),m(2,"Post List"),n(),p(3,"div",2)(4,"app-search",3),u("updateValue",function(g){return i.getFilteredPosts(g)}),n(),p(5,"app-select",4),u("onSelect",function(g){return i.onSort(g)}),n()(),p(6,"div",5),w(7,Y,17,8,"div",6,W),F(9,"slice"),n(),I(10,Z,1,2,"app-pagination",7),n()),t&2&&(s(4),l("searchValue",i.searchValue),s(),l("items",i.sortParams)("selectedItem",i.selectedItem),s(2),L(R(9,4,i.postsCopy,i.startItem,i.startItem+10)),s(3),E(10,i.postsCopy&&i.postsCopy.length?10:-1))},dependencies:[k,O,j,$,V,G,J,K,q],styles:[".card[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%]{color:#44637f}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#44637f}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}"]});let o=r;return o})();export{Pe as PostListComponent};