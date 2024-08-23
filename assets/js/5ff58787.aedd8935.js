"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[51390],{57275:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});t(67294);var n=t(3905);const r={sidebar_position:2,sidebar_label:"Upgrade from v1.0.2 to v1.0.3",title:"Upgrade from v1.0.2 to v1.0.3"},s=void 0,i={unversionedId:"upgrade/v1-0-2-to-v1-0-3",id:"version-v1.0/upgrade/v1-0-2-to-v1-0-3",title:"Upgrade from v1.0.2 to v1.0.3",description:"General information",source:"@site/versioned_docs/version-v1.0/upgrade/v1-0-2-to-v1-0-3.md",sourceDirName:"upgrade",slug:"/upgrade/v1-0-2-to-v1-0-3",permalink:"/v1.0/upgrade/v1-0-2-to-v1-0-3",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/upgrade/v1-0-2-to-v1-0-3.md",tags:[],version:"v1.0",lastUpdatedAt:1724304868,formattedLastUpdatedAt:"Aug 22, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upgrade from v1.0.2 to v1.0.3",title:"Upgrade from v1.0.2 to v1.0.3"},sidebar:"api",previous:{title:"Upgrading Harvester",permalink:"/v1.0/upgrade/automatic"},next:{title:"Upgrade from v1.0.1 to v1.0.2",permalink:"/v1.0/upgrade/previous-releases/v1-0-1-to-v1-0-2"}},o={},d=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. Fail to download the upgrade image",id:"1-fail-to-download-the-upgrade-image",level:3},{value:"2. An upgrade is stuck, a node is in &quot;Pre-drained&quot; state (case 1)",id:"2-an-upgrade-is-stuck-a-node-is-in-pre-drained-state-case-1",level:3},{value:"3. An upgrade is stuck, a node is in &quot;Pre-drained&quot; state (case 2)",id:"3-an-upgrade-is-stuck-a-node-is-in-pre-drained-state-case-2",level:3}],p={toc:d},l="wrapper";function c({components:e,...a}){return(0,n.kt)(l,{...p,...a,components:e,mdxType:"MDXLayout"},(0,n.kt)("h2",{id:"general-information"},"General information"),(0,n.kt)("p",null,"The Harvester GUI Dashboard page should have an upgrade button to perform an upgrade. For more details please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/upgrade/automatic#start-an-upgrade"},"start an upgrade"),"."),(0,n.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/upgrade/automatic#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,n.kt)("h2",{id:"known-issues"},"Known issues"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-fail-to-download-the-upgrade-image"},"1. Fail to download the upgrade image"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description")),(0,n.kt)("p",null,"Downloading the upgrade image can't be complete or fails with an error."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(95026).Z,width:"372",height:"468"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Related issues")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2104"},"[BUG] failed to create upgrade image"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Workaround")),(0,n.kt)("p",null,"Delete the current upgrade and start over. Please see ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/upgrade/troubleshooting#start-over-an-upgrade"},'"Start over an upgrade"'),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2-an-upgrade-is-stuck-a-node-is-in-pre-drained-state-case-1"},'2. An upgrade is stuck, a node is in "Pre-drained" state (case 1)'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description")),(0,n.kt)("p",null,"Users might see a node is stuck at the Pre-drained state for a while (> 30 minutes)."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(17772).Z,width:"1140",height:"1596"})),(0,n.kt)("p",null,"This might be caused by ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-r-*")," pod on node ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-z7j2g")," can\u2019t be drained. To verify the above case:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check rancher server logs:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl logs deployment/rancher -n cattle-system\n")),"  Example output:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'error when evicting pods/"instance-manager-r-10dd59c4" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\nevicting pod longhorn-system/instance-manager-r-10dd59c4\nerror when evicting pods/"instance-manager-r-10dd59c4" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\nevicting pod longhorn-system/instance-manager-r-10dd59c4\nerror when evicting pods/"instance-manager-r-10dd59c4" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\nevicting pod longhorn-system/instance-manager-r-10dd59c4\nerror when evicting pods/"instance-manager-r-10dd59c4" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\n'))),(0,n.kt)("li",{parentName:"ul"},"Verify the pod ",(0,n.kt)("inlineCode",{parentName:"li"},"longhorn-system/instance-manager-r-10dd59c4")," is on the stuck node:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get pod instance-manager-r-10dd59c4 -n longhorn-system -o=jsonpath='{.spec.nodeName}'\n")),"  Example output:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"harvester-z7j2g\n"))),(0,n.kt)("li",{parentName:"ul"},"Check degraded volumes:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get volumes -n longhorn-system\n")),"  Example output:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE              AGE\npvc-08c34593-8225-4be6-9899-10a978df6ea1   attached   healthy      True        10485760      harvester-279l2   3d13h\npvc-526600f5-bde2-4244-bb8e-7910385cbaeb   attached   healthy      True        21474836480   harvester-x9jqw   3d1h\npvc-7b3fc2c3-30eb-48b8-8a98-11913f8314c2   attached   healthy      True        10737418240   harvester-x9jqw   3d\npvc-8065ed6c-a077-472c-920e-5fe9eacff96e   attached   healthy      True        21474836480   harvester-x9jqw   3d\npvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599   attached   degraded     True        10737418240   harvester-x9jqw   2d23h\npvc-9a6539b8-44e5-430e-9b24-ea8290cb13b7   attached   healthy      True        53687091200   harvester-x9jqw   3d13h\n")),"  Here we can see volume ",(0,n.kt)("inlineCode",{parentName:"li"},"pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599")," is degraded.\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The user needs to check all degraded volumes one by one.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check degraded volume\u2019s replica state:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get replicas -n longhorn-system --selector longhornvolume=pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599 -o json | jq '.items[] | {replica: .metadata.name, healthyAt: .spec.healthyAt, nodeID: .spec.nodeID, state: .status.currentState}'\n")),"  Example output:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "replica": "pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-15e31246",\n  "healthyAt": "2022-07-25T07:33:16Z",\n  "nodeID": "harvester-z7j2g",\n  "state": "running"\n}\n{\n  "replica": "pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-22974d0f",\n  "healthyAt": "",\n  "nodeID": "harvester-279l2",\n  "state": "running"\n}\n{\n  "replica": "pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5",\n  "healthyAt": "",\n  "nodeID": "harvester-x9jqw",\n  "state": "stopped"\n}\n')),"  Here the only healthy replica is ",(0,n.kt)("inlineCode",{parentName:"li"},"pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-15e31246")," and it\u2019s on node ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-z7j2g"),". So we can confirm the ",(0,n.kt)("inlineCode",{parentName:"li"},"instance-manager-r-*")," pod resides on node ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-z7j2g")," and avoids the drain.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Related issues")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2053"},"[BUG] Upgrade: longhorn-system can't be evicted"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Workaround")),(0,n.kt)("p",null,"We need to start the \u201cStopped\u201d replica, from the previous example, the stopped replica\u2019s name is ",(0,n.kt)("inlineCode",{parentName:"p"},"pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5"),". "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check the Longhorn manager log, we should see a replica waiting for the backing image. First, we need to get the manager's name:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get pods -n longhorn-system --selector app=longhorn-manager --field-selector spec.nodeName=harvester-x9jqw\n")),"  Example output:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nNAME                     READY   STATUS    RESTARTS   AGE\nlonghorn-manager-zmfbw   1/1     Running   0          3d10h\n"))),(0,n.kt)("li",{parentName:"ul"},"Get pod log:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl logs longhorn-manager-zmfbw -n longhorn-system | grep pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5\n")),"  Example output:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'(...)\ntime="2022-07-28T04:35:34Z" level=debug msg="Prepare to create instance pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5"\ntime="2022-07-28T04:35:34Z" level=debug msg="Replica pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5 is waiting for backing image harvester-system-harvester-iso-n7bxh downloading file to node harvester-x9jqw disk 3830342d-c13d-4e55-ac74-99cad529e9d4, the current state is in-progress" controller=longhorn-replica dataPath= node=harvester-x9jqw nodeID=harvester-x9jqw ownerID=harvester-x9jqw replica=pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5\ntime="2022-07-28T04:35:34Z" level=info msg="Event(v1.ObjectReference{Kind:\\"Replica\\", Namespace:\\"longhorn-system\\", Name:\\"pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5\\", UID:\\"c511630f-2fe2-4cf9-97a4-21bce73782b1\\", APIVersion:\\"longhorn.io/v1beta1\\", ResourceVersion:\\"632926\\", FieldPath:\\"\\"}): type: \'Normal\' reason: \'Start\' Starts pvc-9a40e5b9-543a-4c90-aafd-ac78b05d7599-r-bc6f7fa5"\n')),"  Here we can determine the replica is waiting for the backing image ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-system-harvester-iso-n7bxh"),".\n"),(0,n.kt)("li",{parentName:"ul"},"Get the disk file map from the backing image:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl describe backingimage harvester-system-harvester-iso-n7bxh -n longhorn-system\n")),"  Example output:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"(...)\nDisk File Status Map:\n    3830342d-c13d-4e55-ac74-99cad529e9d4:\n      Last State Transition Time:  2022-07-25T08:30:34Z\n      Message:\n      Progress:                    29\n      State:                       in-progress\n    3aa804e1-229d-4141-8816-1f6a7c6c3096:\n      Last State Transition Time:  2022-07-25T08:33:20Z\n      Message:\n      Progress:                    100\n      State:                       ready\n    92726efa-bfb3-478e-8553-3206ad34ce70:\n      Last State Transition Time:  2022-07-28T04:31:49Z\n      Message:\n      Progress:                    100\n      State:                       ready\n")),"  The disk file with UUID ",(0,n.kt)("inlineCode",{parentName:"li"},"3830342d-c13d-4e55-ac74-99cad529e9d4")," has the state ",(0,n.kt)("inlineCode",{parentName:"li"},"in-progress"),".\n"),(0,n.kt)("li",{parentName:"ul"},"Next, we need to find backing-image-manager that contains this disk file:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n longhorn-system --selector=longhorn.io/disk-uuid=3830342d-c13d-4e55-ac74-99cad529e9d4\n")),"  Example output:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"NAME                              READY   STATUS    RESTARTS   AGE\nbacking-image-manager-c00e-3830   1/1     Running   0          3d1h\n"))),(0,n.kt)("li",{parentName:"ul"},"Restart the backing-image-manager by deleting its pod:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete pod -n longhorn-system backing-image-manager-c00e-3830\n")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3-an-upgrade-is-stuck-a-node-is-in-pre-drained-state-case-2"},'3. An upgrade is stuck, a node is in "Pre-drained" state (case 2)'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description")),(0,n.kt)("p",null,"Users might see a node is stuck at the Pre-drained state for a while (> 30 minutes)."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(53508).Z,width:"908",height:"1276"})),(0,n.kt)("p",null,"Here are some steps to verify this issue has happened:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visit the Longhorn GUI: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://{{VIP}}/k8s/clusters/local/api/v1/namespaces/longhorn-system/services/http:longhorn-frontend:80/proxy/#/volume"),' (replace VIP with an appropriate value) and check degraded volumes. The degraded volume might contain a healthy replica only (with blue background) and the healthy replica resides on the "Pre-drained" node:'),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:t(33524).Z,width:"2574",height:"1004"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hover the mouse to the red scheduled icon, the reason is ",(0,n.kt)("inlineCode",{parentName:"p"},"toomanysnapshots"),":"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:t(6040).Z,width:"784",height:"376"})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Related issues")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2640"},'[BUG] Upgrade is stuck in "Pre-drained" state (Volume has too many system snapshots)'))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Workaround")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'In the "Snapshots and Backup" panel, toggle the "Show System Hidden" switch and delete the latest system snapshot (which is just before the "Volume Head").'),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:t(54213).Z,width:"1296",height:"542"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The volume will continue rebuilding to resume the upgrade."))))}c.isMDXComponent=!0},95026:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/known_issue_downloading_image_failure-e5c4ab5abb0ac17b4aaaa166991ad825.png"},17772:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2053-stuck-37c60bee142c94d778e38aabf6a0f545.png"},53508:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2640-stuck-e5ffde3f945c6d60de8aeddc9e2c9116.png"},33524:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2640-vol-1-89f1414500af2b02787af1288938ada0.png"},6040:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2640-vol-2-6eb01f626678e2c347187d79bccb6af8.png"},54213:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2640-vol-3-1bda35c79e234a8c50645812e926767e.png"}}]);