"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[512],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||l;return t?a.createElement(m,o(o({ref:r},p),{},{components:t})):a.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5622:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const l={},o="Array Literals",i={unversionedId:"Arrays/ArrayLiteral",id:"Arrays/ArrayLiteral",title:"Array Literals",description:"The array's literals is represented in the form of ArrayType:",source:"@site/docs/06-Arrays/ArrayLiteral.md",sourceDirName:"06-Arrays",slug:"/Arrays/ArrayLiteral",permalink:"/docs/Arrays/ArrayLiteral",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/06-Arrays/ArrayLiteral.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Advanced Array Operations",permalink:"/docs/Arrays/Advanced"},next:{title:"Dynamic Arrays",permalink:"/docs/Arrays/DynamicArray"}},s={},c=[],p={toc:c},u="wrapper";function y(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"array-literals"},"Array Literals"),(0,n.kt)("p",null,"The array's literals is represented in the form of ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayType{list}"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-atem"},"//static array literal\n[3]u8{1, 2, 3, 4, 5}\n//the size of static array could be deduced\n[_]u8{1, 3, 4, 6}\n\n//multidimension static array literal\n[_][_]i32{\n    {1, 2, 3},\n    {2, 1, 3},\n    {3 ,2 ,1},  //redundant comma is allowed\n}\n\n//dynamic array literal\n[]i32{1, 4, 5, 4}\n\n//map literal\n[string]bool{ {\"hello\", true}, {\"world\", true} }\n\n//set literal\n[char]{'a', 'c', 'd'}\n")),(0,n.kt)("p",null,"If the variable is already has a array type, you can use the anonymous array literals:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-atem"},"arr: [_]i8 = .{1, 3, 5, 7, 9};\n")),(0,n.kt)("p",null,"If the variable's type is to be deduced, the anonymous array literals will be deduced to be a tuple:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-atem"},"tup := .{1, 'a', true, 2.0f};\nassert(tup.[1] == 'a');\nassert(tup::[2] == bool);\n")))}y.isMDXComponent=!0}}]);