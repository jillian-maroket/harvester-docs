"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[49372],{649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});a(67294);var n=a(3905);const s={sidebar_position:7,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],description:"The Harvester provides a virtual IP as the management address."},r=void 0,o={unversionedId:"install/management-address",id:"version-v1.1/install/management-address",title:"Management Address",description:"The Harvester provides a virtual IP as the management address.",source:"@site/versioned_docs/version-v1.1/install/management-address.md",sourceDirName:"install",slug:"/install/management-address",permalink:"/v1.1/install/management-address",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/install/management-address.md",tags:[],version:"v1.1",lastUpdatedAt:1722560913,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],description:"The Harvester provides a virtual IP as the management address."},sidebar:"api",previous:{title:"Update Harvester Configuration",permalink:"/v1.1/install/update-harvester-configuration"},next:{title:"Air Gapped Environment",permalink:"/v1.1/airgap"}},i={},d=[{value:"Requirements",id:"requirements",level:2},{value:"How to get the VIP MAC address",id:"how-to-get-the-vip-mac-address",level:2},{value:"Identifying the Node the VIP Is Assigned To",id:"identifying-the-node-the-vip-is-assigned-to",level:2},{value:"Usages",id:"usages",level:2}],l={toc:d},m="wrapper";function u({components:e,...t}){return(0,n.kt)(m,{...l,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/management-address"})),(0,n.kt)("p",null,"Harvester provides a fixed virtual IP (VIP) as the management address, VIP must be different from any Node IP.  You can find the management address on the console dashboard after the installation."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you selected the IP address to be configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(99890).Z,width:"2206",height:"1318"})),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The VIP and the node management interfaces must belong to the same subnet."),(0,n.kt)("li",{parentName:"ul"},"All Harvester node management interfaces must be on the same layer-2 network segment.")),(0,n.kt)("p",null,"Both are required because the VIP relies on the Address Resolution Protocol (ARP), which is a layer-2 protocol."),(0,n.kt)("p",null,"The VIP can be assigned to any Harvester node management interface and can change at any time (not only when node failure occurs). When the VIP changes hosts, ",(0,n.kt)("em",{parentName:"p"},"gratuitous ARPs")," are sent so that other hosts on the network know where to direct traffic intended for the Harvester cluster's management IP address (the VIP)."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},'If you plan to host a Harvester cluster in a bare metal data center, the service provider will likely designate a "floating" or "reserved" IP address as the VIP that you can assign to one of your servers. Updating this assignment causes traffic to instantly start flowing to the new node it is assigned to. In these situations, Harvester is unable to update the floating/reserved IP assignment in your provider\'s systems when the VIP changes hosts.'),(0,n.kt)("p",{parentName:"admonition"},"Furthermore, the VIP's \"gratuitous ARPs\" may also be ineffective depending on your provider's networking setup between your Harvester nodes (for example, if your Harvester hosts are not on the same layer-2 network). You must update the floating/reserved IP assignment manually when the VIP changes hosts to ensure that the cluster functions properly. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"#finding-which-node-the-vip-is-on"},"Finding which node the VIP is on"),".")),(0,n.kt)("h2",{id:"how-to-get-the-vip-mac-address"},"How to get the VIP MAC address"),(0,n.kt)("p",null,"To get the VIP MAC address, you can run the following command on the management node:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get svc -n kube-system ingress-expose -ojsonpath='{.metadata.annotations}'\n")),(0,n.kt)("p",null,"Example of output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"kube-vip.io/hwaddr":"02:00:00:09:7f:3f","kube-vip.io/requestedIP":"10.84.102.31"}\n')),(0,n.kt)("h2",{id:"identifying-the-node-the-vip-is-assigned-to"},"Identifying the Node the VIP Is Assigned To"),(0,n.kt)("p",null,"You can use kubectl (either on your local machine with the Harvester kubeconfig file, or when using SSH to connect to any Harvester management node as a root user)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"kubectl -n kube-system get svc ingress-expose -o jsonpath='{.metadata.annotations.kube-vip\\.io/vipHost}'\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"harvester-xzj76\n")),(0,n.kt)("p",null,"Alternatively, you can use SSH to connect to each Harvester management node and then run the command ",(0,n.kt)("inlineCode",{parentName:"p"},"ip address show mgmt-br"),"."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"harvester-xzj76:~ # ip address show mgmt-br\n4: mgmt-br: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000\n    link/ether 8c:dc:d4:b5:f0:fd brd ff:ff:ff:ff:ff:ff\n    inet 172.19.108.45/21 brd 172.19.111.255 scope global mgmt-br\n       valid_lft forever preferred_lft forever\n    inet 172.19.108.34/32 scope global mgmt-br\n       valid_lft forever preferred_lft forever\n")),(0,n.kt)("p",null,"When the output includes both the VIP and the node address, the VIP is assigned to the node that you are connected to."),(0,n.kt)("h2",{id:"usages"},"Usages"),(0,n.kt)("p",null,"The management address has two usages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows the access to the Harvester API/UI via ",(0,n.kt)("inlineCode",{parentName:"li"},"HTTPS")," protocol."),(0,n.kt)("li",{parentName:"ul"},"Is the address the other nodes use to join the cluster.\n",(0,n.kt)("img",{src:a(19858).Z,width:"1207",height:"339"}))))}u.isMDXComponent=!0},19858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/configure-management-address-43ff76d24277f42606a4ad31cea2464b.png"},99890:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iso-installed-ca81548526586a3a91f835b969886c30.png"}}]);