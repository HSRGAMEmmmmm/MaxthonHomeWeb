import{y as i,af as m,ag as c,u as h,ah as P,H as v,r as b,a1 as L,ai as r,aj as g,ak as k,E as j,B as l,al as R,m as S,am as T,an as _,ao as x,ap as A,g as d}from"./Jb6hgQux.js";const B=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,o){const a=await r[t.name]().then(e=>e.default||e);return()=>l(a,t.layoutProps,o.slots)}}),C=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,o){const a=j(),e=m(c),n=e===h()?P():e,u=v(()=>{let s=d(t.name)??n.meta.layout??"default";return s&&!(s in r)&&t.fallback&&(s=d(t.fallback)),s}),y=b();o.expose({layoutRef:y});const p=a.deferHydration();if(a.isHydrating){const s=a.hooks.hookOnce("app:error",p);L().beforeEach(s)}return()=>{const s=u.value&&u.value in r,f=n.meta.layoutTransition??g;return k(_,s&&f,{default:()=>l(T,{suspensible:!0,onResolve:()=>{S(p)}},{default:()=>l(O,{layoutProps:R(o.attrs,{ref:y}),key:u.value||void 0,name:u.value,shouldProvide:!t.name,hasTransition:!!f},o.slots)})}).default()}}}),O=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,o){const a=t.name;return t.shouldProvide&&x(A,{isCurrent:e=>a===(e.meta.layout??"default")}),()=>{var e,n;return!a||typeof a=="string"&&!(a in r)?(n=(e=o.slots).default)==null?void 0:n.call(e):l(B,{key:a,layoutProps:t.layoutProps,name:a},o.slots)}}});export{C as _};
