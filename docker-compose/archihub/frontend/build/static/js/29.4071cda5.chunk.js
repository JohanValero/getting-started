(this.webpackJsonpsim=this.webpackJsonpsim||[]).push([[29,31],{1068:function(e,t,a){"use strict";var n=a(52),r=a(216);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(2)),o=(0,n(a(217)).default)(i.createElement("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}),"Undo");t.default=o},1083:function(e,t,a){"use strict";a.r(t),a.d(t,"BloqueContenido",(function(){return k})),a.d(t,"Main",(function(){return O}));var n=a(35),r=a(2),i=a.n(r),o=a(56),l=a(151),c=a(969),s=a(967),u=a(519),d=a(523),f=a(965),m=a(972),p=a(980),g=a(989),h=a.n(g),b=(a(983),a(40),a(973)),v=a(976),y=a(211),x=a.n(y),w=a(2069),E=Object(u.a)((function(e){return{bloque:{padding:"10px",backgroundColor:"rgba(255,255,255,.9)",margin:5,width:"100%",height:"100%",overflow:"auto",position:"relative",borderRadius:10,border:"3px solid #fff","&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:"#56749a",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:"#56749a"},"&::-webkit-scrollbar-thumb:active":{background:"#56749a"},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}},tituloBloque:{top:0,fontSize:15,fontWeight:"bold",padding:"10px 15px",position:"sticky",zIndex:10,width:"100%",left:0,background:"#e6e6e6",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#56749a",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},breadcrumbs:{padding:"5px 15px",color:"#fff",borderBottomLeftRadius:10,borderBottomRightRadius:10,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},linkBreadcrumb:{color:"#fff",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:200,display:"inline-block","&:hover":{color:"#fff"}},selectedBread:{color:"#fff !important",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:150,backgroundColor:"rgba(255,255,255,.2)",display:"inline-block",padding:"0 5px",borderRadius:2},columnas:{display:"flex",height:"calc(100vh - 150px)"},separador:{borderBottom:"1px solid #dcdcdc",paddingTop:25,paddingBottom:10,fontWeight:"bold",color:"#56749a","& svg":{marginRight:10,marginLeft:5,width:20,height:20,padding:3,backgroundColor:"#56749a",borderRadius:50,"& path":{fill:"#fff"}}},toolbar:{minHeight:"auto",padding:5,backgroundColor:"#56749a",color:"#fff",borderTopLeftRadius:10,overflow:"hidden","& h6":{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:16}},itemMenu:{display:"flex",alignItems:"center",padding:15,borderBottom:"1px solid #dcdcdc","& svg":{"& path":{fill:"#9fb0c6"}},"&:hover":{backgroundColor:e.palette.grey[100],cursor:"pointer"},"&.selected":{backgroundColor:"#9fb0c6",color:"#fff","& path":{fill:"#fff"}}}}})),k=function(e){var t=E();return i.a.createElement(d.a,{className:t.bloque,style:e.style},e.title&&i.a.createElement(d.a,{className:t.tituloBloque},e.title),e.topBar&&i.a.createElement(i.a.Fragment,null,e.topBar),e.children)},O=function(e){E();var t=Object(r.useState)(null),a=Object(n.a)(t,2),o=a[0],l=a[1],u=Object(r.useState)(null),g=Object(n.a)(u,2),y=g[0],O=g[1],j=Object(r.useState)(null),S=Object(n.a)(j,2),C=(S[0],S[1],Object(r.useState)(null)),_=Object(n.a)(C,2),B=_[0],R=_[1],q=Object(r.useState)(!1),T=Object(n.a)(q,2);T[0],T[1];Object(r.useEffect)((function(){m.b().then((function(e){O(e),f.c().then((function(e){l(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})),p.c().then((function(e){R(e.map((function(e){return{slug:e.id,name:e.name}})))})).catch((function(e){console.log(e)}))}),[]);return i.a.createElement(s.a,null,i.a.createElement(c.a,{userRoles:e.user.roles,list:function(){var t=[];return t.push({name:"Volver",icon:i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,null)),callback:function(){e.history.push("/dashboard")}}),t}()}),i.a.createElement(k,{style:{width:"calc(50% - 20px)",height:"calc(100vh - 100px)",overflow:"auto"},title:"Configuraci\xf3n general"},o&&i.a.createElement(v.c,{initialValues:{tipo_defecto:o.settings.find((function(e){return"post_types_settings"===e.name})).data[0].value,tipos_vista_individual:o.settings.find((function(e){return"post_types_settings"===e.name})).data[1].value,access_rights_list:o.settings.find((function(e){return"access_rights"===e.name})).data[0].value,user_roles_list:o.settings.find((function(e){return"access_rights"===e.name})).data[1].value,api_activation_admin:o.settings.find((function(e){return"api_activation"===e.name})).data[0].value,api_activation_public:o.settings.find((function(e){return"api_activation"===e.name})).data[1].value,index_activation:o.settings.find((function(e){return"index_management"===e.name})).data[0].value,index_resources_remake:o.settings.find((function(e){return"index_management"===e.name})).data[1].value,index_resources_reindex:o.settings.find((function(e){return"index_management"===e.name})).data[2].value,cache_management:o.settings.find((function(e){return"cache_management"===e.name})).data[0].value},onSubmit:function(e,t){(0,t.setSubmitting)(!1),x.a.fire({title:"\xbfEst\xe1s seguro?",text:"Se guardar\xe1 la configuraci\xf3n",icon:"warning",showCancelButton:!0}).then((function(t){t.isConfirmed&&f.r(JSON.stringify(e)).then((function(e){x.a.fire("Guardado!","La configuraci\xf3n se guard\xf3 correctamente","success")})).catch((function(e){x.a.fire("Error!","Hubo un error al guardar la configuraci\xf3n","error")}))}))}},(function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange,e.handleBlur,e.handleSubmit),n=e.isSubmitting,r=e.setFieldValue;return i.a.createElement("form",{onSubmit:a},o&&i.a.createElement(i.a.Fragment,null,o.settings.map((function(e,a){return Array.isArray(e.data)?i.a.createElement(b.r,{id:a,label:e.label,data:e.data,options:"post_types_settings"===e.name?y:"access_rights"===e.name?B:null,values:t,setFieldValue:function(e,t){return r(e,t)}}):"object"===typeof e.data?i.a.createElement(b.q,{id:a,label:e.label,data:e.data}):void 0}))),o&&i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10}},i.a.createElement(w.a,{type:"button",variant:"outlined"},"Cancelar"),i.a.createElement(w.a,{type:"submit",variant:"outlined",disabled:n},"Guardar"))))}))))};t.default=Object(o.b)((function(e){return{user:e.auth.user}}),l.a)(O)},1176:function(e,t,a){"use strict";var n=a(3),r=a(94),i=a(9),o=a(2),l=(a(349),a(10)),c=a(17),s=a(176),u=a(55),d=a(218),f=Object(d.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=a(337);var p=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(i.a)(e,["classes"]);return o.createElement(m.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),o.createElement(f,{className:t.icon}))}));var g=o.forwardRef((function(e,t){var a=e.children,c=e.classes,u=e.className,d=e.component,f=void 0===d?"nav":d,m=e.expandText,g=void 0===m?"Show path":m,h=e.itemsAfterCollapse,b=void 0===h?1:h,v=e.itemsBeforeCollapse,y=void 0===v?1:v,x=e.maxItems,w=void 0===x?8:x,E=e.separator,k=void 0===E?"/":E,O=Object(i.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),j=o.useState(!1),S=j[0],C=j[1],_=o.Children.toArray(a).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return o.createElement("li",{className:c.li,key:"child-".concat(t)},e)}));return o.createElement(s.a,Object(n.a)({ref:t,component:f,color:"textSecondary",className:Object(l.a)(c.root,u)},O),o.createElement("ol",{className:c.ol},function(e,t,a){return e.reduce((function(n,r,i){return i<e.length-1?n=n.concat(r,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},a)):n.push(r),n}),[])}(S||w&&_.length<=w?_:function(e){return y+b>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[o.createElement(p,{"aria-label":g,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-b,e.length)))}(_),c.separator,k)))}));t.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},2048:function(e,t,a){"use strict";a.r(t);var n=a(998),r=a(19),i=a(35),o=a(2),l=a.n(o),c=a(967),s=a(969),u=a(965),d=a(1068),f=a.n(d),m=a(1083),p=a(176),g=a(523),h=a(891),b=a(519),v=a(211),y=a.n(v),x=a(973),w=a(976),E=Object(b.a)((function(e){return{bloque:{backgroundColor:"#999",display:"flex",borderRadius:5,transition:"all .3s","&:hover":{backgroundColor:"rgba(42, 80, 130, 1)"},"& h3":{margin:0,marginBottom:5,color:"#56749a",fontSize:18}},instructions:{fontSize:14,marginBottom:10,padding:10,backgroundColor:"white"}}}));t.default=function(e){var t=E(),a=Object(o.useState)(null),d=Object(i.a)(a,2),b=d[0],v=d[1],k=Object(o.useState)(null),O=Object(i.a)(k,2),j=O[0],S=O[1],C=Object(o.useState)({}),_=Object(i.a)(C,2),B=_[0];_[1];Object(o.useEffect)((function(){e.match.params.slug&&u.i(e.match.params.slug,"settings").then((function(e){var t={};e.forEach((function(e){"instructions"!==e.type&&"file"!==e.type&&((t=Object(r.a)({},t))[e.id]=e.default)})),t.files=[],console.log(t),S(t),v(e)})).catch((function(e){console.log(e)}))}),[]);var R=function(e,t){var a,r=t.split("."),i=e,o=Object(n.a)(r);try{for(o.s();!(a=o.n()).done;){if(void 0===(i=i[a.value]))return}}catch(l){o.e(l)}finally{o.f()}return i};return l.a.createElement("div",{className:"cev-dashboard"},l.a.createElement(c.a,null,l.a.createElement(s.a,{list:[{name:"Atr\xe1s",icon:l.a.createElement(f.a,null),callback:function(){e.history.push("/processing")}}]}),l.a.createElement(m.BloqueContenido,{style:{width:"calc(50% - 20px)",height:"calc(100vh - 100px)",overflow:"auto"},title:"Configurar procesamiento"},b&&j&&l.a.createElement(w.c,{initialValues:j,onSubmit:function(t,a){var n=a.setSubmitting;n(!0),y.a.fire({title:"Procesando",html:"Espere un momento",allowOutsideClick:!1,showConfirmButton:!1});var r=new FormData;r.append("data",JSON.stringify(t)),t.files.forEach((function(e){r.append("files",e.file)})),u.o(e.match.params.slug,r).then((function(t){n(!1),y.a.close(),y.a.fire({title:"Procesamiento iniciado",text:t.msg,icon:"success",confirmButtonText:"Aceptar"}).then((function(){e.history.push("/processing")}))})).catch((function(e){n(!1),y.a.close(),e.json().then((function(e){y.a.fire({title:"Error",text:e.msg,icon:"error"})}))}))}},(function(e){var a=e.values,n=e.errors,r=(e.touched,e.handleChange),i=e.handleBlur,o=e.handleSubmit,c=e.isSubmitting,s=e.setFieldValue;return l.a.createElement("form",{onSubmit:o},b.map((function(e,o){return l.a.createElement(l.a.Fragment,null,"file"===e.type&&l.a.createElement(x.h,{key:o,name:e.label,id:e.name,values:a,required:e.required,change:s,limit:e.limit,acceptedFiles:e.acceptedFiles}),"instructions"===e.type&&l.a.createElement(p.a,{key:o,variant:"body1",className:t.instructions},e.text),"checkbox"===e.type&&l.a.createElement(x.g,{key:o,id:e.name,name:e.label,instructions:e.instructions,value:a[e.name],handleChange:r,handleBlur:i,error:n[e.name],required:e.required}),"select"===e.type&&l.a.createElement(x.l,{key:o,id:e.name,name:e.label,value:a[e.name],handleChange:r,handleBlur:i,error:n[e.name],options:e.options,required:e.required}),"multiple"===e.type&&l.a.createElement(l.a.Fragment,null,console.log(e,a,R(a,e.id)),l.a.createElement(w.b,{key:o,name:e.id},(function(t){var n=t.insert,r=t.remove,i=t.push,c=t.move;return l.a.createElement(x.p,{name:e.title,id:e.id,key:o,insert:n,remove:r,push:i,fields:e.fields,setFieldValue:function(t){s(e.id,t)},move:c,value:R(a,e.id)?R(a,e.id):[],required:e.required,errors:B[e.destiny]})}))))})),l.a.createElement(g.a,{style:{display:"flex",justifyContent:"center",marginTop:25}},l.a.createElement(h.a,{variant:"outlined",type:"submit",disabled:c},"Guardar")))})))))}},979:function(e,t,a){"use strict";var n=a(52),r=a(216);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(2)),o=(0,n(a(217)).default)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=o},983:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return m}));var n=a(2),r=a.n(n),i=a(516),o=a(2075),l=a(176),c=a(1176),s=a(523),u=a(979),d=a.n(u),f=Object(i.a)(o.a)((function(e){var t=e.theme;return{backgroundColor:"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[200],height:t.spacing(3),color:t.palette.text.primary,fontWeight:t.typography.fontWeightRegular,border:"1px solid #dcdcdc",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:300,"& svg":{width:15,marginLeft:10,marginRight:5}}})),m=Object(i.a)(o.a)((function(e){var t=e.theme;return{backgroundColor:"rgb(85 116 154)",height:t.spacing(3),color:"white",fontWeight:t.typography.fontWeightRegular,border:"1px solid #dcdcdc",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:300,"& svg":{width:15,marginLeft:10,marginRight:5},"& path":{fill:"#fff"}}}));t.c=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{variant:"body2"},e.selectedType.description),r.a.createElement(c.a,{separator:r.a.createElement(d.a,{fontSize:"small",style:{margin:0}})},e.selectedType.parentsTypes.reverse().map((function(e,t){return r.a.createElement(f,{key:t,label:e.name})})),r.a.createElement(l.a,{variant:"body2",color:"text.primary"},e.selectedType.name)),e.selectedType.hierarchical&&r.a.createElement(s.a,null,r.a.createElement(l.a,{variant:"body2",color:"text.primary"},"Este tipo de contenido puede ser jer\xe1rquico entre si")),e.selectedType.metadata&&r.a.createElement(s.a,null,r.a.createElement(l.a,{variant:"body2",color:"text.primary"},"La estructura de metadatos es: ",e.selectedType.metadata.name)))}},998:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(221);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}}}]);
//# sourceMappingURL=29.4071cda5.chunk.js.map