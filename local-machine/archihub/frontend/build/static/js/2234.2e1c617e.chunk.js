"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[2234],{72378:function(e,t,n){n.d(t,{EL:function(){return s},WB:function(){return c}});var r=n(89379),a=(n(65043),n(26240)),i=n(81551),o=n(83003),l=n(70579),s=function(e){var t=(0,a.A)(),n=(0,o.d4)((function(e){return e.app.isDarkMode})),s=(0,i.A)((function(e){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:t.palette.primary.main,border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-thumb:active":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,l.jsx)("div",{id:e.id,style:(0,r.A)({width:"100%",height:"calc(100% - 40px)",display:"flex",margin:"10px",borderRadius:"10px",padding:"10px",background:n?t.palette.grey[900]:"white",boxShadow:"0px 0px 1px rgba(0,0,0,0.1)",justifyContent:"center",alignItems:"center",alignContent:"center",flexWrap:"wrap"},e.style),className:s.bloque,onScroll:e.onScroll,children:e.children})},c=function(e){var t=(0,a.A)(),n=(0,i.A)((function(e){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:t.palette.grey[500],border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.grey[500]},"&::-webkit-scrollbar-thumb:active":{background:t.palette.grey[500]},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,l.jsx)("div",{id:e.id,style:(0,r.A)({padding:10,backgroundColor:t.palette.grey[100],borderRadius:5,color:t.palette.grey[600],height:100,overflow:"auto",width:"100%"},e.style),className:n.bloque,children:e.children})};t.Ay=function(e){var t=e.children,n=e.style;e.onScroll;return(0,l.jsx)("section",{style:(0,r.A)({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},n),children:t})}},62234:function(e,t,n){n.r(t);var r=n(89379),a=n(5544),i=n(65043),o=n(73216),l=n(72378),s=n(83003),c=(n(85742),n(50062),n(16702)),u=n(63516),d=n(10765),h=n(69389),f=n(46020),g=n(31445),b=n(11238),m=n(26240),p=n(58140),v=n(43288),w=n(99246),y=n(70579);t.default=function(e){var t=(0,i.useState)(!1),n=(0,a.A)(t,2),x=n[0],k=n[1],j=(0,i.useState)(null),A=(0,a.A)(j,2),C=A[0],S=A[1],M=(0,i.useState)([]),H=(0,a.A)(M,2),T=H[0],E=H[1],P=(0,i.useState)(!1),R=(0,a.A)(P,2),q=R[0],B=R[1],z=((0,s.d4)((function(e){return e.user})),(0,o.g)().slug),I=(0,o.Zp)(),D=(0,m.A)(),N=(0,p.M)().showAlert,O=(0,w.A)();(0,i.useEffect)((function(){z?(k(!0),f.Jt(z).then((function(e){var t=(0,r.A)({},e);S(t)})).catch((function(e){console.log(e)}))):(k(!1),S({name:"",slug:"",description:"",root:null,parent:null,visible:[]})),g.DI().then((function(e){E(e)})).catch((function(e){console.log(e)}))}),[]);return(0,y.jsxs)(l.Ay,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"},children:[(0,y.jsx)(l.EL,{style:{width:"70%",maxWidth:900,display:"block",overflow:"auto",placeContent:"flex-start"},children:C&&(0,y.jsx)(u.l1,{initialValues:C,onSubmit:function(e,t){var n=t.setSubmitting;if(n(!0),x){var a=(0,r.A)({},e);a.parent?a.parent=a.parent:a.parent="",N("confirm",O.formatMessage({id:"cataloging.confirmEditResource"})).then((function(e){e&&(B(!0),f.yo(z,JSON.stringify(a)).then((function(){I("/cataloging/views")})).catch((function(e){console.log(e),n(!1)})))}))}else{var i=(0,r.A)({},e);i.parent?i.parent=i.parent:i.parent="",N("confirm",O.formatMessage({id:"cataloging.confirmNewResource"})).then((function(e){e&&f.O8(JSON.stringify(i)).then((function(){n(!1),I("/cataloging/views")})).catch((function(e){console.log(e),n(!1)}))}))}n(!1)},validate:function(e){var t={};return e.name||(t.name="El nombre es requerido"),e.root||(t.root="El tipo de archivo inicial es requerido"),t},children:function(t){var n=t.values,r=t.errors,a=(t.touched,t.handleChange),i=t.handleBlur,o=t.handleSubmit,l=t.isSubmitting,s=t.setFieldValue;return(0,y.jsx)("form",{onSubmit:o,children:(0,y.jsxs)(c.A,{style:{display:"flex",flexDirection:"column"},children:[(0,y.jsx)(d.BR,{name:O.formatMessage({id:"general.name"}),id:"name",handleChange:a,handleBlur:i,value:n.name,errors:r.name,required:!0}),(0,y.jsx)(d.BR,{name:O.formatMessage({id:"general.slug"}),id:"slug",handleChange:a,handleBlur:i,value:n.slug,errors:r.slug,required:!0}),(0,y.jsx)(d.QA,{name:O.formatMessage({id:"general.description"}),id:"description",handleChange:a,handleBlur:i,value:n.description}),(0,y.jsx)(d.Q5,{name:O.formatMessage({id:"views.root"}),id:"root",value:n.root,options:T.map((function(e){return{value:e.slug,label:e.name}})),handleChange:function(e){s("root",e.target.value)},handleBlur:function(){},instructions:O.formatMessage({id:"views.rootInst"}),required:!0,error:r.root}),n.root&&(0,y.jsx)("div",{style:{marginTop:20,marginBottom:20},children:(0,y.jsx)(h.A,{postType:n.root,view:"list",checkboxTypes:[n.root],multiple:!1,childrenSelect:!0,setSelected:function(e){e.length>0?s("parent",e[0].id):s("parent",null)},selected:n.parent?[{id:n.parent}]:[]},n.root)}),T&&(0,y.jsx)(d.hw,{id:"visible",label:O.formatMessage({id:"views.visiblePT"}),options:T.map((function(e){return{value:e.slug,label:e.name}})),value:n.visible?n.visible:[],handleChange:function(e){s("visible",e)}}),!x&&(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(c.A,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10},children:[(0,y.jsx)(b.nA,{style:{margin:5,width:"auto"},type:"button",onClick:function(){return e.history.push("/cataloging/views")},label:O.formatMessage({id:"general.cancel"})}),(0,y.jsx)(b.nA,{type:"submit",style:{margin:5,width:"auto"},variant:"outlined",disabled:l,label:O.formatMessage({id:"cataloging.createNew"})})]})}),x&&(0,y.jsxs)(c.A,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10},children:[(0,y.jsx)(b.nA,{type:"button",style:{margin:5,width:"auto"},customColor:{color:D.palette.grey[600],background:D.palette.grey[200]},variant:"outlined",onClick:function(){return I("/cataloging/views")},label:O.formatMessage({id:"general.cancel"})}),(0,y.jsx)(b.nA,{type:"submit",style:{margin:5,width:"auto"},variant:"outlined",disabled:l,label:O.formatMessage({id:"general.update"})})]})]})})}})}),q&&(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",position:"fixed",top:0,left:0,background:"rgba(255, 255, 255, 0.5)",backdropFilter:"blur(5px) saturate(0%)",zIndex:9999},children:(0,y.jsx)(v.A,{})})]})}},46020:function(e,t,n){n.d(t,{Jt:function(){return i},O8:function(){return u},UK:function(){return c},hE:function(){return o},lD:function(){return s},yo:function(){return l}});var r=n(88120),a=n(91280);function i(e){var t="/views/"+e,n={method:"GET",headers:new Headers({Authorization:(0,a.g)()}),mode:"cors",cache:"default"};return fetch((0,r.H6)()+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function o(e){var t="/views/info/"+e,n={method:"GET",headers:new Headers({Authorization:(0,a.g)()}),mode:"cors",cache:"default"};return fetch((0,r.H6)()+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e,t){var n="/views/"+e,i={method:"PUT",headers:new Headers({Authorization:(0,a.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,r.H6)()+n,i).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function s(e){var t="/views/"+e,n={method:"DELETE",headers:new Headers({Authorization:(0,a.g)()}),mode:"cors",cache:"default"};return fetch((0,r.H6)()+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(){var e={method:"GET",headers:new Headers({Authorization:(0,a.g)()}),mode:"cors",cache:"default"};return fetch((0,r.H6)()+"/views",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function u(e){var t={method:"POST",headers:new Headers({Authorization:(0,a.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch((0,r.H6)()+"/views",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}},50062:function(e,t,n){var r=n(24994);t.A=void 0;var a=r(n(40039)),i=n(70579);t.A=(0,a.default)((0,i.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Preview")},85742:function(e,t,n){var r=n(24994);t.A=void 0;var a=r(n(40039)),i=n(70579);t.A=(0,a.default)((0,i.jsx)("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8"}),"Undo")}}]);
//# sourceMappingURL=2234.2e1c617e.chunk.js.map