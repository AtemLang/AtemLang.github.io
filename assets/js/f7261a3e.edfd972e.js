"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[556],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),p=i,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||r;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const r={},o="Function",c={unversionedId:"Language/Functions/Function",id:"Language/Functions/Function",title:"Function",description:"Functions are self-contained chunks of code that perform a specific task. You give a function a name that identifies what it does, and this name is used to call the function to perform its task when needed.",source:"@site/docs/02-Language/05-Functions/Function.md",sourceDirName:"02-Language/05-Functions",slug:"/Language/Functions/Function",permalink:"/docs/Language/Functions/Function",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/02-Language/05-Functions/Function.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Variables",permalink:"/docs/Language/Variables"},next:{title:"Lambda",permalink:"/docs/Language/Functions/Lambda"}},u={},s=[{value:"Defining and Calling Functions",id:"defining-and-calling-functions",level:2},{value:"Function Parameters",id:"function-parameters",level:2},{value:"Function Return Values",id:"function-return-values",level:2},{value:"Named Function Parameters",id:"named-function-parameters",level:2},{value:"Function Parameter Directives",id:"function-parameter-directives",level:2},{value:"Variadic Function Parameter",id:"variadic-function-parameter",level:2},{value:"Function Types",id:"function-types",level:2},{value:"Nested Functions",id:"nested-functions",level:2}],l={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"function"},"Function"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Functions")," are self-contained chunks of code that perform a specific task. You give a function a name that identifies what it does, and this name is used to call the function to perform its task when needed."),(0,i.kt)("p",null,"Like many other functional programming languages, functions are first-class citizens of Atem. You can assign them to the variables, pass them as parameters, return them from functions, or declare nested functions. The unified syntax of declaring variables and functions also implies the similarity between them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"//a variable\nfoo: i8 = 3;\n\n//a function\nbar: func = {};\n")),(0,i.kt)("p",null,"Every functions in Atem has its own types, consisting of the function's parameter types, return type, annotations, and contracts. You can use these types like any other types in Atem."),(0,i.kt)("h2",{id:"defining-and-calling-functions"},"Defining and Calling Functions"),(0,i.kt)("p",null,"Basically, a function definition contains the following parts (The list is ordered):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Function Name, the function names (usually) describes what functions do."),(0,i.kt)("li",{parentName:"ol"},"Column ",(0,i.kt)("inlineCode",{parentName:"li"},":"),", indicating you are defining some object."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Contracts, providing function's requirements of arguments."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Annotations, transforming the function behavior."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Parameter List, describing what argument the function would take."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)"),' Function Literal "Arrow" ',(0,i.kt)("inlineCode",{parentName:"li"},"->"),', indicating that we are defining some "mapping" between function parameters and function return values.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Return Type, describing what function will return."),(0,i.kt)("li",{parentName:"ol"},"Function Declarator ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),", indicating that we are defining a function."),(0,i.kt)("li",{parentName:"ol"},"Assignment ",(0,i.kt)("inlineCode",{parentName:"li"},"="),', indicating that you are "assign" a function body to a "variable".'),(0,i.kt)("li",{parentName:"ol"},"Function Body, containing the function's code."),(0,i.kt)("li",{parentName:"ol"},"Semicolon ",(0,i.kt)("inlineCode",{parentName:"li"},";"),", indicating we are done with current statement.")),(0,i.kt)("p",null,"Despite being a long list, many items of the list is optional and can be omitted if you don't need them. A simplest function definition just need to contains 1. 2. 8. 9. 10. 11., consider the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"//The simplest function definition you could wr\nsimplest: func = {};\n")),(0,i.kt)("h2",{id:"function-parameters"},"Function Parameters"),(0,i.kt)("h2",{id:"function-return-values"},"Function Return Values"),(0,i.kt)("h2",{id:"named-function-parameters"},"Named Function Parameters"),(0,i.kt)("h2",{id:"function-parameter-directives"},"Function Parameter Directives"),(0,i.kt)("h2",{id:"variadic-function-parameter"},"Variadic Function Parameter"),(0,i.kt)("h2",{id:"function-types"},"Function Types"),(0,i.kt)("h2",{id:"nested-functions"},"Nested Functions"))}d.isMDXComponent=!0}}]);