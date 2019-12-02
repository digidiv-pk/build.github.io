(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[30],{1004:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t(0)),r=(0,n(t(17)).default)(c.default.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");a.default=r},1080:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t(0)),r=(0,n(t(17)).default)(c.default.createElement("path",{d:"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"}),"ViewModule");a.default=r},1106:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(396),o=t(18),l=t(9),i=t(19),s=t(2),m=t(912),u=t(67),d=t(900),p=t(139),f=t.n(p),h=Object(r.a)((function(e){return{root:{},addIcon:{marginRight:e.spacing(1)}}})),b=function(e){var a=e.className,t=Object(l.a)(e,["className"]),n=h();return c.a.createElement("div",Object.assign({},t,{className:Object(s.a)(n.root,a)}),c.a.createElement(m.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(m.a,{item:!0},c.a.createElement(u.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Browse projects"),c.a.createElement(u.a,{component:"h1",variant:"h3"},"See the latest opportunities")),c.a.createElement(m.a,{item:!0},c.a.createElement(d.a,{color:"primary",component:i.a,to:"/projects/create",variant:"contained"},c.a.createElement(f.a,{className:n.addIcon}),"Submit project"))))},g=t(90),v=t(15),E=t(6),j=t(893),O=t(390),k=t(897),y=t(951),N=t(916),C=t(959),w=t(206),x=t.n(w),I=t(230),S=t.n(I),z=t(355),P=t(903),M=t(1004),B=t.n(M),A=Object(r.a)((function(e){return{root:{},menuItem:{padding:0},formControlLabel:{padding:e.spacing(.5,2),width:"100%",margin:0}}})),L=function(e){var a=e.label,t=e.options,r=e.value,o=e.onChange,l=A(),i=Object(n.useRef)(null),s=Object(n.useState)(!1),m=Object(v.a)(s,2),u=m[0],p=m[1],f=function(e){var a=Object(g.a)(r);e.target.checked?a.push(e.target.value):a=a.filter((function(a){return a!==e.target.value})),o&&o(a)};return c.a.createElement(n.Fragment,null,c.a.createElement(d.a,{onClick:function(){p(!0)},ref:i},a,c.a.createElement(B.a,null)),c.a.createElement(z.a,{anchorEl:i.current,className:l.menu,onClose:function(){p(!1)},open:u,PaperProps:{style:{width:250}}},t.map((function(e){return c.a.createElement(P.a,{className:l.menuItem,key:e},c.a.createElement(N.a,{className:l.formControlLabel,control:c.a.createElement(C.a,{checked:r.indexOf(e)>-1,color:"primary",onClick:f,value:e}),label:e}))}))))},T=Object(r.a)((function(e){return{root:{},keywords:{padding:e.spacing(2),display:"flex",alignItems:"center"},searchIcon:{color:e.palette.icon,marginRight:e.spacing(2)},chips:{padding:e.spacing(2),display:"flex",alignItems:"center",flexWrap:"wrap"},chip:{margin:e.spacing(1)},selects:{display:"flex",alignItems:"center",flexWrap:"wrap",backgroundColor:E.a.grey[50],padding:e.spacing(1)},inNetwork:{marginLeft:"auto"}}})),V=[{label:"Type",options:["Freelance","Full Time","Part Time","Internship"]},{label:"Level",options:["Novice","Expert"]},{label:"Location",options:["Africa","Asia","Australia","Europe","North America","South America"]},{label:"Roles",options:["Android","Web Developer","iOS"]}],H=function(e){var a=e.className,t=Object(l.a)(e,["className"]),r=T(),o=Object(n.useState)(""),i=Object(v.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(["Freelance","Full Time","Novice","Europe","Android","Web Developer"]),p=Object(v.a)(d,2),f=p[0],h=p[1],b=function(e){h(e)};return c.a.createElement(j.a,Object.assign({},t,{className:Object(s.a)(r.root,a)}),c.a.createElement("div",{className:r.keywords},c.a.createElement(S.a,{className:r.searchIcon}),c.a.createElement(O.a,{disableUnderline:!0,onChange:function(e){e.persist(),u(e.target.value)},onKeyUp:function(e){e.persist(),13===e.keyCode&&m&&(f.includes(m)||(h((function(e){return[].concat(Object(g.a)(e),[m])})),u("")))},placeholder:"Enter a keyword",value:m})),c.a.createElement(k.a,null),c.a.createElement("div",{className:r.chips},f.map((function(e){return c.a.createElement(y.a,{className:r.chip,deleteIcon:c.a.createElement(x.a,null),key:e,label:e,onDelete:function(){return function(e){h((function(a){return a.filter((function(a){return e!==a}))}))}(e)}})}))),c.a.createElement(k.a,null),c.a.createElement("div",{className:r.selects},V.map((function(e){return c.a.createElement(L,{key:e.label,label:e.label,onChange:b,options:e.options,value:f})})),c.a.createElement(N.a,{className:r.inNetwork,control:c.a.createElement(C.a,{color:"primary",defaultChecked:!0}),label:"In network"})))},R=t(902),W=t(954),D=t(917),F=t(1080),$=t.n(F),_=t(29),J=Object(r.a)((function(e){return{root:{},header:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",marginBottom:e.spacing(2)},title:{position:"relative","&:after":{position:"absolute",bottom:-8,left:0,content:'" "',height:3,width:48,backgroundColor:e.palette.primary.main}},actions:{display:"flex",alignItems:"center"},sortButton:{textTransform:"none",letterSpacing:0,marginRight:e.spacing(2)},paginate:{marginTop:e.spacing(3),display:"flex",justifyContent:"center"}}})),U=function(e){var a=e.className,t=Object(l.a)(e,["className"]),r=J(),i=Object(n.useRef)(null),p=Object(n.useState)(!1),f=Object(v.a)(p,2),h=f[0],b=f[1],g=Object(n.useState)("Most popular"),E=Object(v.a)(g,2),j=E[0],O=E[1],k=Object(n.useState)("grid"),y=Object(v.a)(k,2),N=y[0],C=y[1],w=Object(n.useState)([]),x=Object(v.a)(w,2),I=x[0],S=x[1];Object(n.useEffect)((function(){var e=!0;return _.a.get("/api/projects").then((function(a){e&&S(a.data.projects)})),function(){e=!1}}),[]);return c.a.createElement("div",Object.assign({},t,{className:Object(s.a)(r.root,a)}),c.a.createElement("div",{className:r.header},c.a.createElement(u.a,{className:r.title,variant:"h5"},"Showing ",I.length," projects"),c.a.createElement("div",{className:r.actions},c.a.createElement(d.a,{className:r.sortButton,onClick:function(){b(!0)},ref:i},j,c.a.createElement(B.a,null)),c.a.createElement(W.a,{exclusive:!0,onChange:function(e,a){C(a)},size:"small",value:N},c.a.createElement(D.a,{value:"grid"},c.a.createElement($.a,null))))),c.a.createElement(m.a,{container:!0,spacing:3},I.map((function(e){return c.a.createElement(m.a,{item:!0,key:e.id,md:"grid"===N?4:12,sm:"grid"===N?6:12,xs:12},c.a.createElement(o.m,{project:e}))}))),c.a.createElement("div",{className:r.paginate},c.a.createElement(o.k,{pageCount:3})),c.a.createElement(z.a,{anchorEl:i.current,className:r.menu,onClose:function(){b(!1)},open:h},["Most recent","Popular","Price high","Price low","On sale"].map((function(e){return c.a.createElement(P.a,{className:r.menuItem,key:e,onClick:function(){return O(e),void b(!1)}},c.a.createElement(R.a,{primary:e}))}))))},K=Object(r.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},header:{marginBottom:e.spacing(3)},filter:{marginTop:e.spacing(3)},results:{marginTop:e.spacing(6)}}})),q=function(){var e=K();return c.a.createElement(o.j,{className:e.root,title:"Projects List"},c.a.createElement(b,{className:e.header}),c.a.createElement(H,{className:e.filter}),c.a.createElement(U,{className:e.results}))};t.d(a,"default",(function(){return q}))},959:function(e,a,t){"use strict";var n=t(1),c=t(4),r=t(0),o=t.n(r),l=(t(7),t(2)),i=t(228),s=t(68),m=Object(s.a)(o.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(s.a)(o.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(14),p=Object(s.a)(o.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(10),h=t(8),b=o.a.createElement(u,null),g=o.a.createElement(m,null),v=o.a.createElement(p,null),E=o.a.forwardRef((function(e,a){var t=e.checkedIcon,r=void 0===t?b:t,s=e.classes,m=e.color,u=void 0===m?"secondary":m,d=e.icon,p=void 0===d?g:d,h=e.indeterminate,E=void 0!==h&&h,j=e.indeterminateIcon,O=void 0===j?v:j,k=e.inputProps,y=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return o.a.createElement(i.a,Object(n.a)({type:"checkbox",checkedIcon:E?O:r,classes:{root:Object(l.a)(s.root,s["color".concat(Object(f.a)(u))],E&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:u,inputProps:Object(n.a)({"data-indeterminate":E},k),icon:E?O:p,ref:a},y))}));a.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(E)}}]);
//# sourceMappingURL=30.62540e27.chunk.js.map