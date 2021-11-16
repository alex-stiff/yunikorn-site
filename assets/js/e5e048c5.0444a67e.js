"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5813],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||l;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5461:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={id:"cache_removal",title:"Scheduler cache removal design"},c=void 0,s={unversionedId:"design/cache_removal",id:"design/cache_removal",isDocsHomePage:!1,title:"Scheduler cache removal design",description:"\x3c!--",source:"@site/docs/design/cache_removal.md",sourceDirName:"design",slug:"/design/cache_removal",permalink:"/docs/next/design/cache_removal",tags:[],version:"current",frontMatter:{id:"cache_removal",title:"Scheduler cache removal design"},sidebar:"docs",previous:{title:"Scheduler Core Design",permalink:"/docs/next/design/scheduler_core_design"},next:{title:"Kubernetes Shim Design",permalink:"/docs/next/design/k8shim"}},d=[{value:"Goals",id:"goals",children:[],level:2},{value:"Background",id:"background",children:[],level:2},{value:"A one on one mapping between the scheduler and cache objects shows that the distinction is probably more artificial than required.",id:"a-one-on-one-mapping-between-the-scheduler-and-cache-objects-shows-that-the-distinction-is-probably-more-artificial-than-required",children:[{value:"Events",id:"events",children:[],level:3}],level:2},{value:"Detailed flow analysis",id:"detailed-flow-analysis",children:[{value:"Object existing in both cache and scheduler",id:"object-existing-in-both-cache-and-scheduler",children:[],level:3},{value:"Operations to add/remove app",id:"operations-to-addremove-app",children:[],level:3},{value:"Operations to remove allocations and add or remove asks",id:"operations-to-remove-allocations-and-add-or-remove-asks",children:[],level:3},{value:"Operations to add, update or remove nodes",id:"operations-to-add-update-or-remove-nodes",children:[],level:3},{value:"Operations to add, update or remove partitions",id:"operations-to-add-update-or-remove-partitions",children:[],level:3},{value:"Allocations",id:"allocations",children:[],level:3}],level:2},{value:"Current locking",id:"current-locking",children:[],level:2},{value:"How to merge Cache and scheduler objects",id:"how-to-merge-cache-and-scheduler-objects",children:[],level:2},{value:"Code merges",id:"code-merges",children:[],level:2},{value:"Locking after merge",id:"locking-after-merge",children:[{value:"Direction of lock",id:"direction-of-lock",children:[],level:3},{value:"Mitigations for deadlocks",id:"mitigations-for-deadlocks",children:[],level:3}],level:2}],h={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"proposal-to-combine-cache-and-schedulers-implementation-in-the-core"},"Proposal to combine Cache and Scheduler's implementation in the core"),(0,l.kt)("p",null,"This document describes the current state of the scheduler and cache implementation.\nIt describes the changes planned based on the analysis that was done of the current behaviour."),(0,l.kt)("h2",{id:"goals"},"Goals"),(0,l.kt)("p",null,"The goal is to provide the same functionality before and after the change."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"unit tests before and after the merge must all pass."),(0,l.kt)("li",{parentName:"ul"},"Smoke tests defined in the core should all pass without major changes ",(0,l.kt)("sup",{id:"s1"},(0,l.kt)("a",{parentName:"li",href:"#f1"},"definition")),"."),(0,l.kt)("li",{parentName:"ul"},"End-to-end tests that are part of the shim code must all pass without changes.")),(0,l.kt)("h2",{id:"background"},"Background"),(0,l.kt)("p",null,"The current Scheduler Core is build up around two major components to store the data: the cache and scheduler objects.\nThe cache objects form the base for most data to be tracked.\nThe Scheduler objects track specific in flight details and are build on top of a cache object."),(0,l.kt)("p",null,'The communication between the two layers uses a-synchronous events and in some cases direct updates.\nA synchronous update between the scheduler and the cache does mean that there is a short period the scheduler is "out of sync" with the cache.\nThis short period can have an impact on the scheduling decisions.\nOne of which is logged as ',(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-169"},"YUNIKORN-169"),"."),(0,l.kt)("p",null,"A further point is the complexity that the two structure brings to the code.\nA distinct set of messages to communicate between the scheduler and the cache."),(0,l.kt)("h2",{id:"a-one-on-one-mapping-between-the-scheduler-and-cache-objects-shows-that-the-distinction-is-probably-more-artificial-than-required"},"A one on one mapping between the scheduler and cache objects shows that the distinction is probably more artificial than required."),(0,l.kt)("b",{id:"f1"}),"definition: Major changes for smoke tests are defined as changes to the tests that alter use case and thus test flows. Some changes will be needed as checks made could rely on cache objects which have been removed. [\u21a9](#s1) ## Structure analysis ### Objects The existing objects as per the code analysis. The overlap between the scheduler and the cache objects is shown by showing them at the same line. N/A means that there is no equivalent object in either the scheduler or cache.",(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cache Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Scheduler Object"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ClusterInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterSchedulingContext")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PartitionInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"partitionSchedulingContext")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AllocationInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"schedulingAllocation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"schedulingAllocationAsk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"reservation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ApplicationInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"SchedulingApplication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"applicationState"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NodeInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"SchedulingNode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QueueInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"SchedulingQueue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SchedulingObjectState"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"initializer")," code that is part of the cache does not define a specific object.\nIt contains a mixture of code defined at the package level and code that is part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterInfo")," object."),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("p",null,"Events defined in the core have multiple origins and destinations.\nSome events are only internal for the core between the cache and scheduler.\nThese events will be removed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"Flow"),(0,l.kt)("th",{parentName:"tr",align:null},"Proposal"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AllocationProposalBundleEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Scheduler -> Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RejectedNewApplicationEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Scheduler -> Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReleaseAllocationsEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Scheduler -> Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemoveRMPartitionsEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Scheduler -> Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemovedApplicationEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Scheduler -> Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SchedulerNodeEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache -> Scheduler"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SchedulerAllocationUpdatesEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache -> Scheduler"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SchedulerApplicationsUpdateEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache -> Scheduler"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SchedulerUpdatePartitionsConfigEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache -> Scheduler"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SchedulerDeletePartitionsConfigEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache -> Scheduler"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RMApplicationUpdateEvent (add/remove app)"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache/Scheduler -> RM"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RMRejectedAllocationAskEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache/Scheduler -> RM"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemoveRMPartitionsEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"RM -> Scheduler"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RMUpdateRequestEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"RM -> Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RegisterRMEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"RM -> Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigUpdateRMEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"RM -> Cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RMNewAllocationsEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache -> RM"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RMReleaseAllocationEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache -> RM"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RMNodeUpdateEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache -> RM"),(0,l.kt)("td",{parentName:"tr",align:null},"Modify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Events that are handled by the cache will need to be handled by the core code after the removal of the cache.\nTwo events are handled by the cache and the scheduler."),(0,l.kt)("h2",{id:"detailed-flow-analysis"},"Detailed flow analysis"),(0,l.kt)("h3",{id:"object-existing-in-both-cache-and-scheduler"},"Object existing in both cache and scheduler"),(0,l.kt)("p",null,"The current design is based on the fact that the cache object is the basis for all data storage.\nEach cache object must have a corresponding scheduler object.\nThe contract in the core around the cache and scheduler objects was simple.\nIf the object exists in both scheduler and cache the object will be added to cache triggering the creation of the corresponding scheduler object.\nRemoving the object is always handled in reverse: first from the scheduler which will trigger the removal from the cache.\nAn example would be the creation of an application triggered by the ",(0,l.kt)("inlineCode",{parentName:"p"},"RMUpdateRequestEvent")," would be processed by the cache.\nCreating a ",(0,l.kt)("inlineCode",{parentName:"p"},"SchedulerApplicationsUpdateEvent")," to create the corresponding application in the scheduler."),(0,l.kt)("p",null,"When the application and object state were added they were added into the cache objects.\nThe cache objects were considered the data store and thus also contain the state.\nThere were no corresponding state objects in the scheduler.\nMaintaining two states for the same object is not possible. "),(0,l.kt)("p",null,"The other exceptions to that rule are two objects that were considered volatile and scheduler only.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"schedulingAllocationAsk")," tracks outstanding requests for an application in the scheduler.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"reservation")," tracks a temporary reservation of a node for an application and ask combination. "),(0,l.kt)("h3",{id:"operations-to-addremove-app"},"Operations to add/remove app"),(0,l.kt)("p",null,"The RM (shim) sends a complex ",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," as defined in the scheduler interface.\nThis message is wrapped by the RM proxy and forwarded to the cache for processing.\nThe RM can request an application to be added or removed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"application add or delete")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processApplicationUpdateFromRMUpdate\n   2.1: Add new apps to the partition.\n   2.2: Send removed apps to scheduler (but not remove anything from cache)\n3. scheduler.processApplicationUpdateEvent\n   3.1: Add new apps to scheduler \n        (when fails, send RejectedNewApplicationEvent to cache)\n        No matter if failed or not, send RMApplicationUpdateEvent to RM.\n   3.2: Remove app from scheduler\n        Send RemovedApplicationEvent to cache\n")),(0,l.kt)("h3",{id:"operations-to-remove-allocations-and-add-or-remove-asks"},"Operations to remove allocations and add or remove asks"),(0,l.kt)("p",null,"The RM (shim) sends a complex ",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," as defined in the scheduler interface.\nThis message is wrapped by the RM proxy and forwarded to the cache for processing.\nThe RM can request an allocation to be removed.\nThe RM can request an ask to be added or removed"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"allocation delete"),"\nThis describes the allocation delete initiated by the RM only"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNewAndReleaseAllocationRequests\n   2.1: (by-pass): Send to scheduler via event SchedulerAllocationUpdatesEvent\n3. scheduler.processAllocationUpdateEvent \n   3.1: Update ReconcilePlugin\n   3.2: Send confirmation of the releases back to Cache via event ReleaseAllocationsEvent\n4. cluster_info.processAllocationReleases to process the confirmed release\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ask add"),"\nIf the ask already exists this add is automatically converted into an update."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNewAndReleaseAllocationRequests\n   2.1: Ask sanity check (such as existence of partition/app), rejections are send back to the RM via RMRejectedAllocationAskEvent\n   2.2: pass checked asks to scheduler via SchedulerAllocationUpdatesEvent\n3. scheduler.processAllocationUpdateEvent\n   3.1: Update scheduling application with the new or updated ask. \n   3.2: rejections are send back to the RM via RMRejectedAllocationAskEvent \n   3.3: accepted asks are not confirmed to RM or cache\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ask delete")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNewAndReleaseAllocationRequests\n   2.1: (by-pass): Send to scheduler via event SchedulerAllocationUpdatesEvent\n3. scheduler.processAllocationReleaseByAllocationKey\n   3.1: Update scheduling application and remove the ask. \n")),(0,l.kt)("h3",{id:"operations-to-add-update-or-remove-nodes"},"Operations to add, update or remove nodes"),(0,l.kt)("p",null,"The RM (shim) sends a complex ",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," as defined in the scheduler interface.\nThis message is wrapped by the RM proxy and forwarded to the cache for processing.\nThe RM can request a node to be added, updated or removed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"node add")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNewSchedulableNodes\n   2.1: node sanity check (such as existence of partition/node)\n   2.2: Add new nodes to the partition.\n   2.3: notify scheduler of new node via SchedulerNodeEvent\n3. notify RM of node additions and rejections via RMNodeUpdateEvent\n   3.1: notify the scheduler of allocations to recover via SchedulerAllocationUpdatesEvent\n4. scheduler.processAllocationUpdateEvent\n   4.1: scheduler creates a new ask based on the Allocation to recover \n   4.2: recover the allocation on the new node using a special process\n   4.3: confirm the allocation in the scheduler, on failure update the cache with a ReleaseAllocationsEvent\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"node update and removal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNodeActions\n   2.1: node sanity check (such as existence of partition/node)\n   2.2: Node info update (resource change)\n        2.2.1: update node in cache\n        2.2.2: notify scheduler of the node update via SchedulerNodeEvent\n   2.3: Node status update (not removal), update node status in cache only\n   2.4: Node removal\n        2.4.1: update node status and remove node from the cache\n        2.4.2: remove alloations and inform RM via RMReleaseAllocationEvent\n        2.4.3: notify scheduler of the node removal via SchedulerNodeEvent\n3. scheduler.processNodeEvent add/remove/update the node  \n")),(0,l.kt)("h3",{id:"operations-to-add-update-or-remove-partitions"},"Operations to add, update or remove partitions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Add RM")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. RMProxy sends commonevents.RemoveRMPartitionsEvent\n   if RM is already registered\n   1.1: scheduler.removePartitionsBelongToRM\n        1.1.1: scheduler cleans up\n        1.1.2: scheduler sends commonevents.RemoveRMPartitionsEvent\n   1.2: cluster_info.processRemoveRMPartitionsEvent\n        1.2.1: cache cleans up\n2. RMProxy sends commonevents.RegisterRMEvent\n3. cluster_info.processRMRegistrationEvent\n   2.1: cache update internal partitions/queues accordingly.\n   2.2: cache sends to scheduler SchedulerUpdatePartitionsConfigEvent.\n3. scheduler.processUpdatePartitionConfigsEvent\n   3.1: Scheduler update partition/queue info accordingly.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Update and Remove partition"),"\nTriggered by a configuration file update."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. RMProxy sends commonevents.ConfigUpdateRMEvent\n2. cluster_info.processRMConfigUpdateEvent\n   2.1: cache update internal partitions/queues accordingly.\n   2.2: cache sends to scheduler SchedulerUpdatePartitionsConfigEvent.\n   2.3: cache marks partitions for deletion (not removed yet).\n   2.4: cache sends to scheduler SchedulerDeletePartitionsConfigEvent\n3. scheduler.processUpdatePartitionConfigsEvent\n   3.1: scheduler updates internal partitions/queues accordingly.\n4. scheduler.processDeletePartitionConfigsEvent\n   4.1: Scheduler set partitionManager.stop = true.\n   4.2: PartitionManager removes queues, applications, nodes async.\n        This is the REAL CLEANUP including the cache\n")),(0,l.kt)("h3",{id:"allocations"},"Allocations"),(0,l.kt)("p",null,"Allocations are initiated by the scheduling process.\nThe scheduler creates a SchedulingAllocation on the scheduler side which then gets wrapped in an AllocationProposal.\nThe scheduler has checked resources etc already and marked the allocation as inflight.\nThis description picks up at the point the allocation will be confirmed and finalised."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"New allocation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. Scheduler wraps an SchedulingAllocation in an AllocationProposalBundleEvent \n2. cluster_info.processAllocationProposalEvent\n   preemption case: release preempted allocations\n   2.1: release the allocation in the cache\n   2.2: inform the scheduler the allocation is released via SchedulerNodeEvent\n   2.3: inform the RM the allocation is released via RMReleaseAllocationEvent\n   all cases: add the new allocation\n   2.4: add the new allocation to the cache\n   2.5: rejections are send back to the scheduler via SchedulerAllocationUpdatesEvent \n   2.6: inform the scheduler the allocation is added via SchedulerAllocationUpdatesEvent\n   2.7: inform the RM the allocation is added via RMNewAllocationsEvent\n3. scheduler.processAllocationUpdateEvent\n   3.1: confirmations are added to the scheduler and change from inflight to confirmed.\n        On failure of processing a ReleaseAllocationsEvent is send to the cache *again* to clean up.\n        This is part of the issue in [YUNIKORN-169]\n        cluster_info.processAllocationReleases\n   3.2: rejections remove the inflight allocation from the scheduler. \n")),(0,l.kt)("h2",{id:"current-locking"},"Current locking"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Cluster Lock:"),(0,l.kt)("br",{parentName:"p"}),"\n","A cluster contains one or more Partition objects. A partition is a sub object of Cluster.",(0,l.kt)("br",{parentName:"p"}),"\n","Adding or Removing ANY Partition requires a write-lock of the cluster.\nRetrieving any object within the cluster will require iterating over the Partition list and thus a read-lock of the cluster"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Partition Lock:"),(0,l.kt)("br",{parentName:"p"}),"\n","The partition object contains all links to Queue, Application or Node objects.\nAdding or Removing ANY Queue, Application or Node needs a write-lock of the partition.\nRetrieving any object within the partition will require a read-lock of the partition to prevent data races"),(0,l.kt)("p",null,"Examples of operation needing a write-lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Allocation processing after scheduling, will change application, queue and node objects.\nPartition lock is required due to possible updates to reservations."),(0,l.kt)("li",{parentName:"ul"},"Update of Node Resource\nIt not only affect node's available resource, it also affects the Partition's total allocatable Resource ")),(0,l.kt)("p",null,"Example of operations that need a read-lock:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Retrieving any Queue, Application or Node needs a read-lock\nThe object itself is not locked as part of the retrieval"),(0,l.kt)("li",{parentName:"ul"},"Confirming an allocation after processing in the cache\nThe partition is only locked for reading to allow retrieval of the objects that will be changed.\nThe changes are made on the underlying objects.")),(0,l.kt)("p",null,"Example of operations that do not need any lock: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scheduling",(0,l.kt)("br",{parentName:"li"}),"Locks are taken on the specific objects when needed, no direct updates to the partition until the allocation is confirmed. ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Queue lock:"),(0,l.kt)("br",{parentName:"p"}),"\n","A queue can track either applications (leaf type) or other queues (parent type).\nResources are tracked for both types in the same way."),(0,l.kt)("p",null,"Adding or removing an Application (leaf type), or a direct child queue (parent type) requires a write-lock of the queue.",(0,l.kt)("br",{parentName:"p"}),"\n","Updating tracked resources requires a write-lock.\nChanges are made recursively never locking more than 1 queue at a time.",(0,l.kt)("br",{parentName:"p"}),"\n","Updating any configuration property on the queue requires a write-lock.\nRetrieving any configuration value, or tracked resource, application or queue requires a read-lock.  "),(0,l.kt)("p",null,"Examples of operation needing a write-lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Adding an application to a leaf queue"),(0,l.kt)("li",{parentName:"ul"},"Updating the reservations")),(0,l.kt)("p",null,"Examples of operation needing a read-lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Retrieving an application from a leaf type queue"),(0,l.kt)("li",{parentName:"ul"},"Retrieving the pending resources ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Application lock:"),(0,l.kt)("br",{parentName:"p"}),"\n","An application tracks resources of different types, the allocations and outstanding requests.",(0,l.kt)("br",{parentName:"p"}),"\n","Updating any tracked resources, allocations or requests requires a write-lock.\nRetrieving any of those values requires a read-lock."),(0,l.kt)("p",null,"Scheduling also requires a write-lock of the application.\nDuring scheduling the write-lock is held for the application.\nLocks will be taken on the node or queue that need to be accessed or updated.",(0,l.kt)("br",{parentName:"p"}),"\n","Examples of the locks taken on other objects are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a read lock to access queue tracked resources"),(0,l.kt)("li",{parentName:"ul"},"a write-lock to update the in progress allocations on the node ")),(0,l.kt)("p",null,"Examples of operation needing a write-lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Adding a new ask"),(0,l.kt)("li",{parentName:"ul"},"Trying to schedule a pending request ")),(0,l.kt)("p",null,"Examples of operation needing a read-lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Retrieving the allocated resources"),(0,l.kt)("li",{parentName:"ul"},"Retrieving the pending requests")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Node lock:"),(0,l.kt)("br",{parentName:"p"}),"\n","An node tracks resources of different types and allocations.\nUpdating any tracked resources or allocations requires a write-lock.\nRetrieving any of those values requires a read-lock."),(0,l.kt)("p",null,"Checks run during the allocation phases take locks as required.\nRead-locks when checking write-locks when updating.\nA node is not locked for the whole allocation cycle."),(0,l.kt)("p",null,"Examples of operation needing a write-lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Adding a new allocation"),(0,l.kt)("li",{parentName:"ul"},"updating the node resources")),(0,l.kt)("p",null,"Examples of operation needing a read-lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Retrieving the allocated resources"),(0,l.kt)("li",{parentName:"ul"},"Retrieving the reservation status")),(0,l.kt)("h2",{id:"how-to-merge-cache-and-scheduler-objects"},"How to merge Cache and scheduler objects"),(0,l.kt)("p",null,"Since there is no longer the requirement to distinguish the objects in the cache and scheduler the ",(0,l.kt)("inlineCode",{parentName:"p"},"scheduling")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"info")," parts of the name will be dropped."),(0,l.kt)("p",null,"Overview of the main moves and merges:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"application_info")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduling_application"),": ",(0,l.kt)("strong",{parentName:"li"},"merge")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.object.application")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"allocation_info")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduling_allocation"),": ",(0,l.kt)("strong",{parentName:"li"},"merge")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.object.allocation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"node_info")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduling_node"),": ",(0,l.kt)("strong",{parentName:"li"},"merge")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.object.node")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"queue_info")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduling_queue"),": ",(0,l.kt)("strong",{parentName:"li"},"merge")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.object.queue")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"partition_info")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduling_partition"),": ",(0,l.kt)("strong",{parentName:"li"},"merge")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.PartitionContext")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"cluster_info")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduling_context"),": ",(0,l.kt)("strong",{parentName:"li"},"merge")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.ClusterContext")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"application_state"),": ",(0,l.kt)("strong",{parentName:"li"},"move")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.object.applicationState")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"object_state"),": ",(0,l.kt)("strong",{parentName:"li"},"move")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.object.objectState")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"initializer"),": ",(0,l.kt)("strong",{parentName:"li"},"merge")," into ",(0,l.kt)("inlineCode",{parentName:"li"},"scheduler.ClusterContext"))),(0,l.kt)("p",null,"This move and merge of code includes a refactor of the objects into their own package.\nThat thus affects the two scheduler only objects, reservations and schedulingAsk, that are already defined.\nBoth will be moved into the objects package."),(0,l.kt)("p",null,"The top level scheduler package remains for the contexts and scheduling code."),(0,l.kt)("h2",{id:"code-merges"},"Code merges"),(0,l.kt)("p",null,"The first change is the event processing.\nAll RM events will now directly be handled in the scheduler.\nEvent handling will undergo a major change, far more than a simple merge.\nOnly the RM generated events will be left after the merge.\nAs described in the analysis above the scheduler is, in almost all cases, notified of changes from RM events."),(0,l.kt)("p",null,"Broadly speaking there are only three types of changes triggered by the event removal: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"configuration changes: new scheduler code required as the cache handling is not transferable to the scheduler"),(0,l.kt)("li",{parentName:"ul"},"node, ask and application changes: merge of the cache code into the scheduler"),(0,l.kt)("li",{parentName:"ul"},"allocation changes: removal of confirmation cycle and simplification of the scheduler code")),(0,l.kt)("p",null,"Part of the event handling is the processing of the configuration changes.\nAll configuration changes will now update the scheduler objects directly.\nThe way the scheduler works is slightly different from the cache which means the code is not transferable. "),(0,l.kt)("p",null,"Nodes and applications are really split between the cache and scheduler.\nAnything that is tracked in the cache object that does not have an equivalent value in the scheduler object will be moved into the scheduler object.\nAll references to scheduler objects will be removed.\nWith the code merges existing scheduler code that calls out directly into the cache objects will return the newly tracked value in the scheduler object.\nThese calls will thus become locked calls in the scheduler."),(0,l.kt)("p",null,"The concept of an in flight allocation will be removed.\nAllocation will be made in the same scheduling iteration without events or creation of a proposal.\nRemoving the need for tracking of allocating resources on the scheduler objects.\nIn flight resource tracking was required to make sure that an allocation while not confirmed by the cache would being taken into account while making scheduling decisions."),(0,l.kt)("p",null,"The application and object state will be an integrated part of the scheduler object.\nA state change is thus immediate and this should prevent an issue like ",(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-169"},"YUNIKORN-169")," from occuring."),(0,l.kt)("h2",{id:"locking-after-merge"},"Locking after merge"),(0,l.kt)("h3",{id:"direction-of-lock"},"Direction of lock"),(0,l.kt)("p",null,"It is possible to acquire another lock while holding a lock, but we need to make sure that we do not allow: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Holding A.lock and acquire B's lock. "),(0,l.kt)("li",{parentName:"ul"},"Holding B.lock and acquire B's lock. ")),(0,l.kt)("p",null,"The current code in the scheduler takes a lock as late as possible and only for the time period needed.\nSome actions are not locked on the scheduler side just on the cache side as each object has its own lock.\nThis means that a read of a value from the cache would not lock the scheduling object."),(0,l.kt)("p",null,"With the integration of the cache into the scheduler the number of locks will decrease as the number of objects decreases.\nEach equivalent object, cache and scheduler, which used to have their own lock will now have just one.\nAfter the merge of the code is performed one lock will be left.\nLocking will occur more frequently as the number of fields in the scheduler objects has increased."),(0,l.kt)("p",null,"Calls that did not lock the scheduler object before the merge will become locked.\nLock contention could lead to performance degradation.\nThe reduced overhead in objects and event handling can hopefully compensate for this.\nOne point to keep track of is the change in locking behaviour.\nNew behaviour could lead to new deadlock situations when code is simply merged without looking at the order."),(0,l.kt)("h3",{id:"mitigations-for-deadlocks"},"Mitigations for deadlocks"),(0,l.kt)("p",null,"The locking inside the scheduler will be left as is.\nThis means that the main scheduling logic will be taking and releasing locks as required on the objects.\nThere are no long held read-locks or write-locks until the application is locked to schedule it."),(0,l.kt)("p",null,"A major point of attention will need to be that no iterations of objects should be performed while holding on to a lock.\nFor instance during scheduling while iterating over a queue's application we should not lock the queue."),(0,l.kt)("p",null,"Another example would be that event processing in the partition should not lock the partition unneeded.\nThe partition should be locked while retrieving for instance the node that needs updating and release the lock before it tries to lock the node itself."),(0,l.kt)("p",null,"This approach fits in with the current locking approach and will keep the locking changes to a minimum.\nTesting, specifically end-to-end testing, should catch these deadlocks.\nThere are no known tools that could be used to detect or describe lock order."))}p.isMDXComponent=!0}}]);