(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5295:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[H]}function u(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===q}(e)||Array.isArray(e)||!!e[B]||!!e.constructor[B]||p(e)||d(e))}function i(e,t,r){void 0===r&&(r=!1),0===c(e)?(r?Object.keys:J)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function c(e){var t=e[H];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:p(e)?2:d(e)?3:0}function f(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function a(e,t){return 2===c(e)?e.get(t):e[t]}function l(e,t,r){var n=c(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function s(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){return K&&e instanceof Map}function d(e){return X&&e instanceof Set}function y(e){return e.o||e.t}function v(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Z(e);delete t[H];for(var r=J(t),n=0;n<r.length;n++){var o=r[n],u=t[o];!1===u.writable&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(t[o]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function b(e,t){return void 0===t&&(t=!1),m(e)||o(e)||!u(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=h),Object.freeze(e),t&&i(e,(function(e,t){return b(t,!0)}),!0)),e}function h(){n(2)}function m(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function g(e){var t=G[e];return t||n(18,e),t}function w(e,t){G[e]||(G[e]=t)}function O(){return F}function P(e,t){t&&(g("Patches"),e.u=[],e.s=[],e.v=t)}function S(e){j(e),e.p.forEach(_),e.p=null}function j(e){e===F&&(F=e.l)}function E(e){return F={p:[],l:F,h:e,m:!0,_:0}}function _(e){var t=e[H];0===t.i||1===t.i?t.j():t.O=!0}function x(e,t){t._=t.p.length;var r=t.p[0],o=void 0!==e&&e!==r;return t.h.g||g("ES5").S(t,e,o),o?(r[H].P&&(S(t),n(4)),u(e)&&(e=A(t,e),t.l||I(t,e)),t.u&&g("Patches").M(r[H].t,e,t.u,t.s)):e=A(t,r,[]),S(t),t.u&&t.v(t.u,t.s),e!==V?e:void 0}function A(e,t,r){if(m(t))return t;var n=t[H];if(!n)return i(t,(function(o,u){return C(e,n,t,o,u,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return I(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=v(n.k):n.o;i(3===n.i?new Set(o):o,(function(t,u){return C(e,n,o,t,u,r)})),I(e,o,!1),r&&e.u&&g("Patches").R(n,r,e.u,e.s)}return n.o}function C(e,t,r,n,i,c){if(o(i)){var a=A(e,i,c&&t&&3!==t.i&&!f(t.D,n)?c.concat(n):void 0);if(l(r,n,a),!o(a))return;e.m=!1}if(u(i)&&!m(i)){if(!e.h.F&&e._<1)return;A(e,i),t&&t.A.l||I(e,i)}}function I(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&b(t,r)}function N(e,t){var r=e[H];return(r?y(r):e)[t]}function k(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function M(e){e.P||(e.P=!0,e.l&&M(e.l))}function D(e){e.o||(e.o=v(e.t))}function T(e,t,r){var n=p(t)?g("MapSet").N(t,r):d(t)?g("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:O(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,u=Q;r&&(o=[n],u=Y);var i=Proxy.revocable(o,u),c=i.revoke,f=i.proxy;return n.k=f,n.j=c,f}(t,r):g("ES5").J(t,r);return(r?r.A:O()).p.push(n),n}function R(e){return o(e)||n(22,e),function e(t){if(!u(t))return t;var r,n=t[H],o=c(t);if(n){if(!n.P&&(n.i<4||!g("ES5").K(n)))return n.t;n.I=!0,r=$(t,o),n.I=!1}else r=$(t,o);return i(r,(function(t,o){n&&a(n.t,t)===o||l(r,t,e(o))})),3===o?new Set(r):r}(e)}function $(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return v(e)}function L(){function e(e,t){var r=u[e];return r?r.enumerable=t:u[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[H];return Q.get(t,e)},set:function(t){var r=this[H];Q.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][H];if(!o.P)switch(o.i){case 5:n(o)&&M(o);break;case 4:r(o)&&M(o)}}}function r(e){for(var t=e.t,r=e.k,n=J(r),o=n.length-1;o>=0;o--){var u=n[o];if(u!==H){var i=t[u];if(void 0===i&&!f(t,u))return!0;var c=r[u],a=c&&c[H];if(a?a.t!==i:!s(c,i))return!0}}var l=!!t[H];return n.length!==J(t).length+(l?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var u={};w("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var u=Z(r);delete u[H];for(var i=J(u),c=0;c<i.length;c++){var f=i[c];u[f]=e(f,t||!!u[f].enumerable)}return Object.create(Object.getPrototypeOf(r),u)}(n,t),u={i:n?5:4,A:r?r.A:O(),P:!1,I:!1,D:{},l:r,t:t,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,H,{value:u,writable:!0}),o},S:function(e,r,u){u?o(r)&&r[H].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[H];if(r){var o=r.t,u=r.k,c=r.D,a=r.i;if(4===a)i(u,(function(t){t!==H&&(void 0!==o[t]||f(o,t)?c[t]||e(u[t]):(c[t]=!0,M(r)))})),i(o,(function(e){void 0!==u[e]||f(u,e)||(c[e]=!1,M(r))}));else if(5===a){if(n(r)&&(M(r),c.length=!0),u.length<o.length)for(var l=u.length;l<o.length;l++)c[l]=!1;else for(var s=o.length;s<u.length;s++)c[s]=!0;for(var p=Math.min(u.length,o.length),d=0;d<p;d++)u.hasOwnProperty(d)||(c[d]=!0),void 0===c[d]&&e(u[d])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}r.d(t,{xC:function(){return Ie},oM:function(){return Me},x0:function(){return De}});var U,F,z="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),K="undefined"!=typeof Map,X="undefined"!=typeof Set,W="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,V=z?Symbol.for("immer-nothing"):((U={})["immer-nothing"]=!0,U),B=z?Symbol.for("immer-draftable"):"__$immer_draftable",H=z?Symbol.for("immer-state"):"__$immer_state",q=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),J="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Z=Object.getOwnPropertyDescriptors||function(e){var t={};return J(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},G={},Q={get:function(e,t){if(t===H)return e;var r=y(e);if(!f(r,t))return function(e,t,r){var n,o=k(t,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.I||!u(n)?n:n===N(e.t,t)?(D(e),e.o[t]=T(e.A.h,n,e)):n},has:function(e,t){return t in y(e)},ownKeys:function(e){return Reflect.ownKeys(y(e))},set:function(e,t,r){var n=k(y(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=N(y(e),t),u=null==o?void 0:o[H];if(u&&u.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(s(r,o)&&(void 0!==r||f(e.t,t)))return!0;D(e),M(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==N(e.t,t)||t in e.t?(e.D[t]=!1,D(e),M(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=y(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},Y={};i(Q,(function(e,t){Y[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Y.deleteProperty=function(e,t){return Y.set.call(this,e,t,void 0)},Y.set=function(e,t,r){return Q.set.call(this,e[0],t,r,e[0])};var ee=new(function(){function e(e){var t=this;this.g=W,this.F=!0,this.produce=function(e,r,o){if("function"==typeof e&&"function"!=typeof r){var i=r;r=e;var c=t;return function(e){var t=this;void 0===e&&(e=i);for(var n=arguments.length,o=Array(n>1?n-1:0),u=1;u<n;u++)o[u-1]=arguments[u];return c.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(o))}))}}var f;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),u(e)){var a=E(t),l=T(t,e,void 0),s=!0;try{f=r(l),s=!1}finally{s?S(a):j(a)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(e){return P(a,o),x(e,a)}),(function(e){throw S(a),e})):(P(a,o),x(f,a))}if(!e||"object"!=typeof e){if(void 0===(f=r(e))&&(f=e),f===V&&(f=void 0),t.F&&b(f,!0),o){var p=[],d=[];g("Patches").M(e,f,p,d),o(p,d)}return f}n(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),u=1;u<n;u++)o[u-1]=arguments[u];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))};var n,o,u=t.produce(e,r,(function(e,t){n=e,o=t}));return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(e){return[e,n,o]})):[u,n,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){u(e)||n(8),o(e)&&(e=R(e));var t=E(this),r=T(this,e,void 0);return r[H].C=!0,j(t),r},t.finishDraft=function(e,t){var r=(e&&e[H]).A;return P(r,t),x(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!W&&n(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var u=g("Patches").$;return o(e)?u(e,t):this.produce(e,(function(e){return u(e,t)}))},e}()),te=ee.produce,re=(ee.produceWithPatches.bind(ee),ee.setAutoFreeze.bind(ee),ee.setUseProxies.bind(ee),ee.applyPatches.bind(ee),ee.createDraft.bind(ee),ee.finishDraft.bind(ee),te);function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ce="function"===typeof Symbol&&Symbol.observable||"@@observable",fe=function(){return Math.random().toString(36).substring(7).split("").join(".")},ae={INIT:"@@redux/INIT"+fe(),REPLACE:"@@redux/REPLACE"+fe(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+fe()}};function le(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function se(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(ie(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(ie(1));return r(se)(e,t)}if("function"!==typeof e)throw new Error(ie(2));var o=e,u=t,i=[],c=i,f=!1;function a(){c===i&&(c=i.slice())}function l(){if(f)throw new Error(ie(3));return u}function s(e){if("function"!==typeof e)throw new Error(ie(4));if(f)throw new Error(ie(5));var t=!0;return a(),c.push(e),function(){if(t){if(f)throw new Error(ie(6));t=!1,a();var r=c.indexOf(e);c.splice(r,1),i=null}}}function p(e){if(!le(e))throw new Error(ie(7));if("undefined"===typeof e.type)throw new Error(ie(8));if(f)throw new Error(ie(9));try{f=!0,u=o(u,e)}finally{f=!1}for(var t=i=c,r=0;r<t.length;r++){(0,t[r])()}return e}function d(e){if("function"!==typeof e)throw new Error(ie(10));o=e,p({type:ae.REPLACE})}function y(){var e,t=s;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(ie(11));function r(){e.next&&e.next(l())}return r(),{unsubscribe:t(r)}}})[ce]=function(){return this},e}return p({type:ae.INIT}),(n={dispatch:p,subscribe:s,getState:l,replaceReducer:d})[ce]=y,n}function pe(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"===typeof e[o]&&(r[o]=e[o])}var u,i=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:ae.INIT}))throw new Error(ie(12));if("undefined"===typeof r(void 0,{type:ae.PROBE_UNKNOWN_ACTION()}))throw new Error(ie(13))}))}(r)}catch(c){u=c}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var n=!1,o={},c=0;c<i.length;c++){var f=i[c],a=r[f],l=e[f],s=a(l,t);if("undefined"===typeof s){t&&t.type;throw new Error(ie(14))}o[f]=s,n=n||s!==l}return(n=n||i.length!==Object.keys(e).length)?o:e}}function de(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function ye(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(ie(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=t.map((function(e){return e(o)}));return n=de.apply(void 0,u)(r.dispatch),ue(ue({},r),{},{dispatch:n})}}}function ve(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var be=ve();be.withExtraArgument=ve;var he=be,me=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),ge=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},we=Object.defineProperty,Oe=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),Pe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,je=function(e,t,r){return t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},Ee=function(e,t){for(var r in t||(t={}))Pe.call(t,r)&&je(e,r,t[r]);if(Oe)for(var n=0,o=Oe(t);n<o.length;n++){r=o[n];Se.call(t,r)&&je(e,r,t[r])}return e},_e="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?de:de.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function xe(e){if("object"!==typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}var Ae=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return me(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,ge([void 0],e[0].concat(this)))):new(t.bind.apply(t,ge([void 0],e.concat(this))))},t}(Array);function Ce(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,r=void 0===t||t,n=(e.immutableCheck,e.serializableCheck,new Ae);r&&(!function(e){return"boolean"===typeof e}(r)?n.push(he.withExtraArgument(r.extraArgument)):n.push(he));0;return n}(e)}}function Ie(e){var t,r=Ce(),n=e||{},o=n.reducer,u=void 0===o?void 0:o,i=n.middleware,c=void 0===i?r():i,f=n.devTools,a=void 0===f||f,l=n.preloadedState,s=void 0===l?void 0:l,p=n.enhancers,d=void 0===p?void 0:p;if("function"===typeof u)t=u;else{if(!xe(u))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=pe(u)}var y=c;"function"===typeof y&&(y=y(r));var v=ye.apply(void 0,y),b=de;a&&(b=_e(Ee({trace:!1},"object"===typeof a&&a)));var h=[v];return Array.isArray(d)?h=ge([v],d):"function"===typeof d&&(h=d(h)),se(t,s,b.apply(void 0,h))}function Ne(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Ee(Ee({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function ke(e){var t,r={},n=[],o={addCase:function(e,t){var n="string"===typeof e?e:e.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,o},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[r,n,t]}function Me(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r,n="function"==typeof e.initialState?e.initialState:re(e.initialState,(function(){})),i=e.reducers||{},c=Object.keys(i),f={},a={},l={};function s(){var t="function"===typeof e.extraReducers?ke(e.extraReducers):[e.extraReducers],r=t[0],i=void 0===r?{}:r,c=t[1],f=void 0===c?[]:c,l=t[2],s=void 0===l?void 0:l,p=Ee(Ee({},i),a);return function(e,t,r,n){void 0===r&&(r=[]);var i,c="function"===typeof t?ke(t):[t,r,n],f=c[0],a=c[1],l=c[2];if(function(e){return"function"===typeof e}(e))i=function(){return re(e(),(function(){}))};else{var s=re(e,(function(){}));i=function(){return s}}function p(e,t){void 0===e&&(e=i());var r=ge([f[t.type]],a.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[l]),r.reduce((function(e,r){if(r){var n;if(o(e))return"undefined"===typeof(n=r(e,t))?e:n;if(u(e))return re(e,(function(e){return r(e,t)}));if("undefined"===typeof(n=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e}),e)}return p.getInitialState=i,p}(n,p,f,s)}return c.forEach((function(e){var r,n,o=i[e],u=t+"/"+e;"reducer"in o?(r=o.reducer,n=o.prepare):r=o,f[e]=r,a[u]=r,l[e]=n?Ne(u,n):Ne(u)})),{name:t,reducer:function(e,t){return r||(r=s()),r(e,t)},actions:l,caseReducers:f,getInitialState:function(){return r||(r=s()),r.getInitialState()}}}var De=function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t};L()},8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function f(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var a=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var i=l(r);s&&(i=i.concat(s(r)));for(var c=f(t),v=f(r),b=0;b<i.length;++b){var h=i[b];if(!u[h]&&(!n||!n[h])&&(!v||!v[h])&&(!c||!c[h])){var m=p(r,h);try{a(t,h,m)}catch(g){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,a=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case s:case u:case c:case i:case d:return e;default:switch(e=e&&e.$$typeof){case a:case p:case b:case v:case f:return e;default:return t}}case o:return t}}}function P(e){return O(e)===s}t.AsyncMode=l,t.ConcurrentMode=s,t.ContextConsumer=a,t.ContextProvider=f,t.Element=n,t.ForwardRef=p,t.Fragment=u,t.Lazy=b,t.Memo=v,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return P(e)||O(e)===l},t.isConcurrentMode=P,t.isContextConsumer=function(e){return O(e)===a},t.isContextProvider=function(e){return O(e)===f},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===u},t.isLazy=function(e){return O(e)===b},t.isMemo=function(e){return O(e)===v},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===c},t.isStrictMode=function(e){return O(e)===i},t.isSuspense=function(e){return O(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===s||e===c||e===i||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===v||e.$$typeof===f||e.$$typeof===a||e.$$typeof===p||e.$$typeof===m||e.$$typeof===g||e.$$typeof===w||e.$$typeof===h)},t.typeOf=O},1296:function(e,t,r){"use strict";e.exports=r(6103)},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4605)}])},7747:function(e,t,r){"use strict";r.d(t,{rk:function(){return c},CU:function(){return l},jV:function(){return s},O9:function(){return p}});var n=r(5295),o=r(5117),u=(0,n.oM)({name:"todo",initialState:[],reducers:{addTodo:{reducer:function(e,t){e.push(t.payload)},prepare:function(e){return{payload:{id:(0,n.x0)(),desc:e,completed:!1}}}},removeTodo:function(e,t){e.splice(e.findIndex((function(e){return e.id===t.payload})),1)},completedTodo:function(e,t){var r=e.find((function(e){return e.id===t.payload}));r&&(r.completed=!r.completed)},updateTodo:function(e,t){var r=e.find((function(e){return e.id===t.payload.id}));r&&(r.desc=t.payload.desc)}}}),i=u.actions,c=i.addTodo,f=i.removeTodo,a=i.completedTodo,l=i.updateTodo,s=function(e){return e.todo},p=function(e,t){return function(r){switch(e){case o.nX.delete:return r(f(t));case o.nX.completed:return r(a(t));default:return alert("Invalid Action")}}};t.ZP=u.reducer},5117:function(e,t,r){"use strict";var n;r.d(t,{nX:function(){return o},Ku:function(){return u}}),function(e){e.green="Green",e.red="Red",e.blue="Blue"}(n||(n={}));var o;Object.values(n);!function(e){e.edit="Edit",e.delete="Delete",e.completed="Completed"}(o||(o={}));var u=[{name:o.delete,color:"danger"},{name:o.completed,color:"secondary"}]},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(f){c=!0,o=f}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var u,i=(u=r(7294))&&u.__esModule?u:{default:u},c=r(6273),f=r(387),a=r(7190);var l={};function s(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=f.useRouter(),u=i.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],u=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):u||r}}),[n,e.href,e.as]),p=u.href,d=u.as,y=e.children,v=e.replace,b=e.shallow,h=e.scroll,m=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var g=(t=i.default.Children.only(y))&&"object"===typeof t&&t.ref,w=o(a.useIntersection({rootMargin:"200px"}),2),O=w[0],P=w[1],S=i.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);i.default.useEffect((function(){var e=P&&r&&c.isLocalURL(p),t="undefined"!==typeof m?m:n&&n.locale,o=l[p+"%"+d+(t?"%"+t:"")];e&&!o&&s(n,p,d,{locale:t})}),[d,p,P,m,r,n]);var j={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,i,f){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:u,locale:f,scroll:i}))}(e,n,p,d,v,b,h,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&s(n,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof m?m:n&&n.locale,_=n&&n.isLocaleDomain&&c.getDomainLocale(d,E,n&&n.locales,n&&n.domainLocales);j.href=_||c.addBasePath(c.addLocale(d,E,n&&n.defaultLocale))}return i.default.cloneElement(t,j)};t.default=p},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(f){c=!0,o=f}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,n=u.useRef(),a=o(u.useState(!1),2),l=a[0],s=a[1],p=u.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||l||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=f.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return f.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,u=n.observer,i=n.elements;return i.set(e,t),u.observe(e),function(){i.delete(e),u.unobserve(e),0===i.size&&(u.disconnect(),f.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[r,t,l]);return u.useEffect((function(){if(!c&&!l){var e=i.requestIdleCallback((function(){return s(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),[p,l]};var u=r(7294),i=r(9311),c="undefined"!==typeof IntersectionObserver;var f=new Map},4605:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5893),o=(r(8210),r(906),r(9008)),u=r(1043),i=r(5295),c=r(7747),f=(0,i.xC)({reducer:{todo:c.ZP}}),a=r(1664),l=function(e){e.navItems;return(0,n.jsx)("div",{children:(0,n.jsx)("nav",{className:"navbar navbar-light",children:(0,n.jsx)(a.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{className:"navbar-brand",children:"Portfolio"})})})})};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}var d=[{link:"/aboutMe",name:"About"},{link:"/todo",name:"Todo"},{link:"/pomodoro",name:"Pomodoro"}];var y=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(u.zt,{store:f,children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=0.86"})}),(0,n.jsx)(l,{navItems:d}),(0,n.jsx)(t,p({},r))]})}},8210:function(){},906:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},9921:function(e,t){"use strict";var r=60103,n=60106,o=60107,u=60108,i=60114,c=60109,f=60110,a=60112,l=60113,s=60120,p=60115,d=60116,y=60121,v=60122,b=60117,h=60129,m=60131;if("function"===typeof Symbol&&Symbol.for){var g=Symbol.for;r=g("react.element"),n=g("react.portal"),o=g("react.fragment"),u=g("react.strict_mode"),i=g("react.profiler"),c=g("react.provider"),f=g("react.context"),a=g("react.forward_ref"),l=g("react.suspense"),s=g("react.suspense_list"),p=g("react.memo"),d=g("react.lazy"),y=g("react.block"),v=g("react.server.block"),b=g("react.fundamental"),h=g("react.debug_trace_mode"),m=g("react.legacy_hidden")}function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case u:case l:case s:return e;default:switch(e=e&&e.$$typeof){case f:case a:case d:case p:case c:return e;default:return t}}case n:return t}}}},9864:function(e,t,r){"use strict";r(9921)},1043:function(e,t,r){"use strict";r.d(t,{zt:function(){return l},I0:function(){return v},v9:function(){return g}});var n=r(7294),o=n.createContext(null);var u=function(e){e()},i=function(){return u};var c={notify:function(){},get:function(){return[]}};function f(e,t){var r,n=c;function o(){f.onStateChange&&f.onStateChange()}function u(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){var e=i(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var f={addNestedSub:function(e){return u(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:u,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=c)},getListeners:function(){return n}};return f}var a="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;var l=function(e){var t=e.store,r=e.context,u=e.children,i=(0,n.useMemo)((function(){var e=f(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=(0,n.useMemo)((function(){return t.getState()}),[t]);a((function(){var e=i.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,c]);var l=r||o;return n.createElement(l.Provider,{value:i},u)};r(8679),r(9864);function s(){return(0,n.useContext)(o)}function p(e){void 0===e&&(e=o);var t=e===o?s:function(){return(0,n.useContext)(e)};return function(){return t().store}}var d=p();function y(e){void 0===e&&(e=o);var t=e===o?d:p(e);return function(){return t().dispatch}}var v=y(),b=function(e,t){return e===t};function h(e){void 0===e&&(e=o);var t=e===o?s:function(){return(0,n.useContext)(e)};return function(e,r){void 0===r&&(r=b);var o=t(),u=function(e,t,r,o){var u,i=(0,n.useReducer)((function(e){return e+1}),0)[1],c=(0,n.useMemo)((function(){return f(r,o)}),[r,o]),l=(0,n.useRef)(),s=(0,n.useRef)(),p=(0,n.useRef)(),d=(0,n.useRef)(),y=r.getState();try{if(e!==s.current||y!==p.current||l.current){var v=e(y);u=void 0!==d.current&&t(v,d.current)?d.current:v}else u=d.current}catch(b){throw l.current&&(b.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),b}return a((function(){s.current=e,p.current=y,d.current=u,l.current=void 0})),a((function(){function e(){try{var e=r.getState();if(e===p.current)return;var n=s.current(e);if(t(n,d.current))return;d.current=n,p.current=e}catch(b){l.current=b}i()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[r,c]),u}(e,r,o.store,o.subscription);return(0,n.useDebugValue)(u),u}}var m,g=h(),w=r(3935);m=w.unstable_batchedUpdates,u=m}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);