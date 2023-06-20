"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[5261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={description:"Will not be able to run 3.0 National Dex when it comes out."},i="Yuzu",l={unversionedId:"installation/yuzu",id:"installation/yuzu",title:"Yuzu",description:"Will not be able to run 3.0 National Dex when it comes out.",source:"@site/docs/installation/yuzu.mdx",sourceDirName:"installation",slug:"/installation/yuzu",permalink:"/docs/installation/yuzu",draft:!1,tags:[],version:"current",frontMatter:{description:"Will not be able to run 3.0 National Dex when it comes out."},sidebar:"docs",previous:{title:"Ryujinx",permalink:"/docs/installation/ryujinx"},next:{title:"Features List",permalink:"/docs/features"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Updating the Mod",id:"updating-the-mod",level:2},{value:"Notes",id:"notes",level:2},{value:"Is it working?",id:"is-it-working",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yuzu"},"Yuzu"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not install any other mods with Luminescent Platinum! You will risk breaking your game!")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download Ryujinx instead unless you absolutely ",(0,o.kt)("em",{parentName:"li"},"cannot")," run Ryujinx. Yuzu has incredible difficulty with running Luminescent 2.0F and many bugs that we will not be able to do much to help."),(0,o.kt)("li",{parentName:"ol"},'Set up your personal copy of Brilliant Diamond 1.3.0 in Yuzu. When setting it up, make sure you have files for both the game and the update \u2014 there is no such thing as a single file that runs as "Brilliant Diamond 1.3.0".',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Shining Pearl is ",(0,o.kt)("em",{parentName:"li"},"not")," supported."),(0,o.kt)("li",{parentName:"ul"},"Any other update is ",(0,o.kt)("em",{parentName:"li"},"not")," supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"Yuzu Title Bar",src:n(3410).Z,width:"459",height:"30"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"Yuzu Menu",src:n(3098).Z,width:"440",height:"110"})))),(0,o.kt)("li",{parentName:"ol"},"Download the mod ",(0,o.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/pokemonbdsp/mods/1"},"from here"),"."),(0,o.kt)("li",{parentName:"ol"},"Right click Brilliant Diamond in Yuzu."),(0,o.kt)("li",{parentName:"ol"},'Click "Open Mod Data Location".'),(0,o.kt)("li",{parentName:"ol"},'Extract the contents of the mod\'s zip into that opened location (i.e., "Luminescent" that contains the exefs and romfs).'),(0,o.kt)("li",{parentName:"ol"},'Change graphics setting to OpenGL and CPU accuracy to "accurate".',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Vulkan will crash game on evolution or eggs hatching, which is a Yuzu issue with BDSP."),(0,o.kt)("li",{parentName:"ul"},'"Auto" CPU accuracy will cause things to slide out of place and force doors open, rendering them inoperable and the player unable to continue.')))),(0,o.kt)("h2",{id:"updating-the-mod"},"Updating the Mod"),(0,o.kt)("p",null,'Back up your saves (right click on the game and click "Open Save Data Location" to copy those files elsewhere) just in case of any potential issue. Delete the old romfs and exefs files. Follow the install instructions again with the new files.'),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"THIS IS A ROMHACK, NOT AN INDEPENDENT GAME. YOU MUST ALREADY OWN BRILLIANT DIAMOND 1.3.0 TO INSTALL THIS."),(0,o.kt)("li",{parentName:"ul"},"Currently, only Brilliant Diamond is supported."),(0,o.kt)("li",{parentName:"ul"},"You must be on update 1.3.0 (Not 1.1.3).")),(0,o.kt)("h2",{id:"is-it-working"},"Is it working?"),(0,o.kt)("p",null,"If you are starting a new game, the language select screen should have a gold background, and all languages except English should be crossed out. Make sure to double check that the EXP Share is off as soon as you have more than one Pok\xe9mon. If it isn't, you have a bad install. Once that's been done, you can turn it on if you so desire from the computer in a Pok\xe9mon Center."),(0,o.kt)("p",null,"If you have a currently running game, the Pok\xe9mon party screen should have extra options for nicknaming/changing moves of Pok\xe9mon. You can also try the EXP Share check."))}m.isMDXComponent=!0},3410:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},3098:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yuzu2-66fb2861cc3e4e22ba8af27f089562a3.png"}}]);