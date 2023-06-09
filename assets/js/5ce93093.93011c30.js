"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[2762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={},o="Map",p={unversionedId:"Language/Arrays/Map",id:"Language/Arrays/Map",title:"Map",description:"You can create associative arrays by [IndexType]ValueType:",source:"@site/docs/02-Language/06-Arrays/Map.md",sourceDirName:"02-Language/06-Arrays",slug:"/Language/Arrays/Map",permalink:"/docs/Language/Arrays/Map",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/02-Language/06-Arrays/Map.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Dynamic Arrays",permalink:"/docs/Language/Arrays/DynamicArray"},next:{title:"Set",permalink:"/docs/Language/Arrays/Set"}},i={},c=[{value:"Associative Array Members",id:"associative-array-members",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"map"},"Map"),(0,n.kt)("p",null,"You can create associative arrays by ",(0,n.kt)("inlineCode",{parentName:"p"},"[IndexType]ValueType"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-atem"},'map mutable: [string]i32 = { {"world": 1}, {"!": 2} };\nmap["hello"] = 42;\nfoo = map["hello"];\n')),(0,n.kt)("p",null,"To remove a key-value pair from associative arrays, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"remove")," member function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-atem"},'map mutable: [string]i32 = { {"hello": 0}, {"world": 1}, {"!": 2} };\nmap.remove("hello");\n')),(0,n.kt)("h2",{id:"associative-array-members"},"Associative Array Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);