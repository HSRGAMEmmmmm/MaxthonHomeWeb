import{_ as r}from"./DXdMzC5g.js";import{_ as n,c as u,a as m,t as l,n as c,b as _,o as v}from"./i-VQRRxn.js";const d={data(){return{isActive:!1}},methods:{handleMouseOver(){this.is_mobile||(this.isActive=!0)},handleMouseLeave(){this.is_mobile||(this.isActive=!1)},showMobileNav(){this.is_mobile&&(this.isActive=!this.isActive)}},props:{menuItems:{type:Object,required:!0},menuName:{type:String,required:!0},custom_css_classname:{type:Array,default:[],required:!1},is_mobile:{type:Boolean,required:!0}}};function f(h,e,a,b,i,s){const o=r;return v(),u("li",{class:"dropdown",onMouseover:e[0]||(e[0]=(...t)=>s.handleMouseOver&&s.handleMouseOver(...t)),onMouseleave:e[1]||(e[1]=(...t)=>s.handleMouseLeave&&s.handleMouseLeave(...t)),onClick:e[2]||(e[2]=(...t)=>s.showMobileNav&&s.showMobileNav(...t))},[m("a",{class:c(["dropdown-item",{active:i.isActive}])},l(a.menuName),3),_(o,{isActive:i.isActive,itemData:a.menuItems,custom_css_classname:a.custom_css_classname,name:"header-nav-submenu-block-mega"},null,8,["isActive","itemData","custom_css_classname"])],32)}const p=n(d,[["render",f]]);export{p as default};
