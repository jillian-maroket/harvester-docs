"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[61072],{65511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});n(67294);var a=n(3905);const r={sidebar_position:3,sidebar_label:"Harvester Network Deep Dive",title:"Harvester Network Deep Dive",keywords:["Harvester","Networking","Topology"]},o=void 0,i={unversionedId:"networking/deep-dive",id:"version-v1.3/networking/deep-dive",title:"Harvester Network Deep Dive",description:"The network topology below reveals how we implement the Harvester network.",source:"@site/versioned_docs/version-v1.3/networking/deep-dive.md",sourceDirName:"networking",slug:"/networking/deep-dive",permalink:"/v1.3/networking/deep-dive",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/networking/deep-dive.md",tags:[],version:"v1.3",lastUpdatedAt:1722560913,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Harvester Network Deep Dive",title:"Harvester Network Deep Dive",keywords:["Harvester","Networking","Topology"]},sidebar:"api",previous:{title:"VM Network",permalink:"/v1.3/networking/harvester-network"},next:{title:"Load Balancer",permalink:"/v1.3/networking/loadbalancer"}},l={},s=[{value:"KubeVirt Networking",id:"kubevirt-networking",level:2},{value:"Harvester Networking",id:"harvester-networking",level:2},{value:"Bridge Network",id:"bridge-network",level:3},{value:"Management Network",id:"management-network",level:3},{value:"External Networking",id:"external-networking",level:2}],d={toc:s},p="wrapper";function k({components:e,...t}){return(0,a.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/networking/deep-dive"})),(0,a.kt)("p",null,"The network topology below reveals how we implement the Harvester network."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(77344).Z,width:"1175",height:"660"})),(0,a.kt)("p",null,"The diagram contains ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/networking/index#built-in-cluster-network"},"the built-in cluster network mgmt")," and a ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/networking/index#custom-cluster-network"},"custom cluster network")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"oob"),"."),(0,a.kt)("p",null,"As shown above, the Harvester network primarily focuses on OSI model layer 2. We leverage Linux network devices and protocols to construct traffic paths for the communication between VM to VM, VM to host, and VM to external network devices."),(0,a.kt)("p",null,"The Harvester network is composed of three layers, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"KubeVirt networking layer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Harvester networking layer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"External networking layer"))),(0,a.kt)("h2",{id:"kubevirt-networking"},"KubeVirt Networking"),(0,a.kt)("p",null,"The general purpose of KubeVirt is to run VM inside the Kubernetes pod. The KubeVirt network builds the network path between the pod and VM.\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubevirt.io/2018/KubeVirt-Network-Deep-Dive.html"},"KubeVirt official document")," for more details."),(0,a.kt)("h2",{id:"harvester-networking"},"Harvester Networking"),(0,a.kt)("p",null,"Harvester networking is designed to build the network path between pods and the host network. It implements a management network, VLAN networks and untagged networks. We can refer to the last two networks as ",(0,a.kt)("strong",{parentName:"p"},"bridge networks"),", because bridge plays a vital role in their implementation."),(0,a.kt)("h3",{id:"bridge-network"},"Bridge Network"),(0,a.kt)("p",null,"We leverage ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus CNI")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge CNI")," to implement the bridge network."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Multus CNI is a Container Network Interface (CNI) plugin for Kubernetes that can attach multiple network interfaces to a pod. Its capability allows a VM to have one NIC for the management network and multiple NICs for the bridge network.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using the bridge CNI, the VM pod will be plugged into the L2 bridge specified in the Network Attachment Definition config."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# Example 1\n{\n    "cniVersion": "0.3.1",\n    "name": "vlan100",\n    "type": "bridge",\n    "bridge": "mgmt-br",\n    "promiscMode": true,\n    "vlan": 100,\n}\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# Example 2\n{\n    "cniVersion": "0.3.1",\n    "name": "untagged-network",\n    "type": "bridge",\n    "bridge": "oob-br",\n    "promiscMode": true,\n    "ipam": {}\n}\n')),(0,a.kt)("p",{parentName:"li"},"Example 1 is a typical VLAN configuration with VLAN ID 100, while Example 2 is an untagged network configuration with no VLAN ID. The VM pod configured using Example 1 will be plugged into the bridge ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br"),", while the VM pod using Example 2 will be plugged into the bridge ",(0,a.kt)("inlineCode",{parentName:"p"},"oob-br"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To achieve high availability and fault tolerance, a bond device where the real NICs are bound is created to serve as the uplink of the bridge. By default, this bond device will allow the target tagged traffic/packets to pass through."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"harvester-0:/home/rancher # bridge -c vlan show dev oob-bo\nport       vlan ids\noob-bo     1 PVID Egress Untagged\n           100\n           200\n")),(0,a.kt)("p",{parentName:"li"},"The example above shows that the bond ",(0,a.kt)("inlineCode",{parentName:"p"},"oob-bo")," allows packages with tag 1, 100 or 200."))),(0,a.kt)("h3",{id:"management-network"},"Management Network"),(0,a.kt)("p",null,"The management network is based on ",(0,a.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/flannel/flannel"},"Canal"),"."),(0,a.kt)("p",null,"It is worth mentioning that the Canal interface where the Harvester configures the node IP is the bridge ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br")," or a VLAN sub-interface of ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br"),". This design has two benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The built-in ",(0,a.kt)("inlineCode",{parentName:"li"},"mgmt")," cluster network supports both the management network and bridge network."),(0,a.kt)("li",{parentName:"ul"},"With the VLAN network interface, we can assign a VLAN ID to the management network.")),(0,a.kt)("p",null,"As components of the mgmt cluster network, it's not allowed to delete or modify the bridge mgmt-br, the bond mgmt-bo and the VLAN device."),(0,a.kt)("h2",{id:"external-networking"},"External Networking"),(0,a.kt)("p",null,"External network devices typically refer to switches and DHCP servers. With a cluster network, we can group host NICs and connect them to different switches for traffic isolation. Below are some usage instructions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To allow tagged packets to pass, you need to set the port type of the external switch or other devices (such as a DHCP server) to trunk or hybrid mode and allow the specified VLAN tag.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You need to configure link aggregation on the switch based on the bond mode of the peer host. Link aggregation can work in manual mode or LACP mode. The following lists the correspondence between bond mode and link aggregation mode."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bond Mode"),(0,a.kt)("th",{parentName:"tr",align:null},"Link Aggregation Mode"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 0(balance-rr)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 1(active-backup)"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mdoe 2(balance-oxr)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 3(broadcast)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 4(802.3ad)"),(0,a.kt)("td",{parentName:"tr",align:null},"LACP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 5(balance-tlb)"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 6(balance-alb)"),(0,a.kt)("td",{parentName:"tr",align:null},"none"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you want VMs in a VLAN to be able to obtain IP addresses through the DHCP protocol, configure an IP pool for that VLAN in the DHCP server."))))}k.isMDXComponent=!0},77344:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/topology-92ab59d983544bad738764a2105c9a06.png"}}]);