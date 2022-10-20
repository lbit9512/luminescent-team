"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[9226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Atmosphere",l={unversionedId:"installation/atmosphere",id:"installation/atmosphere",title:"Atmosphere",description:"1. Download the mod from HERE (not the github link)",source:"@site/docs/installation/atmosphere.md",sourceDirName:"installation",slug:"/installation/atmosphere",permalink:"/docs/installation/atmosphere",draft:!1,editUrl:"https://github.com/TeamLumi/luminescent-team/blob/main/docs/installation/atmosphere.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/category/installation"},next:{title:"Ryujinx",permalink:"/docs/installation/ryujinx"}},s={},c=[{value:"Notes",id:"notes",level:2},{value:"Not working?",id:"not-working",level:2},{value:"Fix the Archive Bit",id:"fix-the-archive-bit",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"atmosphere"},"Atmosphere"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the mod from HERE (not the github link)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Extract the files somewhere on your computer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Open your Switch SD folder and drop "exefs" and "romfs" into atmosphere/contents/0100000011D90000/ (Create any folders that do not exist)')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go into the exefs folder and move the .ips file (the string changes every build) to /atmosphere/exefs_patches/Luminescent (Once again, create any folders that don't exist.)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Boot your Switch into Hekate. Press "Tools" > "Arch bit \u2022 RCM \u2022 Touch \u2022 Pkg1/2" > "Fix Archive Bit". (Images below)'))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Currently, only Brilliant Diamond is supported"),(0,a.kt)("li",{parentName:"ul"},"You must be on update 1.3.0 (Not 1.1.3)"),(0,a.kt)("li",{parentName:"ul"},"You must NOT have a folder containing romfs and exefs (the exefs and romfs file must be directly in the 0100000011D90000 folder)")),(0,a.kt)("h2",{id:"not-working"},"Not working?"),(0,a.kt)("p",null,"If you have followed all of these instructions and the game still doesn't boot, please use a homebrew file reader such as NX-Shell and navigate to atmosphere/contents/0100000011D90000 and check that romfs and exefs (and the folders within) are displaying as folders as intended."),(0,a.kt)("p",null,"If they are instead displaying as files please make your own exefs and romfs in the appropriate spot and place the contents inside yourself. Check again in NX-Shell that everything is displaying as folders now."),(0,a.kt)("p",null,"You may also need to redownload the mod entirely in case of a corruption."),(0,a.kt)("h2",{id:"fix-the-archive-bit"},"Fix the Archive Bit"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fix Archive Bit 1",src:n(1343).Z,width:"1083",height:"609"}),"\n",(0,a.kt)("img",{alt:"Fix Archive Bit 2",src:n(7005).Z,width:"1083",height:"609"}),"\n",(0,a.kt)("img",{alt:"Fix Archive Bit 3",src:n(7404).Z,width:"1083",height:"609"})))}d.isMDXComponent=!0},1343:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fix_archive_bit_1-655c9389661af0aa5a888a7e42b0d40d.png"},7005:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fix_archive_bit_2-ddc85502f7f85d07141f1d1622410bf8.png"},7404:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fix_archive_bit_3-5e0c0f71f865158b20c113f7febc970e.png"}}]);