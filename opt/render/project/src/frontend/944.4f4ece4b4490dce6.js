"use strict";(self.webpackChunkFront_End=self.webpackChunkFront_End||[]).push([[944],{3944:(ne,l,d)=>{d.r(l),d.d(l,{MessageModule:()=>se});var p=d(6895),_=d(8616),c=d(433),g=d(6743),e=d(1571),m=d(2188),u=d(5412);function x(s,i){1&s&&(e.TgZ(0,"small",19),e._uU(1,"(You)"),e.qZA())}function M(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13)(2,"div",14),e._UZ(3,"img",15),e.TgZ(4,"strong"),e._uU(5),e.qZA(),e._UZ(6,"br"),e.YNc(7,x,2,0,"small",16),e.qZA(),e.TgZ(8,"div",17)(9,"input",18),e.NdJ("input",function(){const r=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.setValues(r))}),e.qZA()()()()}if(2&s){const t=i.$implicit,n=e.oxw(2);e.xp6(3),e.s9C("src",n.userDp+t.profilePhoto,e.LSH),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Q6J("ngIf",t.userName==n.username)}}function C(s,i){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,M,10,3,"div",11),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.searchResult)}}function Z(s,i){1&s&&(e.TgZ(0,"div",20)(1,"h1"),e._uU(2,"No accounts found"),e.qZA()())}let v=(()=>{class s{constructor(t,n){this.messageService=t,this.dialog=n,this.searchResult=[],this.selectedUsers=[g.N.userId],this.groups=[],this.roomId="",this.userDp=g.N.profilePicRetrival,this.username=g.N.username}onSearchUsers(t){this.messageService.searchUsers(t.target.value).subscribe({next:r=>{this.searchResult=r.fetchedMessageAccounts},error:()=>{}})}getSelectedUsers(){this.messageService.createGroup({createdBy:this.groupName+` created by ${g.N.username}`,groupName:this.groupName,members:this.selectedUsers,message:{sender:g.N.userId,message:"Hey guys,i have created a group lets chat ! "},admin:g.N.userId}),this.dialog.closeAll()}setValues(t){this.selectedUsers.push(t._id)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(m.w),e.Y36(u.uw))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-create-group"]],decls:14,vars:3,consts:[[1,"container"],[1,"header"],[1,"inputDiv"],["type","text","placeholder","Group Name","id","grpName",3,"ngModel","ngModelChange"],["type","text","placeholder","Search & Add members to group","id","search",3,"input"],[1,"members"],[1,"listOfUsers"],[4,"ngIf"],["id","noSearch",4,"ngIf"],[1,"buttonDiv"],["type","submit",1,"btn",3,"click"],["class","user",4,"ngFor","ngForOf"],[1,"user"],["id","tapToChat"],[1,"userDp"],["alt","","srcset","",3,"src"],["id","you",4,"ngIf"],[1,"check"],["type","checkbox",3,"input"],["id","you"],["id","noSearch"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Create Group"),e.qZA()(),e.TgZ(4,"div",2)(5,"input",3),e.NdJ("ngModelChange",function(r){return n.groupName=r}),e.qZA(),e.TgZ(6,"input",4),e.NdJ("input",function(r){return n.onSearchUsers(r)}),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6),e.YNc(9,C,2,1,"div",7),e.YNc(10,Z,3,0,"div",8),e.qZA()(),e.TgZ(11,"div",9)(12,"button",10),e.NdJ("click",function(){return n.getSelectedUsers()}),e._uU(13,"Add to Group"),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngModel",n.groupName),e.xp6(4),e.Q6J("ngIf",0!=n.searchResult.length),e.xp6(1),e.Q6J("ngIf",0==n.searchResult.length))},dependencies:[p.sg,p.O5,c.Fj,c.JJ,c.On],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:15px;width:300px;height:100%}.listOfUsers[_ngcontent-%COMP%]{height:150px;overflow-y:scroll}.listOfUsers[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.listOfUers[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{cursor:pointer}.header[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;margin-bottom:5px;border-bottom:1px solid rgb(34,32,32)}.userDp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:50px;width:50px}#search[_ngcontent-%COMP%]{height:20px;width:100%;border-radius:10px;outline:none;border:none}#tapToChat[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}#tapToChat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1px 5px 1px 1px}#username[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#noSearch[_ngcontent-%COMP%]{display:flex;justify-content:center}.check[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:25px;width:25px}.userDp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:50px}.members[_ngcontent-%COMP%]{margin:10px 1px;width:100%}.buttonDiv[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:center}.btn[_ngcontent-%COMP%]{outline:none;border:none;background-color:var(--blue);height:35px;border-radius:10px}.inputDiv[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%}.inputDiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:5px}#grpName[_ngcontent-%COMP%]{border:none;outline:none;width:100%}.userDp[_ngcontent-%COMP%]{width:100%}.userDp[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin:1px 3px 1px 5px}#you[_ngcontent-%COMP%]{position:relative;left:55px;bottom:15px}"]}),s})();const A=["addMemberClass"];function b(s,i){1&s&&(e.TgZ(0,"span",15),e._uU(1,"Admin"),e.qZA())}function U(s,i){if(1&s&&(e.TgZ(0,"div"),e._UZ(1,"img",13),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e.YNc(4,b,2,0,"span",14),e.qZA()),2&s){const t=i.$implicit,n=e.oxw(2);e.xp6(1),e.s9C("src",n.profileRetrival+t.profilePhoto,e.LSH),e.xp6(2),e.Oqu(t.userName),e.xp6(1),e.Q6J("ngIf",t.admin)}}function O(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",16)(1,"button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.addMembers())}),e._uU(2,"Add Members"),e.qZA()()}}function y(s,i){1&s&&(e.TgZ(0,"small",30),e._uU(1,"(You)"),e.qZA())}function T(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",25)(1,"div",26)(2,"div",27),e._UZ(3,"img",13),e.TgZ(4,"strong"),e._uU(5),e.qZA(),e._UZ(6,"br"),e.YNc(7,y,2,0,"small",28),e.TgZ(8,"button",29),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(4);return e.KtG(a.addUsers(r))}),e._uU(9,"Add"),e.qZA()()()()}if(2&s){const t=i.$implicit,n=e.oxw(4);e.xp6(3),e.s9C("src",n.userDp+t.profilePhoto,e.LSH),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Q6J("ngIf",t.userName==n.username),e.xp6(1),e.Q6J("disabled",n.isUserAlreadyMember(t))}}function D(s,i){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,T,10,4,"div",24),e.qZA()),2&s){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.searchResult)}}function I(s,i){1&s&&(e.TgZ(0,"div",31)(1,"h1"),e._uU(2,"No accounts found"),e.qZA()())}function P(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",18)(1,"strong"),e._uU(2,"Add Participants"),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"small"),e._uU(5,"Only admin can add others in group"),e.qZA(),e.TgZ(6,"input",19),e.NdJ("input",function(o){e.CHM(t);const r=e.oxw(2);return e.KtG(r.onSearchUsers(o))}),e.qZA(),e.TgZ(7,"div",20)(8,"div",21),e.YNc(9,D,2,1,"div",22),e.YNc(10,I,3,0,"div",23),e.qZA()()()}if(2&s){const t=e.oxw(2);e.xp6(9),e.Q6J("ngIf",0!=t.searchResult.length),e.xp6(1),e.Q6J("ngIf",0==t.searchResult.length)}}function w(s,i){if(1&s&&(e.TgZ(0,"div",1,2)(2,"div",3)(3,"div",4)(4,"div",5),e._UZ(5,"img",6),e.qZA(),e.TgZ(6,"div",7)(7,"div")(8,"span"),e._uU(9," Group Name "),e.qZA(),e.TgZ(10,"strong"),e._uU(11),e.qZA()(),e._UZ(12,"br"),e.TgZ(13,"div")(14,"strong"),e._uU(15),e.qZA(),e._UZ(16,"br"),e.qZA(),e._UZ(17,"br"),e.qZA()(),e.TgZ(18,"strong",8),e._uU(19,"Members"),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"div",9),e.YNc(22,U,5,3,"div",10),e.qZA(),e._UZ(23,"div"),e.YNc(24,O,3,0,"div",11),e.qZA(),e.YNc(25,P,11,2,"div",12),e.qZA()),2&s){const t=i.$implicit,n=e.oxw();e.xp6(11),e.hij("",t.groupName," "),e.xp6(4),e.Oqu(t.createdBy),e.xp6(7),e.Q6J("ngForOf",n.memberDetails),e.xp6(2),e.Q6J("ngIf",t.admin==n.userId),e.xp6(1),e.Q6J("ngIf",n.addMember)}}let N=(()=>{class s{constructor(t,n,o){this.data=t,this.message=n,this.dialog=o,this.memberDetails=[],this.searchResult=[],this.selectedUsers=[],this.userId=sessionStorage.getItem("userId"),this.addMember=!1,this.username=g.N.username,this.userDp=g.N.profilePicRetrival,this.profileRetrival=g.N.profilePicRetrival,this.groupDetails=[this.data]}ngOnInit(){this.retriveMemberDetails(),this.retrivedMembers()}retriveMemberDetails(){this.message.retriveGroupMembers(this.data.members)}retrivedMembers(){this.message.retrivedMembers().subscribe({next:t=>{this.memberDetails=t,this.memberDetails.map(n=>{n.admin=!!n._id.includes(this.data.admin)})}})}onSearchUsers(t){this.message.searchUsers(t.target.value).subscribe({next:r=>{this.searchResult=r.fetchedMessageAccounts,this.searchResult.map(a=>{})},error:()=>{}})}addMembers(){this.addMember=!this.addMember,1==this.addMember?this.addMemberClass?.nativeElement.classList.add("addMemberClass"):this.addMemberClass?.nativeElement.classList.remove("addMemberClass")}membersAdded(){this.message.membersAdded().subscribe({next:t=>{this.groupDetails=t}})}addUsers(t){this.message.addMembers({_id:t._id,groupName:this.data.groupName}),this.membersAdded()}isUserAlreadyMember(t){return this.memberDetails.some(n=>n._id===t._id)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(u.WI),e.Y36(m.w),e.Y36(u.uw))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-group-details"]],viewQuery:function(t,n){if(1&t&&e.Gf(A,5),2&t){let o;e.iGM(o=e.CRH())&&(n.addMemberClass=o.first)}},decls:1,vars:1,consts:[["class","groupDetails",4,"ngFor","ngForOf"],[1,"groupDetails"],["addMemberClass",""],[1,"firstDiv"],[1,"head"],[1,"img"],["src","data:image/png;base64,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","alt",""],[1,"wholehead"],["id","title"],[1,"members"],[4,"ngFor","ngForOf"],["class","addGroup",4,"ngIf"],["class","secoundDiv",4,"ngIf"],["alt","","srcset","",3,"src"],["id","admin",4,"ngIf"],["id","admin"],[1,"addGroup"],[1,"btn",3,"click"],[1,"secoundDiv"],["type","text","placeholder","Search members","id","search",3,"input"],[1,"membersOfsearch"],[1,"listOfUsers"],[4,"ngIf"],["id","noSearch",4,"ngIf"],["class","user",4,"ngFor","ngForOf"],[1,"user"],["id","tapToChat"],[1,"userDp"],["id","you",4,"ngIf"],["type","submit",1,"btn",3,"disabled","click"],["id","you"],["id","noSearch"]],template:function(t,n){1&t&&e.YNc(0,w,26,5,"div",0),2&t&&e.Q6J("ngForOf",n.groupDetails)},dependencies:[p.sg,p.O5],styles:[".members[_ngcontent-%COMP%]{height:200px;overflow-y:scroll;padding:5px;width:100%}.members[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;border-radius:50%}.members[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:3px;width:100%;border-bottom:1px solid rgb(219,216,216)}.groupDetails[_ngcontent-%COMP%]{padding:10px;width:400px;display:flex;align-items:center}#title[_ngcontent-%COMP%]{display:flex;justify-content:center}.members[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.groupDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}#admin[_ngcontent-%COMP%]{position:relative;left:20px;color:#dedede}.groupDetails[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .groupDetails[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:80%}.members[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-left:10px}.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;border-radius:50%}.head[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.wholehead[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}.btn[_ngcontent-%COMP%]{outline:none;border:none;background-color:var(--blue);height:35px;border-radius:10px}.firstDiv[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.userDp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:50px;width:50px}.userDp[_ngcontent-%COMP%]{display:flex;width:100%}#you[_ngcontent-%COMP%]{position:relative;right:65px;top:10px}.addMemberClass[_ngcontent-%COMP%]{width:100%}.secoundDiv[_ngcontent-%COMP%]{height:400px;overflow:hidden;text-align:center}.secoundDiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin:5px 1px}#search[_ngcontent-%COMP%]{border:none;outline:none;width:100%;margin:5px 1px}"]}),s})();const q=["messageContainer"];function S(s,i){1&s&&(e.TgZ(0,"small"),e._uU(1,"(You)"),e.qZA())}function G(s,i){1&s&&(e.TgZ(0,"small"),e._uU(1,"Tap to chat"),e.qZA())}function Q(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",16),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.onPrivatechat(r))}),e.TgZ(2,"div"),e._UZ(3,"img",17),e.qZA(),e.TgZ(4,"div",18)(5,"strong"),e._uU(6),e.qZA(),e._UZ(7,"br"),e.YNc(8,S,2,0,"small",6),e.YNc(9,G,2,0,"small",6),e.qZA()()()}if(2&s){const t=i.$implicit,n=e.oxw(2);e.xp6(3),e.s9C("src",n.userDp+t.profilePhoto,e.LSH),e.xp6(3),e.Oqu(t.userName),e.xp6(2),e.Q6J("ngIf",t.userName==n.username),e.xp6(1),e.Q6J("ngIf",t.userName!=n.username)}}function J(s,i){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,Q,10,4,"div",14),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.searchResult)}}function F(s,i){1&s&&(e.TgZ(0,"div",19)(1,"h1"),e._uU(2,"Search a User and Start Chating!"),e.qZA()())}function k(s,i){1&s&&(e.TgZ(0,"div",20),e._uU(1,"\nNo Groups "),e.qZA())}function B(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div",22)(1,"div",23),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.onGroupchat(r))}),e.TgZ(2,"div"),e._UZ(3,"img",24),e.qZA(),e.TgZ(4,"div",25)(5,"strong"),e._uU(6),e.qZA(),e.TgZ(7,"small"),e._uU(8,"Tap to Chat"),e.qZA()()()()}if(2&s){const t=i.$implicit;e.xp6(6),e.Oqu(t.groupName)}}function R(s,i){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,B,9,1,"div",21),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.groups)}}function z(s,i){1&s&&(e.TgZ(0,"div",26)(1,"div")(2,"span",27),e._uU(3,"\nforum\n"),e.qZA(),e.TgZ(4,"h2"),e._uU(5,"Your Messages"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Send private photos and messages to a friend or group"),e.qZA()()())}const h=function(s,i){return{receiver:s,sender:i}};function j(s,i){if(1&s&&(e.TgZ(0,"div")(1,"div",42)(2,"p"),e._uU(3),e.qZA()()()),2&s){const t=i.$implicit,n=e.oxw(4);e.xp6(1),e.Q6J("ngClass",e.WLB(2,h,t.receiverUserId==n.userId,t.receiverUserId!=n.userId)),e.xp6(2),e.Oqu(t.message)}}function H(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div")(1,"div",30)(2,"div",31),e._UZ(3,"img",32),e.TgZ(4,"strong",33),e._uU(5),e.qZA()(),e._UZ(6,"div",34),e.qZA(),e.TgZ(7,"div",35)(8,"div",36,37),e.YNc(10,j,4,5,"div",29),e.qZA()(),e.TgZ(11,"div",38)(12,"form",39)(13,"input",40),e.NdJ("input",function(o){e.CHM(t);const r=e.oxw(3);return e.KtG(r.toggleSendBtn(o))}),e.qZA(),e.TgZ(14,"button",41),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(3);return e.KtG(a.sendNewMessage(r))}),e._uU(15,"send"),e.qZA()()()()}if(2&s){const t=i.$implicit,n=e.oxw(3);e.xp6(3),e.s9C("src",n.userDp+t.profilePhoto,e.LSH),e.xp6(2),e.hij("",t.userName,"\n"),e.xp6(5),e.Q6J("ngForOf",n.messages),e.xp6(2),e.Q6J("formGroup",n.messageForm),e.xp6(2),e.Q6J("disabled",!n.isEmptyMsg)}}function E(s,i){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,H,16,5,"div",29),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.privateChat)}}function Y(s,i){if(1&s&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.sender," ")}}function V(s,i){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,Y,2,1,"strong",6),e.TgZ(2,"div",42)(3,"p"),e._uU(4),e.qZA()()()),2&s){const t=i.$implicit,n=e.oxw(4);e.xp6(1),e.Q6J("ngIf",t.sender!=n.username),e.xp6(1),e.Q6J("ngClass",e.WLB(3,h,t.sender!=n.username,t.sender==n.username)),e.xp6(2),e.hij(" ",t.message,"")}}function L(s,i){if(1&s){const t=e.EpF();e.TgZ(0,"div")(1,"div",30)(2,"div",31),e._UZ(3,"img",24),e.TgZ(4,"strong"),e._uU(5),e.qZA(),e.TgZ(6,"span",43),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(3);return e.KtG(a.showGroupDetails(r))}),e._uU(7," info "),e.qZA()(),e._UZ(8,"div",34),e.qZA(),e.TgZ(9,"div",35)(10,"div",36,37)(12,"div")(13,"div",44)(14,"h3"),e._uU(15),e.qZA()(),e.YNc(16,V,5,6,"div",29),e.qZA()()(),e.TgZ(17,"div",38)(18,"form",39)(19,"input",40),e.NdJ("input",function(o){e.CHM(t);const r=e.oxw(3);return e.KtG(r.toggleSendBtn(o))}),e.qZA(),e.TgZ(20,"button",41),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.oxw(3);return e.KtG(a.sendGroupMessage(r))}),e._uU(21,"send"),e.qZA()()()()}if(2&s){const t=i.$implicit,n=e.oxw(3);e.xp6(5),e.Oqu(t.groupName),e.xp6(10),e.Oqu(t.createdBy),e.xp6(1),e.Q6J("ngForOf",n.messages),e.xp6(2),e.Q6J("formGroup",n.messageForm),e.xp6(2),e.Q6J("disabled",!n.isEmptyMsg)}}function K(s,i){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,L,22,5,"div",29),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.groupChat)}}function X(s,i){if(1&s&&(e.TgZ(0,"div",28),e.YNc(1,E,2,1,"div",6),e.YNc(2,K,2,1,"div",6),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.isPrivateChat),e.xp6(1),e.Q6J("ngIf",t.isGroupChat)}}let W=(()=>{class s{constructor(t,n,o){this.messageService=t,this.fb=n,this.dialog=o,this.searchResult=[],this.privateChat=[],this.groupChat=[],this.showChatBox=!1,this.messages=[],this.userId=sessionStorage.getItem("userId"),this.username=sessionStorage.getItem("username"),this.receiverMsgs=[],this.senderMsgs=[],this.oldMessages=[],this.roomId="",this.groups=[],this.isEmptyMsg=!1,this.userDp=g.N.profilePicRetrival,this.isGroupChat=!1,this.isPrivateChat=!1,this.messageForm=this.fb.group({message:new c.NI("")})}ngOnInit(){this.messageService.Connect(),this.retriveAllgroups(),this.onRetrivingGroupsInitally()}onSearchUsers(t){this.messageService.searchUsers(t.target.value).subscribe({next:r=>{this.searchResult=r.fetchedMessageAccounts},error:()=>{}})}onPrivatechat(t){this.messageService.connectChatRoom({senderuserId:this.userId,reciveruserId:t._id}),this.messageService.retriveRoomId().subscribe({next:o=>{this.roomId=o._id,this.messageService.JoinRoomSockets(this.roomId),this.messageService.retriveInitialMessages({room:this.roomId}),this.messageService.fetchOldMessages().subscribe({next:r=>{this.showChatBox=!0,this.isPrivateChat=!0,this.isGroupChat=!1,this.privateChat=[t],this.messages=r},error:()=>{}}),this.messageService.newMessageRecived().subscribe(r=>{this.messages=r})},error:()=>{}})}sendNewMessage(t){this.messageService.sendMessage({senderUserId:this.userId,receiverUserId:t._id,message:this.messageForm.value.message,room:this.roomId}),this.messageForm.reset(),this.messageService.newMessageRecived().subscribe(n=>{this.messages=n})}createGroup(){this.dialog.open(v,{panelClass:"center-dialog"}).afterClosed().subscribe(n=>{this.onRetrivingGroupsInitally()})}retriveAllgroups(){this.messageService.retriveUserGroups({userId:this.userId})}toggleSendBtn(t){this.isEmptyMsg=0!=t.target.value.length}onRetrivingGroupsInitally(){this.messageService.getGroups().subscribe({next:t=>{this.groups=t.groups},error:()=>{}})}onGroupchat(t){this.messageService.getGroupChatRoom(t.groupName),this.messageService.retriveGroupRoom().subscribe({next:n=>{this.showChatBox=!0,this.isGroupChat=!0,this.isPrivateChat=!1,this.groupChat=[t],this.messages=n.message},error:()=>{}})}sendGroupMessage(t){this.messageService.sendGroupMessage({groupName:t.groupName,members:t.members,sender:this.userId,message:this.messageForm.value.message}),this.messageForm.reset(),this.messageService.newgroupMessages().subscribe(n=>{this.messages=n.message})}showGroupDetails(t){this.dialog.open(N,{data:t}).afterClosed().subscribe(o=>{})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(m.w),e.Y36(c.qu),e.Y36(u.uw))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-message"]],viewQuery:function(t,n){if(1&t&&e.Gf(q,5),2&t){let o;e.iGM(o=e.CRH())&&(n.messageContainer=o.first)}},decls:23,vars:6,consts:[[1,"container"],[1,"allusers"],[1,"title","wid"],["type","text",3,"input"],["id","search",1,"material-symbols-outlined"],[1,"listOfUers"],[4,"ngIf"],["id","noSearch",4,"ngIf"],[1,"groupContainer"],[1,"create"],["id","group",3,"click"],["class","noGroups",4,"ngIf"],["class","initalMessageDiv",4,"ngIf"],["class","messageDiv",4,"ngIf"],["class","user",4,"ngFor","ngForOf"],[1,"user"],["id","tapToChat",3,"click"],["alt","","srcset","","id","profile",3,"src"],["id","username"],["id","noSearch"],[1,"noGroups"],["class","groups",4,"ngFor","ngForOf"],[1,"groups"],["id","groupDiv",3,"click"],["src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAjVBMVEVJser////j4+O13/by8vLg4ODq6ur7+/vt7e309PT4+Ph9vuFhu+32+/5QtOvm9Pzb8Pva2tqX0vN8x/Dn9fyr2/Vyw+/C5fhUtuuJzPG94/fN6vmi1/Te8fvv+P1nvu3I4e+Pz/Kmx9lstN1cseC0z92Fv96RxODZ6vHM2eKnz+R3v+a72eua0OzJ6PiTwSurAAAJvklEQVR4nN2daQOaOBCGQbzLpcihKJa2u9tuu/7/n7cgooRMjoFEkPczIg+ZzEyuwTD1aJX5aWyF5zyIbNe1oyA/h1ac+tlK0x8ayu/oeLcwcA2mkiBMPUf536oFOVgRm4BUZB2U/rU6kMMpkIWoFZzUwagBcW5HLESt402NmakASdFN0WqYVMFD9Abx9v0oKu29YUGyMFGBUSoJs8FAvJ4m1VbQp1m6g1ykPa28osvbQfyreoxSV/+tILoweqB0AbnY+jBK2V0MDA/idI598srxQRINEuvHKBVrBvE0dg5SV6QvRoE4SqK4rPYo+8KA+JxRhg65GP+FADm/F6PUWQOIoyGQixVJm5csyLvNqpa0eUmCDGBWtSTNSwrEeZvThXSVMi8ZkMNAZlXLlRnZS4BchsUoJZF8iUHSoSlKiUf1QpDT0AyVTn1BwqEJaoX9QN6aXPG17wPyhqGHvI7dQUbUHqW4bcIDGU3/qMXrJxyQkfirpji+iw0yivjRFjueMEFGEM8hMWM8C+Qw9BOzxMq7GCDOwHkiWy4jF2aADJq38xVhQAYcR4kFj7RAEH/oZ+ULHP1CIOPtIJXAbgKBDDJfghHUTQCQUXeQSkA3oUFG3kEq0d2EAhl7B6lEdxMKZGSpO0tUSt8G8YZ+Qlm1U5U2yIhDOqkrH+RN61EqFPNAnKGfDiOHAzKqyQaRcjbISAdTLF2YIJrXz1XLZoF8RExvymeAfFiDkC64AfJxDUI0SQPkY2LhS1cI5MNcVqULADL64RSkiAb5mGyRlEeBKN6f+C4FbZBs6CfqqqwFMrolBFlZLRBl+3ffrYQE0dfVo+M+DPdHfVmDR4BoGqlH1nN79SXUxLInQLT8xfVmNrWy9NhvE0TL6hQ9i+Zo8fF+A0TDH7jgep+OWczgBaJjqH6DOPSQOE+Qm/qbM1eSNUwL3J4g6m/O3qXgqHdexyeI8lvztoppmDqrQdSv4HI3W6gfLxweIOq3OHD37qlvkvgBotz5tudlW71E+cJF8ABRfV/RDlf1UasCUd9FBDsQ1ceSwx3EUn5fwaZQ9X9o3UHUexHBjmP18Te6gyi/rWjDp4aZwBKkY6LlRnnASssFZzyZ/te9dk30nQKky+Awsvx7pQAvBrMbwQkDsI+4x9PdItN9lxzGK0DwYxG36V5vwP8KTnpBw9Gg0a86eLW0AEHPn1xJpwQc58v5IPQks0uiH9CNEhYg2PB0pcpPUG84aV9BCLDl3aZ1DdaTBgUIMmFw6SBBHy/hRkTaBL7tdsvWLZFPlZjGCvcLMP2g/Cljl1v1jJRn+r7b7RYzsqGxiezKQM6Vwo9IdU/GQBe81tiVIIvFnLgMaVyZgYxOFvhwVLpmM4M7fersS8WxWCybjYJ8Lt9Ael9GiKDMJYCvMzPaIX17cCxms23jStxzpQZumOMyKubQri8Hr4NOMz4aZFaqYV64IB8buFSU1YuBGBYA1gWdWXYfDXIHWa6fbwrXSSwDFw/h9wynT3SpgBh6yz8aIMtCtXnhpqNDA5cPsEwffh1H4ih3Cr9jt9kgpR7mhQvUZyNHXc+K2ayZsSis4qfjn5mr3wuiQZbr9fxuXrg0JTeQGQrjuDzvX5MrPzv/i+AoQNbr0rxwsT0wkIEHTmx7TR7/TXHM55sVciYhMpCJJjwXyk0oXJvvSX80O0jFMd9scCZfYGAnmaDkI2M8aRKc08PdC2e+lTM7yT9kg8xLkJ/Ix3LRIFDyAfazJG+73yxksPxqN8h8gx3zuljTgowLMqzgBGZb/h4MJVSDIA2rNC38ZFC7OsaJejb7zJ78XcVA+31fkO2B5igwOsxfEiE7o26QwBnyS1AdqH8bID87zKUEyID40PONO3RzyJQzOdEG/f3rg+NnpyfKkSnKU4VDikNgG4BkhSxnDziZ5Pd/v7uuZ52RSaNAifDY+cu+1M7Jh8g0viE7ot4elLmzBfxz9x0FFnJgdZd7DG+XMrFbXW7h8WUj/HPatG4N8yrM6s+y6OjrP/8xZ2J5irFD3XK6lHzvmfUIc4KT84DSxyO7X349I8hms916R/SiVoqcfEj2UGe+lGEOUefnKb8k+fGnmWMVHNvVahUj45uPmw5iulZnL6rJAOti//hFhPQHR2G4B9T23QwzQdej+CBTzjOkvxpkewdhjIwZWslPmdryrhWjzRIwrHoGQnrcnshPYssXiEJq3cixao7nVIon2SiB9LICLkRgtKU7SGPyjDXUaSmUXejBhgiMiPbYkhyym3BSyaU3fIhAaF5xgA1SSsZ7eXKLobxVgv7aztqetyUJd+TILU93LZQqqd1u3fa8hCTWSuQ2DOjsIKUWu92MwyExVxfJbeHgrNoo0bKcj5+zDMuUWOa1pDbV8Jc2FWheLlntlmBPv0vYjQ9S25x0W5a5vYMU5sVoELFtmVIbz7qlgxjtHquIaxaI4AnrjWcCr6Ciqjtfi3oVkVh7a0iQfdRbAQWdpF8ZdBkt61XExWwOXiA4yFZvzuR3Ehu8tR6QcsYRbBQ+iGnKbGBmLVIp1Lq5jDhbA1dwU8fXBmbulrb8DSCLBgfYKFy39dpSzvXTWhPGSvNdkwNqFG7i+Nrkz3VvXSYVkNosWiCztvvipVGNYxfcMYn+MFKBzEiRjcJ7082DMDyvIJpbV6AtzdFqFJ47MpsgnFG+njkHCZDZaxeEyZmhJw+LcYaJuSXQ7dJSKvrF6SupP18YOtbidHby+N5kDlRO54jrZA4dT+YY+HQO5k+mVMJ0ildMppzIdAq8TKbkzuc1CasI0qc1CbMs1ac5LnahsMmUbptOMb3JlDf8oKgoKDj5ObmjqAToZIqyTqdM7mfEd4nCxdMpJf0BQyzJ4t6j7ybS5dbH3k2kC+CPvJsgPkkw6gCP+kjEiLsJ8rMdk/mQymgHWehP20znY0PT+fzTCJcaOn6Qa3QpfedPpI1sMqLHR+tG1Sa9PiM4on7S88OOo/FdvT+1OZJ4ouDjp6OI8Uo+RzudDwQP9SXwWnIHPqRAJvMRbXM6nzWfzofmzUHMC7F7DwHydvOSNissiOm8NfXaM/aXKwDBnnLso6tM8OgO8rY1LUFhQQUgptOpAgBOOf6wIB6kPGCrF8PucpS2C0jhvzR2FbqalUYQfSgdMbqDwEVB+qrH+ezuIKbpKd4HGTBqXmkHKcskKNsvnFj9Tg71AynkKYn2+z6NoQakkN/TxAIVR2hVgBRB8tZ5Ku94U3NSXg1IqQNUpknQFDEyoeJIHUipgyXtkyNLHUQptSClHC8NecVmkiBMPfWFF9SDVFplfhpb4TkPItt17SjIz6EVp36GGmQg9D/wvpwDqPRgZwAAAABJRU5ErkJggg==","alt",""],[1,"boxi"],[1,"initalMessageDiv"],[1,"material-symbols-outlined"],[1,"messageDiv"],[4,"ngFor","ngForOf"],[1,"header"],[1,"userDp"],["alt","","id","profileH",3,"src"],["id","name"],[1,"headerOptions"],[1,"messages"],[1,"chatbox"],["messageContainer",""],[1,"sendMessageFeild"],[3,"formGroup"],["type","text","placeholder","Message...","id","feild","formControlName","message","autocomplete","off",3,"input"],[1,"btn",3,"disabled","click"],[3,"ngClass"],[1,"material-symbols-outlined",3,"click"],[1,"createdBy"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4,"Messages"),e.qZA(),e.TgZ(5,"input",3),e.NdJ("input",function(r){return n.onSearchUsers(r)}),e.qZA(),e.TgZ(6,"span",4),e._uU(7,"\nperson_search\n"),e.qZA()(),e.TgZ(8,"div",5),e.YNc(9,J,2,1,"div",6),e.YNc(10,F,3,0,"div",7),e.qZA(),e.TgZ(11,"div",8)(12,"div",2)(13,"h2"),e._uU(14,"Groups"),e.qZA(),e.TgZ(15,"div",9)(16,"div")(17,"span",10),e.NdJ("click",function(){return n.createGroup()}),e._uU(18,"Create new Group "),e.qZA()()()(),e.YNc(19,k,2,0,"div",11),e.YNc(20,R,2,1,"div",6),e.qZA()(),e.YNc(21,z,8,0,"div",12),e.YNc(22,X,3,2,"div",13),e.qZA()),2&t&&(e.xp6(9),e.Q6J("ngIf",0!=n.searchResult.length),e.xp6(1),e.Q6J("ngIf",0==n.searchResult.length),e.xp6(9),e.Q6J("ngIf",0==n.groups.length),e.xp6(1),e.Q6J("ngIf",0!=n.groups.length),e.xp6(1),e.Q6J("ngIf",!n.showChatBox),e.xp6(1),e.Q6J("ngIf",n.showChatBox))},dependencies:[p.mk,p.sg,p.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u]}),s})();var f=d(1449);const $=[{path:"",children:[{path:"",component:W,canActivate:[f.s]},{path:"group",component:v,canActivate:[f.s]}]}];let ee=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[_.Bz.forChild($),_.Bz]}),s})();var te=d(1469);let se=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.ez,ee,c.u5,c.UX,te.m]}),s})()}}]);