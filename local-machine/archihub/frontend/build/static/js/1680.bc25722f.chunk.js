"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[1680],{11680:function(t,e,n){n.r(e);var i=n(5544),r=n(65043),a=n(73216),o=n(83003),s=n(24208),l=n(11238),c=n(26240),u=n(43288),d=n(12257),f=n(19853),g=n(22505),p=n(72378),h=n(55263),b=n(58140),v=n(70579);e.default=function(t){(0,a.g)().id;var e=(0,r.useState)(null),n=(0,i.A)(e,2),m=(n[0],n[1],(0,r.useState)([])),x=(0,i.A)(m,2),A=x[0],y=x[1],j=(0,r.useState)(!1),w=(0,i.A)(j,2),k=w[0],C=w[1],S=((0,o.d4)((function(t){return t.app.user})),(0,c.A)()),G=(0,a.Zp)(),I=(0,b.M)().showAlert;return(0,r.useEffect)((function(){d.bo().then((function(t){y(t)})).catch((function(t){console.log(t)}))}),[]),(0,v.jsxs)(p.Ay,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"},children:[(0,v.jsxs)(p.EL,{style:{width:"70%",maxWidth:400,display:"block",overflow:"auto",placeContent:"flex-start"},children:[(0,v.jsx)("div",{style:{padding:10},children:(0,v.jsx)(h.A,{style:{justifyContent:"space-between",minHeight:"auto",padding:0},children:(0,v.jsx)(l.nA,{startIcon:(0,v.jsx)(g.A,{}),label:"Crear nuevo",style:{borderRadius:5,backgroundColor:S.palette.success.light,color:S.palette.success.main},onClick:function(){return G("/cataloging/lists/new")}})})}),0===A.length&&(0,v.jsx)(u.A,{}),A.map((function(t,e){return(0,v.jsx)(s.TarjetaItem,{title:t.name,description:t.description,type:"cataloging/lists",slug:t.id,onDeleted:function(t){I("confirm","\xbfEst\xe1s seguro de eliminar esta lista?").then((function(e){e&&(C(!0),d.I(t).then((function(t){d.bo().then((function(t){C(!1),y(t)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)})))}))},onDownload:function(t){I("confirm","\xbfEst\xe1s seguro de descargar esta lista?").then((function(e){e&&(C(!0),f.Gj("inventoryMaker",JSON.stringify({parent:t}),"bulk-lists").then((function(t){C(!1),I("success",t.msg)})).catch((function(t){console.log(t)})))}))}},e)}))]}),k&&(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",position:"fixed",top:0,left:0,background:"rgba(255, 255, 255, 0.5)",backdropFilter:"blur(5px) saturate(0%)",zIndex:9999},children:(0,v.jsx)(u.A,{})})]})}},55263:function(t,e,n){n.d(e,{A:function(){return v}});var i=n(64467),r=n(98587),a=n(58168),o=n(65043),s=n(69292),l=n(98610),c=n(98206),u=n(34535),d=n(92532),f=n(72372);function g(t){return(0,f.Ay)("MuiToolbar",t)}(0,d.A)("MuiToolbar",["root","gutters","regular","dense"]);var p=n(70579),h=["className","component","disableGutters","variant"],b=(0,u.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,!n.disableGutters&&e.gutters,e[n.variant]]}})((function(t){var e=t.theme,n=t.ownerState;return(0,a.A)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&(0,i.A)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(t){var e=t.theme;return"regular"===t.ownerState.variant&&e.mixins.toolbar})),v=o.forwardRef((function(t,e){var n=(0,c.b)({props:t,name:"MuiToolbar"}),i=n.className,o=n.component,u=void 0===o?"div":o,d=n.disableGutters,f=void 0!==d&&d,v=n.variant,m=void 0===v?"regular":v,x=(0,r.A)(n,h),A=(0,a.A)({},n,{component:u,disableGutters:f,variant:m}),y=function(t){var e=t.classes,n={root:["root",!t.disableGutters&&"gutters",t.variant]};return(0,l.A)(n,g,e)}(A);return(0,p.jsx)(b,(0,a.A)({as:u,className:(0,s.A)(y.root,i),ref:e,ownerState:A},x))}))}}]);
//# sourceMappingURL=1680.bc25722f.chunk.js.map