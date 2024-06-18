import{k as h,o as e,c as n,a as t,t as s,g as r,d as u,n as p,F as _,j as m,q as f,l as v}from"./CzKgNhqX.js";const g={class:"container"},y={class:"row text-center col-12"},b={class:"page-pre-title appear-animation","data-appear-animation":"fadeInDownShorterPlus","data-appear-animation-delay":"100"},w={class:"page-title appear-animation","data-appear-animation":"fadeInLeftShorter","data-appear-animation-delay":"300"},$=["innerHTML"],L={class:"col-12 appear-animation","data-appear-animation":"fadeInUpShorter","data-appear-animation-delay":"300"},q={class:"laptop-frame"},x=["src"],S={class:"video-container"},I=["poster","aria-label","title"],k=["src"],tt={__name:"main-pic",props:{classList:{type:Array,default:[],required:!1},content:{type:Object,default:{}},lang:{type:String,default:"en"}},setup(a){const c=h().public.baseURL;return(l,i)=>(e(),n("section",{class:p(["main-pic appear-animation",a.classList]),"data-appear-animation":"blurIn"},[t("div",g,[t("div",y,[t("h4",b,s(a.content.page_pre_title),1),t("h1",w,s(a.content.page_title),1),t("h5",{class:"page-sub-title appear-animation","data-appear-animation":"fadeInRightShorterPlus","data-appear-animation-delay":"500",innerHTML:a.content.page_sub_title},null,8,$)]),t("div",L,[t("div",q,[t("img",{src:r(c)+"/img/laptop-frame.svg",alt:"Laptop frame for video display",class:"laptop-image"},null,8,x),t("div",S,[t("video",{loop:"",muted:"",autoplay:"",preload:"metadata",poster:r(c)+a.content.video.poster,class:"laptop-video",id:"mainVideo","aria-label":a.content.video.aria_label,title:a.content.video.title},[t("source",{src:r(c)+a.content.video.src,type:"video/mp4"},null,8,k),u(" "+s(a.content.video.inner_text),1)],8,I)])])])])],2))}},R={class:"mx-reviews bg-dark"},T={class:"container"},U={class:"row appear-animation","data-appear-animation":"fadeInRightShorter"},C={class:"col-10 col-xs-10 col-sm-10 text-center"},A={class:"text-color-light font-weight-7"},j={class:"container review-container appear-animation","data-appear-animation":"fadeInUpShorter"},B={class:"row reviews-owl owl-carousel"},H={class:"col review-item-container"},M={class:"review-user-avtar"},N=["src"],V={class:"review-user-name text-color-light font-weight-7"},O={class:"review-content text-color-light"},D={class:"review-date"},E={class:"review-stars"},F={class:"icon icon-star"},at={__name:"mx-reviews",props:{classList:{type:Array,default:[],required:!1},content:{type:Object,default:{}},lang:{type:String,default:"en"}},setup(a){const c=h().public.baseURL;return(l,i)=>(e(),n("section",R,[t("div",T,[t("div",U,[t("div",C,[t("h2",A,s(a.content.title),1)])])]),t("div",j,[t("div",B,[(e(!0),n(_,null,m(a.content.review_list,o=>(e(),n("div",H,[t("div",M,[t("img",{class:"avtar avtar100",src:r(c)+o.avatar},null,8,N)]),t("h5",V,s(o.username),1),t("p",O,s(o.review_content),1),t("p",D,s(o.date),1),t("div",E,[(e(!0),n(_,null,m(o.stars,d=>(e(),n("i",F))),256))])]))),256))])])]))}},P={class:"container"},z={class:"row"},G={class:"col"},J={class:"appear-animation","data-appear-animation":"fadeInRightShorter"},K={class:"faq-list appear-animation","data-appear-animation":"fadeInLeftShorter"},Q={class:"faq-item"},W=["onClick"],X=["innerHTML"],et={__name:"mx-faq",props:{classList:{type:Array,default:[],required:!1},content:{type:Object,default:{}},lang:{type:String,default:"en"}},setup(a){h().public.baseURL;function c(l){let i=document.getElementsByClassName("showAnswer"+l)[0];i.style.display=="none"||i.style.display==""?i.style.display="block":i.style.display="none"}return(l,i)=>(e(),n("section",{class:p(["mx-faq",a.classList]),style:{"padding-bottom":"0.5rem"}},[t("div",P,[t("div",z,[t("div",G,[t("h2",J,s(a.content.title),1),t("ul",K,[(e(!0),n(_,null,m(a.content.faq_list,(o,d)=>(e(),n("li",Q,[t("h5",{class:"faq-question",onClick:Y=>c(d)},s(o.q),9,W),t("p",{class:p(["faq-answer","showAnswer"+d]),innerHTML:o.a},null,10,X)]))),256))]),a.content.faq_btn?(e(),n("a",{key:0,class:"outline-btn appear-animation","data-appear-animation":"fadeInUpShorter",onClick:i[0]||(i[0]=o=>("navigateTo"in l?l.navigateTo:r(f))(a.content.faq_btn.href,{external:!0}))},s(a.content.faq_btn.text),1)):v("",!0)])])])],2))}};export{tt as _,at as a,et as b};
