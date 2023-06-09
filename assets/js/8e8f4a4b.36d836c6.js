"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[1205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=i(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(g,p(p({ref:t},o),{},{components:n})):a.createElement(g,p({ref:t},o))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:r,p[1]=u;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={},p="Tuple",u={unversionedId:"Language/Sum Type/Tuple",id:"Language/Sum Type/Tuple",title:"Tuple",description:"Tuple is like a anonymous struct with convenient light-weight syntax. A common usage of tuple is to enable return multiple value from functions. Tuple's value/type elements can be access with indexes or names(if any).",source:"@site/docs/02-Language/07-Sum Type/Tuple.md",sourceDirName:"02-Language/07-Sum Type",slug:"/Language/Sum Type/Tuple",permalink:"/docs/Language/Sum Type/Tuple",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/02-Language/07-Sum Type/Tuple.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Optional",permalink:"/docs/Language/Sum Type/Optional"},next:{title:"Variant",permalink:"/docs/Language/Sum Type/Variant"}},s={},i=[{value:"Tuple Type",id:"tuple-type",level:2},{value:"Tuple Literal",id:"tuple-literal",level:2},{value:"Accessing Elements",id:"accessing-elements",level:2},{value:"Traversing Tuples",id:"traversing-tuples",level:2},{value:"Decomposing Tuples",id:"decomposing-tuples",level:2}],o={toc:i},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tuple"},"Tuple"),(0,r.kt)("p",null,"Tuple is like a anonymous struct with convenient light-weight syntax. A common usage of tuple is to enable return multiple value from functions. Tuple's value/type elements can be access with indexes or names(if any). "),(0,r.kt)("h2",{id:"tuple-type"},"Tuple Type"),(0,r.kt)("p",null,"A tuple type is a comma-separated list of types, enclosed in parentheses."),(0,r.kt)("p",null,"The tuple type is consisted by the type, name and order of its elements, means these types are different:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-atem"},"//they are different because different element order\ncomptime assert((i32, i8, char) != (i8, i32, char));\n\n//they are different because different element types\ncomptime assert((bool) != (char));\n\n//they are different because different element names\ncomptime assert((name: string, id: i32) != (book: string, bid: i32));\n")),(0,r.kt)("p",null,"You can create a empty tuple with ",(0,r.kt)("inlineCode",{parentName:"p"},"(-)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-atem"},"comptime assert((-) == void);   //they are the same\n")),(0,r.kt)("h2",{id:"tuple-literal"},"Tuple Literal"),(0,r.kt)("p",null,"The syntaxes of tuple literals is just like the array literals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-atem"},"empty_tup := (-){};\ntup1 := (i8, char, bool){1, 'a', true};\ntup2 := (a: i8, b: char, c: bool){a = 1, b = 'a', c = true};\n")),(0,r.kt)("p",null,"Similarly, the type of tuple element could be omitted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-atem"},"empty_tup := .{};\ntup1 := .{1, 'a', true};\ntup2 := .{a = 1, b = 'a', c = true};\n")),(0,r.kt)("h2",{id:"accessing-elements"},"Accessing Elements"),(0,r.kt)("p",null,"Generally, a tuple has two types of elements: values and types. And tuple's elements can be accessed using indexes or names. So we have four syntax for accessing elements in tuple:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Using Indexes")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Using Names")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Accessing Types")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"::[n]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"::TypeName"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Accessing Values")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".[n]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".name"))))),(0,r.kt)("p",null,"All elements in tuple could be accessed by indexes, but only named elements could be accessed by names:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-atem"},"tup mutable: (i8, end: char, do: bool) = .{1, end = 'b', do = true};\nassert(tup.[0] == 1 and tup.[1] == 'b' and tup.[2] == true);\nassert(tup::[0] == i8 and tup::[1] == char and tup::[2] == bool);\n\n//only the named elements could be accessed by names:\nassert(tup.end == 'b' and tup.do == true);\nassert(tup::end == char and tup::do == bool);\n")),(0,r.kt)("h2",{id:"traversing-tuples"},"Traversing Tuples"),(0,r.kt)("h2",{id:"decomposing-tuples"},"Decomposing Tuples"),(0,r.kt)("p",null,"The decomposing syntax of tuple is like the ",(0,r.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/language/structured_binding"},"structured binding")," in C++:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tup := .{a = 1, b = 'a', c = true};\n[i, c, b] := tup;\nassert(i == 1 and c == 'a' and b == true);\n")),(0,r.kt)("p",null,"You can also create sub-tuples by decomposing them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-atem"},'tup := .{1, "awa", "hello", true};\n[i, sub_tup...] := tup;\nassert(^sub_tup.getType() == (string, string, bool));\n')))}m.isMDXComponent=!0}}]);