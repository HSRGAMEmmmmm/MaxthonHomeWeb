import{_ as i}from"./BBX7n9-d.js";import{k as d,o as t,f as c,w as _,a as l,d as p,t as o,c as n,l as f,_ as b,at as w,aw as h,F as g,j as k,n as v}from"./DKhNGm1x.js";const x={class:"sub-dropdown-item-container active"},y={key:0,class:"menu-badge"},I={__name:"nav_submenu_dropdown",props:{menuItem:{type:Object,required:!0},lang:{type:String,default:"en"}},setup(e){return d().public.baseURL,(r,a)=>{const s=i;return t(),c(s,{class:"sub-dropdown-item",to:e.menuItem.link},{default:_(()=>[l("li",x,[p(o(e.menuItem.name)+" ",1),!e.menuItem.badge==""?(t(),n("span",y,o(e.menuItem.badge),1)):f("",!0)])]),_:1},8,["to"])}}},B={props:{isActive:{type:Boolean,default:!1},itemData:{type:Object,default:{}},custom_css_classname:{type:Array,default:[],required:!1}}};function C(e,r,a,s,D,N){const m=I;return w((t(),n("ul",{class:v(["dropdown-menu appear-animation",a.custom_css_classname]),"data-appear-animation":"fadeInUpShorterPlus"},[(t(!0),n(g,null,k(a.itemData,u=>(t(),c(m,{menuItem:u},null,8,["menuItem"]))),256))],2)),[[h,a.isActive]])}const A=b(B,[["render",C]]);export{A as default};
