(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{825:function(e,t,r){"use strict";var n=r(7294);t.Z=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],l=(0,n.useCallback)(function(){r(!0)},[t]);return(0,n.useMemo)(function(){return[t,l]},[t,l])}},8610:function(e,t,r){"use strict";r.d(t,{Bj:function(){return StyledBlockQuote},HK:function(){return StyledStrong},Ht:function(){return PDFReader},Vg:function(){return StyledCode},XU:function(){return StyledH1},Y7:function(){return VideoPlayer},_B:function(){return StyledP},eX:function(){return StyledH3},nB:function(){return StyledA},xD:function(){return StyledH2}});var n=r(8307),l=r(4730),c=r(1664),o=r.n(c),a=r(5893),i=["children"],s=["children"],u=["children"],d=["children"],f=["children","href"],h=["children"],b=["children"],p=["children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var StyledP=function(e){var t=e.children,r=(0,l.Z)(e,i);return(0,a.jsx)("p",_objectSpread(_objectSpread({className:"mb-5 text-slate-300/90 text-lg"},r),{},{children:t}))},StyledH1=function(e){var t=e.children,r=(0,l.Z)(e,s);return(0,a.jsx)("h1",_objectSpread(_objectSpread({className:"mt-12 mb-6 text-4xl font-bold text-slate-200"},r),{},{children:t}))},StyledH2=function(e){var t=e.children,r=(0,l.Z)(e,u);return(0,a.jsx)("h2",_objectSpread(_objectSpread({className:"mt-10 mb-6 text-3xl font-bold text-slate-200"},r),{},{children:t}))},StyledH3=function(e){var t=e.children,r=(0,l.Z)(e,d);return(0,a.jsx)("h3",_objectSpread(_objectSpread({className:"mt-8 mb-6 text-2xl font-bold text-slate-200"},r),{},{children:t}))},StyledA=function(e){var t=e.children,r=e.href,n=(0,l.Z)(e,f);return(0,a.jsx)(o(),_objectSpread(_objectSpread({href:null!=r?r:"",className:"text-blue-300/75 hover:text-blue-300 font-semi-bold",prefetch:!1},n),{},{children:t}))},StyledStrong=function(e){var t=e.children,r=(0,l.Z)(e,h);return(0,a.jsx)("strong",_objectSpread(_objectSpread({className:"text-blue-300/75 font-bold"},r),{},{children:t}))},StyledBlockQuote=function(e){var t=e.children,r=(0,l.Z)(e,b);return(0,a.jsx)("blockquote",_objectSpread(_objectSpread({className:"font-bold p-4 rounded-lg bg-zinc-800/80 my-4"},r),{},{children:t}))},StyledCode=function(e){var t=e.children,r=(0,l.Z)(e,p);return(0,a.jsx)("code",_objectSpread(_objectSpread({className:"font-bold text-amber-200"},r),{},{children:t}))},PDFReader=function(e){var t=e.file;return(0,a.jsx)("div",{className:"w-full my-2",children:(0,a.jsx)("iframe",{src:t,className:"w-full sm:h-96 h-64",loading:"lazy"})})},VideoPlayer=function(e){var t=e.file,r=e.classname;return(0,a.jsx)("div",{className:"w-full my-2",children:(0,a.jsx)("video",{controls:!0,controlsList:"nodownload",className:null!=r?r:"w-96 h-42",children:(0,a.jsx)("source",{type:"video/mp4",src:t})})})}},5334:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return gallery}});var n=r(7812),l=r(5675),c=r.n(l),o=r(7294),a=r(1400),i=r(6835),s=r(825),u=r(5893),gallery_DisplayGalleryItem=function(e){var t=e.pictureSource,r=e.handleOpen,n=e.setModalImage,l=(0,s.Z)(),a=(0,i.Z)(l,2),d=a[0],f=a[1],h=(0,o.useCallback)(function(){n(t),r()},[t,r,n]);return(0,u.jsxs)("div",{className:"relative cursor-pointer",style:{minHeight:150},onClick:h,children:[(0,u.jsx)(c(),{className:"h-full w-auto object-cover rounded-lg ".concat(d?"ring-1 ring-zinc-400/25 visible":"invisible"),src:t,width:720,height:480,alt:"pictures in gallery",onLoad:f}),(0,u.jsx)("div",{className:"inset-0 absolute blur overflow-hidden bg-blue-300/25 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"})]})},d=r(6628),gallery_DisplayGallery=function(e){var t=e.pictures,r=void 0===t?[]:t,l=(0,o.useState)(!1),i=l[0],s=l[1],f=(0,o.useState)(""),h=f[0],b=f[1],p=(0,o.useCallback)(function(){s(!1)},[i]),y=(0,o.useCallback)(function(){s(!0)},[i]),j=(0,o.useCallback)(function(e){b(e)},[h]);return(0,u.jsxs)("div",{className:"grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-3",children:[(0,n.Z)(r).map(function(e,t){return(0,u.jsx)(gallery_DisplayGalleryItem,{pictureSource:e,handleOpen:y,setModalImage:j},"".concat(e,"_").concat(t))}),(0,u.jsx)(a.Z,{open:i,onClose:p,disableEnforceFocus:!0,disableAutoFocus:!0,disableRestoreFocus:!0,children:(0,u.jsx)(d.Z,{in:i,children:(0,u.jsx)("div",{className:"absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-auto flex justify-center flex-col",onClick:p,children:(0,u.jsx)("div",{className:"flex flex-col items-center m-4",children:(0,u.jsx)(c(),{src:h,width:1080,height:720,alt:"focus image",className:"object-contain h-[80vh] w-auto"})})})})})]})},f=r(8610),h=r(9008),b=r.n(h),p=!0,gallery=function(e){var t=e.pictures;return(0,u.jsxs)("div",{className:"py-12",children:[(0,u.jsx)(b(),{children:(0,u.jsx)("title",{children:"Gallery | Peter Pang"})}),(0,u.jsx)(f.XU,{children:"Gallery"}),(0,u.jsx)(gallery_DisplayGallery,{pictures:t})]})}},4080:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return r(5334)}])}},function(e){e.O(0,[959,203,774,888,179],function(){return e(e.s=4080)}),_N_E=e.O()}]);