import{_}from"./Dnm2B38m.js";import{o as l,c,a as e,t as g,F as L,j as H,f as v,w as x,n as b,ar as w,u as y,as as z,at as D,au as k,g as i,b as r,av as C,q as u}from"./DPP6snHs.js";const V={class:"footer-nav-list"},B={class:"footer-nav-title"},F={class:"footer-nav-item-container"},A={__name:"footer_nav",props:{itemData:{type:Object,required:!0},lang:{type:String,default:"en"}},setup(o){return(m,n)=>{const a=_;return l(),c("ul",V,[e("p",B,g(o.itemData.text),1),(l(!0),c(L,null,H(o.itemData.submenu,t=>(l(),v(a,{class:b({"footer-nav-list-aciton":t.isHighLight}),to:t.href},{default:x(()=>[e("li",F,g(t.name),1)]),_:2},1032,["class","to"]))),256))])}}},M={copyright:"© 2024 Maxthon. All Rights reserved.",Browser:{text:"Browser",submenu:[{name:"Home",isHighLight:!1,href:"/en"},{name:"Download",isHighLight:!1,href:"/en/download"},{name:"Beta",isHighLight:!1,href:"/en/beta"},{name:"History Versions",isHighLight:!1,href:"/en/history"}]},Features:{text:"Features",submenu:[{name:"Build-in VPN",isHighLight:!1,href:"/en/feature/vpn"},{name:"Cross-Platform syncing",isHighLight:!1,href:"/en/feature/cloud-sync"},{name:"Video Download",isHighLight:!1,href:"/en/feature/video-download"},{name:"AI chat",isHighLight:!1,href:"/en/feature/aichat"},{name:"View all",isHighLight:!0,href:"/en/features"}]},Community:{text:"Community",submenu:[{name:"Forum",isHighLight:!1,href:"https://forum.maxthon.com/"},{name:"Blogs",isHighLight:!1,href:"https://blog.maxthon.com/"},{name:"X/Twitter",isHighLight:!1,href:"https://twitter.com/maxthon"},{name:"Facebook",isHighLight:!1,href:"https://www.facebook.com/maxthon"}]},AboutUs:{text:"About us",submenu:[{name:"Terms",isHighLight:!1,href:"/en/docs/eula/"},{name:"Privacy policy",isHighLight:!1,href:"/en/docs/privacy"},{name:"Contact us",isHighLight:!1,href:"/en/docs/contact"},{name:"Trouble shooting",isHighLight:!1,href:"https://report.maxthon.com/mx/bug/post/"},{name:"Help",isHighLight:!1,href:"https://docs.maxthon.com/#/"}]}},S={copyright:"© 2024 Maxthon. All Rights reserved.<br><span>京ICP证120017号</span><span>京ICP备08011055号-2</span><span>京公网安备 11010802036007</span><span>京网文[2015]0070-020号</span>",Browser:{text:"浏览器",submenu:[{name:"首页",isHighLight:!1,href:"/zh"},{name:"下载",isHighLight:!1,href:"/zh/download"},{name:"测试版",isHighLight:!1,href:"/zh/beta"},{name:"历史版本",isHighLight:!1,href:"/zh/history"}]},Features:{text:"功能",submenu:[{name:"免费VPN",isHighLight:!1,href:"/zh/feature/vpn"},{name:"跨平台同步",isHighLight:!1,href:"/zh/feature/cloud-sync"},{name:"视频下载",isHighLight:!1,href:"/zh/feature/video-download"},{name:"AI聊天",isHighLight:!1,href:"/zh/feature/aichat"},{name:"查看全部",isHighLight:!0,href:"/zh/features"}]},Community:{text:"社区",submenu:[{name:"论坛",isHighLight:!1,href:"https://bbs.maxthon.net/"},{name:"博客",isHighLight:!1,href:"https://blog.maxthon.com/"},{name:"X/Twitter",isHighLight:!1,href:"https://twitter.com/maxthon"},{name:"Facebook",isHighLight:!1,href:"https://www.facebook.com/maxthon"}]},AboutUs:{text:"关于我们",submenu:[{name:"条款",isHighLight:!1,href:"/zh/docs/eula/"},{name:"隐私政策",isHighLight:!1,href:"/zh/docs/privacy"},{name:"联系我们",isHighLight:!1,href:"/zh/docs/contact"},{name:"故障排除",isHighLight:!1,href:"https://report.maxthon.com/mx/bug/post/"},{name:"帮助",isHighLight:!1,href:"https://docs.maxthon.com/#/"}]}},T={en:M,zh:S},I={class:"footer"},N={class:"container"},P={class:"row"},U={class:"footer-info col-4 col-md-5 col-sm-12 col-xs-12 appear-animation","data-appear-animation":"fadeInRightUpShorter"},R=C('<ul class="footer-social-media"><a href="https://twitter.com/maxthon"><li class="icon-item"><i class="icon iconrem icon-twitter"></i></li></a><a href="https://www.facebook.com/maxthon"><li class="icon-item"><i class="icon iconrem icon-facebook"></i></li></a><a href="mailto:help@maxthon.com"><li class="icon-item"><i class="icon iconrem icon-email"></i></li></a></ul>',1),j={class:"footer-language"},q=e("option",{value:"en"},"English",-1),E=e("option",{value:"zh"},"简体中文",-1),X=[q,E],O=["innerHTML"],G={class:"footer-nav col-8 col-md-7 col-sm-12 col-xs-12 appear-animation","data-appear-animation":"fadeInLeftUpShorter"},W={__name:"AppFooter",props:w({lang:{type:String,default:"en"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const m=o,n=y(),{lang:a}=m,t=T[a],s=z(o,"modelValue");s.value=a;function p(){s.value!=a&&($.removeCookie("lang"),$.cookie("lang",s.value,{path:"/"}),n.path.includes(a)?u(n.path.replace(a,s.value)):u(s.value+n.path))}return(J,f)=>{const h=A;return l(),c("footer",I,[e("div",N,[e("div",P,[e("div",U,[R,e("div",j,[D(e("select",{"onUpdate:modelValue":f[0]||(f[0]=d=>s.value=d),onChange:p},X,544),[[k,s.value]])]),e("p",{class:"footer-copyright",innerHTML:i(t).copyright},null,8,O)]),e("div",G,[r(h,{itemData:i(t).Browser},null,8,["itemData"]),r(h,{itemData:i(t).Features},null,8,["itemData"]),r(h,{itemData:i(t).Community},null,8,["itemData"]),r(h,{itemData:i(t).AboutUs},null,8,["itemData"])])])])])}}};export{W as default};
