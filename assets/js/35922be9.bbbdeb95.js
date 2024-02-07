"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79156],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>m});var a=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=d(t),c=i,m=g["".concat(s,".").concat(c)]||g[c]||p[c]||r;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(45072),i=(t(11504),t(95788));const r={id:"translation",title:"Translation"},o=void 0,l={unversionedId:"developer_guide/translation",id:"version-1.2.0/developer_guide/translation",title:"Translation",description:"\x3c!--",source:"@site/versioned_docs/version-1.2.0/developer_guide/translation.md",sourceDirName:"developer_guide",slug:"/developer_guide/translation",permalink:"/docs/1.2.0/developer_guide/translation",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"translation",title:"Translation"},sidebar:"docs",previous:{title:"Development in CodeReady Containers",permalink:"/docs/1.2.0/developer_guide/openshift_development"},next:{title:"Architecture",permalink:"/docs/1.2.0/design/architecture"}},s={},d=[{value:"Modifying the docusaurus.config.js for supporting the new language",id:"modifying-the-docusaurusconfigjs-for-supporting-the-new-language",level:2},{value:"Updating the help information in local-build.sh",id:"updating-the-help-information-in-local-buildsh",level:2},{value:"Copying latest files to i18n",id:"copying-latest-files-to-i18n",level:2},{value:"Adding the translated information in sidebar.json and footer.json",id:"adding-the-translated-information-in-sidebarjson-and-footerjson",level:2},{value:"linking img, assest and styles.module.css",id:"linking-img-assest-and-stylesmodulecss",level:2},{value:"Adopting relative paths",id:"adopting-relative-paths",level:2},{value:"Test",id:"test",level:2}],u={toc:d},g="wrapper";function p(e){let{components:n,...r}=e;return(0,i.yg)(g,(0,a.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Yunikorn website adopting Docusaurus manages documentations.\n",(0,i.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial"},"Docusaurus i18n system")," allows developer to translate documentations.\nFor adding a new language translation, developers should do following operations."),(0,i.yg)("h2",{id:"modifying-the-docusaurusconfigjs-for-supporting-the-new-language"},"Modifying the docusaurus.config.js for supporting the new language"),(0,i.yg)("p",null,"Assume the translations by a ",(0,i.yg)("strong",{parentName:"p"},"new language keyword"),".\nExpected results will be like this figure.\n",(0,i.yg)("img",{alt:"translation results",src:t(72904).c,width:"2784",height:"1660"})),(0,i.yg)("p",null,"Current Yunikorn website include the en and zh-cn documentaions.\nIf developer want to add a new translation with ",(0,i.yg)("strong",{parentName:"p"},"new language keyword")," including fr, jp, the developers need to modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"i18n")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'zh-cn', '<new language keyword>'],\n    localeConfigs: {\n      en: {\n        label: 'English',\n      },\n      \"zh-cn\": {\n        label: '\u4e2d\u6587',\n      },\n      \"<new language keyword>\": {\n        label: 'test',\n      }\n    },\n  },\n")),(0,i.yg)("h2",{id:"updating-the-help-information-in-local-buildsh"},"Updating the help information in local-build.sh"),(0,i.yg)("p",null,"Adding the ",(0,i.yg)("strong",{parentName:"p"},"new language keyword")," to the locale list in ",(0,i.yg)("inlineCode",{parentName:"p"},"print_usage")," function."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'Usage: $(basename "$0") run [locale] | build | clean | help\n    run     build the website, and launch the server in a docker image.\n            a locale can be specified, currently supported: "en", "zh-cn", "<new language keyword>"\n')),(0,i.yg)("h2",{id:"copying-latest-files-to-i18n"},"Copying latest files to i18n"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mkdir -p i18n/<new language keyword>/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/<new language keyword>/docusaurus-plugin-content-docs/current\nmkdir -p i18n/<new language keyword>/docusaurus-plugin-content-pages\ncp -r src/pages/** i18n/<new language keyword>/docusaurus-plugin-content-pages\nmkdir -p i18n/<new language keyword>/docusaurus-theme-classic\n")),(0,i.yg)("h2",{id:"adding-the-translated-information-in-sidebarjson-and-footerjson"},"Adding the translated information in sidebar.json and footer.json"),(0,i.yg)("p",null,"Create sidebar.json and and footer.json in docusaurus-theme-classic.\nFor example, the footer.json context is following."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "link.item.label.Get Involved": {\n        "message": "\u53c2\u4e0e"\n    },\n    "link.title.Code Repositories": {\n        "message": "\u4ee3\u7801\u5e93"\n    },\n    "link.item.label.People": {\n        "message": "\u4eba\u4eec"\n    },   \n    "link.title.Blog": {\n        "message": "\u535a\u5ba2"\n    },\n    "link.title.Community": {\n        "message": "\u793e\u533a"\n    }\n}\n')),(0,i.yg)("h2",{id:"linking-img-assest-and-stylesmodulecss"},"linking img, assest and styles.module.css"),(0,i.yg)("p",null,"Creating linking files in the ",(0,i.yg)("inlineCode",{parentName:"p"},"i18n/new language keyword/docusaurus-plugin-content-pages"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"# cleaning the duplicate files\nrm -rf img\nrm styles.module.css\n# linking\nln -s ../../../static/img\nln -s ../../../src/pages/styles.module.css\n")),(0,i.yg)("p",null,"Creating the linking file in the 'i18n/new language keyword/docusaurus-plugin-content-docs/current'."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"# cleaning the duplicate files\nrm -rf assests\n# linking\nln -s ../../../../docs/assets\n")),(0,i.yg)("h2",{id:"adopting-relative-paths"},"Adopting relative paths"),(0,i.yg)("p",null,"There are some image urls adopting absolute path in ",(0,i.yg)("inlineCode",{parentName:"p"},"src/pages/index.js")," and adopting absolute path could cause png missing.\nDevelopers could make sure that the img link in ",(0,i.yg)("inlineCode",{parentName:"p"},"/i18n/new language keyword/docusaurus-plugin-content-pages/index.js")," is work.\nFor example, there is a ",(0,i.yg)("inlineCode",{parentName:"p"},"resource-scheduling.png")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"index.js")," and the png url is ",(0,i.yg)("inlineCode",{parentName:"p"},"/img/resource-scheduling.png"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/img/resource-scheduling.png -> ./img/resource-scheduling.png\n")),(0,i.yg)("h2",{id:"test"},"Test"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"./local-build.sh run <new language keyword>\n")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Building website",src:t(70504).c,width:"1012",height:"298"})))}p.isMDXComponent=!0},70504:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/translationBuilding-5af95dcdf88e0810a904cdf136b08fc6.png"},72904:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/translationDemo-4d973a6a8ae64a1d6f33f2fb5c96fef2.png"}}]);