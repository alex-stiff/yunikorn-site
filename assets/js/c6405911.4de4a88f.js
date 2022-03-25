"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9848],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,h=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10354:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"env_setup",title:"Dev Environment Setup"},s=void 0,c={unversionedId:"developer_guide/env_setup",id:"version-0.9.0/developer_guide/env_setup",title:"Dev Environment Setup",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/developer_guide/env_setup.md",sourceDirName:"developer_guide",slug:"/developer_guide/env_setup",permalink:"/docs/0.9.0/developer_guide/env_setup",tags:[],version:"0.9.0",frontMatter:{id:"env_setup",title:"Dev Environment Setup"},sidebar:"version-0.9.0/docs",previous:{title:"Trouble Shooting",permalink:"/docs/0.9.0/user_guide/trouble_shooting"},next:{title:"Build and Run",permalink:"/docs/0.9.0/developer_guide/build"}},u={},p=[{value:"Local Kubernetes cluster using Docker Desktop",id:"local-kubernetes-cluster-using-docker-desktop",level:2},{value:"Installation",id:"installation",level:3},{value:"Deploy and access dashboard",id:"deploy-and-access-dashboard",level:3},{value:"Access local Kubernetes cluster",id:"access-local-kubernetes-cluster",level:3},{value:"Local Kubernetes cluster with Minikube",id:"local-kubernetes-cluster-with-minikube",level:2},{value:"Installing Minikube",id:"installing-minikube",level:3},{value:"Deploy and access the cluster",id:"deploy-and-access-the-cluster",level:3},{value:"Build impact",id:"build-impact",level:3},{value:"Debug code locally",id:"debug-code-locally",level:2},{value:"Access remote Kubernetes cluster",id:"access-remote-kubernetes-cluster",level:2}],d={toc:p};function k(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are several ways to setup a local development environment for Kubernetes, the two most common ones are ",(0,o.kt)("inlineCode",{parentName:"p"},"Minikube")," (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/minikube/"},"docs"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-desktop"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"Minikube")," provisions a local Kubernetes cluster on several Virtual Machines (via VirtualBox or something similar). ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-desktop")," on the other hand, sets up Kubernetes cluster in docker containers."),(0,o.kt)("h2",{id:"local-kubernetes-cluster-using-docker-desktop"},"Local Kubernetes cluster using Docker Desktop"),(0,o.kt)("p",null,"In this tutorial, we will base all the installs on Docker Desktop.\nEven in this case we can use a lightweight ",(0,o.kt)("a",{parentName:"p",href:"#local-kubernetes-cluster-with-minikube"},"minikube")," setup which gives the same functionality with less impact."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Download and install ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker-Desktop")," on your laptop. Latest version has an embedded version of Kubernetes so no additional install is needed.\nJust simply follow the instruction ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/#kubernetes"},"here")," to get Kubernetes up and running within docker-desktop."),(0,o.kt)("p",null,"Once Kubernetes is started in docker desktop, you should see something similar below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Kubernetes in Docker Desktop",src:n(9013).Z,width:"424",height:"391"})),(0,o.kt)("p",null,"This means that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Kubernetes is running."),(0,o.kt)("li",{parentName:"ol"},"the command line tool ",(0,o.kt)("inlineCode",{parentName:"li"},"kubctl")," is installed in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," directory."),(0,o.kt)("li",{parentName:"ol"},"the Kubernetes context is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-desktop"),".")),(0,o.kt)("h3",{id:"deploy-and-access-dashboard"},"Deploy and access dashboard"),(0,o.kt)("p",null,"After setting up the local Kubernetes you need to deploy the dashboard using the following steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"follow the instructions in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/dashboard"},"Kubernetes dashboard doc")," to deploy the dashboard."),(0,o.kt)("li",{parentName:"ol"},"start the Kubernetes proxy in the background from a terminal to get access on the dashboard on the local host:   ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl proxy &\n"))),(0,o.kt)("li",{parentName:"ol"},"access the dashboard at the following URL: ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/#!/login"},"clickable link"))),(0,o.kt)("h3",{id:"access-local-kubernetes-cluster"},"Access local Kubernetes cluster"),(0,o.kt)("p",null,"The dashboard as deployed in the previous step requires a token or config to sign in. Here we use the token to sign in. The token is generated automatically and can be retrieved from the system."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"retrieve the name of the dashboard token:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl -n kube-system get secret | grep kubernetes-dashboard-token\n"))),(0,o.kt)("li",{parentName:"ol"},"retrieve the content of the token, note that the token name ends with a random 5 character code and needs to be replaced with the result of step 1. As an example:  ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl -n kube-system describe secret kubernetes-dashboard-token-tf6n8\n"))),(0,o.kt)("li",{parentName:"ol"},"copy the token value which is part of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Data")," section with the tag ",(0,o.kt)("inlineCode",{parentName:"li"},"token"),"."),(0,o.kt)("li",{parentName:"ol"},"select the ",(0,o.kt)("strong",{parentName:"li"},"Token")," option in the dashboard web UI:",(0,o.kt)("br",null),(0,o.kt)("img",{alt:"Token Access in dashboard",src:n(63855).Z,width:"481",height:"267"})),(0,o.kt)("li",{parentName:"ol"},"paste the token value into the input box and sign in:",(0,o.kt)("br",null),(0,o.kt)("img",{alt:"Token Access in dashboard",src:n(59392).Z,width:"432",height:"209"}))),(0,o.kt)("h2",{id:"local-kubernetes-cluster-with-minikube"},"Local Kubernetes cluster with Minikube"),(0,o.kt)("p",null,"Minikube can be added to an existing Docker Desktop install. Minikube can either use the pre-installed hypervisor or use a hypervisor of choice. These instructions use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moby/hyperkit"},"HyperKit")," which is embedded in Docker Desktop.   "),(0,o.kt)("p",null,"If you want to use a different hypervisor then HyperKit make sure that you follow the generic minikube install instructions. Do not forget to install the correct driver for the chosen hypervisor if required.\nThe basic instructions are provided in the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"minikube install")," instructions."),(0,o.kt)("p",null,"Check hypervisor Docker Desktop should have already installed HyperKit. In a terminal run: ",(0,o.kt)("inlineCode",{parentName:"p"},"hyperkit")," to confirm. Any response other than ",(0,o.kt)("inlineCode",{parentName:"p"},"hyperkit: command not found")," confirms that HyperKit is installed and on the path. If it is not found you can choose a different hypervisor or fix the Docker Desktop install."),(0,o.kt)("h3",{id:"installing-minikube"},"Installing Minikube"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"install minikube, you can either use brew or directly via these steps: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64\nchmod +x minikube\nsudo mv minikube /usr/local/bin\n"))),(0,o.kt)("li",{parentName:"ol"},"install HyperKit driver (required), you can either use brew or directly via these steps:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -LO https://storage.googleapis.com/minikube/releases/latest/docker-machine-driver-hyperkit\nsudo install -o root -g wheel -m 4755 docker-machine-driver-hyperkit /usr/local/bin/\n"))),(0,o.kt)("li",{parentName:"ol"},"update the minikube config to default to the HyperKit install ",(0,o.kt)("inlineCode",{parentName:"li"},"minikube config set vm-driver hyperkit")),(0,o.kt)("li",{parentName:"ol"},"change docker desktop to use minikube for Kubernetes:",(0,o.kt)("br",null),(0,o.kt)("img",{alt:"Kubernetes in Docker Desktop: minikube setting",src:n(35819).Z,width:"425",height:"391"}))),(0,o.kt)("h3",{id:"deploy-and-access-the-cluster"},"Deploy and access the cluster"),(0,o.kt)("p",null,"After the installation is done you can start a new cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"start the minikube cluster: ",(0,o.kt)("inlineCode",{parentName:"li"},"minikube start --kubernetes-version v1.14.2")),(0,o.kt)("li",{parentName:"ol"},"start the minikube dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"minikube dashboard &"))),(0,o.kt)("h3",{id:"build-impact"},"Build impact"),(0,o.kt)("p",null,"When you create images make sure that the build is run after pointing it to the right environment.\nWithout setting the enviromnent minikube might not find the docker images when deploying the scheduler."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"make sure minikube is started"),(0,o.kt)("li",{parentName:"ol"},"in the terminal where you wll run the build execute: ",(0,o.kt)("inlineCode",{parentName:"li"},"eval $(minikube docker-env)")),(0,o.kt)("li",{parentName:"ol"},"run the image build from the yunikorn-k8shim repository root: ",(0,o.kt)("inlineCode",{parentName:"li"},"make image")),(0,o.kt)("li",{parentName:"ol"},"deploy the scheduler as per the normal instructions.")),(0,o.kt)("h2",{id:"debug-code-locally"},"Debug code locally"),(0,o.kt)("p",null,"Note, this instruction requires you have GoLand IDE for development."),(0,o.kt)("p",null,'In GoLand, go to yunikorn-k8shim project. Then click "Run" -> "Debug..." -> "Edit Configuration..." to get the pop-up configuration window.\nNote, you need to click "+" to create a new profile if the ',(0,o.kt)("inlineCode",{parentName:"p"},"Go Build")," option is not available at the first time."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Debug Configuration",src:n(86414).Z,width:"1281",height:"965"})),(0,o.kt)("p",null,"The highlighted fields are the configurations you need to add. These include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run Kind: package"),(0,o.kt)("li",{parentName:"ul"},"Package path: point to the path of ",(0,o.kt)("inlineCode",{parentName:"li"},"pkg/shim")," package"),(0,o.kt)("li",{parentName:"ul"},"Working directory: point to the path of the ",(0,o.kt)("inlineCode",{parentName:"li"},"conf")," directory, this is where the program loads configuration file from"),(0,o.kt)("li",{parentName:"ul"},"Program arguments: specify the arguments to run the program, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"-kubeConfig=/path/to/.kube/config -interval=1s -clusterId=mycluster -clusterVersion=0.1 -name=yunikorn -policyGroup=queues -logEncoding=console -logLevel=-1"),".\nNote, you need to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"/path/to/.kube/config")," with the local path to the kubeconfig file. And if you want to change or add more options, you can run ",(0,o.kt)("inlineCode",{parentName:"li"},"_output/bin/k8s-yunikorn-scheduler -h")," to find out.")),(0,o.kt)("p",null,'Once the changes are done, click "Apply", then "Debug". You will need to set proper breakpoints in order to debug the program.'),(0,o.kt)("h2",{id:"access-remote-kubernetes-cluster"},"Access remote Kubernetes cluster"),(0,o.kt)("p",null,"This setup assumes you have already installed a remote Kubernetes cluster.\nFor a generic view on how to access a multiple cluster and integrate it follow the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"accessing multiple clusters")," documentation from Kubernetes."),(0,o.kt)("p",null,"Or follow these simplified steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"get the Kubernetes ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," file from remote cluster, copy it to the local machine and give it a unique name i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"config-remote")),(0,o.kt)("li",{parentName:"ol"},"save the ",(0,o.kt)("inlineCode",{parentName:"li"},"KUBECONFIG")," environment variable (if set)",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export KUBECONFIG_SAVED=$KUBECONFIG\n"))),(0,o.kt)("li",{parentName:"ol"},"add the new file to the environment variable",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export KUBECONFIG=$KUBECONFIG:config-remote\n"))),(0,o.kt)("li",{parentName:"ol"},"run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl config view")," to check that both configs can be accessed"),(0,o.kt)("li",{parentName:"ol"},"switch context using ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl config use-context my-remote-cluster")),(0,o.kt)("li",{parentName:"ol"},"confirm that the current context is now switched to the remote cluster config:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"kubectl config get-contexts\nCURRENT   NAME                   CLUSTER                      AUTHINFO             NAMESPACE\n          docker-for-desktop     docker-for-desktop-cluster   docker-for-desktop\n*         my-remote-cluster      kubernetes                   kubernetes-admin\n")))),(0,o.kt)("p",null,"More docs can be found ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"here")))}k.isMDXComponent=!0},59392:function(e,t,n){t.Z=n.p+"assets/images/dashboard_secret-80e18f88ceb541c0d70bcd1c60176290.png"},63855:function(e,t,n){t.Z=n.p+"assets/images/dashboard_token_select-a9c66b12d37a247d623e662d642b80be.png"},35819:function(e,t,n){t.Z=n.p+"assets/images/docker-dektop-minikube-741c814795983ad6133a5b5b33a2f398.png"},9013:function(e,t,n){t.Z=n.p+"assets/images/docker-desktop-7afa28a7972e0e8867bcab8a6a9ac614.png"},86414:function(e,t,n){t.Z=n.p+"assets/images/goland_debug-bf10925ea3e1fdd82cfd32b6f4049678.jpg"}}]);