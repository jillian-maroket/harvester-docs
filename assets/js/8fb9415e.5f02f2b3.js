"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[93460],{23233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>i});r(67294);var s=r(3905);const a={title:"Glossary",sidebar_label:"Glossary",keywords:["Harvester","glossary","terminology"]},n=void 0,o={unversionedId:"glossary",id:"version-v0.3/glossary",title:"Glossary",description:"guest cluster / guest Kubernetes cluster",source:"@site/versioned_docs/version-v0.3/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/v0.3/glossary",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/glossary.md",tags:[],version:"v0.3",lastUpdatedAt:1731302481,formattedLastUpdatedAt:"Nov 11, 2024",frontMatter:{title:"Glossary",sidebar_label:"Glossary",keywords:["Harvester","glossary","terminology"]},sidebar:"api",previous:{title:"FAQ",permalink:"/v0.3/faq"}},l={},i=[{value:"<strong>guest cluster</strong> / <strong>guest Kubernetes cluster</strong>",id:"guest-cluster--guest-kubernetes-cluster",level:2},{value:"<strong>guest node</strong> / <strong>guest cluster node</strong>",id:"guest-node--guest-cluster-node",level:2},{value:"<strong>Harvester cluster</strong>",id:"harvester-cluster",level:2},{value:"<strong>Harvester hypervisor</strong>",id:"harvester-hypervisor",level:2},{value:"<strong>Harvester node</strong>",id:"harvester-node",level:2},{value:"<strong>Harvester Node Driver</strong>",id:"harvester-node-driver",level:2}],u={toc:i},d="wrapper";function c({components:e,...t}){return(0,s.kt)(d,{...u,...t,components:e,mdxType:"MDXLayout"},(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/glossary"})),(0,s.kt)("h2",{id:"guest-cluster--guest-kubernetes-cluster"},(0,s.kt)("strong",{parentName:"h2"},"guest cluster")," / ",(0,s.kt)("strong",{parentName:"h2"},"guest Kubernetes cluster")),(0,s.kt)("p",null,"Group of integrated Kubernetes worker machines that run in VMs on top of a Harvester cluster. "),(0,s.kt)("p",null,"You can create RKE1, RKE2, and K3s guest clusters using the Harvester and Rancher interfaces. Creating guest clusters involves pulling images from either the internet or a private registry."),(0,s.kt)("p",null,"Guest clusters form the main infrastructure for running container workloads. Certain versions of Harvester and Rancher allow you to deploy container workloads ",(0,s.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/rancher/rancher-integration#harvester-baremetal-container-workload-support-experimental"},"directly to Harvester clusters")," (with some limitations)."),(0,s.kt)("h2",{id:"guest-node--guest-cluster-node"},(0,s.kt)("strong",{parentName:"h2"},"guest node")," / ",(0,s.kt)("strong",{parentName:"h2"},"guest cluster node")),(0,s.kt)("p",null,"Kubernetes worker VM that uses guest cluster resources to run container workloads. "),(0,s.kt)("p",null,"Guest nodes are managed through a control plane that controls pod-related activity and maintains the desired cluster state."),(0,s.kt)("h2",{id:"harvester-cluster"},(0,s.kt)("strong",{parentName:"h2"},"Harvester cluster")),(0,s.kt)("p",null,"Group of integrated physical servers (hosts) on which the Harvester hypervisor is installed. These servers collectively manage compute, memory, and storage resources to provide an environment for running VMs."),(0,s.kt)("p",null,"A three-node cluster is required to fully realize the multi-node features of Harvester, particularly high availability. Certain versions of Harvester allow you to create clusters with two management nodes and one ",(0,s.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/advanced/witness"},"witness node")," (and optionally, one or more worker nodes). You can also create ",(0,s.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/advanced/singlenodeclusters"},"single-node clusters")," that support most Harvester features (excluding high availability, multi-replica support, and live migration)."),(0,s.kt)("p",null,'Harvester clusters can be imported into and managed by Rancher. Within the Rancher context, an imported Harvester cluster is known as a "managed cluster" or "downstream user cluster" (often abbreviated to "downstream cluster"). The Rancher term refers to any Kubernetes cluster that is connected to a Rancher server.'),(0,s.kt)("p",null,"Certain versions of Harvester and Rancher allow you to deploy container workloads directly to Harvester clusters (with some limitations). When this ",(0,s.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/rancher/rancher-integration#harvester-baremetal-container-workload-support-experimental"},"experimental feature")," is enabled, container workloads seamlessly interact with VM workloads."),(0,s.kt)("h2",{id:"harvester-hypervisor"},(0,s.kt)("strong",{parentName:"h2"},"Harvester hypervisor")),(0,s.kt)("p",null,"Specialized operating system and ",(0,s.kt)("a",{parentName:"p",href:"./#harvester-architecture"},"software stack")," that runs on a single physical server."),(0,s.kt)("h2",{id:"harvester-node"},(0,s.kt)("strong",{parentName:"h2"},"Harvester node")),(0,s.kt)("p",null,"Physical server on which the Harvester hypervisor is installed. "),(0,s.kt)("p",null,"Each node that joins a Harvester cluster must be assigned a ",(0,s.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/host/#role-management"},"role")," that determines the functions the node can perform within the cluster. All Harvester nodes process data but not all can store data."),(0,s.kt)("h2",{id:"harvester-node-driver"},(0,s.kt)("strong",{parentName:"h2"},"Harvester Node Driver")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"./rancher/node/node-driver"},"Driver")," that Rancher uses to provision VMs in a Harvester cluster, and to launch and manage guest Kubernetes clusters on top of those VMs."))}c.isMDXComponent=!0}}]);