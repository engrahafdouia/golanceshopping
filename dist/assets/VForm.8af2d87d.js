import{d as v,b7 as b,b8 as p,r as h,k as V,l as F,b9 as R}from"./index.65591d9f.js";const k=v({name:"VForm",props:{...b()},emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,i){let{slots:s,emit:u}=i;const n=p(r),o=h();function d(t){t.preventDefault(),n.reset()}function f(t){const a=t,e=n.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),u("submit",a),a.defaultPrevented||e.then(m=>{let{valid:c}=m;if(c){var l;(l=o.value)==null||l.submit()}}),a.preventDefault()}return V(()=>{var t;return F("form",{ref:o,class:"v-form",novalidate:!0,onReset:d,onSubmit:f},[(t=s.default)==null?void 0:t.call(s,n)])}),R(n,o)}});export{k as V};
