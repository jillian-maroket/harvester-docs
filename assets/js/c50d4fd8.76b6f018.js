"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[20932],{67606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const s={sidebar_position:3,sidebar_label:"Third-Party Storage Support",title:"Third-Party Storage Support"},n=void 0,o={unversionedId:"advanced/csidriver",id:"advanced/csidriver",title:"Third-Party Storage Support",description:"Available as of v1.2.0",source:"@site/docs/advanced/csidriver.md",sourceDirName:"advanced",slug:"/advanced/csidriver",permalink:"/v1.4/advanced/csidriver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/csidriver.md",tags:[],version:"current",lastUpdatedAt:1718330763,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Third-Party Storage Support",title:"Third-Party Storage Support"},sidebar:"api",previous:{title:"StorageClass",permalink:"/v1.4/advanced/storageclass"},next:{title:"Storage Network",permalink:"/v1.4/advanced/storagenetwork"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Harvester cluster",id:"create-harvester-cluster",level:2},{value:"Install the CSI driver",id:"install-the-csi-driver",level:2},{value:"Configure Harvester Cluster",id:"configure-harvester-cluster",level:2},{value:"Use the CSI driver",id:"use-the-csi-driver",level:2},{value:"References",id:"references",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/advanced/csidriver"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,i.kt)("p",null,"Harvester now offers the capability to install a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes-csi.github.io/docs/introduction.html"},"Container Storage Interface (CSI)")," in your Harvester cluster. This allows you to leverage external storage for the Virtual Machine's non-system data disk, allowing you to use different drivers tailored for specific needs, whether for performance optimization or seamless integration with your existing in-house storage solutions."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Virtual Machine (VM) image provisioner in Harvester still relies on Longhorn. Before version 1.2.0, Harvester exclusively supported Longhorn for storing VM data and did not offer support for external storage as a destination for VM data.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"For the Harvester functions to work well, the third-party CSI driver needs to have the following capabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support expansion"),(0,i.kt)("li",{parentName:"ul"},"Support snapshot"),(0,i.kt)("li",{parentName:"ul"},"Support clone"),(0,i.kt)("li",{parentName:"ul"},"Support block device"),(0,i.kt)("li",{parentName:"ul"},"Support Read-Write-Many (RWX), for ",(0,i.kt)("a",{parentName:"li",href:"/v1.4/vm/live-migration"},"Live Migration"))),(0,i.kt)("h2",{id:"create-harvester-cluster"},"Create Harvester cluster"),(0,i.kt)("p",null,"Harvester's operating system follows an immutable design, meaning that most OS files revert to their pre-configured state after a reboot. Therefore, you might need to perform additional configurations before installing the Harvester cluster for third-party CSI drivers."),(0,i.kt)("p",null,"Some CSI drivers require additional persistent paths on the host. You can add these paths to ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/install/harvester-configuration#ospersistent_state_paths"},(0,i.kt)("inlineCode",{parentName:"a"},"os.persistent_state_paths")),"."),(0,i.kt)("p",null,"Some CSI drivers require additional software packages on the host. You can install these packages with ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/install/harvester-configuration#osafter_install_chroot_commands"},(0,i.kt)("inlineCode",{parentName:"a"},"os.after_install_chroot_commands")),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Upgrading Harvester causes the changes to the OS in the ",(0,i.kt)("inlineCode",{parentName:"p"},"after-install-chroot")," stage to be lost. You must also configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"after-upgrade-chroot")," to make your changes persistent across an upgrade. Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.github.io/elemental-toolkit/docs/customizing/runtime_persistent_changes/"},"Runtime persistent changes")," before upgrading Harvester.")),(0,i.kt)("h2",{id:"install-the-csi-driver"},"Install the CSI driver"),(0,i.kt)("p",null,"After installing the Harvester cluster is complete, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/faq#how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster"},"How can I access the kubeconfig file of the Harvester cluster?")," to get the kubeconfig of the cluster."),(0,i.kt)("p",null,"With the kubeconfig of the Harvester cluster, you can install the third-party CSI drivers into the cluster by following the installation instructions for each CSI driver. You must also refer to the CSI driver documentation to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VolumeSnapshotClass")," in the Harvester cluster."),(0,i.kt)("h2",{id:"configure-harvester-cluster"},"Configure Harvester Cluster"),(0,i.kt)("p",null,"Before you can make use of Harvester's ",(0,i.kt)("strong",{parentName:"p"},"Backup & Snapshot")," features, you need to set up some essential configurations through the Harvester ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/advanced/index#csi-driver-config"},"csi-driver-config")," setting. Follow these steps to make these configurations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to the Harvester UI, then navigate to ",(0,i.kt)("strong",{parentName:"li"},"Advanced")," > ",(0,i.kt)("strong",{parentName:"li"},"Settings"),"."),(0,i.kt)("li",{parentName:"ol"},"Find and select ",(0,i.kt)("strong",{parentName:"li"},"csi-driver-config"),", and then select ",(0,i.kt)("strong",{parentName:"li"},"\u22ee")," > ",(0,i.kt)("strong",{parentName:"li"},"Edit Setting")," to access the configuration options."),(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("strong",{parentName:"li"},"Provisioner")," to the third-party CSI driver in the settings."),(0,i.kt)("li",{parentName:"ol"},"Next, Configure the ",(0,i.kt)("strong",{parentName:"li"},"Volume Snapshot Class Name"),". This setting points to the name of the ",(0,i.kt)("inlineCode",{parentName:"li"},"VolumeSnapshotClass")," used for creating volume snapshots or VM snapshots."),(0,i.kt)("li",{parentName:"ol"},"Similarly, Configure the ",(0,i.kt)("strong",{parentName:"li"},"Backup Volume Snapshot Class Name"),". This corresponds to the name of the ",(0,i.kt)("inlineCode",{parentName:"li"},"VolumeSnapshotClass")," responsible for creating VM backups.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"csi-driver-config-external",src:r(27313).Z,width:"3824",height:"1848"})),(0,i.kt)("h2",{id:"use-the-csi-driver"},"Use the CSI driver"),(0,i.kt)("p",null,"After successfully configuring these settings, you can utilize the third-party StorageClass. You can apply the third-party StorageClass when creating an empty volume or adding a new block volume to a VM, enhancing your Harvester cluster's storage capabilities."),(0,i.kt)("p",null,"With these configurations in place, your Harvester cluster is ready to make the most of the third-party storage integration."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rook-ceph-volume-external",src:r(91902).Z,width:"3824",height:"1848"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rook-ceph-vm-external",src:r(18542).Z,width:"3824",height:"1848"})),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/use_rook_ceph_external_storage"},"Use Rook Ceph External Storage with Harvester")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/install_netapp_trident_csi"},"Using NetApp Storage on Harvester"))))}h.isMDXComponent=!0},27313:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/csi-driver-config-external-59b885aff7095a9bda897ed59f289d82.png"},18542:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rook-ceph-vm-external-4c1b4f6b6a6676e13d312cac3498d786.png"},91902:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rook-ceph-volume-external-974d73b9b863e95495c7b119d2c50954.png"}}]);