"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[98476],{71699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>o});a(67294);var r=a(3905);const n={id:"index",sidebar_position:1,sidebar_label:"Upgrading Harvester",title:"Upgrading Harvester",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI."},i=void 0,p={unversionedId:"upgrade/index",id:"version-v1.1/upgrade/index",title:"Upgrading Harvester",description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI.",source:"@site/versioned_docs/version-v1.1/upgrade/automatic.md",sourceDirName:"upgrade",slug:"/upgrade/index",permalink:"/v1.1/upgrade/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/upgrade/automatic.md",tags:[],version:"v1.1",lastUpdatedAt:1730967112,formattedLastUpdatedAt:"Nov 7, 2024",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Upgrading Harvester",title:"Upgrading Harvester",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI."},sidebar:"api",previous:{title:"Air Gapped Environment",permalink:"/v1.1/airgap"},next:{title:"Upgrade from v1.1.0/v1.1.1 to v1.1.2",permalink:"/v1.1/upgrade/v1-1-to-v1-1-2"}},s={},o=[{value:"Upgrade support matrix",id:"upgrade-support-matrix",level:2},{value:"Start an upgrade",id:"start-an-upgrade",level:2},{value:"Prepare an air-gapped upgrade",id:"prepare-an-air-gapped-upgrade",level:2}],l={toc:o},d="wrapper";function u({components:e,...t}){return(0,r.kt)(d,{...l,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/upgrade/automatic"})),(0,r.kt)("h2",{id:"upgrade-support-matrix"},"Upgrade support matrix"),(0,r.kt)("p",null,"The following table shows the upgrade path of all supported versions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Upgrade from version"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported new version(s)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.1/upgrade/v1-1-1-to-v1-1-3"},"v1.1.1/v1.1.2")),(0,r.kt)("td",{parentName:"tr",align:null},"v1.1.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.1/upgrade/v1-1-to-v1-1-2"},"v1.1.0, v1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"v1.1.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.1/upgrade/v1-0-3-to-v1-1-1"},"v1.0.3")),(0,r.kt)("td",{parentName:"tr",align:null},"v1.1.0, v1.1.1 (v1.1.1 is recommended)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.1/upgrade/previous-releases/v1-0-2-to-v1-0-3"},"v1.0.2")),(0,r.kt)("td",{parentName:"tr",align:null},"v1.0.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.1/upgrade/previous-releases/v1-0-1-to-v1-0-2"},"v1.0.1")),(0,r.kt)("td",{parentName:"tr",align:null},"v1.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/v1.1/upgrade/previous-releases/v1-0-0-to-v1-0-1"},"v1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"v1.0.1")))),(0,r.kt)("h2",{id:"start-an-upgrade"},"Start an upgrade"),(0,r.kt)("p",null,"Note we are still working towards zero-downtime upgrade, due to some known issues please follow the steps below before you upgrade your Harvester cluster:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Before you upgrade your Harvester cluster, we highly recommend:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For upgrading from v1.0.3 to v1.1.0/v1.1.1, please shut down all your VMs first (Harvester GUI -> Virtual Machines -> Select VMs -> Actions -> Stop). Check the ",(0,r.kt)("a",{parentName:"li",href:"/v1.1/upgrade/v1-0-3-to-v1-1-1#general-information"},"link")," for more information."),(0,r.kt)("li",{parentName:"ul"},"Back up your VMs if needed."))),(0,r.kt)("li",{parentName:"ul"},"Do not operate the cluster during an upgrade. For example, creating new VMs, uploading new images, etc."),(0,r.kt)("li",{parentName:"ul"},"Make sure your hardware meets the ",(0,r.kt)("strong",{parentName:"li"},"preferred")," ",(0,r.kt)("a",{parentName:"li",href:"/v1.1/install/requirements#hardware-requirements"},"hardware requirements"),". This is due to there will be intermediate resources consumed by an upgrade."),(0,r.kt)("li",{parentName:"ul"},"Make sure each node has at least 25 GB of free space (",(0,r.kt)("inlineCode",{parentName:"li"},"df -h /usr/local/"),")."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure all nodes' times are in sync. Using an NTP server to synchronize time is recommended. If an NTP server is not configured during the installation, you can manually add an NTP server ",(0,r.kt)("strong",{parentName:"p"},"on each node"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ sudo -i\n\n# Add time servers\n$ vim /etc/systemd/timesyncd.conf\n[ntp]\nNTP=0.pool.ntp.org\n\n# Enable and start the systemd-timesyncd\n$ timedatectl set-ntp true\n\n# Check status\n$ sudo timedatectl status\n"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"NICs that connect to a PCI bridge might be renamed after an upgrade. Please check the ",(0,r.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/nic-naming-scheme"},"knowledge base article")," for further information."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure to read the Warning paragraph at the top of this document first.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Harvester checks if there are new upgradable versions periodically. If there are new versions, an upgrade button shows up on the Dashboard page."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the cluster is in an air-gapped environment, please see ",(0,r.kt)("a",{parentName:"li",href:"#prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade")," section first. You can also speed up the ISO download by using the approach in that section."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Navigate to Harvester GUI and click the upgrade button on the Dashboard page."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:a(56955).Z,width:"1910",height:"812"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select a version to start upgrading."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:a(71052).Z,width:"1030",height:"598"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the circle on the top to display the upgrade progress.\n",(0,r.kt)("img",{src:a(11105).Z,width:"1910",height:"1124"})))),(0,r.kt)("h2",{id:"prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to check ",(0,r.kt)("a",{parentName:"p",href:"#upgrade-support-matrix"},"Upgrade support matrix")," section first about upgradable versions.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download a Harvester ISO file from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"release pages"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save the ISO to a local HTTP server. Assume the file is hosted at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://10.10.0.1/harvester.iso"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the version file from release pages, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester/{version}/version.yaml")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"isoURL")," value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"version.yaml")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n  name: v1.0.2\n  namespace: harvester-system\nspec:\n  isoChecksum: <SHA-512 checksum of the ISO> \n  isoURL: http://10.10.0.1/harvester.iso  # change to local ISO URL\n  releaseDate: '20220512'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Assume the file is hosted at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://10.10.0.1/version.yaml"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Log in to one of your control plane nodes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Become root and create a version:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"rancher@node1:~> sudo -i\nrancher@node1:~> kubectl create -f http://10.10.0.1/version.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An upgrade button should show up on the Harvester GUI Dashboard page."))))}u.isMDXComponent=!0},56955:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_button-cba6e7e3b12154a0c675fe149c719d4c.png"},11105:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_progress-9f571e740ff5c16d9fc0fc6518ee7b73.png"},71052:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_select_version-cee0dbf88994b0b636f3df5ed2e47ae4.png"}}]);