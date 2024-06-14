"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[71064],{62269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=a(87462),l=(a(67294),a(3905));const n={id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},o=void 0,i={unversionedId:"volume/index",id:"version-v1.1/volume/index",title:"Create a Volume",description:"Create a volume from the Volume page.",source:"@site/versioned_docs/version-v1.1/volume/create-volume.md",sourceDirName:"volume",slug:"/volume/index",permalink:"/v1.1/volume/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/volume/create-volume.md",tags:[],version:"v1.1",lastUpdatedAt:1718330763,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},sidebar:"api",previous:{title:"Clone VM",permalink:"/v1.1/vm/clone-vm"},next:{title:"Edit a Volume",permalink:"/v1.1/volume/edit-volume"}},s={},m=[{value:"Create an Empty Volume",id:"create-an-empty-volume",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Basics Tab",id:"basics-tab",level:3},{value:"Create an Image Volume",id:"create-an-image-volume",level:2},{value:"Header Section",id:"header-section-1",level:3},{value:"Basics Tab",id:"basics-tab-1",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"The Volumes page does not show the created volume",id:"the-volumes-page-does-not-show-the-created-volume",level:3},{value:"Summary",id:"summary",level:4},{value:"Workaround",id:"workaround",level:4}],u={toc:m},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/create-volume"})),(0,l.kt)("h2",{id:"create-an-empty-volume"},"Create an Empty Volume"),(0,l.kt)("h3",{id:"header-section"},"Header Section"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Set the Volume ",(0,l.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,l.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,l.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,l.kt)("h3",{id:"basics-tab"},"Basics Tab"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Choose ",(0,l.kt)("inlineCode",{parentName:"li"},"New")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,l.kt)("li",{parentName:"ol"},"Select an existing ",(0,l.kt)("inlineCode",{parentName:"li"},"StorageClass"),"."),(0,l.kt)("li",{parentName:"ol"},"Configure the ",(0,l.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"create-empty-volume",src:a(78934).Z,width:"2560",height:"726"})),(0,l.kt)("h2",{id:"create-an-image-volume"},"Create an Image Volume"),(0,l.kt)("h3",{id:"header-section-1"},"Header Section"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Set the Volume ",(0,l.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,l.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,l.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,l.kt)("h3",{id:"basics-tab-1"},"Basics Tab"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Choose ",(0,l.kt)("inlineCode",{parentName:"li"},"VM Image")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,l.kt)("li",{parentName:"ol"},"Select an existing ",(0,l.kt)("inlineCode",{parentName:"li"},"Image"),"."),(0,l.kt)("li",{parentName:"ol"},"Configure the ",(0,l.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"create-image-volume",src:a(18049).Z,width:"2560",height:"726"})),(0,l.kt)("h2",{id:"known-issues"},"Known Issues"),(0,l.kt)("h3",{id:"the-volumes-page-does-not-show-the-created-volume"},"The Volumes page does not show the created volume"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Issue"),(0,l.kt)("th",{parentName:"tr",align:null},"Affected versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Last updated"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/issues/3874"},"The Volumes page does not show the created volume")),(0,l.kt)("td",{parentName:"tr",align:null},"Harvester v1.1.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Resolved (Harvester > v1.1.2)"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-07-28")))),(0,l.kt)("h4",{id:"summary"},"Summary"),(0,l.kt)("p",null,"After creating a volume when using Harvester from Rancher, users with the project role ",(0,l.kt)("strong",{parentName:"p"},"Project Member")," cannot find the newly created volume on the ",(0,l.kt)("strong",{parentName:"p"},"Volumes")," page."),(0,l.kt)("h4",{id:"workaround"},"Workaround"),(0,l.kt)("p",null,"You can temporarily change the Harvester plugin version to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/harvester/dashboard/releases/tag/v1.1.2-patch1"},"v1.2.1-patch1")," from the Harvester UI."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("strong",{parentName:"li"},"Advanced")," > ",(0,l.kt)("strong",{parentName:"li"},"Settings")," page. Find  the ",(0,l.kt)("strong",{parentName:"li"},"ui-plugin-index")," and select ",(0,l.kt)("strong",{parentName:"li"},"\u22ee"),"  > ",(0,l.kt)("strong",{parentName:"li"},"Edit Setting"),"."),(0,l.kt)("li",{parentName:"ol"},"Change the ",(0,l.kt)("strong",{parentName:"li"},"Value")," to ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://releases.rancher.com/harvester-ui/plugin/harvester-release-harvester-v1.1.2-patch1/harvester-release-harvester-v1.1.2-patch1.umd.min.js"},"https://releases.rancher.com/harvester-ui/plugin/harvester-release-harvester-v1.1.2-patch1/harvester-release-harvester-v1.1.2-patch1.umd.min.js")),"."),(0,l.kt)("li",{parentName:"ol"},"On the ",(0,l.kt)("strong",{parentName:"li"},"Settings")," page, find ",(0,l.kt)("strong",{parentName:"li"},"ui-source")," and select ",(0,l.kt)("strong",{parentName:"li"},"\u22ee"),"  > ",(0,l.kt)("strong",{parentName:"li"},"Edit Setting"),"."),(0,l.kt)("li",{parentName:"ol"},"Change the ",(0,l.kt)("strong",{parentName:"li"},"Value")," to ",(0,l.kt)("strong",{parentName:"li"},"External")," to use an external UI source."),(0,l.kt)("li",{parentName:"ol"},"Log in again as a ",(0,l.kt)("strong",{parentName:"li"},"Project Member")," user in Rancher to view the newly created volume for your Harvester cluster.")))}p.isMDXComponent=!0},78934:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-empty-volume-e64eb8d677034412d1b394dda137a8ad.png"},18049:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-image-volume-ad01408a1eaa69454a211039f3de6c36.png"}}]);