"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[556],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=i,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const r={},l="Function",o={unversionedId:"Language/Functions/Function",id:"Language/Functions/Function",title:"Function",description:"Functions are self-contained chunks of code that perform a specific task. You give a function a name that identifies what it does, and this name is used to call the function to perform its task when needed.",source:"@site/docs/02-Language/05-Functions/Function.md",sourceDirName:"02-Language/05-Functions",slug:"/Language/Functions/Function",permalink:"/docs/Language/Functions/Function",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/02-Language/05-Functions/Function.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Variables",permalink:"/docs/Language/Variables"},next:{title:"Lambda",permalink:"/docs/Language/Functions/Lambda"}},u={},s=[{value:"Defining and Calling Functions",id:"defining-and-calling-functions",level:2},{value:"Function Parameters",id:"function-parameters",level:2},{value:"Function Return Values",id:"function-return-values",level:2},{value:"Expression Function Body",id:"expression-function-body",level:2},{value:"Named Function Parameters",id:"named-function-parameters",level:2},{value:"Default Parameter Values",id:"default-parameter-values",level:2},{value:"Function Parameter Directives",id:"function-parameter-directives",level:2},{value:"Variadic Function Parameter",id:"variadic-function-parameter",level:2},{value:"Function Types",id:"function-types",level:2},{value:"Nested Functions",id:"nested-functions",level:2},{value:"Pure Functions",id:"pure-functions",level:2}],p={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"function"},"Function"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Functions")," are self-contained chunks of code that perform a specific task. You give a function a name that identifies what it does, and this name is used to call the function to perform its task when needed."),(0,i.kt)("p",null,"Like many other functional programming languages, functions are first-class citizens of Atem. You can assign them to the variables, pass them as parameters, return them from functions, or declare nested functions. The unified syntax of declaring variables and functions also implies the similarity between them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"//a variable\nfoo: i8 = 3;\n\n//a function\nbar: func = {};\n")),(0,i.kt)("p",null,"Every functions in Atem has its own types, consisting of the function's parameter types, return type, annotations, and contracts. You can use these types like any other types in Atem."),(0,i.kt)("h2",{id:"defining-and-calling-functions"},"Defining and Calling Functions"),(0,i.kt)("p",null,"Basically, a function definition contains the following parts (The list is ordered):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Function Name, the function names (usually) describes what functions do."),(0,i.kt)("li",{parentName:"ol"},"Column ",(0,i.kt)("inlineCode",{parentName:"li"},":"),", indicating you are defining some object."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Contracts, providing function's requirements of arguments."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Annotations, transforming the function behavior."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Parameter List, describing what argument the function would take."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)"),' Function Literal "Arrow" ',(0,i.kt)("inlineCode",{parentName:"li"},"->"),', indicating that we are defining some "mapping" between function parameters and function return values.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Return Type, describing what function will return."),(0,i.kt)("li",{parentName:"ol"},"Function Declarator ",(0,i.kt)("inlineCode",{parentName:"li"},"func"),", indicating that we are defining a function."),(0,i.kt)("li",{parentName:"ol"},"Assignment ",(0,i.kt)("inlineCode",{parentName:"li"},"="),', indicating that you are "assign" a function body to a "variable".'),(0,i.kt)("li",{parentName:"ol"},"Function Body, containing the function's code."),(0,i.kt)("li",{parentName:"ol"},"Semicolon ",(0,i.kt)("inlineCode",{parentName:"li"},";"),", indicating we are done with current statement.")),(0,i.kt)("p",null,"Despite being a long list, many items of the list is optional and can be omitted if you don't need them. A simplest function definition just need to contains 1. 2. 8. 9. 10. 11. Consider the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},'//The simplest function definition you could write in Atem\nsimplest: func = {\n    println("Hello World!");\n};\n')),(0,i.kt)("p",null,'In the example above, the defined a function named "simplest". The function ',(0,i.kt)("inlineCode",{parentName:"p"},"simplest")," takes no parameters and return no values. When called, the function will output ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello World!"')," in the console."),(0,i.kt)("p",null,"To call our function, we need to use the function name and an argument list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"simplest();\n")),(0,i.kt)("p",null,"The line above will call our ",(0,i.kt)("inlineCode",{parentName:"p"},"simplest")," function."),(0,i.kt)("h2",{id:"function-parameters"},"Function Parameters"),(0,i.kt)("p",null,"Real-world functions usually takes ",(0,i.kt)("em",{parentName:"p"},"lots")," of parameters to work. Luckily, Atem provides a well-defined syntaxes and mechanics to handle the most use cases well. "),(0,i.kt)("p",null,"Typically, a function parameter is consisted of (The list is ordered):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Parameter Label, the name for parameter in the function calling."),(0,i.kt)("li",{parentName:"ol"},"Parameter Name, the name for parameter in the function body."),(0,i.kt)("li",{parentName:"ol"},"Column ",(0,i.kt)("inlineCode",{parentName:"li"},":"),", indicating we are doing some declarations."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"(Optional)")," Parameter Directives, specifying what way will the parameter pass."),(0,i.kt)("li",{parentName:"ol"},"Parameter Type, describing what type of values that the parameter will accept.")),(0,i.kt)("p",null,"To add parameters to a function, you will need to write a function type literal ",(0,i.kt)("inlineCode",{parentName:"p"},"() -> ()"),"  before the function declarator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"simple_print: (msg: string) -> () func = {\n    println(msg);\n};\n")),(0,i.kt)("p",null,"You can add multiple parameters to the function by separating parameters with comma ",(0,i.kt)("inlineCode",{parentName:"p"},",")," in the parameter list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},'complex_print: (msg: string, terminator: string) -> () func = {\n    print("msg$terminator$");\n};\n')),(0,i.kt)("h2",{id:"function-return-values"},"Function Return Values"),(0,i.kt)("p",null,"Functions aren't required to have a return type. But if your function has parameter list, you still need to explicitly write the function return type (which will be ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"()")," in this case)."),(0,i.kt)("p",null,"To return some value from function, you need to specify a type to describe what type of value the function will return. Consider the ",(0,i.kt)("inlineCode",{parentName:"p"},"power")," example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"power: (base: f64, exp: i32) -> f64 func = {\n    return base**exp;\n};\n")),(0,i.kt)("p",null,"When a function has a return type, every possible return value should be the same type or at least implicit convertible to the return type, otherwise a compile error will occur:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},'error_return: (typename: string) -> i32 func = {\n    typename match {\n        "i8" = {return 3:i8;}   //Good, the returned value is implicitly convertible to the return type\n        "i32" = {return 3:i32}  //Good, the returned value is the same type of return type\n        "bool" = {return true;} //ERROR, Type "bool" is not implicitly convertible to the return type "i32"\n    };\n};\n')),(0,i.kt)("p",null,"If a function is called with return values be ignored, a error will occur:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},'sin(1); //ERROR, Ignoring return values from function call "sin(1)"\n')),(0,i.kt)("p",null,"To avoid this, you can assign the return value to the placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"_ = sin(1);\n")),(0,i.kt)("p",null,"Or add a ",(0,i.kt)("inlineCode",{parentName:"p"},"@noReturnCheck")," annotation to the function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"sin: @noReturnCheck (value: f64) -> f64 = {...};\n\nsin(1);\n")),(0,i.kt)("p",null,"Or just turn the safety profile off:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"@compileTimeSafetyProfile(safety.compiletime.ruleset.no_return_value_ignorance, false);\nsin(1);\n")),(0,i.kt)("p",null,"You can use a tuple type as the return type to enable returning multiple values."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pairFinder")," example defines a function that will find a matching key pair in the given map and return the key and value in the tuple form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"pairFinder: (key: string, map: [string]i32) -> (key: string, value: i32) func = {\n    for([k, v] in map) {\n        if(k == key) {\n            return .{key = k, value = v};\n        }\n    }\n};\n")),(0,i.kt)("p",null,"You can also express ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," state of return value by using optionals, consider a enhanced version of ",(0,i.kt)("inlineCode",{parentName:"p"},"pairFinder"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"betterPairFinder: (key: string, map: [string]i32) -> ?(key: string, value: i32) func = {\n    for([k, v] in map) {\n        if(k == key) {\n            return .{key = k, value = v};\n        }\n    }\n    return null;\n};\n")),(0,i.kt)("h2",{id:"expression-function-body"},"Expression Function Body"),(0,i.kt)("p",null,"If the function body is a single expression, then the function will return the expression's value, no explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," is needed. This makes some simple arithmetic functions more convenient to write, like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"plus: (a: i8, b:i8) -> i8 func = a + b;\n")),(0,i.kt)("p",null,"To keep syntax consistent, you can also use a block to contain the expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"plus: (a: i8, b:i8) -> i8 func = {a + b};\n")),(0,i.kt)("h2",{id:"named-function-parameters"},"Named Function Parameters"),(0,i.kt)("p",null,"For now, the only way to recognize the usage of each argument when calling a function is just by the order of the argument. Consider the previous ",(0,i.kt)("inlineCode",{parentName:"p"},"power")," example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"power: (base: f64, exp: i32) -> f64 func = {\n    return base**exp;\n};\n")),(0,i.kt)("p",null,"Because there is no obvious way to distinguish the two arguments, we could get surprising results when we accidently pass the arguments in wrong order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"eight := power(3, 2);   //Oops, means 2**3, but accidently get 3**2!\n")),(0,i.kt)("p",null,"We can avoid the problem by specifying ",(0,i.kt)("em",{parentName:"p"},"argument labels")," explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"eight := power(exp: 3, base: 2);    //Good, the intent is much more clear\n")),(0,i.kt)("p",null,"You may notice for now the argument labels are still optional, which also may lead to confusion and errors. To make the argument labels mandatory, you need to add ",(0,i.kt)("em",{parentName:"p"},"parameter labels")," to the parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"betterPower: (powerBase base: f64, powerExp exp: i32) -> f64 func = {\n    return base**exp;\n};\n")),(0,i.kt)("p",null,"Now the parameter names are consisted of two parts: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parameter Label (",(0,i.kt)("inlineCode",{parentName:"li"},"powerBase")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"powerExp")," in the example) is the name which should be explicit specified when being called."),(0,i.kt)("li",{parentName:"ul"},"Parameter Name (",(0,i.kt)("inlineCode",{parentName:"li"},"base")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"exp")," in the example) is the name which only could be used in the function body.")),(0,i.kt)("p",null,"The parameters which have labels, or ",(0,i.kt)("em",{parentName:"p"},"labelled parameters"),", must be specified by argument labels when calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"betterPower(2, 3);  //Error\nbetterPower(powerBase: 2, powerExp: 3); //Good\n")),(0,i.kt)("p",null,"Unlike unlabelled parameters, the order of labelled arguments can be arbitrary, so this is a valid function call too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-atem"},"betterPower(powerExp: 3, powerBase: 3); //Good\n")),(0,i.kt)("h2",{id:"default-parameter-values"},"Default Parameter Values"),(0,i.kt)("h2",{id:"function-parameter-directives"},"Function Parameter Directives"),(0,i.kt)("h2",{id:"variadic-function-parameter"},"Variadic Function Parameter"),(0,i.kt)("h2",{id:"function-types"},"Function Types"),(0,i.kt)("h2",{id:"nested-functions"},"Nested Functions"),(0,i.kt)("h2",{id:"pure-functions"},"Pure Functions"))}m.isMDXComponent=!0}}]);