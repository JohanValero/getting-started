"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[3040],{90151:function(e,t,n){n.d(t,{D8:function(){return k},Ot:function(){return N},P4:function(){return F},Ts:function(){return D},Zv:function(){return O},a7:function(){return U},i0:function(){return I},kx:function(){return z},oS:function(){return P},qV:function(){return R},vs:function(){return Z},zB:function(){return B}});var o,r,i,s=n(89379),a=n(29408),u=n(84538),l=n(17583),c=n(50208),d=n(9920),h=n(65892),f=n(2936),p=n.n(f),m=[],b=[],g=[],y=!1,v=0,w=1e3,x=null,A=null,T=null,j=null,C=null,E=h.UMr(h.t55),H=!0;function k(e){x&&e?(x.mouseButtons={LEFT:a.kBv.ROTATE,MIDDLE:a.kBv.DOLLY,RIGHT:a.kBv.PAN},x.update()):x&&(x.mouseButtons={LEFT:a.kBv.PAN,MIDDLE:a.kBv.DOLLY,RIGHT:a.kBv.ROTATE},x.update()),C=e}function z(e){e}function P(e){e}function L(e,t,n,o,r){var i=document.querySelector(".tooltip");if(i)i.style.left=t+"px",i.style.top=n+"px",i.style.opacity=1,i.style.backgroundColor=o,i.style.boxShadow="0px 0px 5px 0px "+o,i.innerHTML=e;else{var s=document.createElement("div");s.classList.add("tooltip"),s.style.left=t+"px",s.style.top=n+"px",s.style.opacity=1,s.style.backgroundColor=o,s.style.boxShadow="0px 0px 5px 0px "+o,s.innerHTML=e,document.body.appendChild(s)}}function S(){var e=document.querySelector(".tooltip");e&&e.remove()}function O(e){j=e}function R(e,t,n,r){var i=o.position.y,s=o.position.z,a=100*e;if(r){var u=100*(e-1);u<0&&(u=0),a=100*e+(o.position.x-u)}o.position.set(a,i,s),o.rotation.set(0,0,0),v=e,J(e,t,n)}function B(e){var t=m[v-1];if(t){var n=t.element.style.filter;n.includes("contrast")?n=n.replace(/contrast\((.*?)\)/,"contrast("+e+")"):n+=" contrast("+e+")",t.element.style.filter=n}}function N(e){var t=m[v-1];if(t){var n=t.element.style.filter;n.includes("brightness")?n=n.replace(/brightness\((.*?)\)/,"brightness("+e+")"):n+=" brightness("+e+")",t.element.style.filter=n}}function D(e,t,n,s){var d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;H=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],A=t,E=h.UMr(h.t55);var f=window.innerWidth/window.innerHeight,p=A.getBoundingClientRect();(o=new a.qUd(w*f/-2,w*f/2,w/2,w/-2,1,1e3)).position.set(-0,0,200),o.rotation.set(0,0,0),r=new a.Z58;for(var T=1;T<=e;T++)g.push(!1),z(72,72/n,T,new a.Pq0(1e4*Math.random()-5e3,2e3*Math.random()-1e3,2e3*Math.random()),new a.O9p(0,0,0));for(var j={line:[]},C=0;C<m.length;C++){var k=new a.B69;k.position.x=100*C,k.position.y=0,k.position.z=0,j.line.push(k)}function z(e,t,i,a,l){var c=document.createElement("div");c.style.width=e+"px",c.style.height=t+"px",c.style.backgroundColor="white",c.style.backgroundSize="contain",c.style.backgroundRepeat="no-repeat",c.style.backgroundPosition="center",c.style.display="flex",c.style.justifyContent="center",c.style.alignItems="center",c.className="plane",c.addEventListener("pointerdown",(function(){if(v===i)y||(y=!0);else{v=i,y=!0;var e=o.position.y,t=o.position.z;o.position.set(100*v,e,t)}J(i,n,s)}));var d=new u.on(c);d.position.copy(a),d.rotation.copy(l),r.add(d),m.push(d),b.push(c)}A.style.height=p.height+"px",(i=new u.a0).setSize(p.width,p.height),i.domElement.style.position="absolute",i.domElement.style.top=0,A.appendChild(i.domElement),o.zoom=.45,(x=new l.N(o,i.domElement)).minZoom=.3,x.maxZoom=5,x.zoomSpeed=2,x.enableRotate=!1,x.enablePan=!1,x.enableZoom=!1,x.mouseButtons={LEFT:a.kBv.PAN,MIDDLE:a.kBv.DOLLY,RIGHT:a.kBv.ROTATE},x.update(),setTimeout((function(){!function(e,t){c.Ay.removeAll();for(var n=0;n<m.length;n++){var o=m[n],r=e[n];o.position.x=r.position.x,o.position.y=r.position.y,o.position.z=r.position.z,o.element.style.transition="all "+t*Math.random()+"s cubic-bezier(0.215, 0.610, 0.355, 1)"}}(j.line,3)}),350),setTimeout((function(){y=!0,v=d,J(d,n,s)}),1e3),window.addEventListener("resize",q)}function M(e){var t=v-1,n=t-10,o=t+10;n<0&&(n=0,o=20),o>m.length&&(n=m.length-20,o=m.length);for(var r=[],i=n;i<o;i++)!1===g[i]&&r.push(i);d.f2(e,r,"small",H).then((function(e){for(var t=0;t<r.length;t++){g[r[t]]=!0;var n=m[r[t]],o="data:image/jpg;base64,"+e[t].data;v!==r[t]+1&&(n.element.style.backgroundColor="transparent",n.element.style.backgroundImage='url("'+o+'")')}}))}function J(e,t,n){if(j(e),y){T&&clearTimeout(T),T=setTimeout((function(){M(n),function(e){d.f2(e,[v-1],"big",H).then((function(e){try{var t=m[v-1],n="data:image/jpg;base64,"+e[0].data;t.element.style.backgroundColor="transparent",t.element.style.backgroundImage='url("'+n+'")'}catch(o){console.log(o)}}))}(n)}),250),x.enablePan=!0,x.enableZoom=!0,x.update();for(var o=0;o<e-1;o++){for(var r=m[o];r.element.firstChild;)r.element.removeChild(r.element.firstChild);r.element.style.transition="all 1s cubic-bezier(0.215, 0.610, 0.355, 1)",r.element.style.width="72px",r.element.style.height=72/t+"px",r.position.x=100*o-1e3,r.position.y=0,r.position.z=0}for(var i=e;i<m.length;i++){for(var s=m[i];s.element.firstChild;)s.element.removeChild(s.element.firstChild);s.element.style.transition="all 1s cubic-bezier(0.215, 0.610, 0.355, 1)",s.element.style.width="72px",s.element.style.height=72/t+"px",s.position.x=100*i+1e3,s.position.y=0,s.position.z=0}var a=m[e-1];a&&(a.element.style.transition="all 1s cubic-bezier(0.215, 0.610, 0.355, 1)",a.element.style.width="1440px",a.element.style.height=1440/t+"px",a.position.z=1e3,a.position.y=10,a.position.x=100*(e-1))}else{T&&clearTimeout(T),T=setTimeout((function(){M(n)}),250),x.enablePan=!1,x.enableZoom=!1,x.update();for(var u=0;u<e-1;u++){var l=m[u];l.element.style.transition="all 1s cubic-bezier(0.215, 0.610, 0.355, 1)",l.element.style.width="72px",l.element.style.height=72/t+"px",l.position.x=100*u,l.position.y=0,l.position.z=0}for(var c=e;c<m.length;c++){var h=m[c];h.element.style.transition="all 1s cubic-bezier(0.215, 0.610, 0.355, 1)",h.element.style.width="72px",h.element.style.height=72/t+"px",h.position.x=100*c,h.position.y=0,h.position.z=0}var f=m[e-1];f.element.style.transition="all 1s cubic-bezier(0.215, 0.610, 0.355, 1)",f.element.style.width="72px",f.element.style.height=72/t+"px",f.position.x=100*(e-1),f.position.z=1e3,f.position.y=10}}function U(e){var t=m[e-1];if(t.element)for(;t.element.firstChild;)t.element.removeChild(t.element.firstChild);t.element.classList.remove("dark")}function F(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e,t){};U(t);var r=new Image;r.src=b[t-1].style.backgroundImage.slice(5,-2);var i=r.width/r.height,a=i>1?100:100*i,u=i>1?100/i:100,l=document.createElementNS("http://www.w3.org/2000/svg","svg");function c(e){return Array.isArray(e.label)?e.label.length>0?"O"===e.label[0]?"transparent":E(e.label[0]):void 0:e.type?E(e.type):e.label?E(e.label):"transparent"}if(l.setAttribute("width","".concat(a,"%")),l.setAttribute("height","".concat(u,"%")),l.setAttribute("viewBox","0 0 ".concat(a," ").concat(u)),l.setAttribute("preserveAspectRatio","none"),null===C)e.forEach((function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","rect"),r=100*e.bbox.y/i;i<1&&(r=100*e.bbox.y);var s=100*e.bbox.height/i;i<1&&(s=100*e.bbox.height);var a=100*e.bbox.x*i;i>1&&(a=100*e.bbox.x);var u=100*e.bbox.width*i;i>1&&(u=100*e.bbox.width),n.setAttribute("x",a),n.setAttribute("y",r),n.setAttribute("width",u),n.setAttribute("height",s),n.setAttribute("fill",c(e,n)),n.setAttribute("fill-opacity",.3),n.addEventListener("mousemove",(function(t){!function(e,t,n){var o=e.clientX,r=e.clientY;Array.isArray(t.label)?t.label.length>0&&("O"===t.label[0]?(n.setAttribute("stroke","black"),n.setAttribute("stroke-width",.05),n.setAttribute("fill","transparent")):(n.setAttribute("stroke","black"),n.setAttribute("stroke-width",.05),n.setAttribute("fill","transparent"),L(t.label[0],o,r-20,c(t),n.getBoundingClientRect().height))):t.type?(n.setAttribute("stroke","black"),n.setAttribute("stroke-width",.05),n.setAttribute("fill","transparent"),L(t.type,o,r-20,c(t),n.getBoundingClientRect().height)):t.label?(n.setAttribute("stroke","black"),n.setAttribute("stroke-width",.05),n.setAttribute("fill","transparent"),L(t.label,o,r-20,c(t),n.getBoundingClientRect().height)):(n.setAttribute("stroke","black"),n.setAttribute("stroke-width",.05),n.setAttribute("fill","transparent"),L(t.text,o,r-20,E(t.text),n.getBoundingClientRect().height))}(t,e,n)})),n.addEventListener("mouseout",(function(){n.setAttribute("stroke","transparent"),n.setAttribute("fill",c(e)),S()})),n.addEventListener("mousedown",(function(n){!function(e,t,n){o(t,n)}(0,e,t)})),l.appendChild(n)}));else{S();var d=document.createElementNS("http://www.w3.org/2000/svg","rect"),h=100*C.bbox.y/i;i<1&&(h=100*C.bbox.y);var f=100*C.bbox.height/i;i<1&&(f=100*C.bbox.height);var g=100*C.bbox.x*i;i>1&&(g=100*C.bbox.x);var y=100*C.bbox.width*i;i>1&&(y=100*C.bbox.width),d.setAttribute("x",g),d.setAttribute("y",h),d.setAttribute("width",y),d.setAttribute("height",f),d.setAttribute("fill",c(C,d)),d.setAttribute("fill-opacity",.3),p()(d).resizable({edges:{left:!1,right:!0,bottom:!0,top:!1},listeners:{move:function(e){var n=e.target.width.animVal.value,r=e.target.height.animVal.value,a=m[t-1].element.getBoundingClientRect().width;a/=2;var l=m[t-1].element.querySelector("svg"),c=n/100*a,d=r/u*l.getBoundingClientRect().height,h=c+e.delta.x,f=d+e.delta.y;h=h/a*100,f=f/l.getBoundingClientRect().height*u,e.target.setAttribute("width","".concat(h)),e.target.setAttribute("height","".concat(f));var p=parseFloat(e.target.getAttribute("x")),b=parseFloat(e.target.getAttribute("y")),g={x:p/(i<1?100*i:100),y:b/(i>1?100/i:100),width:h/(i<1?100/i:100),height:f/(i>1?100/i:100)},y=(0,s.A)({},C);y.bbox=g,o(y)}}}).draggable({listeners:{move:function(e){var n=parseFloat(e.target.getAttribute("x")),r=parseFloat(e.target.getAttribute("y")),l=parseFloat(e.target.getAttribute("width")),c=parseFloat(e.target.getAttribute("height"));l/=a,c/=u;var d=m[t-1].element.getBoundingClientRect().width,h=r/100*d;n=(n=n/100*d+e.delta.x)/d*100,r=(r=h+e.delta.y)/d*100,e.target.setAttribute("x",n),e.target.setAttribute("y",r);var f={x:n/(i<1?100*i:100),y:r/(i>1?100/i:100),width:l,height:c},p=(0,s.A)({},C);p.bbox=f,o(p)}}}),l.appendChild(d)}m[t-1].element.appendChild(l)}function q(){var e=A.getBoundingClientRect(),t=window.innerWidth/window.innerHeight;A.style.height=e.width/t+"px",o.left=-w*t/2,o.right=w*t/2,o.top=w/2,o.bottom=-w/2,o.updateProjectionMatrix(),i.setSize(e.width,e.width/t)}function I(){i&&(requestAnimationFrame(I),o.rotation.set(0,0,0),.5===o.zoom&&o.position.set(100*(v-1),0,200),i.render(r,o))}function Z(){r&&i&&r.clear(),window.removeEventListener("resize",q),m=[],g=[],b=[],i=null,r=null,E=h.UMr(h.t55)}},9920:function(e,t,n){n.d(t,{FZ:function(){return h},Hc:function(){return i},RS:function(){return a},Rm:function(){return f},S7:function(){return m},U3:function(){return y},ao:function(){return p},bn:function(){return g},de:function(){return c},f2:function(){return d},v:function(){return b},vv:function(){return u},wp:function(){return l},xU:function(){return s}});var o=n(88120),r=n(91280);function i(e){var t="/records/"+e,n={method:"GET",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default"};return fetch((0,o.H6)()+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function s(e){var t="/records/"+e+"/stream",n={method:"GET",headers:new Headers({Authorization:(0,r.g)()}),mode:"cors",cache:"default"};return fetch((0,o.H6)()+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.blob()}))}function a(e,t){var n="/records/"+e+"/transcription",i={method:"POST",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify({slug:t})};return fetch((0,o.H6)()+n,i).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function u(e,t){var n="/records/"+e+"/metadata",i={method:"POST",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify({slug:t})};return fetch((0,o.H6)()+n,i).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e){var t="/records/"+e+"/document",n={method:"GET",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default"};return fetch((0,o.H6)()+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(e){if((0,r.g)()){var t={method:"POST",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(e)};return fetch((0,o.H6)()+"/records/galleryinfo",t).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}t={method:"POST",headers:new Headers({"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(e)};return fetch((0,o.H6)()+"/records/public/galleryinfo",t).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function d(e,t,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if((0,r.g)()){var s="/records/"+e+"/pages",a={method:"POST",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify({pages:t,size:n,gallery:!i})};return fetch((0,o.H6)()+s,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}var u="/records/public/"+e+"/pages";a={method:"POST",headers:new Headers({"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify({pages:t,size:n,gallery:!i})};return fetch((0,o.H6)()+u,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function h(e,t,n,i){var s="/records/"+e+"/blocks",a={method:"POST",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify({page:t,block:i,slug:n})};return fetch((0,o.H6)()+s,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function f(e){var t={method:"POST",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(e)};return fetch((0,o.H6)()+"/records/setBlock",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}function p(e){var t={method:"PUT",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(e)};return fetch((0,o.H6)()+"/records/setBlock",t).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function m(e){var t={method:"DELETE",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(e)};return fetch((0,o.H6)()+"/records/setBlock",t).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function b(e,t){var n="/records/"+e+"/edit-transcription",i={method:"PUT",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,o.H6)()+n,i).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function g(e,t){var n="/records/"+e+"/edit-transcription",i={method:"DELETE",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch((0,o.H6)()+n,i).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function y(e,t){var n=(0,r.g)();return new Promise(n?function(n,i){var s=new XMLHttpRequest;s.open("POST",o.FM+"/records/download",!0),s.responseType="blob",s.setRequestHeader("Authorization",(0,r.g)()),s.setRequestHeader("Content-Type","application/json"),s.addEventListener("progress",(function(e){if(e.lengthComputable&&t){var n=e.loaded/e.total*100;t(n)}})),s.addEventListener("load",(function(){if(200===s.status){var e,t=s.response,o=(null===(e=s.getResponseHeader("content-disposition"))||void 0===e?void 0:e.split("filename=")[1])||"download",r=window.URL.createObjectURL(t),a=document.createElement("a");a.href=r,a.download=o,document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(r),n()}),100)}else i(new Error("Download failed with status ".concat(s.status)))})),s.addEventListener("error",(function(){i(new Error("Download failed"))})),s.timeout=6e4,s.addEventListener("timeout",(function(){i(new Error("Download timed out"))})),s.send(JSON.stringify(e))}:function(n,r){var i=new XMLHttpRequest;i.open("POST",o.FM+"/records/public/download",!0),i.responseType="blob",i.setRequestHeader("Content-Type","application/json"),i.addEventListener("progress",(function(e){if(e.lengthComputable&&t){var n=e.loaded/e.total*100;t(n)}})),i.addEventListener("load",(function(){if(200===i.status){var e,t=i.response,o=(null===(e=i.getResponseHeader("content-disposition"))||void 0===e?void 0:e.split("filename=")[1])||"download",s=window.URL.createObjectURL(t),a=document.createElement("a");a.href=s,a.download=o,document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(s),n()}),100)}else r(new Error("Download failed with status ".concat(i.status)))})),i.addEventListener("error",(function(){r(new Error("Download failed"))})),i.timeout=6e4,i.addEventListener("timeout",(function(){r(new Error("Download timed out"))})),i.send(JSON.stringify(e))})}},48210:function(e,t,n){n.d(t,{_e:function(){return s},rQ:function(){return u},u5:function(){return a},vt:function(){return i}});var o=n(88120),r=n(91280);function i(e){var t={method:"POST",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(e)};return fetch((0,o.H6)()+"/snaps",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}function s(e){var t={method:"POST",headers:new Headers({Authorization:(0,r.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:JSON.stringify(e)};return fetch((0,o.H6)()+"/users/snaps",t).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function a(e){var t="/snaps/"+e,n={method:"DELETE",headers:new Headers({Authorization:(0,r.g)()}),mode:"cors",cache:"default"};return fetch((0,o.H6)()+t,n).then((function(e){return 204!==e.status?Promise.reject(e):e}))}function u(e){var t="/snaps/"+e,n={method:"GET",headers:new Headers({Authorization:(0,r.g)()}),mode:"cors",cache:"default"};return fetch((0,o.H6)()+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.blob()}))}}}]);
//# sourceMappingURL=3040.27dd098c.chunk.js.map