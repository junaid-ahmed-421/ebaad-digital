"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[140],{8679:function(t,r,e){var a=e(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(t){return a.isMemo(t)?s:i[t.$$typeof]||o}i[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[a.Memo]=s;var f=Object.defineProperty,l=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;t.exports=function t(r,e,a){if("string"!=typeof e){if(y){var o=d(e);o&&o!==y&&t(r,o,a)}var s=l(e);m&&(s=s.concat(m(e)));for(var i=c(r),u=c(e),g=0;g<s.length;++g){var b=s[g];if(!n[b]&&!(a&&a[b])&&!(u&&u[b])&&!(i&&i[b])){var h=p(e,b);try{f(r,b,h)}catch(v){}}}}return r}},4415:function(t,r){/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),r.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var r=t.$$typeof;switch(r){case e:switch(t=t.type){case o:case s:case n:case m:case p:return t;default:switch(t=t&&t.$$typeof){case f:case c:case l:case y:case d:case i:return t;default:return r}}case a:return r}}}(t)===o}},4954:function(t,r,e){t.exports=e(4415)},9921:function(t,r){/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e="function"==typeof Symbol&&Symbol.for,a=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,u=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var r=t.$$typeof;switch(r){case a:switch(t=t.type){case l:case m:case n:case i:case s:case d:return t;default:switch(t=t&&t.$$typeof){case f:case p:case g:case u:case c:return t;default:return r}}case o:return r}}}function S(t){return w(t)===m}r.AsyncMode=l,r.ConcurrentMode=m,r.ContextConsumer=f,r.ContextProvider=c,r.Element=a,r.ForwardRef=p,r.Fragment=n,r.Lazy=g,r.Memo=u,r.Portal=o,r.Profiler=i,r.StrictMode=s,r.Suspense=d,r.isAsyncMode=function(t){return S(t)||w(t)===l},r.isConcurrentMode=S,r.isContextConsumer=function(t){return w(t)===f},r.isContextProvider=function(t){return w(t)===c},r.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===a},r.isForwardRef=function(t){return w(t)===p},r.isFragment=function(t){return w(t)===n},r.isLazy=function(t){return w(t)===g},r.isMemo=function(t){return w(t)===u},r.isPortal=function(t){return w(t)===o},r.isProfiler=function(t){return w(t)===i},r.isStrictMode=function(t){return w(t)===s},r.isSuspense=function(t){return w(t)===d},r.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===n||t===m||t===i||t===s||t===d||t===y||"object"==typeof t&&null!==t&&(t.$$typeof===g||t.$$typeof===u||t.$$typeof===c||t.$$typeof===f||t.$$typeof===p||t.$$typeof===h||t.$$typeof===v||t.$$typeof===x||t.$$typeof===b)},r.typeOf=w},9864:function(t,r,e){t.exports=e(9921)},7423:function(t,r,e){let a;e.d(r,{LG:function(){return L}});var o=e(7294);e(8417);var n=e(2443);e(8679);var s=e(444),i=e(2324),c=e(7278);function f(){for(var t=arguments.length,r=Array(t),e=0;e<t;e++)r[e]=arguments[e];return(0,i.O)(r)}var l=function(){var t=f.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},m=function t(r){for(var e=r.length,a=0,o="";a<e;a++){var n=r[a];if(null!=n){var s=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))s=t(n);else for(var i in s="",n)n[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=n}s&&(o&&(o+=" "),o+=s)}}return o},p=function(t){var r=t.cache,e=t.serializedArr;return(0,c.L)(function(){for(var t=0;t<e.length;t++)(0,s.My)(r,e[t],!1)}),null},d=(0,n.w)(function(t,r){var e=[],a=function(){for(var t=arguments.length,a=Array(t),o=0;o<t;o++)a[o]=arguments[o];var n=(0,i.O)(a,r.registered);return e.push(n),(0,s.hC)(r,n,!1),r.key+"-"+n.name},c={css:a,cx:function(){for(var t,e,o,n,i=arguments.length,c=Array(i),f=0;f<i;f++)c[f]=arguments[f];return t=r.registered,e=m(c),o=[],n=(0,s.fp)(t,o,e),o.length<2?e:n+a(o)},theme:(0,o.useContext)(n.T)},f=t.children(c);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(p,{cache:r,serializedArr:e}),f)});function y(){return(y=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t}).apply(this,arguments)}let u=new Map,g=new WeakMap,b=0;function h(t,r,e={},o=a){if(void 0===window.IntersectionObserver&&void 0!==o){let n=t.getBoundingClientRect();return r(o,{isIntersecting:o,target:t,intersectionRatio:"number"==typeof e.threshold?e.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:s,observer:i,elements:c}=function(t){let r=Object.keys(t).sort().filter(r=>void 0!==t[r]).map(r=>{var e;return`${r}_${"root"===r?(e=t.root)?(g.has(e)||(b+=1,g.set(e,b.toString())),g.get(e)):"0":t[r]}`}).toString(),e=u.get(r);if(!e){let a;let o=new Map,n=new IntersectionObserver(r=>{r.forEach(r=>{var e;let n=r.isIntersecting&&a.some(t=>r.intersectionRatio>=t);t.trackVisibility&&void 0===r.isVisible&&(r.isVisible=n),null==(e=o.get(r.target))||e.forEach(t=>{t(n,r)})})},t);a=n.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:n,elements:o},u.set(r,e)}return e}(e),f=c.get(t)||[];return c.has(t)||c.set(t,f),f.push(r),i.observe(t),function(){f.splice(f.indexOf(r),1),0===f.length&&(c.delete(t),i.unobserve(t)),0===c.size&&(i.disconnect(),u.delete(s))}}let v=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function x(t){return"function"!=typeof t.children}class w extends o.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()},this.handleChange=(t,r)=>{t&&this.props.triggerOnce&&this.unobserve(),x(this.props)||this.setState({inView:t,entry:r}),this.props.onChange&&this.props.onChange(t,r)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:o,fallbackInView:n}=this.props;this._unobserveCb=h(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:o},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!x(this.props)){let{inView:t,entry:r}=this.state;return this.props.children({inView:t,entry:r,ref:this.handleNode})}let e=this.props,{children:a,as:n}=e,s=function(t,r){if(null==t)return{};var e,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)e=n[a],r.indexOf(e)>=0||(o[e]=t[e]);return o}(e,v);return o.createElement(n||"div",y({ref:this.handleNode},s),a)}}function S({threshold:t,delay:r,trackVisibility:e,rootMargin:a,root:n,triggerOnce:s,skip:i,initialInView:c,fallbackInView:f,onChange:l}={}){var m;let[p,d]=o.useState(null),y=o.useRef(),[u,g]=o.useState({inView:!!c,entry:void 0});y.current=l,o.useEffect(()=>{let o;if(!i&&p)return o=h(p,(t,r)=>{g({inView:t,entry:r}),y.current&&y.current(t,r),r.isIntersecting&&s&&o&&(o(),o=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:e,delay:r},f),()=>{o&&o()}},[Array.isArray(t)?t.toString():t,p,n,a,s,i,e,f,r]);let b=null==(m=u.entry)?void 0:m.target;o.useEffect(()=>{p||!b||s||i||g({inView:!!c,entry:void 0})},[p,b,s,i,c]);let v=[d,u.inView,u.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var k=e(4954),$=e(5893),C=$.Fragment;function Y(t,r,e){return n.h.call(r,"css")?(0,$.jsx)(n.E,(0,n.c)(t,r),e):(0,$.jsx)(t,r,e)}l`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,l`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,l`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,l`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,l`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,l`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,l`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,l`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,l`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,l`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,l`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,l`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,l`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;var z=l`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;l`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;var O=f`
  opacity: 0;
