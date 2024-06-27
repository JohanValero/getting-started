(this.webpackJsonpsim=this.webpackJsonpsim||[]).push([[19],{1031:function(e,t,a){"use strict";var n=a(3),r=a(6),c=a(2),l=a(8),o=a(850),i=a(14),s=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.raised,d=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return c.createElement(o.a,Object(n.a)({className:Object(l.a)(a.root,i),elevation:d?8:1,ref:t},u))}));t.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1033:function(e,t,a){"use strict";var n=a(2),r=a(209);t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1039:function(e,t,a){"use strict";var n=a(3),r=a(6),c=a(2),l=a(8),o=a(14),i=a(201),s=c.forwardRef((function(e,t){var a=e.action,o=e.avatar,s=e.classes,d=e.className,u=e.component,h=void 0===u?"div":u,m=e.disableTypography,f=void 0!==m&&m,v=e.subheader,p=e.subheaderTypographyProps,b=e.title,g=e.titleTypographyProps,E=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=b;null==x||x.type===i.a||f||(x=c.createElement(i.a,Object(n.a)({variant:o?"body2":"h5",className:s.title,component:"span",display:"block"},g),x));var w=v;return null==w||w.type===i.a||f||(w=c.createElement(i.a,Object(n.a)({variant:o?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},p),w)),c.createElement(h,Object(n.a)({className:Object(l.a)(s.root,d),ref:t},E),o&&c.createElement("div",{className:s.avatar},o),c.createElement("div",{className:s.content},x,w),a&&c.createElement("div",{className:s.action},a))}));t.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},1153:function(e,t,a){"use strict";a.r(t),a.d(t,"BloqueContenido",(function(){return C}));var n=a(35),r=a(2),c=a.n(r),l=a(36),o=a(963),i=a(50),s=a(138),d=a(942),u=a.n(d),h=a(949),m=a.n(h),f=a(960),v=a.n(f),p=a(993),b=a.n(p),g=a(940),E=a(941),x=a(1031),w=a(1039),y=a(920),z=a(492),k=a(926),M=a(843),j=a(61),H=a(1033),O=Object(M.a)((function(e){return{bloque:{padding:"10px",backgroundColor:"rgba(255,255,255,.9)",margin:5,width:"100%",height:"100%",overflow:"auto",position:"relative",borderRadius:10,border:"3px solid #fff","&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:"#56749a",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:"#56749a"},"&::-webkit-scrollbar-thumb:active":{background:"#56749a"},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}},tituloBloque:{top:0,fontSize:15,fontWeight:"bold",padding:"10px 15px",position:"sticky",zIndex:10,width:"100%",left:0,background:"#e6e6e6",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#56749a",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},breadcrumbs:{padding:"5px 15px",background:"#56749a",position:"sticky",color:"#fff",borderBottomLeftRadius:10,borderBottomRightRadius:10,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},linkBreadcrumb:{color:"#fff",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:200,display:"inline-block","&:hover":{color:"#fff"}},selectedBread:{color:"#fff !important",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:150,backgroundColor:"rgba(255,255,255,.2)",display:"inline-block",padding:"0 5px",borderRadius:2},columnas:{display:"flex",height:"calc(100vh - 150px)"},card:{marginTop:5,marginBottom:5,"& .MuiCardHeader-root":{padding:"5px 10px",borderBottom:"1px solid #ececec","& .MuiCardHeader-content":{"& .MuiTypography-root":{fontSize:"14px",fontWeight:"bold",fontFamily:"Montserrat",color:"rgb(86, 116, 154)"}}}},btn_color:{color:"#869bb7",padding:5,width:30,height:30,margin:"0 2px",border:"1px solid #c6d0dd","&:hover":{color:"#fff",backgroundColor:"#56749a"},"& .MuiSvgIcon-root":{width:14}}}})),N=function(e){var t=O(),a=Object(r.useState)(!1),l=Object(n.a)(a,2);l[0],l[1];return c.a.createElement(x.a,{className:t.card},c.a.createElement(w.a,{title:e.title,action:c.a.createElement(y.a,{disableGutters:!0,variant:"dense"},c.a.createElement(j.Link,{to:"/lists/".concat(e.id)},c.a.createElement(z.a,{className:t.btn_color,size:"small","aria-label":"settings"},c.a.createElement(u.a,null))),c.a.createElement(z.a,{className:t.btn_color,size:"small","aria-label":"delete",onClick:function(){e.onDeleted(e.id)}},c.a.createElement(H.a,null)))}))},C=function(e){var t=O();return c.a.createElement(k.a,{className:t.bloque,style:e.style},e.title&&c.a.createElement(k.a,{className:t.tituloBloque},e.title),e.topBar&&c.a.createElement(c.a.Fragment,null,e.topBar),e.children)};t.default=Object(i.b)((function(e){return{user:e.auth.user}}),s.a)((function(e){Object(l.m)().id;var t=O(),a=Object(r.useState)(null),i=Object(n.a)(a,2),s=(i[0],i[1],Object(r.useState)([])),d=Object(n.a)(s,2),u=d[0],h=d[1];Object(r.useEffect)((function(){o.c().then((function(e){h(e)})).catch((function(e){console.log(e)}))}),[]);var f=function(t){e.history.push("".concat(t))};return c.a.createElement(E.a,null,c.a.createElement(g.a,{userRoles:e.user.roles,list:function(){var t=[];return e.user.roles.includes("admin")&&t.push({name:"Agregar listado",icon:c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,null),c.a.createElement(m.a,null)),action:"new",callback:function(){return f("/lists/new")}}),e.user.roles.includes("admin")&&t.push({name:"Est\xe1ndares de metadatos",icon:c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null)),callback:function(){return f("/forms")}}),t}()}),c.a.createElement(k.a,{className:t.columnas},c.a.createElement(C,{style:{width:"70%",maxWidth:500},title:"Listados"},u.map((function(e,t){return c.a.createElement(N,{key:t,title:e.name,description:e.description,id:e.id,onDeleted:function(e){o.b(e).then((function(e){o.c().then((function(e){h(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}})})))))}))},940:function(e,t,a){"use strict";a.d(t,"b",(function(){return d}));var n=a(2),r=a.n(n),c=a(843),l=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{viewBox:"0 0 53.2 53.2",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fill:"#a3d4ff",d:"M33.3 7.7v8.4h8.4z"}),r.a.createElement("path",{fill:"#2a5082",d:"M39.8 46.9h-27c-1.5 0-2.8-1.3-2.8-2.8V9.6c0-1.5 1.3-2.8 2.8-2.8h21.8l8 8v29.3c0 1.5-1.2 2.8-2.8 2.8zm-27-38.2c-.5 0-.9.4-.9.9v34.5c0 .5.4.9.9.9h27c.5 0 .9-.4.9-.9V15.6l-6.9-6.9h-21z"}),r.a.createElement("path",{fill:"#2a5082",d:"M38.9 17.1h-6.5v-6.6h1.9v4.7h4.6zM47.3 30.1h1.9V32h-1.9zM47.3 33.8h1.9v1.9h-1.9zM43.6 53.4H32.4v-1.9h11.2c2.1 0 3.7-1.7 3.7-3.7V37.6h1.9v10.2c0 3.1-2.5 5.6-5.6 5.6zM24.9 51.5h1.9v1.9h-1.9zM21.2 51.5h1.9v1.9h-1.9zM28.7 51.5h1.9v1.9h-1.9zM9.1 51.5c-2.1 0-3.7-1.7-3.7-3.7V31.4l2.1 2.1 1.3-1.3-4.4-4.4L0 32.2l1.3 1.3 2.1-2.1v16.4c0 3.1 2.5 5.6 5.6 5.6h10.2v-1.9H9.1zM3.5 24.5h1.9v1.9H3.5zM3.5 20.8h1.9v1.9H3.5zM51.3 22.9L49.2 25V5.9c0-3.1-2.5-5.6-5.6-5.6H32.4v1.9h11.2c2.1 0 3.7 1.7 3.7 3.7v19.2L45.2 23l-1.3 1.3 4.4 4.4 4.4-4.4-1.4-1.4zM5.4 18.9H3.5v-13C3.5 2.8 6 .3 9.1.3h10.2v1.9H9.1C7 2.2 5.4 3.8 5.4 5.9v13zM24.9.3h1.9v1.9h-1.9zM21.2.3h1.9v1.9h-1.9zM28.7.3h1.9v1.9h-1.9z"})))},o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",x:"0",y:"0",version:"1.1",viewBox:"0 0 53.2 53.2"},r.a.createElement("defs",null),r.a.createElement("path",{d:"M33.3 50.2h-3.6l-3-4.6c-.6-.9-1.6-1.4-2.6-1.4h-9.9c-1.1 0-2.1.6-2.7 1.5l-2.8 4.6H5.1v2.4l28.4-.2-.2-2.3zm-19.9-3.3c.1-.2.4-.4.7-.4H24c.3 0 .5.1.7.4l2.1 3.3-15.7.1 2.3-3.4z",class:"st0"}),r.a.createElement("path",{fill:"#a3d4ff",d:"M20.1 17.1L32.8 6.4l6.4 7.5L26 24.8z"}),r.a.createElement("path",{d:"M52.2 37.2L36.1 17.5l3-2.4.1.1 4.8-2c.9-.4 1.6-1.2 1.8-2.1.2-1 0-2-.6-2.7l-5.8-7C38.8.7 37.9.3 36.9.3s-1.8.5-2.4 1.3l-3.1 4.1.2.2-11.4 9.5-.3-.4-4.7 2c-.9.4-1.5 1.1-1.8 2.1-.2.9-.1 1.9.5 2.7l5.5 7.3c.6.8 1.5 1.2 2.5 1.2s1.9-.5 2.5-1.3l3-4.2-.2-.2 2.7-2.1 16.3 19.7c.6.7 1.4 1.1 2.2 1.1h.2c.8 0 1.6-.3 2.2-.8l.9-.8c1.4-1.2 1.5-3.1.5-4.5zM36.4 2.9c.2-.3.4-.3.6-.3.2 0 .4 0 .6.3l5.8 7c.2.3.2.5.1.7s-.1.4-.4.5l-3.2 1.3-5.5-6.8 2-2.7zM22.5 27.6c-.1.2-.4.3-.6.3-.2 0-.4 0-.6-.3l-5.5-7.3c-.2-.3-.2-.5-.1-.6 0-.1.1-.4.4-.5l3-1.3 5.4 6.9-2 2.8zM32.6 8.1l4.6 5.5-11.2 9-4.3-5.4 10.9-9.1zm17.6 31.8l-.9.8c-.2.2-.4.2-.6.2-.2 0-.4-.1-.6-.3L32.6 21.9 35 20l15.3 18.8c.3.3.3.8-.1 1.1z",class:"st0"})))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",x:"0",y:"0",version:"1.1",viewBox:"0 0 53.2 53.2"},r.a.createElement("defs",null),r.a.createElement("path",{className:"back",d:"M11.3,46.4c0,2.4,1.9,4.3,4.3,4.3h23.3c-2.4,0-4.3-1.9-4.3-4.3H11.3z"}),r.a.createElement("path",{className:"back",d:"M8.7,41.6l-2.5,7.7l-2.6-7.8v-31c0-1,0.8-1.7,1.7-1.7H7c1,0,1.7,0.8,1.7,1.7V41.6z"}),r.a.createElement("line",{className:"front",fill:"currentColor",x1:"3.6",y1:"40.7",x2:"8.7",y2:"40.7"}),r.a.createElement("path",{className:"front",fill:"currentColor",d:"M11.3,9.7v2.6H9.6v-1.7c0-0.7-0.3-1.4-0.8-1.8V6.2c0-1.4-1.2-2.6-2.6-2.6c-1.4,0-2.6,1.2-2.6,2.6v2.5 c-0.5,0.5-0.9,1.2-0.9,1.9v31L6.2,52l3.4-10.2V14h1.7v8.6H13V9.7H11.3z M4.4,10.5c0-0.4,0.2-0.7,0.5-0.8h2.4 c0.3,0.1,0.5,0.4,0.5,0.8v1.8H4.4V10.5z M5.3,6.2c0-0.5,0.3-0.9,0.8-0.9S7,5.7,7,6.2v1.7H5.3V6.2z M6.1,46.6l-1.7-5.1h3.3L6.1,46.6z M7.8,39.8H4.4V14h3.4V39.8z"}),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("rect",{x:"21.7",y:"19.1",className:"front",fill:"currentColor",width:"15.5",height:"1.7"})),r.a.createElement("g",null,r.a.createElement("rect",{x:"21.7",y:"22.6",className:"front",fill:"currentColor",width:"15.5",height:"1.7"})),r.a.createElement("g",null,r.a.createElement("rect",{x:"21.7",y:"26",className:"front",fill:"currentColor",width:"15.5",height:"1.7"})),r.a.createElement("g",null,r.a.createElement("rect",{x:"21.7",y:"29.5",className:"front",fill:"currentColor",width:"9.5",height:"1.7"}))),r.a.createElement("path",{className:"front",fill:"currentColor",d:"M47.6,10.6L47.6,10.6l-0.1-0.1H20.8c-2.9,0-5.2,2.3-5.2,5.2v30.1h-5.2v0.9c0,2.9,2.3,5.2,5.2,5.2h23.2h0.1 c2.9,0,5.2-2.3,5.2-5.2v-31c0-1.9,1.5-3.4,3.4-3.4h0.1c1.9,0,3.4,1.5,3.4,3.4h-5.2v1.7h6.9h0.1v-1.6C52.8,12.9,50.5,10.6,47.6,10.6 z M17.7,50.2h-2.1c-1.6,0-2.9-1.1-3.3-2.6h21.5c0.1,1,0.6,1.9,1.2,2.6H17.7z M42.4,15.8v31c0,1.9-1.5,3.4-3.4,3.4h-0.2v-0.1 c-1.9,0-3.4-1.5-3.4-3.4v-0.9h-18v-30c0-1.9,1.5-3.4,3.4-3.4h22.9C42.9,13.3,42.4,14.5,42.4,15.8z"}))))},s=a(967),d=Object(c.a)((function(e){return{root:{position:"fixed",width:"54px",background:"rgba(42, 80, 130, 0.8)",borderRadius:"10px",top:"50%",transform:"translateY(-50%)",left:"10px",zIndex:15},item:{cursor:"pointer",position:"relative",margin:2,"& .tooltipUi":{position:"absolute",top:"50%",transform:"translate(calc(50px + 5px), -50%)",background:"rgba(20, 20, 20, 0.9)",padding:"1em",color:"white",borderRadius:"10px",opacity:0,zIndex:-1,visibility:"hidden",transition:"all 0.25s ease"},"& .icon":{width:"50px",height:"50px",position:"relative",borderRadius:"10px",background:"rgba(42, 80, 130, 1)",display:"flex",justifyContent:"center",alignItems:"center","&::before":{content:'""',position:"absolute",top:"5%",left:"5%",width:"90%",height:"90%",background:"rgba(255, 255, 255, 0.2)",borderRadius:"10px",transform:"scale(0.8)",opacity:0,transition:"all 0.25s ease"},"& svg":{position:"relative",width:"20px","& path, & circle, & rect":{fill:"rgba(255, 255, 255, 0.8)"}}},"&.light .icon":{background:"rgba(42, 80, 130, 0.1)","& svg":{"& path, & circle, & rect":{fill:"rgba(100,100,100, 1)"}}},"&.top .tooltipUi":{transform:"translate(calc(-50% + 25px), -90px)"},"&:hover":{"& .icon":{"&::before":{transform:"scale(1)",opacity:1}},"& .tooltipUi":{transform:"translate(calc(50px + 10px), -50%)",opacity:1,zIndex:20,visibility:"visible"}},"&.top:hover .tooltipUi":{transform:"translate(calc(-50% + 25px), -90px)"},"&.edit .icon":{background:"#ed9f31"},"&.new .icon":{background:"#59b359"},"&.delete .icon":{background:"#d34a46"}}}})),u=[{name:"Patrones de texto",icon:r.a.createElement(l,null)},{name:"Informaci\xf3n de fichas",icon:r.a.createElement(i,null)},{name:"Resultados",icon:r.a.createElement(o,null)}];t.a=function(e){var t=d(),a=e.list?e.list:u;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:t.root},a.map((function(e,a){return r.a.createElement(s.a,{className:"".concat(t.item," ").concat(e.action?e.action:""),title:e.name,key:a,onClick:e.callback?e.callback:function(){}},e.icon)}))))}},941:function(e,t,a){"use strict";var n=a(2),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{style:{marginLeft:"70px",marginTop:"10px",marginRight:"10px",position:"relative",width:"calc(100% - 70px)"}},t))}},942:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),c=a(0);t.default=(0,r.default)((0,c.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},949:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),c=a(0);t.default=(0,r.default)((0,c.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},960:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),c=a(0);t.default=(0,r.default)((0,c.jsx)("path",{d:"M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt")},963:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(204),r=a(46);function c(){var e={method:"GET",headers:new Headers({Authorization:Object(n.a)()}),mode:"cors",cache:"default"};return fetch(r.e+"/lists",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e){var t="/lists/"+e,a={method:"GET",headers:new Headers({Authorization:Object(n.a)()}),mode:"cors",cache:"default"};return fetch(r.e+t,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function o(e,t){var a=new Headers({Authorization:Object(n.a)(),"Content-Type":"application/json"}),c="/lists/"+e;console.log(t);var l={method:"PUT",headers:a,mode:"cors",cache:"default",body:t};return fetch(r.e+c,l).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function i(e){var t={method:"POST",headers:new Headers({Authorization:Object(n.a)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch(r.e+"/lists",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}function s(e){var t="/lists/"+e,a={method:"DELETE",headers:new Headers({Authorization:Object(n.a)()}),mode:"cors",cache:"default"};return fetch(r.e+t,a).then((function(e){return 200!==e.status?Promise.reject(e):e}))}},967:function(e,t,a){"use strict";var n=a(2),r=a.n(n);t.a=function(e){var t=e.className;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:e.index,className:"".concat(t," ").concat(e.labelPos?e.labelPos:""),onClick:function(){return e.onClick(e.title)}},r.a.createElement("div",{className:"icon"},e.children),r.a.createElement("div",{className:"tooltipUi"},e.title)))}},993:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),c=a(0);t.default=(0,r.default)((0,c.jsx)("path",{d:"M4 7v2c0 .55-.45 1-1 1H2v4h1c.55 0 1 .45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7m17 3c-.55 0-1-.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-.55.45-1 1-1h1v-4z"}),"DataObject")}}]);
//# sourceMappingURL=19.700f1182.chunk.js.map