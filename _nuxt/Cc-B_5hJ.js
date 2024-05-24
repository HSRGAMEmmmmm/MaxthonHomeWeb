import{_ as b,u as M}from"./BIw_VePa.js";import{r as v,t as n,v as c,x as e,y as r,H as a,B as y,J as w,K as _,L as h,M as k,E as x,q as P,G as f,A as B,z as S}from"./bPc-oona.js";import{c as C}from"./BsmqLKQd.js";import{_ as I}from"./CcbkmBth.js";import"./B1HyWMIk.js";const T={class:"container"},V={class:"row text-center col-12"},L={class:"page-pre-title appear-animation","data-appear-animation":"fadeInDownShorterPlus","data-appear-animation-delay":"100"},$={class:"page-title appear-animation","data-appear-animation":"fadeInLeftShorter","data-appear-animation-delay":"300"},j=["innerHTML"],F={class:"col-12 appear-animation","data-appear-animation":"fadeInUpShorter","data-appear-animation-delay":"300"},A={class:"laptop-frame"},N=e("img",{src:b,alt:"Laptop frame for video display",class:"laptop-image"},null,-1),q={class:"video-container"},R=["poster","aria-label","title"],U=["src"],D={class:"fetuers-preview"},O={class:"container-full"},Y={class:"row owl-carousel appear-animation feature-preview-owl","data-appear-animation":"fadeInUpShorter","data-appear-animation-delay":"500"},E=["onClick"],z=["src"],H={__name:"main-pic-preview",props:{contents_preview:{type:Object,required:!0},contents_main_pic:{type:Object,required:!0},classList:{type:Array,required:!1,default:[]}},setup(o){const d=o,s=v(null),t=v({});t.value=d.contents_main_pic.video;function l(u){t.value=d.contents_preview[u].video,k(()=>{s.value.load(),s.value.play()})}return(u,i)=>(n(),c(_,null,[e("section",{class:w(["main-pic appear-animation",o.classList]),"data-appear-animation":"blurIn"},[e("div",T,[e("div",V,[e("h4",L,r(o.contents_main_pic.page_pre_title),1),e("h1",$,r(o.contents_main_pic.page_title),1),e("h5",{class:"page-sub-title appear-animation","data-appear-animation":"fadeInRightShorterPlus","data-appear-animation-delay":"500",innerHTML:o.contents_main_pic.page_sub_title},null,8,j)]),e("div",F,[e("div",A,[N,e("div",q,[e("video",{loop:"",muted:"",autoplay:"",preload:"metadata",poster:a(t).poster,ref_key:"videoPlayer",ref:s,class:"laptop-video",id:"mainVideo","aria-label":a(t).aria_label,title:a(t).title},[e("source",{src:a(t).src,type:"video/mp4"},null,8,U),y(" "+r(a(t).inner_text),1)],8,R)])])])])],2),e("section",D,[e("div",O,[e("div",Y,[(n(!0),c(_,null,h(o.contents_preview,(p,m)=>(n(),c("a",{class:"col fetuers-preview-item",onClick:g=>l(m)},[e("img",{class:"feature-preview-owl-img",src:p.img},null,8,z),e("h5",null,r(p.name),1)],8,E))),256))])])])],64))}},G={class:"container"},J={class:"row"},K={class:"col appear-animation","data-appear-animation":"fadeInRightShorter",id:"feature-list-title-privacy"},W={class:"container-full feature-list-container"},Q={class:"owl-carousel appear-animation feature-list-owl","data-appear-animation":"fadeInUpShorter"},X={class:"shadow-card"},Z={class:"shadow-card-pic-container"},ee=["alt","src"],te={class:"shadow-card-title"},ae={class:"shadow-card-text"},oe=["onClick"],ie={__name:"feature-list",props:{contents:{type:Object,required:!0},classList:{type:Array,required:!1,default:[]}},setup(o){const s=x().params.lang,t=C[s];return(l,u)=>(n(),c("section",{class:w(["feature-list",o.classList])},[e("div",G,[e("div",J,[e("h2",K,r(o.contents.title),1)])]),e("div",W,[e("div",Q,[(n(!0),c(_,null,h(o.contents.card_list,i=>(n(),c("div",X,[e("div",Z,[e("img",{class:"shadow-card-pic",alt:a(t)[i].image.alt,src:a(t)[i].image.src},null,8,ee)]),e("h5",te,r(a(t)[i].title),1),e("p",ae,r(a(t)[i].des),1),e("a",{class:"shadow-card-btn",onClick:p=>("navigateTo"in l?l.navigateTo:a(P))(a(t)[i].button.href)},r(a(t)[i].button.text),9,oe)]))),256))])])],2))}},ne={page_name:"features",meta:{title:"Maxthon Browser Feauters",meta:[{name:"title",content:"Maxthon Browser Features"},{name:"keywords",content:"Maxthon, AI browser, Blockchain App, NBdomain, Maxthon Browser, Free VPN"},{name:"description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{name:"twitter:title",content:"Maxthon Browser for Secure Online Browsing"},{name:"twitter:description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{name:"twitter:image",content:"/img/share_cover.jpg"},{property:"og:title",content:"Maxthon Browser Features"},{property:"og:description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{property:"og:image",content:"/favicon.ico"},{property:"og:url",content:"https://www.maxthon.com/en/features"}]},main_pic:{page_pre_title:"Maxthon Browser",page_title:"Unleash the Full Potential of the Web",page_sub_title:'Explore an Array of Cutting-Edge Features Designed for Optimal <span class="highlight">Privacy</span>, <span class="highlight">Efficiency</span>, and <span class="highlight">Media</span> Management.',video:{src:"/video/Maxthon-Privacy-Features.mp4",poster:"/img/Maxthon_start_page.svg",title:"Maxthon Privacy Features Overview",aria_label:"Maxthon Privacy Features Overview",inner_text:"Your browser does not support the video tag. The video is about Maxthon private features."}},feature_preview:[{name:"Video Download",img:"/img/feature-icon-video-download.svg",video:{src:"/video/feature-video-download.mp4",poster:"/img/en/feature-video-download.jpg",title:"Maxthon Browser feature video download",aria_label:"Maxthon privacy feature - Video download",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature video download."}},{name:"Cloud Sync",img:"/img/feature-icon-cloud-snyc.svg",video:{src:"/video/feature-Sync.mp4",poster:"/img/en/feature-Sync.jpg",title:"Maxthon Browser feature Sync",aria_label:"Maxthon privacy feature Cloud Sync",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Sync."}},{name:"Bulid-in VPN",img:"/img/feature-icon-vpn.svg",video:{src:"/video/feature-vpn.mp4",poster:"/img/en/feature-vpn.jpg",title:"Maxthon Browser feature vpn",aria_label:"Maxthon privacy feature - vpn",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature vpn."}},{name:"Passkeeper",img:"/img/feature-icon-passkeeper.svg",video:{src:"/video/feature-Passkeeper.mp4",poster:"/img/en/feature-Passkeeper.jpg",title:"Maxthon Browser feature Passkeeper",aria_label:"Maxthon feature - Passkeeper",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Passkeeper."}},{name:"Split Screen",img:"/img/feature-icon-split-screen.svg",video:{src:"/video/feature-split-screen.mp4",poster:"/img/en/feature-split-screen.jpg",title:"Maxthon Browser feature split screen",aria_label:"Maxthon feature - split screen",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature split screen."}},{name:"Mouse Gesture",img:"/img/feature-icon-mouse-gesture.svg",video:{src:"/video/feature-Mouse-gesture.mp4",poster:"/img/en/feature-Mouse-gesture.jpg",title:"Maxthon Browser feature Mouse gesture",aria_label:"Maxthon feature - Mouse gesture",inner_text:"Your browser does not support the video tag. The video is about Maxthon private feature Mouse gesture."}}],feature_list:[{title:"Privacy protection Features",card_list:["Adblock","Sync","vpn","data_cleaning","anti_tracking","Incognito","Browser_Locking"]},{title:"Maxthon Unique Features",card_list:["Passkeeper","UUmail","Membership","Super_Bookmark"]},{title:"Browsing Easily",card_list:["split_screen","Reading_Mode","Tab_searching","Mouse_gesture","Read_aloud","Super_drag","Pin_the_window"]},{title:"Media features",card_list:["Video_download","Video_popup","Snap_screen","Resource_sniffer","Image_quick_save"]},{title:"Advanced features",card_list:["AIchat","Vbox","NBdomain"]}]},re={page_name:"features",meta:{title:"傲游浏览器功能",meta:[{name:"title",content:"傲游浏览器功能"},{name:"keywords",content:"傲游, AI浏览器, 区块链应用, NBdomain, 傲游浏览器, 免费VPN"},{name:"description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{name:"twitter:title",content:"傲游浏览器 - 安全在线浏览"},{name:"twitter:description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{name:"twitter:image",content:"/img/share_cover.jpg"},{property:"og:title",content:"傲游浏览器功能"},{property:"og:description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{property:"og:image",content:"/favicon.ico"},{property:"og:url",content:"https://www.maxthon.com/zh/features"}]},main_pic:{page_pre_title:"傲游浏览器",page_title:"释放网络的全部潜力",page_sub_title:'探索一系列为最佳<span class="highlight">隐私</span>、<span class="highlight">效率</span>和<span class="highlight">媒体</span>管理而设计的尖端功能。',video:{src:"/video/Maxthon-Privacy-Features.mp4",poster:"/img/Maxthon_start_page.svg",title:"傲游隐私功能概述",aria_label:"傲游隐私功能概述",inner_text:"您的浏览器不支持视频标签。该视频介绍了傲游的隐私功能。"}},feature_preview:[{name:"视频下载",img:"/img/feature-icon-video-dl",video:{src:"/video/feature-video-download.mp4",poster:"/img/en/feature-video-download.jpg",title:"傲游浏览器功能视频下载",aria_label:"傲游隐私功能 - 视频下载",inner_text:"您的浏览器不支持视频标签。该视频介绍了傲游的隐私功能视频下载。"}}],feature_list:[{title:"隐私保护功能",card_list:["Sync","vpn","data_cleaning","anti_tracking","Incognito","Browser_Locking","Adblock"]},{title:"傲游独特功能",card_list:["Passkeeper","UUmail","Membership","Super_Bookmark"]},{title:"轻松浏览",card_list:["split_screen","Reading_Mode","Tab_searching","Mouse_gesture","Read_aloud","Super_drag","Pin_the_window"]},{title:"媒体功能",card_list:["Video_download","Video_popup","Snap_screen","Resource_sniffer","Image_quick_save"]},{title:"高级功能",card_list:["AIchat","Vbox","NBdomain"]}]},se={en:ne,zh:re},_e={__name:"features",setup(o){const s=x().params.lang,t=se[s];return M(t.meta),(l,u)=>{const i=H,p=ie,m=I;return n(),f(m,{name:"base"},{default:B(()=>[S(i,{classList:["main-pic-light"],contents_main_pic:a(t).main_pic,contents_preview:a(t).feature_preview},null,8,["contents_main_pic","contents_preview"]),(n(!0),c(_,null,h(a(t).feature_list,g=>(n(),f(p,{classList:[],contents:g},null,8,["contents"]))),256))]),_:1})}}};export{_e as default};
