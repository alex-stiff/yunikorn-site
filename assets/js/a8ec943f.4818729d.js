"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97937],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88643:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const o={id:"workload_overview",title:"Overview"},i=void 0,l={unversionedId:"user_guide/workloads/workload_overview",id:"version-1.1.0/user_guide/workloads/workload_overview",title:"Overview",description:"\x3c!--",source:"@site/versioned_docs/version-1.1.0/user_guide/workloads/workload_overview.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/workload_overview",permalink:"/docs/1.1.0/user_guide/workloads/workload_overview",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"workload_overview",title:"Overview"},sidebar:"docs",previous:{title:"Labels and Annotations in YuniKorn",permalink:"/docs/1.1.0/user_guide/labels_and_annotations_in_yunikorn"},next:{title:"Run Spark Jobs",permalink:"/docs/1.1.0/user_guide/workloads/run_spark"}},s={},p=[{value:"Advanced Examples",id:"advanced-examples",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The YuniKorn scheduler is able to run any Kubernetes workload. All that is required is to ensure\nthat the ",(0,a.kt)("inlineCode",{parentName:"p"},"schedulerName")," field of a Pod specification is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"applicationId"),"\nlabel is set to a unique value per application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: sleep\n    applicationId: "application-sleep-0001"\n  name: sleep-app-1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-30s\n      image: "alpine:latest"\n      command: ["sleep", "30"]\n      resources:\n        requests:\n          cpu: "100m"\n          memory: "100M"\n')),(0,a.kt)("p",null,"Additionally, if the YuniKorn admission controller is present, the ",(0,a.kt)("inlineCode",{parentName:"p"},"schedulerName")," field may be\nomitted as it will be set automatically on newly created pods."),(0,a.kt)("h2",{id:"advanced-examples"},"Advanced Examples"),(0,a.kt)("p",null,"Examples of more advanced use cases can be found here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"run_spark"},"Run Spark Jobs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"run_flink"},"Run Flink Jobs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"run_tf"},"Run TensorFlow Jobs"))))}d.isMDXComponent=!0}}]);