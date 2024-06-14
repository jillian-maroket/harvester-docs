"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[90474],{57213:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=t(87462),i=(t(67294),t(3905));const a={sidebar_position:8,sidebar_label:"Resource Overcommit",title:"Resource Overcommit",keywords:["Harvester","Overcommit","Overprovision","ballooning"],description:"Overcommit resources to a VM."},n=void 0,s={unversionedId:"vm/resource-overcommit",id:"version-v1.1/vm/resource-overcommit",title:"Resource Overcommit",description:"Overcommit resources to a VM.",source:"@site/versioned_docs/version-v1.1/vm/resource-overcommit.md",sourceDirName:"vm",slug:"/vm/resource-overcommit",permalink:"/v1.1/vm/resource-overcommit",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/vm/resource-overcommit.md",tags:[],version:"v1.1",lastUpdatedAt:1718330763,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Resource Overcommit",title:"Resource Overcommit",keywords:["Harvester","Overcommit","Overprovision","ballooning"],description:"Overcommit resources to a VM."},sidebar:"api",previous:{title:"Hot-Plug Volumes",permalink:"/v1.1/vm/hotplug-volume"},next:{title:"Clone VM",permalink:"/v1.1/vm/clone-vm"}},l={},m=[{value:"Configure the global setting <code>overcommit-config</code>",id:"configure-the-global-setting-overcommit-config",level:2},{value:"Configure overcommit for a single virtual machine",id:"configure-overcommit-for-a-single-virtual-machine",level:2},{value:"Reserve more memory for the system overhead",id:"reserve-more-memory-for-the-system-overhead",level:2},{value:"Why my virtual machines are scheduled unevenly?",id:"why-my-virtual-machines-are-scheduled-unevenly",level:2}],c={toc:m},v="wrapper";function u(e){let{components:o,...t}=e;return(0,i.kt)(v,(0,r.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/resource-overcommit"})),(0,i.kt)("p",null,"Harvester supports global configuration of resource overload percentages on CPU, memory, and storage. By setting ",(0,i.kt)("a",{parentName:"p",href:"/v1.1/advanced/index#overcommit-config"},(0,i.kt)("inlineCode",{parentName:"a"},"overcommit-config")),", this will allow scheduling of additional virtual machines even when physical resources are fully utilized."),(0,i.kt)("p",null,"Harvester allows you to overcommit CPU and RAM on compute nodes. This allows you to increase the number of instances running on your cloud at the cost of reducing the performance of the instances. The Compute service uses the following ratios by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CPU allocation ratio: 1600%"),(0,i.kt)("li",{parentName:"ul"},"RAM allocation ratio: 150%"),(0,i.kt)("li",{parentName:"ul"},"Storage allocation ratio: 200%")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Classic memory overcommitment or memory ballooning is not yet supported by this feature. In other words, memory used by a virtual machine instance cannot be returned once allocated.")),(0,i.kt)("h2",{id:"configure-the-global-setting-overcommit-config"},"Configure the global setting ",(0,i.kt)("a",{parentName:"h2",href:"/v1.1/advanced/index#overcommit-config"},(0,i.kt)("inlineCode",{parentName:"a"},"overcommit-config"))),(0,i.kt)("p",null,"Users can modify the global ",(0,i.kt)("inlineCode",{parentName:"p"},"overcommit-config")," by following the steps below, and it will be applied to each newly created virtual machine after the change."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Advanced > Settings")," page."),(0,i.kt)("li",{parentName:"ol"},"Find the ",(0,i.kt)("inlineCode",{parentName:"li"},"overcommit-config")," setting."),(0,i.kt)("li",{parentName:"ol"},"Configure the desired CPU, Memory, and Storage ratio.")),(0,i.kt)("h2",{id:"configure-overcommit-for-a-single-virtual-machine"},"Configure overcommit for a single virtual machine"),(0,i.kt)("p",null,"If you need to configure individual virtual machines without involving global configuration, consider adjusting the ",(0,i.kt)("inlineCode",{parentName:"p"}," spec.template.spec.domain.resources.<memory|cpu>")," value on the target VirtualMachine resource individually. Note that by modifying these values, you are taking over control of virtual machine resource management from Harvester."),(0,i.kt)("h2",{id:"reserve-more-memory-for-the-system-overhead"},"Reserve more memory for the system overhead"),(0,i.kt)("p",null,"By default, the Harvester reserves a certain amount of system management overhead memory from the memory allocated for the virtual machine. In most cases, this will not cause any problems. However, some operating systems, such as Windows 2022, will request more memory than is reserved."),(0,i.kt)("p",null,"To address the issue, Harvester provides an annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory")," on VirtualMachine custom resource to let you specify the amount of memory to reserve. For instance, add ",(0,i.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory: 200Mi")," if you decide to reserve 200 MiB for the system overhead of the VM."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," apiVersion: kubevirt.io/v1\n kind: VirtualMachine\n metadata:\n   annotations:\n+    harvesterhci.io/reservedMemory: 200Mi\n     kubevirt.io/latest-observed-api-version: v1\n     kubevirt.io/storage-observed-api-version: v1alpha3\n     network.harvesterhci.io/ips: '[]'\n   ...\n   ...\n")),(0,i.kt)("h2",{id:"why-my-virtual-machines-are-scheduled-unevenly"},"Why my virtual machines are scheduled unevenly?"),(0,i.kt)("p",null,"The scheduling of virtual machines depends on the underlying behavior of the kube-scheduler. We have a dedicated article explaining the details. If you would like to learn more, check out:  ",(0,i.kt)("a",{parentName:"p",href:"https://harvesterhci.io/kb/vm-scheduling/"},"Harvester Knowledge Base: VM Scheduling"),"."))}u.isMDXComponent=!0}}]);