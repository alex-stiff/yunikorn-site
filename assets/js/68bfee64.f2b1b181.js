"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7541],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return N}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),N=n,k=m["".concat(o,".").concat(N)]||m[N]||c[N]||l;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function N(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7061:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],p={id:"roadmap",title:"Roadmap"},o=void 0,s={type:"mdx",permalink:"/community/roadmap",source:"@site/src/pages/community/roadmap.md"},u=[],c={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"whats-next-future-development"},"What's next (future development)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1"},"YUNIKORN-1")," Application and task priority support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-387"},"YUNIKORN-387")," Logging and tracing enhancement using OpenTracing"),(0,l.kt)("li",{parentName:"ul"},"Application level preemption"),(0,l.kt)("li",{parentName:"ul"},"Application centric diagnostic info tracker")),(0,l.kt)("h1",{id:"current-release-development"},"Current Release Development"),(0,l.kt)("p",null,"Release status:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Version: 0.12.0"),(0,l.kt)("li",{parentName:"ul"},"Target release date: December 2021"),(0,l.kt)("li",{parentName:"ul"},"Release manager: Chaoran Yu"),(0,l.kt)("li",{parentName:"ul"},"Development status: ",(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/projects/YUNIKORN/versions/12350843"},"Issue tracker"))),(0,l.kt)("p",null,"Planned features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-861"},"YUNIKORN-861")," Gang scheduling support for affinity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-807"},"YUNIKORN-807")," Improve performance of node sorting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-940"},"YUNIKORN-940")," Periodic ","&"," on-demand state dump in YuniKorn"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-33"},"YUNIKORN-33")," Performance benchmark with kubemark"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-872"},"YUNIKORN-872")," Build against Kubernetes 1.20"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-698"},"YUNIKORN-698")," Kubernetes 1.20 support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-908"},"YUNIKORN-908")," Kubernetes 1.21 support")),(0,l.kt)("h1",{id:"past-releases"},"Past Releases"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Release Date"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Release Manager"),(0,l.kt)("th",{parentName:"tr",align:null},"Release Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.11.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2021-08-18"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Kinga Marton"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.11.0"},"0.11.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.10.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2021-04-09"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Tao Yang"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.10.0"},"0.10.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.9.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2020-08-28"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Wilfred Spiegelenburg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.9.0"},"0.9.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.8.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2020-05-04"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Weiwei Yang"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.8.0"},"0.8.0-release-notes"))))))}m.isMDXComponent=!0}}]);