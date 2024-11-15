"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[76343],{26210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});a(67294);var r=a(3905);const n={sidebar_position:2,sidebar_label:"Upgrade from v1.2.1 to v1.2.2",title:"Upgrade from v1.2.1 to v1.2.2"},o=void 0,s={unversionedId:"upgrade/v1-2-1-to-v1-2-2",id:"version-v1.2/upgrade/v1-2-1-to-v1-2-2",title:"Upgrade from v1.2.1 to v1.2.2",description:"General information",source:"@site/versioned_docs/version-v1.2/upgrade/v1-2-1-to-v1-2-2.md",sourceDirName:"upgrade",slug:"/upgrade/v1-2-1-to-v1-2-2",permalink:"/v1.2/upgrade/v1-2-1-to-v1-2-2",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/upgrade/v1-2-1-to-v1-2-2.md",tags:[],version:"v1.2",lastUpdatedAt:1731302481,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upgrade from v1.2.1 to v1.2.2",title:"Upgrade from v1.2.1 to v1.2.2"},sidebar:"api",previous:{title:"Upgrading Harvester",permalink:"/v1.2/upgrade/index"},next:{title:"Upgrade from v1.1.2/v1.1.3/v1.2.0 to v1.2.1",permalink:"/v1.2/upgrade/v1-2-0-to-v1-2-1"}},i={},p=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. Upgrade stuck in the <code>Upgrading System Service</code> state",id:"1-upgrade-stuck-in-the-upgrading-system-service-state",level:3},{value:"2. The <code>harvester-seeder</code> add-on is not upgraded",id:"2-the-harvester-seeder-add-on-is-not-upgraded",level:3}],l={toc:p},d="wrapper";function u({components:e,...t}){return(0,r.kt)(d,{...l,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/upgrade/v1-2-1-to-v1-2-2"})),(0,r.kt)("h2",{id:"general-information"},"General information"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"Upgrade")," button appears on the ",(0,r.kt)("strong",{parentName:"p"},"Dashboard")," screen whenever a new Harvester version that you can upgrade to becomes available. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#start-an-upgrade"},"Start an upgrade"),"."),(0,r.kt)("p",null,"For air-gapped environments, see ",(0,r.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade"),"."),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-upgrade-stuck-in-the-upgrading-system-service-state"},"1. Upgrade stuck in the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Upgrading System Service")," state"),(0,r.kt)("p",null,"Expired certificates of certain system services may cause an upgrade to become stuck in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Upgrading System Service")," state for an extended period. To resolve this issue, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Identify the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"apply-manifest")," job."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get jobs -n harvester-system -l harvesterhci.io/upgradeComponent=manifest\n")),(0,r.kt)("p",{parentName:"li"},"Example output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                                 COMPLETIONS   DURATION   AGE\nhvst-upgrade-9gmg2-apply-manifests   0/1           46s        46s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the logs of the ",(0,r.kt)("inlineCode",{parentName:"p"},"apply-manifest")," job."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl logs jobs/hvst-upgrade-9gmg2-apply-manifests -n harvester-system\n")),(0,r.kt)("p",{parentName:"li"},"If the following messages appear in the log, continue to the next step:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Waiting for CAPI cluster fleet-local/local to be provisioned (current phase: Provisioning, current generation: 30259)...\nWaiting for CAPI cluster fleet-local/local to be provisioned (current phase: Provisioning, current generation: 30259)...\nWaiting for CAPI cluster fleet-local/local to be provisioned (current phase: Provisioning, current generation: 30259)...\nWaiting for CAPI cluster fleet-local/local to be provisioned (current phase: Provisioning, current generation: 30259)...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the state of the Cluster API (CAPI) cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get clusters.provisioning.cattle.io local -n fleet-local -o yaml\n")),(0,r.kt)("p",{parentName:"li"},"If the output is similar to the following example, the issue likely exists in the cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    - lastUpdateTime: \"2023-01-17T16:26:48Z\"\n      message: 'configuring bootstrap node(s) custom-24cb32ce8387: waiting for probes:\n        kube-controller-manager, kube-scheduler'\n      reason: Waiting\n      status: Unknown\n      type: Updated\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Identify the hostname of the affected node, and implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3863#issuecomment-1539681311"},"workaround")," to see if service certificates expire."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get machines.cluster.x-k8s.io -n fleet-local <machine_name> -o yaml | yq .status.nodeRef.name\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<machine_name>")," with the name of the affected node (as stated in the output of the previous step)."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If multiple nodes joined the cluster around the same time, you must implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3863#issuecomment-1539681311"},"workaround")," on all those nodes.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3863"},"[DOC/ENHANCEMENT] need to add cert-rotate feature, otherwise upgrade may stuck on Waiting for CAPI cluster fleet-local/local to be provisioned")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3863#issuecomment-1539681311"},"https://github.com/harvester/harvester/issues/3863#issuecomment-1539681311"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2-the-harvester-seeder-add-on-is-not-upgraded"},"2. The ",(0,r.kt)("inlineCode",{parentName:"h3"},"harvester-seeder")," add-on is not upgraded"),(0,r.kt)("p",null,"When upgrading Harvester clusters from v1.2.1 to v1.2.2, the ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," add-on is not fully upgraded due to the chart version mismatch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error: chart \"harvester-seeder\" matching 0.1.0 not found in harvester-seeder index. (try 'helm repo update'): no chart version found for harvester-seeder-0.1.0\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," chart version bundled with Harvester v1.2.2 is 0.1.1. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," add-on remains to use the 0.1.0 chart. The same situation will happen if you enable the add-on after upgrading to Harvester v1.2.2, you will notice the chart could not be installed successfully with the similar messages as above."),(0,r.kt)("p",null,"The workaround is to manually update the ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," Addon manifest (if it's already enabled, please disable it before patching):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl -n harvester-system patch addons.harvesterhci harvester-seeder --type=json -p \'[{"op": "replace", "path": "/spec/version", "value": "0.1.1"}]\'\n')),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);