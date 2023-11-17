(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1023:function(e,t,n){"use strict";var l=n(4836);t.Z=void 0;var r=l(n(4938)),s=n(5893),o=(0,r.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=o},8165:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(5562)}])},5642:function(e,t,n){"use strict";n.d(t,{HK:function(){return StyledStrong},Ht:function(){return PDFReader},XU:function(){return StyledH1},Y7:function(){return VideoPlayer},_B:function(){return StyledP},eX:function(){return StyledH3},nB:function(){return StyledA},wn:function(){return TestComponent},xD:function(){return StyledH2}});var l=n(5893),r=n(1664),s=n.n(r);let StyledP=e=>{let{children:t,...n}=e;return(0,l.jsx)("p",{className:"mb-5 text-slate-300/75",...n,children:t})},StyledH1=e=>{let{children:t,...n}=e;return(0,l.jsx)("h1",{className:"mt-12 mb-6 text-4xl font-bold",...n,children:t})},StyledH2=e=>{let{children:t,...n}=e;return(0,l.jsx)("h2",{className:"mt-10 mb-6 text-3xl font-bold",...n,children:t})},StyledH3=e=>{let{children:t,...n}=e;return(0,l.jsx)("h3",{className:"mt-8 mb-6 text-2xl font-bold",...n,children:t})},TestComponent=e=>{let{text:t}=e;return(0,l.jsx)("div",{children:(0,l.jsx)("button",{className:"border px-4 py-1 rounded-md",onClick:()=>console.log(t),children:t})})},StyledA=e=>{let{children:t,href:n,...r}=e;return(0,l.jsx)(s(),{href:null!=n?n:"",className:"text-blue-300/75 hover:text-blue-300 font-semi-bold",prefetch:!1,...r,children:t})},StyledStrong=e=>{let{children:t,...n}=e;return(0,l.jsx)("strong",{className:"text-blue-300/75 font-bold",...n,children:t})},PDFReader=e=>{let{file:t}=e;return(0,l.jsx)("div",{className:"w-full my-2",children:(0,l.jsx)("iframe",{src:t,className:"w-full sm:h-96 h-64",loading:"lazy"})})},VideoPlayer=e=>{let{file:t,classname:n}=e;return(0,l.jsx)("div",{className:"w-full my-2",children:(0,l.jsx)("video",{controls:!0,controlsList:"nodownload",className:null!=n?n:"w-96 h-42",children:(0,l.jsx)("source",{type:"video/mp4",src:t})})})}},7285:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var l=n(5642);let r={p:l._B,h1:l.XU,h2:l.xD,h3:l.eX,a:l.nB,strong:l.HK}},4322:function(e,t,n){"use strict";n.d(t,{Ah:function(){return o},WW:function(){return l},bJ:function(){return r},x4:function(){return s}});let l="yyyy-MM-dd",r="eee MMM dd, yyyy",s="Not categorized",o="kwunmingpang@gmail.com"},5562:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return Test}});var l=n(5893),r=n(5079);n(1346);var s=n(9008),o=n.n(s),c=n(7294),a=n(4201),d=n(855),i=n(4322),u=n(8846),x=n.n(u),m=n(5642),f=n(7285),h=n(5511),b=n(1023),j=n(1664),N=n.n(j);let BlogHeader=e=>{let{title:t,date:n}=e,r=(0,c.useMemo)(()=>n?(0,a.Z)((0,d.Z)(n,i.WW,new Date),i.bJ):null,[n]);return(0,l.jsxs)("header",{className:"flex flex-col",children:[n&&(0,l.jsx)("time",{className:"order-first flex items-center text-base text-zinc-400/90",dateTime:n,children:(0,l.jsx)("span",{className:"",children:r})}),(0,l.jsx)("div",{className:"my-4",children:(0,l.jsx)("h5",{className:"text-4xl font-bold",children:t})})]})},CustomBreadCrumbs=e=>{let{title:t,category:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"mb-4 sm:mb-8 hidden sm:block",children:(0,l.jsxs)(h.Z,{"aria-label":"breadcrumb",separator:(0,l.jsx)("span",{className:"text-slate-300/75",children:"›"}),children:[(0,l.jsx)(m.nB,{href:"/blog",children:"about"}),n&&(0,l.jsx)("p",{className:"text-slate-300/75",children:n}),(0,l.jsx)("p",{className:"text-slate-300/75",children:t})]})}),(0,l.jsx)("div",{className:"sm:hidden block mb-4 text-xl font-bold",children:(0,l.jsx)(N(),{href:"/blog",className:"cursor-pointer text-slate-300/75",children:(0,l.jsx)(b.Z,{})})})]})},y={TestComponent:m.wn,...f.Q};var p=!0;function Test(e){let{source:t}=e,{title:n,category:s}=(0,c.useMemo)(()=>null==t?void 0:t.frontmatter,[t]);return(0,l.jsxs)("div",{className:"".concat(x().blog," flex flex-col md:w-10/12 lg:w-8/12 mx-auto"),children:[(0,l.jsx)(CustomBreadCrumbs,{title:n,category:s}),(0,l.jsx)(o(),{children:(0,l.jsxs)("title",{children:["Blog | ",n]})}),(0,l.jsx)(BlogHeader,{...null==t?void 0:t.frontmatter}),(0,l.jsx)("div",{className:"",children:(0,l.jsx)(r.R,{...t,components:y})})]})}},8846:function(e){e.exports={blog:"blog_blog__r_N81"}},9008:function(e,t,n){e.exports=n(46)}},function(e){e.O(0,[684,562,774,888,179],function(){return e(e.s=8165)}),_N_E=e.O()}]);