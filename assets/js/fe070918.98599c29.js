"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[75542],{47033:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>r});t(67294);var i=t(3905);const s={id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},n=void 0,l={unversionedId:"upload-image",id:"version-v1.1/upload-image",title:"Upload Images",description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required.",source:"@site/versioned_docs/version-v1.1/upload-image.md",sourceDirName:".",slug:"/upload-image",permalink:"/v1.1/upload-image",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/upload-image.md",tags:[],version:"v1.1",lastUpdatedAt:1724304868,formattedLastUpdatedAt:"Aug 22, 2024",sidebarPosition:6,frontMatter:{id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},sidebar:"api",previous:{title:"Authentication",permalink:"/v1.1/authentication"},next:{title:"Host Management",permalink:"/v1.1/host/"}},o={},r=[{value:"Upload Images via URL",id:"upload-images-via-url",level:3},{value:"Upload Images via Local File",id:"upload-images-via-local-file",level:3},{value:"Create Images via Volumes",id:"create-images-via-volumes",level:3},{value:"Image StorageClass",id:"image-storageclass",level:3},{value:"Image Labels",id:"image-labels",level:3},{value:"Known Issues",id:"known-issues",level:3}],m={toc:r},d="wrapper";function p({components:e,...a}){return(0,i.kt)(d,{...m,...a,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/upload-image"})),(0,i.kt)("p",null,"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes."),(0,i.kt)("h3",{id:"upload-images-via-url"},"Upload Images via URL"),(0,i.kt)("p",null,"To import virtual machine images in the ",(0,i.kt)("strong",{parentName:"p"},"Images")," page, enter a URL that can be accessed from the cluster. Description and labels are optional."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image name will be auto-filled using the URL address's filename. You can customize the image name at any time.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(51786).Z,width:"5120",height:"1512"})),(0,i.kt)("h3",{id:"upload-images-via-local-file"},"Upload Images via Local File"),(0,i.kt)("p",null,"Currently, qcow2, raw, and ISO images are supported."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Please do not refresh the page until the file upload is finished."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(56113).Z,width:"5120",height:"1616"})),(0,i.kt)("h3",{id:"create-images-via-volumes"},"Create Images via Volumes"),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"Volumes")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Export Image"),". Enter the image name and select a StorageClass to create an image."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(13300).Z,width:"2560",height:"726"})),(0,i.kt)("h3",{id:"image-storageclass"},"Image StorageClass"),(0,i.kt)("p",null,"When creating an image, you can select a ",(0,i.kt)("a",{parentName:"p",href:"/v1.1/advanced/storageclass"},"StorageClass")," and use its pre-defined parameters like replicas, node selectors and disk selectors ."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image will not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," selected here directly. It's just a ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," template."),(0,i.kt)("p",{parentName:"admonition"},"Instead, it will create a special StorageClass under the hood with a prefix name of ",(0,i.kt)("inlineCode",{parentName:"p"},"longhorn-"),". This is automatically done by the Harvester backend, but it will inherit the parameters from the StorageClass you have selected.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(98077).Z,width:"2560",height:"1297"})),(0,i.kt)("h3",{id:"image-labels"},"Image Labels"),(0,i.kt)("p",null,"You can add labels to the image, which will help identify the OS type more accurately. Also, you can add any custom labels for filtering if needed."),(0,i.kt)("p",null,"If your image name or URL contains any valid information, the UI will automatically recognize the OS type and image category for you. If not, you can also manually specify those corresponding labels on the UI."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(47193).Z,width:"4382",height:"1498"})),(0,i.kt)("h3",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,"If you remove an image before the upload process is completed, the related Longhorn backing image may become stuck in the deletion state."),(0,i.kt)("p",null,"To determine if the issue has occurred, locate the backing image on the Dashboard screen of the ",(0,i.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"Longhorn UI"),". If the deletion state has lasted for more than 5 minutes, perform the following steps:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(53015).Z,width:"1903",height:"928"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the deletion state has lasted for more than 5 minutes."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ kubectl get backingimagedatasources.longhorn.io -A -o json | jq -r '.items[] | select(.metadata.deletionTimestamp != null) | .metadata.name + \" deleted at: \" + .metadata.deletionTimestamp '\n")),(0,i.kt)("p",{parentName:"li"},"Example:\n",(0,i.kt)("img",{src:t(96146).Z,width:"1921",height:"65"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the affected backing image data source."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n longhorn-system edit backingimagedatasources.longhorn.io <backingimagedatasource name>\n")),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n longhorn-system edit backingimagedatasources.longhorn.io default-ubuntu-bionic\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"finalizers")," metadata of the affected backing image data source."),(0,i.kt)("p",{parentName:"li"},"Example:\n",(0,i.kt)("img",{src:t(55426).Z,width:"1381",height:"435"}),"\nYou must delete ",(0,i.kt)("inlineCode",{parentName:"p"},"finalizers:")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"- longhorn.io"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The backing image should no longer be stuck in the deletion state."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Related issue:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/longhorn/longhorn/issues/6086"},"[BUG] Backing Image deletion stuck if it's deleted during uploading process and bids is ready-for-transfer state")))),(0,i.kt)("li",{parentName:"ul"},"Workaround:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4155#issuecomment-1738348596"},"https://github.com/harvester/harvester/issues/4155#issuecomment-1738348596"))))))}p.isMDXComponent=!0},96146:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/check-image-stuck-76418876ee3735d0c883214c89854d14.png"},53015:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/delete-image-stuck-ae02919609c05e41a8fc9f5b5b37fbf6.png"},55426:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/delete-stuck-image-finalizer-0ebd0ed961ceaddf71de421b43ac2d14.png"},47193:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/image-labels-d742377d68f63e01883436d86f3422e6.png"},98077:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/image-storageclass-4bbb0a3b3152e221f380b15b32ade5b1.png"},56113:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/upload-image-local-4a9a097f0a1cc582797a58411f0940a0.png"},51786:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/upload-image-400a8a7376f481a4347e81d134a80b89.png"},13300:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/export-volume-to-image-1-7eadd6b18692690838773948966a5836.png"}}]);