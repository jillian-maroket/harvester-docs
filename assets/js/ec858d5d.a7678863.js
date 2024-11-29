"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[71206],{34222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>p});a(67294);var i=a(3905);const n={id:"customsuseimages",sidebar_position:8,sidebar_label:"Custom SUSE VM Images",title:"Custom SUSE VM Images",keywords:["Custom Images"],Description:"How to create custom SLES and openSUSE guest virtual machine images"},s=void 0,o={unversionedId:"advanced/customsuseimages",id:"advanced/customsuseimages",title:"Custom SUSE VM Images",description:"SUSE provides SUSE Linux Enterprise (SLE) and openSUSE Leap virtual machine (VM) images suitable for use in Harvester. These images are built on the openSUSE Build Service (OBS) using the Kiwi image building tool, and can be used immediately after downloading.",source:"@site/docs/advanced/customsuseimages.md",sourceDirName:"advanced",slug:"/advanced/customsuseimages",permalink:"/v1.5/advanced/customsuseimages",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/customsuseimages.md",tags:[],version:"current",lastUpdatedAt:1732843250,formattedLastUpdatedAt:"Nov 29, 2024",sidebarPosition:8,frontMatter:{id:"customsuseimages",sidebar_position:8,sidebar_label:"Custom SUSE VM Images",title:"Custom SUSE VM Images",keywords:["Custom Images"],Description:"How to create custom SLES and openSUSE guest virtual machine images"},sidebar:"api",previous:{title:"Single-Node Clusters",permalink:"/v1.5/advanced/singlenodeclusters"},next:{title:"Witness Node",permalink:"/v1.5/advanced/witness"}},l={},p=[{value:"Using the openSUSE Build Service (OBS)",id:"using-the-opensuse-build-service-obs",level:2},{value:"1. Create a custom image based on an existing template.",id:"1-create-a-custom-image-based-on-an-existing-template",level:3},{value:"2. Select image profiles and add packages.",id:"2-select-image-profiles-and-add-packages",level:3},{value:"3. (Optional) Switch to <em>View Package</em> mode.",id:"3-optional-switch-to-view-package-mode",level:3},{value:"4. (Optional) Edit the configuration file <code>Minimal.kiwi</code>.",id:"4-optional-edit-the-configuration-file-minimalkiwi",level:3},{value:"5. Wait for OBS to finish building the image.",id:"5-wait-for-obs-to-finish-building-the-image",level:3},{value:"6. Enable publishing to share the image.",id:"6-enable-publishing-to-share-the-image",level:3},{value:"Using the Kiwi Command-line Tool",id:"using-the-kiwi-command-line-tool",level:2}],r={toc:p},m="wrapper";function d({components:e,...t}){return(0,i.kt)(m,{...r,...t,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.4/advanced/customsuseimages"})),(0,i.kt)("p",null,"SUSE provides ",(0,i.kt)("a",{parentName:"p",href:"https://www.suse.com/download/sles/"},"SUSE Linux Enterprise (SLE)")," and ",(0,i.kt)("a",{parentName:"p",href:"https://get.opensuse.org/leap/"},"openSUSE Leap")," virtual machine (VM) images suitable for use in Harvester. These images are built on the ",(0,i.kt)("a",{parentName:"p",href:"https://build.opensuse.org/"},"openSUSE Build Service")," (OBS) using the ",(0,i.kt)("a",{parentName:"p",href:"https://osinside.github.io/kiwi/"},"Kiwi")," image building tool, and can be used immediately after downloading."),(0,i.kt)("p",null,"For most cases, you can use the ",(0,i.kt)("em",{parentName:"p"},"Minimal VM Cloud")," qcow2 images because these include the cloud-init tool necessary for automatic VM configuration. Other image variants require you to log onto the VM console and then perform initial configuration."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("em",{parentName:"p"},"Minimal VM Cloud")," images were named ",(0,i.kt)("em",{parentName:"p"},"Minimal VM OpenStack Cloud")," in releases earlier than SLES 15 SP5 and openSUSE 15.5.")),(0,i.kt)("h2",{id:"using-the-opensuse-build-service-obs"},"Using the openSUSE Build Service (OBS)"),(0,i.kt)("p",null,"You can create custom images based on what SUSE provides using OBS ",(0,i.kt)("a",{parentName:"p",href:"https://build.opensuse.org/image_templates"},"image templates"),", which are pre-configured Kiwi image configurations. For example, if you want use other packages with SLE 15 SP5, you can create an image using the ",(0,i.kt)("em",{parentName:"p"},"SLE 15 SP5 Minimal")," template. OBS provides an interface for adding packages and automatically builds the image, which you can download and then upload to Harvester. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://openbuildservice.org/help/manuals/obs-user-guide/"},"OBS User Guide"),"."),(0,i.kt)("h3",{id:"1-create-a-custom-image-based-on-an-existing-template"},"1. Create a custom image based on an existing template."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://build.opensuse.org/image_templates"},"https://build.opensuse.org/image_templates"),". You must sign in to your openSUSE account to access the resources.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the template that you want to use.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Specify a name for the image, and then select ",(0,i.kt)("strong",{parentName:"p"},"Create appliance"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(28434).Z,width:"1280",height:"800"})),(0,i.kt)("p",{parentName:"li"},"OBS automatically builds the image. By default, the interface shows the ",(0,i.kt)("strong",{parentName:"p"},"Overview")," tab, which contains information such as the number of included packages and the build status."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(42354).Z,width:"1280",height:"800"})))),(0,i.kt)("h3",{id:"2-select-image-profiles-and-add-packages"},"2. Select image profiles and add packages."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Software")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the image profiles that you want OBS to build."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For most cases, you can use the ",(0,i.kt)("em",{parentName:"p"},"Minimal VM Cloud")," qcow2 images because these include the cloud-init tool necessary for automatic VM configuration. Other image variants require you to log onto the VM console and then perform initial configuration.")),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("img",{src:a(60387).Z,width:"1280",height:"800"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optional) Add and remove packages."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(97767).Z,width:"1280",height:"800"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(34986).Z,width:"1280",height:"800"})))),(0,i.kt)("h3",{id:"3-optional-switch-to-view-package-mode"},"3. (Optional) Switch to ",(0,i.kt)("em",{parentName:"h3"},"View Package")," mode."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"View Package")," mode provides more granular control over configuration. To switch, click the ",(0,i.kt)("em",{parentName:"p"},"View Package")," icon in the navigation bar."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(85830).Z,width:"1280",height:"800"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Source Files")," section of the ",(0,i.kt)("strong",{parentName:"p"},"Overview")," tab shows all the files that comprise your Kiwi template. You can edit any of the files by selecting the corresponding file name."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(81732).Z,width:"1280",height:"800"})),(0,i.kt)("h3",{id:"4-optional-edit-the-configuration-file-minimalkiwi"},"4. (Optional) Edit the configuration file ",(0,i.kt)("inlineCode",{parentName:"h3"},"Minimal.kiwi"),"."),(0,i.kt)("p",null,"Select the file name to open the text editor. The ",(0,i.kt)("inlineCode",{parentName:"p"},'<packages type="image">')," section lists the packages to be installed. You can specify additional packages for each image profile."),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("em",{parentName:"p"},"Cloud")," image profile (",(0,i.kt)("inlineCode",{parentName:"p"},'<package type="image" profiles="Cloud">'),") installs the ",(0,i.kt)("em",{parentName:"p"},"kernel-default-base")," package. In the following example, that package is replaced with ",(0,i.kt)("em",{parentName:"p"},"kernel-default"),", which includes modules necessary for iSCSI support."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(66031).Z,width:"1280",height:"800"})),(0,i.kt)("h3",{id:"5-wait-for-obs-to-finish-building-the-image"},"5. Wait for OBS to finish building the image."),(0,i.kt)("p",null,"Once the process is completed, the ",(0,i.kt)("strong",{parentName:"p"},"Build Results")," section on the ",(0,i.kt)("strong",{parentName:"p"},"Overview")," tab shows the status ",(0,i.kt)("em",{parentName:"p"},"succeeded"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(76001).Z,width:"1280",height:"800"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Build Results")," section also contains a download link for the new image."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(82603).Z,width:"1280",height:"800"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(23780).Z,width:"1280",height:"800"})),(0,i.kt)("h3",{id:"6-enable-publishing-to-share-the-image"},"6. Enable publishing to share the image."),(0,i.kt)("p",null,"To allow the public to download your custom image, go to the ",(0,i.kt)("strong",{parentName:"p"},"Repositories")," tab of your OBS project and enable the ",(0,i.kt)("em",{parentName:"p"},"Publish")," flag."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(23216).Z,width:"1280",height:"800"})),(0,i.kt)("p",null,"Your image is published to ",(0,i.kt)("a",{parentName:"p",href:"https://download.opensuse.org/"},"https://download.opensuse.org/")," (under ",(0,i.kt)("inlineCode",{parentName:"p"},"repositories/home:/YOUR_USER_NAME:/branches:/SUSE:/Templates:/Images:/"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9245).Z,width:"1280",height:"800"})),(0,i.kt)("h2",{id:"using-the-kiwi-command-line-tool"},"Using the Kiwi Command-line Tool"),(0,i.kt)("p",null,"As an alternative to the openSUSE Build Service, you can create images locally using the Kiwi command-line tool. For more information about the tool, see ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.suse.com/appliance/kiwi-9/html/kiwi/index.html"},"Building Linux System Appliances with KIWI Next Generation (KIWI NG)"),"."),(0,i.kt)("p",null,"To create custom images, you must first download the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Minimal.kiwi"),", and the scripts ",(0,i.kt)("inlineCode",{parentName:"p"},"config.sh")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"editbootinstall_rpi.sh")," from the corresponding project on OBS."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"OS"),(0,i.kt)("th",{parentName:"tr",align:null},"openSUSE Build Service Project"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SLE 15 SP5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://build.opensuse.org/package/show/SUSE:SLE-15-SP5:GA/kiwi-templates-Minimal"},"https://build.opensuse.org/package/show/SUSE:SLE-15-SP5:GA/kiwi-templates-Minimal"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openSUSE Leap 15.5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://build.opensuse.org/package/show/openSUSE:Leap:15.5/kiwi-templates-Minimal"},"https://build.opensuse.org/package/show/openSUSE:Leap:15.5/kiwi-templates-Minimal"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SLE 15 SP4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://build.opensuse.org/package/show/SUSE:SLE-15-SP4:GA/kiwi-templates-Minimal"},"https://build.opensuse.org/package/show/SUSE:SLE-15-SP4:GA/kiwi-templates-Minimal"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openSUSE Leap 15.4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://build.opensuse.org/package/show/openSUSE:Leap:15.4/kiwi-templates-Minimal"},"https://build.opensuse.org/package/show/openSUSE:Leap:15.4/kiwi-templates-Minimal"))))))}d.isMDXComponent=!0},28434:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-01-select-template-0f007b6d980789ea97d3c6fe97be2b06.png"},42354:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-02-image-overview-db0e1a55d449c3013689fbd94d7b6a89.png"},60387:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-03-image-software-4ac9c98084fd088d60562dc9c5beb694.png"},97767:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-04-image-software-packages-ffbda30e7cf8af6f909ad7383ba3f2e0.png"},34986:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-05-image-software-add-package-9565456d50556fcf3b88d9397e8e010b.png"},85830:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-06-view-package-65ee516c9f69bd5d59f4bdf150707341.png"},81732:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-07-view-package-details-b7e36eeb3463c79b68f905d90e463b86.png"},66031:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-08-edit-kiwi-config-45eb154eb77bd00054450f21f506dccf.png"},76001:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-09-build-succeeded-a08bcf66a37cdff5e29c355e369f1bd9.png"},82603:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-10-binaries-link-e26b0ca7ef3c306380658fb4da4b8c70.png"},23780:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-11-binaries-download-4265fe1f0b508d71e7b6b5ac883ed6d3.png"},23216:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-12-project-publish-repositories-e48465dcebb1d1e5b54249ad34097a03.png"},9245:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-vm-13-download.openuse.org-f5822888982d82181ba3c6a70d05254e.png"}}]);