import{d as Y,c as j,k as N,l as S,a9 as oe,r as M,T as q,j as y,t as P,N as F,I as le,A as ue,X as H,aa as U,ab as I,ac as G,ad as ie,m as se,a as re,b as ce,e as ve,a6 as de,p as me,f as fe,u as X,g as he,ae as ge,h as ye,af as be,ag as we,ah as pe,W as Se,ai as Te,a5 as Ve,aj as ke}from"./index.65591d9f.js";import{b as Be,d as Me,m as J,u as K,f as Ee,e as xe}from"./VToolbar.194889e1.js";import{u as Q}from"./ssrBoot.136fa701.js";const We=Y({name:"VMain",props:{scrollable:Boolean,...j({tag:"main"})},setup(e,s){let{slots:o}=s;const{mainStyles:n}=Be(),{ssrBootStyles:a}=Q();return N(()=>{var t,r;return S(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[n.value,a.value]},{default:()=>[e.scrollable?S("div",{class:"v-main__scroller"},[(t=o.default)==null?void 0:t.call(o)]):(r=o.default)==null?void 0:r.call(o)]})}),{}}});const Ae=oe()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Me(),...J(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:o}=s;const n=M(),a=q(e,"modelValue"),t=y(()=>{var v,d;var m,w;const f=(v=(m=n.value)==null?void 0:m.contentHeight)!=null?v:0,i=(d=(w=n.value)==null?void 0:w.extensionHeight)!=null?d:0;return f+i}),{layoutItemStyles:r}=K({id:e.name,order:y(()=>parseInt(e.order,10)),position:P(e,"location"),layoutSize:t,elementSize:t,active:a,absolute:P(e,"absolute")});return N(()=>{const[m]=Ee(e);return S(xe,F({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...r.value,height:void 0}},m),o)}),{}}}),De=Y({name:"VAppBarNavIcon",props:{icon:{type:le,default:"$menu"}},setup(e,s){let{slots:o}=s;return N(()=>S(ue,{class:"v-app-bar-nav-icon",icon:e.icon},o)),{}}});function _e(e){let{rootEl:s,isSticky:o,layoutItemStyles:n}=e;const a=M(!1),t=M(0),r=y(()=>{const f=typeof a.value=="boolean"?"top":a.value;return[o.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[f]:H(t.value)}:{top:n.value.top}]});U(()=>{I(o,f=>{f?window.addEventListener("scroll",w,{passive:!0}):window.removeEventListener("scroll",w)},{immediate:!0})}),G(()=>{document.removeEventListener("scroll",w)});let m=0;function w(){var g;const f=m>window.scrollY?"up":"down",i=s.value.getBoundingClientRect(),v=parseFloat((g=n.value.top)!=null?g:0),d=window.scrollY-Math.max(0,t.value-v),h=i.height+Math.max(t.value,v)-window.scrollY-window.innerHeight;i.height<window.innerHeight-v?(a.value="top",t.value=v):f==="up"&&a.value==="bottom"||f==="down"&&a.value==="top"?(t.value=window.scrollY+i.top,a.value=!0):f==="down"&&h<=0?(t.value=0,a.value="bottom"):f==="up"&&d<=0&&(t.value=i.top+d,a.value="top"),m=window.scrollY}return{isStuck:a,stickyStyles:r}}const $e=100,Re=20;function z(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function Z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let o=e.length-1;o>0;o--){if(e[o].t===e[o-1].t)continue;const n=z(s),a=(e[o].d-e[o-1].d)/(e[o].t-e[o-1].t);s+=(a-n)*Math.abs(a),o===e.length-1&&(s*=.5)}return z(s)*1e3}function Ce(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{var m;((m=e[t.identifier])!=null?m:e[t.identifier]=new ie(Re)).push([a.timeStamp,t])})}function o(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function n(a){var t;const r=(t=e[a])==null?void 0:t.values().reverse();if(!r)throw new Error(`No samples for touch id ${a}`);const m=r[0],w=[],f=[];for(const i of r){if(m[0]-i[0]>$e)break;w.push({t:i[0],d:i[1].clientX}),f.push({t:i[0],d:i[1].clientY})}return{x:Z(w),y:Z(f),get direction(){const{x:i,y:v}=this,[d,h]=[Math.abs(i),Math.abs(v)];return d>h&&i>=0?"right":d>h&&i<=0?"left":h>d&&v>=0?"down":h>d&&v<=0?"up":He()}}}return{addMovement:s,endTouch:o,getVelocity:n}}function He(){throw new Error}function Ie(e){let{isActive:s,isTemporary:o,width:n,touchless:a,position:t}=e;U(()=>{window.addEventListener("touchstart",B,{passive:!0}),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",E,{passive:!0})}),G(()=>{window.removeEventListener("touchstart",B),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",E)});const r=y(()=>["left","right"].includes(t.value)),{addMovement:m,endTouch:w,getVelocity:f}=Ce();let i=!1;const v=M(!1),d=M(0),h=M(0);let g;function R(l,u){return(t.value==="left"?l:t.value==="right"?document.documentElement.clientWidth-l:t.value==="top"?l:t.value==="bottom"?document.documentElement.clientHeight-l:$())-(u?n.value:0)}function C(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const c=t.value==="left"?(l-h.value)/n.value:t.value==="right"?(document.documentElement.clientWidth-l-h.value)/n.value:t.value==="top"?(l-h.value)/n.value:t.value==="bottom"?(document.documentElement.clientHeight-l-h.value)/n.value:$();return u?Math.max(0,Math.min(1,c)):c}function B(l){if(a.value)return;const u=l.changedTouches[0].clientX,c=l.changedTouches[0].clientY,b=25,V=t.value==="left"?u<b:t.value==="right"?u>document.documentElement.clientWidth-b:t.value==="top"?c<b:t.value==="bottom"?c>document.documentElement.clientHeight-b:$(),k=s.value&&(t.value==="left"?u<n.value:t.value==="right"?u>document.documentElement.clientWidth-n.value:t.value==="top"?c<n.value:t.value==="bottom"?c>document.documentElement.clientHeight-n.value:$());(V||k||s.value&&o.value)&&(i=!0,g=[u,c],h.value=R(r.value?u:c,s.value),d.value=C(r.value?u:c),w(l),m(l))}function x(l){const u=l.changedTouches[0].clientX,c=l.changedTouches[0].clientY;if(i){if(!l.cancelable){i=!1;return}const V=Math.abs(u-g[0]),k=Math.abs(c-g[1]);(r.value?V>k&&V>3:k>V&&k>3)?(v.value=!0,i=!1):(r.value?k:V)>3&&(i=!1)}if(!v.value)return;l.preventDefault(),m(l);const b=C(r.value?u:c,!1);d.value=Math.max(0,Math.min(1,b)),b>1?h.value=R(r.value?u:c,!0):b<0&&(h.value=R(r.value?u:c,!1))}function E(l){if(i=!1,!v.value)return;m(l),v.value=!1;const u=f(l.changedTouches[0].identifier),c=Math.abs(u.x),b=Math.abs(u.y);(r.value?c>b&&c>400:b>c&&b>3)?s.value=u.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||$()):s.value=d.value>.5}const T=y(()=>v.value?{transform:t.value==="left"?`translateX(calc(-100% + ${d.value*n.value}px))`:t.value==="right"?`translateX(calc(100% - ${d.value*n.value}px))`:t.value==="top"?`translateY(calc(-100% + ${d.value*n.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${d.value*n.value}px))`:$(),transition:"none"}:void 0);return{isDragging:v,dragProgress:d,dragStyles:T}}function $(){throw new Error}const Pe=["start","end","left","right","top","bottom"],Oe=Y({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Pe.includes(e)},sticky:Boolean,...se(),...re(),...J(),...ce(),...j({tag:"nav"}),...ve()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:o,emit:n,slots:a}=s;const{isRtl:t}=de(),{themeClasses:r}=me(e),{borderClasses:m}=fe(e),{backgroundColorClasses:w,backgroundColorStyles:f}=X(P(e,"color")),{elevationClasses:i}=he(e),{mobile:v}=ge(),{roundedClasses:d}=ye(e),h=be(),g=q(e,"modelValue",null,p=>!!p),{ssrBootStyles:R}=Q(),C=M(),B=M(!1),x=y(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),E=y(()=>we(e.location,t.value)),T=y(()=>!e.permanent&&(v.value||e.temporary)),l=y(()=>e.sticky&&!T.value&&E.value!=="bottom");e.expandOnHover&&e.rail!=null&&I(B,p=>n("update:rail",!p)),e.disableResizeWatcher||I(T,p=>!e.permanent&&ke(()=>g.value=!p)),!e.disableRouteWatcher&&h&&I(h.currentRoute,()=>T.value&&(g.value=!1)),I(()=>e.permanent,p=>{p&&(g.value=!0)}),pe(()=>{e.modelValue!=null||T.value||(g.value=e.permanent||!v.value)});const{isDragging:u,dragProgress:c,dragStyles:b}=Ie({isActive:g,isTemporary:T,width:x,touchless:P(e,"touchless"),position:E}),V=y(()=>{const p=T.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):x.value;return u.value?p*c.value:p}),{layoutItemStyles:k,layoutRect:_,layoutItemScrimStyles:ee}=K({id:e.name,order:y(()=>parseInt(e.order,10)),position:E,layoutSize:V,elementSize:x,active:y(()=>g.value||u.value),disableTransitions:y(()=>u.value),absolute:y(()=>e.absolute||l.value&&typeof L.value!="string")}),{isStuck:L,stickyStyles:te}=_e({rootEl:C,isSticky:l,layoutItemStyles:k}),W=X(y(()=>typeof e.scrim=="string"?e.scrim:null)),ae=y(()=>({...u.value?{opacity:c.value*.2,transition:"none"}:void 0,..._.value?{left:H(_.value.left),right:H(_.value.right),top:H(_.value.top),bottom:H(_.value.bottom)}:void 0,...ee.value}));return Se({VList:{bgColor:"transparent"}}),N(()=>{var p,A,D,O;const ne=a.image||e.image;return S(Ve,null,[S(e.tag,F({ref:C,onMouseenter:()=>B.value=!0,onMouseleave:()=>B.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${E.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":T.value,"v-navigation-drawer--active":g.value,"v-navigation-drawer--sticky":l.value},r.value,w.value,m.value,i.value,d.value],style:[f.value,k.value,b.value,R.value,te.value]},o),{default:()=>[ne&&S("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(p=a.image)==null?void 0:p.call(a,{image:e.image}):S("img",{src:e.image,alt:""},null)]),a.prepend&&S("div",{class:"v-navigation-drawer__prepend"},[(A=a.prepend)==null?void 0:A.call(a)]),S("div",{class:"v-navigation-drawer__content"},[(D=a.default)==null?void 0:D.call(a)]),a.append&&S("div",{class:"v-navigation-drawer__append"},[(O=a.append)==null?void 0:O.call(a)])]}),S(Te,{name:"fade-transition"},{default:()=>[T.value&&(u.value||g.value)&&!!e.scrim&&S("div",{class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[ae.value,W.backgroundColorStyles.value],onClick:()=>g.value=!1},null)]})])}),{isStuck:L}}});export{We as V,De as a,Ae as b,Oe as c};
