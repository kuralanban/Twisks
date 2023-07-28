"use strict";(self.webpackChunkFront_End=self.webpackChunkFront_End||[]).push([[659],{6659:(I,g,n)=>{n.r(g),n.d(g,{ExploreModule:()=>F});var c=n(6895),p=n(8616),x=n(9422),e=n(1571),d=n(6743),m=n(529);let f=(()=>{class t{constructor(o){this.http=o}exploreServicePage(){return this.http.get(`${d.N.baseUrl}/explore/${d.N.userId}`)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(m.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=n(3496),u=n(5412),h=n(9825),C=n(7009),M=n(9110);function O(t,r){if(1&t&&e._UZ(0,"img",13),2&t){const o=e.oxw().$implicit;e.s9C("src",o.fileUrl,e.LSH)}}function P(t,r){if(1&t&&e._UZ(0,"video",14),2&t){const o=e.oxw().$implicit;e.Q6J("src",o.fileUrl,e.LSH)("muted",!0)}}function y(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"div",8),e.YNc(1,O,1,1,"img",9),e.YNc(2,P,1,2,"video",10),e.TgZ(3,"div",11)(4,"button",12),e.NdJ("click",function(){const a=e.CHM(o).$implicit,s=e.oxw();return e.KtG(s.openImageDialog(a))}),e._uU(5,"Full View "),e.qZA()()()}if(2&t){const o=r.$implicit;e.xp6(1),e.Q6J("ngIf",!o.videoFile),e.xp6(1),e.Q6J("ngIf",o.videoFile)}}const S=[{path:"",children:[{path:"",component:(()=>{class t{constructor(o,i,l,a,s,D,Y){this.exploreService=o,this.homeService=i,this.dialog=l,this.websocket=a,this.notification=s,this.router=D,this.seoService=Y,this.imgRetrival="http://localhost:3000/uploads/"}ngOnInit(){this.setSeoData(),this.websocket.connectSockets(),this.exploreDetails()}exploreDetails(){this.exploreService.exploreServicePage().subscribe({next:o=>{this.explore=o.fetchedPosts,this.explore.map(i=>{i.videoFile="mp4"===i.fileName.split(".").pop()})},error:()=>{this.notification.open("Something went Wrong")}})}openImageDialog(o){this.dialog.open(x.S,{data:o})}setSeoData(){const o=this.router.snapshot.data;this.seoService.setSeoData(o.title||"Twisks | Home",o.description||"Welcome to Twisks")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(f),e.Y36(v.Y),e.Y36(u.uw),e.Y36(h.i),e.Y36(C.ux),e.Y36(p.gz),e.Y36(M.v))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-explore"]],decls:9,vars:1,consts:[["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"],[1,"explore-page"],[1,"explore-header"],[1,"explore-title"],[1,"explore-content"],[1,"explore-grid"],[1,"explore-item"],["class","image-wrapper",4,"ngFor","ngForOf"],[1,"image-wrapper"],["alt","Explore Image 1",3,"src",4,"ngIf"],["autoplay","",3,"src","muted",4,"ngIf"],[1,"overlay"],[1,"like-button",3,"click"],["alt","Explore Image 1",3,"src"],["autoplay","",3,"src","muted"]],template:function(o,i){1&o&&(e._UZ(0,"link",0),e.TgZ(1,"div",1)(2,"header",2)(3,"h1",3),e._uU(4,"Explore"),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6),e.YNc(8,y,6,2,"div",7),e.qZA()()()()),2&o&&(e.xp6(8),e.Q6J("ngForOf",i.explore))},dependencies:[c.sg,c.O5],styles:[".liked[_ngcontent-%COMP%]{color:red}.explore-page[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;position:relative;left:100px}.explore-header[_ngcontent-%COMP%]{text-align:center}.explore-title[_ngcontent-%COMP%]{font-size:28px;font-weight:700;color:#262626}.explore-content[_ngcontent-%COMP%]{padding:20px}.explore-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .explore-item[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:300px;transition:filter .3s;display:flex;object-fit:contain}.explore-item[_ngcontent-%COMP%]{transition:transform .3s ease;text-align:center;display:grid;grid-template-columns:repeat(3,1fr);gap:4px}.explore-item-title[_ngcontent-%COMP%]{font-size:16px;font-weight:700;text-align:left}.explore-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none;color:inherit}.image-wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.image-wrapper[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{position:relative;left:20px}.image-wrapper[_ngcontent-%COMP%]:hover{filter:brightness(80%);transform:scale(1.01)}.overlay[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;position:relative;bottom:180px}.image-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.like-button[_ngcontent-%COMP%], .share-button[_ngcontent-%COMP%]{padding:8px 12px;margin:4px;background-color:#000;color:#fff;border:none;border-radius:20px;font-size:19px;cursor:pointer}.like-button[_ngcontent-%COMP%]:hover, .share-button[_ngcontent-%COMP%]:hover{background-color:#fff;color:#8b0000}button[_ngcontent-%COMP%]{border:none}@media only screen and (max-width: 1200px){.explore-page[_ngcontent-%COMP%]{position:relative;left:0;width:100%}.explore-content[_ngcontent-%COMP%]{overflow-y:scroll;width:100%;display:grid;grid-template-columns:2fr 2fr}}"]}),t})(),canActivate:[n(1449).s]}]}];let b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(S),p.Bz]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,b]}),t})()}}]);