"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[36277],{91222:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});t(67294);var i=t(3905),n=t(25108);const o={id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},r=void 0,l={unversionedId:"volume/index",id:"volume/index",title:"Create a Volume",description:"Create a volume from the Volume page.",source:"@site/docs/volume/create-volume.md",sourceDirName:"volume",slug:"/volume/index",permalink:"/v1.4/volume/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/volume/create-volume.md",tags:[],version:"current",lastUpdatedAt:1730967112,formattedLastUpdatedAt:"Nov 7, 2024",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},sidebar:"api",previous:{title:"CPU Pinning",permalink:"/v1.4/vm/cpu-pinning"},next:{title:"Edit a Volume",permalink:"/v1.4/volume/edit-volume"}},m={},s=[{value:"Create an Empty Volume",id:"create-an-empty-volume",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Basics Tab",id:"basics-tab",level:3},{value:"Create an Image Volume",id:"create-an-image-volume",level:2},{value:"Header Section",id:"header-section-1",level:3},{value:"Basics Tab",id:"basics-tab-1",level:3}],u=e=>function(a){return n.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},d=u("Tabs"),p=u("TabItem"),v={toc:s},c="wrapper";function k({components:e,...a}){return(0,i.kt)(c,{...v,...a,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/create-volume"})),(0,i.kt)("h2",{id:"create-an-empty-volume"},"Create an Empty Volume"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(p,{value:"ui",label:"UI",default:!0,mdxType:"TabItem"},(0,i.kt)("h3",{id:"header-section"},"Header Section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the Volume ",(0,i.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,i.kt)("h3",{id:"basics-tab"},"Basics Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"New")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,i.kt)("li",{parentName:"ol"},"Select an existing ",(0,i.kt)("inlineCode",{parentName:"li"},"StorageClass"),"."),(0,i.kt)("li",{parentName:"ol"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-empty-volume",src:t(73551).Z,width:"2560",height:"726"}))),(0,i.kt)(p,{value:"api",label:"API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  annotations:\n    volume.beta.kubernetes.io/storage-provisioner: driver.longhorn.io\n    volume.kubernetes.io/storage-provisioner: driver.longhorn.io\n  name: my-vol\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 10Gi\n  volumeMode: Block\n  volumeName: pvc-my-vol\n"))),(0,i.kt)(p,{value:"terraform",label:"Terraform",mdxType:"TabItem"},(0,i.kt)("p",null,"To create an empty volume on Harvester with Terraform using the ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest"},"Harvester Terraform Provider"),", define a ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester_volume")," resource block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "harvester_volume" "empty-volume" {\n  name      = "empty-volume"\n  namespace = "default"\n\n  size = "10Gi"\n}\n')))),(0,i.kt)("h2",{id:"create-an-image-volume"},"Create an Image Volume"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(p,{value:"ui",label:"UI",mdxType:"TabItem"},(0,i.kt)("h3",{id:"header-section-1"},"Header Section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the Volume ",(0,i.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,i.kt)("h3",{id:"basics-tab-1"},"Basics Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"VM Image")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,i.kt)("li",{parentName:"ol"},"Select an existing ",(0,i.kt)("inlineCode",{parentName:"li"},"Image"),"."),(0,i.kt)("li",{parentName:"ol"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,i.kt)("admonition",{title:"important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When creating volumes from a VM image, ensure that the volume size is greater than or equal to the image size. The volume may become corrupted if the configured volume size is less than the size of the underlying image. This is particularly important for qcow2 images because the virtual size is typically greater than the physical size."),(0,i.kt)("p",{parentName:"admonition"},"By default, Harvester will set the volume size to the virtual size of the image.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-image-volume",src:t(13987).Z,width:"2560",height:"726"}))),(0,i.kt)(p,{value:"api",label:"API",mdxType:"TabItem"},(0,i.kt)("p",null,"Create a volume, initialized with the contents of the image ",(0,i.kt)("inlineCode",{parentName:"p"},"image-8rb2z")," from the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  annotations:\n    harvesterhci.io/imageId: default/image-8rb2z\n    volume.beta.kubernetes.io/storage-provisioner: driver.longhorn.io\n    volume.kubernetes.io/storage-provisioner: driver.longhorn.io\n  name: foobar\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 5Gi\n  storageClassName: longhorn-image-8rb2z\n  volumeMode: Block\n  volumeName: pvc-foobar\n"))),(0,i.kt)(p,{value:"terraform",label:"Terraform",mdxType:"TabItem"},(0,i.kt)("p",null,"To create a volume on Harvester using Terraform and initialize it with the contents of an\nimage, define a ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester_volume")," resource block and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "harvester_volume" "opensuse154-image-disk" {\n  name      = "opensuse154-image-disk"\n  namespace = "default"\n\n  size  = "10Gi"\n  image = harvester_image.opensuse154.id\n}\n')))))}k.isMDXComponent=!0},73551:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/create-empty-volume-e64eb8d677034412d1b394dda137a8ad.png"},13987:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/create-image-volume-ad01408a1eaa69454a211039f3de6c36.png"}}]);