(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{298:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(1),s=t(299),o=t.n(s),u=t(0),l=function(e){for(var n=e.totalCount,t=e.count,s=e.currentPage,l=e.requestElements,a=e.pagesInBlock,c=Math.ceil(n/t),i=[],f=1;f<=c;f++)i.push(f);var p=Object(r.useMemo)((function(){return Math.floor((s-1)/a)*a}),[s,a]),d=Object(r.useCallback)((function(){s>a&&l(p-a+1,t)}),[s,a,l,p,t]),j=Object(r.useCallback)((function(){p+a<i.length&&l(p+a+1,t)}),[s,a,c,l,p,t]);return Object(u.jsx)("div",{className:o.a.users_page,children:Object(u.jsxs)("div",{className:o.a.pages,children:[Object(u.jsxs)("div",{style:{margin:"10px"},onClick:function(){l(1,t)},children:[" ","<< first page"," "]}),Object(u.jsxs)("div",{style:{display:"flex",margin:"10px"},children:[s>a&&Object(u.jsxs)("div",{className:o.a.arrow,onClick:d,children:[" ","<=="," "]}),i.slice(p,p+a).map((function(e){return Object(u.jsxs)("span",{style:{padding:" 0 5px 0 5px"},onClick:function(){return l(e,t)},className:s===e?o.a.selectedPage:"",children:[e," "]},e)})),p+a<i.length&&Object(u.jsxs)("div",{className:o.a.arrow,onClick:j,children:[" ","==>"," "]})]}),Object(u.jsxs)("div",{style:{margin:"10px"},onClick:function(){l(c,t)},children:[" ","last page >>"," "]})]})})}},299:function(e,n,t){e.exports={users_page:"Pagination_users_page__2VqgH",selectedPage:"Pagination_selectedPage__2Vb-i",pages:"Pagination_pages__3i4Ms",arrow:"Pagination_arrow__3aOnO"}},303:function(e,n,t){e.exports={usersBlock:"Users_usersBlock__mErKV"}},304:function(e,n,t){e.exports={user:"User_user__PqC96",info:"User_info__2v-6_",name:"User_name__1iUvl",status:"User_status__yGL0_",buttons:"User_buttons__1bI88"}},306:function(e,n,t){"use strict";t.r(n);var r=t(41),s=t(42),o=t(45),u=t(44),l=t(14),a=t(39),c=t(1),i=t.n(c),f=t(303),p=t.n(f),d=t(304),j=t.n(d),g=t(64),b=t(18),h=t(19),m=t(98),O=t.n(m),v=t(0),x=function(e){var n=e.buttonName;return Object(v.jsx)("div",{children:Object(v.jsxs)("button",{className:O.a.button,disabled:!0,children:[" ",n," "]})})},w=t(104),_=function(e){var n=e.user,t=e.follow,r=e.unfollow,s=e.followingProgress,o=Object(l.c)();return Object(v.jsxs)("div",{className:j.a.user,children:[Object(v.jsx)("div",{children:Object(v.jsx)(h.b,{to:"/profile/"+n.id,children:Object(v.jsx)("img",{alt:"",src:n.photos.small?n.photos.small:g.a})})}),Object(v.jsxs)("div",{className:j.a.info,children:[Object(v.jsx)("div",{className:j.a.name,children:n.name}),Object(v.jsx)("div",{className:j.a.status,children:n.status})]}),Object(v.jsxs)("div",{className:j.a.buttons,children:[s.some((function(e){return e===n.id}))?Object(v.jsx)(x,{buttonName:n.followed?"unfollow":"follow"}):Object(v.jsx)(b.a,{onClickHandler:n.followed?function(){r(n.id)}:function(){t(n.id)},buttonName:n.followed?"unfollow":"follow"}),Object(v.jsx)(h.b,{to:"/dialogs",children:Object(v.jsx)(b.a,{onClickHandler:function(){o(Object(w.h)(!0)),o(Object(w.a)(n.id))},buttonName:"send message"})})]})]})},P=t(50),y=t(298),C=function(e){var n=e.users,t=e.totalCount,r=e.count,s=e.currentPage,o=e.loading,u=e.followingProgress,l=e.follow,a=e.unfollow,c=e.requestUsers;return Object(v.jsxs)("div",{className:p.a.usersBlock,children:[Object(v.jsx)(y.a,{totalCount:t,count:r,currentPage:s,pagesInBlock:10,requestElements:c}),o?Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(v.jsx)(P.a,{})}):n.map((function(e){return Object(v.jsx)(_,{user:e,follow:l,unfollow:a,followingProgress:u},e.id)})),!o&&Object(v.jsx)(y.a,{totalCount:t,count:r,currentPage:s,pagesInBlock:10,requestElements:c})]})};function k(e,n){return e===n}function N(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,s=0;s<r;s++)if(!e(n[s],t[s]))return!1;return!0}function U(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var q=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];var o=0,u=r.pop(),l=U(r),a=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(t)),c=e((function(){for(var e=[],n=l.length,t=0;t<n;t++)e.push(l[t].apply(null,arguments));return a.apply(null,e)}));return c.resultFunc=u,c.dependencies=l,c.recomputations=function(){return o},c.resetRecomputations=function(){return o=0},c}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k,t=null,r=null;return function(){return N(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var B=q((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),E=function(e){return e.usersPage.count},I=function(e){return e.usersPage.totalCount},M=function(e){return e.usersPage.currentPage},A=function(e){return e.usersPage.loading},H=function(e){return e.usersPage.followingProgress},V=function(e){Object(o.a)(t,e);var n=Object(u.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.count)}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(C,{users:this.props.users,totalCount:this.props.totalCount,count:this.props.count,currentPage:this.props.currentPage,loading:this.props.loading,followingProgress:this.props.followingProgress,follow:this.props.follow,unfollow:this.props.unfollow,requestUsers:this.props.requestUsers})})}}]),t}(i.a.Component);n.default=Object(l.b)((function(e){return{users:B(e),count:E(e),totalCount:I(e),currentPage:M(e),loading:A(e),followingProgress:H(e)}}),{follow:a.a,unfollow:a.d,requestUsers:a.b})(V)}}]);
//# sourceMappingURL=4.a1e19e75.chunk.js.map