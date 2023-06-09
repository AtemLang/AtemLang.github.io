"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[8780],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),m=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=m(e.components);return a.createElement(c.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(t),u=n,d=s["".concat(c,".").concat(u)]||s[u]||y[u]||i;return t?a.createElement(d,l(l({ref:r},p),{},{components:t})):a.createElement(d,l({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5471:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=t(7462),n=(t(7294),t(3905));const i={},l="Dynamic Arrays",o={unversionedId:"Language/Arrays/DynamicArray",id:"Language/Arrays/DynamicArray",title:"Dynamic Arrays",description:"You can create dynamic-sized arrays by using []Type:",source:"@site/docs/02-Language/06-Arrays/DynamicArray.md",sourceDirName:"02-Language/06-Arrays",slug:"/Language/Arrays/DynamicArray",permalink:"/docs/Language/Arrays/DynamicArray",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/02-Language/06-Arrays/DynamicArray.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Array Literals",permalink:"/docs/Language/Arrays/ArrayLiteral"},next:{title:"Map",permalink:"/docs/Language/Arrays/Map"}},c={},m=[{value:"Dynamic-sized Array Members",id:"dynamic-sized-array-members",level:2}],p={toc:m},s="wrapper";function y(e){let{components:r,...t}=e;return(0,n.kt)(s,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dynamic-arrays"},"Dynamic Arrays"),(0,n.kt)("p",null,"You can create dynamic-sized arrays by using ",(0,n.kt)("inlineCode",{parentName:"p"},"[]Type"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-atem"},"dynarr: []i32 = {1, 2, 3};\n")),(0,n.kt)("p",null,"The length of dynamic-sized arrays can be modified by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"setArrayLength()")," member function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-atem"},"dynarr mutable: []i32 = {1, 2, 3};\ndynarr.setArrayLength(8);\ndynarr[7] = 5;  //good\n")),(0,n.kt)("h2",{id:"dynamic-sized-array-members"},"Dynamic-sized Array Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);