(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{8165:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return t(6239)}])},6239:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return d},default:function(){return Test}});var o={};t.r(o),t.d(o,{MDXContext:function(){return l},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var u=t(5893),r=t(7294),i=t(2746);let l=r.createContext({});function withMDXComponents(e){return boundMDXComponent;function boundMDXComponent(n){let t=useMDXComponents(n.components);return r.createElement(e,{...n,allComponents:t})}}function useMDXComponents(e){let n=r.useContext(l);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let c={};function MDXProvider({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||c:useMDXComponents(e),r.createElement(l.Provider,{value:o},n)}function MDXRemote({compiledSource:e,frontmatter:n,scope:t,components:u={},lazy:l}){let[c,s]=(0,r.useState)(!l||"undefined"==typeof window);(0,r.useEffect)(()=>{if(l){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let a=(0,r.useMemo)(()=>{let u=Object.assign({opts:{...o,...i.jsxRuntime}},{frontmatter:n},t),r=Object.keys(u),l=Object.values(u),c=Reflect.construct(Function,r.concat(`${e}`));return c.apply(c,l).default},[t,e]);if(!c)return r.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=r.createElement(MDXProvider,{components:u},r.createElement(a,null));return l?r.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t(4290),t(1346);var s=t(9008),a=t.n(s);let TestComponent=e=>{let{text:n}=e;return(0,u.jsx)("div",{children:(0,u.jsx)("button",{className:"border px-4 py-1 rounded-md",onClick:()=>console.log(n),children:n})})};var d=!0;function Test(e){var n;let{source:t}=e;return(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(a(),{children:(0,u.jsx)("title",{children:null==t?void 0:null===(n=t.frontmatter)||void 0===n?void 0:n.title})}),(0,u.jsx)(MDXRemote,{...t,components:{TestComponent}})]})}},1346:function(){},4290:function(){},9008:function(e,n,t){e.exports=t(46)},2746:function(e,n,t){e.exports.jsxRuntime=t(5893)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8165)}),_N_E=e.O()}]);