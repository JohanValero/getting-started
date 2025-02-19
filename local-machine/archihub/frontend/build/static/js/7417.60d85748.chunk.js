"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[7417],{53171:function(e,t,r){r(65043);var n=r(26240),o=r(94777),a=r(70579);t.A=function(e){var t=(0,n.A)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{textAlign:"center",padding:10,width:"100%"},children:(0,a.jsx)(o.A,{style:{fontSize:50,color:t.palette.primary.light}})})})}},15089:function(e,t,r){var n=r(5544),o=r(65043),a=r(26240),i=r(83003),s=r(70579);t.A=function(e){var t=(0,a.A)(),r=(0,o.useRef)(null),l=(0,o.useState)(0),c=(0,n.A)(l,2),d=c[0],u=c[1],p=(0,i.d4)((function(e){return e.app.isDarkMode}));return(0,o.useEffect)((function(){!function(){for(var t=5,n=0;n<d;n++)r.current.innerHTML=e.list[n].label,t+=r.current.offsetWidth;r.current.innerHTML=e.list[d].label,r.current.style.left="".concat(t,"px")}()}),[d]),(0,o.useEffect)((function(){if(e.value){var t=e.list.findIndex((function(t){return t.value===e.value}));t>=0&&u(t)}}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",background:p?t.palette.grey[800]:t.palette.grey[100],borderRadius:"50px",marginLeft:"10px",marginRight:"10px",padding:"5px",position:"relative",overflow:"hidden"},children:[(0,s.jsx)("div",{ref:r,style:{position:"absolute",padding:"7px",borderRadius:"50px",cursor:"pointer",background:t.palette.primary.main,color:"transparent",transition:"all 0.25s ease"}}),e.list.map((function(r,n){return(0,s.jsx)("div",{style:{position:"relative",padding:"7px",borderRadius:"50px",cursor:"pointer",color:d===n?"white":t.palette.secondary.contrastText},onClick:function(){u(n),e.onChange&&e.onChange(r)},children:r.label},n)}))]})})}},7417:function(e,t,r){r.r(t);r(65043),r(22505);var n=r(83003),o=(r(50062),r(72378)),a=(r(46020),r(41882),r(11238),r(26240)),i=r(73216),s=(r(43288),r(17135)),l=r(70579);t.default=function(e){(0,n.d4)((function(e){return e.app.user})),(0,a.A)(),(0,i.Zp)();return(0,l.jsx)(o.Ay,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"},children:(0,l.jsx)(o.EL,{style:{padding:10,height:"calc(100vh - 40px)",width:"600px",display:"block",overflow:"auto",placeContent:"flex-start"},children:(0,l.jsx)(s.A,{})})})}},46020:function(e,t,r){r.d(t,{Jt:function(){return a},O8:function(){return d},UK:function(){return c},hE:function(){return i},lD:function(){return l},yo:function(){return s}});var n=r(88120),o=r(91280);function a(e){var t="/views/"+e,r={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function i(e){var t="/views/info/"+e,r={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function s(e,t){var r="/views/"+e,a={method:"PUT",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+r,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e){var t="/views/"+e,r={method:"DELETE",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(){var e={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+"/views",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function d(e){var t={method:"POST",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch((0,n.H6)()+"/views",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}},17135:function(e,t,r){var n=r(5544),o=r(65043),a=r(83003),i=r(86279),s=r(73216),l=r(26240),c=r(41905),d=r(8168),u=r(43845),p=r(55263),h=r(43288),g=r(53171),f=r(58140),m=r(94495),x=r(98787),v=r(15089),y=r(99246),b=r(70579);t.A=function(e){var t=(0,l.A)(),r=(0,y.A)(),A=(0,f.M)().showAlert,j=(0,c.A)((function(e){return{btn_color:{color:"#869bb7 !important",padding:"5px !important",width:"30px !important",height:"30px !important",margin:"0 2px !important",borderRadius:"50%",border:"1px solid #c6d0dd !important","&:hover":{color:"#fff !important",backgroundColor:"#56749a !important"},"& .MuiSvgIcon-root":{width:"14px !important"}},chip_style:{margin:"1px 2px !important",backgroundColor:t.palette.secondary.light+" !important",color:t.palette.primary.dark+" !important",border:"1px solid white !important",transition:"all .3s ease-in-out !important","& svg":{width:"15px !important",marginLeft:"10px !important"},"& path":{fill:t.palette.secondary.main+" !important",transition:"all .3s ease-in-out !important"},"&:hover":{backgroundColor:t.palette.primary.dark+" !important",color:"#fff !important","& path":{fill:"#fff !important"}}},access_chip:{backgroundColor:t.palette.secondary.light+" !important",border:"1px solid "+t.palette.secondary.main+" !important",color:t.palette.secondary.dark+" !important","&.pending":{backgroundColor:t.palette.warning.light+" !important",color:"white !important",borderColor:t.palette.warning.light+" !important"},"&.review":{backgroundColor:t.palette.info.light+" !important",color:"white !important",borderColor:t.palette.info.light+" !important"},"&.rejected":{backgroundColor:t.palette.error.main+" !important",color:"white !important",borderColor:t.palette.error.light+" !important"},"& svg":{marginLeft:"10px !important",width:"15px !important",height:"15px !important",opacity:".5 !important"}}}}))(),w=(0,o.useState)([]),k=(0,n.A)(w,2),C=k[0],M=k[1],S=(0,o.useState)(0),H=(0,n.A)(S,2),P=H[0],T=H[1],B=(0,o.useState)(!0),z=(0,n.A)(B,2),E=z[0],L=z[1],R=(0,o.useState)(0),D=(0,n.A)(R,2),G=D[0],O=D[1],F=(0,o.useState)({label:"En curso",value:"working"}),I=(0,n.A)(F,2),N=I[0],_=I[1],V=(0,s.Zp)();(0,a.d4)((function(e){return e.app.isDarkMode}));(0,o.useEffect)((function(){J()}),[P,N]);var J=function(){M([]),L(!0),i.C(JSON.stringify({status:"working"===N.value?["pending","review","rejected"]:["approved"],page:P,user:e.user?e.user:null})).then((function(e){L(!1),M(e.results),O(e.total)})).catch((function(e){e.json().then((function(t){A("error",e.msg).then((function(){V("/")}))}))}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{style:{padding:5,marginBottom:5,width:"calc(100% - 10px)"},children:(0,b.jsx)(p.A,{style:{minHeight:"auto",margin:5,justifyContent:"center"},children:(0,b.jsx)(v.A,{value:N,list:[{label:r.formatMessage({id:"tasks.working"}),value:"working"},{label:r.formatMessage({id:"tasks.completed"}),value:"completed"}],onChange:function(e){_(e)}})})}),E&&(0,b.jsx)(h.A,{}),0===C.length&&!E&&(0,b.jsx)(g.A,{}),C.length>0&&(0,b.jsx)(d.A,{pagination:!0,resources:C,perpage:10,page:P,setPage:T,total:G,columns:[{destiny:"date",label:r.formatMessage({id:"general.date"})},{destiny:"user",label:r.formatMessage({id:"general.user"})},{destiny:"status",label:r.formatMessage({id:"general.status"})},{destiny:"link",label:""}],columnSolver:function(e,t){return(0,b.jsxs)(b.Fragment,{children:["user"===t.destiny&&(0,b.jsx)("span",{children:e.user}),"status"===t.destiny&&(0,b.jsx)(u.A,{label:m.Y$.find((function(t){return t.value===e.status})).label,size:"small",style:{margin:"2px"},className:"".concat(j.access_chip," ").concat(e.status)}),"link"===t.destiny&&(0,b.jsx)(u.A,{size:"small",icon:(0,b.jsx)(x.A,{}),className:j.chip_style,onClick:function(){return V("/cataloging/".concat(e.resourceType,"/edit/").concat(e.resourceId))}}),"date"===t.destiny&&(0,b.jsx)("span",{children:e.createdAt})]})}})]})}},8168:function(e,t,r){var n=r(60436),o=r(5544),a=r(65043),i=r(83003),s=r(85211),l=r(51962),c=r(17392),d=r(15316),u=r(71806),p=r(73460),h=r(10039),g=r(79650),f=r(84882),m=r(19090),x=r(28076),v=r(63336),y=r(35084),b=r(26240),A=r(70579);function j(e){var t=(0,b.A)(),r=(0,i.d4)((function(e){return e.app.isDarkMode})),n=(0,i.d4)((function(e){return e.app.filters})),o=(0,i.wA)(),a=e.view,l=(e.sortOrder,e.sortBy),d=(e.numSelected,e.rowCount,e.onRequestSort,e.headCells);return(0,A.jsx)(f.A,{children:(0,A.jsx)(x.A,{children:d.map((function(e){return(0,A.jsxs)(h.A,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",style:{color:r?t.palette.grey[400]:t.palette.grey[600],borderBottom:"1px solid ".concat(r?t.palette.grey[800]:t.palette.grey[200])},children:[e.label,e.sortBy&&(0,A.jsx)(c.A,{size:"small",style:{marginLeft:"5px",backgroundColor:l===e.sortBy&&r?t.palette.grey[600]:l===e.sortBy?t.palette.primary.light:r?t.palette.grey[800]:"#f5f5f5",color:l===e.sortBy&&r?t.palette.primary.light:l===e.sortBy?t.palette.primary.main:t.palette.grey[500]},onClick:function(){var t=n[a].sortBy===e.sortBy&&"asc"===n[a].sortOrder?"desc":"asc",r=(0,s.e)(n,a,"sortOrder",t);r=(0,s.e)(r,a,"sortBy",e.sortBy),o((0,s.vm)(r))},children:(0,A.jsx)(y.A,{})})]},e.id)}))})})}function w(e){var t=(0,i.wA)(),r=(0,i.d4)((function(e){return e.app.filters})),n=(0,i.d4)((function(e){return e.app.isDarkMode}));return(0,A.jsx)(m.A,{rowsPerPage:e.perpage,rowsPerPageOptions:[],count:e.total,page:r[e.view]?r[e.view].page:0,onPageChange:function(n,o){var a=(0,s.e)(r,e.view,"page",o);t((0,s.vm)(a))},style:{color:n?"white":"black",borderTop:"1px solid ".concat(n?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"),backgroundColor:n?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)",borderBottom:"1px solid ".concat(n?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)")}})}t.A=function(e){var t=e.sortBy,r=e.sortOrder,s=e.style,c=e.resources,f=e.pagination,m=e.columns,y=e.columnSolver,k=e.page,C=e.setPage,M=e.total,S=e.handleClick,H=e.perpage,P=e.type,T=e.selectedResources,B=e.view,z=a.useState(!1),E=(0,o.A)(z,2),L=E[0],R=(E[1],(0,a.useState)([])),D=(0,o.A)(R,2),G=D[0],O=(D[1],(0,i.d4)((function(e){return e.app.isDarkMode}))),F=(0,b.A)();return(0,A.jsx)(A.Fragment,{children:c.length>0&&(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(d.A,{sx:{width:"100%"},style:s||null,children:(0,A.jsx)(g.A,{children:(0,A.jsxs)(u.A,{sx:{width:"100%"},"aria-labelledby":"tableTitle",size:L?"small":"medium",padding:"none",children:[(0,A.jsx)(j,{numSelected:G.length,headCells:"checkbox"===P?[{id:"checkbox",numeric:!1,disablePadding:!0,label:""}].concat((0,n.A)(m)):m,sortBy:t,sortOrder:r,view:B}),(0,A.jsx)(p.A,{children:c.map((function(e){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(x.A,{hover:!0,role:"checkbox",tabIndex:-1,style:S?{cursor:"pointer"}:{},children:["checkbox"===P&&(0,A.jsx)(h.A,{component:"th",id:"checkbox",scope:"row",sx:{padding:"10px 10px",borderBottom:"1px solid ".concat(O?F.palette.grey[800]:F.palette.grey[200])},children:(0,A.jsx)(l.A,{onClick:S?function(){return S(e)}:null,color:"primary",checked:!!T&&T.includes(e.id),sx:{color:O?F.palette.grey[400]:F.palette.grey[600],"&.Mui-checked":{color:F.palette.primary.main+" !important"}}})}),m.map((function(t){return(0,A.jsx)(h.A,{component:"th",id:t.destiny,scope:"row",onClick:S&&""!==t.destiny?function(){return S(e)}:null,sx:{padding:"10px 10px",color:O?F.palette.grey[400]:F.palette.grey[600],borderBottom:"1px solid ".concat(O?F.palette.grey[800]:F.palette.grey[200])},children:y(e,t)},t.destiny)}))]},e.id),e.snap&&(0,A.jsx)(x.A,{children:(0,A.jsx)(h.A,{component:"th",scope:"row",sx:{padding:"10px 10px"},children:(0,A.jsx)(v.A,{children:e.snap})})})]})}))}),f&&(0,A.jsx)(w,{view:B,page:k,setPage:C,total:M,perpage:H})]})})})})})}},98787:function(e,t,r){var n=r(24994),o=r(6305);t.A=void 0;var a=o(r(65043)),i=(0,n(r(59846)).default)(a.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.A=i},94777:function(e,t,r){var n=r(24994);t.A=void 0;var o=n(r(40039)),a=r(70579);t.A=(0,o.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20m6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9"}),"DoNotDisturb")},50062:function(e,t,r){var n=r(24994);t.A=void 0;var o=n(r(40039)),a=r(70579);t.A=(0,o.default)((0,a.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Preview")},55263:function(e,t,r){r.d(t,{A:function(){return x}});var n=r(64467),o=r(98587),a=r(58168),i=r(65043),s=r(69292),l=r(98610),c=r(98206),d=r(34535),u=r(92532),p=r(72372);function h(e){return(0,p.Ay)("MuiToolbar",e)}(0,u.A)("MuiToolbar",["root","gutters","regular","dense"]);var g=r(70579),f=["className","component","disableGutters","variant"],m=(0,d.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,a.A)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,n.A)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),x=i.forwardRef((function(e,t){var r=(0,c.b)({props:e,name:"MuiToolbar"}),n=r.className,i=r.component,d=void 0===i?"div":i,u=r.disableGutters,p=void 0!==u&&u,x=r.variant,v=void 0===x?"regular":x,y=(0,o.A)(r,f),b=(0,a.A)({},r,{component:d,disableGutters:p,variant:v}),A=function(e){var t=e.classes,r={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,l.A)(r,h,t)}(b);return(0,g.jsx)(m,(0,a.A)({as:d,className:(0,s.A)(A.root,n),ref:t,ownerState:b},y))}))}}]);
//# sourceMappingURL=7417.60d85748.chunk.js.map