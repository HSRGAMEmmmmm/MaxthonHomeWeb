import{r,s as B,o as s,c as i,a as t,n as S,g as n,t as o,l as L,F as d,q as w,k as C,j as g,b as k,w as U,d as I}from"./CHfjH-p5.js";import{_ as N}from"./BzrIjv9i.js";const R=["id"],j={class:"dl-btn-texts"},q={class:"dl-btn-plantform"},D={class:"dl-version-set"},F={class:"dl-btn-title"},O=["id"],P=["id"],T={class:"dl-sub-btn-texts"},z={class:"dl-btn-sub-title"},A=["id"],E={__name:"download-page-button",props:{lang:{type:String,default:"en"},env:{type:String,default:"formal"},plat:{type:String,default:""},content:{type:Object},index:{}},setup(l){const _=l,{lang:b,env:p,plat:f,content:a,index:e}=_,c=r({}),x=r({}),u=r({}),m=r({});B(()=>{const h=mxconfig.downloadUrl[b][p],v=mxconfig.downloadVersion[p];c.value=h[a.link_name],x.value=h[a.sub_version.link_name],u.value=v[a.link_name],m.value=v[a.link_name],$("#downloadButtonVersion"+e).text(u.value),$("#downloadButtonVersion_pro"+e).text(m.value)});function y(){w(c.value,{open:{target:"_block"},external:!0})}function V(){w(x.value,{open:{target:"_block"},external:!0})}return(h,v)=>(s(),i(d,null,[t("a",{id:"downloadButton"+n(e),onClick:y,class:"outline-btn dl-btn"},[t("i",{class:S(["icon icon32",n(a).icon])},null,2),t("div",j,[t("span",q,o(n(a).plantform),1),t("div",D,[t("span",F,o(n(a).title),1),t("span",{id:"downloadButtonVersion"+n(e),class:"dl-btn-version"},o(n(u)),9,O)])])],8,R),n(a).sub_version.title!=""?(s(),i("a",{key:0,class:"mx-dt-sub",id:"downloadButton_pro"+n(e),onClick:V},[t("div",T,[t("span",z,o(n(a).sub_version.title),1),t("span",{class:"dl-btn-version",id:"downloadButtonVersion_pro"+n(e)},o(n(m)),9,A)])],8,P)):L("",!0)],64))}},M={class:"main-pic main-pic-light appear-animation","data-appear-animation":"blurIn"},G={class:"container"},H={class:"row text-center col-12"},J={class:"page-pre-title appear-animation","data-appear-animation":"fadeInDownShorterPlus","data-appear-animation-delay":"100"},K={class:"page-title appear-animation","data-appear-animation":"fadeInLeftShorter","data-appear-animation-delay":"300"},Q={class:"page-sub-title appear-animation","data-appear-animation":"fadeInRightShorterPlus","data-appear-animation-delay":"500"},W={class:"col-12 appear-animation","data-appear-animation":"fadeInUpShorter","data-appear-animation-delay":"300"},X={class:"laptop-frame"},Y=["src"],Z={class:"mx-dl-buttons"},tt={class:"container"},nt={class:"row dl-buttons-list"},at={class:"mx-dl-btn-set"},et={class:"mx-dl-more"},ot={class:"container"},st={class:"row"},it={class:"mx-dl-links col-6 col-sm-12 col-xs-12"},lt={class:"mx-dl-links-title"},ct={class:"link-list"},dt={class:"link-title"},pt={__name:"download",props:{classList:{type:Array,default:[],required:!1},content:{type:Object,default:{}},lang:{type:String,default:"en"}},setup(l){const _=C().public.baseURL;return(b,p)=>{const f=E,a=N;return s(),i(d,null,[t("section",M,[t("div",G,[t("div",H,[t("h4",J,o(l.content.main_pic.page_pre_title),1),t("h1",K,o(l.content.main_pic.page_title),1),t("h5",Q,o(l.content.main_pic.page_sub_title),1)]),t("div",W,[t("div",X,[t("img",{src:n(_)+"/img/download_main-pic.svg",alt:"Laptop frame for video display",class:"laptop-image"},null,8,Y)])])])]),t("section",Z,[t("div",tt,[t("div",nt,[(s(!0),i(d,null,g(l.content.versions,(e,c)=>(s(),i("div",at,[k(f,{lang:l.lang,env:"formal",content:e,index:c},null,8,["lang","content","index"])]))),256))])])]),t("section",et,[t("div",ot,[t("div",st,[(s(!0),i(d,null,g(l.content.links_group,e=>(s(),i("div",it,[t("div",lt,o(e.title),1),t("div",ct,[(s(!0),i(d,null,g(e.link_list,c=>(s(),i("div",null,[t("span",dt,o(c.title),1),k(a,{class:"link-text",to:c.href},{default:U(()=>[I(o(c.text),1)]),_:2},1032,["to"])]))),256))])]))),256))])])])],64)}}};export{pt as default};
