"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[18377],{69833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});a(67294);var r=a(3905);const o={sidebar_position:4,sidebar_label:"Upgrade from v1.2.2/v1.3.0 to v1.3.1",title:"Upgrade from v1.2.2/v1.3.0 to v1.3.1"},n=void 0,i={unversionedId:"upgrade/v1-2-2-to-v1-3-1",id:"upgrade/v1-2-2-to-v1-3-1",title:"Upgrade from v1.2.2/v1.3.0 to v1.3.1",description:"General information",source:"@site/docs/upgrade/v1-2-2-to-v1-3-1.md",sourceDirName:"upgrade",slug:"/upgrade/v1-2-2-to-v1-3-1",permalink:"/v1.4/upgrade/v1-2-2-to-v1-3-1",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/v1-2-2-to-v1-3-1.md",tags:[],version:"current",lastUpdatedAt:1732699015,formattedLastUpdatedAt:"Nov 27, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Upgrade from v1.2.2/v1.3.0 to v1.3.1",title:"Upgrade from v1.2.2/v1.3.0 to v1.3.1"},sidebar:"api",previous:{title:"Upgrade from v1.3.1 to v1.3.2",permalink:"/v1.4/upgrade/v1-3-1-to-v1-3-2"},next:{title:"Upgrade from v1.2.1 to v1.2.2",permalink:"/v1.4/upgrade/v1-2-1-to-v1-2-2"}},s={},l=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. Cluster upgrade stuck after the first node is upgraded",id:"1-cluster-upgrade-stuck-after-the-first-node-is-upgraded",level:3},{value:"2. Automatic image cleanup is not functioning",id:"2-automatic-image-cleanup-is-not-functioning",level:3}],p={toc:l},d="wrapper";function u({components:e,...t}){return(0,r.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.4/upgrade/v1-2-2-to-v1-3-1"})),(0,r.kt)("h2",{id:"general-information"},"General information"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"Upgrade")," button appears on the ",(0,r.kt)("strong",{parentName:"p"},"Dashboard")," screen whenever a new Harvester version that you can upgrade to becomes available. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/v1.4/upgrade/index#start-an-upgrade"},"Start an upgrade"),"."),(0,r.kt)("p",null,"For air-gapped environments, see ",(0,r.kt)("a",{parentName:"p",href:"/v1.4/upgrade/index#prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade"),"."),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-cluster-upgrade-stuck-after-the-first-node-is-upgraded"},"1. Cluster upgrade stuck after the first node is upgraded"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To prevent this issue from occurring, label the ",(0,r.kt)("inlineCode",{parentName:"p"},"local-kubeconfig")," secret before starting the upgrade process.\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl label secret local-kubeconfig -n fleet-local cluster.x-k8s.io/cluster-name=local"))),(0,r.kt)("p",null,"When upgrading a Harvester cluster from v1.2.2 or v1.3.0 to v1.3.1, the upgrade process becomes stuck after the first node is upgraded."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3330).Z,width:"565",height:"800"})),(0,r.kt)("p",null,"To resolve this issue, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Identify the cluster status:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get clusters.provisioning.cattle.io local -n fleet-local -o yaml\n")),(0,r.kt)("p",{parentName:"li"},"Example output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"...\n  - lastUpdateTime: \"2024-06-18T23:37:39Z\"\n    message: 'configuring bootstrap node(s) custom-9cb22ccf7984: waiting for kubelet\n      to update'\n    reason: Waiting\n    status: Unknown\n    type: Updated\n  - lastUpdateTime: \"2024-06-18T23:37:39Z\"\n    message: 'configuring bootstrap node(s) custom-9cb22ccf7984: waiting for kubelet\n      to update'\n    reason: Waiting\n    status: Unknown\n    type: Provisioned\n")),(0,r.kt)("p",{parentName:"li"},"If the output includes the message ",(0,r.kt)("inlineCode",{parentName:"p"},"waiting for kubelet"),", continue to the next step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"capi-controller-manager")," pod's logs:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-provisioning-capi-system deployment/capi-controller-manager\n")),(0,r.kt)("p",{parentName:"li"},"If the output is similar to the following example, the issue likely exists in the cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"2024-06-19T08:54:22.407423986Z W0619 08:54:22.407257       1 reflector.go:424] k8s.io/client-go@v0.26.1/tools/cache/reflector.go:169: failed to list *v1.Node: Unauthorized\n2024-06-19T08:54:22.407470069Z E0619 08:54:22.407283       1 reflector.go:140] k8s.io/client-go@v0.26.1/tools/cache/reflector.go:169: Failed to watch *v1.Node: failed to list *v1.Node: Unauthorized\n2024-06-19T08:55:05.153396619Z W0619 08:55:05.153190       1 reflector.go:424] k8s.io/client-go@v0.26.1/tools/cache/reflector.go:169: failed to list *v1.Node: Unauthorized\n2024-06-19T08:55:05.153438978Z E0619 08:55:05.153217       1 reflector.go:140] k8s.io/client-go@v0.26.1/tools/cache/reflector.go:169: Failed to watch *v1.Node: failed to list *v1.Node: Unauthorized\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply the following workaround to resume the upgrade:"),(0,r.kt)("p",{parentName:"li"},"Kill and restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"capi-controller-manager")," pod."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl rollout restart deployment/capi-controller-manager -n cattle-provisioning-capi-system\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/6041"},"[BUG] Upgrade v1.2.2->v1.3.1 stuck at Waiting for kubelet to update, even the node has been updated"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2-automatic-image-cleanup-is-not-functioning"},"2. Automatic image cleanup is not functioning"),(0,r.kt)("p",null,"Because the published Harvester ISO contains an incomplete image list, automatic image cleanup cannot be performed during an upgrade from v1.2.2 to v1.3.1. This issue does not block the upgrade, and you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/blob/main/bin/harv-purge-images.sh"},"this script")," to manually clean up container images after the upgrade is completed. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/6620"},"issue #6620"),"."),(0,r.kt)("hr",null))}u.isMDXComponent=!0},3330:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/6041-stuck-on-first-node-cf6574bdd3b56ed67814dd089aaaa393.png"}}]);