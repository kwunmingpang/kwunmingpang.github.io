(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{2607:function(e,t,r){"use strict";r.d(t,{Z:function(){return L}});var n=r(7462),o=r(3366),a=r(7294),l=r(512),i=r(8510),s=r(2591),c=r(1657),u=r(1705),p=r(2068),d=r(9632),m=r(7326),f=r(4578),h=r(220);function getChildMapping(e,t){var r=Object.create(null);return e&&a.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=t&&(0,a.isValidElement)(e)?t(e):e}),r}function mergeChildMappings(e,t){function getValueForKey(r){return r in t?t[r]:e[r]}e=e||{},t=t||{};var r,n=Object.create(null),o=[];for(var a in e)a in t?o.length&&(n[a]=o,o=[]):o.push(a);var l={};for(var i in t){if(n[i])for(r=0;r<n[i].length;r++){var s=n[i][r];l[n[i][r]]=getValueForKey(s)}l[i]=getValueForKey(i)}for(r=0;r<o.length;r++)l[o[r]]=getValueForKey(o[r]);return l}function getProp(e,t,r){return null!=r[t]?r[t]:e.props[t]}function getInitialChildMapping(e,t){return getChildMapping(e.children,function(r){return(0,a.cloneElement)(r,{onExited:t.bind(null,r),in:!0,appear:getProp(r,"appear",e),enter:getProp(r,"enter",e),exit:getProp(r,"exit",e)})})}function getNextChildMapping(e,t,r){var n=getChildMapping(e.children),o=mergeChildMappings(t,n);return Object.keys(o).forEach(function(l){var i=o[l];if((0,a.isValidElement)(i)){var s=l in t,c=l in n,u=t[l],p=(0,a.isValidElement)(u)&&!u.props.in;c&&(!s||p)?o[l]=(0,a.cloneElement)(i,{onExited:r.bind(null,i),in:!0,exit:getProp(i,"exit",e),enter:getProp(i,"enter",e)}):c||!s||p?c&&s&&(0,a.isValidElement)(u)&&(o[l]=(0,a.cloneElement)(i,{onExited:r.bind(null,i),in:u.props.in,exit:getProp(i,"exit",e),enter:getProp(i,"enter",e)})):o[l]=(0,a.cloneElement)(i,{in:!1})}}),o}var v=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},g=function(e){function TransitionGroup(t,r){var n,o=(n=e.call(this,t,r)||this).handleExited.bind((0,m.Z)(n));return n.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},n}(0,f.Z)(TransitionGroup,e);var t=TransitionGroup.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},TransitionGroup.getDerivedStateFromProps=function(e,t){var r=t.children,n=t.handleExited;return{children:t.firstRender?getInitialChildMapping(e,n):getNextChildMapping(e,r,n),firstRender:!1}},t.handleExited=function(e,t){var r=getChildMapping(this.props.children);e.key in r||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var r=(0,n.Z)({},t.children);return delete r[e.key],{children:r}}))},t.render=function(){var e=this.props,t=e.component,r=e.childFactory,n=(0,o.Z)(e,["component","childFactory"]),l=this.state.contextValue,i=v(this.state.children).map(r);return(delete n.appear,delete n.enter,delete n.exit,null===t)?a.createElement(h.Z.Provider,{value:l},i):a.createElement(h.Z.Provider,{value:l},a.createElement(t,n,i))},TransitionGroup}(a.Component);g.propTypes={},g.defaultProps={component:"div",childFactory:function(e){return e}};var y=r(917),b=r(9192),C=r(5893),Z=r(1977);let $=(0,Z.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),k=["center","classes","className"],_=e=>e,x,S,R,M,w=(0,y.F4)(x||(x=_`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),P=(0,y.F4)(S||(S=_`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),E=(0,y.F4)(R||(R=_`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),I=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),T=(0,s.ZP)(function(e){let{className:t,classes:r,pulsate:n=!1,rippleX:o,rippleY:i,rippleSize:s,in:c,onExited:u,timeout:p}=e,[d,m]=a.useState(!1),f=(0,l.Z)(t,r.ripple,r.rippleVisible,n&&r.ripplePulsate),h=(0,l.Z)(r.child,d&&r.childLeaving,n&&r.childPulsate);return c||d||m(!0),a.useEffect(()=>{if(!c&&null!=u){let e=setTimeout(u,p);return()=>{clearTimeout(e)}}},[u,c,p]),(0,C.jsx)("span",{className:f,style:{width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},children:(0,C.jsx)("span",{className:h})})},{name:"MuiTouchRipple",slot:"Ripple"})(M||(M=_`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),$.rippleVisible,w,550,({theme:e})=>e.transitions.easing.easeInOut,$.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,$.child,$.childLeaving,P,550,({theme:e})=>e.transitions.easing.easeInOut,$.childPulsate,E,({theme:e})=>e.transitions.easing.easeInOut),D=a.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:u}=r,p=(0,o.Z)(r,k),[d,m]=a.useState([]),f=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[d]);let v=a.useRef(!1),y=(0,b.Z)(),Z=a.useRef(null),x=a.useRef(null),S=a.useCallback(e=>{let{pulsate:t,rippleX:r,rippleY:n,rippleSize:o,cb:a}=e;m(e=>[...e,(0,C.jsx)(T,{classes:{ripple:(0,l.Z)(s.ripple,$.ripple),rippleVisible:(0,l.Z)(s.rippleVisible,$.rippleVisible),ripplePulsate:(0,l.Z)(s.ripplePulsate,$.ripplePulsate),child:(0,l.Z)(s.child,$.child),childLeaving:(0,l.Z)(s.childLeaving,$.childLeaving),childPulsate:(0,l.Z)(s.childPulsate,$.childPulsate)},timeout:550,pulsate:t,rippleX:r,rippleY:n,rippleSize:o},f.current)]),f.current+=1,h.current=a},[s]),R=a.useCallback((e={},t={},r=()=>{})=>{let n,o,a;let{pulsate:l=!1,center:s=i||t.pulsate,fakeElement:c=!1}=t;if((null==e?void 0:e.type)==="mousedown"&&v.current){v.current=!1;return}(null==e?void 0:e.type)==="touchstart"&&(v.current=!0);let u=c?null:x.current,p=u?u.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(!s&&void 0!==e&&(0!==e.clientX||0!==e.clientY)&&(e.clientX||e.touches)){let{clientX:t,clientY:r}=e.touches&&e.touches.length>0?e.touches[0]:e;n=Math.round(t-p.left),o=Math.round(r-p.top)}else n=Math.round(p.width/2),o=Math.round(p.height/2);if(s)(a=Math.sqrt((2*p.width**2+p.height**2)/3))%2==0&&(a+=1);else{let e=2*Math.max(Math.abs((u?u.clientWidth:0)-n),n)+2,t=2*Math.max(Math.abs((u?u.clientHeight:0)-o),o)+2;a=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===Z.current&&(Z.current=()=>{S({pulsate:l,rippleX:n,rippleY:o,rippleSize:a,cb:r})},y.start(80,()=>{Z.current&&(Z.current(),Z.current=null)})):S({pulsate:l,rippleX:n,rippleY:o,rippleSize:a,cb:r})},[i,S,y]),M=a.useCallback(()=>{R({},{pulsate:!0})},[R]),w=a.useCallback((e,t)=>{if(y.clear(),(null==e?void 0:e.type)==="touchend"&&Z.current){Z.current(),Z.current=null,y.start(0,()=>{w(e,t)});return}Z.current=null,m(e=>e.length>0?e.slice(1):e),h.current=t},[y]);return a.useImperativeHandle(t,()=>({pulsate:M,start:R,stop:w}),[M,R,w]),(0,C.jsx)(I,(0,n.Z)({className:(0,l.Z)($.root,s.root,u),ref:x},p,{children:(0,C.jsx)(g,{component:null,exit:!0,children:d})}))});var F=r(8027);function getButtonBaseUtilityClass(e){return(0,F.ZP)("MuiButtonBase",e)}let O=(0,Z.Z)("MuiButtonBase",["root","disabled","focusVisible"]),N=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],useUtilityClasses=e=>{let{disabled:t,focusVisible:r,focusVisibleClassName:n,classes:o}=e,a=(0,i.Z)({root:["root",t&&"disabled",r&&"focusVisible"]},getButtonBaseUtilityClass,o);return r&&n&&(a.root+=` ${n}`),a},V=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),j=a.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:m,className:f,component:h="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:y=!1,focusRipple:b=!1,LinkComponent:Z="a",onBlur:$,onClick:k,onContextMenu:x,onDragLeave:S,onFocus:R,onFocusVisible:M,onKeyDown:w,onKeyUp:P,onMouseDown:E,onMouseLeave:I,onMouseUp:T,onTouchEnd:F,onTouchMove:O,onTouchStart:j,tabIndex:L=0,TouchRippleProps:A,touchRippleRef:z,type:B}=r,X=(0,o.Z)(r,N),H=a.useRef(null),U=a.useRef(null),q=(0,u.Z)(U,z),{isFocusVisibleRef:K,onFocus:W,onBlur:G,ref:Y}=(0,d.Z)(),[J,Q]=a.useState(!1);v&&J&&Q(!1),a.useImperativeHandle(i,()=>({focusVisible:()=>{Q(!0),H.current.focus()}}),[]);let[ee,et]=a.useState(!1);a.useEffect(()=>{et(!0)},[]);let er=ee&&!g&&!v;function useRippleHandler(e,t,r=y){return(0,p.Z)(n=>(t&&t(n),!r&&U.current&&U.current[e](n),!0))}a.useEffect(()=>{J&&b&&!g&&ee&&U.current.pulsate()},[g,b,J,ee]);let en=useRippleHandler("start",E),eo=useRippleHandler("stop",x),ea=useRippleHandler("stop",S),el=useRippleHandler("stop",T),ei=useRippleHandler("stop",e=>{J&&e.preventDefault(),I&&I(e)}),es=useRippleHandler("start",j),ec=useRippleHandler("stop",F),eu=useRippleHandler("stop",O),ep=useRippleHandler("stop",e=>{G(e),!1===K.current&&Q(!1),$&&$(e)},!1),ed=(0,p.Z)(e=>{H.current||(H.current=e.currentTarget),W(e),!0===K.current&&(Q(!0),M&&M(e)),R&&R(e)}),isNonNativeButton=()=>{let e=H.current;return h&&"button"!==h&&!("A"===e.tagName&&e.href)},em=a.useRef(!1),ef=(0,p.Z)(e=>{b&&!em.current&&J&&U.current&&" "===e.key&&(em.current=!0,U.current.stop(e,()=>{U.current.start(e)})),e.target===e.currentTarget&&isNonNativeButton()&&" "===e.key&&e.preventDefault(),w&&w(e),e.target===e.currentTarget&&isNonNativeButton()&&"Enter"===e.key&&!v&&(e.preventDefault(),k&&k(e))}),eh=(0,p.Z)(e=>{b&&" "===e.key&&U.current&&J&&!e.defaultPrevented&&(em.current=!1,U.current.stop(e,()=>{U.current.pulsate(e)})),P&&P(e),k&&e.target===e.currentTarget&&isNonNativeButton()&&" "===e.key&&!e.defaultPrevented&&k(e)}),ev=h;"button"===ev&&(X.href||X.to)&&(ev=Z);let eg={};"button"===ev?(eg.type=void 0===B?"button":B,eg.disabled=v):(X.href||X.to||(eg.role="button"),v&&(eg["aria-disabled"]=v));let ey=(0,u.Z)(t,Y,H),eb=(0,n.Z)({},r,{centerRipple:s,component:h,disabled:v,disableRipple:g,disableTouchRipple:y,focusRipple:b,tabIndex:L,focusVisible:J}),eC=useUtilityClasses(eb);return(0,C.jsxs)(V,(0,n.Z)({as:ev,className:(0,l.Z)(eC.root,f),ownerState:eb,onBlur:ep,onClick:k,onContextMenu:eo,onFocus:ed,onKeyDown:ef,onKeyUp:eh,onMouseDown:en,onMouseLeave:ei,onMouseUp:el,onDragLeave:ea,onTouchEnd:ec,onTouchMove:eu,onTouchStart:es,ref:ey,tabIndex:v?-1:L,type:B},eg,X,{children:[m,er?(0,C.jsx)(D,(0,n.Z)({ref:q,center:s},A)):null]}))});var L=j},7918:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(3366),o=r(7462),a=r(7294),l=r(512),i=r(8510),s=r(2101),c=r(8169),u=r(5893),p=(0,c.Z)((0,u.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),d=r(1705),m=r(8216),f=r(2607),h=r(1657),v=r(2591),g=r(1977),y=r(8027);function getChipUtilityClass(e){return(0,y.ZP)("MuiChip",e)}let b=(0,g.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),C=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],useUtilityClasses=e=>{let{classes:t,disabled:r,size:n,color:o,iconColor:a,onDelete:l,clickable:s,variant:c}=e,u={root:["root",c,r&&"disabled",`size${(0,m.Z)(n)}`,`color${(0,m.Z)(o)}`,s&&"clickable",s&&`clickableColor${(0,m.Z)(o)}`,l&&"deletable",l&&`deletableColor${(0,m.Z)(o)}`,`${c}${(0,m.Z)(o)}`],label:["label",`label${(0,m.Z)(n)}`],avatar:["avatar",`avatar${(0,m.Z)(n)}`,`avatarColor${(0,m.Z)(o)}`],icon:["icon",`icon${(0,m.Z)(n)}`,`iconColor${(0,m.Z)(a)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,m.Z)(n)}`,`deleteIconColor${(0,m.Z)(o)}`,`deleteIcon${(0,m.Z)(c)}Color${(0,m.Z)(o)}`]};return(0,i.Z)(u,getChipUtilityClass,t)},Z=(0,v.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{color:n,iconColor:o,clickable:a,onDelete:l,size:i,variant:s}=r;return[{[`& .${b.avatar}`]:t.avatar},{[`& .${b.avatar}`]:t[`avatar${(0,m.Z)(i)}`]},{[`& .${b.avatar}`]:t[`avatarColor${(0,m.Z)(n)}`]},{[`& .${b.icon}`]:t.icon},{[`& .${b.icon}`]:t[`icon${(0,m.Z)(i)}`]},{[`& .${b.icon}`]:t[`iconColor${(0,m.Z)(o)}`]},{[`& .${b.deleteIcon}`]:t.deleteIcon},{[`& .${b.deleteIcon}`]:t[`deleteIcon${(0,m.Z)(i)}`]},{[`& .${b.deleteIcon}`]:t[`deleteIconColor${(0,m.Z)(n)}`]},{[`& .${b.deleteIcon}`]:t[`deleteIcon${(0,m.Z)(s)}Color${(0,m.Z)(n)}`]},t.root,t[`size${(0,m.Z)(i)}`],t[`color${(0,m.Z)(n)}`],a&&t.clickable,a&&"default"!==n&&t[`clickableColor${(0,m.Z)(n)})`],l&&t.deletable,l&&"default"!==n&&t[`deletableColor${(0,m.Z)(n)}`],t[s],t[`${s}${(0,m.Z)(n)}`]]}})(({theme:e,ownerState:t})=>{let r="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,o.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${b.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:r,fontSize:e.typography.pxToRem(12)},[`& .${b.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${b.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${b.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${b.icon}`]:(0,o.Z)({marginLeft:5,marginRight:-6},"small"===t.size&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&(0,o.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:r},"default"!==t.color&&{color:"inherit"})),[`& .${b.deleteIcon}`]:(0,o.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,s.Fq)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,s.Fq)(e.palette.text.primary,.4)}},"small"===t.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==t.color&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:(0,s.Fq)(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},"small"===t.size&&{height:24},"default"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&"default"!==t.color&&{[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})},({theme:e,ownerState:t})=>(0,o.Z)({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&"default"!==t.color&&{[`&:hover, &.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}),({theme:e,ownerState:t})=>(0,o.Z)({},"outlined"===t.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${b.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${b.avatar}`]:{marginLeft:4},[`& .${b.avatarSmall}`]:{marginLeft:2},[`& .${b.icon}`]:{marginLeft:4},[`& .${b.iconSmall}`]:{marginLeft:2},[`& .${b.deleteIcon}`]:{marginRight:5},[`& .${b.deleteIconSmall}`]:{marginRight:3}},"outlined"===t.variant&&"default"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:(0,s.Fq)(e.palette[t.color].main,.7)}`,[`&.${b.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,s.Fq)(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${b.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:(0,s.Fq)(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}})),$=(0,v.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{let{ownerState:r}=e,{size:n}=r;return[t.label,t[`label${(0,m.Z)(n)}`]]}})(({ownerState:e})=>(0,o.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===e.variant&&{paddingLeft:11,paddingRight:11},"small"===e.size&&{paddingLeft:8,paddingRight:8},"small"===e.size&&"outlined"===e.variant&&{paddingLeft:7,paddingRight:7}));function isDeleteKeyboardEvent(e){return"Backspace"===e.key||"Delete"===e.key}let k=a.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiChip"}),{avatar:i,className:s,clickable:c,color:m="default",component:v,deleteIcon:g,disabled:y=!1,icon:b,label:k,onClick:x,onDelete:S,onKeyDown:R,onKeyUp:M,size:w="medium",variant:P="filled",tabIndex:E,skipFocusWhenDisabled:I=!1}=r,T=(0,n.Z)(r,C),D=a.useRef(null),F=(0,d.Z)(D,t),handleDeleteIconClick=e=>{e.stopPropagation(),S&&S(e)},O=!1!==c&&!!x||c,N=O||S?f.Z:v||"div",V=(0,o.Z)({},r,{component:N,disabled:y,size:w,color:m,iconColor:a.isValidElement(b)&&b.props.color||m,onDelete:!!S,clickable:O,variant:P}),j=useUtilityClasses(V),L=N===f.Z?(0,o.Z)({component:v||"div",focusVisibleClassName:j.focusVisible},S&&{disableRipple:!0}):{},A=null;S&&(A=g&&a.isValidElement(g)?a.cloneElement(g,{className:(0,l.Z)(g.props.className,j.deleteIcon),onClick:handleDeleteIconClick}):(0,u.jsx)(p,{className:(0,l.Z)(j.deleteIcon),onClick:handleDeleteIconClick}));let z=null;i&&a.isValidElement(i)&&(z=a.cloneElement(i,{className:(0,l.Z)(j.avatar,i.props.className)}));let B=null;return b&&a.isValidElement(b)&&(B=a.cloneElement(b,{className:(0,l.Z)(j.icon,b.props.className)})),(0,u.jsxs)(Z,(0,o.Z)({as:N,className:(0,l.Z)(j.root,s),disabled:!!O&&!!y||void 0,onClick:x,onKeyDown:e=>{e.currentTarget===e.target&&isDeleteKeyboardEvent(e)&&e.preventDefault(),R&&R(e)},onKeyUp:e=>{e.currentTarget===e.target&&(S&&isDeleteKeyboardEvent(e)?S(e):"Escape"===e.key&&D.current&&D.current.blur()),M&&M(e)},ref:F,tabIndex:I&&y?-1:E,ownerState:V},L,T,{children:[z||B,(0,u.jsx)($,{className:(0,l.Z)(j.label),ownerState:V,children:k}),A]}))});var x=k},8269:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(3366),o=r(7462),a=r(7294),l=r(512),i=r(4110),s=r(8027),c=r(8510),u=r(3534),p=r(7172),d=r(6523);let m=["ownerState"],f=["variants"],h=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function isEmpty(e){return 0===Object.keys(e).length}function isStringTag(e){return"string"==typeof e&&e.charCodeAt(0)>96}function shouldForwardProp(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let v=(0,p.Z)(),lowercaseFirstLetter=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function resolveTheme({defaultTheme:e,theme:t,themeId:r}){return isEmpty(t)?e:t[r]||t}function defaultOverridesResolver(e){return e?(t,r)=>r[e]:null}function processStyleArg(e,t){let{ownerState:r}=t,a=(0,n.Z)(t,m),l="function"==typeof e?e((0,o.Z)({ownerState:r},a)):e;if(Array.isArray(l))return l.flatMap(e=>processStyleArg(e,(0,o.Z)({ownerState:r},a)));if(l&&"object"==typeof l&&Array.isArray(l.variants)){let{variants:e=[]}=l,t=(0,n.Z)(l,f),i=t;return e.forEach(e=>{let t=!0;"function"==typeof e.props?t=e.props((0,o.Z)({ownerState:r},a,r)):Object.keys(e.props).forEach(n=>{(null==r?void 0:r[n])!==e.props[n]&&a[n]!==e.props[n]&&(t=!1)}),t&&(Array.isArray(i)||(i=[i]),i.push("function"==typeof e.style?e.style((0,o.Z)({ownerState:r},a,r)):e.style))}),i}return l}function createStyled(e={}){let{themeId:t,defaultTheme:r=v,rootShouldForwardProp:a=shouldForwardProp,slotShouldForwardProp:l=shouldForwardProp}=e,systemSx=e=>(0,d.Z)((0,o.Z)({},e,{theme:resolveTheme((0,o.Z)({},e,{defaultTheme:r,themeId:t}))}));return systemSx.__mui_systemSx=!0,(e,s={})=>{let c;(0,u.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:p,slot:d,skipVariantsResolver:m,skipSx:f,overridesResolver:v=defaultOverridesResolver(lowercaseFirstLetter(d))}=s,g=(0,n.Z)(s,h),y=void 0!==m?m:d&&"Root"!==d&&"root"!==d||!1,b=f||!1,C=shouldForwardProp;"Root"===d||"root"===d?C=a:d?C=l:isStringTag(e)&&(C=void 0);let Z=(0,u.default)(e,(0,o.Z)({shouldForwardProp:C,label:c},g)),transformStyleArg=e=>"function"==typeof e&&e.__emotion_real!==e||(0,i.P)(e)?n=>processStyleArg(e,(0,o.Z)({},n,{theme:resolveTheme({theme:n.theme,defaultTheme:r,themeId:t})})):e,muiStyledResolver=(n,...a)=>{let l=transformStyleArg(n),i=a?a.map(transformStyleArg):[];p&&v&&i.push(e=>{let n=resolveTheme((0,o.Z)({},e,{defaultTheme:r,themeId:t}));if(!n.components||!n.components[p]||!n.components[p].styleOverrides)return null;let a=n.components[p].styleOverrides,l={};return Object.entries(a).forEach(([t,r])=>{l[t]=processStyleArg(r,(0,o.Z)({},e,{theme:n}))}),v(e,l)}),p&&!y&&i.push(e=>{var n;let a=resolveTheme((0,o.Z)({},e,{defaultTheme:r,themeId:t})),l=null==a||null==(n=a.components)||null==(n=n[p])?void 0:n.variants;return processStyleArg({variants:l},(0,o.Z)({},e,{theme:a}))}),b||i.push(systemSx);let s=i.length-a.length;if(Array.isArray(n)&&s>0){let e=Array(s).fill("");(l=[...n,...e]).raw=[...n.raw,...e]}let c=Z(l,...i);return e.muiName&&(c.muiName=e.muiName),c};return Z.withConfig&&(muiStyledResolver.withConfig=Z.withConfig),muiStyledResolver}}let g=createStyled();var y=r(4065),b=r(9707),C=r(5408),Z=r(8700),$=r(5893);let k=["component","direction","spacing","divider","children","className","useFlexGap"],x=(0,p.Z)(),S=g("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function useThemePropsDefault(e){return(0,y.Z)({props:e,name:"MuiStack",defaultTheme:x})}function joinChildren(e,t){let r=a.Children.toArray(e).filter(Boolean);return r.reduce((e,n,o)=>(e.push(n),o<r.length-1&&e.push(a.cloneElement(t,{key:`separator-${o}`})),e),[])}let getSideFromDirection=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],style=({ownerState:e,theme:t})=>{let r=(0,o.Z)({display:"flex",flexDirection:"column"},(0,C.k9)({theme:t},(0,C.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let n=(0,Z.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),a=(0,C.P$)({values:e.direction,base:o}),l=(0,C.P$)({values:e.spacing,base:o});"object"==typeof a&&Object.keys(a).forEach((e,t,r)=>{let n=a[e];if(!n){let n=t>0?a[r[t-1]]:"column";a[e]=n}}),r=(0,i.Z)(r,(0,C.k9)({theme:t},l,(t,r)=>e.useFlexGap?{gap:(0,Z.NA)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${getSideFromDirection(r?a[r]:e.direction)}`]:(0,Z.NA)(n,t)}}))}return(0,C.dt)(t.breakpoints,r)};function createStack(e={}){let{createStyledComponent:t=S,useThemeProps:r=useThemePropsDefault,componentName:i="MuiStack"}=e,useUtilityClasses=()=>(0,c.Z)({root:["root"]},e=>(0,s.ZP)(i,e),{}),u=t(style),p=a.forwardRef(function(e,t){let a=r(e),i=(0,b.Z)(a),{component:s="div",direction:c="column",spacing:p=0,divider:d,children:m,className:f,useFlexGap:h=!1}=i,v=(0,n.Z)(i,k),g=useUtilityClasses();return(0,$.jsx)(u,(0,o.Z)({as:s,ownerState:{direction:c,spacing:p,useFlexGap:h},ref:t,className:(0,l.Z)(g.root,f)},v,{children:d?joinChildren(m,d):m}))});return p}var R=r(2591),M=r(1657);let w=createStack({createStyledComponent:(0,R.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,M.Z)({props:e,name:"MuiStack"})});var P=w},2746:function(e,t,r){e.exports.jsxRuntime=r(5893)},7326:function(e,t,r){"use strict";function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return _assertThisInitialized}})},5079:function(e,t,r){"use strict";r.d(t,{R:function(){return MDXRemote}});var n={};r.r(n),r.d(n,{MDXContext:function(){return l},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var o=r(7294),a=r(2746);let l=o.createContext({});function withMDXComponents(e){return boundMDXComponent;function boundMDXComponent(t){let r=useMDXComponents(t.components);return o.createElement(e,{...t,allComponents:r})}}function useMDXComponents(e){let t=o.useContext(l);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function MDXProvider({components:e,children:t,disableParentContext:r}){let n;return n=r?"function"==typeof e?e({}):e||i:useMDXComponents(e),o.createElement(l.Provider,{value:n},t)}function MDXRemote({compiledSource:e,frontmatter:t,scope:r,components:l={},lazy:i}){let[s,c]=(0,o.useState)(!i||"undefined"==typeof window);(0,o.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,o.useMemo)(()=>{let o=Object.assign({opts:{...n,...a.jsxRuntime}},{frontmatter:t},r),l=Object.keys(o),i=Object.values(o),s=Reflect.construct(Function,l.concat(`${e}`));return s.apply(s,i).default},[r,e]);if(!s)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let p=o.createElement(MDXProvider,{components:l},o.createElement(u,null));return i?o.createElement("div",null,p):p}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}}]);