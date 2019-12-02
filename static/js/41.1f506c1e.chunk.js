(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[41],{1117:function(e,a,t){"use strict";t.r(a);var n=t(15),r=t(0),c=t.n(r),s=t(396),o=t(67),i=t(29),l=t(18),m=t(9),d=t(19),p=t(2),u=t(912),g=t(900),E=Object(s.a)((function(){return{root:{}}})),b=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=E();return c.a.createElement("div",Object.assign({},t,{className:Object(p.a)(n.root,a)}),c.a.createElement(u.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(u.a,{item:!0},c.a.createElement(o.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Management"),c.a.createElement(o.a,{component:"h1",variant:"h3"},"Projects")),c.a.createElement(u.a,{item:!0},c.a.createElement(g.a,{color:"primary",component:d.a,to:"/projects/create",variant:"contained"},"Add project"))))},j=t(13),v=t(5),f=t.n(v),h=t(6),y=t(893),O=t(894),N=t(905),x=t(899),w=t(102),M=Object(s.a)((function(e){var a;return{root:{display:"flex",alignItems:"center",flexWrap:"wrap",marginBottom:e.spacing(2)},content:(a={padding:e.spacing(2),flexGrow:1,display:"flex",alignItems:"center",justifyContent:"space-between"},Object(j.a)(a,e.breakpoints.down("sm"),{width:"100%",flexWrap:"wrap"}),Object(j.a)(a,"&:last-child",{paddingBottom:e.spacing(2)}),a),header:Object(j.a)({maxWidth:"100%",width:240,display:"flex"},e.breakpoints.down("sm"),{marginBottom:e.spacing(2),flexBasis:"100%"}),avatar:{marginRight:e.spacing(2)},stats:Object(j.a)({padding:e.spacing(1)},e.breakpoints.down("sm"),{flexBasis:"50%"}),actions:Object(j.a)({padding:e.spacing(1)},e.breakpoints.down("sm"),{flexBasis:"50%"})}})),P=function(e){var a=e.project,t=e.className,n=Object(m.a)(e,["project","className"]),r=M(),s={"In progress":h.a.orange[600],Canceled:h.a.grey[600],Completed:h.a.green[600]};return c.a.createElement(y.a,Object.assign({},n,{className:Object(p.a)(r.root,t)}),c.a.createElement(O.a,{className:r.content},c.a.createElement("div",{className:r.header},c.a.createElement(N.a,{alt:"Author",className:r.avatar,src:a.author.avatar},Object(w.a)(a.author.name)),c.a.createElement("div",null,c.a.createElement(x.a,{color:"textPrimary",component:d.a,noWrap:!0,to:"#",variant:"h5"},a.title),c.a.createElement(o.a,{variant:"body2"},"by"," ",c.a.createElement(x.a,{color:"textPrimary",component:d.a,to:"/management/customers/1",variant:"h6"},a.author.name)))),c.a.createElement("div",{className:r.stats},c.a.createElement(o.a,{variant:"h6"},a.currency,a.price),c.a.createElement(o.a,{variant:"body2"},"Project price")),c.a.createElement("div",{className:r.stats},c.a.createElement(o.a,{variant:"h6"},a.members),c.a.createElement(o.a,{variant:"body2"},"Team members")),c.a.createElement("div",{className:r.stats},c.a.createElement(o.a,{variant:"h6"},f()(a.start_date).format("DD MMMM YYYY")),c.a.createElement(o.a,{variant:"body2"},"Project started")),c.a.createElement("div",{className:r.stats},c.a.createElement(o.a,{variant:"h6"},f()(a.end_date).format("DD MMMM YYYY")),c.a.createElement(o.a,{variant:"body2"},"Project deadline")),c.a.createElement("div",{className:r.stats},c.a.createElement(o.a,{style:{color:s[a.status]},variant:"h6"},a.status),c.a.createElement(o.a,{variant:"body2"},"Project status")),c.a.createElement("div",{className:r.actions},c.a.createElement(g.a,{color:"primary",size:"small",variant:"outlined"},"View"))))},k=Object(s.a)((function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)},paginate:{marginTop:e.spacing(3),display:"flex",justifyContent:"center"}}})),B=function(){var e=k(),a=Object(r.useState)(10),t=Object(n.a)(a,1)[0],s=Object(r.useState)(0),m=Object(n.a)(s,1)[0],d=Object(r.useState)([]),p=Object(n.a)(d,2),u=p[0],g=p[1];Object(r.useEffect)((function(){var e=!0;return i.a.get("/api/projects").then((function(a){e&&g(a.data.projects)})),function(){e=!1}}),[]);return c.a.createElement(l.j,{className:e.root,title:"Project Management List"},c.a.createElement(b,null),c.a.createElement(l.q,{onFilter:function(){},onSearch:function(){}}),c.a.createElement("div",{className:e.results},c.a.createElement(o.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},u.length," Records found. Page ",m+1," of"," ",Math.ceil(u.length/t)),u.map((function(e){return c.a.createElement(P,{key:e.id,project:e})}))),c.a.createElement("div",{className:e.paginate},c.a.createElement(l.k,{pageCount:3})))};t.d(a,"default",(function(){return B}))}}]);
//# sourceMappingURL=41.1f506c1e.chunk.js.map