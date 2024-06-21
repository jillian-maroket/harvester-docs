"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[55336],{17050:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});a(67294);var r=a(3905);const s={id:"faq",sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},n=void 0,o={unversionedId:"faq",id:"version-v1.2/faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester.",source:"@site/versioned_docs/version-v1.2/faq.md",sourceDirName:".",slug:"/faq",permalink:"/v1.2/faq",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/faq.md",tags:[],version:"v1.2",lastUpdatedAt:1718703512,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:17,frontMatter:{id:"faq",sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},sidebar:"api",previous:{title:"VM",permalink:"/v1.2/troubleshooting/vm"},next:{title:"Introduction",permalink:"/v1.2/api/harvester-apis"}},i={},l=[{value:"How can I ssh login to the Harvester node?",id:"how-can-i-ssh-login-to-the-harvester-node",level:3},{value:"What is the default login username and password of the Harvester dashboard?",id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard",level:3},{value:"How can I access the kubeconfig file of the Harvester cluster?",id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster",level:3},{value:"How to install the qemu-guest-agent of a running VM?",id:"how-to-install-the-qemu-guest-agent-of-a-running-vm",level:3},{value:"How can I reset the administrator password?",id:"how-can-i-reset-the-administrator-password",level:3},{value:"I added an additional disk with partitions. Why is it not getting detected?",id:"i-added-an-additional-disk-with-partitions-why-is-it-not-getting-detected",level:3},{value:"Why are there some Harvester pods that become ErrImagePull/ImagePullBackOff?",id:"why-are-there-some-harvester-pods-that-become-errimagepullimagepullbackoff",level:3}],d={toc:l},h="wrapper";function m({components:e,...t}){return(0,r.kt)(h,{...d,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester."),(0,r.kt)("h3",{id:"how-can-i-ssh-login-to-the-harvester-node"},"How can I ssh login to the Harvester node?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh rancher@node-ip\n")),(0,r.kt)("h3",{id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard"},"What is the default login username and password of the Harvester dashboard?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"username: admin\npassword: # you will be promoted to set the default password when logging in for the first time\n")),(0,r.kt)("h3",{id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster"},"How can I access the kubeconfig file of the Harvester cluster?"),(0,r.kt)("p",null,"Option 1. You can download the kubeconfig file from the support page of the Harvester dashboard.\n",(0,r.kt)("img",{alt:"harvester-kubeconfig.png",src:a(74833).Z,width:"2866",height:"1246"})),(0,r.kt)("p",null,"Option 2. You can get the kubeconfig file from one of the Harvester management nodes. E.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo su\n$ cat /etc/rancher/rke2/rke2.yaml\n")),(0,r.kt)("h3",{id:"how-to-install-the-qemu-guest-agent-of-a-running-vm"},"How to install the qemu-guest-agent of a running VM?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# cloud-init will only be executed once, reboot it after add the cloud-init config with the following command.\n$ cloud-init clean --logs --reboot\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean"},"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean")),(0,r.kt)("h3",{id:"how-can-i-reset-the-administrator-password"},"How can I reset the administrator password?"),(0,r.kt)("p",null,"In case you forget the administrator password, you can reset it via the command line. SSH to one of the management node and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# switch to root and run\n$ kubectl  -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,r.kt)("h3",{id:"i-added-an-additional-disk-with-partitions-why-is-it-not-getting-detected"},"I added an additional disk with partitions. Why is it not getting detected?"),(0,r.kt)("p",null,"As of Harvester v1.0.2, we no longer support adding additional partitioned disks, so be sure to delete all partitions first (e.g., using ",(0,r.kt)("inlineCode",{parentName:"p"},"fdisk"),")."),(0,r.kt)("h3",{id:"why-are-there-some-harvester-pods-that-become-errimagepullimagepullbackoff"},"Why are there some Harvester pods that become ErrImagePull/ImagePullBackOff?"),(0,r.kt)("p",null,"This is likely because your Harvester cluster is an air-gapped setup, and some pre-loaded container images are missing. Kubernetes has a mechanism that does garbage collection against bloated image stores. When the partition which stores container images is over 85% full, ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet")," tries to prune the images based on the last time they were used, starting with the oldest, until the occupancy is lower than 80%. These numbers (85% and 80%) are default High/Low thresholds that come with Kubernetes."),(0,r.kt)("p",null,"To recover from this state, do one of the following depending on the cluster's configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pull the missing images from sources outside of the cluster (if it's an air-gapped environment, you might need to set up an HTTP proxy beforehand)."),(0,r.kt)("li",{parentName:"ul"},"Manually import the images from the Harvester ISO image.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Take v1.1.2 as an example, download the Harvester ISO image from the official URL. Then extract the image list from the ISO image to decide which image tarball we're going to import. For instance, we want to import the missing container image ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher/harvester-upgrade")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -sfL https://releases.rancher.com/harvester/v1.1.2/harvester-v1.1.2-amd64.iso -o harvester.iso\n\n$ xorriso -osirrox on -indev harvester.iso -extract /bundle/harvester/images-lists images-lists\n\n$ grep -R "rancher/harvester-upgrade" images-lists/\nimages-lists/harvester-images-v1.1.2.txt:docker.io/rancher/harvester-upgrade:v1.1.2\n')),(0,r.kt)("p",{parentName:"admonition"},"Find out the location of the image tarball, and extract it from the ISO image. Decompress the extracted zstd image tarball."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ xorriso -osirrox on -indev harvester.iso -extract /bundle/harvester/images/harvester-images-v1.1.2.tar.zst harvester.tar.zst\n\n$ zstd -d --rm harvester.tar.zst\n")),(0,r.kt)("p",{parentName:"admonition"},"Upload the image tarball to the Harvester nodes that need recover. Finally, execute the following command to import the container images on each of them."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ctr -n k8s.io images import harvester.tar\n$ rm harvester.tar\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find the missing images on that node from the other nodes, then export the images from the node where the images still exist and import them on the missing node.")),(0,r.kt)("p",null,"To prevent this from happening, we recommend cleaning up unused container images from the previous version after each successful Harvester upgrade if the image store disk space is stressed. We provided a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/blob/main/bin/harv-purge-images.sh"},"harv-purge-images script")," that makes cleaning up disk space easy, especially for container image storage. The script has to be executed on each Harvester node. For example, if the cluster was originally in v1.1.2, and now it gets upgraded to v1.2.0, you can do the following to discard the container images that are only used in v1.1.2 but no longer needed in v1.2.0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# on each node\n$ ./harv-purge-images.sh v1.1.2 v1.2.0\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The script only downloads the image lists and compares the two to calculate the difference between the two versions. It does not communicate with the cluster and, as a result, does not know what version the cluster was upgraded from."),(0,r.kt)("li",{parentName:"ul"},"We published image lists for each version released since v1.1.0. For clusters older than v1.1.0, you have to clean up the old images manually."))))}m.isMDXComponent=!0},74833:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harvester-kubeconfig-766a36ec753411c89d93b986cb5b9cdb.png"}}]);