import{a as b,b as w,c as j}from"./chunk-5M45RFC7.js";import{$a as U,Aa as P,B as S,N as r,T as g,V as y,Wa as O,Y as C,aa as t,ba as i,ca as E,d as p,gb as F,hb as _,ja as I,m as u,q as f,s as h,sa as n,t as x,ta as l,ua as d,va as M,w as v,z as c}from"./chunk-INOZ2VHS.js";var $=(()=>{let e=class e{constructor(){this.http=c(O),this.loaderService=c(F)}getUser(a){return this.loaderService.show(),this.http.get(`https://jsonplaceholder.typicode.com/users/${a}`).pipe(f(()=>this.loaderService.hide()))}};e.\u0275fac=function(m){return new(m||e)},e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function D(s,e){if(s&1&&(t(0,"div",1),E(1,"fa-icon",2),t(2,"h5",3),n(3),i(),t(4,"p"),n(5),i()(),t(6,"div")(7,"p",4),n(8,"User information"),i(),t(9,"div")(10,"p"),n(11),i(),t(12,"p"),n(13),i()(),t(14,"p",4),n(15,"Address"),i(),t(16,"div")(17,"p"),n(18),i(),t(19,"p"),n(20),i()(),t(21,"p",4),n(22,"Company"),i(),t(23,"div")(24,"p"),n(25),i(),t(26,"p"),n(27),i(),t(28,"p"),n(29),i()()()),s&2){let o=I();r(),y("icon",o.faUser),r(2),l(o.user.name),r(2),l(o.user.username),r(6),d("Phone: ",o.user.phone,""),r(2),d("Email: ",o.user.email,""),r(5),d("Name: ",o.user.company.name,""),r(2),d("About: ",o.user.company.catchPhrase,""),r(5),d("City: ",o.user.address.city,""),r(2),M("Street: ",o.user.address.street," ",o.user.address.suite,""),r(2),d("Zip Code: ",o.user.address.zipcode,"")}}var X=(()=>{let e=class e{constructor(){this.route=c(U),this.userService=c($),this.helperService=c(_),this.destroy$=new p,this.faUser=j}ngOnInit(){this.helperService.updateCurrentPage("User"),this.route.params.pipe(x(this.destroy$),u(a=>!!a.id),h(a=>this.userService.getUser(a.id))).subscribe(a=>{a&&(this.user=a)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=S({type:e,selectors:[["app-user"]],standalone:!0,features:[P],decls:2,vars:1,consts:[[1,"p-4","d-flex","flex-column","flex-md-row","gap-5","user-card","justify-content-around","align-items-center","align-items-md-start"],[1,"card","p-5","d-flex","flex-column","align-items-center"],[1,"user-icon",3,"icon"],[1,"mt-5"],[1,"text-bold"]],template:function(m,A){m&1&&(t(0,"div",0),g(1,D,30,11),i()),m&2&&(r(),C(1,A.user?1:-1))},dependencies:[w,b],styles:[".user-card[_ngcontent-%COMP%], .user-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{color:#44637f}.user-card[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%]{font-size:100px;color:#44637f}.user-card[_ngcontent-%COMP%]   .text-bold[_ngcontent-%COMP%]{font-weight:700}"]});let s=e;return s})();export{X as UserComponent};