"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[7602],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>u});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),b=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=b(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(r),l=a,u=d["".concat(p,".").concat(l)]||d[l]||m[l]||o;return r?t.createElement(u,i(i({ref:n},s),{},{components:r})):t.createElement(u,i({ref:n},s))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},7113:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>b});var t=r(7462),a=(r(7294),r(3905));const o={},i="Operator Precedence and Associativity",c={unversionedId:"Operators/Operator Precedence",id:"Operators/Operator Precedence",title:"Operator Precedence and Associativity",description:"",source:"@site/docs/11-Operators/Operator Precedence.md",sourceDirName:"11-Operators",slug:"/Operators/Operator Precedence",permalink:"/zh-Hans/docs/Operators/Operator Precedence",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/11-Operators/Operator Precedence.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Operator List",permalink:"/zh-Hans/docs/Operators/Operator List"},next:{title:"Overview",permalink:"/zh-Hans/docs/Statements/Overview"}},p={},b=[],s={toc:b},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operator-precedence-and-associativity"},"Operator Precedence and Associativity"),(0,a.kt)("mermaid",{value:'---\ntitle: "Atem Operator Precedence and Associativity"\n---\ngraph BT;\nparen["(...)"]\n\nidentifier["x"]\n\nmember_access>"a.b"]\n\nadd_and_sub>"a + b<br>\na +& b<br>\na +| b<br>\na - b<br>\na -& b<br>\na -| b"]\n\nmul_and_div>"a * b<br>\na *& b<br>\na *| b<br>\na / b"]\n\nremainder["a % b"]\n\ntype_casting["a as T<br>\na as? T<br>\na as! T<br>\na is T"]\n\nbit_or>"a | b"]\nbit_and>"a & b"]\nbit_not>"~a"]\nbit_xor>"a ^^ b"]\n\nbit_shift["a << b<br>\na <<| b<br>\na >> b"]\n\ncompare["a == b<br>\na != b<br>\na < b<br>\na > b<br>\na <= b<br>\na >= b<br>\na <=> b"]\n\nnot["not a"]\nand["a and b"]\nor["a or b"]\n\nreflect["a^"]\nreify["#a"]\ninject["a <- b"]\n\nrange["a...b<br>\na..<b<br>\na<..b<br>\na<.<b"]\n\npipeline>"a /> b<br>\na |> b"]\n\nderef["a.*"]\naddress["a.@"]\n\nunwrapping["a?<br>\na!<br>\na ?? b"]\n\npower>"a ** b<br>\na **& b<br>\na **| b"]\n\nnegation["-a"]\n\nempty1((" "))\nempty2((" "))\nempty3((" "))\n\nmember_access --\x3e paren\nmember_access --\x3e identifier\nnegation --\x3e member_access\nbit_not --\x3e member_access\nadd_and_sub --\x3e mul_and_div\nmul_and_div --\x3e power\npower --\x3e empty1\nempty1 --\x3e negation\nempty1 --\x3e bit_not\nremainder --\x3e empty1\ntype_casting --\x3e empty1\nbit_and --\x3e empty1\nbit_or --\x3e empty1\nbit_xor --\x3e empty1\nbit_shift --\x3e empty1\n\ncompare --\x3e add_and_sub\ncompare --\x3e remainder\ncompare --\x3e type_casting\ncompare --\x3e bit_or\ncompare --\x3e bit_and\ncompare --\x3e bit_xor\ncompare --\x3e bit_shift\n\nand --\x3e empty2\nor --\x3e empty2\n\nempty3 --\x3e and\nempty3 --\x3e or\n\nempty2 --\x3e compare\nempty2 --\x3e not\nnot ----\x3e member_access\n\nreify --\x3e reflect\ninject --\x3e reify\n\naddress --\x3e deref\nderef --\x3e range\npipeline --\x3e address\n\nrange --\x3e empty3\n\nunwrapping --\x3e pipeline\n\nreflect --\x3e unwrapping'}))}m.isMDXComponent=!0}}]);