(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(6689)}])},9078:function(e,n,t){"use strict";var l=t(5893),r=t(4322),i=t(4201),s=t(855),o=t(1664),c=t.n(o);n.Z=e=>{let{item:n,readmore:t=!1}=e;return n?(0,l.jsx)("ul",{children:n.map((e,n)=>{var o;let{title:a,date:u,abstract:d}=e;return(0,l.jsx)("li",{className:"",children:(0,l.jsx)(c(),{href:"/blog/".concat(null!==(o=e.link)&&void 0!==o?o:""),className:"my-4 rounded-lg hover:bg-zinc-500/25 p-2 md:p-3 flex w-full",children:(0,l.jsxs)("div",{className:"flex gap-1 flex-col",children:[(0,l.jsx)("time",{className:"text-base text-zinc-400",children:(0,i.Z)((0,s.Z)(u,r.WW,new Date),r.bJ)}),(0,l.jsx)("h6",{className:"text-xl font-medium",children:a}),d&&(0,l.jsx)("p",{className:"font-thin text-zinc-400/80",children:d}),d&&t&&(0,l.jsx)("div",{children:(0,l.jsx)("button",{className:"py-1 px-3 rounded-lg hover:text-slate-200 text-zinc-400/80   hover:ring-zinc-200/5 hover:bg-blue-200/30 hover:ring-1",children:"Read More >"})})]})})},"".concat(e.title,"_").concat(e.date))})}):(0,l.jsx)(l.Fragment,{})}},4322:function(e,n,t){"use strict";t.d(n,{Ah:function(){return s},WW:function(){return l},bJ:function(){return r},x4:function(){return i}});let l="yyyy-MM-dd",r="eee MMM dd, yyyy",i="Not categorized",s="kwunmingpang@gmail.com"},6689:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a},default:function(){return BlogList}});var l=t(5893),r=t(9008),i=t.n(r),s=t(7294),o=t(9078),c=t(4322),blog_DisplayBlogCategory=e=>{let{groupKey:n,index:t}=e;return c.x4==n?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"mt-6 mb-1",children:[0!=t&&(0,l.jsx)("div",{className:"border-t border-zinc-200/25"}),(0,l.jsx)("h6",{className:"font-bold text-2xl mt-1",children:n})]})},blog_DisplayBlogGroup=e=>{let{blogGroups:n}=e;return(0,l.jsx)("div",{className:" lg:w-8/12 mx-auto",children:null==n?void 0:n.map((e,n)=>{let{key:t,item:r}=e;return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(blog_DisplayBlogCategory,{groupKey:t,index:n}),(0,l.jsx)(o.Z,{item:r})]},e.key)})})},a=!0;function BlogList(e){let{blogMetas:n}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:"Blog | Peter Pang"})}),(0,l.jsx)(blog_DisplayBlogGroup,{blogGroups:n})]})}},9008:function(e,n,t){e.exports=t(46)}},function(e){e.O(0,[684,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);