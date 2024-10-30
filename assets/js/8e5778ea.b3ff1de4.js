"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[31215],{53736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});a(67294);var n=a(3905);const i={sidebar_position:10,sidebar_label:"CPU Pinning",title:"CPU Pinning",keywords:["Harvester","harvester","Virtual Machine","virtual machine","CPU","cpu","CPU Pinning","CPU pinning","cpu pinning","CPU manager","cpu manager","static policy"],description:"Create VM with CPU pinning"},r=void 0,s={unversionedId:"vm/cpu-pinning",id:"vm/cpu-pinning",title:"CPU Pinning",description:"Create VM with CPU pinning",source:"@site/docs/vm/cpu-pinning.md",sourceDirName:"vm",slug:"/vm/cpu-pinning",permalink:"/v1.4/vm/cpu-pinning",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/cpu-pinning.md",tags:[],version:"current",lastUpdatedAt:1730080976,formattedLastUpdatedAt:"Oct 28, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"CPU Pinning",title:"CPU Pinning",keywords:["Harvester","harvester","Virtual Machine","virtual machine","CPU","cpu","CPU Pinning","CPU pinning","cpu pinning","CPU manager","cpu manager","static policy"],description:"Create VM with CPU pinning"},sidebar:"api",previous:{title:"Clone VM",permalink:"/v1.4/vm/clone-vm"},next:{title:"Create a Volume",permalink:"/v1.4/volume/index"}},o={},l=[{value:"Kubernetes CPU Manager",id:"kubernetes-cpu-manager",level:2},{value:"Calculation of Shared CPU Pool",id:"calculation-of-shared-cpu-pool",level:3},{value:"Enable and Disable CPU Manager",id:"enable-and-disable-cpu-manager",level:2},{value:"Limitations",id:"limitations",level:3},{value:"Enable CPU Pinning on a New VM",id:"enable-cpu-pinning-on-a-new-vm",level:2},{value:"VM Live Migration",id:"vm-live-migration",level:2},{value:"Upgrades",id:"upgrades",level:2}],p={toc:l},d="wrapper";function c({components:e,...t}){return(0,n.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.4/vm/CPU-pinning"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.4.0")),(0,n.kt)("p",null,"Harvester supports VM CPU pinning. To use this feature, you must first enable the CPU Manager on the nodes, and then enable CPU pinning when you create the VM."),(0,n.kt)("h2",{id:"kubernetes-cpu-manager"},"Kubernetes CPU Manager"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/"},"CPU Manager")," feature improves CPU resource allocation in Kubernetes clusters, ensuring that workloads with strict performance needs receive stable and predictable CPU resources. This is especially important for high-performance and latency-sensitive applications."),(0,n.kt)("p",null,"Harvester uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"static")," CPU Manager policy when the CPU Manager is enabled. This policy manages a shared pool of CPUs that initially includes all CPUs on nodes with the following configuration:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pods in the ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#guaranteed"},(0,n.kt)("inlineCode",{parentName:"a"},"Guaranteed")),' quality of service (QoS) class that request whole CPU cores (for example, CPU: "2") are assigned dedicated CPUs. These CPUs are "pinned" to the pod and are removed from the shared CPU pool.'),(0,n.kt)("li",{parentName:"ul"},"Pods in the ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#burstable"},(0,n.kt)("inlineCode",{parentName:"a"},"Burstable"))," and ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#besteffort"},(0,n.kt)("inlineCode",{parentName:"a"},"BestEffort"))," QoS classes share the remaining CPUs in the shared pool.")),(0,n.kt)("h3",{id:"calculation-of-shared-cpu-pool"},"Calculation of Shared CPU Pool"),(0,n.kt)("p",null,"Harvester reserves CPU resources for system-level operations based on the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/plan-node-sizes#cpu_reservations"},"GKE formula"),", with the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/#system-reserved"},(0,n.kt)("inlineCode",{parentName:"a"},"systemReserved"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/#kube-reserved"},(0,n.kt)("inlineCode",{parentName:"a"},"kubeReserved"))," values allocated in a 2:3 ratio."),(0,n.kt)("p",null,"Example (node with 16 CPU cores):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"systemReserved: 408 millicores\nkubeReserved: 612 millicores\n")),(0,n.kt)("p",null,"In this example, approximately 15 cores (14980 millicores) are available for workloads."),(0,n.kt)("p",null,"When a VM (pod) in the Guaranteed QoS class requests 4 CPUs, 4 cores are dedicated to that VM. Pods in the other QoS classes share the remaining 11 cores in the shared pool."),(0,n.kt)("h2",{id:"enable-and-disable-cpu-manager"},"Enable and Disable CPU Manager"),(0,n.kt)("p",null,"When you enable the CPU Manager, Harvester sets the CPU Manager policy to ",(0,n.kt)("inlineCode",{parentName:"p"},"static"),". When you disable the feature, Harvester switches the CPU Manager policy back to ",(0,n.kt)("inlineCode",{parentName:"p"},"none"),". "),(0,n.kt)("p",null,"You must enable or disable the CPU Manager on each node separately."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to ",(0,n.kt)("strong",{parentName:"p"},"Hosts"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the node in the list, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Enable CPU Manager")," or ",(0,n.kt)("strong",{parentName:"p"},"Disable CPU Manager"),"."))),(0,n.kt)("p",null,"Allow some time for Harvester to apply the corresponding CPU Manager policy."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"enable-cpu-manager",src:a(28109).Z,width:"1724",height:"456"}),"\n",(0,n.kt)("img",{alt:"disable-cpu-manager",src:a(23442).Z,width:"1722",height:"457"})),(0,n.kt)("h3",{id:"limitations"},"Limitations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The CPU Manager cannot be enabled on the witness node.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The CPU Manager must be enabled or disabled on each management node separately. You must wait for the operation to be completed before starting another.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"VMs with CPU pinning enabled must be stopped before CPU Manager is disabled on the corresponding node."))),(0,n.kt)("h2",{id:"enable-cpu-pinning-on-a-new-vm"},"Enable CPU Pinning on a New VM"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify that CPU Manager is enabled on one or more nodes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-vm",src:a(26725).Z,width:"2920",height:"870"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Advanced Options")," tab, select ",(0,n.kt)("strong",{parentName:"p"},"Enable CPU Pinning"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"vm-advanced-options",src:a(59672).Z,width:"1316",height:"94"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,"Enabling CPU pinning adds ",(0,n.kt)("inlineCode",{parentName:"p"},"dedicatedCpuPlacement: true")," to ",(0,n.kt)("inlineCode",{parentName:"p"},".spec.template.spec.domain.cpu")," in the virtual machine configuration (YAML). When ",(0,n.kt)("inlineCode",{parentName:"p"},"dedicatedCpuPlacement")," is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", the CPU and memory resource requests are automatically set to match the limits to ensure that the criteria for Guaranteed QoS are met."),(0,n.kt)("p",null,"Because the requests and limits are identical, CPU and memory ",(0,n.kt)("a",{parentName:"p",href:"/v1.4/vm/resource-overcommit"},"Resource Overcommit")," settings do not apply to VMs with CPU pinning enabled."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To use CPU pinning on an existing VM, you must restart the VM after enabling the feature and saving the change.")),(0,n.kt)("h2",{id:"vm-live-migration"},"VM Live Migration"),(0,n.kt)("p",null,"VMs with CPU pinning enabled can be migrated only if the CPU Manager is enabled on the target node."),(0,n.kt)("h2",{id:"upgrades"},"Upgrades"),(0,n.kt)("p",null,"When upgrading a node, Harvester drains all pods and live migrates VMs to another node. To avoid interruptions to the upgrade process, ensure that the CPU Manager is enabled on other nodes and sufficient resources are available whenever you use VMs with CPU pinning enabled."))}c.isMDXComponent=!0},26725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-ed9039e172df720503a7eb3ebe21a772.png"},23442:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/disable-cpu-manager-80225dee7b1fa29eccd8d6928f964b13.png"},28109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enable-cpu-manager-08ff21ec36bf55ff1e5c81aa0e896cdc.png"},59672:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-advanced-options-cf4d375f47caac0bdbde697d605b357c.png"}}]);