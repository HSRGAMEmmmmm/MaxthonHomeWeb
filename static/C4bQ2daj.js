import{r as i,s as p,o as c,c as u,$ as f,q as m}from"./BSkRnryt.js";import{f as g}from"./BoITfCco.js";const _={__name:"download-button",props:{lang:{type:String,default:"en"},env:{type:String,default:"formal"},plat:{type:String,default:""}},setup(e){const l=e,{lang:r,env:s,plat:a}=l,t=i({});p(()=>{const n=mxconfig.downloadUrl[r][s],o={win64:n.win64Install,win32:n.win32Install,mac:n.macInstall,ios:n.iosAppStore,android:n.androidAppStore||n.androidInstall};a==""?t.value=o[g()]:t.value=o[a]});function d(){m(t.value,{open:{target:"_block"},external:!0})}return(n,o)=>(c(),u("div",{onClick:d},[f(n.$slots,"default")]))}};export{_};
