"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[58593],{15980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>d});a(67294);var r=a(3905);const n={sidebar_position:1,sidebar_label:"Upgrade from v1.0.3 to v1.1.0",title:"Upgrade from v1.0.3 to v1.1.0"},s=void 0,i={unversionedId:"upgrade/previous-releases/v1-0-3-to-v1-1-0",id:"version-v1.1/upgrade/previous-releases/v1-0-3-to-v1-1-0",title:"Upgrade from v1.0.3 to v1.1.0",description:"Please do not upgrade a running cluster to v1.1.0 if the cluster has the following configuration:",source:"@site/versioned_docs/version-v1.1/upgrade/previous-releases/v1-0-3-to-v1-1-0.md",sourceDirName:"upgrade/previous-releases",slug:"/upgrade/previous-releases/v1-0-3-to-v1-1-0",permalink:"/v1.1/upgrade/previous-releases/v1-0-3-to-v1-1-0",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/upgrade/previous-releases/v1-0-3-to-v1-1-0.md",tags:[],version:"v1.1",lastUpdatedAt:1731302481,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Upgrade from v1.0.3 to v1.1.0",title:"Upgrade from v1.0.3 to v1.1.0"},sidebar:"api",previous:{title:"Upgrade from v1.0.3/v1.1.0 to v1.1.1",permalink:"/v1.1/upgrade/v1-0-3-to-v1-1-1"},next:{title:"Upgrade from v1.0.2 to v1.0.3",permalink:"/v1.1/upgrade/previous-releases/v1-0-2-to-v1-0-3"}},o={},d=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. An upgrade is stuck when pre-draining a node",id:"1-an-upgrade-is-stuck-when-pre-draining-a-node",level:3},{value:"2. An upgrade is stuck after a node is pre-drained",id:"2-an-upgrade-is-stuck-after-a-node-is-pre-drained",level:3},{value:"3. The monitor dashboard displays nothing after an upgrade",id:"3-the-monitor-dashboard-displays-nothing-after-an-upgrade",level:3}],p={toc:d},u="wrapper";function l({components:e,...t}){return(0,r.kt)(u,{...p,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/upgrade/previous-releases/v1-0-3-to-v1-1-0"})),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Please do not upgrade a running cluster to v1.1.0 if the cluster has the following configuration:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The harvester-mgmt network contains two or more network interfaces.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"  networks:\n    harvester-mgmt:\n      interfaces:\n      - name: ens5\n      - name: ens6\n      method: dhcp\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Defining a cluster_network in the configuration file with harvester-mgmt network:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'cluster_networks:\n  vlan:\n    enable: true\n    description: "harvester-mgmt"\n    config:\n      defaultPhysicalNIC: harvester-mgmt\n')),(0,r.kt)("p",{parentName:"admonition"},"Related issue: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3045"},"[BUG] Harvester Upgrade 1.0.3 to 1.1.0 does not handle multiple SLAVE in BOND for management interface"))),(0,r.kt)("h2",{id:"general-information"},"General information"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Starting from version v1.1.0, Harvester brings in the new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/2236"},"VLAN enhancement")," feature. Due to the implementation changes, all user VMs must shut down during an upgrade. Please stop the VMs before an upgrade.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We introduce ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/advanced/storagenetwork"},"Storage Network")," feature in v1.1.0. Due to a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3168"},"known issue"),", please ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/advanced/storagenetwork#prerequisites"},"create required CRDs")," before using the feature.")))),(0,r.kt)("p",null,"Once there is an upgradable version, the Harvester GUI Dashboard page will show an upgrade button. For more details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/upgrade/index#start-an-upgrade"},"start an upgrade"),"."),(0,r.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/upgrade/index#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-an-upgrade-is-stuck-when-pre-draining-a-node"},"1. An upgrade is stuck when pre-draining a node"),(0,r.kt)("p",null,'Starting from v1.1.0, Harvester will wait for all volumes to become healthy (when node counts >= 3) before upgrading a node. Generally, users can check volumes\' health if an upgrade is stuck in the "pre-draining" state.'),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},'"Access Embedded Longhorn"')," to see how to access the embedded Longhorn GUI."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2-an-upgrade-is-stuck-after-a-node-is-pre-drained"},"2. An upgrade is stuck after a node is pre-drained"),(0,r.kt)("p",null,"An upgrade is stuck, as shown in the screenshot below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(39185).Z,width:"1136",height:"504"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021"},"[BUG] Upgrade stop at upgrading node3 stage, stuck in Pre-drained status")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"},"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"3-the-monitor-dashboard-displays-nothing-after-an-upgrade"},"3. The monitor dashboard displays nothing after an upgrade"),(0,r.kt)("p",null,"After an upgrade, the user might see the embedded Grafana dashboard doesn't work:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(44389).Z,width:"3284",height:"588"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2984"},"[BUG] Cant's display monitoring dashboard after upgrade, alertmanager, prometheus and grafana monitoring pods Terminating")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2984#issuecomment-1286517922"},"https://github.com/harvester/harvester/issues/2984#issuecomment-1286517922"))))))}l.isMDXComponent=!0},44389:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2984-grafana-b85f039074c1b3f8ec47b93f1194573a.png"},39185:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3021-stuck-fe36d9af55b75fc0818de41c48ec670b.png"}}]);