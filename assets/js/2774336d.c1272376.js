"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81192],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>u});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),y=r,u=g["".concat(p,".").concat(y)]||g[y]||m[y]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(45072),r=(n(11504),n(95788));const i={id:"openshift_development",title:"Development in CodeReady Containers"},o=void 0,l={unversionedId:"developer_guide/openshift_development",id:"version-1.4.0/developer_guide/openshift_development",title:"Development in CodeReady Containers",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/developer_guide/openshift_development.md",sourceDirName:"developer_guide",slug:"/developer_guide/openshift_development",permalink:"/docs/developer_guide/openshift_development",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"openshift_development",title:"Development in CodeReady Containers"},sidebar:"docs",previous:{title:"Deploy to Kubernetes",permalink:"/docs/developer_guide/deployment"},next:{title:"Architecture",permalink:"/docs/design/architecture"}},p={},s=[{value:"Set up a running CRC cluster",id:"set-up-a-running-crc-cluster",level:2},{value:"Testing a patch",id:"testing-a-patch",level:2},{value:"Using custom images",id:"using-custom-images",level:2},{value:"Podman",id:"podman",level:3},{value:"Directly pushing OS Image Registry",id:"directly-pushing-os-image-registry",level:2}],c={toc:s},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"YuniKorn is tested against OpenShift and developers can set up their local environment to test patches against OpenShift.\nOur recommended local environment uses CodeReady containers."),(0,r.yg)("h2",{id:"set-up-a-running-crc-cluster"},"Set up a running CRC cluster"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download CodeReady Container binaries"),(0,r.yg)("p",{parentName:"li"},'Select your OS from the dropdown list then click on "Download" (On a Mac, you\'ll download crc-macos-amd64.tar.xz; on Linux, crc-linux-amd64.tar.xz).\nYou\'ll be asked to connect using your Red Hat login. If you don\'t have one, just click on "Create one now". You do ',(0,r.yg)("em",{parentName:"p"},"not")," need a Red Hat subscription for this."),(0,r.yg)("p",{parentName:"li"},"Once logged in, download CodeReady Containers binary and the pull secret.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Unzip the tar file."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tar -xvzf crc-macos-amd64.tar.xz\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Move the crc binary under your path. Like"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo cp `pwd`/crc-macos-$CRCVERSION-amd64/crc /usr/local/bin\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure CRC in accordance with your hardware capabilities."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"crc config set memory 16000\ncrc config set cpus 12\ncrc setup\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the CRC and open the console."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"crc start --pull-secret-file pull-secret.txt\ncrc console\n")))),(0,r.yg)("h2",{id:"testing-a-patch"},"Testing a patch"),(0,r.yg)("p",null,"The following steps assume you have a running CRC cluster in your laptop. Note that these steps are not tested against a remote CRC cluster. "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Access your environment through the ",(0,r.yg)("inlineCode",{parentName:"p"},"oc")," command."),(0,r.yg)("p",{parentName:"li"},"Type in the ",(0,r.yg)("inlineCode",{parentName:"p"},"crc oc-env")," command to a shell."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'$ crc oc-env\nexport PATH="/Users/<user>/.crc/bin/oc:$PATH"\n# Run this command to configure your shell:\n# eval $(crc oc-env)\n')),(0,r.yg)("p",{parentName:"li"},"So you need to type in this to access the ",(0,r.yg)("inlineCode",{parentName:"p"},"oc")," comamnd:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"eval $(crc oc-env)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Log in to ",(0,r.yg)("inlineCode",{parentName:"p"},"oc"),". After the CRC has started it will display a similar message:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"To access the cluster, first set up your environment by following 'crc oc-env' instructions.\nThen you can access it by running 'oc login -u developer -p developer https://api.crc.testing:6443'.\nTo login as an admin, run 'oc login -u kubeadmin -p duduw-yPT9Z-hsUpq-f3pre https://api.crc.testing:6443'.\nTo access the cluster, first set up your environment by following 'crc oc-env' instructions.\n")),(0,r.yg)("p",{parentName:"li"},"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"oc login -u kubeadmin ...")," command. ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Get the URL of the local OpenShift cluster's internal private Docker repository by typing the command below."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ oc get route default-route -n openshift-image-registry --template='{{ .spec.host }}'\ndefault-route-openshift-image-registry.apps-crc.testing\n")),(0,r.yg)("p",{parentName:"li"},"By default it should be ",(0,r.yg)("inlineCode",{parentName:"p"},"default-route-openshift-image-registry.apps-crc.testing"),". Change the steps above, if the displayed URL is different.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Prepare the Docker images."),(0,r.yg)("p",{parentName:"li"},"You can read more about this at the bottom, in the ",(0,r.yg)("em",{parentName:"p"},"Using custom images")," section.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Prepare the helm chart."),(0,r.yg)("p",{parentName:"li"},"If you want to use custom Docker images, replace the images in the chart's ",(0,r.yg)("inlineCode",{parentName:"p"},"values.yaml")," config file."),(0,r.yg)("p",{parentName:"li"},"Note that if you manually pushed the Docker image to the ",(0,r.yg)("inlineCode",{parentName:"p"},"default-route-openshift-image-registry.apps-crc.testing")," docker registry directly you need to have valid certs to access it.\nOn OpenShift there's service for this: ",(0,r.yg)("inlineCode",{parentName:"p"},"image-registry.openshift-image-registry.svc"),", which is easier to use."),(0,r.yg)("p",{parentName:"li"},"For example, if you want to override all of the Docker images you should use the following configs:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"image:\n  repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn\n  tag: scheduler-latest\n  pullPolicy: Always\n\npluginImage:\n  repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn\n  tag: scheduler-plugin-latest\n  pullPolicy: Always\n\nadmissionController:\n  image:\n    repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn\n    tag: admission-latest\n    pullPolicy: Always\n\nweb:\n  image:\n    repository: image-registry.openshift-image-registry.svc:5000/yunikorn/yunikorn-web\n    tag: latest\n    pullPolicy: Always\n")),(0,r.yg)("p",{parentName:"li"},"You can find it in the yunikorn-release repo's helm chart directory.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install the helm charts."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm install yunikorn . -n yunikorn\n")))),(0,r.yg)("h2",{id:"using-custom-images"},"Using custom images"),(0,r.yg)("h3",{id:"podman"},"Podman"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Log in into Podman using the following command."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman login --tls-verify=false -u kubeadmin -p $(oc whoami -t) default-route-openshift-image-registry.apps-crc.testing\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Build the image in the repository e.g. in shim using the generic ",(0,r.yg)("inlineCode",{parentName:"p"},"make image")," command.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Verify that the image is present in the repository."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"podman images\nREPOSITORY                TAG              IMAGE ID     CREATED            SIZE\nlocalhost/apache/yunikorn admission-latest 19eb41241d64 About a minute ago 53.5 MB\nlocalhost/apache/yunikorn scheduler-latest e60e09b424d9 About a minute ago 543 MB\n")))),(0,r.yg)("h2",{id:"directly-pushing-os-image-registry"},"Directly pushing OS Image Registry"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create the images that you wish to replace."),(0,r.yg)("p",{parentName:"li"},"You can either build new images locally or use official (maybe mix both)."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"For the -shim and -web images checkout the repository (optionally make your changes) and type the following command:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"make clean image REGISTRY=default-route-openshift-image-registry.apps-crc.testing/<project>/<name>:<tag>\n")),"Note that in OpenShift a project is equivalent a Kubernetes namespace. The ",(0,r.yg)("inlineCode",{parentName:"li"},"yunikorn")," project/namespace is recommended."),(0,r.yg)("li",{parentName:"ul"},"Using an official image is possible by, retagging it with by the ",(0,r.yg)("inlineCode",{parentName:"li"},"docker tag")," command. ",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker tag apache/yunikorn:scheduler-latest default-route-openshift-image-registry.apps-crc.testing/yunikorn/yunikorn:scheduler-latest\n"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Login to the Docker repository."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker login -u kubeadmin -p $(oc whoami -t) default-route-openshift-image-registry.apps-crc.testing\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Push the Docker images to the internal Docker repository"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"docker push default-route-openshift-image-registry.apps-crc.testing/yunikorn/yunikorn:scheduler-latest\n")))))}m.isMDXComponent=!0}}]);