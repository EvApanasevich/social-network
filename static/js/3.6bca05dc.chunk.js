(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3vHfO",dialog:"Dialogs_dialog__31BRo",dialogsItems:"Dialogs_dialogsItems__2AlGx",active:"Dialogs_active__oHyJK",messages:"Dialogs_messages__10h-7",message_block:"Dialogs_message_block__1EwOi",input_message:"Dialogs_input_message__1wRGs"}},299:function(e,s,a){e.exports={dialog:"DialogItem_dialog__3uGrh",active:"DialogItem_active__q0K0a"}},300:function(e,s,a){e.exports={message:"Message_message__10h-L"}},305:function(e,s,a){"use strict";a.r(s);var i=a(112),t=a(298),c=a.n(t),n=a(299),o=a.n(n),l=a(15),g=a(71),d=a(0),m=function(e){var s=e.name,a="/dialogs/"+e.id;return Object(d.jsxs)("div",{className:o.a.dialog,children:[Object(d.jsx)("img",{alt:"should be here",src:g.a}),Object(d.jsx)(l.b,{to:a,activeClassName:o.a.active,children:s})]})},r=(a(1),a(300)),j=a.n(r),_=function(e){var s=e.message;return Object(d.jsx)("div",{className:j.a.message,children:s})},b=a(135),u=a(136),O=a(20),h=a(35),v=a(21),x=Object(u.a)({form:"dialogMessageForm"})((function(e){return Object(d.jsx)("form",{onSubmit:e.handleSubmit,children:Object(d.jsxs)("div",{children:[Object(d.jsx)(b.a,{placeholder:"enter your message",name:"newMessage",component:v.b,validate:[h.c,h.a]}),Object(d.jsx)(O.a,{buttonName:"add message"})]})})})),p=a(12),f=a(134),D=a(10);s.default=Object(D.d)(Object(p.b)((function(e){return{dialogPage:e.dialogPage}}),{sendMessage:i.b}),f.a)((function(e){var s=e.sendMessage,a=e.dialogPage,i=a.dialogs.map((function(e){return Object(d.jsx)(m,{name:e.name,id:e.id},e.id)})),t=a.messages.map((function(e){return Object(d.jsx)(_,{message:e.message},e.id)}));return Object(d.jsxs)("div",{className:c.a.dialogs,children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:c.a.dialogsItems,children:i})}),Object(d.jsxs)("div",{className:c.a.message_block,children:[Object(d.jsx)("div",{className:c.a.messages,children:t}),Object(d.jsx)("div",{className:c.a.input_message,children:Object(d.jsx)(x,{onSubmit:function(e){s(e.newMessage)}})})]})]})}))}}]);
//# sourceMappingURL=3.6bca05dc.chunk.js.map