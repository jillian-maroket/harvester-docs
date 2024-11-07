"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[30674],{97395:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>i});a(67294);var n=a(3905);const r={sidebar_position:8,sidebar_label:"Local Storage Support",title:"Local Storage Support"},o=void 0,s={unversionedId:"advanced/addons/lvm-local-storage",id:"advanced/addons/lvm-local-storage",title:"Local Storage Support",description:"Available as of v1.4.0",source:"@site/docs/advanced/addons/lvm-local-storage.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/lvm-local-storage",permalink:"/v1.4/advanced/addons/lvm-local-storage",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons/lvm-local-storage.md",tags:[],version:"current",lastUpdatedAt:1730967112,formattedLastUpdatedAt:"Nov 7, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Local Storage Support",title:"Local Storage Support"},sidebar:"api",previous:{title:"Nvidia Driver Toolkit",permalink:"/v1.4/advanced/addons/nvidiadrivertoolkit"},next:{title:"Single-Node Clusters",permalink:"/v1.4/advanced/singlenodeclusters"}},l={},i=[{value:"Installing and Enabling harvester-csi-driver-lvm",id:"installing-and-enabling-harvester-csi-driver-lvm",level:2},{value:"Creating a Volume Group for LVM",id:"creating-a-volume-group-for-lvm",level:2},{value:"Creating a StorageClass for LVM",id:"creating-a-storageclass-for-lvm",level:2},{value:"Creating a Volume with LVM",id:"creating-a-volume-with-lvm",level:2},{value:"Creating Snapshots for an LVM Volume",id:"creating-snapshots-for-an-lvm-volume",level:2},{value:"Supported LVM Volume Features",id:"supported-lvm-volume-features",level:2}],p={toc:i},m="wrapper";function d({components:e,...t}){return(0,n.kt)(m,{...p,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/advanced/lvm-local-storage"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.4.0")),(0,n.kt)("p",null,"Harvester v1.4.0 allows you to use local storage on the host to create persistent volumes for your workloads with better performance and latency. This functionality is made possible by LVM, which provides logical volume management facilities on Linux."),(0,n.kt)("h2",{id:"installing-and-enabling-harvester-csi-driver-lvm"},"Installing and Enabling harvester-csi-driver-lvm"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-csi-driver-lvm")," add-on is a CSI driver that supports local path provisioning through LVM. It is not packaged into the Harvester ISO, but is available in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/experimental-addons"},"experimental-addons")," repository."),(0,n.kt)("p",null,"If you are using the Harvester kubeconfig file, you can perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the add-on by running the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# kubectl apply -f https://raw.githubusercontent.com/harvester/experimental-addons/main/harvester-csi-driver-lvm/harvester-csi-driver-lvm.yaml\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to ",(0,n.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,n.kt)("strong",{parentName:"p"},"Add-ons"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"harvester-csi-driver-lvm (Experimental)"),", and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Enable"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(43322).Z,width:"2994",height:"1434"})))),(0,n.kt)("h2",{id:"creating-a-volume-group-for-lvm"},"Creating a Volume Group for LVM"),(0,n.kt)("p",null,"A volume group combines physical volumes to create a single storage structure that can be divided into logical volumes."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Harvester currently does not allow you to modify the volume group composition (add or remove disks) after you create a logical volume. This issue will be addressed in a future release.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify that the ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-csi-driver-lvm")," add-on is installed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to the ",(0,n.kt)("strong",{parentName:"p"},"Hosts")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the target host, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Edit Config"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Storage tab, add disks for the volume group."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(33947).Z,width:"1645",height:"785"})),(0,n.kt)("p",{parentName:"li"},"Configure the following settings for each selected disk:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provisioner"),": Select ",(0,n.kt)("strong",{parentName:"p"},"LVM"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(77711).Z,width:"1639",height:"792"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Volume Group"),": Select an existing volume group or specify a name for a new volume group."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(66967).Z,width:"1639",height:"795"})),(0,n.kt)("p",{parentName:"li"},"For more information about adding disks, see ",(0,n.kt)("a",{parentName:"p",href:"../../host/#multi-disk-management"},"Multi-Disk Management"),"."))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the host details screen, verify that the disks were added and the correct provisioner was set."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(46791).Z,width:"1645",height:"770"})))),(0,n.kt)("h2",{id:"creating-a-storageclass-for-lvm"},"Creating a StorageClass for LVM"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can only use one type of local volume in each volume group. If necessary, create different volume groups for the volume types that you want to use.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to the ",(0,n.kt)("strong",{parentName:"p"},"Storage")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new StorageClass and select ",(0,n.kt)("strong",{parentName:"p"},"LVM")," in the ",(0,n.kt)("strong",{parentName:"p"},"Provisioner")," list."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(27399).Z,width:"1645",height:"804"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Parameters")," tab, configure the following settings:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Node"),": Select the target node for the intended workloads. "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(25141).Z,width:"1647",height:"802"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Volume Group Name"),": Select the volume group that you created."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(88378).Z,width:"1646",height:"801"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Volume Group Type"),": Select the type of local volume that matches your requirements. Harvester currently supports ",(0,n.kt)("strong",{parentName:"p"},"striped")," and ",(0,n.kt)("strong",{parentName:"p"},"dm-thin"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(30557).Z,width:"1652",height:"804"})))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Storage")," screen, verify that the StorageClass was created and the correct provisioner was set."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(9261).Z,width:"1647",height:"538"})))),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/v1.4/advanced/storageclass"},"StorageClass"),"."),(0,n.kt)("h2",{id:"creating-a-volume-with-lvm"},"Creating a Volume with LVM"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to the ",(0,n.kt)("strong",{parentName:"p"},"Volumes")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new volume using the LVM StorageClass that you created."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(41053).Z,width:"1642",height:"802"})),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The status ",(0,n.kt)("strong",{parentName:"p"},"Not Ready")," is normal because Harvester creates the LVM volume only when the first workload is created."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," screen, select the target virtual machine, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Add Volume"),"."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Because the LVM volume is a local volume, you must ensure that the target node of the LVM StorageClass is the node on which the virtual machine is scheduled."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify the volume that you want to attach."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(97682).Z,width:"1646",height:"801"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Volumes")," screen, verify that the state is ",(0,n.kt)("strong",{parentName:"p"},"In-use"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(55016).Z,width:"1645",height:"779"})))),(0,n.kt)("p",null,"You can also create a new virtual machine with the volume of the LVM StorageClass that you created. This virtual machine will be scheduled on the target node with local storage for the volume."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(59748).Z,width:"1645",height:"792"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(17601).Z,width:"1645",height:"797"})),(0,n.kt)("h2",{id:"creating-snapshots-for-an-lvm-volume"},"Creating Snapshots for an LVM Volume"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to the ",(0,n.kt)("strong",{parentName:"p"},"Settings")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"csi-driver-config")," section, select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Edit Setting"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(97855).Z,width:"1894",height:"711"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add an entry with the following settings:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Provisioner"),": Select ",(0,n.kt)("strong",{parentName:"p"},"lvm.driver.harvesterhci.io"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Volume Snapshot Class Name"),": Select ",(0,n.kt)("strong",{parentName:"p"},"lvm-snapshot"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Backup Volume Snapshot Class Name"),": Select ",(0,n.kt)("strong",{parentName:"p"},"lvm-snapshot"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(8048).Z,width:"1648",height:"805"})))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," screen, select the target virtual machine, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Take Virtual Machine Snapshot"),"."),(0,n.kt)("p",{parentName:"li"},"Example:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(25276).Z,width:"1645",height:"710"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machine Snapshots")," screen, verify that snapshot is ready to use."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(96499).Z,width:"1647",height:"597"})))),(0,n.kt)("h2",{id:"supported-lvm-volume-features"},"Supported LVM Volume Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Volume resizing"),(0,n.kt)("li",{parentName:"ul"},"Volume cloning"),(0,n.kt)("li",{parentName:"ul"},"Snapshot creation")),(0,n.kt)("admonition",{title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Backup creation is currently not supported. This limitation will be addressed in a future release.")))}d.isMDXComponent=!0},33947:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disk-to-vg-01-cb130f9e480c4b6ea4ebc5d216428a3e.png"},77711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disk-to-vg-02-60e3430a7ac2b0a5dc165718397642e7.png"},66967:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disk-to-vg-03-54392215701c122f5bb857428ba698c8.png"},46791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disk-to-vg-04-7db4c34c34d19f18a2a90782e2c1bbb1.png"},97682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/attach-lvm-volume-01-289ca749113d3b2e11a018c1096466f5.png"},55016:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/attach-lvm-volume-02-f052859241d6dd641c2aa89f05f31391.png"},27399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-lvm-sc-01-77ccaa31b54088dc107ecd85eb4caf91.png"},25141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-lvm-sc-02-513988fd60195ee6dc04462a08b5e899.png"},88378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-lvm-sc-03-da7332e8ba37bb5b8289c95acfd69c71.png"},30557:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-lvm-sc-04-bde6aca213c58b5d12a62b49231cf8e1.png"},9261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-lvm-sc-05-d6fe2228be84d05cd5490d6c6f009cea.png"},41053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-lvm-volume-01-03479b3709d3c68ed5e12ceff45329df.png"},59748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-with-lvm-volume-01-138b25634513c33245c8e41b7dc05eab.png"},17601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-with-lvm-volume-02-f978cef857edf7081db57da2426c9e56.png"},43322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enable-lvm-addon-fa3d488713560c5405ece8ee5c0b5933.png"},97855:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update-csi-driver-config-01-c2f5c5b87ba84ee41ad2aba072291040.png"},8048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update-csi-driver-config-02-66ed57fb003835a04563697ee626e1e3.png"},25276:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-take-snapshot-with-lvm-01-3c2d9827e105365b6335b456a9f99495.png"},96499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-take-snapshot-with-lvm-02-5ddbd91c753a760a4074d1d46f67fa2c.png"}}]);