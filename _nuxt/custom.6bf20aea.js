import{_ as N}from"./mx-link.b5144ebc.js";import{_ as z}from"./mx-icon.32edc059.js";import{a as E,_ as I}from"./mx-bar.8a0b1d1f.js";import{H as L,A as h,I as T,J as P,a as j,o as r,e as d,j as p,b as e,h as o,w as l,i,t as a,c as A,u as w,x as D,f as _,y as x}from"./entry.ce67fe4b.js";import"./nuxt-link.a2896ab1.js";import"./_plugin-vue_export-helper.c27b6911.js";const H=""+new URL("index-logo.f350edf9.svg",import.meta.url).href;const R={class:"page-layout"},U={class:"page-inner page-header-inner"},F=e("img",{src:H,alt:"maxthon logo"},null,-1),J=["href"],O={class:"page-header-link",href:"http://www.maxthon.com/blog/",target:"_blank"},W={class:"page-header-link",href:"javascript:;"},Z={key:1,class:"page-banner"},q={key:2,class:"page-container"},G={class:"page-footer"},K={class:"page-inner page-footer-inner"},Q={class:"page-footer-nav"},se={__name:"custom",props:{headerVisible:{type:Boolean,default:!0}},setup(k){const v=L(),f=!!v.banner,y=!!v.default,u=h(!1),g=h({});function m(){const s=document.documentElement.scrollTop/100;g.value={backgroundColor:`rgba(22, 30, 55, ${s})`}}T(()=>{m(),window.addEventListener("scroll",m)}),P(()=>{window.removeEventListener("scroll",m)});const{locale:b}=j(),c=h(!1),$=[{title:"问题反馈",url:"https://report.maxthon.cn/mx/bug/post/"},{title:"帮助中心",url:"https://docs.maxthon.cn/#/zh/"},{title:"傲游社区",url:"https://bbs.maxthon.cn/"}],V=[{title:"Troubleshooting",url:"https://report.maxthon.com/mx/bug/post/"},{title:"Help Center",url:"https://docs.maxthon.com"},{title:"Community",url:"https://forum.maxthon.com/"},{title:"Release Notes",url:"https://forum.maxthon.com/index.php?/topic/27464-maxthon-release-notes/"},{title:"Privacy Policy",url:"/en/docs/privacy"},{title:"Maxthon Now",url:"https://i.maxask.com/"},{title:"Facebook",url:"https://www.facebook.com/maxthon"},{title:"Twitter",url:"https://www.twitter.com/maxthon"}];return(t,s)=>{const n=N,C=z,S=E,B=I;return r(),d("div",R,[k.headerVisible?(r(),d("header",{key:0,class:p(["page-header",{"with-blue-bg":!f}])},[e("div",{style:D(g.value)},[e("div",U,[o(n,{path:"/"},{default:l(()=>[F]),_:1}),e("div",{class:"page-header-btn",onClick:s[0]||(s[0]=M=>u.value=!u.value)}),e("div",{class:p(["page-header-nav",{"is-visible":u.value}])},[o(n,{class:"page-header-link",path:"/download"},{default:l(()=>[i(a(t.$t("download")),1)]),_:1}),e("a",{class:"page-header-link",href:t.$t("urlWebstore"),target:"_blank"},a(t.$t("extendApp")),9,J),e("a",O,a(t.$t("blog")),1),e("div",{class:"page-header-menu",onClick:s[1]||(s[1]=M=>c.value=!c.value)},[e("a",W,[e("span",null,a(t.$t("community")),1),o(C,{icon:"arrow-down",class:p({"is-active":c.value})},null,8,["class"])]),(r(),A(S,{key:w(b),class:p(["page-header-dropdown",{"is-visible":c.value}]),list:w(b)==="zh"?$:V,target:"_blank",size:"large"},null,8,["class","list"]))])],2)])],4)],2)):_("",!0),f?(r(),d("div",Z,[x(t.$slots,"banner")])):_("",!0),y?(r(),d("div",q,[x(t.$slots,"default")])):_("",!0),e("footer",G,[e("div",K,[o(B),e("div",Q,[o(n,{path:"/docs/about-us"},{default:l(()=>[i(a(t.$t("about")),1)]),_:1}),o(n,{path:"/docs/eula"},{default:l(()=>[i(a(t.$t("termsOfService")),1)]),_:1}),o(n,{path:"/docs/privacy"},{default:l(()=>[i(a(t.$t("privacyPolicy")),1)]),_:1}),o(n,{path:"/docs/contact"},{default:l(()=>[i(a(t.$t("contact")),1)]),_:1})])])])])}}};export{se as default};
