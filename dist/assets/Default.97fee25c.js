import{_ as te}from"./_plugin-vue_export-helper.cdc0426e.js";import{d as z,m as fe,a as ve,b as ae,c as O,e as U,p as le,u as q,t as k,f as he,g as be,h as oe,r as G,i as _e,j as T,k as F,l as t,n as Q,o as f,q as h,w as a,V as A,s as V,v as o,x as d,y as l,z as ye,A as m,B as _,I as X,C as ke,D as pe,E as Ce,F as se,G as ne,H as Ve,J as ie,M as $e,K as Se,L as Te,N,O as Be,P as xe,Q as we,R as Ie,S as Le,T as Ae,U as Ne,W as Pe,X as Re,Y as Z,Z as Ee,_ as ee,$ as De,a0 as ze,a1 as L,a2 as Fe,a3 as He,a4 as Me,a5 as Ge,a6 as Oe}from"./index.65591d9f.js";import{V as Ue,a as E}from"./VCol.0a703fe7.js";import{V as j}from"./VRow.5cef0e33.js";import{m as Ye,u as Xe,V as je,a as We,c as qe}from"./VToolbar.194889e1.js";import{V as W,a as Qe,b as Je,c as Ke}from"./VNavigationDrawer.7d4bbb4b.js";import{c as Ze}from"./caret.3d6b4b8a.js";import{V as et,_ as tt}from"./VSlideGroup.dd242949.js";import{V as at,a as lt}from"./VCard.fddf5b7d.js";import{V as ot}from"./VSpacer.5f77568e.js";import"./ssrBoot.136fa701.js";const st=z({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...fe(),...ve(),...Ye(),...ae(),...O({tag:"footer"}),...U()},setup(e,s){let{slots:u}=s;const{themeClasses:c}=le(e),{backgroundColorClasses:r,backgroundColorStyles:g}=q(k(e,"color")),{borderClasses:n}=he(e),{elevationClasses:i}=be(e),{roundedClasses:v}=oe(e),$=G(32),{resizeRef:b}=_e(y=>{!y.length||($.value=y[0].target.clientHeight)}),p=T(()=>e.height==="auto"?$.value:parseInt(e.height,10)),{layoutItemStyles:C}=Xe({id:e.name,order:T(()=>parseInt(e.order,10)),position:T(()=>"bottom"),layoutSize:p,elementSize:T(()=>e.height==="auto"?void 0:p.value),active:T(()=>e.app),absolute:k(e,"absolute")});return F(()=>t(e.tag,{ref:b,class:["v-footer",c.value,r.value,n.value,i.value,v.value],style:[g.value,e.app?C.value:void 0]},u)),{}}}),nt={data(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}},methods:{scrollToTop(){window.scrollTo(0,0)}}},it={class:"bg-darkme pt-7"},rt={class:"text-h7"},dt={class:"text-h7"},ut={class:"text-h7"},ct={class:"text-h7"},mt={class:"text-center"};function gt(e,s,u,c,r,g){const n=Q("router-link");return f(),h(W,null,{default:a(()=>[t(A),V("section",it,[t(Ue,null,{default:a(()=>[t(j,null,{default:a(()=>[t(E,{cols:"12",md:"3"},{default:a(()=>[V("h3",rt,o(e.$t("message.CATEGORIES")),1),t(d,null,{default:a(()=>[l(o(e.$t("message.smartphones")),1)]),_:1}),t(d,null,{default:a(()=>[l(o(e.$t("message.laptops")),1)]),_:1}),t(d,null,{default:a(()=>[l(o(e.$t("message.home-decoration")),1)]),_:1}),t(d,null,{default:a(()=>[l(o(e.$t("message.skincare")),1)]),_:1}),t(d,null,{default:a(()=>[l(o(e.$t("message.groceries")),1)]),_:1})]),_:1}),t(E,{cols:"12",md:"3"},{default:a(()=>[V("h3",dt,o(e.$t("message.help")),1),t(d,null,{default:a(()=>[l(o(e.$t("message.Track Order")),1)]),_:1}),t(d,null,{default:a(()=>[l(o(e.$t("message.Shipping")),1)]),_:1}),t(d,null,{default:a(()=>[l(o(e.$t("message.FAQs")),1)]),_:1})]),_:1}),t(E,{cols:"12",md:"3"},{default:a(()=>[V("h3",ut,o(e.$t("message.GET IN TOUCH")),1),t(d,{class:"font-weight-thin ma-2"},{default:a(()=>[l(o(e.$t("message.bodyTouch")),1)]),_:1})]),_:1}),t(E,{cols:"12",md:"3"},{default:a(()=>[V("h3",ct,o(e.$t("message.NEWSLETTER")),1),t(ye,{color:"indigo",placeholder:"example@gmail.com",variant:"underlined"}),t(m,{rounded:"pill",block:"",color:"purpleme"},{default:a(()=>[l(o(e.$t("message.SUBSCRIBE")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),t(st,{class:"text-center bg-darkme pt-7"},{default:a(()=>[t(j,null,{default:a(()=>[t(E,{class:"text-center d-flex flex-column"},{default:a(()=>[t(W,null,{default:a(()=>[t(m,{pills:"",icon:"",variant:"text",href:"https://github.com/engrahafdouia/",target:"_blank"},{default:a(()=>[t(_,null,{default:a(()=>[l(" mdi-github ")]),_:1})]),_:1}),t(m,{icon:"",variant:"text",href:"www.linkedin.com/in/rahaf-douair-5923001bb ",target:"_blank"},{default:a(()=>[t(_,null,{default:a(()=>[l(" mdi-linkedin ")]),_:1})]),_:1})]),_:1}),V("div",mt,[l(o(new Date().getFullYear())+" \u2014 ",1),V("strong",null,[l(o(e.$t("message.Design By"))+" ",1),t(n,{to:"/about",color:"indigo"},{default:a(()=>[l(o(e.$t("message.RAHAF DOUAIR")),1)]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})}const ft=te(nt,[["render",gt]]);const vt=z({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:X,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...ke({location:"top end"}),...ae(),...O(),...U(),...pe({transition:"scale-rotate-transition"})},setup(e,s){const{backgroundColorClasses:u,backgroundColorStyles:c}=q(k(e,"color")),{roundedClasses:r}=oe(e),{t:g}=Ce(),{textColorClasses:n,textColorStyles:i}=se(k(e,"textColor")),{themeClasses:v}=ne(),{locationStyles:$}=Ve(e,!0,b=>{var C,y;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(b)?+((C=e.offsetY)!=null?C:0):["left","right"].includes(b)?+((y=e.offsetX)!=null?y:0):0)});return F(()=>{var b,p,C,y;const S=Number(e.content),P=!e.max||isNaN(S)?e.content:S<=e.max?S:`${e.max}+`,[R,Y]=ie(s.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,N({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},Y),{default:()=>[t("div",{class:"v-badge__wrapper"},[(b=(p=s.slots).default)==null?void 0:b.call(p),t($e,{transition:e.transition},{default:()=>[Se(t("span",N({class:["v-badge__badge",v.value,u.value,r.value,n.value],style:[c.value,i.value,e.inline?{}:$.value],"aria-atomic":"true","aria-label":g(e.label,S),"aria-live":"polite",role:"status"},R),[e.dot?void 0:s.slots.badge?(C=(y=s.slots).badge)==null?void 0:C.call(y):e.icon?t(_,{icon:e.icon},null):P]),[[Te,e.modelValue]])]})])]})}),{}}});const re=Symbol.for("vuetify:v-tabs"),D=z({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:X,appendIcon:X,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...O(),...Be(),...xe({selectedClass:"v-tab--selected"}),...U()},setup(e,s){let{slots:u,attrs:c}=s;const{textColorClasses:r,textColorStyles:g}=se(e,"sliderColor"),n=T(()=>e.direction==="horizontal"),i=G(!1),v=G(),$=G();function b(p){let{value:C}=p;if(i.value=C,C){var y,S;const P=(y=v.value)==null||(S=y.$el.parentElement)==null?void 0:S.querySelector(".v-tab--selected .v-tab__slider"),R=$.value;if(!P||!R)return;const Y=getComputedStyle(P).color,B=P.getBoundingClientRect(),x=R.getBoundingClientRect(),H=n.value?"x":"y",M=n.value?"X":"Y",J=n.value?"right":"bottom",w=n.value?"width":"height",de=B[H],ue=x[H],I=de>ue?B[J]-x[J]:B[H]-x[H],ce=Math.sign(I)>0?n.value?"right":"bottom":Math.sign(I)<0?n.value?"left":"top":"center",me=(Math.abs(I)+(Math.sign(I)<0?B[w]:x[w]))/Math.max(B[w],x[w]),ge=B[w]/x[w],K=1.5;we(R,{backgroundColor:[Y,""],transform:[`translate${M}(${I}px) scale${M}(${ge})`,`translate${M}(${I/K}px) scale${M}(${(me-1)/K+1})`,""],transformOrigin:Array(3).fill(ce)},{duration:225,easing:Ie})}}return F(()=>{const[p]=ie(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return t(m,N({_as:"VTab",symbol:re,ref:v,class:["v-tab"],tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},p,c,{"onGroup:selected":b}),{default:()=>[u.default?u.default():e.title,!e.hideSlider&&t("div",{ref:$,class:["v-tab__slider",r.value],style:g.value},null)]})}),{}}});function ht(e){return e?e.map(s=>typeof s=="string"?{title:s,value:s}:s):[]}const bt=z({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...Le(),...O()},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:u}=s;const c=Ae(e,"modelValue"),r=T(()=>ht(e.items)),{densityClasses:g}=Ne(e),{backgroundColorClasses:n,backgroundColorStyles:i}=q(k(e,"bgColor"));return Pe({VTab:{color:k(e,"color"),direction:k(e,"direction"),stacked:k(e,"stacked"),fixed:k(e,"fixedTabs"),sliderColor:k(e,"sliderColor"),hideSlider:k(e,"hideSlider")}}),F(()=>t(et,{modelValue:c.value,"onUpdate:modelValue":v=>c.value=v,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},g.value,n.value],style:[{"--v-tabs-height":Re(e.height)},i.value],role:"tablist",symbol:re,mandatory:e.mandatory,direction:e.direction},{default:()=>[u.default?u.default():r.value.map(v=>t(D,N(v,{key:v.title}),null))]})),{}}}),_t={data(){return{expand:!1,expand2:!1,index:0,image:null,images:[{id:1,src:"/img/logo_black.svg",alt:"Natural Grove Green Trees Path"},{id:2,src:"/img/Logo White-p-500.png",alt:"stockafbeelding cascades in nationaal park plitvice"}],categories:["profile","logout"],drawer:!1,dialog:!1,tab:null,rail:!0,cruds:[["Arabic","mdi-plus-outline"],["English","mdi-alpha-e"]]}},computed:{...Z(Ze,["itemsCount"]),...Z(ee,["isLoggedIn","user"])},mounted(){this.switchImage()},setup(){const e=ne();return{theme:e,toggleTheme:()=>e.global.name.value=e.global.current.value.dark?"light":"dark"}},methods:{...Ee(ee,["logout"]),toggleLocale(){this.$i18n.locale=this.$i18n.locale==="ar"?"en":"ar",this.$vuetify.locale.current=this.$vuetify.locale.current==="ar"?"en":"ar"},switchImage(){this.image=this.images[this.index],this.index=(this.index+1)%this.images.length}}},yt={class:"mx-auto text-center"},kt={class:"text-caption mt-1"};function pt(e,s,u,c,r,g){const n=Q("router-link");return f(),De(Ge,null,[t(Je,{app:""},{default:a(()=>[t(Qe,{onClick:s[0]||(s[0]=i=>r.drawer=!0),class:"d-flex d-sm-none"}),t(je,null,{default:a(()=>[r.image?(f(),h(ze,{width:"190px",key:r.image.id,class:"image",src:r.image.src,alt:"image.alt"},null,8,["src"])):L("",!0)]),_:1}),t(bt,{modelValue:r.tab,"onUpdate:modelValue":s[1]||(s[1]=i=>r.tab=i),"align-with-title":"",class:"d-none d-sm-flex"},{default:a(()=>[t(n,{to:"/"},{default:a(()=>[t(D,{class:"mytab"},{default:a(()=>[l(o(e.$t("message.Home")),1)]),_:1})]),_:1}),t(n,{to:{name:"about"}},{default:a(()=>[t(D,{class:"mytab"},{default:a(()=>[l(o(e.$t("message.About")),1)]),_:1})]),_:1}),t(n,{to:"/products"},{default:a(()=>[t(D,{class:"mytab"},{default:a(()=>[l(o(e.$t("message.Products")),1)]),_:1})]),_:1}),t(n,{to:"/contact"},{default:a(()=>[t(D,{class:"mytab"},{default:a(()=>[l(o(e.$t("message.Contact")),1)]),_:1})]),_:1}),t(j,{justify:"center"},{default:a(()=>[t(Fe,{"min-width":"200px",rounded:""},{activator:a(({props:i})=>[t(m,N({rounded:"",class:"mt-7",variant:"text","prepend-icon":"mdi-account"},i),null,16)]),default:a(()=>[t(at,null,{default:a(()=>[t(lt,null,{default:a(()=>[V("div",yt,[t(_,null,{default:a(()=>[l("mdi-account")]),_:1}),V("h3",null,o(e.user.firstName),1),V("p",kt,o(e.user.email),1),t(A,{class:"my-3"}),e.isLoggedIn?(f(),h(m,{key:0,rounded:"",variant:"text",to:"/profile"},{default:a(()=>[l(o(e.$t("message.profile")),1)]),_:1})):L("",!0),t(A,{class:"my-3"}),e.user.username==="kminchelle"?(f(),h(m,{key:1,rounded:"",variant:"text",to:"/admin"},{default:a(()=>[l("Dashboard ")]),_:1})):L("",!0),t(A,{class:"my-3"}),e.isLoggedIn?(f(),h(m,{key:2,rounded:"",variant:"text",to:"/",onClick:e.logout},{default:a(()=>[l(o(e.$t("message.logout")),1)]),_:1},8,["onClick"])):(f(),h(m,{key:3,variant:"text",rounded:"",to:"/login"},{default:a(()=>[l(o(e.$t("message.Login")),1)]),_:1})),t(A,{class:"my-3"})])]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{variant:"text",stacked:"",onClick:g.toggleLocale},{default:a(()=>[t(_,null,{default:a(()=>[l(o(e.$i18n.locale==="en"?"mdi-abjad-arabic":"mdi-alpha-e"),1)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue"]),t(ot),t(m,{icon:"",to:"/cart"},{default:a(()=>[t(vt,{content:e.itemsCount,floating:"",color:"indigo-lighten-1"},{default:a(()=>[t(_,null,{default:a(()=>[l("mdi-cart")]),_:1})]),_:1},8,["content"])]),_:1}),t(m,{pills:"",variant:"text",stacked:"",onClick:g.switchImage},{default:a(()=>[t(_,{onClick:c.toggleTheme},{default:a(()=>[l("mdi-theme-light-dark")]),_:1},8,["onClick"])]),_:1},8,["onClick"])]),_:1}),t(Ke,{modelValue:r.drawer,"onUpdate:modelValue":s[2]||(s[2]=i=>r.drawer=i),temporary:"",width:"250",height:"100vh"},{default:a(()=>[t(He,{nav:"",dense:""},{default:a(()=>[e.isLoggedIn?(f(),h(d,{key:0,class:"bg-purpleme","prepend-avatar":tt,nav:""},{default:a(()=>[e.isLoggedIn?(f(),h(m,{key:0,rounded:"",variant:"text",to:"/profile"},{default:a(()=>[l(o(e.user.firstName),1)]),_:1})):L("",!0),e.user.username==="kminchelle"?(f(),h(m,{key:1,rounded:"",variant:"text",to:"/admin"},{default:a(()=>[l("Dashboard ")]),_:1})):L("",!0),t(A,{class:"my-3"})]),_:1})):L("",!0),t(d,{to:"/",class:"myicon"},{default:a(()=>[t(_,null,{default:a(()=>[l("mdi-home")]),_:1}),l(" "+o(e.$t("message.Home")),1)]),_:1}),t(d,{to:"/about",class:"myicon"},{default:a(()=>[t(_,null,{default:a(()=>[l("mdi-earth")]),_:1}),l(" "+o(e.$t("message.About")),1)]),_:1}),t(d,{to:"/products",class:"myicon"},{default:a(()=>[t(_,null,{default:a(()=>[l("mdi-database")]),_:1}),l(" "+o(e.$t("message.Products")),1)]),_:1}),t(d,{to:"/contact",class:"myicon"},{default:a(()=>[t(_,null,{default:a(()=>[l("mdi-phone")]),_:1}),l(" "+o(e.$t("message.Contact")),1)]),_:1}),t(Me,{value:"Actions"},{activator:a(({props:i})=>[t(d,N(i,{"prepend-icon":"mdi-earth"}),{default:a(()=>[l(o(e.$t("message.settings")),1)]),_:2},1040)]),default:a(()=>[t(d,{onClick:g.toggleLocale},{default:a(()=>[l(o(e.$i18n.locale==="en"?"English":"Arabic"),1)]),_:1},8,["onClick"])]),_:1}),t(d,{to:"/cart"},{default:a(()=>[t(_,null,{default:a(()=>[l("mdi-cart")]),_:1}),l(o(e.$t("message.Cart")),1)]),_:1}),t(d,null,{default:a(()=>[e.isLoggedIn?(f(),h(m,{key:0,rounded:"pill",class:"bg-purpleme",variant:"text",to:"/",onClick:e.logout},{default:a(()=>[l(o(e.$t("message.logout")),1)]),_:1},8,["onClick"])):(f(),h(m,{key:1,rounded:"pill",class:"bg-purpleme text-right",variant:"text",to:"/login"},{default:a(()=>[l(o(e.$t("message.Login")),1)]),_:1}))]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const Ct=te(_t,[["render",pt]]),Vt={__name:"View",setup(e){return(s,u)=>{const c=Q("router-view");return f(),h(W,null,{default:a(()=>[t(c)]),_:1})}}};const $t=z({name:"VApp",props:{...We({fullHeight:!0}),...U()},setup(e,s){let{slots:u}=s;const c=le(e),{layoutClasses:r,layoutStyles:g,getLayoutItem:n,items:i,layoutRef:v}=qe(e),{rtlClasses:$}=Oe();return F(()=>{var b;return t("div",{ref:v,class:["v-application",c.themeClasses.value,r.value,$.value],style:g.value},[t("div",{class:"v-application__wrap"},[(b=u.default)==null?void 0:b.call(u)])])}),{getLayoutItem:n,items:i,theme:c}}}),Dt={__name:"Default",setup(e){return(s,u)=>(f(),h($t,null,{default:a(()=>[t(Ct),t(Vt),t(ft)]),_:1}))}};export{Dt as default};
