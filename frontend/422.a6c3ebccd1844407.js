"use strict";(self.webpackChunkFront_End=self.webpackChunkFront_End||[]).push([[422],{9422:(I,b,a)=>{a.d(b,{S:()=>w});var f=a(5412),d=a(433),t=a(6743),Z=a(7398),e=a(1571),M=a(3496),m=a(9825),u=a(6895);function O(_,h){if(1&_&&e._UZ(0,"img",6),2&_){const s=e.oxw();e.Q6J("src",s.imgRetrivalPath+s.data.fileName,e.LSH)}}function i(_,h){if(1&_&&e._UZ(0,"video",20),2&_){const s=e.oxw();e.Q6J("src",s.imgRetrivalPath+s.data.fileName,e.LSH)}}function l(_,h){if(1&_){const s=e.EpF();e.TgZ(0,"span",21),e.NdJ("click",function(){e.CHM(s);const P=e.oxw();return e.KtG(P.openMoreOption(P.data))}),e._uU(1," more_horiz "),e.qZA()}}function v(_,h){if(1&_&&(e.TgZ(0,"div",24)(1,"div"),e._UZ(2,"img",6),e.qZA(),e.TgZ(3,"div",25)(4,"strong"),e._uU(5),e.qZA(),e.TgZ(6,"div",26)(7,"span"),e._uU(8),e.qZA()()(),e.TgZ(9,"div",27)(10,"span"),e._uU(11),e.qZA()()()),2&_){const s=h.$implicit,p=e.oxw(2);e.xp6(2),e.s9C("src",p.profileRetrival+s.userDetails[0].profilePhoto,e.LSH),e.xp6(3),e.Oqu(s.userDetails[0].userName),e.xp6(3),e.Oqu(s.comment),e.xp6(3),e.Oqu(p.getTimeTaken(s.createdAt))}}function x(_,h){if(1&_&&(e.TgZ(0,"div",22),e.YNc(1,v,12,4,"div",23),e.qZA()),2&_){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",s.commentDetails)}}function C(_,h){1&_&&(e.TgZ(0,"div",28)(1,"h2"),e._uU(2,"No Comments"),e.qZA()())}let w=(()=>{class _{constructor(s,p,P,k,A){this.homeService=s,this.data=p,this.fb=P,this.webSocket=k,this.matDialog=A,this.commentDetails=[],this.imgRetrivalPath=t.N.imgRetrivalPath,this.postId=this.data._id,this.postUserId=this.data.userId,this.postImage=this.data.fileName,this.username=sessionStorage.getItem("username"),this.postDetails=[],this.profileRetrival=t.N.profilePicRetrival,this.commentForm=this.fb.group({comment:new d.NI("")})}ngOnInit(){this.onGettingInitalComments(),this.getInitalComments(),this.getComments()}getComments(){this.webSocket.onPostGetComment().subscribe({next:s=>{this.commentDetails=s,this.commentForm.reset()},error:()=>{}})}onSubmitingComment(){this.webSocket.onPostComment(this.postId,this.postUserId,sessionStorage.getItem("userId"),this.commentForm.value.comment,this.username,this.postImage)}onGettingInitalComments(){this.webSocket.retriveInitalComments(this.postId)}getInitalComments(){this.webSocket.onViewPostComments().subscribe({next:s=>{this.commentDetails=s},error:()=>{}})}getTimeTaken(s){return this.homeService.calculateCurrentTime(s)}openMoreOption(s){this.matDialog.open(Z.Y,{data:{user:!1,post:!0,delete:!0,postId:s._id}}).afterClosed().subscribe(()=>{this.matDialog.closeAll()})}}return _.\u0275fac=function(s){return new(s||_)(e.Y36(M.Y),e.Y36(f.WI),e.Y36(d.qu),e.Y36(m.i),e.Y36(f.uw))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-view-post"]],decls:30,vars:11,consts:[[1,"viewPostContaioner"],[1,"img"],["alt","",3,"src",4,"ngIf"],["autoplay","","loop","",3,"src",4,"ngIf"],[1,"postDetailContainer"],[1,"postHeader"],["alt","",3,"src"],["class","material-symbols-outlined","id","more","title","more-option",3,"click",4,"ngIf"],[1,"postCaption"],["class","postComments",4,"ngIf"],["id","noComments",4,"ngIf"],[1,"interactionContainer"],[1,"interactions"],["id","likeCount"],["id","daysCount"],[1,"commentFooter"],[3,"formGroup"],["type","text","formControlName","comment","placeholder","Write a comment","id","inp","autocomplete","off"],["comment",""],["type","submit","value","Post",1,"btn",3,"click"],["autoplay","","loop","",3,"src"],["id","more","title","more-option",1,"material-symbols-outlined",3,"click"],[1,"postComments"],["class","comment",4,"ngFor","ngForOf"],[1,"comment"],["id","comment"],["id","Commentcontent"],["id","time"],["id","noComments"]],template:function(s,p){1&s&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,O,1,1,"img",2),e.YNc(3,i,1,1,"video",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.TgZ(7,"strong"),e._uU(8),e.qZA(),e.YNc(9,l,2,0,"span",7),e.qZA(),e.TgZ(10,"div",8)(11,"p"),e._uU(12),e.qZA()(),e.YNc(13,x,2,1,"div",9),e.YNc(14,C,3,0,"div",10),e.TgZ(15,"div",11)(16,"div",12)(17,"div")(18,"span",13)(19,"strong"),e._uU(20),e.qZA()(),e._UZ(21,"br"),e.TgZ(22,"span",14),e._uU(23),e.qZA()()()(),e.TgZ(24,"div",15),e._UZ(25,"br"),e.TgZ(26,"form",16),e._UZ(27,"input",17,18),e.TgZ(29,"input",19),e.NdJ("click",function(){return p.onSubmitingComment()}),e.qZA()()()()()),2&s&&(e.xp6(2),e.Q6J("ngIf",!p.data.videoFile),e.xp6(1),e.Q6J("ngIf",p.data.videoFile),e.xp6(3),e.s9C("src",p.profileRetrival+p.data.userDetails[0].profilePhoto,e.LSH),e.xp6(2),e.Oqu(p.data.userDetails[0].userName),e.xp6(1),e.Q6J("ngIf",p.data.userDetails[0].userName==p.username),e.xp6(3),e.Oqu(p.data.caption),e.xp6(1),e.Q6J("ngIf",0!=p.commentDetails.length),e.xp6(1),e.Q6J("ngIf",0==p.commentDetails.length||null==p.commentDetails),e.xp6(6),e.hij("",p.data.likes," likes"),e.xp6(3),e.hij(" ",p.getTimeTaken(p.data.createdAt)," "),e.xp6(3),e.Q6J("formGroup",p.commentForm))},dependencies:[u.sg,u.O5,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u],styles:[".viewPostContaioner[_ngcontent-%COMP%]{display:flex;overflow:hidden;height:500px}.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .img[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{height:100%;width:100%}.img[_ngcontent-%COMP%]{height:500px;width:100%}.postDetailContainer[_ngcontent-%COMP%]{border:1px solid rgb(224,219,219);display:flex;flex-direction:column;align-items:center}.postHeader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:left;width:450px;padding:10px}.postHeader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35px;border-radius:50%;width:35px}#more[_ngcontent-%COMP%]{position:relative;left:80px}.postCaption[_ngcontent-%COMP%]{text-align:left;margin:10px;width:100%;border-bottom:1px solid rgb(224,219,219);padding:10px}.comment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35px;border-radius:50%;width:35px}.comment[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px}.postComments[_ngcontent-%COMP%]{width:100%;height:270px}.comment[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-right:5px;margin-left:15px}.postHeader[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-left:5px}.commentFooter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none}.btn[_ngcontent-%COMP%]{cursor:pointer;font-weight:700;color:var(--blue);position:relative;left:200px;background-color:azure}.commentFooter[_ngcontent-%COMP%]{border-top:1px solid rgb(224,224,224);height:100px;display:flex;justify-content:left;align-items:center;width:100%}#more[_ngcontent-%COMP%]{position:relative;margin-left:40%;cursor:pointer;font-size:30px}.postComments[_ngcontent-%COMP%]{height:230px;overflow-y:scroll}.postComments[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}#noComments[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}#time[_ngcontent-%COMP%]{margin-left:25px;width:110px}#comment[_ngcontent-%COMP%]{width:300px}#Commentcontent[_ngcontent-%COMP%]{margin-left:15px}.interactions[_ngcontent-%COMP%]{padding:5px;display:flex;justify-content:left;align-items:center;height:70px}#likeCount[_ngcontent-%COMP%]{position:relative;bottom:5px}.interactionContainer[_ngcontent-%COMP%]{border-top:1px solid rgb(224,224,224);width:100%}.interactionContainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:10px}#daysCount[_ngcontent-%COMP%]{font-size:small;color:solid rgb(224,224,224)}.liked[_ngcontent-%COMP%]{color:red}#saved[_ngcontent-%COMP%]{position:relative;left:370px}span[_ngcontent-%COMP%]{cursor:pointer}"]}),_})()},7398:(I,b,a)=>{a.d(b,{Y:()=>U});var f=a(5412),d=a(6743),t=a(1571),Z=a(4981),e=a(3496),M=a(6895),m=a(433);function u(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",15)(1,"div",16),t.NdJ("click",function(){const T=t.CHM(o).$implicit,R=t.oxw(3);return t.KtG(R.reportPost(T))}),t.TgZ(2,"p"),t._uU(3),t.qZA()(),t.TgZ(4,"span",17),t._uU(5," navigate_next "),t.qZA()()}if(2&n){const o=g.$implicit;t.xp6(3),t.Oqu(o)}}function O(n,g){if(1&n&&(t.TgZ(0,"div",12)(1,"p",13),t._uU(2,"Why are you reporting this post?"),t.qZA(),t.YNc(3,u,6,1,"div",14),t.qZA()),2&n){const o=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",o.postReports)}}function i(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",18)(1,"p",13),t._uU(2,"Why are you reporting this account?"),t.qZA(),t.TgZ(3,"div",15)(4,"div",16),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.openAboutReportingPost())}),t.TgZ(5,"p"),t._uU(6,"Report post, message or comment"),t.qZA()(),t.TgZ(7,"span",17),t._uU(8," navigate_next "),t.qZA()(),t.TgZ(9,"div",15)(10,"div",16),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.openAccountReportingPage())}),t.TgZ(11,"p"),t._uU(12,"Report account"),t.qZA()(),t.TgZ(13,"span",17),t._uU(14," navigate_next "),t.qZA()()()}}function l(n,g){1&n&&(t.TgZ(0,"div",19)(1,"p",13),t._uU(2,"About reporting a post, message or comment"),t.qZA(),t.TgZ(3,"ul")(4,"li"),t._uU(5," If you need help reporting a specific post or message , "),t.TgZ(6,"span",20),t._uU(7,"learn more here"),t.qZA()(),t.TgZ(8,"li"),t._uU(9," If you need help reporting a specific comment , "),t.TgZ(10,"span",20),t._uU(11,"learn more here"),t.qZA()()()())}function v(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",21)(1,"div",15)(2,"div",16),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.openUserReports())}),t.TgZ(3,"p"),t._uU(4,"It's posting content that shouldn't be on Twisks"),t.qZA()(),t.TgZ(5,"span",17),t._uU(6," navigate_next "),t.qZA()(),t.TgZ(7,"div",15)(8,"div",16),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.prentendingSomeone())}),t.TgZ(9,"p"),t._uU(10,"It's pretending to be someone else"),t.qZA()(),t.TgZ(11,"span",17),t._uU(12," navigate_next "),t.qZA()(),t.TgZ(13,"div",15)(14,"div",16),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.reportAgeAccount("Age under 13"))}),t.TgZ(15,"p"),t._uU(16,"They may be under the age of 13"),t.qZA()(),t.TgZ(17,"span",17),t._uU(18," navigate_next "),t.qZA()()()}}function x(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",15)(1,"div",16),t.NdJ("click",function(){const T=t.CHM(o).$implicit,R=t.oxw(3);return t.KtG(R.reportAccount(T))}),t.TgZ(2,"p"),t._uU(3),t.qZA()(),t.TgZ(4,"span",17),t._uU(5," navigate_next "),t.qZA()()}if(2&n){const o=g.$implicit;t.xp6(3),t.Oqu(o)}}function C(n,g){if(1&n&&(t.TgZ(0,"div",22),t.YNc(1,x,6,1,"div",14),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",o.userReports)}}function w(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",23)(1,"p",13),t._uU(2,"Who is this account pretending to be?"),t.qZA(),t.TgZ(3,"form",null,24)(5,"div",25),t._UZ(6,"input",26),t.TgZ(7,"label",27),t._uU(8,"Me"),t.qZA()(),t.TgZ(9,"div",25),t._UZ(10,"input",28),t.TgZ(11,"label",29),t._uU(12,"Someone I know"),t.qZA()(),t.TgZ(13,"div",25),t._UZ(14,"input",30),t.TgZ(15,"label",31),t._uU(16,"A celebrity or public figure"),t.qZA()(),t.TgZ(17,"div",25),t._UZ(18,"input",32),t.TgZ(19,"label",33),t._uU(20,"A business or organisation"),t.qZA()()(),t.TgZ(21,"button",34),t.NdJ("click",function(){t.CHM(o);const r=t.MAs(4),T=t.oxw(2);return t.KtG(T.reportAccount(r.value.accountReport))}),t._uU(22," Submit Report "),t.qZA()()}}function _(n,g){1&n&&(t.TgZ(0,"div",35)(1,"div",36)(2,"span",37),t._uU(3," check "),t.qZA(),t.TgZ(4,"h2"),t._uU(5,"Thanks for letting us know"),t.qZA(),t.TgZ(6,"p",38),t._uU(7," Your feedback is important in helping us keep the Twisks community safe. "),t.qZA()(),t.TgZ(8,"p",39),t._uU(9,"About reporting a child under the age of 13"),t.qZA(),t.TgZ(10,"p",40),t._uU(11," Twisks requires everyone to be at least 13 years old before they can create an account. In some jurisdictions, this age limit may be higher. If you'd like to report an account belonging to someone under the age of 13, or if you believe that someone is impersonating your child who's under 13, you may report their accounts. "),t.qZA()())}function h(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"p",3),t._uU(3," Report"),t.TgZ(4,"span",4),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.close())}),t._uU(5," close "),t.qZA()()(),t.YNc(6,O,4,1,"div",5),t.YNc(7,i,15,0,"div",6),t.YNc(8,l,12,0,"div",7),t.YNc(9,v,19,0,"div",8),t.YNc(10,C,2,1,"div",9),t.YNc(11,w,23,0,"div",10),t.YNc(12,_,12,0,"div",11),t.qZA()}if(2&n){const o=t.oxw();t.xp6(6),t.Q6J("ngIf",o.post&&!o.showSuccess),t.xp6(1),t.Q6J("ngIf",o.user&&!o.aboutReportingPost&&!o.accountReportingPage),t.xp6(1),t.Q6J("ngIf",o.aboutReportingPost),t.xp6(1),t.Q6J("ngIf",o.user&&!o.showAgeSuccess&&!o.showSuccess&&o.accountReportingPage&&!o.showPretendingSomeone&&!o.showUserReports),t.xp6(1),t.Q6J("ngIf",o.user&&o.showUserReports&&!o.showSuccess),t.xp6(1),t.Q6J("ngIf",o.user&&o.showPretendingSomeone),t.xp6(1),t.Q6J("ngIf",o.showAgeSuccess)}}function s(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"div",36)(2,"span",37),t._uU(3," check "),t.qZA(),t.TgZ(4,"h2"),t._uU(5,"Thanks for letting us know"),t.qZA(),t.TgZ(6,"p",38),t._uU(7," Your feedback is important in helping us keep the Twisks community safe. "),t.qZA()(),t.TgZ(8,"div",41)(9,"div",15)(10,"div",16),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.close())}),t.TgZ(11,"p"),t._uU(12,"Close"),t.qZA()(),t.TgZ(13,"span",17),t._uU(14," navigate_next "),t.qZA()()()()}}function p(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",43),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.openReports())}),t.TgZ(1,"p",44),t._uU(2,"Report"),t.qZA()()}}function P(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",43),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.openDeletePost())}),t.TgZ(1,"p",44),t._uU(2,"Delete"),t.qZA()()}}function k(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",1),t.YNc(1,p,3,0,"div",42),t.YNc(2,P,3,0,"div",42),t.TgZ(3,"div",43),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.close())}),t.TgZ(4,"p"),t._uU(5,"Cancel"),t.qZA()()()}if(2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",!o.showDelete),t.xp6(1),t.Q6J("ngIf",o.showDelete)}}function A(n,g){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"div",45),t._uU(2," Are you sure want to delete this post? "),t.qZA(),t.TgZ(3,"div",43),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.deletePost())}),t.TgZ(4,"p",44),t._uU(5,"Delete"),t.qZA()(),t.TgZ(6,"div",43),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.close())}),t.TgZ(7,"p"),t._uU(8,"Cancel"),t.qZA()()()}}let U=(()=>{class n{constructor(o,c,r,T){this.dialog=o,this.userService=c,this.homeService=r,this.data=T,this.showSuccess=!1,this.showDelete=this.data.delete,this.showDeleteNext=!1,this.showAgeSuccess=!1,this.showUserReports=!1,this.aboutReportingPost=!1,this.showPretendingSomeone=!1,this.accountReportingPage=!1,this.showMain=!0,this.user=!1,this.post=!1,this.postReports=["It's spam","Nudity or sexual activity","Hate speech or symbols","Violence or dangerous organisations","Sale of illegal or regulated goods","Bullying or harashment","Intellectual property violation","Sucide or self-injury","Eating disorders","Scam or fraud","False information","I just don't like it"],this.userReports=["It's spam","I just don't like it","Sucide or self-injury or eating disorders","Sale of illegal or regulated goods","Nudity or sexual activity","Hate speech or symbols","Violence or dangerous organisations","Bullying or harashment","Intellectual property violation","Scam or fraud","False information"]}ngOnInit(){this.fetchUserDetails()}fetchUserDetails(){this.userService.getFollowersDetails(this.data.userId).subscribe({next:o=>{this.userDetails=o.userDetails}}),this.homeService.fetchIndividualPost(this.data.postId).subscribe({next:o=>{this.postDetails=o.post}})}close(){this.dialog.closeAll()}reportPost(o){this.postDetails.reports.push({reportedUserId:d.N.userId,reportType:o}),this.homeService.updateIndividualPost(this.data.postId,this.postDetails).subscribe({next:c=>{this.showSuccess=!0},error:c=>{}})}reportAccount(o){this.userDetails.reportsUser.push({reportedUserId:d.N.userId,reportType:o}),this.userService.updateUserDetails(this.data.userId,this.userDetails).subscribe({next:c=>{this.showSuccess=!0},error:c=>{}})}reportAgeAccount(o){this.userDetails.reportsUser.push({reportedUserId:d.N.userId,reportType:o}),this.userService.updateUserDetails(this.data.userId,this.userDetails).subscribe({next:()=>{this.showAgeSuccess=!0}})}openAboutReportingPost(){this.aboutReportingPost=!0}openAccountReportingPage(){this.accountReportingPage=!0}openUserReports(){this.showUserReports=!0}prentendingSomeone(){this.showPretendingSomeone=!0}openReports(){this.showMain=!1,this.user=this.data.user,this.post=this.data.post}openDeletePost(){this.showMain=!1,this.showDeleteNext=!0}deletePost(){this.homeService.deletePost(this.data.postId).subscribe({next:()=>{this.dialog.closeAll()}})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(f.uw),t.Y36(Z.K),t.Y36(e.Y),t.Y36(f.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-report"]],decls:4,vars:4,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"heading"],["id","head"],["id","close",1,"material-symbols-outlined",3,"click"],["class","people","title","Reporting post",4,"ngIf"],["class","people","title","Reporting user 1",4,"ngIf"],["class","list","title","Reporting user 1.1",4,"ngIf"],["class","people","title","Reporting user 1.2",4,"ngIf"],["class","people","title","Reporting user 1.2.1",4,"ngIf"],["class","people","title","Reporting user 1.2.2",4,"ngIf"],["title","Reporting user 1.2.3",4,"ngIf"],["title","Reporting post",1,"people"],[1,"title"],["class","flex",4,"ngFor","ngForOf"],[1,"flex"],[1,"para",3,"click"],[1,"material-symbols-outlined"],["title","Reporting user 1",1,"people"],["title","Reporting user 1.1",1,"list"],["id","link"],["title","Reporting user 1.2",1,"people"],["title","Reporting user 1.2.1",1,"people"],["title","Reporting user 1.2.2",1,"people"],["reportAccountForm","ngForm"],[1,"input"],["type","radio","id","Me","name","accountReport","ngModel","","value","Me","required",""],["for","Me"],["type","radio","id","Someone I know","name","accountReport","ngModel","","value","Someone I know","required",""],["for","Someone I know"],["type","radio","id","A celebrity or public figure","name","accountReport","ngModel","","required","","value","A celebrity or public figure"],["for","A celebrity or public figure"],["type","radio","id","A business or organisation","name","accountReport","ngModel","","required","","value","A business or organisation"],["for","A business or organisation"],[1,"button",3,"click"],["title","Reporting user 1.2.3"],[1,"description"],["id","check",1,"material-symbols-outlined"],["id","content"],[1,"report_title"],["id","report_content"],[1,"people"],["class","mainPara",3,"click",4,"ngIf"],[1,"mainPara",3,"click"],["id","negative"],[1,"mainPara"]],template:function(o,c){1&o&&(t.YNc(0,h,13,7,"div",0),t.YNc(1,s,15,0,"div",0),t.YNc(2,k,6,2,"div",0),t.YNc(3,A,9,0,"div",0)),2&o&&(t.Q6J("ngIf",!c.showSuccess&&!c.showMain&&!c.showDelete),t.xp6(1),t.Q6J("ngIf",c.showSuccess),t.xp6(1),t.Q6J("ngIf",c.showMain),t.xp6(1),t.Q6J("ngIf",c.showDeleteNext))},dependencies:[M.sg,M.O5,m._Y,m.Fj,m._,m.JJ,m.JL,m.Q7,m.On,m.F],styles:[".container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:400px;border:1px solid rgb(196,193,193);border-radius:13px}.people[_ngcontent-%COMP%]{text-align:left;height:max-content}.heading[_ngcontent-%COMP%]{font-weight:700;font-size:larger;padding-top:10px;align-items:center;text-align:center;border-bottom:1px solid rgb(222,221,221)}#close[_ngcontent-%COMP%]{cursor:pointer;position:relative;left:120px;font-size:25px;top:7px;color:#000;font-weight:700}.flex[_ngcontent-%COMP%]{padding:8px;display:flex;position:relative;align-items:center;border-bottom:1px solid rgb(222,222,222)}span[_ngcontent-%COMP%]{color:silver}.para[_ngcontent-%COMP%]{position:relative;top:7px;font-size:15px;width:350px}.flex[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#ededed}.title[_ngcontent-%COMP%]{color:#000;position:relative;top:8px;padding-left:5px;padding-bottom:14px;font-size:17px;font-weight:500;border-bottom:1px solid rgb(222,222,222)}#check[_ngcontent-%COMP%]{border:5px solid greenyellow;border-radius:50%;font-size:50px;font-weight:700;color:#adff2f}.description[_ngcontent-%COMP%]{padding-top:25px;padding-bottom:25px;align-items:center;text-align:center}#content[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;color:gray;width:300px}li[_ngcontent-%COMP%]{padding-top:15px;color:gray;font-size:15px}#link[_ngcontent-%COMP%]{cursor:pointer;color:var(--blue)}#back-arrow[_ngcontent-%COMP%]{cursor:pointer;position:relative;right:120px;top:5px;color:#000}input[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:30px;margin-right:15px;margin-top:10px}label[_ngcontent-%COMP%]{font-size:18px;padding:10px}form[_ngcontent-%COMP%]{border:2px solid black}.input[_ngcontent-%COMP%]{padding-top:6px;padding-bottom:6px;border-bottom:1px solid rgb(222,222,222)}.button[_ngcontent-%COMP%]{padding:6px;width:370px;border-radius:10px;background-color:#13a0f7;color:#fff;font-size:16px;font-weight:500;margin-top:20px;position:relative;margin-bottom:20px}.report_title[_ngcontent-%COMP%]{position:relative;padding-top:15px;padding-left:5px;padding-bottom:5px;font-size:17px;font-weight:500;border-top:1px solid rgb(217,212,212)}#report_content[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;color:gray;width:365px}.mainPara[_ngcontent-%COMP%]{cursor:pointer;position:relative;text-align:center;padding:10px;font-size:16px;border-bottom:1px solid rgb(223,223,223)}.mainPara[_ngcontent-%COMP%]:hover{background-color:#ededed}#negative[_ngcontent-%COMP%]{color:red;font-weight:530}"]}),n})()},9825:(I,b,a)=>{a.d(b,{i:()=>m});var f=a(5861),d=a(9751),t=a(360),Z=a(6743),e=a(1571),M=a(7009);let m=(()=>{class u{constructor(i){this.noti=i}connectSockets(){this.socket=(0,t.io)(`${Z.N.baseUrl}`,{transports:["websocket"],reconnectionAttempts:3,timeout:5e3,withCredentials:!0}),this.socket.on("connect",()=>{console.log("Connected to socket server!")}),this.socket.on("error",i=>{this.noti.open("Error in connection server")}),this.socket.emit("join",Z.N.userId)}likePost(i,l,v,x,C){this.socket.emit("likedPost",{userId:i,postId:l,postuserId:v,likedUsername:x,postImage:C})}onPostLiked(){return new d.y(i=>{this.socket.on("postLiked",l=>{i.next(l),this.LikenoticeCheck()})})}onPostComment(i,l,v,x,C,w){this.socket.emit("newComment",{postId:i,postUserId:l,userId:v,comment:x,username:C,postImage:w})}onPostGetComment(){return new d.y(i=>{this.socket.on("commentsRetrived",l=>{i.next(l)})})}retriveInitalComments(i){this.socket.emit("InitalpostComments",{postId:i})}onViewPostComments(){return new d.y(i=>{this.socket.on("InitalpostCommentsRetrived",l=>{i.next(l)})})}onSavingPost(i){this.socket.emit("savePost",i)}onRetrivingSavedPosts(){return new d.y(i=>{this.socket.on("retrivedSavedPosts",function(){var l=(0,f.Z)(function*(v){i.next(v)});return function(v){return l.apply(this,arguments)}}())})}noticeCheck(){return new d.y(i=>{this.socket.on("notification",l=>{i.next(l),this.onCommentNotifications(l)})})}LikenoticeCheck(){return new d.y(i=>{this.socket.on("Likenotification",l=>{i.next(l)})})}onlikeNotifications(i){this.noti.open(`${i} liked your post`,"Close",{panelClass:["my-custom-snackbar"],duration:5e3})}onCommentNotifications(i){this.noti.open(`${i} commented your post`,"Close",{panelClass:["my-custom-snackbar"],duration:5e3})}onError(){return new d.y(i=>{this.socket.on("error",l=>{i.next(l),this.noti.open(l,"Close",{duration:3e3})})})}}return u.\u0275fac=function(i){return new(i||u)(e.LFG(M.ux))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);