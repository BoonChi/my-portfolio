(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&e.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var d in r)a.call(r,d)&&r[d]&&e.push(d);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},6057:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8146)}])},4233:function(e,t,r){"use strict";var a=r(5893),n=r(3680),o=r(5349),s=r.n(o);t.Z=function(e){var t=e.buttonName,r=e.buttonHandler,o=e.buttonVariant,d=e.buttonAnimation;return(0,a.jsx)("div",{children:(0,a.jsx)(n.Z,{variant:o,onClick:r,size:"lg",className:"".concat(s()["custom-button"]," ").concat(d?s()["custom-button-animation"]:null),children:t})})}},8146:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var a=r(5893),n=r(7294),o=r(4184),s=r.n(o),d=r(6792);const i=n.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:n,...o},i)=>{const c=(0,d.vE)(e,"container"),l="string"===typeof t?`-${t}`:"-fluid";return(0,a.jsx)(r,{ref:i,...o,className:s()(n,t?`${c}${l}`:c)})}));i.displayName="Container",i.defaultProps={fluid:!1};var c=i,l=r(1664),u=/-(.)/g;const x=e=>{return e[0].toUpperCase()+(t=e,t.replace(u,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,{displayName:t=x(e),Component:r,defaultProps:o}={}){const i=n.forwardRef((({className:t,bsPrefix:n,as:o=r||"div",...i},c)=>{const l=(0,d.vE)(n,e);return(0,a.jsx)(o,{ref:c,className:s()(t,l),...i})}));return i.defaultProps=o,i.displayName=t,i}var _=e=>n.forwardRef(((t,r)=>(0,a.jsx)("div",{...t,ref:r,className:s()(t.className,e)})));const p=n.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...o},i)=>{const c=(0,d.vE)(e,"card-img");return(0,a.jsx)(n,{ref:i,className:s()(r?`${c}-${r}`:c,t),...o})}));p.displayName="CardImg";var m=p;const b=n.createContext(null);b.displayName="CardHeaderContext";var v=b;const g=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...o},i)=>{const c=(0,d.vE)(e,"card-header"),l=(0,n.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,a.jsx)(v.Provider,{value:l,children:(0,a.jsx)(r,{ref:i,...o,className:s()(t,c)})})}));g.displayName="CardHeader";var P=g;const h=_("h5"),j=_("h6"),N=f("card-body"),y=f("card-title",{Component:h}),C=f("card-subtitle",{Component:j}),k=f("card-link",{Component:"a"}),w=f("card-text",{Component:"p"}),S=f("card-footer"),L=f("card-img-overlay"),E=n.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:o,body:i,children:c,as:l="div",...u},x)=>{const f=(0,d.vE)(e,"card");return(0,a.jsx)(l,{ref:x,...u,className:s()(t,f,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:i?(0,a.jsx)(N,{children:c}):c})}));E.displayName="Card",E.defaultProps={body:!1};var H=Object.assign(E,{Img:m,Title:y,Subtitle:C,Body:N,Link:k,Text:w,Header:P,Footer:S,ImgOverlay:L}),O=r(4233),$=r(5357),R=r.n($),B=function(e){var t=e.projects;return(0,a.jsx)("div",{children:t.map((function(e,t){return(0,a.jsxs)(H,{bg:"light",className:R()["card-body"],children:[(0,a.jsxs)(H.Header,{children:["Featured ",t+1]}),(0,a.jsxs)(H.Body,{children:[(0,a.jsx)(H.Title,{className:R().shaking,children:e.title}),(0,a.jsx)(H.Text,{children:e.description}),(0,a.jsx)(l.default,{href:e.url,passHref:!0,children:(0,a.jsx)("a",{children:(0,a.jsx)(O.Z,{buttonVariant:e.buttonColor,buttonName:"Lets try"})})})]})]},t)}))})},T=function(e){var t=e.description;return(0,a.jsx)("div",{children:(0,a.jsx)("h4",{children:t})})},A=r(1163),I=r(3914),D=r.n(I),Z=["Boon Chi","React NODEJS Developer"],U=["Hi \ud83d\udc4b","Welcome to my portfolio","\ud83d\udc1b\ud83c\udfa8\ud83c\udf89\ud83d\udcdd"],V=function(e){var t=e.handleShowProject,r=(0,A.useRouter)().basePath,n="/my-photo.png",o="/"===(null===r||void 0===r?void 0:r.charAt(0))?r+n:n;return(0,a.jsxs)("div",{className:D().main,children:[(0,a.jsx)("img",{src:o,className:D()["my-photo"],alt:"my photo"}),Z.map((function(e,t){return(0,a.jsx)("div",{className:D()["text-decorated-".concat(t+1)],children:e},t)})),(0,a.jsx)("br",{}),U.map((function(e,t){return(0,a.jsx)(T,{description:e},t)})),(0,a.jsx)("br",{}),(0,a.jsx)(O.Z,{buttonVariant:"warning",buttonHandler:function(){return t()},buttonName:"Click here",buttonAnimation:!0,children:(0,a.jsx)("span",{className:D()["home-button"]})})]})},F=[{url:"/todo",title:"To do",description:"Make your todo lists now \ud83d\udcdd",buttonColor:"info"},{url:"/pomodoro",title:"Pomodoro",description:"Lets use our Pomodoro tracker \u23f0",buttonColor:"danger"}],z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return(0,a.jsx)(c,{fluid:"sm",children:t?(0,a.jsx)(B,{projects:F}):(0,a.jsx)(V,{handleShowProject:function(){return r(!0)}})})}},5349:function(e){e.exports={enlarge:"CustomButton_enlarge__UECck"}},3914:function(e){e.exports={main:"LandingPage_main__UxJ0x","inline-control-button":"LandingPage_inline-control-button__F11lq","text-decorated-1":"LandingPage_text-decorated-1__d181l","text-decorated-2":"LandingPage_text-decorated-2__DrjSk","text-decorated-3":"LandingPage_text-decorated-3__8ylSY","text-decorated-4":"LandingPage_text-decorated-4__Uigxh","text-decorated-5":"LandingPage_text-decorated-5__SLiAS","text-decorated-6":"LandingPage_text-decorated-6__pcSx1","text-decorated-7":"LandingPage_text-decorated-7__KQy_O","text-decorated-8":"LandingPage_text-decorated-8__13H_B","text-decorated-9":"LandingPage_text-decorated-9__p4F2T","text-decorated-10":"LandingPage_text-decorated-10__bHrA8","my-photo":"LandingPage_my-photo__GHvuS"}},5357:function(e){e.exports={main:"PersonalProjects_main__nJbSD","inline-control-button":"PersonalProjects_inline-control-button___C49S","text-decorated-1":"PersonalProjects_text-decorated-1__lhzLN","text-decorated-2":"PersonalProjects_text-decorated-2__oaT1e","text-decorated-3":"PersonalProjects_text-decorated-3__IuR8o","text-decorated-4":"PersonalProjects_text-decorated-4__ZaBN9","text-decorated-5":"PersonalProjects_text-decorated-5__HrPE0","text-decorated-6":"PersonalProjects_text-decorated-6__aC3nH","text-decorated-7":"PersonalProjects_text-decorated-7__h0Yeg","text-decorated-8":"PersonalProjects_text-decorated-8__IPPp3","text-decorated-9":"PersonalProjects_text-decorated-9__pS8AK","text-decorated-10":"PersonalProjects_text-decorated-10__n8uo6",shaking:"PersonalProjects_shaking__SSHIV","text-shake":"PersonalProjects_text-shake__OVSoL","card-body":"PersonalProjects_card-body__N2hxd"}},1163:function(e,t,r){e.exports=r(387)},3680:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(4184),n=r.n(a),o=r(7294),s=r(5893);const d=["as","disabled"];function i({tagName:e,disabled:t,href:r,target:a,rel:n,onClick:o,tabIndex:s=0,type:d}){e||(e=null!=r||null!=a||null!=n?"a":"button");const i={tagName:e};if("button"===e)return[{type:d||"button",disabled:t},i];const c=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&a.preventDefault(),t?a.stopPropagation():null==o||o(a)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:s,href:"a"===e&&t?void 0:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},i]}const c=o.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,d);const[o,{tagName:c}]=i(Object.assign({tagName:r,disabled:a},n));return(0,s.jsx)(c,Object.assign({},n,o,{ref:t}))}));c.displayName="Button";var l=r(6792);const u=o.forwardRef((({as:e,bsPrefix:t,variant:r,size:a,active:o,className:d,...c},u)=>{const x=(0,l.vE)(t,"btn"),[f,{tagName:_}]=i({tagName:e,...c}),p=_;return(0,s.jsx)(p,{...c,...f,ref:u,className:n()(d,x,o&&"active",r&&`${x}-${r}`,a&&`${x}-${a}`,c.href&&c.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1};var x=u},6792:function(e,t,r){"use strict";r.d(t,{vE:function(){return d}});var a=r(7294);r(5893);const n=a.createContext({prefixes:{}}),{Consumer:o,Provider:s}=n;function d(e,t){const{prefixes:r}=(0,a.useContext)(n);return e||r[t]||t}}},function(e){e.O(0,[774,888,179],(function(){return t=6057,e(e.s=t);var t}));var t=e.O();_N_E=t}]);