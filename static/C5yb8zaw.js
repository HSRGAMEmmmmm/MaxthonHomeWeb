import{_ as w,a as L,b as y}from"./CEUSIeI3.js";import{k as f,o as d,c as _,a as t,t as i,n as h,u as S,F as $,j as k,h as e,m as g,g as x,w as D,b as r}from"./BDMod4Qd.js";import{c as q}from"./BxSEZv9i.js";import{_ as C}from"./C4hQQj9S.js";import{u as R}from"./C2fibwM2.js";import"./C9zuytRd.js";const T={class:"container"},U={class:"row"},j={class:"col-10 appear-animation","data-appear-animation":"fadeInUpShorter","data-appear-animation-delay":"300"},B={__name:"description",props:{classList:{type:Array,default:[],required:!1},content:{type:String,default:{}},lang:{type:String,default:"en"}},setup(a){return f().public.baseURL,(l,n)=>(d(),_("section",{class:h(["page-description",a.classList])},[t("div",T,[t("div",U,[t("div",j,[t("p",null,i(a.content),1)])])])],2))}},I={class:"container"},N={class:"row"},A={class:"col appear-animation","data-appear-animation":"fadeInRightShorter",id:"feature-list-title-privacy"},F={class:"container-full feature-list-container"},O={class:"owl-carousel appear-animation feature-list-owl","data-appear-animation":"fadeInUpShorter"},V=["onClick"],z={class:"shadow-card-pic-container"},E=["alt","src"],M={class:"shadow-card-title"},G={class:"shadow-card-text"},H={class:"shadow-card-btn"},J={class:"row appear-animation","data-appear-animation":"fadeInLeftShorter"},K={class:"col"},P={__name:"related",props:{content:{type:Object,required:!0},classList:{type:Array,required:!1,default:[]},lang:{type:String,default:"en"}},setup(a){const l=a,{lang:n}=l,p=f().public.baseURL;S();const o=q[n];return(c,u)=>(d(),_("section",{class:h(["feature-list",a.classList])},[t("div",I,[t("div",N,[t("h2",A,i(a.content.title),1)])]),t("div",F,[t("div",O,[(d(!0),_($,null,k(a.content.related_feature_list,s=>(d(),_("div",{class:"shadow-card",onClick:m=>("navigateTo"in c?c.navigateTo:e(g))(e(o)[s].button.href)},[t("div",z,[t("img",{class:"shadow-card-pic",alt:e(o)[s].image.alt,src:e(p)+e(o)[s].image.src},null,8,E)]),t("h5",M,i(e(o)[s].title),1),t("p",G,i(e(o)[s].des),1),t("a",H,i(e(o)[s].button.text),1)],8,V))),256))])]),t("div",J,[t("div",K,[t("a",{class:"outline-btn",onClick:u[0]||(u[0]=s=>("navigateTo"in c?c.navigateTo:e(g))(a.content.more_button.link))},i(a.content.more_button.text),1)])])],2))}},at={__name:"feature-template",props:{pageData:{type:Object,required:!0},lang:{type:String,default:"en"}},setup(a){const l=a,{lang:n}=l;return R(l.pageData.meta),(p,o)=>{const c=w,u=B,s=L,m=y,v=P,b=C;return d(),x(b,{name:"base",lang:e(n)},{default:D(()=>[r(c,{classList:["main-pic-light"],content:a.pageData.main_pic,lang:e(n)},null,8,["content","lang"]),r(u,{classList:[],content:a.pageData.page_description,lang:e(n)},null,8,["content","lang"]),r(s,{classList:[],content:a.pageData.reviews,lang:e(n)},null,8,["content","lang"]),r(m,{classList:[],content:a.pageData.faqs,lang:e(n)},null,8,["content","lang"]),r(v,{classList:[],content:a.pageData.related_features,lang:e(n)},null,8,["content","lang"])]),_:1},8,["lang"])}}};export{at as default};
