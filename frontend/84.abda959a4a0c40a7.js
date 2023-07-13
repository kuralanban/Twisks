"use strict";(self.webpackChunkFront_End=self.webpackChunkFront_End||[]).push([[84],{7084:(W,f,a)=>{a.r(f),a.d(f,{HomeModule:()=>B});var p=a(6895),d=a(5412),g=a(8616),u=a(9422),l=a(6743),w=a(7398),t=a(1571);let b=(()=>{class i{constructor(e){this.memoriesData=e,this.imgRetrivalPath="http://localhost:3000/uploads/"}ngOnInit(){this.memoriesImage=this.memoriesData.memories}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-h-memories"]],decls:18,vars:4,consts:[[1,"twisks-reminder"],[1,"title"],[1,"post-container"],[1,"post"],[1,"line-container"],[1,"line"],["alt","Instagram Post",3,"src"],[1,"post-details"],[1,"caption"],[1,"date"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"One Year Ago On This Day!!"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"h4"),t._uU(6),t.qZA(),t.TgZ(7,"div",4),t._UZ(8,"div",5),t.qZA(),t._UZ(9,"br")(10,"img",6),t.TgZ(11,"div",7)(12,"p",8),t._uU(13,"Revisit the moment"),t.qZA(),t.TgZ(14,"p",8),t._uU(15),t.qZA(),t.TgZ(16,"p",9),t._uU(17),t.qZA()()()()()),2&e&&(t.xp6(6),t.hij("Spotlight on ",o.memoriesImage.username,""),t.xp6(4),t.Q6J("src",o.imgRetrivalPath+o.memoriesImage.fileName,t.LSH),t.xp6(5),t.hij('Your caption on that day " ',o.memoriesImage.caption,' !! "'),t.xp6(2),t.hij("Year ",o.memoriesImage.createdAt.slice(0,4),"!!"))},styles:[".twisks-reminder[_ngcontent-%COMP%]{text-align:center;height:650px;width:800px;background-color:#e8e8f5}.twisks-reminder[_ngcontent-%COMP%]:hover{background-color:#e8e8f5;filter:brightness(100%)}.title[_ngcontent-%COMP%]{font-size:28px;color:purple;padding:10px}.post-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}h4[_ngcontent-%COMP%]{font-weight:bolder;font-size:20px}.post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:380px;width:500px;object-fit:cover;border-radius:20px;transition:transform .9s ease}.post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.3)}.post-details[_ngcontent-%COMP%]{margin-top:10px}.caption[_ngcontent-%COMP%]{font-weight:700}.date[_ngcontent-%COMP%]{color:#888;font-size:15px}.line-container[_ngcontent-%COMP%]{width:500px;height:7px;background-color:#aeaaaa9e;position:relative;overflow:hidden;border-radius:5px}.line[_ngcontent-%COMP%]{width:0;height:90%;background-color:purple;position:absolute;animation:_ngcontent-%COMP%_line-animation 8s linear infinite}@keyframes _ngcontent-%COMP%_line-animation{0%{width:0}to{width:100%}}"]}),i})();var m=a(3496),_=a(9825),v=a(7009),M=a(9300),x=a(4004),S=a(5577),C=a(1481);let O=(()=>{class i{constructor(e,o,n,r){this.titleService=e,this.metaService=o,this.router=n,this.document=r}setSeoData(e,o){this.titleService.setTitle(e),this.metaService.updateTag({name:"description",content:o})}updateSeoDataOnRouteChange(){this.router.events.pipe((0,M.h)(e=>e instanceof g.m2),(0,x.U)(()=>this.router.routerState.root),(0,x.U)(e=>{for(;e.firstChild;)e=e.firstChild;return e}),(0,S.z)(e=>e.data)).subscribe(e=>{this.setSeoData(e.title||"Default Title",e.description||"Default Description")})}initializeSeoData(){this.updateSeoDataOnRouteChange(),this.setSeoData(this.titleService.getTitle(),this.getMetaDescription())}getMetaDescription(){const e=this.document.querySelector('meta[name="description"]');return e?e.getAttribute("content"):""}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(C.Dx),t.LFG(C.h_),t.LFG(g.F0),t.LFG(p.K0))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var k=a(529);let P=(()=>{class i{constructor(e){this.http=e}uploadStoryDetails(){return this.http.get(`${l.N.baseUrl}/user/userDetails/${sessionStorage.getItem("userId")}`)}createNewStory(e){return this.http.post(`${l.N.baseUrl}/story/createStory`,e)}viewStory(){return this.http.get(`${l.N.baseUrl}/story/viewStory/${sessionStorage.getItem("userId")}`)}viewNextStory(){return this.http.get(`${l.N.baseUrl}/story/viewNextStory/${sessionStorage.getItem("userId")}`)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(k.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function Z(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"div",3)(2,"h4"),t._uU(3,"Create your new story here"),t.qZA()(),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.TgZ(6,"p",6),t._uU(7,"Choose a photo"),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"button",7),t._uU(10," Choose from your Device "),t.TgZ(11,"input",8),t.NdJ("change",function(n){t.CHM(e);const r=t.oxw();return t.KtG(r.onFileSelected(n))}),t.qZA()()()()}}function T(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",3)(2,"span",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.discardStory())}),t._uU(3,"keyboard_backspace"),t.qZA(),t.TgZ(4,"h4",11),t._uU(5,"Upload Story"),t.qZA(),t.TgZ(6,"span",12),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onSharingTheStory())}),t._uU(7,"Share to story"),t.qZA()(),t.TgZ(8,"div",4),t._UZ(9,"img",13),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(9),t.Q6J("src",e.selectedImage,t.LSH)}}let U=(()=>{class i{constructor(e,o,n){this.storyService=e,this.dialogRef=o,this.noti=n,this.formData=new FormData}ngOnInit(){this.fetchUserProfileDetails()}fetchUserProfileDetails(){this.storyService.uploadStoryDetails().subscribe({next:e=>{this.userId=e.userDetails._id,this.username=e.userDetails.name},error:()=>{}})}onFileSelected(e){const o=e.target.files[0];this.fileName=o.name;const n=new FileReader;n.onload=r=>{this.selectedImage=r.target.result},n.readAsDataURL(o),this.formData.append("file",e.target.files[0])}discardStory(){this.selectedImage=null}onSharingTheStory(){this.formData.append("userId",this.userId),this.formData.append("username",this.username),this.storyService.createNewStory(this.formData).subscribe({next:e=>{},error:e=>{this.noti.open("Error in posting story ")}}),this.dialogRef.closeAll()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(P),t.Y36(d.uw),t.Y36(v.ux))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-post-story"]],decls:4,vars:2,consts:[[1,"postContainer"],[4,"ngIf"],["class","uploads",4,"ngIf"],[1,"postHeader"],[1,"postContent"],["src","../../../assets/createPost.png","alt","story image"],["id","choose"],[1,"choosePicsBtn","btn"],["type","file","id","hide",3,"change"],[1,"uploads"],["title","back",1,"material-symbols-outlined","back",3,"click"],["id","upload"],["id","next",3,"click"],["alt","couldn't load img","id","userUploadedImg",3,"src"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Z,12,0,"div",1),t.qZA(),t.YNc(2,T,10,1,"div",2),t._UZ(3,"div")),2&e&&(t.xp6(1),t.Q6J("ngIf",!o.selectedImage),t.xp6(1),t.Q6J("ngIf",o.selectedImage))},dependencies:[p.O5],styles:[".choosePicsBtn[_ngcontent-%COMP%]{color:#fff;font-weight:700;background-color:#000;height:40px;border-radius:20px;text-align:center}h4[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.postHeader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:15px solid white;font-size:larger;width:100%}#next[_ngcontent-%COMP%]{font-weight:700;color:var(--blue);cursor:pointer}.back[_ngcontent-%COMP%]{cursor:pointer}.postContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;overflow:hidden;width:600px}.postContent[_ngcontent-%COMP%]{background-color:#24242426;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:15px;height:600px}.postContent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:500px;object-fit:contain;display:flex;align-items:center}#choose[_ngcontent-%COMP%]{font-size:xx-large}#hide[_ngcontent-%COMP%]{background-color:#24242426;display:flex;justify-content:center;opacity:0;cursor:pointer;position:relative;bottom:15px}.choosePicsBtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:10px}#upload[_ngcontent-%COMP%]{font-weight:700;margin:10px 300px;padding-left:60px}h1[_ngcontent-%COMP%]{text-align:center}input[type=file][_ngcontent-%COMP%]{display:none}"]}),i})();function A(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"span",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.back())}),t._uU(1," arrow_back_ios "),t.qZA()}}function I(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"span",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.forward())}),t._uU(1," arrow_forward_ios "),t.qZA()}}let D=(()=>{class i{constructor(e,o,n){this.homeService=e,this.storyData=o,this.dialog=n,this.counter=0,this.file=[],this.imgRetrivalPath="http://localhost:3000/story/"}ngOnInit(){this.storyImage=this.storyData.story,this.file=this.storyImage.file.slice().reverse(),this.imageData=this.file[this.counter].filename,this.creationTime=this.file[this.counter].createdAt,console.log("kjhgfdsdfgh",this.storyData),setInterval(()=>{this.counter=(this.counter+1)%this.file.length,this.imageData=this.file[this.counter].filename,this.creationTime=this.file[this.counter].createdAt},5e3)}getCurrentTime(e){return this.homeService.calculateCurrentTime(e)}back(){this.counter=this.counter-1,this.imageData=this.file[this.counter].filename,this.creationTime=this.file[this.counter].createdAt}forward(){this.counter=this.counter+1,this.imageData=this.file[this.counter].filename,this.creationTime=this.file[this.counter].createdAt}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.Y),t.Y36(d.WI),t.Y36(d.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-story"]],decls:20,vars:6,consts:[[1,"total-story"],[1,"story-view"],[1,"user-details"],[1,"name-image"],["alt","No profile",1,"profile-image",3,"src"],[1,"profile-name"],[1,"story-tim"],[1,"story-time"],[1,"line-main"],[1,"line-container"],[1,"line"],[1,"storyImage"],["class","material-symbols-outlined","id","arrow",3,"click",4,"ngIf"],["class","material-symbols-outlined","id","arrowf",3,"click",4,"ngIf"],["alt","No image",1,"story-image",3,"src"],[1,"slide-nav"],[1,"slide-thumb"],["id","arrow",1,"material-symbols-outlined",3,"click"],["id","arrowf",1,"material-symbols-outlined",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.TgZ(5,"h4",5),t._uU(6),t.qZA()(),t.TgZ(7,"div",6)(8,"h4",7),t._uU(9),t.qZA()(),t.TgZ(10,"div",8)(11,"div",9),t._UZ(12,"div",10),t.qZA(),t._UZ(13,"br"),t.qZA()(),t.TgZ(14,"div",11),t.YNc(15,A,2,0,"span",12),t.YNc(16,I,2,0,"span",13),t._UZ(17,"img",14),t.qZA(),t.TgZ(18,"nav",15),t._UZ(19,"div",16),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("src",o.storyImage.userProfilePic||o.homeService.defaultDp,t.LSH),t.xp6(2),t.Oqu(o.storyImage.username),t.xp6(3),t.hij(" ",o.getCurrentTime(o.creationTime),""),t.xp6(6),t.Q6J("ngIf",0!=o.storyImage.file.length&&0!=o.counter),t.xp6(1),t.Q6J("ngIf",0!=o.storyImage.file.length&&o.counter+1!=o.storyImage.file.length),t.xp6(1),t.Q6J("src",o.imageData,t.LSH))},dependencies:[p.O5],styles:[".total-story[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.story-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#d2cfcf00}.user-details[_ngcontent-%COMP%]{position:absolute;top:60px;left:80px;background-color:#b8b5b5a4;border-radius:20px;padding:10px}.name-image[_ngcontent-%COMP%]{position:absolute;padding-bottom:35px}.profile-image[_ngcontent-%COMP%]{position:absolute;width:55px;height:70px;padding-bottom:25px}.profile-name[_ngcontent-%COMP%]{margin-left:60px;margin-top:14px;font-weight:600}.story-tim[_ngcontent-%COMP%]{position:relative;padding-bottom:50px}.story-time[_ngcontent-%COMP%]{position:absolute;padding-left:380px;font-weight:600;color:#423f3f}.line-main[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:465px}.line-container[_ngcontent-%COMP%]{width:465px;height:7px;background-color:#dad9d99e;position:relative;overflow:hidden;border-radius:5px;margin-left:5px}.line[_ngcontent-%COMP%]{width:0;height:90%;background-color:#ad6aad;position:absolute;animation:_ngcontent-%COMP%_line-animation 5s linear infinite}.story-image[_ngcontent-%COMP%]{width:590px;height:800px}@keyframes _ngcontent-%COMP%_line-animation{0%{width:0}to{width:100%}}.mat-dialog-overlay[_ngcontent-%COMP%]{background-color:#00000080}#arrow[_ngcontent-%COMP%]{left:3%;margin-top:65%;position:absolute;border:2px solid black;background-color:#f0f8ff57;padding:10px;border-radius:50%;cursor:pointer}#arrowf[_ngcontent-%COMP%]{margin-right:3%;margin-top:65%;position:absolute;right:0;border:2px solid black;background-color:#f0f8ff57;padding:10px;border-radius:50%;cursor:pointer}#arrow[_ngcontent-%COMP%]:hover, #arrowf[_ngcontent-%COMP%]:hover{background-color:#cbcbcb}"]}),i})();function N(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.openViewStoryComponent(r))}),t.TgZ(2,"div",9),t._UZ(3,"img",3),t.TgZ(4,"small"),t._uU(5),t.qZA()()()()}if(2&i){const e=s.$implicit,o=t.oxw();t.xp6(1),t.ekj("viewed",e.viewed),t.xp6(2),t.s9C("src",e.userProfilePic||o.homeService.defaultDp,t.LSH),t.xp6(2),t.Oqu(e.username)}}let H=(()=>{class i{constructor(e,o,n){this.dialog=e,this.storyService=o,this.homeService=n,this.imgRetrivalPath="http://localhost:3000/story/",this.viewed=!1}ngOnInit(){this.fetchUserFollowingStory(),this.userDp=sessionStorage.getItem("userDp")}openCreateStoryComponent(){this.dialog.open(U,{panelClass:"center-dialog"}).afterClosed().subscribe(o=>{this.fetchUserFollowingStory()})}openViewStoryComponent(e){e.viewed=!0,this.dialog.open(D,{data:{story:e}}),setTimeout(()=>{this.dialog.closeAll()},5e3*e.file.length)}fetchUserFollowingStory(){this.storyService.viewStory().subscribe({next:e=>{this.storyDetails=e.fetchedStory}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.uw),t.Y36(P),t.Y36(m.Y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-stories"]],decls:11,vars:2,consts:[[1,"storiesContainer"],[1,"story"],[1,"post-story",3,"click"],["alt","twisks",3,"src"],["id","addStory",1,"material-symbols-outlined"],["id","addStories"],["class","user-story ",4,"ngFor","ngForOf"],[1,"user-story"],[1,"view-story",3,"click"],[1,"view-story"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div")(2,"div",1)(3,"div",2),t.NdJ("click",function(){return o.openCreateStoryComponent()}),t._UZ(4,"img",3),t.TgZ(5,"span",4),t._uU(6," add_circle "),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"small",5),t._uU(9,"Add story"),t.qZA()()()(),t.YNc(10,N,6,4,"div",6),t.qZA()),2&e&&(t.xp6(4),t.s9C("src",o.userDp,t.LSH),t.xp6(6),t.Q6J("ngForOf",o.storyDetails))},dependencies:[p.sg],styles:[".story[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px;width:60px;border-radius:50%}.post-story[_ngcontent-%COMP%], .view-story[_ngcontent-%COMP%]{cursor:pointer}.storiesContainer[_ngcontent-%COMP%]{width:500px;display:flex;overflow-x:scroll}.storiesContainer[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.story[_ngcontent-%COMP%]{margin:5px}#addStory[_ngcontent-%COMP%]{font-size:medium;color:#fff;background-color:var(--blue);border-radius:10px;position:relative;top:25px;right:22px}.liked[_ngcontent-%COMP%]{color:#ea3434}.user-story[_ngcontent-%COMP%]{margin:1px;background:linear-gradient(100deg,#e185f4,rgb(6,209,142));height:60px;width:60px;border-radius:50%}img[_ngcontent-%COMP%]{height:60px;width:60px;border-radius:50%}.viewed[_ngcontent-%COMP%]{background:linear-gradient(100deg,#dcdfda,rgb(211,213,212));height:60px;width:60px;border-radius:50%}"]}),i})();function F(i,s){if(1&i&&t._UZ(0,"img",26),2&i){const e=t.oxw().$implicit;t.Q6J("src",e.fileUrl,t.LSH)}}function Y(i,s){if(1&i&&t._UZ(0,"video",27),2&i){const e=t.oxw().$implicit;t.Q6J("src",e.fileUrl,t.LSH)("muted",!0)}}function q(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13),t._UZ(3,"img",6),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t.TgZ(6,"div")(7,"span",14),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.openMoreOption(r._id))}),t._uU(8," more_horiz "),t.qZA()()(),t.TgZ(9,"div",15),t.YNc(10,F,1,1,"img",16),t.YNc(11,Y,1,2,"video",17),t.qZA(),t.TgZ(12,"div",18)(13,"div",19)(14,"span",20,21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.likePost(r))}),t._uU(16),t.qZA(),t.TgZ(17,"span",22),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.viewPost(r))}),t._uU(18," chat_bubble "),t.qZA(),t.TgZ(19,"span",23),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.onSavingPost(r))}),t._uU(20),t.qZA()(),t.TgZ(21,"strong",24),t._uU(22),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.qZA(),t.TgZ(25,"span",25),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.viewPost(r))}),t._uU(26,"View all comments"),t.qZA(),t._UZ(27,"br"),t._uU(28),t.qZA()(),t._UZ(29,"br")(30,"br"),t.qZA()}if(2&i){const e=s.$implicit,o=t.oxw();t.xp6(3),t.s9C("src",e.userDetails[0].profilePhoto,t.LSH),t.xp6(2),t.Oqu(e.userDetails[0].userName),t.xp6(5),t.Q6J("ngIf",!e.videoFile),t.xp6(1),t.Q6J("ngIf",e.videoFile),t.xp6(3),t.Udp("color",e.likeColor),t.xp6(2),t.hij(" ",e.likeStatus," "),t.xp6(4),t.hij(" ",e.saveStatus," "),t.xp6(2),t.hij("",e.likes," likes"),t.xp6(2),t.Oqu(e.caption),t.xp6(4),t.hij(" ",o.getTimeTaken(e.createdAt)," ")}}function J(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.onClickMemories(r))}),t._UZ(1,"img",32),t.TgZ(2,"div",33)(3,"h3"),t._uU(4),t.qZA()()()}if(2&i){const e=s.$implicit,o=t.oxw(2);t.xp6(1),t.s9C("src",o.imgRetrivalPath+e.fileName,t.LSH),t.xp6(3),t.hij("Memories from ",e.createdAt.slice(0,10),"")}}function j(i,s){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,J,5,2,"div",28),t._UZ(2,"br"),t.TgZ(3,"div",29)(4,"h2",30),t._uU(5),t.qZA()()()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.memoriesData),t.xp6(4),t.hij("You all caught up ",e.username,", Thankyou.")}}function R(i,s){1&i&&(t.TgZ(0,"div"),t._UZ(1,"br"),t.TgZ(2,"div",29)(3,"h2",30),t._uU(4,"You have no memoeries Today"),t.qZA()()())}let $=(()=>{class i{constructor(e,o,n,r,c,X){this.homeService=e,this.webSocket=o,this.matDialog=n,this.notification=r,this.route=c,this.seoService=X,this.username="",this.postDetails=[],this.imgRetrivalPath=l.N.imgRetrivalPath,this.isVideoFile=!1,this.commentDetails=[],this.memoriesData=[],this.profileRetrival=l.N.profilePicRetrival,this.userDp=sessionStorage.getItem("userDp")}ngOnInit(){this.setSeoData(),this.fetchUserFollowingPosts(),this.fetchUserProfileDetails(),this.webSocket.connectSockets(),this.showLikesOfEachPost(),this.showSavedPosts(),this.likeNotification(),this.commentNotification(),this.userMemories()}fetchUserProfileDetails(){this.homeService.userDetailService().subscribe({next:e=>{this.username=e.userDetails.userName,sessionStorage.setItem("userDp",e.userDetails.profilePhoto)},error:()=>{this.notification.open("Sorry,Can't Fetch your data")}})}fetchUserFollowingPosts(){this.homeService.userPostsService().subscribe({next:e=>{this.postDetails=e.fetchedPosts,this.postDetails.map(o=>{o.saveStatus="bookmark",o.liked=o.likedBy.some(n=>n.userId===l.N.userId),o.saved=o.savedBy.includes(l.N.userId),o.videoFile="mp4"===o.fileName.split(".").pop(),o.liked?(o.likeColor="red",o.likeStatus="favorite"):(o.likeColor="black",o.likeStatus="favorite_border"),o.saveStatus=o.saved?"bookmark":"bookmark_border"})},error:e=>{this.notification.open("Network error !","Close",{duration:3e3})}})}likePost(e){this.webSocket.likePost(l.N.userId,e._id,e.userId,l.N.username,e.fileName),this.fetchUserFollowingPosts()}showLikesOfEachPost(){this.webSocket.onPostLiked().subscribe(e=>{const o=this.postDetails.findIndex(n=>n._id===e._id);-1!==o&&(this.postDetails[o].likes=e.likes)})}viewPost(e){this.matDialog.open(u.S,{data:e}).afterClosed().subscribe()}onSavingPost(e){this.webSocket.onSavingPost({postId:e._id,userId:l.N.userId}),this.fetchUserFollowingPosts()}showSavedPosts(){this.webSocket.onRetrivingSavedPosts().subscribe({next:e=>{const o=this.postDetails.findIndex(n=>n._id===e._id);-1!==o&&(this.postDetails[o].savedby=e.savedBy)},error:e=>{this.notification.open("Network error !","Close",{duration:3e3})}})}getTimeTaken(e){return this.homeService.calculateCurrentTime(e)}commentNotification(){this.webSocket.noticeCheck().subscribe({next:e=>{},error:()=>{}})}likeNotification(){this.webSocket.LikenoticeCheck().subscribe(e=>{this.webSocket.onlikeNotifications(e)})}openMoreOption(e){this.matDialog.open(w.Y,{data:{user:!1,post:!0,postId:e}}).afterClosed().subscribe(()=>{})}userMemories(){this.homeService.fetchUserMemories().subscribe({next:e=>{this.memoriesData=e.fetchMemories},error:()=>{this.notification.open("Sorry !,Cant fetch memories")}})}onClickMemories(e){this.matDialog.open(b,{data:{memories:e}}),setTimeout(()=>{this.matDialog.closeAll()},8e3)}setSeoData(){const e=this.route.snapshot.data;this.seoService.setSeoData(e.title||"Twisks | Home",e.description||"Welcome to Twisks")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.Y),t.Y36(_.i),t.Y36(d.uw),t.Y36(v.ux),t.Y36(g.gz),t.Y36(O))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-homepage"]],decls:32,vars:5,consts:[[1,"homepage"],[1,"content"],[1,"postMainContainer"],["class","postContainer",4,"ngFor","ngForOf"],[1,"accountSwitch"],[1,"account"],["alt","twisks",3,"src"],[1,"spotlight"],[1,"memory-grid"],[4,"ngIf"],[1,"Accountfooter"],[1,"postContainer"],[1,"post"],[1,"postHeader"],["id","more",1,"material-symbols-outlined",3,"click"],[1,"postImage"],["alt","twisks","srcset","",3,"src",4,"ngIf"],["autoplay","",3,"src","muted",4,"ngIf"],[1,"footer"],[1,"interactions"],["id","like",1,"material-icons",3,"click"],["like",""],[1,"material-symbols-outlined",2,"color","black",3,"click"],[1,"material-icons",2,"color","black",3,"click"],[1,"likeCount"],["id","viewComments",3,"click"],["alt","twisks","srcset","",3,"src"],["autoplay","",3,"src","muted"],["class","memory-card",3,"click",4,"ngFor","ngForOf"],[1,"caughtup"],[1,"end"],[1,"memory-card",3,"click"],["alt","memories images",1,"memories-image",3,"src"],[1,"memory-details"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-stories"),t.TgZ(3,"div",2),t.YNc(4,q,31,11,"div",3),t.qZA()(),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"img",6),t.TgZ(8,"strong"),t._uU(9),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"div",7)(12,"header")(13,"h1"),t._uU(14,"Your Memories on Twisks!"),t.qZA()(),t.TgZ(15,"div",8),t.YNc(16,j,6,2,"div",9),t.YNc(17,R,5,0,"div",9),t.qZA()(),t.TgZ(18,"div")(19,"div",10)(20,"p"),t._uU(21,"About"),t.qZA(),t.TgZ(22,"p"),t._uU(23,"Help"),t.qZA(),t.TgZ(24,"p"),t._uU(25,"Privacy"),t.qZA(),t.TgZ(26,"p"),t._uU(27,"Teams"),t.qZA(),t.TgZ(28,"p"),t._uU(29,"Locations"),t.qZA()(),t.TgZ(30,"p"),t._uU(31,"\xa9 2023 Twisks"),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("ngForOf",o.postDetails),t.xp6(3),t.s9C("src",o.userDp,t.LSH),t.xp6(2),t.Oqu(o.username),t.xp6(7),t.Q6J("ngIf",0!=o.memoriesData.length),t.xp6(1),t.Q6J("ngIf",0==o.memoriesData.length))},dependencies:[p.sg,p.O5,H],styles:[".homepage[_ngcontent-%COMP%]{display:flex}.postContainer[_ngcontent-%COMP%]{padding:10px;margin-bottom:35px}.postMainContainer[_ngcontent-%COMP%]{margin-top:15px;overflow-y:scroll;height:700px}.postMainContainer[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.content[_ngcontent-%COMP%]{margin-left:350px}.post[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:5px;margin-left:70px;width:500px;height:500px}.postHeader[_ngcontent-%COMP%]{display:flex;align-items:center}.postHeader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:38px;width:40px;border-radius:50%;margin:5px}.postHeader[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin:5px}#more[_ngcontent-%COMP%]{position:relative;left:300px;top:5px;cursor:pointer}.postImage[_ngcontent-%COMP%]{max-width:425px;max-height:400px}.postImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .postImage[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;margin:10px 0;border-radius:3px;object-fit:contain}.interactions[_ngcontent-%COMP%]{margin-top:5px;position:relative;right:10px}.interactions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:5px 10px;color:#000;cursor:pointer}.footer[_ngcontent-%COMP%]{margin-top:5px}.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#adacac}.story[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px;width:60px;border-radius:50%}.storiesContainer[_ngcontent-%COMP%]{width:700px;display:flex;overflow-x:scroll;padding:10px}.storiesContainer[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.story[_ngcontent-%COMP%]{margin:5px}.accountSwitch[_ngcontent-%COMP%]{position:relative;justify-content:center;text-align:center;align-items:center;left:150px;right:0;width:400px;height:800px}@media only screen and (max-width: 1200px){.navTitles[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:none}.navTitles[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:xx-large}.nav[_ngcontent-%COMP%]{padding:5px;width:100px;border-right:1px solid rgb(209,209,209);position:fixed;bottom:0;left:10px}#logo[_ngcontent-%COMP%]{display:none}#logoImage[_ngcontent-%COMP%]{height:60px;width:60px;position:relative;top:3px;left:0}.content[_ngcontent-%COMP%]{margin-left:150px}}.account[_ngcontent-%COMP%]{height:100%;padding:20px}.account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:60px;width:60px;cursor:pointer}.account[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin:10px;font-size:17px;font-weight:470;cursor:pointer}.account[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-left:40px;font-weight:600;color:#00a7d0;cursor:pointer}.Accountfooter[_ngcontent-%COMP%]{display:flex;position:relative;justify-content:center;color:#8b8b8b}.Accountfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px}#addStory[_ngcontent-%COMP%]{font-size:medium;color:#fff;background-color:var(--blue);border-radius:10px;position:relative;bottom:20px;left:38px}#addSto[_ngcontent-%COMP%]{position:relative;bottom:20px}.liked[_ngcontent-%COMP%]{color:#ea3434}#viewComments[_ngcontent-%COMP%]{cursor:pointer}#noti[_ngcontent-%COMP%]{position:fixed;top:0;right:0}.user-name[_ngcontent-%COMP%]{padding:10px;font-weight:bolder}header[_ngcontent-%COMP%]{background-color:#f6c4f67a;color:#000;padding:5px;border:1px solid rgb(212,210,210);text-align:center;border-radius:8px}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:relative;top:6px;font-weight:500}.memory-card[_ngcontent-%COMP%]{margin-top:10px;border:1px solid #ddd;border-radius:5px;overflow:hidden;box-shadow:0 0 5px #0000001a;display:flex}.memory-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-width:180px;min-height:200px;background-color:#faebd7;border-radius:10px}.memory-details[_ngcontent-%COMP%]{padding:80px 10px 10px;text-align:center}.memory-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:bolder}.memory-image[_ngcontent-%COMP%]{width:80%;min-height:100px;border-radius:5px}.spotlight[_ngcontent-%COMP%]{margin-top:25px}.memory-grid[_ngcontent-%COMP%]{overflow-y:scroll;height:600px}.memory-card[_ngcontent-%COMP%]:hover{background-color:#efeeee}.memory-grid[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.end[_ngcontent-%COMP%]{color:#00a7d0}@media only screen and (max-width: 1200px){.content[_ngcontent-%COMP%]{margin-left:10px}}"]}),i})();var L=a(3692);function Q(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"img",8),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,r=t.oxw();return t.KtG(r.viewPost(n))}),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.s9C("src",e.fileUrl,t.LSH)}}function z(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"video",9),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,r=t.oxw();return t.KtG(r.viewPost(n))}),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("src",e.fileUrl,t.LSH)("muted",!0)}}function G(i,s){if(1&i&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"span",5),t._uU(4," favorite "),t.qZA(),t._uU(5),t.qZA(),t.YNc(6,Q,1,1,"img",6),t.YNc(7,z,1,2,"video",7),t.qZA()()),2&i){const e=s.$implicit;t.xp6(5),t.hij("",e.likes," "),t.xp6(1),t.Q6J("ngIf",!e.videoFile),t.xp6(1),t.Q6J("ngIf",e.videoFile)}}let E=(()=>{class i{constructor(e,o,n){this.homeService=e,this.matDialog=o,this.webSocket=n,this.imgRetrival=l.N.imgRetrivalPath,this.savedPosts=[]}ngOnInit(){this.webSocket.connectSockets(),this.RetriveAllSavedPosts()}RetriveAllSavedPosts(){this.homeService.getAllSavedPosts().subscribe({next:e=>{this.savedPosts=e.savedPosts,this.savedPosts.map(o=>{o.saveStatus="bookmark",o.liked=o.likedBy.some(n=>n.userId===l.N.userId),o.saved=o.savedBy.includes(l.N.userId),o.videoFile="mp4"===o.fileName.split(".").pop(),o.liked?(o.likeColor="red",o.likeStatus="favorite"):(o.likeColor="black",o.likeStatus="favorite_border"),o.saveStatus=o.saved?"bookmark":"bookmark_border"})},error:()=>{}})}viewPost(e){this.matDialog.open(u.S,{data:e}).afterClosed().subscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.Y),t.Y36(d.uw),t.Y36(_.i))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-saved-posts"]],decls:6,vars:1,consts:[[1,"container"],[1,"savedPosts"],[4,"ngFor","ngForOf"],[1,"post"],[1,"likes"],[1,"material-symbols-outlined"],["alt","twisks",3,"src","click",4,"ngIf"],["autoplay","",3,"src","muted","click",4,"ngIf"],["alt","twisks",3,"src","click"],["autoplay","",3,"src","muted","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1")(2,"strong"),t._uU(3," Saved Posts "),t.qZA()(),t.TgZ(4,"div",1),t.YNc(5,G,8,3,"div",2),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",o.savedPosts))},dependencies:[p.sg,p.O5],styles:[".savedPosts[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;height:100%}.container[_ngcontent-%COMP%]{margin:20px 10px 20px 320px}.post[_ngcontent-%COMP%]{position:relative}.post[_ngcontent-%COMP%]:hover{opacity:.9}.post[_ngcontent-%COMP%]:hover   .likes[_ngcontent-%COMP%]{display:inline}.post[_ngcontent-%COMP%]{height:250px;width:250px}.post[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{cursor:pointer;height:100%;width:100%;object-fit:contain}.likes[_ngcontent-%COMP%]{position:absolute;top:120px;left:110px;color:#f0f8ff;display:none;padding:5px;border-radius:5px}"]}),i})();var h=a(1449);const K=[{path:"",component:$,canActivate:[h.s],data:{title:"Twisks | Home",description:"Welcome to Twisks"}},{path:"createPost",component:L.i,canActivate:[h.s],data:{title:"Twisks | Create Post",description:"Create a new post"}},{path:"viewPost/:id",component:u.S,canActivate:[h.s],data:{title:"Twisks | View Post",description:"View a post"}},{path:"savedPosts",component:E,canActivate:[h.s],data:{title:"Twisks | Saved Posts",description:"View your saved posts"}}];let V=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.Bz.forChild(K),g.Bz]}),i})();var y=a(433);let B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,V,d.Is,y.u5,y.UX]}),i})()}}]);