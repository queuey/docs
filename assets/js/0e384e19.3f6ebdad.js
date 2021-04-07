(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(101)),c={id:"intro",slug:"/",title:"Getting Started",sidebar_label:"Intro"},i={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting Started",description:"Welcome to Queuey!",source:"@site/docs/intro.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/queuey/docs/tree/master/docs/intro.md",version:"current",sidebar_label:"Intro",sidebar:"docs",next:{title:"Authentication",permalink:"/docs/authentication"}},u=[{value:"Resources",id:"resources",children:[{value:"Projects",id:"projects",children:[]},{value:"Members",id:"members",children:[]}]}],l={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to Queuey!"),Object(a.b)("p",null,"Getting setup and running with Queuey integrated in your project is simple:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{href:"https://queuey.dev/signup",target:"_blank"},"Sign up for an account at Queuey.dev")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{href:"https://queuey.dev/signup",target:"_blank"},"Create a Project in the dashboard")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{href:"https://queuey.dev/signup",target:"_blank"},"Create an API Key")),Object(a.b)("li",{parentName:"ol"},"Start sending requests and interacting with the Queuey REST API!")),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("h3",{id:"projects"},"Projects"),Object(a.b)("p",null,"A Project houses the information about a waitlist that associates a website that you create a waitlist for. The project waitlist can be for the whole website, a specific feature or to capture early signups for a new product launch."),Object(a.b)("p",null,"For example, if you have a new product you are launching at my-new-cool-product.com, you could call your project ",Object(a.b)("inlineCode",{parentName:"p"},"My New Cool Product"),"."),Object(a.b)("p",null,"If you had already launched, and you're thinking about releasing a new feature, but don't want to release it to everyone straight away, you could call it ",Object(a.b)("inlineCode",{parentName:"p"},"Cool New Product Feature"),"."),Object(a.b)("h3",{id:"members"},"Members"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"members"},"Members")," are customers who have signed up to your waitlist. They are associated to ",Object(a.b)("a",{parentName:"p",href:"/docs/projects"},"projects"),"."))}s.isMDXComponent=!0}}]);