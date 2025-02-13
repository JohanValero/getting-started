"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[2155],{53171:function(e,t,r){r(65043);var n=r(26240),a=r(94777),o=r(70579);t.A=function(e){var t=(0,n.A)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{style:{textAlign:"center",padding:10,width:"100%"},children:(0,o.jsx)(a.A,{style:{fontSize:50,color:t.palette.primary.light}})})})}},72378:function(e,t,r){r.d(t,{EL:function(){return l},WB:function(){return u}});var n=r(89379),a=(r(65043),r(26240)),o=r(81551),i=r(83003),c=r(70579),l=function(e){var t=(0,a.A)(),r=(0,i.d4)((function(e){return e.app.isDarkMode})),l=(0,o.A)((function(e){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:t.palette.primary.main,border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-thumb:active":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,c.jsx)("div",{id:e.id,style:(0,n.A)({width:"100%",height:"calc(100% - 40px)",display:"flex",margin:"10px",borderRadius:"10px",padding:"10px",background:r?t.palette.grey[900]:"white",boxShadow:"0px 0px 1px rgba(0,0,0,0.1)",justifyContent:"center",alignItems:"center",alignContent:"center",flexWrap:"wrap"},e.style),className:l.bloque,onScroll:e.onScroll,children:e.children})},u=function(e){var t=(0,a.A)(),r=(0,o.A)((function(e){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:t.palette.grey[500],border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.grey[500]},"&::-webkit-scrollbar-thumb:active":{background:t.palette.grey[500]},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,c.jsx)("div",{id:e.id,style:(0,n.A)({padding:10,backgroundColor:t.palette.grey[100],borderRadius:5,color:t.palette.grey[600],height:100,overflow:"auto",width:"100%"},e.style),className:r.bloque,children:e.children})};t.Ay=function(e){var t=e.children,r=e.style;e.onScroll;return(0,c.jsx)("section",{style:(0,n.A)({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},r),children:t})}},32155:function(e,t,r){r.r(t);var n=r(64467),a=r(5544),o=r(65043),i=r(73216),c=r(83003),l=r(72378),u=r(43288),d=r(53171),s=r(46020),p=r(58140),h=r(81551),b=r(749),f=r(66187),g=r(26240),m=r(14905),k=r(70579);t.default=function(e){var t=(0,o.useState)([]),r=(0,a.A)(t,2),y=r[0],A=r[1],w=(0,o.useState)(!0),v=(0,a.A)(w,2),x=v[0],j=v[1],C=(0,p.M)().showAlert,R=(0,i.Zp)(),H=(0,g.A)(),S=(0,c.d4)((function(e){return e.app.isDarkMode})),z=(0,h.A)((function(){return{card:{margin:(0,m.X)()?"10px 0":"10px",padding:10,borderRadius:10,width:"calc(100% - 20px)",maxWidth:500,cursor:"pointer",minWidth:300,"& h1":{color:H.palette.primary.main,fontWeight:"normal"},"& p":{},"&:hover":{backgroundColor:H.palette.primary.light,"& h1":{color:"#fff"},"& p":{opacity:.6}}}}}))();return(0,o.useEffect)((function(){s.UK().then((function(e){j(!1),A(e)})).catch((function(e){e.json().then((function(t){C("error",e.msg).then((function(){R("/login")}))}))}))}),[]),(0,k.jsx)(l.Ay,{children:(0,k.jsxs)(l.EL,{children:[x&&(0,k.jsx)(u.A,{}),!x&&0===y.length&&(0,k.jsx)(d.A,{}),y.map((function(e,t){var r;return(0,k.jsxs)(b.A,{className:z.card,onClick:function(){R("/explore/".concat(e.slug))},style:{backgroundColor:S?H.palette.grey[800]:H.palette.grey[200],color:S?H.palette.grey[300]:H.palette.grey[600]},children:[(0,k.jsx)("div",{style:{backgroundColor:H.palette.primary.main,height:"200px",width:"100%",borderRadius:"10px",backgroundSize:"cover",backgroundPosition:"center",position:"relative",marginBottom:"10px",backgroundImage:"url('".concat("","/imgs/").concat(e.slug,".png')")},children:(0,k.jsx)(f.A,{variant:"h2",style:(r={background:H.palette.primary.main},(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(r,"background","-moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ".concat(H.palette.primary.main," 80%, ").concat(H.palette.primary.main," 100%)")),"background","-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(80%, ".concat(H.palette.primary.main,"), color-stop(100%, ").concat(H.palette.primary.main,"))")),"background","-webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ".concat(H.palette.primary.main," 80%, ").concat(H.palette.primary.main," 100%)")),"background","-o-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ".concat(H.palette.primary.main," 80%, ").concat(H.palette.primary.main," 100%)")),"background","-ms-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ".concat(H.palette.primary.main," 80%, ").concat(H.palette.primary.main," 100%)")),"background","linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ".concat(H.palette.primary.main," 80%, ").concat(H.palette.primary.main," 100%)")),"color","#fff"),"fontSize",H.typography.h2.fontSize),"padding","15px"),"paddingTop","100px"),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)(r,"borderRadius","10px"),"borderTopLeftRadius",0),"borderTopRightRadius",0),"position","absolute"),"width","calc(100% - 30px)"),"bottom",0)),children:e.name})}),(0,k.jsx)(f.A,{variant:"body1",children:e.description})]},t)}))]})})}},46020:function(e,t,r){r.d(t,{Jt:function(){return o},O8:function(){return d},UK:function(){return u},hE:function(){return i},lD:function(){return l},yo:function(){return c}});var n=r(88120),a=r(91280);function o(e){var t="/views/"+e,r={method:"GET",headers:new Headers({Authorization:(0,a.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function i(e){var t="/views/info/"+e,r={method:"GET",headers:new Headers({Authorization:(0,a.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(e,t){var r="/views/"+e,o={method:"PUT",headers:new Headers({Authorization:(0,a.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+r,o).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e){var t="/views/"+e,r={method:"DELETE",headers:new Headers({Authorization:(0,a.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function u(){var e={method:"GET",headers:new Headers({Authorization:(0,a.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+"/views",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function d(e){var t={method:"POST",headers:new Headers({Authorization:(0,a.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch((0,n.H6)()+"/views",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}},749:function(e,t,r){var n=r(58168),a=r(80045),o=r(65043),i=r(43024),c=r(20495),l=r(47573),u=o.forwardRef((function(e,t){var r=e.classes,l=e.className,u=e.raised,d=void 0!==u&&u,s=(0,a.A)(e,["classes","className","raised"]);return o.createElement(c.A,(0,n.A)({className:(0,i.default)(r.root,l),elevation:d?8:1,ref:t},s))}));t.A=(0,l.A)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},94777:function(e,t,r){var n=r(24994);t.A=void 0;var a=n(r(40039)),o=r(70579);t.A=(0,a.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20m6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9"}),"DoNotDisturb")}}]);
//# sourceMappingURL=2155.3da8a19a.chunk.js.map