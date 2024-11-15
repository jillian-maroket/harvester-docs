"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[86404],{38046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});a(67294);var s=a(3905);const o={sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},n=void 0,r={unversionedId:"faq",id:"version-v1.0/faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester.",source:"@site/versioned_docs/version-v1.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/v1.0/faq",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/faq.md",tags:[],version:"v1.0",lastUpdatedAt:1731302481,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:17,frontMatter:{sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},sidebar:"api",previous:{title:"Monitoring",permalink:"/v1.0/troubleshooting/monitoring"},next:{title:"Glossary",permalink:"/v1.0/glossary"}},i={},l=[{value:"How can I ssh login to the Harvester node?",id:"how-can-i-ssh-login-to-the-harvester-node",level:3},{value:"What is the default login username and password of the Harvester dashboard?",id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard",level:3},{value:"How can I access the kubeconfig file of the Harvester cluster?",id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster",level:3},{value:"How to install the qemu-guest-agent of a running VM?",id:"how-to-install-the-qemu-guest-agent-of-a-running-vm",level:3},{value:"How can I reset the administrator password?",id:"how-can-i-reset-the-administrator-password",level:3}],d={toc:l},h="wrapper";function c({components:e,...t}){return(0,s.kt)(h,{...d,...t,components:e,mdxType:"MDXLayout"},(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/faq"})),(0,s.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester."),(0,s.kt)("h3",{id:"how-can-i-ssh-login-to-the-harvester-node"},"How can I ssh login to the Harvester node?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh rancher@node-ip\n")),(0,s.kt)("h3",{id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard"},"What is the default login username and password of the Harvester dashboard?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"username: admin\npassword: # you will be promoted to set the default password when logging in for the first time\n")),(0,s.kt)("h3",{id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster"},"How can I access the kubeconfig file of the Harvester cluster?"),(0,s.kt)("p",null,"Option 1. You can download the kubeconfig file from the support page of the Harvester dashboard.\n",(0,s.kt)("img",{alt:"harvester-kubeconfig.png",src:a(74166).Z,width:"2866",height:"1246"})),(0,s.kt)("p",null,"Option 2. You can get the kubeconfig file from one of the Harvester management nodes. E.g.,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo su\n$ cat /etc/rancher/rke2/rke2.yaml\n")),(0,s.kt)("h3",{id:"how-to-install-the-qemu-guest-agent-of-a-running-vm"},"How to install the qemu-guest-agent of a running VM?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# cloud-init will only be executed once, reboot it after add the cloud-init config with the following command.\n$ cloud-init clean --logs --reboot\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean"},"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean")),(0,s.kt)("h3",{id:"how-can-i-reset-the-administrator-password"},"How can I reset the administrator password?"),(0,s.kt)("p",null,"In case you forget the administrator password, you can reset it via the command line. SSH to one of the management node and run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# switch to root and run\n$ kubectl  -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")))}c.isMDXComponent=!0},74166:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/harvester-kubeconfig-766a36ec753411c89d93b986cb5b9cdb.png"}}]);