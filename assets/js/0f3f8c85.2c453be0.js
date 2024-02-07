"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[676],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>f});var n=t(11504);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36440:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(45072),i=(t(11504),t(95788));const o={id:"architecture",title:"Architecture"},a=void 0,s={unversionedId:"design/architecture",id:"version-1.0.0/design/architecture",title:"Architecture",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/docs/1.0.0/design/architecture",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Development in CodeReady Containers",permalink:"/docs/1.0.0/developer_guide/openshift_development"},next:{title:"Scheduler Core Design",permalink:"/docs/1.0.0/design/scheduler_core_design"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Components",id:"components",level:2},{value:"Scheduler interface",id:"scheduler-interface",level:3},{value:"Scheduler core",id:"scheduler-core",level:3},{value:"Kubernetes shim",id:"kubernetes-shim",level:3}],u={toc:l},d="wrapper";function h(e){let{components:r,...o}=e;return(0,i.yg)(d,(0,n.c)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Apache YuniKorn is a light-weight, universal resource scheduler for container orchestrator systems.\nIt is created to achieve fine-grained resource sharing for various workloads efficiently on a large scale, multi-tenant,\nand cloud-native environment. YuniKorn brings a unified, cross-platform, scheduling experience for mixed workloads that\nconsist of stateless batch workloads and stateful services."),(0,i.yg)("p",null,"YuniKorn now supports K8s and can be deployed as a custom K8s scheduler. YuniKorn's architecture design also allows\nadding different shim layer and adopt to different ResourceManager implementation including Apache Hadoop YARN,\nor any other systems."),(0,i.yg)("h2",{id:"architecture"},"Architecture"),(0,i.yg)("p",null,"Following chart illustrates the high-level architecture of YuniKorn."),(0,i.yg)("img",{src:t(35632).c}),(0,i.yg)("h2",{id:"components"},"Components"),(0,i.yg)("h3",{id:"scheduler-interface"},"Scheduler interface"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface"},"Scheduler interface")," is an abstract layer\nwhich resource management platform (like YARN/K8s) will speak with, via API like GRPC/programing language bindings."),(0,i.yg)("h3",{id:"scheduler-core"},"Scheduler core"),(0,i.yg)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of schedule core ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.0.0/design/scheduler_core_design"},"here"),"."),(0,i.yg)("h3",{id:"kubernetes-shim"},"Kubernetes shim"),(0,i.yg)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of the Kubernetes shim ",(0,i.yg)("a",{parentName:"p",href:"/docs/1.0.0/design/k8shim"},"here"),"."))}h.isMDXComponent=!0},35632:(e,r,t)=>{t.d(r,{c:()=>n});const n=t.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"}}]);