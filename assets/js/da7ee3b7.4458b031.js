"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[39894],{28362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});a(67294);var n=a(3905);const r={sidebar_position:4,sidebar_label:"Harvester Seeder",title:"Harvester Seeder",keywords:["add-on","addon","out-of-band","harvester-seeder","Seeder"],Description:"Perform out-of-band operations on Harvester hosts via IPMI and discover hardware events via Redfish"},s=void 0,o={unversionedId:"advanced/addons/seeder",id:"version-v1.2/advanced/addons/seeder",title:"Harvester Seeder",description:"The harvester-seeder add-on allows you to perform out-of-band operations on Harvester hosts using the Intelligent Platform Management Interface (IPMI).",source:"@site/versioned_docs/version-v1.2/advanced/addons/seeder.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/seeder",permalink:"/v1.2/advanced/addons/seeder",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/advanced/addons/seeder.md",tags:[],version:"v1.2",lastUpdatedAt:1730967112,formattedLastUpdatedAt:"Nov 7, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Seeder",title:"Harvester Seeder",keywords:["add-on","addon","out-of-band","harvester-seeder","Seeder"],Description:"Perform out-of-band operations on Harvester hosts via IPMI and discover hardware events via Redfish"},sidebar:"api",previous:{title:"VM Import",permalink:"/v1.2/advanced/addons/vmimport"},next:{title:"Rancher Manager",permalink:"/v1.2/advanced/addons/rancher-vcluster"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable the Add-On and Configure Hosts",id:"enable-the-add-on-and-configure-hosts",level:2},{value:"Power-Related Operations",id:"power-related-operations",level:2},{value:"Hardware Event Aggregation",id:"hardware-event-aggregation",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],l={toc:d},p="wrapper";function h({components:e,...t}){return(0,n.kt)(p,{...l,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/advanced/seeder"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"harvester-seeder")," add-on allows you to perform out-of-band operations on Harvester hosts using the Intelligent Platform Management Interface (IPMI)."),(0,n.kt)("p",null,"This add-on can also discover hardware and related events for hosts that support ",(0,n.kt)("a",{parentName:"p",href:"https://www.dmtf.org/standards/redfish"},"Redfish"),"-based access, and then associate that hardware with the corresponding hosts."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Ensure that the following requirements are met before enabling the add-on."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"IPMI access is enabled on the hosts, and your user account has the necessary privileges for performing related operations."),(0,n.kt)("p",{parentName:"li"},"  If you are using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ipmitool/ipmitool"},"ipmitool"),", you can run ",(0,n.kt)("inlineCode",{parentName:"p"},"ipmitool -I lanplus -H iloOriDracIPAddress -U admin -P admin sel list")," to verify that both requirements are met.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Redfish is enabled."),(0,n.kt)("p",{parentName:"li"},"  You can run ",(0,n.kt)("inlineCode",{parentName:"p"},"curl -vk https://iloOriDracIPAddress/redfish/v1")," to verify that Redfish is enabled.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ports 443 and 623 are reachable."),(0,n.kt)("p",{parentName:"li"},"  Some IPMI implementations allow you to access devices using a web interface on port 443. However, IPMI devices are more commonly accessed using a command-line interface on UDP port 623 (IPMI over IP).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alerts are enabled on the hosts."),(0,n.kt)("p",{parentName:"li"},"  Some hardware vendors may require that you enable alerts."))),(0,n.kt)("h2",{id:"enable-the-add-on-and-configure-hosts"},"Enable the Add-On and Configure Hosts"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to ",(0,n.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,n.kt)("strong",{parentName:"p"},"Addons"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"harvester-seeder"),", and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Enable"),"."),(0,n.kt)("p",{parentName:"li"},"After a few seconds, the value of ",(0,n.kt)("strong",{parentName:"p"},"State")," changes to ",(0,n.kt)("strong",{parentName:"p"},"DeploySuccessful"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(21161).Z,width:"1039",height:"577"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Hosts")," screen."),(0,n.kt)("p",{parentName:"li"},"You must edit the configuration of each host listed on this screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a host, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Edit Config"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(30091).Z,width:"1250",height:"544"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Out-of-Band Access")," tab, select ",(0,n.kt)("strong",{parentName:"p"},"Enabled"),", configure the settings, and then select ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."),(0,n.kt)("p",{parentName:"li"},"The add-on uses the information to connect to your IPMI interface."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(91756).Z,width:"1271",height:"682"})))),(0,n.kt)("h2",{id:"power-related-operations"},"Power-Related Operations"),(0,n.kt)("p",null,"You can use the Harvester UI to shut down and reboot hosts once the Out-of-Band Access settings are configured. However, you must first enable ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/host/#node-maintenance"},"Maintenance Mode"),", which automatically migrates all VMs to other nodes. ",(0,n.kt)("strong",{parentName:"p"},"harvester-seeder")," communicates with the hosts via IPMI when performing the selected operation."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(84311).Z,width:"1179",height:"381"})),(0,n.kt)("p",null,"You can also power on VMs while Maintenance Mode is enabled."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(98218).Z,width:"1175",height:"222"})),(0,n.kt)("h2",{id:"hardware-event-aggregation"},"Hardware Event Aggregation"),(0,n.kt)("p",null,"If you selected ",(0,n.kt)("strong",{parentName:"p"},"Enabled")," in the ",(0,n.kt)("strong",{parentName:"p"},"Event")," section of the ",(0,n.kt)("strong",{parentName:"p"},"Out-of-Band Access")," settings screen, ",(0,n.kt)("strong",{parentName:"p"},"harvester-seeder")," leverages Redfish to query the hardware for information about component failures and fan temperatures. The information is converted to Kubernetes events during hardware reconciliation and is subsequently handled by the Kubernetes garbage collection policy. Harvester stores these events for 1 hour by default."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(64184).Z,width:"1111",height:"263"})),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Out-of-Band Access")," settings screen may become unresponsive and display the message ",(0,n.kt)("inlineCode",{parentName:"p"},'Waiting for "inventories.metal.harvesterhci.io" to be ready'),". You must refresh the page whenever this occurs. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/4412"},"Issue #4412"),"."),(0,n.kt)("p",null,"If you encounter persistent issues while using ",(0,n.kt)("strong",{parentName:"p"},"harvester-seeder"),", submit the following to SUSE Support:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support bundle"),(0,n.kt)("li",{parentName:"ul"},"Output of the command ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl get machine -n harvester-system -o yaml"))))}h.isMDXComponent=!0},30091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EditConfig-a6417b75728e54327ffa1be2e408e461.png"},64184:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HardwareEvents-cc0c8422f453b4bf923129d8db896f09.png"},91756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OutOfBandAccess-5cc330e566556c72ae97b290fd0a165a.png"},98218:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PowerOn-0fe7143d3be8a1c57ecc883db2500e30.png"},84311:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ShutdownReboot-e83fae9ea2bbfcbb7bfd2b1487afb2e1.png"},21161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"}}]);