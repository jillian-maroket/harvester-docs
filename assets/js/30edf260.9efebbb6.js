"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[19496],{45252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});a(67294);var r=a(3905);const n={sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},i=void 0,o={unversionedId:"rancher/cloud-provider",id:"version-v1.3/rancher/cloud-provider",title:"Harvester Cloud Provider",description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer.",source:"@site/versioned_docs/version-v1.3/rancher/cloud-provider.md",sourceDirName:"rancher",slug:"/rancher/cloud-provider",permalink:"/v1.3/rancher/cloud-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/rancher/cloud-provider.md",tags:[],version:"v1.3",lastUpdatedAt:1730080976,formattedLastUpdatedAt:"Oct 28, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},sidebar:"api",previous:{title:"Creating an K3s Kubernetes Cluster",permalink:"/v1.3/rancher/node/k3s-cluster"},next:{title:"Harvester CSI Driver",permalink:"/v1.3/rancher/csi-driver"}},s={},l=[{value:"Backward Compatibility Notice",id:"backward-compatibility-notice",level:3},{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying to the RKE1 Cluster with Harvester Node Driver",id:"deploying-to-the-rke1-cluster-with-harvester-node-driver",level:3},{value:"Deploying to the RKE2 Cluster with Harvester Node Driver",id:"deploying-to-the-rke2-cluster-with-harvester-node-driver",level:3},{value:"Deploying to the RKE2 custom cluster (experimental)",id:"deploying-to-the-rke2-custom-cluster-experimental",level:3},{value:"Deploying to the K3s cluster with Harvester node driver (experimental)",id:"deploying-to-the-k3s-cluster-with-harvester-node-driver-experimental",level:3},{value:"Upgrade Cloud Provider",id:"upgrade-cloud-provider",level:2},{value:"Upgrade RKE2",id:"upgrade-rke2",level:3},{value:"Upgrade RKE/K3s",id:"upgrade-rkek3s",level:3},{value:"Load Balancer Support",id:"load-balancer-support",level:2},{value:"IPAM",id:"ipam",level:3},{value:"Health checks",id:"health-checks",level:2}],p={toc:l},d="wrapper";function c({components:e,...t}){return(0,r.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/cloud-provider"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/v1.3/rancher/node/rke1-cluster"},"RKE1")," and ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/rancher/node/rke2-cluster"},"RKE2")," clusters can be provisioned in Rancher using the built-in Harvester Node Driver. Harvester provides ",(0,r.kt)("a",{parentName:"p",href:"#load-balancer-support"},"load balancer")," and Harvester cluster ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/rancher/csi-driver"},"storage passthrough")," support to the guest Kubernetes cluster."),(0,r.kt)("p",null,"In this page we will learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to deploy the Harvester cloud provider in both RKE1 and RKE2 cluster."),(0,r.kt)("li",{parentName:"ul"},"How to use the ",(0,r.kt)("a",{parentName:"li",href:"#load-balancer-support"},"Harvester load balancer"),".")),(0,r.kt)("h3",{id:"backward-compatibility-notice"},"Backward Compatibility Notice"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note a known backward compatibility issue if you're using the Harvester cloud provider version ",(0,r.kt)("strong",{parentName:"p"},"v0.2.2")," or higher. If your Harvester version is below ",(0,r.kt)("strong",{parentName:"p"},"v1.2.0")," and you intend to use newer RKE2 versions (i.e., >= ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.26.6+rke2r1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.25.11+rke2r1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.15+rke2r1"),"), it is essential to upgrade your Harvester cluster to v1.2.0 or a higher version before proceeding with the upgrade of the guest Kubernetes cluster or Harvester cloud provider."),(0,r.kt)("p",{parentName:"admonition"},"For a detailed support matrix, please refer to the ",(0,r.kt)("strong",{parentName:"p"},"Harvester CCM & CSI Driver with RKE2 Releases")," section of the official ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"website"),".")),(0,r.kt)("h2",{id:"deploying"},"Deploying"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,r.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace."),(0,r.kt)("li",{parentName:"ul"},"The Harvester virtual machine guests' hostnames match their corresponding Harvester virtual machine names. Guest cluster Harvester VMs can't have different hostnames than their Harvester VM names when using the Harvester CSI driver. We hope ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4396"},"to remove this limitation")," in a future release of Harvester.")),(0,r.kt)("admonition",{title:"important",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Each Harvester VM must have the ",(0,r.kt)("inlineCode",{parentName:"p"},"macvlan")," kernel module, which is required for the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," services of the ",(0,r.kt)("strong",{parentName:"p"},"DHCP")," IPAM mode."),(0,r.kt)("p",{parentName:"admonition"},"To check if the kernel module is available, access the VM and run the following commands:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"lsmod | grep macvlan\nsudo modprobe macvlan\n")),(0,r.kt)("p",{parentName:"admonition"},"The kernel module is likely to be missing if the following occur:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ lsmod | grep macvlan")," does not produce output."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ sudo modprobe macvlan")," displays an error message similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"modprobe: FATAL: Module macvlan not found in directory /lib/modules/5.14.21-150400.22-default"),".")),(0,r.kt)("p",{parentName:"admonition"},"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"macvlan")," kernel module is not included in SUSE Linux Enterprise 15 Service Pack 4/5/6 minimal cloud images (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/6418"},"Issue #6418"),"). Those images contain the ",(0,r.kt)("a",{parentName:"p",href:"https://software.opensuse.org/package/kernel-default-base"},(0,r.kt)("inlineCode",{parentName:"a"},"kernel-default-base"))," package, which includes only the base modules. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"macvlan")," kernel driver becomes available when you install the ",(0,r.kt)("inlineCode",{parentName:"p"},"kernel-default")," package."),(0,r.kt)("p",{parentName:"admonition"},"To eliminate the need for manual intervention after the guest cluster is provisioned, build your own cloud images using the openSUSE Build Service (OBS). You must remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"kernel-default-base")," package and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"kernel-default")," package in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Minimal.kiwi")," file to ensure that the resulting cloud image includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"macvlan")," kernel module. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/advanced/customsuseimages"},"Custom SUSE VM Images"),".")),(0,r.kt)("h3",{id:"deploying-to-the-rke1-cluster-with-harvester-node-driver"},"Deploying to the RKE1 Cluster with Harvester Node Driver"),(0,r.kt)("p",null,"When spinning up an RKE cluster using the Harvester node driver, you can perform two steps to deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," option."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(50900).Z,width:"2180",height:"223"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester Cloud Provider")," from the Rancher marketplace."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(92903).Z,width:"2548",height:"389"})))),(0,r.kt)("h3",{id:"deploying-to-the-rke2-cluster-with-harvester-node-driver"},"Deploying to the RKE2 Cluster with Harvester Node Driver"),(0,r.kt)("p",null,"When spinning up an RKE2 cluster using the Harvester node driver, select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider. The node driver will then help deploy both the CSI driver and CCM automatically."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:a(20404).Z,width:"2238",height:"646"})),(0,r.kt)("h3",{id:"deploying-to-the-rke2-custom-cluster-experimental"},"Deploying to the RKE2 custom cluster (experimental)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(25147).Z,width:"3496",height:"1846"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate cloud config data using the script ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_addon.sh"),", and then place the data on every custom node (directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/cloud-config"),")."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh | bash -s <serviceaccount name> <namespace>\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"  The script depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," when operating the Harvester cluster, and functions only when given access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester Cluster")," kubeconfig file."),(0,r.kt)("p",{parentName:"admonition"},"  You can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file in one of the Harvester management nodes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2.yaml")," path. The server IP must be replaced with the VIP address."),(0,r.kt)("p",{parentName:"admonition"},"Example of content:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: <redacted>\n    server: https://127.0.0.1:6443\n  name: default\n# ...\n")),(0,r.kt)("p",{parentName:"admonition"},"  You must specify the namespace in which the guest cluster will be created.")),(0,r.kt)("p",{parentName:"li"},"  Example of output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"########## cloud config ############\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: <CACERT>\n    server: https://HARVESTER-ENDPOINT/k8s/clusters/local\n  name: local\ncontexts:\n- context:\n    cluster: local\n    namespace: default\n    user: harvester-cloud-provider-default-local\n  name: harvester-cloud-provider-default-local\ncurrent-context: harvester-cloud-provider-default-local\nkind: Config\npreferences: {}\nusers:\n- name: harvester-cloud-provider-default-local\n  user:\n    token: <TOKEN>\n\n########## cloud-init user data ############\nwrite_files:\n- encoding: b64\n  content: <CONTENT>\n  owner: root:root\n  path: /etc/kubernetes/cloud-config\n  permissions: '0644'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a VM in the Harvester cluster with the following settings:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Basics")," tab: The minimum requirements are 2 CPUs and 4 GiB of RAM. The required disk space depends on the VM image."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(80453).Z,width:"1962",height:"1006"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Networks")," tab: Specify a network name with the format ",(0,r.kt)("inlineCode",{parentName:"p"},"nic-<number>"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4465).Z,width:"1948",height:"1118"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Advanced Options")," tab: Copy and paste the content of the ",(0,r.kt)("strong",{parentName:"p"},"Cloud Config User Data")," screen."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(61440).Z,width:"1868",height:"984"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Basics")," tab of the ",(0,r.kt)("strong",{parentName:"p"},"Cluster Configuration")," screen, select ",(0,r.kt)("strong",{parentName:"p"},"Harvester")," as the ",(0,r.kt)("strong",{parentName:"p"},"Cloud Provider")," and then select ",(0,r.kt)("strong",{parentName:"p"},"Create")," to spin up the cluster."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(17446).Z,width:"2496",height:"1498"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Registration")," tab, perform the steps required to run the RKE2 registration command on the VM."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(63512).Z,width:"2068",height:"1120"})))),(0,r.kt)("h3",{id:"deploying-to-the-k3s-cluster-with-harvester-node-driver-experimental"},"Deploying to the K3s cluster with Harvester node driver (experimental)"),(0,r.kt)("p",null,"When spinning up a K3s cluster using the Harvester node driver, you can perform the following steps to deploy the harvester cloud provider:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," to generate cloud config."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -sfL https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh | bash -s <serviceaccount name> <namespace>\n")),(0,r.kt)("p",{parentName:"li"},"The output will look as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"########## cloud config ############\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: <CACERT>\n    server: https://HARVESTER-ENDPOINT/k8s/clusters/local\n  name: local\ncontexts:\n- context:\n    cluster: local\n    namespace: default\n    user: harvester-cloud-provider-default-local\n  name: harvester-cloud-provider-default-local\ncurrent-context: harvester-cloud-provider-default-local\nkind: Config\npreferences: {}\nusers:\n- name: harvester-cloud-provider-default-local\n  user:\n    token: <TOKEN>\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"########## cloud-init user data ############\nwrite_files:\n- encoding: b64\n  content: <CONTENT>\n  owner: root:root\n  path: /etc/kubernetes/cloud-config\n  permissions: '0644'\n```\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init user data")," content to ",(0,r.kt)("strong",{parentName:"p"},"Machine Pools >Show Advanced > User Data"),".\n",(0,r.kt)("img",{src:a(3037).Z,width:"2010",height:"1088"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmChart")," yaml of ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-cloud-provider")," to ",(0,r.kt)("strong",{parentName:"p"},"Cluster Configuration > Add-On Config > Additional Manifest"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: harvester-cloud-provider\n  namespace: kube-system\nspec:\n  targetNamespace: kube-system\n  bootstrap: true\n  repo: https://charts.harvesterhci.io/\n  chart: harvester-cloud-provider\n  version: 0.2.2\n  helmVersion: v3\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(70182).Z,width:"2316",height:"1235"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"in-tree")," cloud provider in the following ways:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit as YAML")," button.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(96300).Z,width:"2324",height:"1230"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Disable ",(0,r.kt)("inlineCode",{parentName:"li"},"servicelb")," and set ",(0,r.kt)("inlineCode",{parentName:"li"},"disable-cloud-controller: true")," to disable the default K3s cloud controller.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    machineGlobalConfig:\n      disable:\n        - servicelb\n      disable-cloud-controller: true\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"cloud-provider=external")," to use the Harvester cloud provider.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    machineSelectorConfig:\n      - config:\n          kubelet-arg:\n          - cloud-provider=external\n          protect-kernel-defaults: false\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(81063).Z,width:"1398",height:"1153"})))),(0,r.kt)("p",null,"With these settings in place a K3s cluster should provision successfully while using the external cloud provider."),(0,r.kt)("h2",{id:"upgrade-cloud-provider"},"Upgrade Cloud Provider"),(0,r.kt)("h3",{id:"upgrade-rke2"},"Upgrade RKE2"),(0,r.kt)("p",null,"The cloud provider can be upgraded by upgrading the RKE2 version. You can upgrade the RKE2 cluster via the Rancher UI as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"Find the guest cluster that you want to upgrade and select \u22ee ",(0,r.kt)("strong",{parentName:"li"},"> Edit Config"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Kubernetes Version"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("h3",{id:"upgrade-rkek3s"},"Upgrade RKE/K3s"),(0,r.kt)("p",null,"RKE/K3s upgrade cloud provider via the Rancher UI, as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > RKE/K3s Cluster > Apps > Installed Apps"),"."),(0,r.kt)("li",{parentName:"ol"},"Find the cloud provider chart and select \u22ee ",(0,r.kt)("strong",{parentName:"li"},"> Edit/Upgrade"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Version"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Next > Update"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The upgrade process for a ",(0,r.kt)("a",{parentName:"p",href:"../advanced/singlenodeclusters"},"single-node guest cluster")," may stall when the new ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-cloud-provider")," pod is stuck in the ",(0,r.kt)("em",{parentName:"p"},"Pending")," state. This issue is caused by a section in the ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-cloud-provider")," deployment that describes the rolling update strategy. Specifically, the default value conflicts with the ",(0,r.kt)("inlineCode",{parentName:"p"},"podAntiAffinity")," configuration in single-node clusters."),(0,r.kt)("p",{parentName:"admonition"},"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/5348#issuecomment-2055453709"},"this GitHub issue comment"),". To address the issue, manually delete the old ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-cloud-provider")," pod. You might need to do this multiple times until the new pod can be successfully scheduled.")),(0,r.kt)("h2",{id:"load-balancer-support"},"Load Balancer Support"),(0,r.kt)("p",null,"Once you've deployed the Harvester cloud provider, you can leverage the Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service to expose a microservice within the guest cluster to the external world. Creating a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service assigns a dedicated Harvester load balancer to the service, and you can make adjustments through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add-on Config")," within the Rancher UI."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(49609).Z,width:"3068",height:"988"})),(0,r.kt)("h3",{id:"ipam"},"IPAM"),(0,r.kt)("p",null,"Harvester's built-in load balancer offers both ",(0,r.kt)("strong",{parentName:"p"},"DHCP")," and ",(0,r.kt)("strong",{parentName:"p"},"Pool")," modes, and you can configure it by adding the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/ipam: $mode")," to its corresponding service. Starting from Harvester cloud provider >= v0.2.0, it also introduces a unique ",(0,r.kt)("strong",{parentName:"p"},"Share IP")," mode. A service shares its load balancer IP with other services in this mode."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DCHP:")," A DHCP server is required. The Harvester load balancer will request an IP address from the DHCP server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pool:")," An ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/ippool"},"IP pool")," must be configured first. The Harvester load balancer controller will allocate an IP for the load balancer service following ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/networking/ippool#selection-policy"},"the IP pool selection policy"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Share IP:")," When creating a new load balancer service, you can re-utilize an existing load balancer service IP. The new service is referred to as a secondary service, while the currently chosen service is the primary one. To specify the primary service in the secondary service, you can add the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/primary-service: $primary-service-name"),".  However, there are two known limitations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Services that share the same IP address can't use the same port."),(0,r.kt)("li",{parentName:"ul"},"Secondary services cannot share their IP with additional services.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"IPAM")," mode isn't allowed. You must create a new service if you intend to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"IPAM")," mode.")),(0,r.kt)("h2",{id:"health-checks"},"Health checks"),(0,r.kt)("p",null,"Beginning with Harvester cloud provider v0.2.0, additional health checks of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service within the guest Kubernetes cluster are no longer necessary. Instead, you can configure ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-tcp-liveness-probe"},"liveness")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes"},"readiness")," probes for your workloads. Consequently, any unavailable pods will be automatically removed from the load balancer endpoints to achieve the same desired outcome."))}c.isMDXComponent=!0},3037:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cloud-config-userdata-8578bb17090db81956d319d54b6ee7d3.png"},17446:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-custom-rke2-e44a04b870f56c65b818571cf71ae0da.png"},25147:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/custom-8454eeefeca134d7084eb3c36f0bc250.png"},96300:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/edit-k3s-cluster-yaml-57987c1e6b13eeca3c09b8efd1c6838e.png"},70182:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/external-cloud-provider-addon-fe7c7599805e615aec470224221f9ac7.png"},92903:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/install-harvester-cloud-provider-b0d92a6086c0f150b419e02fb4663a75.png"},81063:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/k3s-cluster-yaml-content-for-harvester-cloud-provider-5c6769285a078298e5873e18aa3747f1.png"},49609:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lb-svc-30c5203b63d74ff88f155f8edf334fab.png"},50900:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},20404:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"},63512:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/custom-cluster-registration-b3e86bc6367f30902dbef8fbbfc70474.png"},80453:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/custom-cluster-vm-cpu-and-ram-41fa1bbd72aa217575be53e2a6cfc0d9.png"},4465:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/custom-cluster-vm-network-417ea9dd50b21776feeac2f9a585d338.png"},61440:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/custom-cluster-vm-user-data-1cd858874bfb9513069faae7abe70f42.png"}}]);