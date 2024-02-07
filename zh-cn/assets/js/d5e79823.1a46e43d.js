"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51992],{95788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>m});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,m=u["".concat(s,".").concat(y)]||u[y]||g[y]||o;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},92644:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(45072),a=(r(11504),r(95788));const o={id:"cluster",title:"\u96c6\u7fa4"},i=void 0,l={unversionedId:"api/cluster",id:"version-1.4.0/api/cluster",title:"\u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.4.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/zh-cn/docs/api/cluster",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"cluster",title:"\u96c6\u7fa4"},sidebar:"docs",previous:{title:"\u8fd0\u884cMPI\u4f5c\u4e1a",permalink:"/zh-cn/docs/user_guide/workloads/run_mpi"},next:{title:"\u8c03\u5ea6\u5668",permalink:"/zh-cn/docs/api/scheduler"}},s={},p=[{value:"\u96c6\u7fa4",id:"\u96c6\u7fa4",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",level:3},{value:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94",id:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94",level:3}],c={toc:p},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u96c6\u7fa4"},"\u96c6\u7fa4"),(0,a.yg)("p",null,"\u56de\u4f20 Yunikorn \u6240\u7ba1\u7406\u7684\u96c6\u7fa4\u4fe1\u606f\uff0c\u50cf\u662f\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u6784\u5efa\u4fe1\u606f\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"GET")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u9700\u6c42\u6743\u9650"),"\uff1a\u65e0"),(0,a.yg)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801"),"\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("p",null,"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u54cd\u5e94\u7684\u5185\u5bb9\u6765\u81ea\u4e00\u4e2a\u7fa4\u96c6\uff0c\u62e5\u6709\u4e00\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "startTime": 1697100824863892713,\n        "rmBuildInformation": [\n            {\n                "arch": "amd64",\n                "buildDate": "2023-09-04T18:11:43+0800",\n                "buildVersion": "latest",\n                "coreSHA": "0ecf24d2aad2",\n                "goVersion": "1.21",\n                "isPluginVersion": "false",\n                "rmId": "mycluster",\n                "shimSHA": "8b26c373b4b5",\n                "siSHA": "e7622cf54e95"\n            }\n        ],\n        "partition": "default",\n        "clusterName": "kubernetes"\n    }\n]\n')),(0,a.yg)("h3",{id:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94"},"\u51fa\u9519\u65f6\u7684\u54cd\u5e94"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801"),"\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}g.isMDXComponent=!0}}]);