(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{301:function(e,n,t){e.exports={user:"User_user__PqC96"}},302:function(e,n,t){e.exports={users_page:"Pagination_users_page__2VqgH",selectedPage:"Pagination_selectedPage__2Vb-i",pages:"Pagination_pages__3i4Ms"}},304:function(e,n,t){"use strict";t.r(n);var r=t(41),o=t(42),s=t(45),u=t(44),l=t(12),i=t(39),c=t(1),a=t.n(c),f=t(301),p=t.n(f),g=t(20),d=t(15),j=t(96),h=t.n(j),b=t(0),x=function(e){var n=e.buttonName;return Object(b.jsx)("div",{children:Object(b.jsxs)("button",{className:h.a.button,disabled:!0,children:[" ",n," "]})})},v=function(e){var n=e.user,t=e.follow,r=e.unfollow,o=e.followingProgress;return Object(b.jsxs)("div",{className:p.a.user,children:[Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/profile/"+n.id,children:Object(b.jsx)("img",{alt:"",src:n.photos.small})})}),Object(b.jsx)("div",{children:o.some((function(e){return e===n.id}))?Object(b.jsx)(x,{buttonName:n.followed?"unfollow":"follow"}):Object(b.jsx)(g.a,{onClickHandler:n.followed?function(){r(n.id)}:function(){t(n.id)},buttonName:n.followed?"unfollow":"follow"})}),Object(b.jsx)("div",{children:n.name}),Object(b.jsx)("div",{children:n.status})]})},O=t(49),w=t(302),m=t.n(w),P=function(e){for(var n=e.totalCount,t=e.count,r=e.currentPage,o=e.requestUsers,s=Math.ceil(n/t),u=[],l=10,i=1;i<=s;i++)u.push(i);var a=Object(c.useMemo)((function(){return Math.floor((r-1)/l)*l}),[r,l]),f=Object(c.useCallback)((function(){r>l&&o(a-l+1,t)}),[r,l,o,a,t]),p=Object(c.useCallback)((function(){a+l<u.length&&o(a+l+1,t)}),[r,l,s,o,a,t]);return Object(b.jsx)("div",{className:m.a.users_page,children:Object(b.jsxs)("div",{className:m.a.pages,children:[Object(b.jsxs)("div",{style:{margin:"10px"},onClick:function(){o(1,t)},children:[" ","<< first page"," "]}),Object(b.jsxs)("div",{style:{display:"flex",margin:"10px"},children:[r>l&&Object(b.jsxs)("div",{style:{marginRight:"20px"},onClick:f,children:[" ","<=="," "]}),u.slice(a,a+l).map((function(e){return Object(b.jsxs)("span",{style:{padding:" 0 5px 0 5px"},onClick:function(){return o(e,t)},className:r===e?m.a.selectedPage:"",children:[e," "]},e)})),a+l<u.length&&Object(b.jsxs)("div",{style:{marginLeft:"20px"},onClick:p,children:[" ","==>"," "]})]}),Object(b.jsxs)("div",{style:{margin:"10px"},onClick:function(){o(s,t)},children:[" ","last page >>"," "]})]})})},y=function(e){var n=e.users,t=e.totalCount,r=e.count,o=e.currentPage,s=e.loading,u=e.followingProgress,l=e.follow,i=e.unfollow,c=e.requestUsers;return Object(b.jsxs)("div",{children:[Object(b.jsx)(P,{totalCount:t,count:r,currentPage:o,requestUsers:c}),s?Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(b.jsx)(O.a,{})}):n.map((function(e){return Object(b.jsx)(v,{user:e,follow:l,unfollow:i,followingProgress:u},e.id)})),Object(b.jsx)(P,{totalCount:t,count:r,currentPage:o,requestUsers:c})]})};function C(e,n){return e===n}function _(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function k(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var q=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var s=0,u=r.pop(),l=k(r),i=e.apply(void 0,[function(){return s++,u.apply(null,arguments)}].concat(t)),c=e((function(){for(var e=[],n=l.length,t=0;t<n;t++)e.push(l[t].apply(null,arguments));return i.apply(null,e)}));return c.resultFunc=u,c.dependencies=l,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,t=null,r=null;return function(){return _(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var U=q((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),N=function(e){return e.usersPage.count},M=function(e){return e.usersPage.totalCount},A=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.loading},H=function(e){return e.usersPage.followingProgress},J=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.count)}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(y,{users:this.props.users,totalCount:this.props.totalCount,count:this.props.count,currentPage:this.props.currentPage,loading:this.props.loading,followingProgress:this.props.followingProgress,follow:this.props.follow,unfollow:this.props.unfollow,requestUsers:this.props.requestUsers})})}}]),t}(a.a.Component);n.default=Object(l.b)((function(e){return{users:U(e),count:N(e),totalCount:M(e),currentPage:A(e),loading:F(e),followingProgress:H(e)}}),{follow:i.a,unfollow:i.d,requestUsers:i.b})(J)}}]);
//# sourceMappingURL=4.a5c06d6e.chunk.js.map