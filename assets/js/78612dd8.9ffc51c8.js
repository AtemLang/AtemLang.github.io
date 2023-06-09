"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[7637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},i="Optional",l={unversionedId:"Language/Optional/Optional",id:"Language/Optional/Optional",title:"Optional",description:"Std-atem provides null safety by providing language built-in optional types.",source:"@site/docs/02-Language/06-Optional/Optional.md",sourceDirName:"02-Language/06-Optional",slug:"/Language/Optional/Optional",permalink:"/docs/Language/Optional/Optional",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/02-Language/06-Optional/Optional.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Static Array",permalink:"/docs/Language/Arrays/StaticArray"},next:{title:"Overview",permalink:"/docs/Language/Pointers/Overview"}},p={},u=[{value:"Optional Types",id:"optional-types",level:2},{value:"Optional Pointers",id:"optional-pointers",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"optional"},"Optional"),(0,o.kt)("p",null,"Std-atem provides null safety by providing language built-in optional types."),(0,o.kt)("p",null,"The question mark symbolizes the optional type, you can convert types to optional types by putting a question mark in front of them, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"optional_int mutable: ?i8 = 12;\noptional_int = null;\n")),(0,o.kt)("p",null,"Now the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"optional_int")," could be an ",(0,o.kt)("inlineCode",{parentName:"p"},"i8")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h2",{id:"optional-types"},"Optional Types"),(0,o.kt)("p",null,"You can create optional type by putting a ",(0,o.kt)("inlineCode",{parentName:"p"},"?")," in front of the type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"opt_int mutable: ?i8 = 12;\n")),(0,o.kt)("p",null,"To access the child type of an optional type, use compile-time reflection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"assert(^opt_int.getType().getChildType() == i8);\n")),(0,o.kt)("p",null,"You can initialize or assign ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),' to an optional to mean the optional is "empty":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"opt_int = null;\n")),(0,o.kt)("p",null,"To use the value of the optional, you need to unwrap it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"int1 := opt_int ?? -1;  //the int1 would be -1 when the opt_int is null\nint2 := try opt_int.?;  //will throw an UnwrappingException when the opt_int is null\nint3 := opt_int.!;  //will terminate program at runtime or terminate compilation at compile-time\n")),(0,o.kt)("p",null,"If the child type of an optional has members, the optional chaining operator ",(0,o.kt)("inlineCode",{parentName:"p"},"!.")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"?.")," will be used to access them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},'blog : struct = {\n    id: u8;\n    name: string;\n    checkBlogValidity: () -> bool func {...};\n};\n\nblog_opt: ?blog = .{id = 3, name = "std-atem"};\nid := try blog_opt?.id;\n//equivalent to:\nid := try blog_opt.?.id;\n\nname := blog_opt!.name; //will terminate program at runtime or terminate compilation at compile-time\n//equivalent to:\nname := blog_opt.!.name;\n')),(0,o.kt)("h2",{id:"optional-pointers"},"Optional Pointers"),(0,o.kt)("p",null,"The normal pointers in std-atem couldn't be null. If you want a pointer to be nullable, use optional pointer instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"ptr mutable: i8.& = null;   //compile error\nopt_ptr mutable: ?i8.& = null;  //good\n")),(0,o.kt)("p",null,"The optional pointer is guaranteed to be the same size of the child pointer type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"assert(^opt_ptr.getType().size() == ^i8.&.size());\n")))}m.isMDXComponent=!0}}]);