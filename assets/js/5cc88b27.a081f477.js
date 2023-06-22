"use strict";(self.webpackChunkstd_atem_doc=self.webpackChunkstd_atem_doc||[]).push([[1490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=s(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return n?i.createElement(m,r(r({ref:t},l),{},{components:n})):i.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[h]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=n(7462),o=(n(7294),n(3905));const a={},r="Exception Handling",p={unversionedId:"Language/Exceptions",id:"Language/Exceptions",title:"Exception Handling",description:"Exception handling is the process of responding to and recovering from error conditions in your program. Atem provides first-class support for throwing, catching, propagating, and manipulating recoverable exceptions at runtime.",source:"@site/docs/02-Language/15-Exceptions.md",sourceDirName:"02-Language",slug:"/Language/Exceptions",permalink:"/docs/Language/Exceptions",draft:!1,editUrl:"https://github.com/AtemLang/atem/tree/main/packages/create-docusaurus/templates/shared/docs/02-Language/15-Exceptions.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"documentSidebar",previous:{title:"Struct",permalink:"/docs/Language/User-defined Types/Struct"},next:{title:"Overview",permalink:"/docs/Language/Generics/Overview"}},c={},s=[{value:"Defining and Throwing Exceptions",id:"defining-and-throwing-exceptions",level:2},{value:"Handling Exceptions",id:"handling-exceptions",level:2},{value:"Propagating Exceptions",id:"propagating-exceptions",level:3},{value:"Catching Exceptions",id:"catching-exceptions",level:3},{value:"Catching Exceptions with Optional Value",id:"catching-exceptions-with-optional-value",level:3},{value:"Catching Exceptions with Variant Value",id:"catching-exceptions-with-variant-value",level:3},{value:"Disabling Exception Propagation",id:"disabling-exception-propagation",level:3},{value:"Using Scope Statement to Perform Cleanup after Exception Handling",id:"using-scope-statement-to-perform-cleanup-after-exception-handling",level:2}],l={toc:s},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exception-handling"},"Exception Handling"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Exception handling")," is the process of responding to and recovering from error conditions in your program. Atem provides first-class support for throwing, catching, propagating, and manipulating recoverable exceptions at runtime."),(0,o.kt)("h2",{id:"defining-and-throwing-exceptions"},"Defining and Throwing Exceptions"),(0,o.kt)("p",null,"Exceptions are represented by values which type conforms the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," Concept. The concept ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," indicates that a type can be used for exception handling."),(0,o.kt)("p",null,"Unlike other languages that use classes to represent exceptions, exceptions in Atem are often appear in the form of enumerations. Consider the ",(0,o.kt)("inlineCode",{parentName:"p"},"FilesystemException")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"FilesystemException: enum implement Exception = {\n    InvalidPathException(path: String),\n    FileNotExistException(path: fs.Path),\n    PermissionDeniedException,\n};\n")),(0,o.kt)("p",null,"A instance of exception type could be thrown by a ",(0,o.kt)("inlineCode",{parentName:"p"},"throw"),"  statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},'throw FilesystemException.FileNotExistException.init(path = .init("/etc/nothing"));\n')),(0,o.kt)("h2",{id:"handling-exceptions"},"Handling Exceptions"),(0,o.kt)("h3",{id:"propagating-exceptions"},"Propagating Exceptions"),(0,o.kt)("p",null,"If your code isn't responsible for handling the exception, you can simply let the exceptions be propagated by ",(0,o.kt)("em",{parentName:"p"},"throwing")," functions. Throwing functions propagate exceptions that are thrown inside the function to the caller. To make a function be able to propagate exceptions, mark the function with ",(0,o.kt)("inlineCode",{parentName:"p"},"throws")," specifier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"canThrow: throws func = {};\ncannotThrow: throws func = {};\n")),(0,o.kt)("p",null,"In the example below, we implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"copyFile")," function which may throw exceptions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"FilesystemException: enum implement Exception = {\n    InvalidPathException(path: String),\n    FileNotExistException(path: fs.Path),\n    PermissionDeniedException,\n};\n\ncopyFile:\n(sourcePath src: String, destinationPath dst: String) -> ()\nthrows func = {\n    src_path := fs.Path.init(pathStr = src) ?? \n        throw FilesystemException.InvalidPathException.init(path = src);\n    dst_path := fs.Path.init(pathStr = dst) ?? \n        throw FilesystemException.InvalidPathException.init(path = dst);\n        \n    if(not src_path.exist) {\n        throw FilesystemException.FileNotExistException.init(path = src_path);\n    }\n        \n    if(_low_level_copy(src_path, dst_path)) {\n        throw FilesystemException.PermissionDeniedException.init();\n    }\n};\n")),(0,o.kt)("p",null,"We can now use the ",(0,o.kt)("inlineCode",{parentName:"p"},"copyFile")," function with ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," expression which indicates a operation may fail:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},'copySomething: throws func = {  //the function must be marked with throws\n    try copyFile(sourcePath = "/etc/1", destinationPath = "/etc/2");    //use try expression\n};\n')),(0,o.kt)("h3",{id:"catching-exceptions"},"Catching Exceptions"),(0,o.kt)("p",null,"If you don't want to let the exception to continue propagating up, you can ",(0,o.kt)("em",{parentName:"p"},"catch")," exceptions to handle them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'copySomething: func = { //doesn\'t need for throws specifier because we handle the exception\n    try copyFile(sourcePath = "/etc/1", destinationPath = "/etc/2") \n    catch FilesystemException.InvalidPathException(let path) {\n        println("The path path.to_string()$ is invalid");\n    } \n    catch FilesystemException.FileNotExistException(let path) {\n        println("The file path.to_string()$ doesn\'t exist");\n    }\n    catch FilesystemException.PermissionDeniedException {\n        println("Doesn\'t have enough permission to copy the file");\n    }\n};\n')),(0,o.kt)("p",null,"You can also pack multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," expression in a ",(0,o.kt)("inlineCode",{parentName:"p"},"do-catch")," block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},'copySomething: func = { //doesn\'t need for throws specifier because we handle the exception\n    do {\n        try copyFile(sourcePath = "/etc/1", destinationPath = "/etc/2");\n        try copyFile(sourcePath = "/etc/3", destinationPath = "/etc/4");\n        try copyFile(sourcePath = "/etc/5", destinationPath = "/etc/6");\n        try copyFile(sourcePath = "/etc/7", destinationPath = "/etc/8");\n    }\n    catch FilesystemException.InvalidPathException(let path) {\n        println("The path path.to_string()$ is invalid");\n    } \n    catch FilesystemException.FileNotExistException(let path) {\n        println("The file path.to_string()$ doesn\'t exist");\n    }\n    catch FilesystemException.PermissionDeniedException {\n        println("Doesn\'t have enough permission to copy the file");\n    }\n};\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," clauses don't need to catch every possible exceptions. If none of the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," clauses could handle the exception appropriately, the exception will be propagate up again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},'copySomething: func = { //doesn\'t need for throws specifier because we handle the exception\n    do {\n        try copyFile(sourcePath = "/etc/1", destinationPath = "/etc/2");\n        try copyFile(sourcePath = "/etc/3", destinationPath = "/etc/4");\n        try copyFile(sourcePath = "/etc/5", destinationPath = "/etc/6");\n        try copyFile(sourcePath = "/etc/7", destinationPath = "/etc/8");\n    }\n    catch FilesystemException.InvalidPathException(let path) {\n        println("The path path.to_string()$ is invalid");\n    } \n    catch FilesystemException.FileNotExistException(let path) {\n        println("The file path.to_string()$ doesn\'t exist");\n    }\n};\n\nmain: func = {\n    try copySomething() catch FilesystemException.PermissionDeniedException {\n        println("Doesn\'t have enough permission to copy the file");\n    };\n};\n')),(0,o.kt)("h3",{id:"catching-exceptions-with-optional-value"},"Catching Exceptions with Optional Value"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"try?")," expression to convert the result of a throwing operation into a optional. If an exception is thrown when executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"try?")," expression, the optional will be ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},'someThrowingFunction () -> Int32 throws func = {...};\n\nopt := try? someThrowingFunction();\ncomptime assert(^opt.type == ?Int32);\nprintln("(opt ?? 0)$");\n')),(0,o.kt)("h3",{id:"catching-exceptions-with-variant-value"},"Catching Exceptions with Variant Value"),(0,o.kt)("p",null,"When an exception is converted to an optional, we lose original exception information. Lacking additional information provided by exception would sometimes be annoying especially when we are debugging the program. To preserve the exception instance, we can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"try??")," expression to convert exception into an variant which may contains result of the expression or the exception instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},'someThrowingFunction () -> Int32 throws func = {...};\n\nvar := try?? someThrowingFunction();\ncomptime assert(^var.type == Int32 | some Exception);\nif(var is Int32) {\n    println("(var as Int32)$");\n} else var match {\n    :SomeExceptionType(let msg) = {\n        println(msg);\n    }\n}\n')),(0,o.kt)("h3",{id:"disabling-exception-propagation"},"Disabling Exception Propagation"),(0,o.kt)("p",null,"When you are sure a throwing operation won't throw exception, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"try!")," expression to ",(0,o.kt)("strong",{parentName:"p"},"guarantee")," there is no exception throws in the expression evaluation. If an exception is thrown in a ",(0,o.kt)("inlineCode",{parentName:"p"},"try!")," expression, you will get a runtime crash."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"someThrowingFunction () -> Int32 throws func = {...};\n\nbar: func = {   //no need for throws specifier\n    foo := try! someThrowingFunction();\n};\n")),(0,o.kt)("h2",{id:"using-scope-statement-to-perform-cleanup-after-exception-handling"},"Using Scope Statement to Perform Cleanup after Exception Handling"),(0,o.kt)("p",null,"We often need to perform some cleanup actions after exceptions being handled. Atem provides three types of ",(0,o.kt)("inlineCode",{parentName:"p"},"defer")," statement to do so:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defer exit")," will be executed when current scope exits"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defer success")," will be executed when current scope success exits with no exception occurred"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"defer fail")," will be executed when current scope exits with exceptions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-atem"},"allocateBufferAndReadFile: () -> Byte.& func = {\n    buffer := try allocator.allocate(size = 32);\n    file := try ReadFile();\n    defer fail {\n        allocator.deallocate(bufferHandle = buffer);\n        file.closeFile();\n    };\n    buffer.write(file.getFileStream());\n    return buffer.getPointer();\n};\n\n")))}u.isMDXComponent=!0}}]);