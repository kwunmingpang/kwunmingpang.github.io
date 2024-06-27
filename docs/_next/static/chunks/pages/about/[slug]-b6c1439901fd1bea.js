(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{6740:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var n=r(7462),o=r(3366),a=r(7294);r(9864);var l=r(512),s=r(8987),i=r(8510),c=r(2591),u=r(1657),d=r(9707),p=r(8216),h=r(1977),f=r(8027);function getTypographyUtilityClass(e){return(0,f.ZP)("MuiTypography",e)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=r(5893);let m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:l}=e,s={root:["root",a,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,i.Z)(s,getTypographyUtilityClass,l)},y=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=e=>j[e]||e,x=a.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiTypography"}),a=transformDeprecatedColors(r.color),s=(0,d.Z)((0,n.Z)({},r,{color:a})),{align:i="inherit",className:c,component:p,gutterBottom:h=!1,noWrap:f=!1,paragraph:j=!1,variant:x="body1",variantMapping:v=g}=s,S=(0,o.Z)(s,m),w=(0,n.Z)({},s,{align:i,color:a,className:c,component:p,gutterBottom:h,noWrap:f,paragraph:j,variant:x,variantMapping:v}),O=p||(j?"p":v[x]||g[x])||"span",_=useUtilityClasses(w);return(0,b.jsx)(y,(0,n.Z)({as:O,ref:t,ownerState:w,className:(0,l.Z)(_.root,c)},S))});var v=r(2101),S=(0,r(8169).Z)((0,b.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),w=r(2607);let O=["slots","slotProps"],_=(0,c.ZP)(w.Z)(({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,v._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,v._4)(e.palette.grey[600],.12)})})),Z=(0,c.ZP)(S)({width:24,height:16});var Breadcrumbs_BreadcrumbCollapsed=function(e){let{slots:t={},slotProps:r={}}=e,a=(0,o.Z)(e,O);return(0,b.jsx)("li",{children:(0,b.jsx)(_,(0,n.Z)({focusRipple:!0},a,{ownerState:e,children:(0,b.jsx)(Z,(0,n.Z)({as:t.CollapsedIcon,ownerState:e},r.collapsedIcon))}))})};function getBreadcrumbsUtilityClass(e){return(0,f.ZP)("MuiBreadcrumbs",e)}let P=(0,h.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),N=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Breadcrumbs_useUtilityClasses=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},getBreadcrumbsUtilityClass,t)},B=(0,c.ZP)(x,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${P.li}`]:t.li},t.root]})({}),C=(0,c.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,c.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function insertSeparators(e,t,r,n){return e.reduce((o,a,l)=>(l<e.length-1?o=o.concat(a,(0,b.jsx)(k,{"aria-hidden":!0,className:t,ownerState:n,children:r},`separator-${l}`)):o.push(a),o),[])}let D=a.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiBreadcrumbs"}),{children:i,className:c,component:d="nav",slots:p={},slotProps:h={},expandText:f="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:y=1,maxItems:g=8,separator:j="/"}=r,x=(0,o.Z)(r,N),[v,S]=a.useState(!1),w=(0,n.Z)({},r,{component:d,expanded:v,expandText:f,itemsAfterCollapse:m,itemsBeforeCollapse:y,maxItems:g,separator:j}),O=Breadcrumbs_useUtilityClasses(w),_=(0,s.y)({elementType:p.CollapsedIcon,externalSlotProps:h.collapsedIcon,ownerState:w}),Z=a.useRef(null),P=a.Children.toArray(i).filter(e=>a.isValidElement(e)).map((e,t)=>(0,b.jsx)("li",{className:O.li,children:e},`child-${t}`));return(0,b.jsx)(B,(0,n.Z)({ref:t,component:d,color:"text.secondary",className:(0,l.Z)(O.root,c),ownerState:w},x,{children:(0,b.jsx)(C,{className:O.ol,ref:Z,ownerState:w,children:insertSeparators(v||g&&P.length<=g?P:y+m>=P.length?P:[...P.slice(0,y),(0,b.jsx)(Breadcrumbs_BreadcrumbCollapsed,{"aria-label":f,slots:{CollapsedIcon:p.CollapsedIcon},slotProps:{collapsedIcon:_},onClick:()=>{S(!0);let e=Z.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...P.slice(P.length-m,P.length)],O.separator,j,w)})}))});var R=D},8610:function(e,t,r){"use strict";r.d(t,{Bj:function(){return StyledBlockQuote},HK:function(){return StyledStrong},Ht:function(){return PDFReader},Vg:function(){return StyledCode},XU:function(){return StyledH1},Y7:function(){return VideoPlayer},_B:function(){return StyledP},eX:function(){return StyledH3},iz:function(){return Divider},nB:function(){return StyledA},s3:function(){return Reference},xD:function(){return StyledH2}});var n=r(8307),o=r(4730),a=r(1664),l=r.n(a),s=r(5893),i=["children"],c=["children"],u=["children"],d=["children"],p=["children","href"],h=["children"],f=["children"],b=["children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var StyledP=function(e){var t=e.children,r=(0,o.Z)(e,i);return(0,s.jsx)("p",_objectSpread(_objectSpread({className:"mb-5 text-slate-300/90 text-lg"},r),{},{children:t}))},StyledH1=function(e){var t=e.children,r=(0,o.Z)(e,c);return(0,s.jsx)("h1",_objectSpread(_objectSpread({className:"mt-12 mb-6 text-4xl font-bold text-slate-200"},r),{},{children:t}))},StyledH2=function(e){var t=e.children,r=(0,o.Z)(e,u);return(0,s.jsx)("h2",_objectSpread(_objectSpread({className:"mt-10 mb-6 text-3xl font-bold text-slate-200"},r),{},{children:t}))},StyledH3=function(e){var t=e.children,r=(0,o.Z)(e,d);return(0,s.jsx)("h3",_objectSpread(_objectSpread({className:"mt-8 mb-6 text-2xl font-bold text-slate-200"},r),{},{children:t}))},StyledA=function(e){var t=e.children,r=e.href,n=(0,o.Z)(e,p);return(0,s.jsx)(l(),_objectSpread(_objectSpread({href:null!=r?r:"",className:"text-blue-300/75 hover:text-blue-300 font-semi-bold",prefetch:!1},n),{},{children:t}))},StyledStrong=function(e){var t=e.children,r=(0,o.Z)(e,h);return(0,s.jsx)("strong",_objectSpread(_objectSpread({className:"text-blue-300/75 font-bold"},r),{},{children:t}))},StyledBlockQuote=function(e){var t=e.children,r=(0,o.Z)(e,f);return(0,s.jsx)("blockquote",_objectSpread(_objectSpread({className:"font-bold p-4 rounded-lg bg-zinc-800/80 my-4"},r),{},{children:t}))},StyledCode=function(e){var t=e.children,r=(0,o.Z)(e,b);return(0,s.jsx)("code",_objectSpread(_objectSpread({className:"font-bold text-amber-200"},r),{},{children:t}))},PDFReader=function(e){var t=e.file;return(0,s.jsx)("div",{className:"w-full my-2",children:(0,s.jsx)("iframe",{src:t,className:"w-full sm:h-96 h-64",loading:"lazy"})})},VideoPlayer=function(e){var t=e.file,r=e.classname;return(0,s.jsx)("div",{className:"w-full my-2",children:(0,s.jsx)("video",{controls:!0,controlsList:"nodownload",className:null!=r?r:"w-96 h-42",children:(0,s.jsx)("source",{type:"video/mp4",src:t})})})},Divider=function(){return(0,s.jsx)("span",{className:"absolute top-0 w-full inset-x-1-bottom-px h-px \r bg-gradient-to-r from-blue-300/60 from-blue-300/20"})},Reference=function(e){var t=e.children;return(0,s.jsxs)("div",{className:"mt-6 w-full relative",children:[(0,s.jsx)("h3",{className:"mt-8 text-2xl font-bold text-slate-200",children:"References"}),(0,s.jsx)("span",{className:"w-full h-px bg-gradient-to-r from-blue-300/60 from-blue-300/20 block mb-6"}),t]})}},6973:function(e,t,r){"use strict";r.d(t,{Q:function(){return i}});var n=r(8307),o=r(8610),a=r(7918),l=r(8269);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var s={Chip:a.Z,Stack:l.Z},i=_objectSpread({p:o._B,h1:o.XU,h2:o.xD,h3:o.eX,a:o.nB,strong:o.HK,blockquote:o.Bj,code:o.Vg},s)},7968:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return y},default:function(){return Test}});var n=r(8307),o=r(5079);r(1346);var a=r(9008),l=r.n(a),s=r(7294),i=r(8846),c=r.n(i),u=r(6973),d=r(8610),p=r(5675),h=r.n(p),f=r(6740),b=r(5893);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m=_objectSpread(_objectSpread({},u.Q),{},{NextImage:h(),VideoPlayer:d.Y7,Breadcrumbs:function(e){var t=e.title;return(0,b.jsxs)(f.Z,{"aria-label":"breadcrumb",separator:(0,b.jsx)("span",{className:"text-slate-300/75",children:"›"}),children:[(0,b.jsx)(d.nB,{href:"/about",children:"about"}),(0,b.jsx)("p",{className:"text-slate-300/75",children:t})]})}}),y=!0;function Test(e){var t=e.source,r=(0,s.useMemo)(function(){return null==t?void 0:t.frontmatter},[t]),n=r.title;return r.date,r.abstract,(0,b.jsxs)("div",{className:"".concat(c().blog," flex flex-col md:w-10/12 lg:w-8/12 mx-auto"),children:[(0,b.jsx)(l(),{children:(0,b.jsxs)("title",{children:["About | ",n]})}),(0,b.jsx)("div",{className:"",children:(0,b.jsx)(o.R,_objectSpread(_objectSpread({},t),{},{components:m}))})]})}},3530:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/[slug]",function(){return r(7968)}])},1346:function(){},8846:function(e){e.exports={blog:"blog_blog__r_N81"}}},function(e){e.O(0,[959,553,943,774,888,179],function(){return e(e.s=3530)}),_N_E=e.O()}]);