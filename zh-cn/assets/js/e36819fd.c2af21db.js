"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20352],{95788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>m});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,m=u["".concat(p,".").concat(y)]||u[y]||g[y]||o;return r?t.createElement(m,l(l({ref:n},c),{},{components:r})):t.createElement(m,l({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},29044:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=r(45072),a=(r(11504),r(95788));const o={id:"cluster",title:"\u96c6\u7fa4"},l=void 0,i={unversionedId:"api/cluster",id:"version-1.3.0/api/cluster",title:"\u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.3.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/zh-cn/docs/1.3.0/api/cluster",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"cluster",title:"\u96c6\u7fa4"},sidebar:"docs",previous:{title:"\u8fd0\u884cMPI\u4f5c\u4e1a",permalink:"/zh-cn/docs/1.3.0/user_guide/workloads/run_mpi"},next:{title:"\u8c03\u5ea6\u5668",permalink:"/zh-cn/docs/1.3.0/api/scheduler"}},p={},s=[{value:"\u96c6\u7fa4",id:"\u96c6\u7fa4",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",level:3},{value:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94",id:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94",level:3}],c={toc:s},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u96c6\u7fa4"},"\u96c6\u7fa4"),(0,a.yg)("p",null,"\u5c06\u56de\u4f20Yunikorn\u6240\u7ba1\u7406\u7684\u96c6\u7fa4\u7684\u4fe1\u606f\u3002\u4fe1\u606f\u5305\u62ec\u5e94\u7528\u7a0b\u5e8f\u7684\u6570\u91cf\uff08\u5305\u542b\u603b\u6570\u3001\u5931\u8d25\u3001\u6302\u8d77\u3001\u6b63\u5728\u8fd0\u884c\u3001\u5df2\u5b8c\u6210\uff09\u548c\u5bb9\u5668\u7684\u6570\u91cf\uff0c\u4ee5\u53ca\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u6784\u5efa\u4fe1\u606f\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u9700\u6c42\u6743\u9650"),"\uff1a\u65e0"),(0,a.yg)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801"),"\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("p",null,"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u54cd\u5e94\u7684\u5185\u5bb9\u6765\u81ea\u4e00\u4e2a\u7fa4\u96c6\uff0c\u62e5\u6709\u4e00\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "startTime": 1649167576110754000,\n        "rmBuildInformation": [\n            {\n                "buildDate": "2022-02-21T19:09:16+0800",\n                "buildVersion": "latest",\n                "isPluginVersion": "false",\n                "rmId": "rm-123"\n            }\n        ],\n        "partition": "default",\n        "clusterName": "kubernetes"\n    }\n]\n')),(0,a.yg)("h3",{id:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94"},"\u51fa\u9519\u65f6\u7684\u54cd\u5e94"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801"),"\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}g.isMDXComponent=!0}}]);