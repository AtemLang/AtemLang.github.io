"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[3881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="Project Structure",i={unversionedId:"Project Structure/Overview",id:"Project Structure/Overview",title:"Project Structure",description:"Introduction",source:"@site/docs/10-Project Structure/Overview.md",sourceDirName:"10-Project Structure",slug:"/Project Structure/Overview",permalink:"/docs/Project Structure/Overview",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/10-Project Structure/Overview.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Overview",permalink:"/docs/Namespaces/Overview"},next:{title:"Operator List",permalink:"/docs/Operators/Operator List"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Module",id:"module",level:2},{value:"Declaring a Module",id:"declaring-a-module",level:3},{value:"Access Control",id:"access-control",level:3},{value:"Package and Project",id:"package-and-project",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project-structure"},"Project Structure"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"An typical Atem project often contains four project structure levels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Source File"),": A source file is a single Atem source file which is contained in a module.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Module"),": A module is a single unit of functionality. Modules can be imported by other module with the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," keyword.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Package"),": A package is a smallest unit for compilation and code distribution. A package will produce single executable or library.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Project"),": A project is a set of related package that presents some set of functionality."))),(0,a.kt)("h2",{id:"module"},"Module"),(0,a.kt)("h3",{id:"declaring-a-module"},"Declaring a Module"),(0,a.kt)("p",null,"You can declare modules using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SomeModuleName: module = {};")," syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-atem"},"mainmodule: module = {\n    main: func = {\n        return 0;\n    };\n};\n")),(0,a.kt)("p",null,"Nested modules are also allowed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-atem"},"example: module = {\n    foo: module = {\n    \n    };\n    bar: module = {\n    \n    };\n};\n")),(0,a.kt)("p",null,"You can omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"= {}")," to write a short form of module declaration if there is only one module in the source file. The short form must be written in the first line of the source file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-atem"},"mainmodule: module;\n\nmain: func = {\n    return 0;\n};\n")),(0,a.kt)("h3",{id:"access-control"},"Access Control"),(0,a.kt)("p",null,"Atem provides five levels of access control:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Open Access"),": Open access enables entities to be used within any code from their defined module, and also in a source file from another module that imports the defining module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Public Access"),": Public access is almost the same as the open access. However, open access enables code from another module to ",(0,a.kt)("strong",{parentName:"li"},"inheritance")," and ",(0,a.kt)("strong",{parentName:"li"},"overriding"),", which can increase the unnecessary relations between modules. If your classes are only designed for inheritance and overriding from their own module, prefer public access to open access instead."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Internal Access"),": Internal access enables entities to be used from the same module. Any usage outside the module will be considered as a compile error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File-private Access"),": File-private access restricts entities only to be used from their source file. Any usage outside the source file will be considered as a compile error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Private Access"),": Private access restricts entities only to be used to the enclosing definition.")),(0,a.kt)("p",null,"You can specify the access level of entities by placing access level specifiers before their definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-atem"},"open SomeOpenClass: class = {};\npublic SomePublicClass: class = {};\ninternal SomeInternalClass: class = {};\nfilePrivate SomeFilePrivateClass: class = {};\nprivate SomePrivateClass: class = {};\n")),(0,a.kt)("h2",{id:"package-and-project"},"Package and Project"))}m.isMDXComponent=!0}}]);