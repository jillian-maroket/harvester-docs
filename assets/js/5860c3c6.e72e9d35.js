"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7091],{42159:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});t(67294);var r=t(3905);const n={sidebar_position:3,sidebar_label:"Upgrade from v1.0.3/v1.1.0 to v1.1.1",title:"Upgrade from v1.0.3/v1.1.0 to v1.1.1"},i=void 0,s={unversionedId:"upgrade/v1-0-3-to-v1-1-1",id:"version-v1.1/upgrade/v1-0-3-to-v1-1-1",title:"Upgrade from v1.0.3/v1.1.0 to v1.1.1",description:"General information",source:"@site/versioned_docs/version-v1.1/upgrade/v1-0-3-to-v1-1-1.md",sourceDirName:"upgrade",slug:"/upgrade/v1-0-3-to-v1-1-1",permalink:"/v1.1/upgrade/v1-0-3-to-v1-1-1",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/upgrade/v1-0-3-to-v1-1-1.md",tags:[],version:"v1.1",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Upgrade from v1.0.3/v1.1.0 to v1.1.1",title:"Upgrade from v1.0.3/v1.1.0 to v1.1.1"},sidebar:"api",previous:{title:"Upgrade from v1.1.0/v1.1.1 to v1.1.2",permalink:"/v1.1/upgrade/v1-1-to-v1-1-2"},next:{title:"Upgrade from v1.0.3 to v1.1.0",permalink:"/v1.1/upgrade/previous-releases/v1-0-3-to-v1-1-0"}},d={},l=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. An upgrade is stuck when pre-draining a node",id:"1-an-upgrade-is-stuck-when-pre-draining-a-node",level:3},{value:"2. An upgrade is stuck when pre-draining a node (case 2)",id:"2-an-upgrade-is-stuck-when-pre-draining-a-node-case-2",level:3},{value:"3. An upgrade is stuck in upgrading the first node: Job was active longer than the specified deadline",id:"3-an-upgrade-is-stuck-in-upgrading-the-first-node-job-was-active-longer-than-the-specified-deadline",level:3},{value:"4. An upgrade is stuck after a node is pre-drained",id:"4-an-upgrade-is-stuck-after-a-node-is-pre-drained",level:3},{value:"5. Additional certificates disappear after an upgrade",id:"5-additional-certificates-disappear-after-an-upgrade",level:3}],o={toc:l},p="wrapper";function u({components:e,...a}){return(0,r.kt)(p,{...o,...a,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/upgrade/v1-0-3-to-v1-1-1"})),(0,r.kt)("h2",{id:"general-information"},"General information"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Starting from version v1.1.0, Harvester brings in the new ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2236"},"VLAN enhancement")," feature. Due to the implementation changes, all user VMs must shut down if the upgrade is from v1.0.3 to v1.1.1. Please stop the VMs before an upgrade. Upgrading from v1.1.0 to v1.1.1 doesn't have this restriction (using live migration)."))),(0,r.kt)("p",null,"Once there is an upgradable version, the Harvester GUI Dashboard page will show an upgrade button. For more details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/upgrade/index#start-an-upgrade"},"start an upgrade"),"."),(0,r.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/upgrade/index#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-an-upgrade-is-stuck-when-pre-draining-a-node"},"1. An upgrade is stuck when pre-draining a node"),(0,r.kt)("p",null,'Starting from v1.1.0, Harvester will wait for all volumes to become healthy (when node count >= 3) before upgrading a node. Generally, users can check volumes\' health if an upgrade is stuck in the "pre-draining" state.'),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},'"Access Embedded Longhorn"')," to see how to access the embedded Longhorn GUI."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2-an-upgrade-is-stuck-when-pre-draining-a-node-case-2"},"2. An upgrade is stuck when pre-draining a node (case 2)"),(0,r.kt)("p",null,"An upgrade is stuck, as shown in the screenshot below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(21685).Z,width:"1128",height:"470"})),(0,r.kt)("p",null,"And the user can also observe multiple nodes have scheduling disabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get nodes\nNAME    STATUS                     ROLES                       AGE   VERSION\nnode1   Ready                      control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode2   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode3   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216"},"[BUG] Multiple nodes pre-drains in an upgrade")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"},"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"3-an-upgrade-is-stuck-in-upgrading-the-first-node-job-was-active-longer-than-the-specified-deadline"},"3. An upgrade is stuck in upgrading the first node: Job was active longer than the specified deadline"),(0,r.kt)("p",null,"An upgrade fails, as shown in the screenshot below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(78227).Z,width:"1140",height:"918"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894"},"[BUG] Upgrade stuck in upgrading first node: Job was active longer than specified deadline")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"},"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"4-an-upgrade-is-stuck-after-a-node-is-pre-drained"},"4. An upgrade is stuck after a node is pre-drained"),(0,r.kt)("p",null,"An upgrade is stuck, as shown in the screenshot below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(39185).Z,width:"1136",height:"504"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021"},"[BUG] Upgrade stop at upgrading node3 stage, stuck in Pre-drained status")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"},"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"5-additional-certificates-disappear-after-an-upgrade"},"5. Additional certificates disappear after an upgrade"),(0,r.kt)("p",null,"After upgrading from v1.0.3, the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/pki/trust/anchors/additional-ca.pem")," configured via the ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/advanced/index#additional-ca"},(0,r.kt)("inlineCode",{parentName:"a"},"additional-ca")," setting")," disappears."),(0,r.kt)("p",null,"To fix this, the user needs to access the Settings page (Harvester GUI, ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced -> Settings"),"): "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"additional-ca")," setting. Back up the current value first, clear the current value, and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Save"),"."),(0,r.kt)("li",{parentName:"ul"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"additional-ca")," setting again. Input the certificates again and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,r.kt)("hr",null))}u.isMDXComponent=!0},78227:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/2894-deadline-8fbfd53960ef87f904f6a893a4a0bfcd.png"},39185:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/3021-stuck-fe36d9af55b75fc0818de41c48ec670b.png"},21685:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/3216-stuck-pre-drain-33d5537a9151085216d2cd275c92cf1f.png"}}]);