"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[54674],{87172:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});a(67294);var n=a(3905);const s={sidebar_position:5,sidebar_label:"VM Backup, Snapshot & Restore",title:"VM Backup, Snapshot & Restore",keywords:["Harvester","harvester","Rancher","rancher","VM Backup, Snapshot & Restore"],description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM. VM Snapshot can work without Backup Target."},r=void 0,i={unversionedId:"vm/backup-restore",id:"version-v1.4/vm/backup-restore",title:"VM Backup, Snapshot & Restore",description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM. VM Snapshot can work without Backup Target.",source:"@site/versioned_docs/version-v1.4/vm/backup-restore.md",sourceDirName:"vm",slug:"/vm/backup-restore",permalink:"/v1.4/vm/backup-restore",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.4/vm/backup-restore.md",tags:[],version:"v1.4",lastUpdatedAt:1732843250,formattedLastUpdatedAt:"Nov 29, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"VM Backup, Snapshot & Restore",title:"VM Backup, Snapshot & Restore",keywords:["Harvester","harvester","Rancher","rancher","VM Backup, Snapshot & Restore"],description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM. VM Snapshot can work without Backup Target."},sidebar:"api",previous:{title:"Access to the Virtual Machine",permalink:"/v1.4/vm/access-to-the-vm"},next:{title:"Live Migration",permalink:"/v1.4/vm/live-migration"}},l={},p=[{value:"VM Backup &amp; Restore",id:"vm-backup--restore",level:2},{value:"Configure Backup Target",id:"configure-backup-target",level:3},{value:"Create a VM backup",id:"create-a-vm-backup",level:3},{value:"Restore a new VM using a backup",id:"restore-a-new-vm-using-a-backup",level:3},{value:"Replace an existing VM using a backup",id:"replace-an-existing-vm-using-a-backup",level:3},{value:"Restore a new VM on another Harvester cluster",id:"restore-a-new-vm-on-another-harvester-cluster",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Upload the same VM images to a new cluster",id:"upload-the-same-vm-images-to-a-new-cluster",level:4},{value:"Restore a new VM in a new cluster",id:"restore-a-new-vm-in-a-new-cluster",level:4},{value:"VM Snapshot &amp; Restore",id:"vm-snapshot--restore",level:2},{value:"Create a VM snapshot",id:"create-a-vm-snapshot",level:3},{value:"Restore a new VM using a snapshot",id:"restore-a-new-vm-using-a-snapshot",level:3},{value:"Replace an existing VM using a snapshot",id:"replace-an-existing-vm-using-a-snapshot",level:3},{value:"VM Snapshot Space Management",id:"vm-snapshot-space-management",level:2},{value:"Configure the Snapshot Space Usage Limit at the Namespace Level",id:"configure-the-snapshot-space-usage-limit-at-the-namespace-level",level:3},{value:"Configure the Snapshot Space Usage Limit at the Virtual Machine Level",id:"configure-the-snapshot-space-usage-limit-at-the-virtual-machine-level",level:3},{value:"Scheduling Virtual Machine Backups and Snapshots",id:"scheduling-virtual-machine-backups-and-snapshots",level:2},{value:"Create the Virtual Machine Schedule",id:"create-the-virtual-machine-schedule",level:3},{value:"Check the Status of a Virtual Machine Schedule",id:"check-the-status-of-a-virtual-machine-schedule",level:3},{value:"Edit a Virtual Machine Schedule",id:"edit-a-virtual-machine-schedule",level:3},{value:"Suspend or Resume a Virtual Machine Schedule",id:"suspend-or-resume-a-virtual-machine-schedule",level:3},{value:"Virtual Machine Operations and Harvester Upgrades",id:"virtual-machine-operations-and-harvester-upgrades",level:3}],o={toc:p},c="wrapper";function u({components:e,...t}){return(0,n.kt)(c,{...o,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.4/vm/backup-restore"})),(0,n.kt)("h2",{id:"vm-backup--restore"},"VM Backup & Restore"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,n.kt)("p",null,"VM backups are created from the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," page. The VM backup volumes will be stored in the ",(0,n.kt)("strong",{parentName:"p"},"Backup Target")," (an NFS or S3 server), and they can be used to either restore a new VM or replace an existing VM.\n",(0,n.kt)("img",{alt:"vm-backup.png",src:a(63720).Z,width:"2560",height:"1200"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A backup target must be set up. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"#configure-backup-target"},"Configure Backup Target"),". If the backup target has not been set, you\u2019ll be prompted with a message to do so.")),(0,n.kt)("h3",{id:"configure-backup-target"},"Configure Backup Target"),(0,n.kt)("p",null,"A backup target is an endpoint used to access a backup store in Harvester. A backup store is an NFS server or S3 compatible server that stores the backups of VM volumes. The backup target can be set at ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings > backup-target"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Choose S3 or NFS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Endpoint"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A hostname or an IP address. It can be left empty for AWS S3.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BucketName"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BucketRegion"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Region of the bucket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AccessKeyID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A user-id that uniquely identifies your account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SecretAccessKey"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The password to your account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Certificate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Paste to use a self-signed SSL certificate of your S3 server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VirtualHostedStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use ",(0,n.kt)("inlineCode",{parentName:"td"},"VirtualHostedStyle")," access only; e.g., Alibaba Cloud (Aliyun) OSS")))),(0,n.kt)("h3",{id:"create-a-vm-backup"},"Create a VM backup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Once the backup target is set, go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Take Backup")," of the VM actions to create a new VM backup."),(0,n.kt)("li",{parentName:"ol"},"Set a custom backup name and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM backup.\n",(0,n.kt)("img",{alt:"create-backup.png",src:a(10015).Z,width:"4232",height:"2080"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The backup is created. You will receive a notification message, and you can also go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Backup & Snapshot > VM Backups")," page to view all VM backups."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"State")," will be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"Ready")," once the backup is complete."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"vm-backup-results.png",src:a(91787).Z,width:"1918",height:"811"})),(0,n.kt)("p",null,"Users can either restore a new VM or replace an existing VM using this backup."),(0,n.kt)("h3",{id:"restore-a-new-vm-using-a-backup"},"Restore a new VM using a backup"),(0,n.kt)("p",null,"To restore a new VM from a backup, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Restore Backup")," button at the top right."),(0,n.kt)("li",{parentName:"ol"},"Specify the new VM name and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"A new VM will be restored using the backup volumes and metadata, and you can access it from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,n.kt)("img",{alt:"restore-vm.png",src:a(23593).Z,width:"2560",height:"1400"}))),(0,n.kt)("h3",{id:"replace-an-existing-vm-using-a-backup"},"Replace an existing VM using a backup"),(0,n.kt)("p",null,"You can replace an existing VM using the backup with the same VM backup target."),(0,n.kt)("p",null,"You can choose to either delete or retain the previous volumes. By default, all previous volumes are deleted."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Requirements:")," The VM must exist and is required to be in the powered-off status."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Restore Backup")," button at the top right."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Replace Existing"),"."),(0,n.kt)("li",{parentName:"ol"},"You can view the restore process from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,n.kt)("img",{alt:"vm-restore-existing.png",src:a(85655).Z,width:"1919",height:"863"}))),(0,n.kt)("h3",{id:"restore-a-new-vm-on-another-harvester-cluster"},"Restore a new VM on another Harvester cluster"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.0.0")),(0,n.kt)("p",null,"Users can now restore a new VM on another cluster by leveraging the VM metadata & content backup feature."),(0,n.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"v1.4.0 and later: The controller automatically syncs the virtual machine images with the new cluster, except when a virtual machine image with the same name or display name already exists on the new cluster.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Earlier than v1.4.0: You must upload and configure the virtual machine images on the new cluster. Ensure that the image names and configuration are identical so that the virtual machines can be restored. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"#upload-the-same-vm-images-to-a-new-cluster"},"Upload the same VM images to a new cluster"),"."))),(0,n.kt)("h4",{id:"upload-the-same-vm-images-to-a-new-cluster"},"Upload the same VM images to a new cluster"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check the existing image name (normally starts with ",(0,n.kt)("inlineCode",{parentName:"li"},"image-"),") and create the same one on the new cluster.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get vmimages -A\nNAMESPACE   NAME                               DISPLAY-NAME                              SIZE         AGE\ndefault     image-79hdq                        focal-server-cloudimg-amd64.img           566886400    5h36m\ndefault     image-l7924                        harvester-v1.0.0-rc2-amd64.iso            3964551168   137m\ndefault     image-lvqxn                        opensuse-leap-15.3.x86_64-nocloud.qcow2   568524800    5h35m\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Apply a VM image YAML with the same name and content in the new cluster.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ cat <<EOF | kubectl apply -f -\napiVersion: harvesterhci.io/v1beta1\nkind: VirtualMachineImage\nmetadata:\n  name: image-lvqxn\n  namespace: default\nspec:\n  displayName: opensuse-leap-15.3.x86_64-nocloud.qcow2\n  pvcName: ""\n  pvcNamespace: ""\n  sourceType: download\n  url: http://download.opensuse.org/repositories/Cloud:/Images:/Leap_15.3/images/openSUSE-Leap-15.3.x86_64-NoCloud.qcow2\nEOF\n')),(0,n.kt)("h4",{id:"restore-a-new-vm-in-a-new-cluster"},"Restore a new VM in a new cluster"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Setup the same backup target in a new cluster. And the backup controller will automatically sync the backup metadata to the new cluster."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,n.kt)("li",{parentName:"ol"},"Select the synced VM backup metadata and choose to restore a new VM with a specified VM name."),(0,n.kt)("li",{parentName:"ol"},"A new VM will be restored using the backup volumes and metadata. You can access it from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.")),(0,n.kt)("h2",{id:"vm-snapshot--restore"},"VM Snapshot & Restore"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,n.kt)("p",null,"VM snapshots are created from the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," page. The VM snapshot volumes will be stored in the cluster, and they can be used to either restore a new VM or replace an existing VM.\n",(0,n.kt)("img",{alt:"vm-snapshot.png",src:a(22796).Z,width:"2560",height:"1160"})),(0,n.kt)("h3",{id:"create-a-vm-snapshot"},"Create a VM snapshot"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Take VM Snapshot")," of the VM actions to create a new VM snapshot."),(0,n.kt)("li",{parentName:"ol"},"Set a custom snapshot name and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM snapshot.\n",(0,n.kt)("img",{alt:"create-snapshot.png",src:a(91112).Z,width:"2558",height:"1276"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The snapshot is created. You can also go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Backup & Snapshot > VM Snapshots")," page to view all VM snapshots."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"State")," will be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"Ready")," once the snapshot is complete."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"vm-snapshot-results.png",src:a(47998).Z,width:"1920",height:"814"})),(0,n.kt)("p",null,"Users can either restore a new VM or replace an existing VM using this snapshot."),(0,n.kt)("h3",{id:"restore-a-new-vm-using-a-snapshot"},"Restore a new VM using a snapshot"),(0,n.kt)("p",null,"To restore a new VM from a snapshot, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Snapshots")," page."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Restore Snapshot")," button at the top right."),(0,n.kt)("li",{parentName:"ol"},"Specify the new VM name and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"A new VM will be restored using the snapshot volumes and metadata, and you can access it from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,n.kt)("img",{alt:"restore-vm-snapshot.png",src:a(15041).Z,width:"2560",height:"1398"}))),(0,n.kt)("h3",{id:"replace-an-existing-vm-using-a-snapshot"},"Replace an existing VM using a snapshot"),(0,n.kt)("p",null,"You can replace an existing VM using the snapshot."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can only choose to retain the previous volumes.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Snapshots")," page."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Restore Snapshot")," button at the top right."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Replace Existing"),"."),(0,n.kt)("li",{parentName:"ol"},"You can view the restore process from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,n.kt)("img",{alt:"restore-vm-snapshot-existing.png",src:a(82079).Z,width:"1920",height:"863"}))),(0,n.kt)("h2",{id:"vm-snapshot-space-management"},"VM Snapshot Space Management"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.4.0")),(0,n.kt)("p",null,"Volumes consume extra disk space in the cluster whenever you create a new virtual machine backup or snapshot. To manage this, you can configure space usage limits at the namespace and virtual machine levels. The configured values represent the maximum amount of disk space that can be used by all backups and snapshots. No limits are set by default."),(0,n.kt)("h3",{id:"configure-the-snapshot-space-usage-limit-at-the-namespace-level"},"Configure the Snapshot Space Usage Limit at the Namespace Level"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Namespaces")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the target namespace, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Edit Quota"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-quota-namespace.png",src:a(456).Z,width:"1778",height:"341"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify the maximum amount of disk space that can be consumed by all snapshots in the namespace, and then and click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-quota-namespace-save.png",src:a(48557).Z,width:"489",height:"250"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify that the configured value is displayed on the ",(0,n.kt)("strong",{parentName:"p"},"Namespaces")," screen."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-quota-namespace-read.png",src:a(72561).Z,width:"1781",height:"248"})))),(0,n.kt)("h3",{id:"configure-the-snapshot-space-usage-limit-at-the-virtual-machine-level"},"Configure the Snapshot Space Usage Limit at the Virtual Machine Level"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the target virtual machine, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Edit VM Quota"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-quota-vm.png",src:a(56067).Z,width:"1771",height:"673"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify the maximum total amount of disk space that can be consumed by all snapshots for the virtual machine, and then and click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-quota-vm-save.png",src:a(25742).Z,width:"501",height:"261"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify that the configured value is displayed on the ",(0,n.kt)("strong",{parentName:"p"},"Quotas")," tab of the virtual machine details screen."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-quota-vm-read.png",src:a(41857).Z,width:"1737",height:"517"})))),(0,n.kt)("h2",{id:"scheduling-virtual-machine-backups-and-snapshots"},"Scheduling Virtual Machine Backups and Snapshots"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.4.0")),(0,n.kt)("p",null,"Harvester supports the creation of virtual machine backups and snapshots on a scheduled basis, with the option to retain a specific number of backups and snapshots. You can suspend, resume, and update the schedule at runtime."),(0,n.kt)("h3",{id:"create-the-virtual-machine-schedule"},"Create the Virtual Machine Schedule"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machine Schedules")," screen, and then click ",(0,n.kt)("strong",{parentName:"p"},"Create Schedule"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-schedule.png",src:a(91445).Z,width:"1917",height:"868"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the following settings:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"configure-schedule.png",src:a(20940).Z,width:"1920",height:"914"})))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": Select either ",(0,n.kt)("strong",{parentName:"p"},"Backup")," or ",(0,n.kt)("strong",{parentName:"p"},"Snapshot"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Namespace")," and ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machine Name"),": Specify the namespace and name of the source virtual machine.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cron Schedule"),": Specify the cron expression (a string consisting of fields separated by whitespace characters) that defines the schedule properties."),(0,n.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The backup or snapshot creation interval must be ",(0,n.kt)("strong",{parentName:"p"},"at least one hour"),". Frequent backup or snapshot deletion results in heavy I/O load."),(0,n.kt)("p",{parentName:"admonition"},"If two schedules have the same granularity level, each iteration's timing offset must be ",(0,n.kt)("strong",{parentName:"p"},"at least 10 minutes"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Retain"),": Specify the number of up-to-date backups or snapshots to be retained."),(0,n.kt)("p",{parentName:"li"},"When this value is exceeded, the Harvester controller deletes the oldest backups or snapshots, and Longhorn starts the snapshot purge.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Max Failure"),": Specify the maximum number of consecutive failed backup or snapshot creation attempts to be allowed."),(0,n.kt)("p",{parentName:"li"},"When this value is exceeded, the Harvester controller suspends the schedule."))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("h3",{id:"check-the-status-of-a-virtual-machine-schedule"},"Check the Status of a Virtual Machine Schedule"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machine Schedules")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the target schedule, and then click the name to open the details screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Basics")," tab, verify that the settings are correct."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"check-schedule-basic.png",src:a(83951).Z,width:"1909",height:"873"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Backups")," tab, check the status of the backups or snapshots that were created according to the schedule."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"check-schedule-backups.png",src:a(77254).Z,width:"1918",height:"846"})),(0,n.kt)("p",{parentName:"li"},"Backups and snapshots that are marked ",(0,n.kt)("strong",{parentName:"p"},"Ready")," can be used to restore the source virtual machine. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"#vm-backup--restore"},"VM Backup & Restore")," and ",(0,n.kt)("a",{parentName:"p",href:"#vm-snapshot--restore"},"VM Snapshot & Restore"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"check-schedule-restore.png",src:a(40636).Z,width:"1902",height:"882"})))),(0,n.kt)("h3",{id:"edit-a-virtual-machine-schedule"},"Edit a Virtual Machine Schedule"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machine Schedules")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the target schedule, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Edit Config"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-schedule-config.png",src:a(52111).Z,width:"1917",height:"633"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the ",(0,n.kt)("strong",{parentName:"p"},"Cron Schedule"),", ",(0,n.kt)("strong",{parentName:"p"},"Retain"),", or ",(0,n.kt)("strong",{parentName:"p"},"Max Failure")," values."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-schedule-parameters.png",src:a(43643).Z,width:"1920",height:"912"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save")," to apply the changes."))),(0,n.kt)("h3",{id:"suspend-or-resume-a-virtual-machine-schedule"},"Suspend or Resume a Virtual Machine Schedule"),(0,n.kt)("p",null,"You can suspend active schedules and resume suspended schedules."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machine Schedules")," screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the target schedule, and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Suspend or Resume"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"suspend-resume-schedule.png",src:a(58185).Z,width:"1920",height:"706"})),(0,n.kt)("p",{parentName:"li"},"The schedule is automatically suspended when the number of consecutive failed backup or snapshot creation attempts exceeds the ",(0,n.kt)("strong",{parentName:"p"},"Max Failure")," value."),(0,n.kt)("p",{parentName:"li"},"Harvester does not allow you to resume a suspended schedule for backup creation if the backup target is not reachable."))),(0,n.kt)("h3",{id:"virtual-machine-operations-and-harvester-upgrades"},"Virtual Machine Operations and Harvester Upgrades"),(0,n.kt)("p",null,"Before you upgrade Harvester, ensure that no virtual machine backups or snapshots are in use, and that all virtual machine schedules are suspended. The Harvester UI displays the following error messages when upgrade attempts are rejected:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Virtual machine backups or snapshots are being created, deleted, or used during the upgrade attempt"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upgrade-vmbackup.png",src:a(24518).Z,width:"1912",height:"957"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Virtual machine schedules are active during the upgrade attempt"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upgrade-svmbackup.png",src:a(25752).Z,width:"1903",height:"953"})))),(0,n.kt)("p",null,"To avoid such issues, the Harvester team plans to implement automatic suspension of all virtual machine schedules before the upgrade process is started. The suspended schedules will also be automatically resumed after the upgrade is completed. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/6759"},"Issue #6759"),"."))}u.isMDXComponent=!0},10015:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-backup-8533bf901f53858ff667e9d6f095fa02.png"},91112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-snapshot-1ec69bb2f7c0c21d187f889b40686dc9.png"},82079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-snapshot-existing-3b2cd84f303deb1729298c62d32c7ba2.png"},15041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-snapshot-82e23610c43dcd363db52d7f39d159bd.png"},23593:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-e2e76cf3c514c73d5e2deaf2b9f20c77.png"},91787:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-backup-results-aea01a807c98f5712f3a05ac3c32a560.png"},63720:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-backup-222f8a51fa815826979b6e4fa0329856.png"},85655:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-restore-existing-81e0b511eef126ef1e62b23e6910350b.png"},47998:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-snapshot-results-1f5647dead86599315ba03a462a9a0f4.png"},22796:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-snapshot-01b716f8a3f41c05fb54e3ccd4e753e8.png"},77254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/check-schedule-backups-5e969e7f3cc323287febbdac79173278.png"},83951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/check-schedule-basic-a201c06a93e2ee585f874d3451dbb183.png"},40636:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/check-schedule-restore-e7d54a3a7a55eaf4e16075d6758661a1.png"},20940:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/configure-schedule-db523d804cc3f5915931527404381ec2.png"},91445:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-schedule-1fbf3b1f4f701f4ab29bf4bcbeca94a3.png"},72561:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-quota-namespace-read-439e6f58c5ab028c9b1fbceb068ee5a8.png"},48557:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-quota-namespace-save-899225849d89266004d0cdb9b8ba8d1a.png"},456:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-quota-namespace-b65b47b259dcd078fcded2b2373eb77f.png"},41857:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-quota-vm-read-fdcb55e31843589693d15965087ccacf.png"},25742:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-quota-vm-save-704dac1dd115f2348d2c80ded80befc7.png"},56067:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-quota-vm-909c03243021da5448789f46b5501f64.png"},52111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-schedule-config-17de245df33a954e549230b0af2f6a43.png"},43643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-schedule-parameters-4d86fe11d81c2d7c9253c7e44e48fce5.png"},58185:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/suspend-resume-schedule-32abdabea7429881be4fbb100534e311.png"},25752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade-svmbackup-e78474e22f747142d3fe1fa104a81695.png"},24518:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upgrade-vmbackup-b380866610d4f1228e738b7501bcab21.png"}}]);