(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{2715:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return p}});let i=r(8754),n=r(1757),o=n._(r(7294)),a=i._(r(3935)),l=i._(r(46)),s=r(3560),u=r(7599),d=r(4955);r(9941);let c=r(637),f=i._(r(7791)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,r,i,n,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function getDynamicProps(e){let[t,r]=o.version.split(".",2),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:s,className:u,style:d,fetchPriority:c,placeholder:f,loading:g,unoptimized:m,fill:p,onLoadRef:h,onLoadingCompleteRef:v,setBlurComplete:b,setShowAltText:y,onLoad:w,onError:S,..._}=e;return o.default.createElement("img",{..._,...getDynamicProps(c),loading:g,width:l,height:a,decoding:s,"data-nimg":p?"fill":"1",className:u,style:d,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&handleLoading(e,f,h,v,b,m))},[r,f,h,v,b,S,m,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,v,b,m)},onError:e=>{y(!0),"empty"!==f&&b(!0),S&&S(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let p=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),i=(0,o.useContext)(d.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,p=(0,o.useRef)(a);(0,o.useEffect)(()=>{p.current=a},[a]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[v,b]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),{props:S,meta:_}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:v,showAltText:y});return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,{...S,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:w,ref:t}),_.priority?o.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3560:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(9941);let i=r(1235),n=r(7599);function isStaticRequire(e){return void 0!==e.default}function isStaticImageData(e){return void 0!==e.src}function isStaticImport(e){return"object"==typeof e&&(isStaticRequire(e)||isStaticImageData(e))}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getWidths(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}function generateImgAttrs(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=getWidths(t,n,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}function getImgProps(e,t){let r,o,a,{src:l,sizes:s,unoptimized:u=!1,priority:d=!1,loading:c,className:f,quality:g,width:m,height:p,fill:h=!1,style:v,onLoad:b,onLoadingComplete:y,placeholder:w="empty",blurDataURL:S,fetchPriority:_,layout:I,objectFit:P,objectPosition:C,lazyBoundary:E,lazyRoot:z,...j}=e,{imgConf:x,showAltText:O,blurComplete:R,defaultLoader:M}=t,k=x||n.imageConfigDefault;if("allSizes"in k)r=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);r={...k,allSizes:e,deviceSizes:t}}let D=j.loader||M;delete j.loader,delete j.srcSet;let L="__next_img_default"in D;if(L){if("custom"===r.loader)throw Error('Image with src "'+l+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(I){"fill"===I&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[I];t&&!s&&(s=t)}let A="",N=getInt(m),B=getInt(p);if(isStaticImport(l)){let e=isStaticRequire(l)?l.default:l;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,a=e.blurHeight,S=S||e.blurDataURL,A=e.src,!h){if(N||B){if(N&&!B){let t=N/e.width;B=Math.round(e.height*t)}else if(!N&&B){let t=B/e.height;N=Math.round(e.width*t)}}else N=e.width,B=e.height}}let W=!d&&("lazy"===c||void 0===c);(!(l="string"==typeof l?l:A)||l.startsWith("data:")||l.startsWith("blob:"))&&(u=!0,W=!1),r.unoptimized&&(u=!0),L&&l.endsWith(".svg")&&!r.dangerouslyAllowSVG&&(u=!0),d&&(_="high");let G=getInt(g),F=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:C}:{},O?{}:{color:"transparent"},v),q=R||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:N,heightInt:B,blurWidth:o,blurHeight:a,blurDataURL:S||"",objectFit:F.objectFit})+'")':'url("'+w+'")',U=q?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},T=generateImgAttrs({config:r,src:l,unoptimized:u,width:N,quality:G,sizes:s,loader:D}),V={...j,loading:W?"lazy":c,fetchPriority:_,width:N,height:B,decoding:"async",className:f,style:{...F,...U},sizes:T.sizes,srcSet:T.srcSet,src:T.src},J={unoptimized:u,priority:d,placeholder:w,fill:h};return{props:V,meta:J}}},1235:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,l=i?40*i:t,s=n?40*n:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},2647:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return s}});let i=r(8754),n=r(3560),o=r(9941),a=r(2715),l=i._(r(7791)),unstable_getImgProps=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=a.Image},7791:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},5675:function(e,t,r){e.exports=r(2647)}}]);