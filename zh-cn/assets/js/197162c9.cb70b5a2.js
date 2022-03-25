"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3936],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(h,a(a({ref:n},d),{},{components:t})):r.createElement(h,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83779:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"resilience",title:"Resilience"},l=void 0,c={unversionedId:"design/resilience",id:"version-0.12.2/design/resilience",title:"Resilience",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/design/resilience.md",sourceDirName:"design",slug:"/design/resilience",permalink:"/zh-cn/docs/design/resilience",tags:[],version:"0.12.2",frontMatter:{id:"resilience",title:"Resilience"},sidebar:"version-0.12.2/docs",previous:{title:"Pluggable App Management",permalink:"/zh-cn/docs/design/pluggable_app_management"},next:{title:"Support K8s Predicates",permalink:"/zh-cn/docs/design/predicates"}},d={},p=[{value:"The problem",id:"the-problem",level:2},{value:"Design",id:"design",level:2},{value:"Workflow",id:"workflow",level:3},{value:"How to determine recovery is complete?",id:"how-to-determine-recovery-is-complete",level:3},{value:"Node recovery",id:"node-recovery",level:3},{value:"Requests for recovery",id:"requests-for-recovery",level:3},{value:"Applications",id:"applications",level:4},{value:"Nodes and allocations",id:"nodes-and-allocations",level:4}],u={toc:p};function m(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is not a HA (High-availability) design, HA implies that a service can\nsurvive from a fatal software/hardware failure. That requires one or more\nstandby instances providing same services to take over active instance on failures.\nResilience here means for YuniKorn, we can restart it without losing its state."),(0,o.kt)("h2",{id:"the-problem"},"The problem"),(0,o.kt)("p",null,"YuniKorn is designed as a stateless service, it doesn't persist its state, e.g\napplications/queues/allocations etc, to any persistent storage. All states are\nin memory only. This design ensures YuniKorn to be able to response requests with\nlow latency, and deployment mode is simple. However, a restart (or recovery) will\nhave the problem to lose state data. We need a decent way to reconstruct all\nprevious states on a restart."),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("h3",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,'Scheduler core has no notion of "state", which means it does not know if it is under recovering.\nIt is too complex to maintain a series of ',(0,o.kt)("inlineCode",{parentName:"p"},"scheduler states")," in both core and shim, because we must\nkeep them in-sync. However, if we live under a simple assumption: ",(0,o.kt)("strong",{parentName:"p"},"scheduler core only responses\nrequests, the correction of requests is ensured by shim according its current state"),".\nThe design becomes much simpler. This way, the shim maintains a state machine like below. When\nit is under ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," state, it sends new requests to the scheduler core as long as a new one is found;\nwhen under ",(0,o.kt)("inlineCode",{parentName:"p"},"recovering")," state, it collects previous allocations and send recovery messages to\nthe scheduler core, and waiting for recovery to be accomplished."),(0,o.kt)("p",null,"Shim scheduler state machine"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      Register                 Recover                Success\nNew -----------\x3e Registered -----------\x3e Recovering ----------\x3e Running\n                                             |   Fail\n                                              --------\x3e Failed\n")),(0,o.kt)("p",null,"Following chart illustrate how yunikorn-core and shim works together on recovery."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Workflow",src:t(93798).Z,width:"7198",height:"2222"})),(0,o.kt)("p",null,"Restart (with recovery) process"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"yunikorn-shim registers itself with yunikorn-core"),(0,o.kt)("li",{parentName:"ul"},'shim enters "recovering" state. Under "recovering" state, the shim only scans existing nodes and allocations, no new scheduling requests will be sent.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"shim scans existing nodes from api-server and added them to cache"),(0,o.kt)("li",{parentName:"ul"},"shim scans existing pods from api-server, filter out the pods that already assigned (scheduled to a node), and added that to cache (allocation in that node)"),(0,o.kt)("li",{parentName:"ul"},"shim sends update request to yunikorn-core with the info found in previous steps"))),(0,o.kt)("li",{parentName:"ul"},"yunikorn-core handles update requests, the steps should look like a replay of allocation process, including",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"adding node"),(0,o.kt)("li",{parentName:"ul"},"adding applications"),(0,o.kt)("li",{parentName:"ul"},"adding allocations"),(0,o.kt)("li",{parentName:"ul"},"modifying queue resources"),(0,o.kt)("li",{parentName:"ul"},"update partition info"))),(0,o.kt)("li",{parentName:"ul"},'when all nodes are fully recovered, shim transits the state to "running"'),(0,o.kt)("li",{parentName:"ul"},'shim notifies yunikorn-core that recovery is done, then yunikorn-core transits to "running" state.')),(0,o.kt)("h3",{id:"how-to-determine-recovery-is-complete"},"How to determine recovery is complete?"),(0,o.kt)("p",null,"Shim queries K8s api-server to get how many nodes were available in this cluster. It tracks the recovering status of each node.\nOnce all nodes are recovered, it can claim the recovery is completed. This approach requires us to add ",(0,o.kt)("inlineCode",{parentName:"p"},"recovering")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"recovered"),"\nstates to nodes' state machine in the shim."),(0,o.kt)("h3",{id:"node-recovery"},"Node recovery"),(0,o.kt)("p",null,"In the shim layer, it maintains states for each node and pods running on this node. When start to recover nodes,\nall nodes initially are considered as under ",(0,o.kt)("inlineCode",{parentName:"p"},"recovering"),". Only when all pods running on this node are fully recovered,\nthe node can be considered as ",(0,o.kt)("inlineCode",{parentName:"p"},"recovered"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"node-recovery",src:t(23111).Z,width:"6426",height:"2489"})),(0,o.kt)("p",null,"Like demonstrated on upon diagram,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node0 is still recovering because pod0 is recovering."),(0,o.kt)("li",{parentName:"ul"},"Node1 is recovered (become schedulable) because all pods on this node have been recovered."),(0,o.kt)("li",{parentName:"ul"},"Node2 is lost, shim lost contact with this node. If after sometime this node comes back, shim should still try to recover this node.")),(0,o.kt)("h3",{id:"requests-for-recovery"},"Requests for recovery"),(0,o.kt)("p",null,"During recovery process, shim needs to collect all known information of applications, nodes and allocations from the underneath\nResource Manager and use them for recovery."),(0,o.kt)("h4",{id:"applications"},"Applications"),(0,o.kt)("p",null,"Existing applications must be recovered first before allocations. Shim needs to scan all existing applications\nfrom nodes, and add applications info as a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"AddApplicationRequest")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateRequest"),". This is same\nas the fresh application submission."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"message AddApplicationRequest {\n  string applicationID = 1;\n  string queueName = 2;\n  string partitionName = 3;\n}\n")),(0,o.kt)("h4",{id:"nodes-and-allocations"},"Nodes and allocations"),(0,o.kt)("p",null,"Once a shim is registered to the scheduler-core, subsequent requests are sent via ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateRequest#NewNodeInfo"),"\n(see more from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface/blob/master/si.proto"},"si.proto"),").\nThe structure of the messages looks like,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"message NewNodeInfo {\n  // nodeID\n  string nodeID = 1;\n  // optional node attributes\n  map<string, string> attributes = 2;\n  // total node resource\n  Resource schedulableResource = 3;\n  // existing allocations on this node\n  repeated Allocation existingAllocations = 4;\n}\n")),(0,o.kt)("p",null,"Shim needs to scan all existing allocations on a node and wrap these info up as a ",(0,o.kt)("inlineCode",{parentName:"p"},"NewNodeInfo"),", add that to a\n",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," and then send to scheduler-core."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": the recovery of existing allocations depend on the existence of applications, which means applications must\nbe recovered first. Since scheduler-core handles ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," one by one, it is required that all existing allocations\nin a ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," must from known applications or new applications embedded within the same ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateRequest"),", which can be\nspecified in ",(0,o.kt)("inlineCode",{parentName:"p"},"NewApplications")," field. Scheduler-core ensures ",(0,o.kt)("inlineCode",{parentName:"p"},"NewApplications")," are always processed first."))}m.isMDXComponent=!0},23111:function(e,n,t){n.Z=t.p+"assets/images/resilience-node-recovery-6abe663c243bdfdbff691e14a70166e5.jpg"},93798:function(e,n,t){n.Z=t.p+"assets/images/resilience-workflow-191f147a7501740ec6632f216f2bb25f.jpg"}}]);