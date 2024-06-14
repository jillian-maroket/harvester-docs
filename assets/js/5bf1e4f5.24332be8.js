"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7212],{79599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const i={sidebar_position:2,sidebar_label:"Edit a Volume",title:"Edit a Volume",keywords:["Volume"],description:"Edit volume from the Volume page."},l=void 0,d={unversionedId:"volume/edit-volume",id:"version-v1.1/volume/edit-volume",title:"Edit a Volume",description:"Edit volume from the Volume page.",source:"@site/versioned_docs/version-v1.1/volume/edit-volume.md",sourceDirName:"volume",slug:"/volume/edit-volume",permalink:"/v1.1/volume/edit-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/volume/edit-volume.md",tags:[],version:"v1.1",lastUpdatedAt:1718330763,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Edit a Volume",title:"Edit a Volume",keywords:["Volume"],description:"Edit volume from the Volume page."},sidebar:"api",previous:{title:"Create a Volume",permalink:"/v1.1/volume/index"},next:{title:"Clone a Volume",permalink:"/v1.1/volume/clone-volume"}},s={},u=[{value:"Expand a Volume",id:"expand-a-volume",level:2},{value:"Cancel a Failed Volume Expansion",id:"cancel-a-failed-volume-expansion",level:2}],m={toc:u},r="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(r,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/edit-volume"})),(0,n.kt)("p",null,"After creating a volume, you can edit your volume by clicking the ",(0,n.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit Config")," option."),(0,n.kt)("h2",{id:"expand-a-volume"},"Expand a Volume"),(0,n.kt)("p",null,"You can expand a volume by increasing the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Size")," parameter directly.\nTo prevent the expansion from interference by unexpected data R/W, Harvester supports ",(0,n.kt)("inlineCode",{parentName:"p"},"offline")," expansion only. You must shut down the VM or detach the volume first if it is attached to a VM, and the detached volume will automatically attach to a random node with ",(0,n.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/concepts/#22-reverting-volumes-in-maintenance-mode"},"maintenance mode")," to expand automatically."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"expand-volume",src:a(99610).Z,width:"2560",height:"726"})),(0,n.kt)("h2",{id:"cancel-a-failed-volume-expansion"},"Cancel a Failed Volume Expansion"),(0,n.kt)("p",null,"If you specify a size larger than Longhorn's capacity during the expansion, the status of the volume expansion will be stuck in ",(0,n.kt)("inlineCode",{parentName:"p"},"Resizing"),". You can cancel the failed volume expansion by clicking the ",(0,n.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cancel Expand")," option."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cancel-failed-volume-expansion",src:a(2672).Z,width:"2560",height:"726"})))}p.isMDXComponent=!0},2672:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cancel-failed-volume-expansion-39ce92d8d4d2799a0090bf55d881ce42.png"},99610:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/expand-volume-b38ef393e5cea149fd57193a6192bc53.png"}}]);