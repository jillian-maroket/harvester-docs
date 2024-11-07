"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[32582],{24961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});n(67294);var a=n(3905);const o={id:"longhorn-v2",sidebar_position:11,sidebar_label:"Longhorn V2 Data Engine",title:"Longhorn V2 Data Engine",Description:"How to enable and use the Longhorn V2 Data Engine"},i=void 0,r={unversionedId:"advanced/longhorn-v2",id:"advanced/longhorn-v2",title:"Longhorn V2 Data Engine",description:"The Longhorn V2 Data Engine harnesses the power of the Storage Performance Development Kit (SPDK) to significantly reduce I/O latency while boosting IOPS and throughput. The result is a high-performance storage solution that is capable of meeting diverse workload demands.",source:"@site/docs/advanced/longhorn-v2.md",sourceDirName:"advanced",slug:"/advanced/longhorn-v2",permalink:"/v1.4/advanced/longhorn-v2",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/longhorn-v2.md",tags:[],version:"current",lastUpdatedAt:1730967112,formattedLastUpdatedAt:"Nov 7, 2024",sidebarPosition:11,frontMatter:{id:"longhorn-v2",sidebar_position:11,sidebar_label:"Longhorn V2 Data Engine",title:"Longhorn V2 Data Engine",Description:"How to enable and use the Longhorn V2 Data Engine"},sidebar:"api",previous:{title:"CloudInit CRD",permalink:"/v1.4/advanced/cloudinitcrd"},next:{title:"Rancher Integration",permalink:"/v1.4/rancher/rancher-integration"}},s={},l=[{value:"Prerequisities",id:"prerequisities",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Using the Longhorn V2 Data Engine",id:"using-the-longhorn-v2-data-engine",level:2}],d={toc:l},h="wrapper";function p({components:e,...t}){return(0,a.kt)(h,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.4/advanced/longhorn-v2"})),(0,a.kt)("p",null,"The Longhorn V2 Data Engine harnesses the power of the Storage Performance Development Kit (SPDK) to significantly reduce I/O latency while boosting IOPS and throughput. The result is a high-performance storage solution that is capable of meeting diverse workload demands."),(0,a.kt)("admonition",{title:"important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Longhorn V2 Data Engine is an ",(0,a.kt)("strong",{parentName:"p"},"Experimental")," feature in Harvester v1.4.0 and should not be utilized in a production environment.")),(0,a.kt)("h2",{id:"prerequisities"},"Prerequisities"),(0,a.kt)("p",null,"Every node with an active Longhorn V2 Data Engine requires the following dedicated resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 CPU core for use by the Longhorn instance-manager pod"),(0,a.kt)("li",{parentName:"ul"},"2 GiB RAM (allocated as 1024 \xd7 2 GiB huge pages)"),(0,a.kt)("li",{parentName:"ul"},"At least one local NVMe disk for data storage")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("admonition",{title:"important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Longhorn V2 Data Engine currently does not support the following operations:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Backing image creation and usage"),(0,a.kt)("li",{parentName:"ul"},"Live migration"),(0,a.kt)("li",{parentName:"ul"},"Volume cloning"),(0,a.kt)("li",{parentName:"ul"},"Volume encryption"),(0,a.kt)("li",{parentName:"ul"},"Volume expansion"))),(0,a.kt)("p",null,"Within the Harvester context, volumes backed by the Longhorn V2 Data Engine must be added to virtual machines as extra disks. The boot disk of each virtual machine must still be added from an image that is backed by the Longhorn V1 Data Engine."),(0,a.kt)("p",null,"Harvester is unable to live-migrate virtual machines with V2 volumes attached, which means those virtual machines will be shut down during Harvester cluster upgrades. Moreover, snapshots of V2 volumes cannot be created because snapshot and restoration functionality in Harvester relies on volume cloning."),(0,a.kt)("h2",{id:"using-the-longhorn-v2-data-engine"},"Using the Longhorn V2 Data Engine"),(0,a.kt)("p",null,"The Longhorn V2 Data Engine is only available for newly created volumes. Existing volumes, virtual machine images and virtual machine root volumes will continue to use the V1 Data Engine."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the Harvester UI, go to ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,a.kt)("strong",{parentName:"p"},"Settings"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"longhorn-v2-data-engine-enabled")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",{parentName:"li"},"Harvester automatically loads the kernel modules required by the Longhorn V2 Data Engine, and attempts to allocate 1024 \xd7 2 MiB-sized huge pages (for example, 2 GiB of RAM) on all nodes. "),(0,a.kt)("p",{parentName:"li"},"Changing this setting automatically restarts RKE2 on all nodes but does not affect running virtual machine workloads."),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'If you encounter error messages that include the phrase "not enough hugepages-2Mi capacity", allow some time for the error to be resolved. If the error persists, reboot the affected nodes.'),(0,a.kt)("p",{parentName:"admonition"},"To disable the Longhorn V2 Data Engine on specific nodes (for example, nodes with less processing and memory resources), go to the ",(0,a.kt)("strong",{parentName:"p"},"Hosts")," screen and add the following label to the target nodes:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"label: ",(0,a.kt)("inlineCode",{parentName:"li"},"node.longhorn.io/disable-v2-data-engine")),(0,a.kt)("li",{parentName:"ul"},"value: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Hosts")," screen, and then add extra disks to each node as described in ",(0,a.kt)("a",{parentName:"p",href:"/v1.4/host/#multi-disk-management"},"Multi-disk Management"),". "),(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Provisioner")," of each extra disk to ",(0,a.kt)("inlineCode",{parentName:"p"},"Longhorn V2 (CSI)"),"."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester sets the ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.7.2/v2-data-engine/features/node-disk-support/"},"Longhorn disk driver")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," so that NVMe disks use the SPDK NVMe bdev driver, which provides the best performance."),(0,a.kt)("p",{parentName:"admonition"},"SSDs and other non-NVMe disks are managed using the SPDK AIO bdev driver, which requires a disk size that is an ",(0,a.kt)("em",{parentName:"p"},"even multiple of 4096 bytes"),". Non-NVMe disks that do not meet this size requirement cannot be added."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,a.kt)("strong",{parentName:"p"},"Storage Classes"),", and then add a new StorageClass as described in ",(0,a.kt)("a",{parentName:"p",href:"/v1.4/advanced/storageclass#creating-a-storageclass"},"Creating a StorageClass"),". "),(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Provisioner")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Longhorn V2 (CSI)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the new StorageClass when creating new volumes (either on the ",(0,a.kt)("strong",{parentName:"p"},"Volumes")," screen or during virtual machine creation)."),(0,a.kt)("p",{parentName:"li"},"Volumes created using the new StorageClass are backed by the Longhorn V2 Data Engine."))))}p.isMDXComponent=!0}}]);