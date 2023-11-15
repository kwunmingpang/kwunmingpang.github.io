(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2669)}])},628:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f}});let l="refresh",o="navigate",a="restore",u="server-patch",i="prefetch",c="fast-refresh",f="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7567:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2955),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4520:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754),l=r._(n(7294)),o=n(4785),a=n(4131),u=n(3833),i=n(1306),c=n(2048),f=n(637),s=n(1158),d=n(5352),p=n(7567),x=n(5864),_=n(628),h=new Set;function prefetch(e,t,n,r,l,o){if(!o&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let l=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+l;if(h.has(o))return;h.add(o)}let u=o?e.prefetch(t,l):e.prefetch(t,n,r);Promise.resolve(u).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,o,u,i,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(isModifiedEvent(e)||!f&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};f?l.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let m=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:u,children:h,prefetch:m=null,passHref:b,replace:v,shallow:y,scroll:g,locale:j,onClick:O,onMouseEnter:k,onTouchStart:E,legacyBehavior:C=!1,...N}=e;n=h,C&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let M=l.default.useContext(f.RouterContext),P=l.default.useContext(s.AppRouterContext),w=null!=M?M:P,T=!M,A=!1!==m,R=null===m?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:I,as:L}=l.default.useMemo(()=>{if(!M){let e=formatStringOrUrl(a);return{href:e,as:u?formatStringOrUrl(u):e}}let[e,t]=(0,o.resolveHref)(M,a,!0);return{href:e,as:u?(0,o.resolveHref)(M,u):t||e}},[M,a,u]),S=l.default.useRef(I),z=l.default.useRef(L);C&&(r=l.default.Children.only(n));let U=C?r&&"object"==typeof r&&r.ref:t,[F,H,K]=(0,d.useIntersection)({rootMargin:"200px"}),D=l.default.useCallback(e=>{(z.current!==L||S.current!==I)&&(K(),z.current=L,S.current=I),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[L,U,I,K,F]);l.default.useEffect(()=>{w&&H&&A&&prefetch(w,I,L,{locale:j},{kind:R},T)},[L,I,H,j,A,null==M?void 0:M.locale,w,T,R]);let V={ref:D,onClick(e){C||"function"!=typeof O||O(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),w&&!e.defaultPrevented&&linkClicked(e,w,I,L,v,y,g,j,T,A)},onMouseEnter(e){C||"function"!=typeof k||k(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),w&&(A||!T)&&prefetch(w,I,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:R},T)},onTouchStart(e){C||"function"!=typeof E||E(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),w&&(A||!T)&&prefetch(w,I,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:R},T)}};if((0,i.isAbsoluteUrl)(L))V.href=L;else if(!C||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);V.href=t||(0,x.addBasePath)((0,c.addLocale)(L,e,null==M?void 0:M.defaultLocale))}return C?l.default.cloneElement(r,V):l.default.createElement("a",{...N,...V},n)}),b=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),l=n(3767),o="function"==typeof IntersectionObserver,a=new Map,u=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:l},u.push(n),a.set(n,t),t}function observe(e,t,n){let{id:r,observer:l,elements:o}=createObserver(n);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:a}=e,u=a||!o,[i,c]=(0,r.useState)(!1),f=(0,r.useRef)(null),s=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(o){if(u||i)return;let e=f.current;if(e&&e.tagName){let r=observe(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!i){let e=(0,l.requestIdleCallback)(()=>c(!0));return()=>(0,l.cancelIdleCallback)(e)}},[u,n,t,i,f.current]);let d=(0,r.useCallback)(()=>{c(!1)},[]);return[s,i,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2669:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return App},metadata:function(){return i}});var r=n(5893);n(5355);var l=n(7294),o=n(1664),a=n.n(o);let MenuItem=e=>{let{text:t,link:n}=e;return(0,r.jsx)(a(),{href:n,children:(0,r.jsx)("li",{className:"px-3.5 py-2.5 capitalize font-medium text-sm",children:t})})},u=[{text:"home",link:"/"},{text:"about",link:"/"},{text:"blog",link:"/blog/testAbc"},{text:"gallery",link:"/"},{text:"project",link:"/"}];var layout_Header=()=>(0,r.jsx)("header",{className:"flex mt-6 mb-4",children:(0,r.jsx)("div",{className:"mx-auto flex",children:(0,r.jsx)("nav",{className:"mx-auto flex pointer-events-auto",children:(0,r.jsx)("ul",{className:"flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg  shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10",children:u.map(e=>(0,l.createElement)(MenuItem,{...e,key:"item_".concat(e.text)}))})})})}),layout_Footer=()=>(0,r.jsx)("footer",{className:"mt-12 flex-none",children:(0,r.jsx)("div",{className:"sm:px-8 border-t border-zinc-700/50",children:(0,r.jsxs)("div",{className:"mx-auto w-full max-w-7xl lg:px-8 py-6 flex",children:[(0,r.jsx)("span",{}),(0,r.jsx)("p",{className:"ml-auto text-sm text-zinc-500",children:"\xa9 2023 KwunMing Pang. All rights reserved."})]})})}),layout_MainLayout=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"flex w-full ",children:[(0,r.jsx)("div",{className:"fixed inset-0 flex justify-center sm:px-8 lg:px-20",children:(0,r.jsx)("div",{className:"w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"})}),(0,r.jsx)("div",{className:"relative flex w-full flex-col sm:px-8 lg:px-20",children:t})]})};let i={title:"Create Next App",description:"Generated by create next app"};function App(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(layout_MainLayout,{children:[(0,r.jsx)(layout_Header,{}),(0,r.jsx)("main",{className:"flex-auto p-8 text-slate-200",children:(0,r.jsx)(t,{...n})}),(0,r.jsx)(layout_Footer,{})]})}},5355:function(){},1664:function(e,t,n){e.exports=n(4520)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(4751)}),_N_E=e.O()}]);