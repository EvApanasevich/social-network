(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){e.exports={header:"Header_header___SfV1",login:"Header_login__3bWw6"}},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(30),a=n(5),s=n(77),c="SOCIAL-NETWORK/DIALOG/ADD-NEW-MESSAGE",i={dialogs:[{id:Object(s.a)(),name:"Alena"},{id:Object(s.a)(),name:"Dima"}],messages:[{id:Object(s.a)(),message:"hello!"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:Object(s.a)(),message:t.newMessage};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}},u=function(e){return{type:c,newMessage:e}}},13:function(e,t,n){e.exports={navbar:"Navbar_navbar__3JtJA",navbarItems:"Navbar_navbarItems__3IyF9",item:"Navbar_item__3px6H",active:"Navbar_active__2GpVG",friends:"Navbar_friends__2MIms",listFriends:"Navbar_listFriends__2UX4P"}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(5),a=n(59),s=(n(0),n(11)),c=n(12),i=n(1),o=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(c.b)(o)((function(t){var n=t.isAuth,c=Object(a.a)(t,["isAuth"]);return n?Object(i.jsx)(e,Object(r.a)({},c)):Object(i.jsx)(s.a,{to:"/login"})}))}},141:function(e,t,n){},142:function(e,t,n){e.exports={info:"ProfileInfo_info__2iS-I"}},143:function(e,t,n){e.exports={error:"Login_error__26nHC"}},170:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(137),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f2303fc9-e527-4a0d-a589-c2b1964ace41"}}),s={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={authMe:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},253:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(58),a=n(0),s=n(95),c=n.n(s),i=n(1),o=function(e){var t=e.onClickHandler,n=e.buttonName,s=Object(a.useState)(!1),o=Object(r.a)(s,2),u=o[0],l=o[1];return Object(i.jsx)("div",{children:Object(i.jsx)("button",{onMouseEnter:function(e){l(!0)},onMouseLeave:function(e){l(!1)},className:u?c.a.active:c.a.button,onClick:t,children:n})})}},297:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=(n(170),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,303)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),c=n(9),i=n(10),o=n.n(i),u=n(18),l=n(30),d=n(5),j=n(77),b=n(21),f=n(36),O="SOCIAL-NETWORK/PROFILE/ADD-NEW-POST",p="SOCIAL-NETWORK/PROFILE/SET_USER_PROFILE",h="SOCIAL-NETWORK/PROFILE/SET_STATUS",m={posts:[{id:Object(j.a)(),message:"Hi, my friends!",likes:10},{id:Object(j.a)(),message:"yo, yo",likes:5},{id:Object(j.a)(),message:"ya-hu-how!",likes:7}],userProfile:null,status:""},v=function(e){return{type:h,status:e}},x=n(111),g="SOCIAL-NETWORK/SIDEBAR/CHANGE-SHOW-FRIENDS",_={friends:[{id:Object(j.a)(),name:"Alena"},{id:Object(j.a)(),name:"Dima"},{id:Object(j.a)(),name:"Kolya"},{id:Object(j.a)(),name:"Usik"}],showFriends:!0},S=n(37),N="SOCIAL-NETWORK/AUTH/SET_AUTH_DATA",w={id:void 0,email:null,login:null,isAuth:!1},y=function(e,t,n,r){return{type:N,payload:{id:e,email:t,login:n},isAuth:r}},P=function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.authMe();case 2:return 0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(y(a,s,c,!0))),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E="SOCIAL-NETWORK/APP/SET_INITIALIZATION",A={initialized:!1},I=n(138),C=n(136),L=Object(c.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n={id:Object(j.a)(),message:t.newMessagePost,likes:0};return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[n])});case p:return Object(d.a)(Object(d.a)({},e),{},{userProfile:t.userProfile});case h:return Object(d.a)(Object(d.a)({},e),{},{status:t.status});default:return e}},dialogPage:x.a,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{showFriends:!e.showFriends});default:return e}},usersPage:f.e,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),{},{isAuth:t.isAuth});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},form:C.a}),k=Object(c.e)(L,Object(c.a)(I.a)),T=n(69),R=n.n(T),F=n(39),M=n(40),U=n(43),W=n(42),D=(n(253),n(11)),K=n(1),G=function(){return Object(K.jsx)("div",{children:"Settings"})},H=function(){return Object(K.jsx)("div",{children:"News"})},z=function(){return Object(K.jsx)("div",{children:"Music"})},B=n(15),J=n(13),q=n.n(J),V=n(26),X=n(12),Y=Object(X.b)((function(e){return{sidebar:e.sidebar}}),{changeShowFriends:function(){return{type:g}}})((function(e){var t=e.changeShowFriends,n=e.sidebar,r=n.friends.map((function(e){return Object(K.jsx)("div",{children:"friend"},e.id)}));return Object(K.jsxs)("nav",{className:q.a.navbar,children:[Object(K.jsxs)("div",{className:q.a.navbarItems,children:[Object(K.jsx)("div",{className:q.a.item,children:Object(K.jsx)(B.b,{to:"/profile",activeClassName:q.a.active,children:"Profile"})}),Object(K.jsx)("div",{className:q.a.item,children:Object(K.jsx)(B.b,{to:"/dialogs",activeClassName:q.a.active,children:"Message"})}),Object(K.jsx)("div",{className:q.a.item,children:Object(K.jsx)(B.b,{to:"/users",activeClassName:q.a.active,children:"Users"})}),Object(K.jsx)("div",{className:q.a.item,children:Object(K.jsx)(B.b,{to:"/news",activeClassName:q.a.active,children:"News"})}),Object(K.jsx)("div",{className:q.a.item,children:Object(K.jsx)(B.b,{to:"/music",activeClassName:q.a.active,children:"Music"})}),Object(K.jsx)("div",{className:q.a.item,children:Object(K.jsx)(B.b,{to:"/settings",activeClassName:q.a.active,children:"Settings"})})]}),Object(K.jsx)("h3",{children:"Friends"}),Object(K.jsxs)("div",{className:q.a.listFriends,children:[Object(K.jsx)("div",{className:q.a.friends,children:n.showFriends&&r}),n.showFriends?Object(K.jsx)(V.a,{onClickHandler:t,buttonName:"hide friends"}):Object(K.jsx)(V.a,{onClickHandler:t,buttonName:"show friends"})]})]})})),Z=n(141),Q=n.n(Z),$=n(142),ee=n.n($),te=n(48),ne=n(58),re=function(e){var t=Object(r.useState)(!1),n=Object(ne.a)(t,2),a=n[0],s=n[1],c=Object(r.useState)(""),i=Object(ne.a)(c,2),o=i[0],u=i[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(K.jsxs)("div",{style:{marginLeft:"20px"},children:[!a&&Object(K.jsx)("div",{children:Object(K.jsx)("span",{onDoubleClick:function(){s(!0)},children:o||"What is new?"})}),a&&Object(K.jsx)("div",{children:Object(K.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(o)},value:o})})]})},ae=n(70),se=function(e){return Object(K.jsxs)("div",{className:ee.a.info,children:[Object(K.jsx)("div",{children:!e.loading&&e.userProfile?Object(K.jsx)("img",{alt:"",style:{width:"300px",height:"300px"},src:e.userProfile.photos.large?e.userProfile.photos.large:ae.a}):Object(K.jsx)(te.a,{})}),Object(K.jsx)(re,{status:e.status,updateStatus:e.updateStatus})]})},ce=n(74),ie=n.n(ce),oe=n(75),ue=n.n(oe),le=function(e){var t=e.message,n=e.likes;return Object(K.jsxs)("div",{className:ue.a.post_item,children:[Object(K.jsx)("img",{alt:"",src:ae.a}),Object(K.jsx)("span",{className:ue.a.post,children:t}),Object(K.jsxs)("span",{className:ue.a.like,children:["likes: ",n]})]})},de=n(134),je=n(135),be=n(44),fe=n(32),Oe=a.a.memo((function(e){console.log("render");var t=e.addPost,n=e.posts,r=Object(l.a)(n).reverse().map((function(e){return Object(K.jsx)(le,{message:e.message,likes:e.likes},e.id)}));return Object(K.jsxs)("div",{children:[Object(K.jsx)("h3",{className:ie.a.heading,children:"My posts"}),Object(K.jsx)("div",{className:ie.a.add_post,children:Object(K.jsx)(pe,{onSubmit:function(e){t(e.newPost)}})}),Object(K.jsx)("div",{className:ie.a.post,children:r})]})})),pe=Object(je.a)({form:"MyPostForm"})((function(e){return Object(K.jsx)("form",{onSubmit:e.handleSubmit,children:Object(K.jsxs)("div",{children:[Object(K.jsx)(de.a,{placeholder:"enter your post",name:"newPost",component:be.b,validate:[fe.c,fe.a]}),Object(K.jsx)(V.a,{buttonName:"add post"})]})})})),he=n(133),me=function(e){Object(U.a)(n,e);var t=Object(W.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.myId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(K.jsxs)("div",{className:Q.a.content,children:[Object(K.jsx)(se,{userProfile:this.props.userProfile,loading:this.props.loading,status:this.props.status,updateStatus:this.props.updateStatus}),Object(K.jsx)(Oe,{posts:this.props.posts,addPost:this.props.addPost})]})}}]),n}(a.a.Component),ve=Object(c.d)(Object(X.b)((function(e){return{posts:e.profilePage.posts,userProfile:e.profilePage.userProfile,loading:e.usersPage.loading,isAuth:e.auth.isAuth,myId:e.auth.id,status:e.profilePage.status}}),{addPost:function(e){return{type:O,newMessagePost:e}},getProfile:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(f.c)(!0)),t.next=3,b.b.getProfile(e);case 3:r=t.sent,n(Object(f.c)(!1)),n((a=r.data,{type:p,userProfile:a}));case 6:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(f.c)(!0)),t.next=3,b.b.getStatus(e);case 3:r=t.sent,n(Object(f.c)(!1)),n(v(r.data));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(v(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),D.f,he.a)(me),xe=n(101),ge=n.n(xe),_e=function(e){return Object(K.jsx)("header",{className:ge.a.header,children:Object(K.jsx)("div",{className:ge.a.login,children:e.isAuth?Object(K.jsxs)("div",{children:[" ",e.login," ",Object(K.jsx)(V.a,{onClickHandler:e.logout,buttonName:"LogOut"})," "]}):Object(K.jsx)(B.b,{to:"/login",children:"Login"})})})},Se=function(e){Object(U.a)(n,e);var t=Object(W.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){return Object(K.jsx)(_e,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(a.a.Component),Ne=Object(X.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.logout();case 2:0===e.sent.data.resultCode&&t(y(void 0,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Se),we=n(143),ye=n.n(we),Pe=Object(je.a)({form:"login"})((function(e){return Object(K.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(K.jsx)("div",{children:Object(K.jsx)(de.a,{placeholder:"email",name:"email",component:be.a,validate:[fe.c,fe.b]})}),Object(K.jsx)("div",{children:Object(K.jsx)(de.a,{placeholder:"password",name:"password",component:be.a,validate:[fe.c,fe.b]})}),Object(K.jsxs)("div",{children:[Object(K.jsx)(de.a,{component:be.a,name:"rememberMe",type:"checkbox"})," remember me"]}),e.error&&Object(K.jsx)("div",{className:ye.a.error,children:e.error}),Object(K.jsx)("div",{children:Object(K.jsx)(V.a,{buttonName:"Login"})})]})})),Ee=Object(X.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(u.a)(o.a.mark((function r(a){var s,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(P()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error!",a(Object(S.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(K.jsx)(D.a,{to:"/profile"}):Object(K.jsxs)("div",{children:[Object(K.jsx)("h1",{children:"Login"}),Object(K.jsx)(Pe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ae=a.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),Ie=a.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),Ce=function(e){Object(U.a)(n,e);var t=Object(W.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(K.jsxs)("div",{className:"app-wrapper",children:[Object(K.jsx)(Ne,{}),Object(K.jsx)(Y,{}),Object(K.jsxs)("div",{className:"app-wrapper-content",children:[Object(K.jsx)(D.b,{exact:!0,path:"/",render:function(){return Object(K.jsx)(ve,{})}}),Object(K.jsx)(D.b,{path:"/profile/:userId?",render:function(){return Object(K.jsx)(ve,{})}}),Object(K.jsx)(D.b,{path:"/dialogs",render:function(){return Object(K.jsx)(r.Suspense,{fallback:Object(K.jsx)(te.a,{}),children:Object(K.jsx)(Ae,{})})}}),Object(K.jsx)(D.b,{path:"/users",render:function(){return Object(K.jsx)(r.Suspense,{fallback:Object(K.jsx)(te.a,{}),children:Object(K.jsx)(Ie,{})})}}),Object(K.jsx)(D.b,{path:"/music",render:function(){return Object(K.jsx)(z,{})}}),Object(K.jsx)(D.b,{path:"/news",render:function(){return Object(K.jsx)(H,{})}}),Object(K.jsx)(D.b,{path:"/settings",render:function(){return Object(K.jsx)(G,{})}}),Object(K.jsx)(D.b,{path:"/login",render:function(){return Object(K.jsx)(Ee,{})}})]})]}):Object(K.jsx)(te.a,{})}}]),n}(a.a.Component),Le=Object(c.d)(Object(X.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(P());Promise.all([t]).then((function(){e({type:E})}))}}}),D.f)(Ce);R.a.render(Object(K.jsx)(X.a,{store:k,children:Object(K.jsx)(B.a,{children:Object(K.jsx)(Le,{})})}),document.getElementById("root")),s()},32:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var r=function(e){if(!e)return"Field is required to enter!"},a=function(e){return function(t){return t.length>e?"Max length is ".concat(e," symbols!"):void 0}},s=a(10),c=a(100)},36:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return S})),n.d(t,"a",(function(){return N})),n.d(t,"d",(function(){return w}));var r=n(10),a=n.n(r),s=n(18),c=n(30),i=n(5),o=n(21),u="SOCIAL-NETWORK/USERS/UNFOLLOW",l="SOCIAL-NETWORK/USERS/FOLLOW",d="SOCIAL-NETWORK/USERS/SET_USERS",j="SOCIAL-NETWORK/USERS/SET_CURRENT_PAGE",b="SOCIAL-NETWORK/USERS/SET_TOTAL_COUNT",f="SOCIAL-NETWORK/USERS/TOGGLE_LOADING",O="SOCIAL-NETWORK/USERS/TOGGLE_FOLLOWING_PROGRESS",p={users:[],count:50,totalCount:0,currentPage:1,loading:!1,followingProgress:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case u:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalCount:t.totalCount});case f:return Object(i.a)(Object(i.a)({},e),{},{loading:t.loading});case O:return Object(i.a)(Object(i.a)({},e),{},{followingProgress:t.isLoading?[].concat(Object(c.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},m=function(e){return{type:l,userId:e}},v=function(e){return{type:u,userId:e}},x=function(e){return{type:j,currentPage:e}},g=function(e){return{type:f,loading:e}},_=function(e,t){return{type:O,isLoading:e,userId:t}},S=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(e)),r(g(!0)),n.next=4,o.c.getUsers(e,t);case 4:s=n.sent,r(g(!1)),r((c=s.data.items,{type:d,users:c})),r((a=s.data.totalCount,{type:b,totalCount:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,o.c.follow(e),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(n,e,o.c.unfollow(e),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(_(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(5),a=n(59),s=(n(0),n(60)),c=n.n(s),i=n(1),o=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:"".concat(c.a.formElement," ").concat(o&&c.a.error),children:[Object(i.jsx)("div",{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),s))}),o&&Object(i.jsx)("span",{children:n.error})]})},u=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return Object(i.jsxs)("div",{className:"".concat(c.a.formElement," ").concat(o&&c.a.error),children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),s))}),o&&Object(i.jsx)("span",{children:n.error})]})}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n.p+"static/media/preloader.d3fbaf2b.gif",a=(n(0),n(1)),s=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{alt:"there should be ",src:r})})}},60:function(e,t,n){e.exports={formElement:"FormElements_formElement__2tkD1",error:"FormElements_error__gdMqo"}},70:function(e,t,n){"use strict";t.a=n.p+"static/media/Avaimg.4e89b174.png"},74:function(e,t,n){e.exports={heading:"MyPosts_heading__3mMuh",add_post:"MyPosts_add_post__2UtlE",post:"MyPosts_post__ROcyD"}},75:function(e,t,n){e.exports={post_item:"Post_post_item__21zv8",like:"Post_like__1Fhs5",post:"Post_post__1Uo7o"}},95:function(e,t,n){e.exports={button:"Buttons_button__2ant2",active:"Buttons_active__1jy1t"}}},[[297,1,2]]]);
//# sourceMappingURL=main.8011d2bb.chunk.js.map