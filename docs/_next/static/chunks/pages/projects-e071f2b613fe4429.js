(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(1417)}])},1943:function(e,t,n){"use strict";var r=n(5893),l=n(5642);t.Z=e=>{let{topic:t,link:n}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(l.nB,{href:n,children:(0,r.jsxs)("button",{className:"",children:["View More ",t," >"]})})})}},553:function(e,t,n){"use strict";var r=n(5893);t.Z=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"w-full flex h-full md:p-4 flex-col md:flex-row",children:(0,r.jsx)("div",{className:"lg:w-8/12 p-4 mx-auto",children:t})})}},5642:function(e,t,n){"use strict";n.d(t,{HK:function(){return StyledStrong},Ht:function(){return PDFReader},XU:function(){return StyledH1},Y7:function(){return VideoPlayer},_B:function(){return StyledP},eX:function(){return StyledH3},nB:function(){return StyledA},wn:function(){return TestComponent},xD:function(){return StyledH2}});var r=n(5893),l=n(1664),o=n.n(l);let StyledP=e=>{let{children:t,...n}=e;return(0,r.jsx)("p",{className:"mb-5 text-slate-300/75",...n,children:t})},StyledH1=e=>{let{children:t,...n}=e;return(0,r.jsx)("h1",{className:"mt-12 mb-6 text-4xl font-bold",...n,children:t})},StyledH2=e=>{let{children:t,...n}=e;return(0,r.jsx)("h2",{className:"mt-10 mb-6 text-3xl font-bold",...n,children:t})},StyledH3=e=>{let{children:t,...n}=e;return(0,r.jsx)("h3",{className:"mt-8 mb-6 text-2xl font-bold",...n,children:t})},TestComponent=e=>{let{text:t}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"border px-4 py-1 rounded-md",onClick:()=>console.log(t),children:t})})},StyledA=e=>{let{children:t,href:n,...l}=e;return(0,r.jsx)(o(),{href:null!=n?n:"",className:"text-blue-300/75 hover:text-blue-300 font-semi-bold",prefetch:!1,...l,children:t})},StyledStrong=e=>{let{children:t,...n}=e;return(0,r.jsx)("strong",{className:"text-blue-300/75 font-bold",...n,children:t})},PDFReader=e=>{let{file:t}=e;return(0,r.jsx)("div",{className:"w-full my-2",children:(0,r.jsx)("iframe",{src:t,className:"w-full sm:h-96 h-64",loading:"lazy"})})},VideoPlayer=e=>{let{file:t,classname:n}=e;return(0,r.jsx)("div",{className:"w-full my-2",children:(0,r.jsx)("video",{controls:!0,controlsList:"nodownload",className:null!=n?n:"w-96 h-42",children:(0,r.jsx)("source",{type:"video/mp4",src:t})})})}},7285:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(5642);let l={p:r._B,h1:r.XU,h2:r.xD,h3:r.eX,a:r.nB,strong:r.HK}},1417:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h}});var r=n(5893),l=n(1943),o=n(553),s=n(5642),i=n(5079),u=n(7285),c=n(9008),a=n.n(c),d=n(5675),m=n.n(d),f=n(4201),x=n(855);let Divider=()=>(0,r.jsx)("span",{className:"absolute top-0 w-full inset-x-1-bottom-px h-px    bg-gradient-to-r from-blue-300/60 from-blue-300/20"}),Container=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"mt-12 w-full relative",children:[(0,r.jsx)(Divider,{}),t]})},DateDisplay=e=>{let{date:t}=e;return(0,r.jsx)("div",{className:"",children:(0,r.jsx)("time",{dateTime:t,children:(0,r.jsx)("span",{className:"text-base text-zinc-400/90",children:(0,f.Z)((0,x.Z)(t,"yyyy-MM",new Date),"MMM, yyyy")})})})},Header=e=>{let{date:t,title:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"text-2xl font-bold",children:n}),(0,r.jsx)(DateDisplay,{date:t}),(0,r.jsx)("span",{className:"mb-4 inset-x-1-bottom-px h-px p-1"})]})};var h=!0;t.default=e=>{let{source:t}=e;return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Projects | Peter Pang"})}),(0,r.jsx)(s.XU,{children:"Projects outside work and study"}),(0,r.jsx)("div",{className:"mt-4 w-full relative",children:(0,r.jsx)(i.R,{...t,components:{...u.Q,NextImage:m(),Divider,Container,ViewMore:l.Z,Header}})})]})}},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)},5079:function(e,t,n){"use strict";n.d(t,{R:function(){return MDXRemote}});var r={};n.r(r),n.d(r,{MDXContext:function(){return s},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var l=n(7294),o=n(2746);let s=l.createContext({});function withMDXComponents(e){return boundMDXComponent;function boundMDXComponent(t){let n=useMDXComponents(t.components);return l.createElement(e,{...t,allComponents:n})}}function useMDXComponents(e){let t=l.useContext(s);return l.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function MDXProvider({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:useMDXComponents(e),l.createElement(s.Provider,{value:r},t)}function MDXRemote({compiledSource:e,frontmatter:t,scope:n,components:s={},lazy:i}){let[u,c]=(0,l.useState)(!i||"undefined"==typeof window);(0,l.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let a=(0,l.useMemo)(()=>{let l=Object.assign({opts:{...r,...o.jsxRuntime}},{frontmatter:t},n),s=Object.keys(l),i=Object.values(l),u=Reflect.construct(Function,s.concat(`${e}`));return u.apply(u,i).default},[n,e]);if(!u)return l.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=l.createElement(MDXProvider,{components:s},l.createElement(a,null));return i?l.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},function(e){e.O(0,[959,684,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);