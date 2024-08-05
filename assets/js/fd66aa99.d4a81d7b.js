"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[80595],{25791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});r(67294);var n=r(3905);const a={id:"airgap",sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"Air Gapped Environment",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},i=void 0,s={unversionedId:"airgap",id:"version-v1.3/airgap",title:"Air Gapped Environment",description:"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy.",source:"@site/versioned_docs/version-v1.3/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/v1.3/airgap",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/airgap.md",tags:[],version:"v1.3",lastUpdatedAt:1722560913,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:3,frontMatter:{id:"airgap",sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"Air Gapped Environment",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},sidebar:"api",previous:{title:"Net Install ISO",permalink:"/v1.3/install/net-install"},next:{title:"Upgrading Harvester",permalink:"/v1.3/upgrade/index"}},o={},l=[{value:"Working Behind an HTTP Proxy",id:"working-behind-an-http-proxy",level:2},{value:"Configure an HTTP Proxy During Installation",id:"configure-an-http-proxy-during-installation",level:3},{value:"Configure an HTTP Proxy in Harvester Settings",id:"configure-an-http-proxy-in-harvester-settings",level:3},{value:"Guest Cluster Images",id:"guest-cluster-images",level:2}],p={toc:l},d="wrapper";function u({components:e,...t}){return(0,n.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/airgap"})),(0,n.kt)("p",null,"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy."),(0,n.kt)("p",null,"The Harvester ISO image contains all the packages to make it work in an air gapped environment."),(0,n.kt)("h2",{id:"working-behind-an-http-proxy"},"Working Behind an HTTP Proxy"),(0,n.kt)("p",null,"In some environments, the connection to external services, from the servers or VMs, requires an HTTP(S) proxy."),(0,n.kt)("h3",{id:"configure-an-http-proxy-during-installation"},"Configure an HTTP Proxy During Installation"),(0,n.kt)("p",null,"You can configure the HTTP(S) proxy during the ",(0,n.kt)("a",{parentName:"p",href:"/v1.3/install/index"},"ISO installation")," as shown in picture below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iso-proxy",src:r(87376).Z,width:"1596",height:"1198"})),(0,n.kt)("h3",{id:"configure-an-http-proxy-in-harvester-settings"},"Configure an HTTP Proxy in Harvester Settings"),(0,n.kt)("p",null,"You can configure the HTTP(S) proxy in the settings page of the Harvester dashboard:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the settings page of the Harvester UI."),(0,n.kt)("li",{parentName:"ol"},"Find the ",(0,n.kt)("inlineCode",{parentName:"li"},"http-proxy")," setting, click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit setting")),(0,n.kt)("li",{parentName:"ol"},"Enter the value(s) for ",(0,n.kt)("inlineCode",{parentName:"li"},"http-proxy"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"https-proxy")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"no-proxy"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"proxy-setting",src:r(20625).Z,width:"2860",height:"1164"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Harvester appends necessary addresses to user configured ",(0,n.kt)("inlineCode",{parentName:"p"},"no-proxy")," to ensure the internal traffic works.\ni.e., ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,harvester-system,.svc,.cluster.local"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-system")," was added into the list since v1.1.2."),(0,n.kt)("p",{parentName:"admonition"},"When the nodes in the cluster do not use a proxy to communicate with each other, the CIDR needs to be added to ",(0,n.kt)("inlineCode",{parentName:"p"},"http-proxy.noProxy")," after the first node is installed successfully. Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.3/troubleshooting/harvester#fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting"},"fail to deploy a multi-node cluster"),".")),(0,n.kt)("h2",{id:"guest-cluster-images"},"Guest Cluster Images"),(0,n.kt)("p",null,"All necessary images to install and run Harvester are conveniently packaged into the ISO, eliminating the need to pre-load images on bare-metal nodes. A Harvester cluster manages them independently and effectively behind the scenes. "),(0,n.kt)("p",null,"However, it's essential to understand a guest K8s cluster (e.g., RKE2 cluster) created by the ",(0,n.kt)("a",{parentName:"p",href:"/v1.3/rancher/node/node-driver"},"Harvester node driver")," is a distinct entity from a Harvester cluster. A guest cluster operates within VMs and requires pulling images either from the internet or a ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry#configure-a-private-registry-with-credentials-when-creating-a-cluster"},"private registry"),". "),(0,n.kt)("p",null,"If the ",(0,n.kt)("strong",{parentName:"p"},"Cloud Provider")," option is configured to ",(0,n.kt)("strong",{parentName:"p"},"Harvester")," in a guest K8s cluster, it deploys the Harvester cloud provider and Container Storage Interface (CSI) driver."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cluster-registry",src:r(83565).Z,width:"4362",height:"1348"})),(0,n.kt)("p",null,"As a result, we recommend monitoring each ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases"},"RKE2 release")," in your air gapped environment and pulling the required images into your private registry. Please refer to the ",(0,n.kt)("strong",{parentName:"p"},"Harvester CCM & CSI Driver")," with RKE2 Releases section on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/harvester-v1-1-2/"},"Harvester support matrix page")," for the best Harvester cloud provider and CSI driver capability support."))}u.isMDXComponent=!0},83565:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-registry-d1f54048d64a61046810eda5c6b05c25.png"},87376:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/iso-proxy-4772156ef9e6a8688de2321ed356b078.png"},20625:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxy-setting-6433c2c6f3efd4cfb84757420ceeaf8a.png"}}]);