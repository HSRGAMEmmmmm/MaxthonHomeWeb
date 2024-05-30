import{j as w,r as h,o as s,c as l,a as e,t as c,h as t,d as M,n as b,F as m,k as v,l as y,u as x,m as k,g as f,w as P,b as B}from"./DllZgAe_.js";import{c as S}from"./BxSEZv9i.js";import{_ as C}from"./C-27aEH9.js";import{u as T}from"./CP6pVDrn.js";import"./CsAWb3PU.js";const j={class:"container"},F={class:"row text-center col-12"},L={class:"page-pre-title appear-animation","data-appear-animation":"fadeInDownShorterPlus","data-appear-animation-delay":"100"},$={class:"page-title appear-animation","data-appear-animation":"fadeInLeftShorter","data-appear-animation-delay":"300"},Y=["innerHTML"],V={class:"col-12 appear-animation","data-appear-animation":"fadeInUpShorter","data-appear-animation-delay":"300"},I={class:"laptop-frame"},N=["src"],U={class:"video-container"},q=["poster","aria-label","title"],R=["src"],A={class:"fetuers-preview"},D={class:"container-full"},O={class:"row owl-carousel appear-animation feature-preview-owl","data-appear-animation":"fadeInUpShorter","data-appear-animation-delay":"500"},E=["onClick"],z=["src"],H={__name:"main-pic-preview",props:{contents_preview:{type:Object,required:!0},contents_main_pic:{type:Object,required:!0},classList:{type:Array,required:!1,default:[]},lang:{type:String,default:"en"}},setup(o){const p=w().public.baseURL,i=o,r=h(null),a=h({});a.value=i.contents_main_pic.video;function u(d){a.value=i.contents_preview[d].video,y(()=>{r.value.load(),r.value.play()})}return(d,n)=>(s(),l(m,null,[e("section",{class:b(["main-pic appear-animation",o.classList]),"data-appear-animation":"blurIn"},[e("div",j,[e("div",F,[e("h4",L,c(o.contents_main_pic.page_pre_title),1),e("h1",$,c(o.contents_main_pic.page_title),1),e("h5",{class:"page-sub-title appear-animation","data-appear-animation":"fadeInRightShorterPlus","data-appear-animation-delay":"500",innerHTML:o.contents_main_pic.page_sub_title},null,8,Y)]),e("div",V,[e("div",I,[e("img",{src:t(p)+"/img/laptop-frame.svg",alt:"Laptop frame for video display",class:"laptop-image"},null,8,N),e("div",U,[e("video",{loop:"",muted:"",autoplay:"",preload:"metadata",poster:t(p)+t(a).poster,ref_key:"videoPlayer",ref:r,class:"laptop-video",id:"mainVideo","aria-label":t(a).aria_label,title:t(a).title},[e("source",{src:t(p)+t(a).src,type:"video/mp4"},null,8,R),M(" "+c(t(a).inner_text),1)],8,q)])])])])],2),e("section",A,[e("div",D,[e("div",O,[(s(!0),l(m,null,v(o.contents_preview,(_,g)=>(s(),l("a",{class:"col fetuers-preview-item",onClick:ce=>u(g)},[e("img",{class:"feature-preview-owl-img",src:t(p)+_.img},null,8,z),e("h5",null,c(_.name),1)],8,E))),256))])])])],64))}},G={class:"container"},W={class:"row"},J={class:"col appear-animation","data-appear-animation":"fadeInRightShorter",id:"feature-list-title-privacy"},K={class:"container-full feature-list-container"},Q={class:"owl-carousel appear-animation feature-list-owl","data-appear-animation":"fadeInUpShorter"},X={class:"shadow-card"},Z={class:"shadow-card-pic-container"},ee=["alt","src"],te={class:"shadow-card-title"},ae={class:"shadow-card-text"},oe=["onClick"],re={__name:"feature-list",props:{contents:{type:Object,required:!0},classList:{type:Array,required:!1,default:[]},lang:{type:String,default:"en"}},setup(o){const p=o,{lang:i}=p,r=w().public.baseURL;x();const a=S[i];return(u,d)=>(s(),l("section",{class:b(["feature-list",o.classList])},[e("div",G,[e("div",W,[e("h2",J,c(o.contents.title),1)])]),e("div",K,[e("div",Q,[(s(!0),l(m,null,v(o.contents.card_list,n=>(s(),l("div",X,[e("div",Z,[e("img",{class:"shadow-card-pic",alt:t(a)[n].image.alt,src:t(r)+t(a)[n].image.src},null,8,ee)]),e("h5",te,c(t(a)[n].title),1),e("p",ae,c(t(a)[n].des),1),e("a",{class:"shadow-card-btn",onClick:_=>("navigateTo"in u?u.navigateTo:t(k))(t(a)[n].button.href)},c(t(a)[n].button.text),9,oe)]))),256))])])],2))}},ie={page_name:"features",meta:{title:"Maxthon Browser Feauters",meta:[{name:"title",content:"Maxthon Browser Features"},{name:"keywords",content:"Maxthon, AI browser, Blockchain App, NBdomain, Maxthon Browser, Free VPN"},{name:"description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{name:"twitter:title",content:"Maxthon Browser for Secure Online Browsing"},{name:"twitter:description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{name:"twitter:image",content:"/img/share_cover.jpg"},{property:"og:title",content:"Maxthon Browser Features"},{property:"og:description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{property:"og:image",content:"/favicon.ico"},{property:"og:url",content:"https://www.maxthon.com/en/features"}]},main_pic:{page_pre_title:"Maxthon Browser",page_title:"Unleash the Full Potential of the Web",page_sub_title:'Explore an Array of Cutting-Edge Features Designed for Optimal <span class="highlight">Privacy</span>, <span class="highlight">Efficiency</span>, and <span class="highlight">Media</span> Management.',video:{src:"/video/Maxthon-Privacy-Features.mp4",poster:"/img/Maxthon_start_page.svg",title:"Maxthon Privacy Features Overview",aria_label:"Maxthon Privacy Features Overview",inner_text:"Your browser does not support the video tag. The video is about Maxthon private features."}},feature_preview:[{name:"Video Download",img:"/img/feature-icon-video-download.svg",video:{src:"/video/feature-video-download.mp4",poster:"/img/en/feature-video-download.jpg",title:"Maxthon Browser feature video download",aria_label:"Maxthon privacy feature - Video download",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature video download."}},{name:"Cloud Sync",img:"/img/feature-icon-cloud-snyc.svg",video:{src:"/video/feature-Sync.mp4",poster:"/img/en/feature-Sync.jpg",title:"Maxthon Browser feature Sync",aria_label:"Maxthon privacy feature Cloud Sync",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Sync."}},{name:"Bulid-in VPN",img:"/img/feature-icon-vpn.svg",video:{src:"/video/feature-vpn.mp4",poster:"/img/en/feature-vpn.jpg",title:"Maxthon Browser feature vpn",aria_label:"Maxthon privacy feature - vpn",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature vpn."}},{name:"Passkeeper",img:"/img/feature-icon-passkeeper.svg",video:{src:"/video/feature-Passkeeper.mp4",poster:"/img/en/feature-Passkeeper.jpg",title:"Maxthon Browser feature Passkeeper",aria_label:"Maxthon feature - Passkeeper",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Passkeeper."}},{name:"Split Screen",img:"/img/feature-icon-split-screen.svg",video:{src:"/video/feature-split-screen.mp4",poster:"/img/en/feature-split-screen.jpg",title:"Maxthon Browser feature split screen",aria_label:"Maxthon feature - split screen",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature split screen."}},{name:"Mouse Gesture",img:"/img/feature-icon-mouse-gesture.svg",video:{src:"/video/feature-Mouse-gesture.mp4",poster:"/img/en/feature-Mouse-gesture.jpg",title:"Maxthon Browser feature Mouse gesture",aria_label:"Maxthon feature - Mouse gesture",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Mouse gesture."}}],feature_list:[{title:"Privacy Protection Features",card_list:["adblock","cloud_sync","vpn","data_cleaning","anti_tracking","incognito","browser_locking"]},{title:"Maxthon Unique Features",card_list:["passkeeper","uumail","membership","super_bookmark"]},{title:"Browsing Easily",card_list:["split_screen","reading_mode","tab_searching","mouse_gesture","read_aloud","super_drag","pin_the_window"]},{title:"Media Features",card_list:["video_download","video_popup","snap_screen","resource_sniffer","image_quick_save"]},{title:"Advanced Features",card_list:["aichat","vbox","nbdomain"]}]},ne={page_name:"features",meta:{title:"傲游浏览器功能",meta:[{name:"title",content:"傲游浏览器功能"},{name:"keywords",content:"傲游, AI浏览器, 区块链应用, NBdomain, 傲游浏览器, 免费VPN"},{name:"description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{name:"twitter:title",content:"傲游浏览器 - 安全在线浏览"},{name:"twitter:description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{name:"twitter:image",content:"/img/share_cover.jpg"},{property:"og:title",content:"傲游浏览器功能"},{property:"og:description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{property:"og:image",content:"/favicon.ico"},{property:"og:url",content:"https://www.maxthon.com/zh/features"}]},main_pic:{page_pre_title:"傲游浏览器",page_title:"释放网络的全部潜力",page_sub_title:'探索一系列为最佳<span class="highlight">隐私</span>、<span class="highlight">效率</span>和<span class="highlight">媒体</span>管理而设计的尖端功能。',video:{src:"/video/Maxthon-Privacy-Features.mp4",poster:"/img/Maxthon_start_page.svg",title:"傲游隐私功能概述",aria_label:"傲游隐私功能概述",inner_text:"您的浏览器不支持视频标签。该视频介绍了傲游的隐私功能。"}},feature_preview:[{name:"视频下载",img:"/img/feature-icon-video-download.svg",video:{src:"/video/feature-video-download.mp4",poster:"/img/en/feature-video-download.jpg",title:"Maxthon Browser feature video download",aria_label:"Maxthon privacy feature - Video download",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature video download."}},{name:"云同步",img:"/img/feature-icon-cloud-snyc.svg",video:{src:"/video/feature-Sync.mp4",poster:"/img/en/feature-Sync.jpg",title:"Maxthon Browser feature Sync",aria_label:"Maxthon privacy feature Cloud Sync",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Sync."}},{name:"免费VPN",img:"/img/feature-icon-vpn.svg",video:{src:"/video/feature-vpn.mp4",poster:"/img/en/feature-vpn.jpg",title:"Maxthon Browser feature vpn",aria_label:"Maxthon privacy feature - vpn",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature vpn."}},{name:"密码大师",img:"/img/feature-icon-passkeeper.svg",video:{src:"/video/feature-Passkeeper.mp4",poster:"/img/en/feature-Passkeeper.jpg",title:"Maxthon Browser feature Passkeeper",aria_label:"Maxthon feature - Passkeeper",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Passkeeper."}},{name:"分屏浏览",img:"/img/feature-icon-split-screen.svg",video:{src:"/video/feature-split-screen.mp4",poster:"/img/en/feature-split-screen.jpg",title:"Maxthon Browser feature split screen",aria_label:"Maxthon feature - split screen",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature split screen."}},{name:"鼠标手势",img:"/img/feature-icon-mouse-gesture.svg",video:{src:"/video/feature-Mouse-gesture.mp4",poster:"/img/en/feature-Mouse-gesture.jpg",title:"Maxthon Browser feature Mouse gesture",aria_label:"Maxthon feature - Mouse gesture",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Mouse gesture."}}],feature_list:[{title:"隐私保护功能",card_list:["cloud_sync","vpn","data_cleaning","anti_tracking","incognito","browser_locking","adblock"]},{title:"傲游独特功能",card_list:["passkeeper","uumail","membership","super_bookmark"]},{title:"轻松浏览",card_list:["split_screen","reading_mode","tab_searching","mouse_gesture","read_aloud","super_drag","pin_the_window"]},{title:"媒体功能",card_list:["video_download","video_popup","snap_screen","resource_sniffer","image_quick_save"]},{title:"高级功能",card_list:["aichat","vbox","nbdomain"]}]},se={en:ie,zh:ne},me={__name:"features",setup(o){const i=x().params.lang,r=se[i];return T(r.meta),(a,u)=>{const d=H,n=re,_=C;return s(),f(_,{name:"base",lang:t(i)},{default:P(()=>[B(d,{classList:["main-pic-light"],contents_main_pic:t(r).main_pic,contents_preview:t(r).feature_preview,lang:t(i)},null,8,["contents_main_pic","contents_preview","lang"]),(s(!0),l(m,null,v(t(r).feature_list,g=>(s(),f(n,{classList:[],contents:g,lang:t(i)},null,8,["contents","lang"]))),256))]),_:1},8,["lang"])}}};export{me as default};