`,X=f`
  display: inline-block;
  white-space: pre;
`,_=t=>{let{cascade:r=!1,damping:e=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:i=z,triggerOnce:c=!1,css:l,className:m,style:p,childClassName:y,childStyle:u,children:g,onVisibilityChange:b}=t,h=(0,o.useMemo)(()=>(function({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:a=z,iterationCount:o=1}){return f`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};
  `})({keyframes:i,duration:n}),[n,i]);return void 0==g?null:"string"==typeof g||"number"==typeof g||"boolean"==typeof g?Y(M,{...t,animationStyles:h,children:String(g)}):(0,k.isFragment)(g)?Y(N,{...t,animationStyles:h}):Y(C,{children:o.Children.map(g,(i,f)=>{if(!(0,o.isValidElement)(i))return null;let g=[l,h],v=a+(r?f*n*e:0);switch(i.type){case"ol":case"ul":return Y(d,{children:({cx:r})=>Y(i.type,{...i.props,className:r(m,i.props.className),style:{...p,...i.props.style},children:Y(_,{...t,children:i.props.children})})});case"li":return Y(w,{threshold:s,triggerOnce:c,onChange:b,children:({inView:t,ref:r})=>Y(d,{children:({cx:e})=>Y(i.type,{...i.props,ref:r,className:e(y,i.props.className),css:t?g:O,style:{...u,...i.props.style,animationDelay:v+"ms"}})})});default:return Y(w,{threshold:s,triggerOnce:c,onChange:b,children:({inView:t,ref:r})=>Y("div",{ref:r,className:m,css:t?g:O,style:{...p,animationDelay:v+"ms"},children:Y(d,{children:({cx:t})=>Y(i.type,{...i.props,className:t(y,i.props.className),style:{...u,...i.props.style}})})})})}})})},M=t=>{let{animationStyles:r,cascade:e=!1,damping:a=.5,delay:o=0,duration:n=1e3,fraction:s=0,triggerOnce:i=!1,css:c,className:f,style:l,children:m,onVisibilityChange:p}=t,{ref:d,inView:y}=S({triggerOnce:i,threshold:s,onChange:p});return e?Y("div",{ref:d,className:f,css:[c,X],style:l,children:m.split("").map((t,e)=>Y("span",{css:y?r:O,style:{animationDelay:o+e*n*a+"ms"},children:t},e))}):Y(N,{...t,children:m})},N=t=>{let{animationStyles:r,fraction:e=0,triggerOnce:a=!1,css:o,className:n,style:s,children:i,onVisibilityChange:c}=t,{ref:f,inView:l}=S({triggerOnce:a,threshold:e,onChange:c});return Y("div",{ref:f,className:n,css:l?[o,r]:O,style:s,children:i})};l`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,l`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,l`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,l`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,l`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,l`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,l`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,l`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,l`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,l`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,l`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,l`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,l`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,l`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,l`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,f`
  backface-visibility: visible;
`,l`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,l`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,l`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,f`
  transform-origin: top left;
`,l`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,l`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,l`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,l`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,l`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,l`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,l`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,l`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,l`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,l`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,l`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;var V=l`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,j=l`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,E=l`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,P=l`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,A=l`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,F=l`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,I=l`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,R=l`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,D=l`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,T=l`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,L=t=>{let{direction:r,reverse:e=!1,...a}=t,n=(0,o.useMemo)(()=>(function(t,r){switch(r){case"down":return t?I:j;case"left":return t?R:E;case"right":return t?D:P;case"up":return t?T:A;default:return t?F:V}})(e,r),[r,e]);return Y(_,{keyframes:n,...a})}}}]);