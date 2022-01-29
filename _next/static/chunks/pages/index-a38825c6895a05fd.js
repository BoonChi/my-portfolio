(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var d in r)n.call(r,d)&&r[d]&&e.push(d);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9825)}])},4233:function(e,t,r){"use strict";var n=r(5893),a=r(3680),o=r(5349),s=r.n(o);t.Z=function(e){var t=e.buttonName,r=e.buttonHandler,o=e.buttonVariant,d=e.buttonAnimation;return(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{variant:o,onClick:r,size:"lg",className:"".concat(s()["custom-button"]," ").concat(d?s()["custom-button-animation"]:null),children:t})})}},9825:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return V}});var n=r(5893),a=r(7294),o=r(4184),s=r.n(o),d=r(6792);const i=a.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:a,...o},i)=>{const c=(0,d.vE)(e,"container"),l="string"===typeof t?`-${t}`:"-fluid";return(0,n.jsx)(r,{ref:i,...o,className:s()(a,t?`${c}${l}`:c)})}));i.displayName="Container",i.defaultProps={fluid:!1};var c=i,l=r(1664),u=r(6611),f=r(9602);const x=a.forwardRef((({bsPrefix:e,className:t,variant:r,as:a="img",...o},i)=>{const c=(0,d.vE)(e,"card-img");return(0,n.jsx)(a,{ref:i,className:s()(r?`${c}-${r}`:c,t),...o})}));x.displayName="CardImg";var _=x;const p=a.createContext(null);p.displayName="CardHeaderContext";var m=p;const v=a.forwardRef((({bsPrefix:e,className:t,as:r="div",...o},i)=>{const c=(0,d.vE)(e,"card-header"),l=(0,a.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,n.jsx)(m.Provider,{value:l,children:(0,n.jsx)(r,{ref:i,...o,className:s()(t,c)})})}));v.displayName="CardHeader";var b=v;const g=(0,f.Z)("h5"),P=(0,f.Z)("h6"),h=(0,u.Z)("card-body"),j=(0,u.Z)("card-title",{Component:g}),N=(0,u.Z)("card-subtitle",{Component:P}),y=(0,u.Z)("card-link",{Component:"a"}),C=(0,u.Z)("card-text",{Component:"p"}),k=(0,u.Z)("card-footer"),S=(0,u.Z)("card-img-overlay"),w=a.forwardRef((({bsPrefix:e,className:t,bg:r,text:a,border:o,body:i,children:c,as:l="div",...u},f)=>{const x=(0,d.vE)(e,"card");return(0,n.jsx)(l,{ref:f,...u,className:s()(t,x,r&&`bg-${r}`,a&&`text-${a}`,o&&`border-${o}`),children:i?(0,n.jsx)(h,{children:c}):c})}));w.displayName="Card",w.defaultProps={body:!1};var L=Object.assign(w,{Img:_,Title:j,Subtitle:N,Body:h,Link:y,Text:C,Header:b,Footer:k,ImgOverlay:S}),Z=r(4233),E=r(5357),H=r.n(E),O=function(e){var t=e.projects;return(0,n.jsx)("div",{children:t.map((function(e,t){return(0,n.jsxs)(L,{bg:"light",className:H()["card-body"],children:[(0,n.jsxs)(L.Header,{children:["Featured ",t+1]}),(0,n.jsxs)(L.Body,{children:[(0,n.jsx)(L.Title,{className:H().shaking,children:e.title}),(0,n.jsx)(L.Text,{children:e.description}),(0,n.jsx)(l.default,{href:e.url,passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(Z.Z,{buttonVariant:e.buttonColor,buttonName:"Lets try"})})})]})]},t)}))})},$=function(e){var t=e.description;return(0,n.jsx)("div",{children:(0,n.jsx)("h4",{children:t})})},R=r(1163),B=r(3914),T=r.n(B),A=["Boon Chi","React NODEJS Developer"],I=["Hi \ud83d\udc4b","Welcome to my portfolio","\ud83d\udc1b\ud83c\udfa8\ud83c\udf89\ud83d\udcdd"],D=function(e){var t=e.handleShowProject,r=(0,R.useRouter)().basePath,a="/my-photo.png",o="/"===(null===r||void 0===r?void 0:r.charAt(0))?r+a:a;return(0,n.jsxs)("div",{className:T().main,children:[(0,n.jsx)("img",{src:o,className:T()["my-photo"],alt:"my photo"}),A.map((function(e,t){return(0,n.jsx)("div",{className:T()["text-decorated-".concat(t+1)],children:e},t)})),(0,n.jsx)("br",{}),I.map((function(e,t){return(0,n.jsx)($,{description:e},t)})),(0,n.jsx)("br",{}),(0,n.jsx)(Z.Z,{buttonVariant:"warning",buttonHandler:function(){return t()},buttonName:"Click here",buttonAnimation:!0,children:(0,n.jsx)("span",{className:T()["home-button"]})})]})},U=[{url:"/todo",title:"To do",description:"Make your todo lists now \ud83d\udcdd",buttonColor:"info"},{url:"/pomodoro",title:"Pomodoro",description:"Lets use our Pomodoro tracker \u23f0",buttonColor:"danger"}],V=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return(0,n.jsx)(c,{fluid:"sm",children:t?(0,n.jsx)(O,{projects:U}):(0,n.jsx)(D,{handleShowProject:function(){return r(!0)}})})}},5349:function(e){e.exports={enlarge:"CustomButton_enlarge__UECck"}},3914:function(e){e.exports={main:"LandingPage_main__UxJ0x","inline-control-button":"LandingPage_inline-control-button__F11lq","text-decorated-1":"LandingPage_text-decorated-1__d181l","text-decorated-2":"LandingPage_text-decorated-2__DrjSk","text-decorated-3":"LandingPage_text-decorated-3__8ylSY","text-decorated-4":"LandingPage_text-decorated-4__Uigxh","text-decorated-5":"LandingPage_text-decorated-5__SLiAS","text-decorated-6":"LandingPage_text-decorated-6__pcSx1","text-decorated-7":"LandingPage_text-decorated-7__KQy_O","text-decorated-8":"LandingPage_text-decorated-8__13H_B","text-decorated-9":"LandingPage_text-decorated-9__p4F2T","text-decorated-10":"LandingPage_text-decorated-10__bHrA8","my-photo":"LandingPage_my-photo__GHvuS"}},5357:function(e){e.exports={main:"PersonalProjects_main__nJbSD","inline-control-button":"PersonalProjects_inline-control-button___C49S","text-decorated-1":"PersonalProjects_text-decorated-1__lhzLN","text-decorated-2":"PersonalProjects_text-decorated-2__oaT1e","text-decorated-3":"PersonalProjects_text-decorated-3__IuR8o","text-decorated-4":"PersonalProjects_text-decorated-4__ZaBN9","text-decorated-5":"PersonalProjects_text-decorated-5__HrPE0","text-decorated-6":"PersonalProjects_text-decorated-6__aC3nH","text-decorated-7":"PersonalProjects_text-decorated-7__h0Yeg","text-decorated-8":"PersonalProjects_text-decorated-8__IPPp3","text-decorated-9":"PersonalProjects_text-decorated-9__pS8AK","text-decorated-10":"PersonalProjects_text-decorated-10__n8uo6",shaking:"PersonalProjects_shaking__SSHIV","text-shake":"PersonalProjects_text-shake__OVSoL","card-body":"PersonalProjects_card-body__N2hxd"}},1163:function(e,t,r){e.exports=r(387)},3680:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(4184),a=r.n(n),o=r(7294),s=r(5893);const d=["as","disabled"];function i({tagName:e,disabled:t,href:r,target:n,rel:a,onClick:o,tabIndex:s=0,type:d}){e||(e=null!=r||null!=n||null!=a?"a":"button");const i={tagName:e};if("button"===e)return[{type:d||"button",disabled:t},i];const c=n=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==o||o(n)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:s,href:"a"===e&&t?void 0:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},i]}const c=o.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,d);const[o,{tagName:c}]=i(Object.assign({tagName:r,disabled:n},a));return(0,s.jsx)(c,Object.assign({},a,o,{ref:t}))}));c.displayName="Button";var l=r(6792);const u=o.forwardRef((({as:e,bsPrefix:t,variant:r,size:n,active:o,className:d,...c},u)=>{const f=(0,l.vE)(t,"btn"),[x,{tagName:_}]=i({tagName:e,...c}),p=_;return(0,s.jsx)(p,{...c,...x,ref:u,className:a()(d,f,o&&"active",r&&`${f}-${r}`,n&&`${f}-${n}`,c.href&&c.disabled&&"disabled")})}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1};var f=u},6792:function(e,t,r){"use strict";r.d(t,{vE:function(){return d},SC:function(){return i}});var n=r(7294);r(5893);const a=n.createContext({prefixes:{}}),{Consumer:o,Provider:s}=a;function d(e,t){const{prefixes:r}=(0,n.useContext)(a);return e||r[t]||t}function i(){const{dir:e}=(0,n.useContext)(a);return"rtl"===e}},6611:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(4184),a=r.n(n),o=/-(.)/g;var s=r(7294),d=r(6792),i=r(5893);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function l(e,{displayName:t=c(e),Component:r,defaultProps:n}={}){const o=s.forwardRef((({className:t,bsPrefix:n,as:o=r||"div",...s},c)=>{const l=(0,d.vE)(n,e);return(0,i.jsx)(o,{ref:c,className:a()(t,l),...s})}));return o.defaultProps=n,o.displayName=t,o}},9602:function(e,t,r){"use strict";var n=r(7294),a=r(4184),o=r.n(a),s=r(5893);t.Z=e=>n.forwardRef(((t,r)=>(0,s.jsx)("div",{...t,ref:r,className:o()(t.className,e)})))}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);