(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(33),a=n(4),c=n(80),s="SOCIAL-NETWORK/DIALOG/ADD-NEW-MESSAGE",i={dialogs:[{id:Object(c.a)(),name:"Alena"},{id:Object(c.a)(),name:"Dima"}],messages:[{id:Object(c.a)(),message:"hello!"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:Object(c.a)(),message:t.newMessage};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}},u=function(e){return{type:s,newMessage:e}}},13:function(e,t,n){e.exports={navbar:"Navbar_navbar__3JtJA",navbarItems:"Navbar_navbarItems__3IyF9",item:"Navbar_item__3px6H",active:"Navbar_active__2GpVG",friends:"Navbar_friends__2MIms",listFriends:"Navbar_listFriends__2UX4P"}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(4),a=n(61),c=(n(1),n(11)),s=n(12),i=n(0),o=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(s.b)(o)((function(t){var n=t.isAuth,s=Object(a.a)(t,["isAuth"]);return n?Object(i.jsx)(e,Object(r.a)({},s)):Object(i.jsx)(c.a,{to:"/login"})}))}},143:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(139),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b173ba34-22d3-4323-a92a-0dbd941b56f3"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileInfo:function(e){return a.put("profile",e)}},i={authMe:function(){return a.get("auth/me")},login:function(e,t,n,r){return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},170:function(e,t,n){},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(60),a=n(1),c=n(98),s=n.n(c),i=n(0),o=function(e){var t=e.onClickHandler,n=e.buttonName,c=e.style,o=Object(a.useState)(!1),u=Object(r.a)(o,2),l=u[0],d=u[1];return Object(i.jsx)("div",{children:Object(i.jsx)("button",{onMouseEnter:function(e){d(!0)},onMouseLeave:function(e){d(!1)},className:l?s.a.active:s.a.button,onClick:t,style:c,children:n})})}},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(4),a=n(61),c=(n(1),n(62)),s=n.n(c),i=n(0),o=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:"".concat(s.a.formElement," ").concat(o&&s.a.error),children:[Object(i.jsx)("div",{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),c))}),o&&Object(i.jsx)("span",{children:n.error})]})},u=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:"".concat(s.a.formElement," ").concat(o&&s.a.error),children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),c))}),o&&Object(i.jsx)("span",{children:n.error})]})}},253:function(e,t,n){},28:function(e,t,n){e.exports={logForm:"Login_logForm__q0yHB",input:"Login_input__3aXKx",checkbox:"Login_checkbox__2VWm2",btn:"Login_btn__KifRG",info:"Login_info__2Oq8a",error:"Login_error__26nHC"}},297:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=(n(170),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,303)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),s=n(10),i=n(9),o=n.n(i),u=n(16),l=n(33),d=n(4),j=n(80),b=n(17),f=n(40),p=n(31),O="SOCIAL-NETWORK/PROFILE/ADD-NEW-POST",h="SOCIAL-NETWORK/PROFILE/SET_USER_PROFILE",m="SOCIAL-NETWORK/PROFILE/SET_STATUS",x="SOCIAL-NETWORK/PROFILE/SAVE_PHOTO",v="SOCIAL-NETWORK/PROFILE/TOGGLE_EDIT_FORM",g={posts:[{id:Object(j.a)(),message:"Hi, my friends!",likes:10},{id:Object(j.a)(),message:"yo, yo",likes:5},{id:Object(j.a)(),message:"ya-hu-how!",likes:7}],userProfile:null,editForm:!1,status:""},_=function(e){return{type:m,status:e}},N=function(e){return{type:v,edit:e}},P=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(f.c)(!0)),t.next=3,b.b.getProfile(e);case 3:r=t.sent,n(Object(f.c)(!1)),n((a=r.data,{type:h,userProfile:a}));case 6:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},S=n(113),y="SOCIAL-NETWORK/SIDEBAR/CHANGE-SHOW-FRIENDS",w={friends:[{id:Object(j.a)(),name:"Alena"},{id:Object(j.a)(),name:"Dima"},{id:Object(j.a)(),name:"Kolya"},{id:Object(j.a)(),name:"Usik"}],showFriends:!0},E="SOCIAL-NETWORK/AUTH/SET_AUTH_DATA",I="SOCIAL-NETWORK/AUTH/SET_CAPTCHA_URL",A={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},k=function(e,t,n,r){return{type:E,payload:{id:e,email:t,login:n,isAuth:r}}},C=function(e){return{type:I,payload:{captchaUrl:e}}},F=function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.authMe();case 2:return 0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,t(k(a,c,s,!0))),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.c.getCaptchaUrl();case 2:n=e.sent,t(C(n.data.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T="SOCIAL-NETWORK/APP/SET_INITIALIZATION",R={initialized:!1},U=n(140),M=n(138),W=Object(s.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n={id:Object(j.a)(),message:t.newMessagePost,likes:0};return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[n])});case h:return Object(d.a)(Object(d.a)({},e),{},{userProfile:t.userProfile});case m:return Object(d.a)(Object(d.a)({},e),{},{status:t.status});case x:return Object(d.a)(Object(d.a)({},e),{},{userProfile:Object(d.a)(Object(d.a)({},e.userProfile),{},{photos:t.photos})});case v:return Object(d.a)(Object(d.a)({},e),{},{editForm:t.edit});default:return e}},dialogPage:S.a,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(d.a)(Object(d.a)({},e),{},{showFriends:!e.showFriends});default:return e}},usersPage:f.e,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case I:return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},form:M.a}),D=Object(s.e)(W,Object(s.a)(U.a)),K=n(72),H=n.n(K),G=n(42),J=n(43),z=n(46),B=n(45),V=(n(253),n(11)),q=n(0),X=function(){return Object(q.jsx)("div",{children:"Settings"})},Y=function(){return Object(q.jsx)("div",{children:"News"})},Z=function(){return Object(q.jsx)("div",{children:"Music"})},Q=n(15),$=n(13),ee=n.n($),te=n(20),ne=n(12),re=Object(ne.b)((function(e){return{sidebar:e.sidebar}}),{changeShowFriends:function(){return{type:y}}})((function(e){var t=e.changeShowFriends,n=e.sidebar,r=n.friends.map((function(e){return Object(q.jsx)("div",{children:"friend"},e.id)}));return Object(q.jsxs)("nav",{className:ee.a.navbar,children:[Object(q.jsxs)("div",{className:ee.a.navbarItems,children:[Object(q.jsx)("div",{className:ee.a.item,children:Object(q.jsx)(Q.b,{to:"/profile",activeClassName:ee.a.active,children:"Profile"})}),Object(q.jsx)("div",{className:ee.a.item,children:Object(q.jsx)(Q.b,{to:"/dialogs",activeClassName:ee.a.active,children:"Message"})}),Object(q.jsx)("div",{className:ee.a.item,children:Object(q.jsx)(Q.b,{to:"/users",activeClassName:ee.a.active,children:"Users"})}),Object(q.jsx)("div",{className:ee.a.item,children:Object(q.jsx)(Q.b,{to:"/news",activeClassName:ee.a.active,children:"News"})}),Object(q.jsx)("div",{className:ee.a.item,children:Object(q.jsx)(Q.b,{to:"/music",activeClassName:ee.a.active,children:"Music"})}),Object(q.jsx)("div",{className:ee.a.item,children:Object(q.jsx)(Q.b,{to:"/settings",activeClassName:ee.a.active,children:"Settings"})})]}),Object(q.jsx)("h3",{children:"Friends"}),Object(q.jsxs)("div",{className:ee.a.listFriends,children:[Object(q.jsx)("div",{className:ee.a.friends,children:n.showFriends&&r}),n.showFriends?Object(q.jsx)(te.a,{onClickHandler:t,buttonName:"hide friends"}):Object(q.jsx)(te.a,{onClickHandler:t,buttonName:"show friends"})]})]})})),ae=n(143),ce=n.n(ae),se=n(35),ie=n.n(se),oe=n(50),ue=n(60),le=function(e){var t=Object(r.useState)(!1),n=Object(ue.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(ue.a)(s,2),o=i[0],u=i[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(q.jsxs)("div",{children:[!a&&Object(q.jsx)("div",{children:Object(q.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status?e.status:"What is new?"})}),a&&Object(q.jsx)("div",{children:Object(q.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(o)},value:o})})]})},de=n(73),je=n(21),be=n(136),fe=n(137),pe=Object(fe.a)({form:"edit-info"})((function(e){return Object(q.jsxs)("form",{onSubmit:e.handleSubmit,className:ie.a.info_form,children:[e.error&&Object(q.jsx)("div",{className:ie.a.error,children:e.error}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:'"Full name" :'}),Object(q.jsx)(be.a,{placeholder:"enter text...",name:"fullName",component:je.a})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:'"AboutMe" :'}),Object(q.jsx)(be.a,{placeholder:"enter text...",name:"aboutMe",component:je.b})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:'"LookingForAJob" :'}),Object(q.jsx)(be.a,{name:"lookingForAJob",component:je.a,type:"checkbox"})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:'"LookingForAJobDescription" :'}),Object(q.jsx)(be.a,{placeholder:"enter text...",name:"lookingForAJobDescription",component:je.b})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:"Contacts : "}),e.userProfile&&Object.keys(e.userProfile.contacts).map((function(e){return Object(q.jsxs)("div",{children:[Object(q.jsxs)("u",{children:[" ",e," :"]}),Object(q.jsx)(be.a,{placeholder:"enter text...",name:"contacts."+e,component:je.a})]},e)}))]}),Object(q.jsx)("div",{style:{marginTop:"20px"},children:Object(q.jsx)(te.a,{buttonName:"Save info"})})]})})),Oe=function(e){var t=e.userProfile,n=e.isOwner,r=e.onEditMode;return Object(q.jsxs)("div",{className:ie.a.info,children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:'"Full name" :'}),(null===t||void 0===t?void 0:t.fullName)?t.fullName:"not indicated"]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:'"About me" :'}),(null===t||void 0===t?void 0:t.aboutMe)?t.aboutMe:"not indicated"]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:'"Loking for a job" :'}),(null===t||void 0===t?void 0:t.lookingForAJob)?"yes":"no"]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:'"My professional skills" :'}),(null===t||void 0===t?void 0:t.lookingForAJobDescription)?t.lookingForAJobDescription:"not indicated"]}),n&&Object(q.jsx)("div",{children:Object(q.jsx)(te.a,{onClickHandler:r,buttonName:"Edit information"})}),Object(q.jsxs)("div",{children:[Object(q.jsx)("u",{children:"Contacts : "}),t&&Object.keys(t.contacts).map((function(e){return Object(q.jsx)(he,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},he=a.a.memo((function(e){var t=e.contactTitle,n=e.contactValue;return Object(q.jsxs)("div",{style:{paddingLeft:"20px"},children:[Object(q.jsxs)("span",{children:['"',t,'" :']}),n||"not indicated"]})})),me=function(e){var t=e.userProfile,n=e.loading,r=e.isOwner,a=e.status,c=e.updateStatus,s=e.photoUpload,i=e.saveProfileInfo,o=e.editForm,u=e.toggleEditForm;return Object(q.jsxs)("div",{className:ie.a.profileInfoBlock,children:[Object(q.jsxs)("div",{children:[!n&&t?Object(q.jsx)("img",{alt:"",style:{width:"300px",height:"300px"},src:t.photos.large?t.photos.large:de.a}):Object(q.jsx)(oe.a,{}),Object(q.jsx)("div",{children:r&&Object(q.jsx)("input",{type:"file",onChange:function(e){e.target.files&&s(e.target.files[0])}})}),Object(q.jsx)("div",{className:ie.a.status,children:Object(q.jsx)(le,{status:a,updateStatus:c})})]}),o?Object(q.jsx)(pe,{userProfile:t,onSubmit:function(e){i(e)}}):Object(q.jsx)(Oe,{userProfile:t,isOwner:r,onEditMode:function(){u(!0)}})]})},xe=n(78),ve=n.n(xe),ge=n(79),_e=n.n(ge),Ne=function(e){var t=e.message,n=e.likes,r=e.profilePhoto;return Object(q.jsxs)("div",{className:_e.a.post_item,children:[Object(q.jsx)("img",{alt:"",src:r||de.a}),Object(q.jsx)("span",{className:_e.a.post,children:t}),Object(q.jsxs)("span",{className:_e.a.like,children:["likes: ",n]})]})},Pe=n(36),Se=a.a.memo((function(e){var t=e.addPost,n=e.posts,r=e.profilePhoto,a=Object(l.a)(n).reverse().map((function(e){return Object(q.jsx)(Ne,{message:e.message,likes:e.likes,profilePhoto:r},e.id)}));return Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{className:ve.a.heading,children:"-- My posts --"}),Object(q.jsx)("div",{className:ve.a.add_post,children:Object(q.jsx)(ye,{onSubmit:function(e){t(e.newPost)}})}),Object(q.jsx)("div",{className:ve.a.post,children:a})]})})),ye=Object(fe.a)({form:"MyPostForm"})((function(e){return Object(q.jsx)("form",{onSubmit:e.handleSubmit,children:Object(q.jsxs)("div",{children:[Object(q.jsx)(be.a,{placeholder:"enter your post",name:"newPost",component:je.b,validate:[Pe.c,Pe.a]}),Object(q.jsx)(te.a,{buttonName:"add post"})]})})})),we=n(135),Ee=function(e){Object(z.a)(n,e);var t=Object(B.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"changeProfile",value:function(){var e=Number(this.props.match.params.userId);e||(e=this.props.myId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.changeProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.changeProfile()}},{key:"render",value:function(){return Object(q.jsxs)("div",{className:ce.a.content,children:[Object(q.jsx)(me,{userProfile:this.props.userProfile,loading:this.props.loading,isOwner:!this.props.match.params.userId,status:this.props.status,updateStatus:this.props.updateStatus,photoUpload:this.props.photoUpload,saveProfileInfo:this.props.saveProfileInfo,editForm:this.props.editForm,toggleEditForm:this.props.toggleEditForm}),Object(q.jsx)(Se,{posts:this.props.posts,addPost:this.props.addPost,profilePhoto:this.props.profilePhoto})]})}}]),n}(a.a.Component),Ie=Object(s.d)(Object(ne.b)((function(e){var t,n;return{posts:e.profilePage.posts,userProfile:e.profilePage.userProfile,loading:e.usersPage.loading,isAuth:e.auth.isAuth,myId:e.auth.id,status:e.profilePage.status,profilePhoto:null===(t=e.profilePage.userProfile)||void 0===t||null===(n=t.photos)||void 0===n?void 0:n.large,editForm:e.profilePage.editForm}}),{addPost:function(e){return{type:O,newMessagePost:e}},getProfile:P,getStatus:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(f.c)(!0)),t.next=3,b.b.getStatus(e);case 3:r=t.sent,n(Object(f.c)(!1)),n(_(r.data));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(_(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},photoUpload:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.b.updatePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:x,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfileInfo:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,r){var a,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.id,t.next=3,b.b.saveProfileInfo(e);case 3:0===(c=t.sent).data.resultCode?(n(P(a)),n(N(!1))):(s=c.data.messages.length>0?c.data.messages[0]:"Some error!",n(Object(p.a)("edit-info",{_error:s})));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},toggleEditForm:N}),V.g,we.a)(Ee),Ae=n(63),ke=n.n(Ae),Ce=function(e){return Object(q.jsx)("header",{className:ke.a.header,children:Object(q.jsx)("div",{className:ke.a.headerContainer,children:e.isAuth?Object(q.jsxs)("div",{className:ke.a.login,children:[" ",e.login," ",Object(q.jsx)(te.a,{onClickHandler:e.logout,buttonName:"LogOut"})," "]}):Object(q.jsx)(Q.b,{className:ke.a.navlink,to:"/login",children:"Login"})})})},Fe=function(e){Object(z.a)(n,e);var t=Object(B.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return Object(q.jsx)(Ce,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(a.a.Component),Le=Object(ne.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.logout();case 2:0===e.sent.data.resultCode&&(t(k(null,null,null,!1)),t(C(null)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Fe),Te=n(28),Re=n.n(Te),Ue=Object(fe.a)({form:"login"})((function(e){return Object(q.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(q.jsx)("div",{className:Re.a.input,children:Object(q.jsx)(be.a,{placeholder:"email",name:"email",component:je.a,validate:[Pe.c,Pe.b]})}),Object(q.jsx)("div",{className:Re.a.input,children:Object(q.jsx)(be.a,{placeholder:"password",name:"password",component:je.a,validate:[Pe.c,Pe.b]})}),Object(q.jsxs)("div",{className:Re.a.checkbox,children:[Object(q.jsx)(be.a,{component:je.a,name:"rememberMe",type:"checkbox"}),Object(q.jsx)("p",{children:"remember me"})]}),e.captchaUrl&&Object(q.jsx)("img",{src:e.captchaUrl}),e.captchaUrl&&Object(q.jsx)("div",{children:Object(q.jsx)(be.a,{placeholder:"enter symbols from image",component:je.a,name:"captcha"})}),e.error&&Object(q.jsx)("div",{className:Re.a.error,children:e.error}),Object(q.jsx)("div",{className:Re.a.btn,children:Object(q.jsx)(te.a,{buttonName:"Login"})})]})})),Me=Object(ne.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(u.a)(o.a.mark((function a(c){var s,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(F()):(10===s.data.resultCode&&c(L()),i=s.data.messages.length>0?s.data.messages[0]:"Some error!",c(Object(p.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuth,r=e.captchaUrl;return n?Object(q.jsx)(V.a,{to:"/profile"}):Object(q.jsxs)("div",{className:Re.a.logForm,children:[Object(q.jsxs)("div",{className:Re.a.info,children:["To login in the application, please enter the email and password of the test account",Object(q.jsx)("br",{}),"Email: ",Object(q.jsx)("span",{children:"free@samuraijs.com"}),Object(q.jsx)("br",{}),"Password: ",Object(q.jsx)("span",{children:"free"})]}),Object(q.jsx)("h2",{children:"Login"}),Object(q.jsx)(Ue,{captchaUrl:r,onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}})]})})),We=a.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),De=a.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),Ke=function(e){Object(z.a)(n,e);var t=Object(B.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(q.jsxs)("div",{className:"app-wrapper",children:[Object(q.jsx)(Le,{}),Object(q.jsx)(re,{}),Object(q.jsx)("div",{className:"app-wrapper-content",children:Object(q.jsxs)(V.d,{children:[Object(q.jsx)(V.b,{path:"/profile/:userId?",render:function(){return Object(q.jsx)(Ie,{})}}),Object(q.jsx)(V.b,{path:"/dialogs",render:function(){return Object(q.jsx)(r.Suspense,{fallback:Object(q.jsx)(oe.a,{}),children:Object(q.jsx)(We,{})})}}),Object(q.jsx)(V.b,{path:"/users",render:function(){return Object(q.jsx)(r.Suspense,{fallback:Object(q.jsx)(oe.a,{}),children:Object(q.jsx)(De,{})})}}),Object(q.jsx)(V.b,{path:"/music",render:function(){return Object(q.jsx)(Z,{})}}),Object(q.jsx)(V.b,{path:"/news",render:function(){return Object(q.jsx)(Y,{})}}),Object(q.jsx)(V.b,{path:"/settings",render:function(){return Object(q.jsx)(X,{})}}),Object(q.jsx)(V.b,{path:"/login",render:function(){return Object(q.jsx)(Me,{})}}),Object(q.jsx)(V.b,{path:"/social-network",render:function(){return Object(q.jsx)(V.a,{to:"/profile"})}}),Object(q.jsx)(V.b,{exact:!0,path:"/",render:function(){return Object(q.jsx)(V.a,{to:"/profile"})}}),Object(q.jsx)(V.b,{path:"*",render:function(){return Object(q.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(q.jsx)(oe.a,{})}}]),n}(a.a.Component),He=Object(s.d)(Object(ne.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(F());Promise.all([t]).then((function(){e({type:T})}))}}}),V.g)(Ke);H.a.render(Object(q.jsx)(ne.a,{store:D,children:Object(q.jsx)(Q.a,{children:Object(q.jsx)(He,{})})}),document.getElementById("root")),c()},35:function(e,t,n){e.exports={profileInfoBlock:"ProfileInfo_profileInfoBlock__3suiF",status:"ProfileInfo_status__1Nxje",info:"ProfileInfo_info__2iS-I",info_form:"ProfileInfo_info_form__OI2OF",error:"ProfileInfo_error__1E0S-"}},36:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=function(e){if(!e)return"Field is required to enter!"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols!"):void 0}},c=a(10),s=a(100)},40:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return N})),n.d(t,"a",(function(){return P})),n.d(t,"d",(function(){return S}));var r=n(9),a=n.n(r),c=n(16),s=n(33),i=n(4),o=n(17),u="SOCIAL-NETWORK/USERS/UNFOLLOW",l="SOCIAL-NETWORK/USERS/FOLLOW",d="SOCIAL-NETWORK/USERS/SET_USERS",j="SOCIAL-NETWORK/USERS/SET_CURRENT_PAGE",b="SOCIAL-NETWORK/USERS/SET_TOTAL_COUNT",f="SOCIAL-NETWORK/USERS/TOGGLE_LOADING",p="SOCIAL-NETWORK/USERS/TOGGLE_FOLLOWING_PROGRESS",O={users:[],count:50,totalCount:0,currentPage:1,loading:!1,followingProgress:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case u:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalCount:t.totalCount});case f:return Object(i.a)(Object(i.a)({},e),{},{loading:t.loading});case p:return Object(i.a)(Object(i.a)({},e),{},{followingProgress:t.isLoading?[].concat(Object(s.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},m=function(e){return{type:l,userId:e}},x=function(e){return{type:u,userId:e}},v=function(e){return{type:j,currentPage:e}},g=function(e){return{type:f,loading:e}},_=function(e,t){return{type:p,isLoading:e,userId:t}},N=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(e)),r(g(!0)),n.next=4,o.d.getUsers(e,t);case 4:c=n.sent,r(g(!1)),r((s=c.data.items,{type:d,users:s})),r((a=c.data.totalCount,{type:b,totalCount:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,o.d.follow(e);case 3:0===t.sent.data.resultCode&&n(m(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,o.d.unfollow(e);case 3:0===t.sent.data.resultCode&&n(x(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n.p+"static/media/preloader.d3fbaf2b.gif",a=(n(1),n(0)),c=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{alt:"there should be ",src:r})})}},62:function(e,t,n){e.exports={formElement:"FormElements_formElement__2tkD1",error:"FormElements_error__gdMqo"}},63:function(e,t,n){e.exports={header:"Header_header___SfV1",headerContainer:"Header_headerContainer__OyN1A",login:"Header_login__3bWw6",navlink:"Header_navlink__2785N"}},73:function(e,t,n){"use strict";t.a=n.p+"static/media/Avaimg.4e89b174.png"},78:function(e,t,n){e.exports={heading:"MyPosts_heading__3mMuh",add_post:"MyPosts_add_post__2UtlE",post:"MyPosts_post__ROcyD"}},79:function(e,t,n){e.exports={post_item:"Post_post_item__21zv8",like:"Post_like__1Fhs5",post:"Post_post__1Uo7o"}},98:function(e,t,n){e.exports={button:"Buttons_button__2ant2",active:"Buttons_active__1jy1t"}}},[[297,1,2]]]);
//# sourceMappingURL=main.7b46bee4.chunk.js.map