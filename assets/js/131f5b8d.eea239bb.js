"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8512],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(t),d=a,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8558:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"rn-0.11.0",title:"Release Announcement v0.11.0"},u=void 0,c={type:"mdx",permalink:"/release-announce/0.11.0",source:"@site/src/pages/release-announce/0.11.0.md"},l=[{value:"Overview",id:"overview",children:[],level:2},{value:"Highlights",id:"highlights",children:[{value:"Supported Kubernetes Versions",id:"supported-kubernetes-versions",children:[],level:3},{value:"Gang Scheduling enhancements",id:"gang-scheduling-enhancements",children:[],level:3},{value:"Spark operator integration",id:"spark-operator-integration",children:[],level:3},{value:"Scheduler Metrics enhancements",id:"scheduler-metrics-enhancements",children:[],level:3},{value:"User/Group Resolution",id:"usergroup-resolution",children:[],level:3},{value:"Web UI and REST API usability enhancements",id:"web-ui-and-rest-api-usability-enhancements",children:[],level:3}],level:2},{value:"Community",id:"community",children:[],level:2}],p={toc:l};function h(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-announcement-v0110"},"Release Announcement v0.11.0"),(0,o.kt)("p",null,"It gives us great pleasure to announce that the Apache YuniKorn (Incubating) community has voted to release 0.11.0. Apache YuniKorn (Incubating) is a standalone resource scheduler, designed for managing, and scheduling Big Data workloads on the container orchestration framework for on-prem and on-cloud use cases.\nThis release has a couple of REST API, UI usability and Gang scheduling improvements."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Apache YuniKorn (Incubating) community has fixed over 110 JIRAs in this release: ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12350521"},"YuniKorn jiras resolved in 0.11.0")),(0,o.kt)("p",null,"Release manager: Kinga Marton"),(0,o.kt)("p",null,"Release date: 2021-08-18"),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("h3",{id:"supported-kubernetes-versions"},"Supported Kubernetes Versions"),(0,o.kt)("p",null,"In this release supported Kubernetes versions have been updated to 1.17.x, 1.18.x and 1.19.x. (Earlier versions support 1.16.x, 1.17.x and 1.18.x.) YuniKorn support matrix primarily supports 3 major Kubernetes versions."),(0,o.kt)("h3",{id:"gang-scheduling-enhancements"},"Gang Scheduling enhancements"),(0,o.kt)("p",null,"The community has been made further improvements to the ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/docs/user_guide/gang_scheduling"},"Gang Scheduling")," feature. ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/docs/user_guide/gang_scheduling#gang-scheduling-styles"},"Gang scheduling style")," now can be configured per app, soft or hard. This allows the users to customize the behavior how to handle the reservation timeout. There are also lots of enhancements to improve the lifecycle management of the placeholder pods, make the cleanup more robust and reliable. More detail can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-553"},"YUNIKORN-553"),"."),(0,o.kt)("h3",{id:"spark-operator-integration"},"Spark operator integration"),(0,o.kt)("p",null,"By leveraging the YuniKorn's app management framework, now it is better integrated with Spark operator. YuniKorn watches spark CRD resources and reacts when necessary. It is totally transparent to use YuniKorn with Spark operator on K8s, no extra configuration needed. This feature is ready for production use. More detail can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-558"},"YUNIKORN-558"),"."),(0,o.kt)("h3",{id:"scheduler-metrics-enhancements"},"Scheduler Metrics enhancements"),(0,o.kt)("p",null,"YuniKorn exposes core ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/docs/next/performance/metrics"},"scheduling metrics")," via Prometheus, in this release, some important metrics such as allocating_latency_seconds, long_pending_apps have been added to the system, based on which the cluster admins can create more alerts to monitor system healthy. There are more enhancements have been made to the existing metrics, such as apps/queues, to make them more readable, and better organized. Please find more details in ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-3"},"YUNIKORN-3"),"."),(0,o.kt)("h3",{id:"usergroup-resolution"},"User/Group Resolution"),(0,o.kt)("p",null,"With the work done in ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-649"},"YUNIKORN-649"),", now users can define how to retrieve user/group identity for each app, and pod. This is done via a configurable environment variable USER_LABEL_KEY, so users can specify which label will be used for YuniKorn to retrieve the user identity. The document can be found ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/docs/next/user_guide/usergroup_resolution"},"here"),"."),(0,o.kt)("h3",{id:"web-ui-and-rest-api-usability-enhancements"},"Web UI and REST API usability enhancements"),(0,o.kt)("p",null,"The community has made some usability improvements for the web UI to provide better user experience. The UI has been simplified to display the useful data in the apps/nodes page, some usability bugs have been fixed. With this release, some new REST API endpoints were introduced to make it possible to fetch per partition/queue information. You can find a complete list of endpoints ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/docs/api/scheduler"},"here"),"."),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"The Apache YuniKorn community is pleased to welcome new committer Manikandan R and new PPMC member, Kinga Marton. We would love to see more committers joining the community and help to shape the project. In the past few months, we continue to have bi-weekly community meetings in 2 different time zones, ad-hoc meetings, offline channel discussions. The community will continue to be open."))}h.isMDXComponent=!0}}]);