(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[10],{1097:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(36),o=t(396),l=t(6),i=t(1119),s=t(1087),m=t(897),u=t(18),d=t(9),p=t(2),b=t(912),f=(t(29),t(893)),g=t(894),h=(t(905),t(67)),v=t(908),O=t(900),j=(Object(o.a)((function(e){return{root:{},content:{display:"flex",alignItems:"center",flexDirection:"column",textAlgin:"center"},name:{marginTop:e.spacing(1)},avatar:{height:100,width:100},removeBotton:{width:"100%"}}})),t(13)),E=t(15),y=t(892),w=t(907),k=t(914),P=t(229),x=t(20),C=t(69);function N(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?N(t,!0).forEach((function(a){Object(j.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var I=Object(o.a)((function(e){return{root:{},saveButton:{color:e.palette.white,backgroundColor:l.a.green[600],"&:hover":{backgroundColor:l.a.green[900]}}}})),B=Object(C.b)((function(e){return{user:e.session.user,response:e.session.update}}),(function(e){return{onUpdateUser:function(a,t){return e(x.l(a,t))}}}))((function(e){var a=e.user,t=e.className,c=Object(d.a)(e,["user","className"]),o=I(),l=Object(n.useState)(D({},a)),i=Object(E.a)(l,2),s=i[0],u=i[1],h=function(e){e.persist(),u(D({},s,Object(j.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)))},x=null,C=null;e.response.loading?x=r.a.createElement("div",null,r.a.createElement(y.a,null),r.a.createElement("br",null)):C=r.a.createElement(O.a,{className:o.saveButton,type:"submit",variant:"contained"},"Save Changes");var N=null;return e.response.error?N=r.a.createElement(P.a,{message:e.response.errorMessage,variant:"error"}):e.response.success&&(N=r.a.createElement(P.a,{message:e.response.successMessage,variant:"success"})),r.a.createElement(f.a,Object.assign({},c,{className:Object(p.a)(o.root,t)}),N,x,r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.onUpdateUser(s.firstName,s.lastName)}},r.a.createElement(w.a,{title:"Profile"}),r.a.createElement(m.a,null),r.a.createElement(g.a,null,r.a.createElement(b.a,{container:!0,spacing:4},r.a.createElement(b.a,{item:!0,md:6,xs:12},r.a.createElement(k.a,{disabled:e.response.loading,fullWidth:!0,helperText:"Please specify the first name",label:"First name",name:"firstName",onChange:h,required:!0,value:s.firstName,variant:"outlined"})),r.a.createElement(b.a,{item:!0,md:6,xs:12},r.a.createElement(k.a,{disabled:e.response.loading,fullWidth:!0,label:"Last name",name:"lastName",onChange:h,required:!0,value:s.lastName,variant:"outlined"})),r.a.createElement(b.a,{item:!0,md:6,xs:12},r.a.createElement(k.a,{disabled:!0,fullWidth:!0,label:"Email Address",name:"email",onChange:h,required:!0,value:s.email,variant:"outlined"})),r.a.createElement(b.a,{item:!0,md:6,xs:12},r.a.createElement(k.a,{disabled:!0,fullWidth:!0,label:"Phone Number",name:"phoneNumber",onChange:h,type:"text",value:s.phoneNumber,variant:"outlined"})))),r.a.createElement(m.a,null),r.a.createElement(v.a,null,C)))})),S=Object(o.a)((function(){return{root:{}}})),W=function(e){var a=e.className,t=Object(d.a)(e,["className"]),n=S();return r.a.createElement(b.a,Object.assign({},t,{className:Object(p.a)(n.root,a),container:!0,spacing:3}),r.a.createElement(b.a,{item:!0},r.a.createElement(B,null)))},U=Object(o.a)((function(){return{root:{}}})),M=function(e){var a=e.className,t=Object(d.a)(e,["className"]),n=U();return r.a.createElement("div",Object.assign({},t,{className:Object(p.a)(n.root,a)}),r.a.createElement(h.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Admin Profile"),r.a.createElement(h.a,{component:"h1",variant:"h3"},e.title))};t(916),t(959),Object(o.a)((function(e){return{root:{},item:{display:"flex",flexDirection:"column"},saveButton:{color:e.palette.white,backgroundColor:l.a.green[600],"&:hover":{backgroundColor:l.a.green[900]}}}}));function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var z=Object(o.a)((function(e){return{root:{},saveButton:{color:e.palette.white,backgroundColor:l.a.green[600],"&:hover":{backgroundColor:l.a.green[900]}}}})),H=function(e){var a=e.className,t=Object(d.a)(e,["className"]),c=z(),o=Object(n.useState)({password:"",confirm:""}),l=Object(E.a)(o,2),i=l[0],s=l[1],u=function(e){s(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(t,!0).forEach((function(a){Object(j.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},i,Object(j.a)({},e.target.name,e.target.value)))},h=i.password&&i.password===i.confirm;return r.a.createElement(f.a,Object.assign({},t,{className:Object(p.a)(c.root,a)}),r.a.createElement(w.a,{title:"Change password"}),r.a.createElement(m.a,null),r.a.createElement(g.a,null,r.a.createElement("form",null,r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,md:4,sm:6,xs:12},r.a.createElement(k.a,{fullWidth:!0,label:"Password",name:"password",onChange:u,type:"password",value:i.password,variant:"outlined"})),r.a.createElement(b.a,{item:!0,md:4,sm:6,xs:12},r.a.createElement(k.a,{fullWidth:!0,label:"Confirm password",name:"confirm",onChange:u,type:"password",value:i.confirm,variant:"outlined"}))))),r.a.createElement(m.a,null),r.a.createElement(v.a,null,r.a.createElement(O.a,{className:c.saveButton,disabled:!h,variant:"contained"},"Save changes")))},V=(t(19),t(899),Object(o.a)((function(e){return{root:{},action:{marginRight:0,marginTop:0},overview:Object(j.a)({display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},e.breakpoints.down("md"),{flexDirection:"column-reverse",alignItems:"flex-start"}),product:{display:"flex",alignItems:"center"},productImage:{marginRight:e.spacing(1),height:48,width:48},details:Object(j.a)({display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"flex-start"}),notice:{marginTop:e.spacing(2)}}})),Object(o.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},tabs:{marginTop:e.spacing(3)},divider:{backgroundColor:l.a.grey[300]},content:{marginTop:e.spacing(3)}}}))),$=function(e){var a=e.match,t=e.history,n=V(),o=a.params.tab,l=[{value:"update",label:"Update Profile"},{value:"chnage_password",label:"Change Password"}];return o?l.find((function(e){return e.value===o}))?r.a.createElement(u.j,{className:n.root,title:"update"===o?"Update Profile":"Change Password"},r.a.createElement(M,{title:"update"===o?"Update Profile":"Change Password"}),r.a.createElement(i.a,{className:n.tabs,onChange:function(e,a){t.push(a)},scrollButtons:"auto",value:o,variant:"scrollable"},l.map((function(e){return r.a.createElement(s.a,{key:e.value,label:e.label,value:e.value})}))),r.a.createElement(m.a,{className:n.divider}),r.a.createElement("div",{className:n.content},"update"===o&&r.a.createElement(W,null),"chnage_password"===o&&r.a.createElement(H,null))):r.a.createElement(c.a,{to:"/errors/error-404"}):r.a.createElement(c.a,{to:"/user/profile/update"})};t.d(a,"default",(function(){return $}))},959:function(e,a,t){"use strict";var n=t(1),r=t(4),c=t(0),o=t.n(c),l=(t(7),t(2)),i=t(228),s=t(68),m=Object(s.a)(o.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(s.a)(o.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(14),p=Object(s.a)(o.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=t(10),f=t(8),g=o.a.createElement(u,null),h=o.a.createElement(m,null),v=o.a.createElement(p,null),O=o.a.forwardRef((function(e,a){var t=e.checkedIcon,c=void 0===t?g:t,s=e.classes,m=e.color,u=void 0===m?"secondary":m,d=e.icon,p=void 0===d?h:d,f=e.indeterminate,O=void 0!==f&&f,j=e.indeterminateIcon,E=void 0===j?v:j,y=e.inputProps,w=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return o.a.createElement(i.a,Object(n.a)({type:"checkbox",checkedIcon:O?E:c,classes:{root:Object(l.a)(s.root,s["color".concat(Object(b.a)(u))],O&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:u,inputProps:Object(n.a)({"data-indeterminate":O},y),icon:O?E:p,ref:a},w))}));a.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O)}}]);
//# sourceMappingURL=10.cbc993a7.chunk.js.map