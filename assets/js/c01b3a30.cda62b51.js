"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[3319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="Scripting Basics",p={unversionedId:"scripting/Scripting Guide 2",id:"scripting/Scripting Guide 2",title:"Scripting Basics",description:"Once you have ev-as setup per the readme in the repository I also highly recommend Visual Studio Code and the language support for evscript extension.",source:"@site/rom-hacking/scripting/Scripting Guide 2.md",sourceDirName:"scripting",slug:"/scripting/Scripting Guide 2",permalink:"/rom-hacking/scripting/Scripting Guide 2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ROMHackingSidebar",previous:{title:"Quick and Dirty Scripting Guide",permalink:"/rom-hacking/scripting/Scripting Guide 1"},next:{title:"Exefs Editing",permalink:"/rom-hacking/category/exefs-editing"}},s={},l=[{value:"Baby steps",id:"baby-steps",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scripting-basics"},"Scripting Basics"),(0,i.kt)("p",null,"Once you have ev-as setup per the readme in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/z80rotom/ev-as"},"repository")," I also highly recommend ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Heroj04.bdsp-evscript-language-support"},"language support for evscript extension"),"."),(0,i.kt)("p",null,"You need to move your edited scripts to the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," folder, not parsed. If you don't have a scripts folder, make one and move your edited scripts here. This is important because ev-as will only build scripts from the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," folder. It does not look at ",(0,i.kt)("inlineCode",{parentName:"p"},"parsed"),"."),(0,i.kt)("p",null,"Also, when copying over your script changes to your emulator/switch for testing, you want to take the ",(0,i.kt)("inlineCode",{parentName:"p"},"ev_scripts")," file from the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," folder, not ",(0,i.kt)("inlineCode",{parentName:"p"},"Dpr"),", as ",(0,i.kt)("inlineCode",{parentName:"p"},"Dpr")," will not have the changes. If you don't have a ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," folder, make one."),(0,i.kt)("p",null,"Now you have the context on how to get your scripts interacting with the game, lets get to adding things."),(0,i.kt)("h2",{id:"baby-steps"},"Baby steps"),(0,i.kt)("p",null,"For our first attempt at scripting, we will change what an NPC says. Open VSC (Visual Studio Code)"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"c01.ev"),", which is Jubilife external's scripts. Find ",(0,i.kt)("inlineCode",{parentName:"p"},"ev_c01_woman3")," which should have a function body of "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"_EASY_OBJ_MSG('dp_scenario1%27-msg_c01_woman3_01')\nEND()\n")),(0,i.kt)("p",null,"The game looks for messages in this manner, find the ",(0,i.kt)("inlineCode",{parentName:"p"},"dp_scenario1")," file, then find ",(0,i.kt)("inlineCode",{parentName:"p"},"27-msg_c01_woman3_01")," inside it. ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," is just a separator. "),(0,i.kt)("p",null,'Back in the early days of scripting, we had to use tooling to create new messages in these files, but thankfully, with the addition of macros, you no longer need to do this.\nMost dialogue commands have been extended to have what is known as a "Macro" variant, which you can pass text to, which will then be displayed as dialogue. In this instance,  it would be ',(0,i.kt)("inlineCode",{parentName:"p"},"_MACRO_EASY_OBJ_MSG"),"."),(0,i.kt)("p",null,"Now what do we do? That's easy, you simply change the current ",(0,i.kt)("inlineCode",{parentName:"p"},"_EASY_OBJ_MSG")," line to the following."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_MACRO_EASY_OBJ_MSG('dp_scenario1', '27-msg_c01_woman3_01', 'Spinda is the best Pok\xe9mon ever.')")),(0,i.kt)("p",null,"Now all you need to do is save and compile your new script. I personally use ",(0,i.kt)("inlineCode",{parentName:"p"},"python3 src/ev_as.py")," with my setup."),(0,i.kt)("p",null,"Once that completes (you may need to provide the dp_scenario1 message file in another folder).  Simply take ",(0,i.kt)("inlineCode",{parentName:"p"},"bin\\ev_script")," and put it in your mod folder in ",(0,i.kt)("inlineCode",{parentName:"p"},"Dpr"),"."))}u.isMDXComponent=!0}}]);