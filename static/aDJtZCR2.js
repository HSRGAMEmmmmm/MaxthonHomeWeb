import{_ as b}from"./DZjL8TwD.js";import{k as f,o as i,c as s,a as e,t as n,F as u,j as d,b as g,w as h,n as m,g as c,q as p,v}from"./C8ZlLRFl.js";const x={class:"mx-dl-banner"},w={class:"container"},y={class:"row"},k={class:"col-7 col-md-6 col-sm-12 col-xs-12 appear-animation","data-appear-animation":"expandIn"},M={class:"mx-home-dl-title"},I={class:"mx-home-dl-icons"},S={class:"icon-item"},$={class:"col-5 col-md-6 col-sm-12 col-xs-12 mx-dl-banner-btn appear-animation","data-appear-animation":"fadeInLeftUpShorter"},B={class:"mx-main-btn btn-dl"},C=e("i",{class:"icon icon-dl"},null,-1),L={class:"btn-text"},P={class:"mx-text-devider"},q={class:"mx-sub-btn"},A={class:"sub-btn-text"},z=e("div",{class:"plantforms-pic appear-animation","data-appear-animation":"blurIn"},null,-1),Ce={__name:"mx-dl-banner",props:{classList:{type:Array,default:[],required:!1},content:{type:Object,default:{}},lang:{type:String,default:"en"}},setup(t){return f().public.baseURL,(r,o)=>{const l=b;return i(),s(u,null,[e("section",x,[e("div",w,[e("div",y,[e("div",k,[e("h5",M,n(t.content.title),1),e("div",I,[e("ul",null,[(i(!0),s(u,null,d(t.content.icons,a=>(i(),s("li",S,[g(l,{lang:t.lang,plat:a.plat},{default:h(()=>[e("i",{class:m(["icon icon32",a.name])},null,2)]),_:2},1032,["lang","plat"])]))),256))])])]),e("div",$,[g(l,{lang:t.lang},{default:h(()=>[e("div",B,[C,e("span",L,n(t.content.dl_btn_main.text),1)])]),_:1},8,["lang"]),e("p",P,n(t.content.dl_btn_text_devider),1),g(l,{lang:t.lang,env:"beta"},{default:h(()=>[e("div",q,[e("span",A,n(t.content.dl_sub_btn.text),1)])]),_:1},8,["lang"])])])])]),z],64)}}},O={class:"container mx-functions-content"},R={class:"row"},j={class:"funtion-pic col-6 col-sm-12 col-xs-12 appear-animation","data-appear-animation":"fadeInRightUpShorter"},N=["src","alt","title"],T={class:"fuction-des col-6 col-sm-12 col-xs-12 appear-animation","data-appear-animation":"fadeInLeftUpShorter"},U={class:"mx-functions-pre-title"},W={class:"mx-functions-title"},V={class:"mx-functions-sub-title"},F={class:"mx-functions-text"},D={class:"container mx-functions-feature-list"},H={class:"owl-carousel appear-animation card-owl","data-appear-animation":"fadeInUpShorter"},E=["onClick"],G={class:"mx-functions-feature-list-item transition-magnetic"},J={class:"feature-icon"},Q={class:"feature-title"},X={class:"feature-text"},Y={class:"feature-link"},K={class:"feature-lm"},Z=e("i",{class:"icon icon16 icon-right-arrow"},null,-1),Le={__name:"mx-functions",props:{classList:{type:Array,default:[],required:!1},content:{type:Object,default:{}},lang:{type:String,default:"en"}},setup(t){const r=f().public.baseURL;return(o,l)=>(i(),s("section",{class:m(["mx-functions",t.classList])},[e("div",O,[e("div",R,[e("div",j,[e("img",{src:c(r)+t.content.img.src,alt:t.content.img.alt,title:t.content.img.alt},null,8,N)]),e("div",T,[e("h6",U,n(t.content.pre_title),1),e("h3",W,n(t.content.title),1),e("h5",V,n(t.content.sub_title),1),e("p",F,n(t.content.text),1)])])]),e("div",D,[e("div",H,[(i(!0),s(u,null,d(t.content.feature_list,a=>(i(),s("div",{class:"col",onClick:_=>("navigateTo"in o?o.navigateTo:c(p))(a.feature_btn.url)},[e("div",G,[e("div",J,[e("i",{class:m(["icon icon48",a.feature_icon])},null,2)]),e("h4",Q,n(a.feature_title),1),e("p",X,n(a.feature_text),1),e("a",Y,[e("span",K,n(a.feature_btn.text),1),Z])])],8,E))),256))])])],2))}},ee={class:"container"},te={class:"appear-animation","data-appear-animation":"fadeInRightShorter"},ae={class:"container-full"},ne={class:"owl-carousel appear-animation card-owl","data-appear-animation":"fadeInUpShorter"},ie=["onClick"],se={class:"shadow-card"},oe={class:"shadow-card-pic-container"},re=["alt","src"],le={class:"shadow-card-title"},ce={class:"shadow-card-text"},ue={class:"container"},me={class:"row appear-animation","data-appear-animation":"fadeInLeftShorter"},de={class:"col text-center"},Pe={__name:"mx-blogs",props:{classList:{type:Array,default:[],required:!1},content:{type:Object,default:{}},lang:{type:String,default:"en"}},setup(t){const r=f().public.baseURL;return(o,l)=>(i(),s("section",{class:m(["mx-blogs section-shape-devieder",t.classList])},[e("div",ee,[e("h2",te,n(t.content.title),1)]),e("div",ae,[e("div",ne,[(i(!0),s(u,null,d(t.content.blog_list,a=>(i(),s("div",{class:"col",onClick:_=>("navigateTo"in o?o.navigateTo:c(p))(a.link,{external:!0})},[e("div",se,[e("div",oe,[e("img",{class:"shadow-card-pic",alt:a.img.alt,src:c(r)+a.img.src},null,8,re)]),e("h5",le,n(a.title),1),e("p",ce,n(a.sub_title),1)])],8,ie))),256))])]),e("div",ue,[e("div",me,[e("div",de,[e("a",{class:"outline-btn",onClick:l[0]||(l[0]=a=>("navigateTo"in o?o.navigateTo:c(p))(t.content.blog_btn.href,{external:!0}))},n(t.content.blog_btn.text),1)])])])],2))}},fe=v("/img/maxthon.svg"),_e={class:"container"},ge={class:"row"},he={class:"col comparison-table appear-animation","data-appear-animation":"fadeInUpShorter"},pe={class:"index-feature-header"},be={class:"index-feature-cell"},ve=e("img",{class:"index-feature-img",src:fe,alt:"maxthon logo"},null,-1),xe=["src"],we=["src"],ye=["src"],ke={class:"index-feature-row"},Me={class:"index-feature-cell"},qe={__name:"mx-mobile-hidden",props:{classList:{type:Array,default:[],required:!1},content:{type:Object,default:{}},lang:{type:String,default:"en"}},setup(t){const r=f().public.baseURL;return(o,l)=>(i(),s("section",{class:m(["index-mobile-hidden",t.classList])},[e("div",_e,[e("div",ge,[e("div",he,[e("div",pe,[e("span",be,n(t.content.title),1),ve,e("img",{class:"index-feature-img",src:c(r)+"/img/chrome.svg",alt:"chrome logo"},null,8,xe),e("img",{class:"index-feature-img",src:c(r)+"/img/edge.svg",alt:"edge logo"},null,8,we),e("img",{class:"index-feature-img",src:c(r)+"/img/firefox.svg",alt:"firefox logo"},null,8,ye)]),(i(!0),s(u,null,d(t.content.comparison_list,a=>(i(),s("div",ke,[e("span",Me,n(a.com_item),1),(i(!0),s(u,null,d(a.value_list,_=>(i(),s("span",{class:m(["mx-icon index-feature-icon",_?"mx-icon-feature-checked":"mx-icon-feature-uncheck "]),style:{"font-size":"undefinedpx"}},null,2))),256))]))),256))])])])],2))}},Ie={page_name:"home",meta:{title:"Maxthon Browser for Secure Online Browsing",meta:[{name:"title",content:"Maxthon Browser for Secure Online Browsing"},{name:"keywords",content:"Maxthon, AI browser, Blockchain App, NBdomain, Maxthon Browser, Free VPN"},{name:"description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{name:"twitter:title",content:"Maxthon Browser for Secure Online Browsing"},{name:"twitter:description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{name:"twitter:image",content:"/img/share_cover.jpg"},{property:"og:title",content:"Maxthon Browser for Secure Online Browsing"},{property:"og:description",content:"Maxthon browser is a Chromium fast, private and secure web browser for PC, Mac and mobile. Download now for safer online browsing experience"},{property:"og:image",content:"/favicon.ico"},{property:"og:url",content:"https://www.maxthon.com/en/"}]},main_pic:{page_pre_title:"BROWSE WITH WINGS",page_title:"Maxthon Browser",page_sub_title:'Designed for <span class="highlight">Web3</span>，with built-in Notes, Password Manager and <span class="highlight">AI</span>',video:{src:"/video/Maxthon-Privacy-Features.mp4",poster:"/img/Maxthon_start_page.svg",title:"Maxthon Privacy Features Overview",aria_label:"Maxthon Privacy Features Overview",inner_text:"Your browser does not support the video tag. The video is about Maxthon private features."}},mx_dl_banner:{title:"Windows, macOS, Android, iOS, suitable chromium based browser",icons:[{name:"icon-win",plat:"win64"},{name:"icon-win32",plat:"win32"},{name:"icon-mac",plat:"mac"},{name:"icon-google",plat:"android"},{name:"icon-ios",plat:"ios"}],dl_btn_main:{text:"Download Now",url:""},dl_btn_text_devider:"or",dl_sub_btn:{text:"Beta Version",url:""}},mx_functions_1:{img:{src:"/img/pic-features-1.svg",alt:"Have the power to control your own online privacy"},pre_title:"Privacy focused private browser",title:"Have the power to control your own online privacy",sub_title:"Anti-IP tracking | Ad-blocking | Free VPN",text:"Maxthon delivers secure browsing with essential privacy features. It integrates anti-IP address tracking, ad-blocking, and a free VPN for secure browsing. Its privacy browsing and incognito mode offer additional layers of protection, while anti-phishing guards against online threats, ensuring a commitment to robust online security.",feature_list:[{feature_icon:"icon-data-cleaning",feature_title:"Data cleaning",feature_text:"Data cleaning enables automatic removal of browsing history and cookies upon exiting the browser.",feature_btn:{text:"Learn more",url:"/en/feature/data-cleaning"}},{feature_icon:"icon-adblock",feature_title:"Ad-blocking",feature_text:"Maxthon browser offers ad-blocking funtion in mobile versions, and optional extension in desktop.",feature_btn:{text:"Learn more",url:"/en/feature/adblock"}},{feature_icon:"icon-vpn",feature_title:"Free VPN",feature_text:"Free VPN, provided by Bright Data, ensures secure browsing with robust anti-IP tracking features.",feature_btn:{text:"Learn more",url:"/en/feature/vpn"}},{feature_icon:"icon-incognito",feature_title:"Incognito Mode",feature_text:"Incognito mode does not save any cookies or browsing history during your session, enabling easy private browsing.",feature_btn:{text:"Learn more",url:"/en/feature/incognito"}}]},mx_functions_2:{img:{src:"/img/pic-features-2.svg",alt:"Consistent browsing experience across different devices"},pre_title:"Cross-device synchronisation",title:"Consistent browsing experience across different devices",sub_title:"Convenient access on different devices for different accounts.",text:"Experience seamless cross-platform synchronization with a versatile chromium-based browser, suitable for Android, iOS, macOS, and Windows. Effortless cross-platform sync ensures your browsing stays consistent across all devices, providing convenient access to your accounts wherever you go.",feature_list:[{feature_icon:"icon-password",feature_title:"Passkeeper",feature_text:"Passkeeper auto-fills password, addresses and payments, syncing data securely across devices for convenience.",feature_btn:{text:"Learn more",url:"/en/feature/passkeeper"}},{feature_icon:"icon-maxnote",feature_title:"Maxnote",feature_text:"Maxnote is a powerful knowledge manager; organize notes and URLs efficiently in one place.",feature_btn:{text:"Learn more",url:"/en/feature/maxnote"}},{feature_icon:"icon-bookmark",feature_title:"Bookmarks",feature_text:"Bookmarks save and manage your favorite URLs for quick, organized access to preferred content.",feature_btn:{text:"Learn more",url:"/en/feature/bookmarks"}},{feature_icon:"icon-setting",feature_title:"Personal settings",feature_text:"Personal settings sync across devices, customize UI and search engine for a tailored experience.",feature_btn:{text:"Learn more",url:"/en/feature/setting"}},{feature_icon:"icon-qa",feature_title:"Quick Access",feature_text:"Quick Access puts your most-used websites at your start page.",feature_btn:{text:"Learn more",url:"/en/feature/quick-access"}},{feature_icon:"icon-extension",feature_title:"Extensions",feature_text:"Extensions expand the functionality of your browser, allowing you to add custom tools and services that integrate seamlessly into your browsing experience.",feature_btn:{text:"Learn more",url:"/en/feature/extension"}}]},mx_functions_3:{img:{src:"/img/pic-features-3.svg",alt:"Streamlined Browsing with Innovative Features"},pre_title:"Browsing Easily",title:"Streamlined Browsing with Innovative Features",sub_title:"Tab searching | Reading mode | Mouse Gesture",text:"Maxthon boosts browsing with easy tab management, multitasking split-screen, and focused reading mode. Accessibility is enriched with read-aloud, and navigation is swift with mouse gestures. Pinning the window retains key info at a glance.",feature_list:[{feature_icon:"icon-tab-searching",feature_title:"Tab Searchin",feature_text:"Tab searching quickly locates open tabs, streamlining navigation and management in Maxthon Browser.",feature_btn:{text:"Learn more",url:"/en/feature/tab-searching"}},{feature_icon:"icon-reading",feature_title:"Reading mode",feature_text:"Reading mode presents clean, distraction-free text for an enhanced and focused reading experience.",feature_btn:{text:"Learn more",url:"/en/feature/reading-mode"}},{feature_icon:"icon-split",feature_title:"Split screen",feature_text:"Split screen divides your view, enabling simultaneous browsing of multiple sites for efficient multitasking.",feature_btn:{text:"Learn more",url:"/en/feature/split-screen"}},{feature_icon:"icon-mouse-gesture",feature_title:"Mouse Gesture",feature_text:"Mouse Gestures offer intuitive navigation controls with simple movements for faster browsing in Maxthon.",feature_btn:{text:"Learn more",url:"/en/feature/mouse-gesture"}}]},reviews:{title:"Reviews",review_list:[{avatar:"/img/avatar-hc.png",username:"H.C",review_content:"Maxthon browser's Reading Mode, Maxnote, and stable syncing make research, note-taking, and idea organization effortless for writers, streamlining their workflow across various platforms.",date:"Feb 2024",stars:5},{avatar:"/img/avatar-jdoll.png",username:"J.Doll",review_content:"As a photographer, Maxthon browser's Snap Screen and image quick save features have been a game changer for me. I can quickly capture and save high-quality images, which is essential for my work.",date:"Mar 2023",stars:4},{avatar:"/img/avatar-mayw.png",username:"May.W",review_content:"I use Maxthon browser's free VPN every day during my commute to protect my privacy. Whether I'm browsing social media or reading the news, I feel secure and at ease.",date:"Apr 2024",stars:5},{avatar:"/img/avatar-likeke12.png",username:"likeke12",review_content:"I especially love Maxthon browser's Reading Mode. It's so easy on the eyes when I read at night, and the overall reading experience is fantastic. This feature makes my nighttime browsing so much more enjoyable.",date:"May 2024",stars:5},{avatar:"/img/avatar-roarstar.png",username:"Roarstar",review_content:"Maxthon browser's super drag feature has been a pleasant surprise. Dragging links and images is so quick and easy, and it significantly boosts my productivity. This feature is incredibly practical.",date:"Jan 2024",stars:4},{avatar:"/img/avatar-ninjax.png",username:"NinjaX",review_content:"As a programmer, I really appreciate Maxthon browser's split screen mode. It allows me to view code and documentation side by side, making my coding sessions much more efficient and seamless.",date:"Feb 2024",stars:5}]},faqs:{title:"FAQs",faq_list:[{q:"What is Maxthon Browser?",a:"Maxthon Browser is a versatile web browser known for its speed, security features, and rich functionality, including cloud-based services, ad blocking, and multi-device synchronization."},{q:"How do I install Maxthon Browser on my computer?",a:"To install Maxthon Browser, visit the official website, download the latest version suitable for your operating system, and follow the installation guide provided on the download page."},{q:"What makes Maxthon different from other web browsers?",a:"Maxthon stands out due to its unique features such as Maxnote for note-taking, split-screen mode for multitasking, resource sniffer for downloading media, and extensive privacy protection tools."},{q:"Is Maxthon Browser safe to use?",a:"Yes, Maxthon Browser is safe to use. It includes various security measures like encrypted data protection, ad and tracker blockers, and regular updates to safeguard against the latest online threats."},{q:"How does Maxthon protect my privacy?",a:"Maxthon provides robust privacy protection through features like Incognito Mode, which does not save your browsing history, and built-in tools to prevent tracking and safeguard your personal information."},{q:"How can I customize Maxthon Browser to fit my needs?",a:"Maxthon Browser offers various customization options, from changing the browser's skin to installing extensions and modifying default settings to enhance your browsing experience."},{q:"How can I get support if I encounter issues with Maxthon Browser?",a:"For support with Maxthon Browser, you can visit our official support page, join our community forum, or contact our customer service team directly through the contact information listed on our website."}],faq_btn:{text:"Go to Help Center",href:"https://docs.maxthon.com/#/"}},Blogs:{title:"Latest Posts",blog_list:[{title:"Browsing with AI: Optimise Browsing with Maxthon’s AIChat",sub_title:"by kay | Mar 18, 2024",link:"https://blog.maxthon.com/2024/03/18/optimise-browsing-with-maxthons-aichat/",img:{src:"/img/blog1.jpg",alt:"Browsing with AI: Optimise Browsing with Maxthon’s AIChat"}},{title:"Scam Websites: What They Are & Which Browser to use to Avoid Them",sub_title:"by kay | Mar 13, 2024",link:"https://blog.maxthon.com/2024/03/13/scam-websites-what-they-are-which-browser-to-use-to-avoid-them/",img:{src:"/img/blog2.jpg",alt:"Scam Websites: What They Are & Which Browser to use to Avoid Them"}},{title:"What are intrusive target ads and how to avoid them?",sub_title:"by kay | Mar 29, 2024",link:"https://blog.maxthon.com/2024/03/29/what-are-intrusive-target-ads-and-how-to-avoid-them/",img:{src:"/img/blog3.jpg",alt:"What are intrusive target ads and how to avoid them"}},{title:"Private browsing on iOS, an alternative to Safari and Chrome",sub_title:"by kay | Mar 24, 2024",link:"https://blog.maxthon.com/2024/03/24/private-browsing-on-ios-an-alternative-to-safari-and-chrome/",img:{src:"/img/blog4.jpg",alt:"Private browsing on iOS, an alternative to Safari and Chrome"}}],blog_btn:{text:"View more",href:"https://blog.maxthon.com/#/"}},browser_compare:{title:"Maxthon features comparison",comparison_list:[{com_item:"Tracks your behaviour",value_list:[!1,!0,!0,!0]},{com_item:"Notes manager",value_list:[!0,!1,!1,!1]},{com_item:"Send files between devices",value_list:[!0,!1,!1,!1]},{com_item:"Mouse gestures",value_list:[!0,!1,!0,!1]},{com_item:"Custom UI",value_list:[!0,!1,!0,!1]},{com_item:"Tab grouping",value_list:[!0,!0,!0,!1]},{com_item:"Tab sleeping",value_list:[!0,!1,!0,!1]},{com_item:"Split screen",value_list:[!0,!1,!0,!1]},{com_item:"Snap shots",value_list:[!0,!1,!0,!1]},{com_item:"Resource sniffer",value_list:[!0,!1,!1,!1]},{com_item:"Blockchain wallet",value_list:[!0,!1,!1,!1]},{com_item:"Video Download",value_list:[!0,!1,!1,!1]}]}},Se={page_name:"首页",meta:{title:"傲游浏览器 - 安全在线浏览",meta:[{name:"title",content:"傲游浏览器 - 安全在线浏览"},{name:"keywords",content:"傲游, AI浏览器, 区块链应用, NBdomain, 傲游浏览器, 免费VPN"},{name:"description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{name:"twitter:title",content:"傲游浏览器 - 安全在线浏览"},{name:"twitter:description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{name:"twitter:image",content:"/img/share_cover.jpg"},{property:"og:title",content:"傲游浏览器 - 安全在线浏览"},{property:"og:description",content:"傲游浏览器是一款基于Chromium内核的快速、私密和安全的PC、Mac和移动端网络浏览器。立即下载，享受更安全的在线浏览体验"},{property:"og:image",content:"/favicon.ico"},{property:"og:url",content:"https://www.maxthon.com/zh/"}]},main_pic:{page_pre_title:"展翅傲游，享用您应得的自由",page_title:"傲游浏览器",page_sub_title:'专为<span class="highlight">Web3</span>设计，内置傲游笔记、密码管理器和<span class="highlight">AI</span>',video:{src:"/video/Maxthon-Privacy-Features.mp4",poster:"/img/Maxthon_start_page.svg",title:"傲游隐私功能概述",aria_label:"傲游隐私功能概述",inner_text:"您的浏览器不支持视频标签。该视频介绍了傲游的隐私功能。"}},mx_dl_banner:{title:"适用于Windows、macOS、Android、iOS的基于Chromium的浏览器",icons:[{name:"icon-win",plat:"win64"},{name:"icon-win32",plat:"win32"},{name:"icon-mac",plat:"mac"},{name:"icon-android",plat:"android"},{name:"icon-ios",plat:"ios"}],dl_btn_main:{text:"立即下载",url:""},dl_btn_text_devider:"或",dl_sub_btn:{text:"测试版本",url:""}},mx_functions_1:{img:{src:"/img/pic-features-1.svg",alt:"掌控您的在线隐私"},pre_title:"注重隐私的私密浏览器",title:"掌控您的在线隐私",sub_title:"反IP跟踪 | 广告拦截 | 免费VPN",text:"傲游提供具有基本隐私功能的安全浏览。集成反IP地址跟踪、广告拦截和免费VPN，确保安全浏览。其隐私浏览和无痕模式提供额外的保护层，反钓鱼功能防止在线威胁，致力于强大的在线安全。",feature_list:[{feature_icon:"icon-data-cleaning",feature_title:"数据清理",feature_text:"数据清理功能可在退出浏览器时自动删除浏览历史和Cookies。",feature_btn:{text:"了解更多",url:"/zh/feature/data-cleaning"}},{feature_icon:"icon-adblock",feature_title:"广告拦截",feature_text:"傲游浏览器在移动版本中提供广告拦截功能，在桌面版本中提供可选扩展。",feature_btn:{text:"了解更多",url:"/zh/feature/adblock"}},{feature_icon:"icon-vpn",feature_title:"免费VPN",feature_text:"由Bright Data提供的免费VPN，确保具有强大反IP跟踪功能的安全浏览。",feature_btn:{text:"了解更多",url:"/zh/feature/vpn"}},{feature_icon:"icon-incognito",feature_title:"隐身窗口",feature_text:"隐身窗口在浏览过程中不保存您的任何cookies和浏览记录，轻松实现无痕浏览",feature_btn:{text:"了解更多",url:"/zh/feature/incognito"}}]},mx_functions_2:{img:{src:"/img/pic-features-2.svg",alt:"跨设备一致的浏览体验"},pre_title:"跨设备同步",title:"跨设备一致的浏览体验",sub_title:"在不同设备上同步您的个人数据",text:"体验跨平台无缝同步的多功能Chromium浏览器，适用于Android、iOS、macOS和Windows。跨平台同步确保您的浏览在所有设备上保持一致，无论您身在何处，都能方便地访问您的账户。",feature_list:[{feature_icon:"icon-password",feature_title:"密码大师",feature_text:"密码大师自动填写密码、地址和支付信息，在设备间安全同步数据，提供便利。",feature_btn:{text:"了解更多",url:"/zh/feature/passkeeper"}},{feature_icon:"icon-maxnote",feature_title:"傲游笔记",feature_text:"傲游笔记是一款强大的知识管理工具，可高效地组织笔记和URL。设备间实时同步。",feature_btn:{text:"了解更多",url:"/zh/feature/maxnote"}},{feature_icon:"icon-bookmark",feature_title:"书签",feature_text:"书签保存并管理您喜欢的URL，快速、有组织地访问喜欢的内容。设备间实时同步。",feature_btn:{text:"了解更多",url:"/zh/feature/bookmarks"}},{feature_icon:"icon-setting",feature_title:"个性化设置",feature_text:"个性化设置在设备间同步，定制UI和搜索引擎，提供量身定制的体验。设备间实时同步。",feature_btn:{text:"了解更多",url:"/zh/feature/setting"}},{feature_icon:"icon-qa",feature_title:"快速访问",feature_text:"快速访问将您最常用的网站放在起始页。设备间实时同步。",feature_btn:{text:"了解更多",url:"/zh/feature/quick-access"}},{feature_icon:"icon-extension",feature_title:"扩展程序",feature_text:"您可以添加自定义工具和服务，完美集成到您的浏览体验中。扩展列表在设备间同步。",feature_btn:{text:"了解更多",url:"/zh/feature/extension"}}]},mx_functions_3:{img:{src:"/img/pic-features-3.svg",alt:"创新功能的流畅浏览"},pre_title:"轻松浏览",title:"创新功能的流畅浏览",sub_title:"标签搜索 | 阅读模式 | 鼠标手势",text:"傲游通过便捷的标签管理、多任务分屏和专注的阅读模式提升浏览体验。通过朗读功能增强可访问性，鼠标手势让导航更加快捷。窗口置顶功能使关键信息一目了然。",feature_list:[{feature_icon:"icon-tab-searching",feature_title:"标签搜索",feature_text:"标签搜索可以快速定位打开的标签，简化Maxthon浏览器中的导航和管理。",feature_btn:{text:"了解更多",url:"/zh/feature/tab-searching"}},{feature_icon:"icon-reading",feature_title:"阅读模式",feature_text:"阅读模式提供干净、无干扰的文本，提升专注的阅读体验。",feature_btn:{text:"了解更多",url:"/zh/feature/reading-mode"}},{feature_icon:"icon-split",feature_title:"分屏模式",feature_text:"分屏模式可以分割视图，允许同时浏览多个网站，提高多任务处理效率。",feature_btn:{text:"了解更多",url:"/zh/feature/split-screen"}},{feature_icon:"icon-mouse-gesture",feature_title:"鼠标手势",feature_text:"鼠标手势通过简单的动作提供直观的导航控制，让在Maxthon中的浏览更加快捷。",feature_btn:{text:"了解更多",url:"/zh/feature/mouse-gesture"}}]},reviews:{title:"用户评价",review_list:[{avatar:"/img/avatar-hc.png",username:"H.C",review_content:"傲游浏览器的阅读模式、Maxnote和稳定的同步功能使创作者的资料查询、笔记和创意组织变得轻松高效，在各个平台上简化了工作流程。",date:"2024年2月",stars:5},{avatar:"/img/avatar-jdoll.png",username:"J.Doll",review_content:"作为一名摄影师，傲游浏览器的截图和图片快速保存功能对我来说非常有用。可以快速截图并保存高质量的图片。非常方便并且提升效率",date:"2023年3月",stars:4},{avatar:"/img/avatar-mayw.png",username:"May.W",review_content:"每天我都会使用傲游浏览器的免费VPN来保护我的隐私。无论是浏览社交媒体还是阅读新闻，我都感到安全和放心。",date:"2024年4月",stars:5},{avatar:"/img/avatar-likeke12.png",username:"likeke12",review_content:"我特别喜欢傲游浏览器的阅读模式。晚上阅读时眼睛不会疲劳，整体的阅读体验非常好。这个功能让我的夜间浏览更加愉快。",date:"2024年5月",stars:5},{avatar:"/img/avatar-roarstar.png",username:"Roarstar",review_content:"傲游浏览器的超级拖拽功能非常实用。拖拽链接和图片变得非常简单快捷，显著提高了工作效率。",date:"2024年1月",stars:4},{avatar:"/img/avatar-ninjax.png",username:"NinjaX",review_content:"作为一名程序员，我非常喜欢傲游浏览器的分屏模式。它让我可以并排查看代码和文档，使我的编码工作更加高效和流畅。",date:"2024年2月",stars:5}]},faqs:{title:"常见问题",faq_list:[{q:"什么是傲游浏览器？",a:"傲游浏览器是一款功能丰富的网页浏览器，以其速度、安全功能和丰富的功能而闻名，包括云服务、广告拦截和多设备同步。"},{q:"如何在我的电脑上安装傲游浏览器？",a:"要安装傲游浏览器，请访问官方网站，下载适合您操作系统的最新版本，并按照下载页面上的安装指南进行操作。"},{q:"傲游浏览器与其他浏览器有何不同？",a:"傲游浏览器具有独特的功能，如用于笔记的Maxnote、多任务处理的分屏模式、用于下载媒体的资源嗅探器和广泛的隐私保护工具，使其与众不同。"},{q:"傲游浏览器安全吗？",a:"是的，傲游浏览器是安全的。它包含各种安全措施，如加密数据保护、广告和跟踪器拦截器，并定期更新，以防范最新的在线威胁。"},{q:"傲游如何保护我的隐私？",a:"傲游通过无痕模式提供强大的隐私保护，该模式不会保存您的浏览历史，并内置工具以防止跟踪和保护您的个人信息。"},{q:"如何定制傲游浏览器以满足我的需求？",a:"傲游浏览器提供多种定制选项，从更改浏览器的皮肤到安装扩展，并修改默认设置，以增强您的浏览体验。"},{q:"如果我在使用傲游浏览器时遇到问题，如何获取支持？",a:"如果您需要傲游浏览器的支持，可以访问我们的官方网站支持页面，加入我们的社区论坛，或通过我们网站上列出的联系方式直接联系客户服务团队。"}],faq_btn:{text:"前往帮助中心",href:"https://docs.maxthon.com/#/"}},Blogs:{title:"最新帖子",blog_list:[{title:"使用AI浏览：优化傲游AIChat的浏览",sub_title:"作者 kay | 2024年3月18日",link:"https://blog.maxthon.com/2024/03/18/optimise-browsing-with-maxthons-aichat/",img:{src:"/img/blog1.jpg",alt:"使用AI浏览：优化傲游AIChat的浏览"}},{title:"诈骗网站：它们是什么以及使用哪个浏览器避免它们",sub_title:"作者 kay | 2024年3月13日",link:"https://blog.maxthon.com/2024/03/13/scam-websites-what-they-are-which-browser-to-use-to-avoid-them/",img:{src:"/img/blog2.jpg",alt:"诈骗网站：它们是什么以及使用哪个浏览器避免它们"}},{title:"什么是侵入性目标广告及如何避免？",sub_title:"作者 kay | 2024年3月29日",link:"https://blog.maxthon.com/2024/03/29/what-are-intrusive-target-ads-and-how-to-avoid-them/",img:{src:"/img/blog3.jpg",alt:"什么是侵入性目标广告及如何避免"}},{title:"在iOS上进行私密浏览，Safari和Chrome的替代品",sub_title:"作者 kay | 2024年3月24日",link:"https://blog.maxthon.com/2024/03/24/private-browsing-on-ios-an-alternative-to-safari-and-chrome/",img:{src:"/img/blog4.jpg",alt:"在iOS上进行私密浏览，Safari和Chrome的替代品"}}],blog_btn:{text:"查看更多",href:"https://blog.maxthon.com/#/"}},browser_compare:{title:"傲游功能对比",comparison_list:[{com_item:"跟踪您的行为",value_list:[!1,!0,!0,!0]},{com_item:"笔记管理器",value_list:[!0,!1,!1,!1]},{com_item:"在设备间发送文件",value_list:[!0,!1,!1,!1]},{com_item:"鼠标手势",value_list:[!0,!1,!0,!1]},{com_item:"自定义UI",value_list:[!0,!1,!0,!1]},{com_item:"标签分组",value_list:[!0,!0,!0,!1]},{com_item:"标签睡眠",value_list:[!0,!1,!0,!1]},{com_item:"分屏",value_list:[!0,!1,!0,!1]},{com_item:"截图",value_list:[!0,!1,!0,!1]},{com_item:"资源嗅探器",value_list:[!0,!1,!1,!1]},{com_item:"区块链钱包",value_list:[!0,!1,!1,!1]},{com_item:"视频下载",value_list:[!0,!1,!1,!1]}]}},Ae={en:Ie,zh:Se};export{Ce as _,Le as a,Pe as b,qe as c,Ae as h};
