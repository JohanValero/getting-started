"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[9289],{72378:function(t,e,r){r.d(e,{EL:function(){return c},WB:function(){return l}});var n=r(89379),o=(r(65043),r(26240)),a=r(81551),i=r(83003),s=r(70579),c=function(t){var e=(0,o.A)(),r=(0,i.d4)((function(t){return t.app.isDarkMode})),c=(0,a.A)((function(t){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:e.palette.primary.main,border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-thumb:active":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,s.jsx)("div",{id:t.id,style:(0,n.A)({width:"100%",height:"calc(100% - 40px)",display:"flex",margin:"10px",borderRadius:"10px",padding:"10px",background:r?e.palette.grey[900]:"white",boxShadow:"0px 0px 1px rgba(0,0,0,0.1)",justifyContent:"center",alignItems:"center",alignContent:"center",flexWrap:"wrap"},t.style),className:c.bloque,onScroll:t.onScroll,children:t.children})},l=function(t){var e=(0,o.A)(),r=(0,a.A)((function(t){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:e.palette.grey[500],border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.grey[500]},"&::-webkit-scrollbar-thumb:active":{background:e.palette.grey[500]},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,s.jsx)("div",{id:t.id,style:(0,n.A)({padding:10,backgroundColor:e.palette.grey[100],borderRadius:5,color:e.palette.grey[600],height:100,overflow:"auto",width:"100%"},t.style),className:r.bloque,children:t.children})};e.Ay=function(t){var e=t.children,r=t.style;t.onScroll;return(0,s.jsx)("section",{style:(0,n.A)({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},r),children:e})}},93440:function(t,e,r){var n=r(89379),o=(r(65043),r(6481)),a=r(26240),i=r(83003),s=r(81551),c=r(39849),l=r(70579);e.A=function(t){var e=t.className,r=(0,i.d4)((function(t){return t.app.isDarkMode})),u=(0,a.A)(),d=(0,s.A)((function(t){return{root:{position:"fixed",width:"54px",background:u.palette.primary.main,borderRadius:"10px",top:"50%",transform:"translateY(-50%)",left:"10px",zIndex:15},item:{cursor:"pointer",position:"relative",margin:2,"& .tooltipUi":{position:"absolute",top:"50%",width:150,transform:"translate(calc(50px + 5px), -50%)",background:"rgba(20, 20, 20, 0.9)",padding:"1em",color:"white",borderRadius:"10px",opacity:0,zIndex:100,visibility:"hidden",transition:"all 0.25s ease"},"& .icon":{width:"50px",height:"50px",position:"relative",borderRadius:"10px",background:r?u.palette.grey[800]:u.palette.grey[200],display:"flex",justifyContent:"center",alignItems:"center","&::before":{content:'""',position:"absolute",top:"5%",left:"5%",width:"90%",height:"90%",background:u.palette.primary.main,borderRadius:"10px",transform:"scale(0.8)",opacity:0,transition:"all 0.25s ease"},"& svg":{position:"relative",width:"20px","& path, & circle, & rect":{fill:r?u.palette.primary.light:u.palette.primary.main}}},"&.light .icon":{background:"rgba(42, 80, 130, 0.1)","& svg":{"& path, & circle, & rect":{fill:r?u.palette.primary.light:u.palette.primary.main}}},"&.top .tooltipUi":{transform:"translate(calc(-50% + 25px), -90px)"},"&:hover":{"& .icon":{"&::before":{transform:"scale(1)",opacity:1},"& svg":{"& path, & circle, & rect":{fill:"white"}}},"& .tooltipUi":{transform:"translate(calc(50px + 10px), -50%)",opacity:1,zIndex:20,visibility:"visible"}},"&.top:hover .tooltipUi":{transform:"translate(calc(-50% + 25px), -90px)"},"&.edit .icon":{background:"#ed9f31"},"&.new .icon":{background:u.palette.primary.main,"& svg":{"& path, & circle, & rect":{fill:"white"}}},"&.delete .icon":{background:"#d34a46"}}}}))();return(0,l.jsx)("div",{style:(0,n.A)({position:"relative"},t.style),children:(0,l.jsx)(c.Ay,{title:t.title,placement:"top",children:(0,l.jsx)("div",{className:"".concat(d.item," ").concat(e," ").concat(t.labelPos?t.labelPos:""," ").concat(t.selected?"new":""),onClick:function(){return t.onClick(t.title)},children:(0,l.jsx)("div",{className:"icon",children:t.children.split(",").map((function(t,e){return(0,o.Es)({material_icon:t,tag:t})}))})},t.index)})})}},65454:function(t,e,r){r(65043);var n=r(81551);r(70579),r(93440),(0,n.A)((function(t){return{root:{position:"fixed",width:"54px",background:"rgba(42, 80, 130, 0.8)",borderRadius:"10px",top:"50%",transform:"translateY(-50%)",left:"10px",zIndex:15},item:{cursor:"pointer",position:"relative",margin:2,"& .tooltipUi":{position:"absolute",top:"50%",transform:"translate(calc(50px + 5px), -50%)",background:"rgba(20, 20, 20, 0.9)",padding:"1em",color:"white",borderRadius:"10px",opacity:0,zIndex:-1,visibility:"hidden",transition:"all 0.25s ease"},"& .icon":{width:"50px",height:"50px",position:"relative",borderRadius:"10px",background:"rgba(42, 80, 130, 1)",display:"flex",justifyContent:"center",alignItems:"center","&::before":{content:'""',position:"absolute",top:"5%",left:"5%",width:"90%",height:"90%",background:"rgba(255, 255, 255, 0.2)",borderRadius:"10px",transform:"scale(0.8)",opacity:0,transition:"all 0.25s ease"},"& svg":{position:"relative",width:"20px","& path, & circle, & rect":{fill:"rgba(255, 255, 255, 0.8)"}}},"&.light .icon":{background:"rgba(42, 80, 130, 0.1)","& svg":{"& path, & circle, & rect":{fill:"rgba(100,100,100, 1)"}}},"&.top .tooltipUi":{transform:"translate(calc(-50% + 25px), -90px)"},"&:hover":{"& .icon":{"&::before":{transform:"scale(1)",opacity:1}},"& .tooltipUi":{transform:"translate(calc(50px + 10px), -50%)",opacity:1,zIndex:20,visibility:"visible"}},"&.top:hover .tooltipUi":{transform:"translate(calc(-50% + 25px), -90px)"},"&.edit .icon":{background:"#ed9f31"},"&.new .icon":{background:"#59b359"},"&.delete .icon":{background:"#d34a46"}}}}))},9289:function(t,e,r){r.r(e),r.d(e,{Main:function(){return x},default:function(){return v}});var n=r(65043),o=(r(65454),r(72378)),a=r(19853),i=(r(5670),r(78717),r(92371),r(81551)),s=(r(30064),r(13870),r(70579));(0,i.A)((function(t){return{btn_color:{color:"#869bb7 !important",padding:"5px !important",width:"30px !important",height:"30px !important",margin:"0 2px !important",border:"1px solid #c6d0dd !important","&:hover":{color:"#fff !important",backgroundColor:"#56749a !important"},"& .MuiSvgIcon-root":{width:"14px !important"}}}}));var c=r(5544),l=r(73216),u=r(26240),d=r(41905),p=r(8168),h=r(55263),f=r(4598),g=r(43288),m=r(58140),b=r(99246),y=function(t){var e=(0,u.A)(),r=(0,m.M)().showAlert,o=((0,d.A)((function(t){return{btn_color:{color:"#869bb7 !important",padding:"5px !important",width:"30px !important",height:"30px !important",margin:"0 2px !important",borderRadius:"50%",border:"1px solid #c6d0dd !important","&:hover":{color:"#fff !important",backgroundColor:"#56749a !important"},"& .MuiSvgIcon-root":{width:"14px !important"}},chip_style:{margin:"1px 2px !important",backgroundColor:e.palette.secondary.light+" !important",color:e.palette.primary.dark+" !important",border:"1px solid white !important",transition:"all .3s ease-in-out !important","& svg":{width:"15px !important",marginLeft:"10px !important"},"& path":{fill:e.palette.secondary.main+" !important",transition:"all .3s ease-in-out !important"},"&:hover":{backgroundColor:e.palette.primary.dark+" !important",color:"#fff !important","& path":{fill:"#fff !important"}}},access_chip:{backgroundColor:e.palette.secondary.light+" !important",border:"1px solid "+e.palette.secondary.main+" !important",color:e.palette.secondary.dark+" !important","& svg":{marginLeft:"10px !important",width:"15px !important",height:"15px !important",opacity:".5 !important"}}}}))(),(0,n.useState)([])),i=(0,c.A)(o,2),y=i[0],x=i[1],v=(0,n.useState)(0),j=(0,c.A)(v,2),k=j[0],w=j[1],A=(0,n.useState)(0),C=(0,c.A)(A,2),P=C[0],T=(C[1],(0,l.Zp)(),(0,b.A)());(0,n.useEffect)((function(){S()}),[k]);var S=function(){a.Zc().then((function(t){x(t.plugins)}))};return(0,s.jsxs)(s.Fragment,{children:[0===y.length&&(0,s.jsx)(g.A,{}),y.length>0&&(0,s.jsx)(p.A,{pagination:!1,resources:y,perpage:10,page:k,setPage:w,total:P,columns:[{destiny:"name",label:T.formatMessage({id:"general.name"})},{destiny:"description",label:T.formatMessage({id:"general.description"})},{destiny:"active",label:T.formatMessage({id:"general.active"})}],columnSolver:function(e,n){return(0,s.jsxs)(s.Fragment,{children:["active"===n.destiny&&(0,s.jsx)(h.A,{disableGutters:!0,variant:"dense",children:(0,s.jsx)(f.A,{checked:e.active,onChange:function(n){t.onPluginChange(e.slug,n.target.checked).then((function(t){r("success",t.msg),S()}))}})}),"name"===n.destiny&&(0,s.jsx)("span",{children:e.name}),"description"===n.destiny&&(0,s.jsx)("span",{children:e.description})]})}})]})},x=function(t){(0,n.useEffect)((function(){}),[]);return(0,s.jsx)(o.Ay,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"},children:(0,s.jsx)(o.EL,{style:{padding:10,height:"calc(100vh - 40px)",width:"600px",display:"block",overflow:"auto",placeContent:"flex-start"},children:(0,s.jsx)(y,{onPluginChange:function(t,e){return a.in(t)}})})})},v=x},92371:function(t,e,r){r.d(e,{UK:function(){return a}});var n=r(88120),o=r(91280);function a(t){var e={method:"POST",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+"/logs",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}},13870:function(t,e,r){r.d(e,{$:function(){return a},N:function(){return i}});var n=r(88120),o=r(91280);function a(t){if((0,o.g)()){var e={method:"POST",headers:new Headers({"Content-Type":"application/json",Authorization:(0,o.g)()}),mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/search",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}e={method:"POST",headers:new Headers({"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/search/public",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function i(t){var e={method:"POST",headers:new Headers({"Content-Type":"application/json",Authorization:(0,o.g)()}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+"/search/tree",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}},5670:function(t,e,r){r.d(e,{BD:function(){return l},C5:function(){return x},Gm:function(){return b},HU:function(){return h},Hc:function(){return d},Jt:function(){return u},S:function(){return m},UK:function(){return p},XG:function(){return g},hG:function(){return y},ke:function(){return f},kz:function(){return c},nH:function(){return j},qM:function(){return v},vE:function(){return i},vt:function(){return s},yo:function(){return a}});var n=r(88120),o=r(91280);function a(t){var e={method:"PUT",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+"/users/update",e).then((function(t){return 200!==t.status?Promise.reject(t):t.json()}))}function i(t){var e={method:"PUT",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+"/users/update-me",e).then((function(t){return 200!==t.status?Promise.reject(t):t.json()}))}function s(t){var e={method:"POST",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+"/users/register",e).then((function(t){return 201!==t.status?Promise.reject(t):t.json()}))}function c(t){var e={method:"POST",headers:new Headers({"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+"/users/register-me",e).then((function(t){return 201!==t.status?Promise.reject(t):t.json()}))}function l(t){var e={method:"POST",headers:new Headers({"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+"/users/forgot-password",e).then((function(t){return 200!==t.status?Promise.reject(t):t.json()}))}function u(){var t={method:"GET",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+"/users/me",t).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function d(t){var e="/users/"+t,r={method:"GET",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+e,r).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function p(t){var e={method:"POST",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+"/users",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function h(t){var e={method:"POST",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/users/token",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function f(t){var e={method:"POST",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/users/admin-token",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function g(t){var e={method:"POST",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/users/node-token",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function m(t){var e={method:"POST",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/users/viz-token",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function b(t){var e={method:"POST",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/users/favorites",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function y(t){var e={method:"DELETE",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/users/delete",e).then((function(t){return 200!==t.status?Promise.reject(t):t.json()}))}function x(t){var e={method:"DELETE",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/users/favorites",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function v(t){var e={method:"POST",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,n.H6)()+"/users/favorites_list",e).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}function j(){var t={method:"GET",headers:{Authorization:(0,o.g)(),"Content-Type":"application/json"},mode:"cors",cache:"default"};return fetch((0,n.H6)()+"/users/requests",t).then((function(t){return 200!==t.status?Promise.reject(t.status):t.json()}))}},8168:function(t,e,r){var n=r(60436),o=r(5544),a=r(65043),i=r(83003),s=r(85211),c=r(51962),l=r(17392),u=r(15316),d=r(71806),p=r(73460),h=r(10039),f=r(79650),g=r(84882),m=r(19090),b=r(28076),y=r(63336),x=r(35084),v=r(26240),j=r(70579);function k(t){var e=(0,v.A)(),r=(0,i.d4)((function(t){return t.app.isDarkMode})),n=(0,i.d4)((function(t){return t.app.filters})),o=(0,i.wA)(),a=t.view,c=(t.sortOrder,t.sortBy),u=(t.numSelected,t.rowCount,t.onRequestSort,t.headCells);return(0,j.jsx)(g.A,{children:(0,j.jsx)(b.A,{children:u.map((function(t){return(0,j.jsxs)(h.A,{align:t.numeric?"right":"left",padding:t.disablePadding?"none":"normal",style:{color:r?e.palette.grey[400]:e.palette.grey[600],borderBottom:"1px solid ".concat(r?e.palette.grey[800]:e.palette.grey[200])},children:[t.label,t.sortBy&&(0,j.jsx)(l.A,{size:"small",style:{marginLeft:"5px",backgroundColor:c===t.sortBy&&r?e.palette.grey[600]:c===t.sortBy?e.palette.primary.light:r?e.palette.grey[800]:"#f5f5f5",color:c===t.sortBy&&r?e.palette.primary.light:c===t.sortBy?e.palette.primary.main:e.palette.grey[500]},onClick:function(){var e=n[a].sortBy===t.sortBy&&"asc"===n[a].sortOrder?"desc":"asc",r=(0,s.e)(n,a,"sortOrder",e);r=(0,s.e)(r,a,"sortBy",t.sortBy),o((0,s.vm)(r))},children:(0,j.jsx)(x.A,{})})]},t.id)}))})})}function w(t){var e=(0,i.wA)(),r=(0,i.d4)((function(t){return t.app.filters})),n=(0,i.d4)((function(t){return t.app.isDarkMode}));return(0,j.jsx)(m.A,{rowsPerPage:t.perpage,rowsPerPageOptions:[],count:t.total,page:r[t.view]&&t.view?r[t.view].page:t.page,onPageChange:function(n,o){if(t.view){var a=(0,s.e)(r,t.view,"page",o);e((0,s.vm)(a))}else t.setPage(o)},style:{color:n?"white":"black",borderTop:"1px solid ".concat(n?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"),backgroundColor:n?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)",borderBottom:"1px solid ".concat(n?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)")}})}e.A=function(t){var e=t.sortBy,r=t.sortOrder,s=t.style,l=t.resources,g=t.pagination,m=t.columns,x=t.columnSolver,A=t.page,C=t.setPage,P=t.total,T=t.handleClick,S=t.perpage,H=t.type,O=t.selectedResources,z=t.view,R=a.useState(!1),N=(0,o.A)(R,2),B=N[0],M=(N[1],(0,a.useState)([])),E=(0,o.A)(M,2),I=E[0],G=(E[1],(0,i.d4)((function(t){return t.app.isDarkMode}))),U=(0,v.A)();return(0,j.jsx)(j.Fragment,{children:l.length>0&&(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(u.A,{sx:{width:"100%"},style:s||null,children:(0,j.jsx)(f.A,{children:(0,j.jsxs)(d.A,{sx:{width:"100%"},"aria-labelledby":"tableTitle",size:B?"small":"medium",padding:"none",children:[(0,j.jsx)(k,{numSelected:I.length,headCells:"checkbox"===H?[{id:"checkbox",numeric:!1,disablePadding:!0,label:""}].concat((0,n.A)(m)):m,sortBy:e,sortOrder:r,view:z}),(0,j.jsx)(p.A,{children:l.map((function(t){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(b.A,{hover:!0,role:"checkbox",tabIndex:-1,style:T?{cursor:"pointer"}:{},children:["checkbox"===H&&(0,j.jsx)(h.A,{component:"th",id:"checkbox",scope:"row",sx:{padding:"10px 10px",borderBottom:"1px solid ".concat(G?U.palette.grey[800]:U.palette.grey[200])},children:(0,j.jsx)(c.A,{onClick:T?function(){return T(t)}:null,color:"primary",checked:!!O&&O.includes(t.id),sx:{color:G?U.palette.grey[400]:U.palette.grey[600],"&.Mui-checked":{color:U.palette.primary.main+" !important"}}})}),m.map((function(e){return(0,j.jsx)(h.A,{component:"th",id:e.destiny,scope:"row",onClick:T&&""!==e.destiny?function(){return T(t)}:null,sx:{padding:"10px 10px",color:G?U.palette.grey[400]:U.palette.grey[600],borderBottom:"1px solid ".concat(G?U.palette.grey[800]:U.palette.grey[200])},children:x(t,e)},e.destiny)}))]},t.id),t.snap&&(0,j.jsx)(b.A,{children:(0,j.jsx)(h.A,{component:"th",scope:"row",sx:{padding:"10px 10px"},children:(0,j.jsx)(y.A,{children:t.snap})})})]})}))}),g&&(0,j.jsx)(w,{view:z,page:A,setPage:C,total:P,perpage:S})]})})})})})}},55263:function(t,e,r){r.d(e,{A:function(){return b}});var n=r(64467),o=r(98587),a=r(58168),i=r(65043),s=r(69292),c=r(98610),l=r(98206),u=r(34535),d=r(92532),p=r(72372);function h(t){return(0,p.Ay)("MuiToolbar",t)}(0,d.A)("MuiToolbar",["root","gutters","regular","dense"]);var f=r(70579),g=["className","component","disableGutters","variant"],m=(0,u.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})((function(t){var e=t.theme,r=t.ownerState;return(0,a.A)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,n.A)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(t){var e=t.theme;return"regular"===t.ownerState.variant&&e.mixins.toolbar})),b=i.forwardRef((function(t,e){var r=(0,l.b)({props:t,name:"MuiToolbar"}),n=r.className,i=r.component,u=void 0===i?"div":i,d=r.disableGutters,p=void 0!==d&&d,b=r.variant,y=void 0===b?"regular":b,x=(0,o.A)(r,g),v=(0,a.A)({},r,{component:u,disableGutters:p,variant:y}),j=function(t){var e=t.classes,r={root:["root",!t.disableGutters&&"gutters",t.variant]};return(0,c.A)(r,h,e)}(v);return(0,f.jsx)(m,(0,a.A)({as:u,className:(0,s.A)(j.root,n),ref:e,ownerState:v},x))}))}}]);
//# sourceMappingURL=9289.c52b67fd.chunk.js.map