(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(9703)}])},4322:function(e,n,t){"use strict";t.d(n,{WW:function(){return l},bJ:function(){return r},x4:function(){return s}});let l="yyyy-MM-dd",r="eee MMM dd, yyyy",s="Not categorized"},9703:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u},default:function(){return BlogList}});var l=t(5893),r=t(4322),s=t(4201),i=t(4037),o=t(1664),c=t.n(o),a=t(7294);let DisplayBlogCategory=e=>{let{groupKey:n,index:t}=e;return r.x4==n?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"mt-6 mb-1",children:[0!=t&&(0,l.jsx)("div",{className:"border-t border-zinc-200/25"}),(0,l.jsx)("h6",{className:"font-bold text-2xl mt-1",children:n})]})},DisplayBlogItem=e=>{let{item:n}=e;return n?(0,l.jsx)("ul",{children:n.map((e,n)=>{var t;let{title:o,date:a,abstract:u}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("li",{className:"my-4 rounded-lg hover:bg-zinc-500/25 p-2",children:(0,l.jsx)(c(),{href:"/blog/".concat(null!==(t=e.link)&&void 0!==t?t:""),className:"flex w-full",children:(0,l.jsxs)("div",{className:"flex gap-1 flex-col",children:[(0,l.jsx)("time",{className:"text-base text-zinc-400",children:(0,s.Z)((0,i.Z)(a,r.WW,new Date),r.bJ)}),(0,l.jsx)("h6",{className:"text-xl font-medium",children:o}),u&&(0,l.jsx)("p",{className:"font-thin text-zinc-400/80",children:u})]})})},"".concat(e.title,"_").concat(e.date))})})}):(0,l.jsx)(l.Fragment,{})};var blog_DisplayBlogGroup=e=>{let{blogGroups:n}=e;return(0,l.jsx)("div",{className:" lg:w-8/12 mx-auto",children:null==n?void 0:n.map((e,n)=>{console.log("group",e);let{key:t,item:r}=e;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(DisplayBlogCategory,{groupKey:t,index:n}),(0,l.jsx)(DisplayBlogItem,{item:r})]},e.key)})})},u=!0;function BlogList(e){let{blogMetas:n}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(blog_DisplayBlogGroup,{blogGroups:n})})}}},function(e){e.O(0,[348,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);