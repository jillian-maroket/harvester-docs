"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[51870],{25844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>v,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:9,sidebar_label:"vGPU Support",title:"vGPU Support"},s=void 0,d={unversionedId:"advanced/vgpusupport",id:"advanced/vgpusupport",title:"vGPU Support",description:"Available as of v1.3.0",source:"@site/docs/advanced/vgpusupport.md",sourceDirName:"advanced",slug:"/advanced/vgpusupport",permalink:"/v1.4/advanced/vgpusupport",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/vgpusupport.md",tags:[],version:"current",lastUpdatedAt:1718336126,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"vGPU Support",title:"vGPU Support"},sidebar:"api",previous:{title:"Witness Node",permalink:"/v1.4/advanced/witness"},next:{title:"Rancher Integration",permalink:"/v1.4/rancher/rancher-integration"}},o={},l=[{value:"Usage",id:"usage",level:2},{value:"Limitations",id:"limitations",level:3},{value:"Attaching multiple vGPU&#39;s:",id:"attaching-multiple-vgpus",level:4},{value:"Cap on Usable vGPUs",id:"cap-on-usable-vgpus",level:4},{value:"Technical Deep dive",id:"technical-deep-dive",level:3}],c={toc:l},p="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/vgpusupport"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.3.0")),(0,i.kt)("p",null,"Harvester now offers the capability to share NVIDIA GPU's supporting SRIOV based virtualisation as vGPU devices."),(0,i.kt)("p",null,"The additional capability is provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon, and leverages ",(0,i.kt)("inlineCode",{parentName:"p"},"sriov-manage")," to manage the gpu. Please refer the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/grid/15.0/grid-vgpu-user-guide/index.html#creating-sriov-vgpu-device-red-hat-el-kvm"},"Nvidia Documentation")," and your GPU documentation to identify if the GPU is supported."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/advanced/addons/nvidiadrivertoolkit"},"nvidia-driver-toolkit")," addon needs to be enabled for users to be able to manage the lifecycle of vGPU's on GPU devices."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the Harvester UI, go to ",(0,i.kt)("strong",{parentName:"li"},"Advanced")," > ",(0,i.kt)("strong",{parentName:"li"},"SR-IOV GPU Devices")," and verify the following:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GPU devices have been scanned. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An associated ",(0,i.kt)("inlineCode",{parentName:"p"},"sriovgpudevices.devices.harvesterhci.io")," object has been created. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(64838).Z,width:"2528",height:"617"})))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the device that you want to enable, and then select ",(0,i.kt)("strong",{parentName:"p"},":")," > ",(0,i.kt)("strong",{parentName:"p"},"Enable"),". "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(1050).Z,width:"2550",height:"616"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"vGPU Devices")," screen and check the associated ",(0,i.kt)("inlineCode",{parentName:"p"},"vgpudevices.devices.harvesterhci.io")," objects."),(0,i.kt)("p",{parentName:"li"},"Allow some time for the pcidevices-controller to scan the vGPU devices and for the Harvester UI to display the device information."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(91676).Z,width:"2541",height:"825"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a vGPU and configure a profile."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(30332).Z,width:"729",height:"527"})),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The list of profiles depends on the GPU and the underlying /sys tree of the host. For more information about the available profiles and their capabilities, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/grid/15.0/grid-vgpu-user-guide/index.html#supported-gpus-grid-vgpu"},"NVIDIA documentation"),"."),(0,i.kt)("p",{parentName:"admonition"},"After you select the first profile, the NVIDIA driver automatically configures the profiles available for the remaining vGPUs."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Attach the vGPU to a new or existing VM."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(68286).Z,width:"2544",height:"800"})),(0,i.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Once a vGPU has been assigned to a VM, it may not be possible to disable the VM until the vGPU is removed.")))),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("h4",{id:"attaching-multiple-vgpus"},"Attaching multiple vGPU's:"),(0,i.kt)("p",null,"Attaching multiple vGPUs to a VM may fail for the following reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Not all vGPU profiles support attachment of multiple vGPUs. The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/grid/16.0/grid-vgpu-release-notes-generic-linux-kvm/index.html#multiple-vgpu-support"},"NVIDIA documentation")," lists the vGPU profiles that support this feature. For example, if you use NVIDIA A2 or A16 GPUs, note that only Q-series vGPUs allow you to attach multiple vGPUs."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(24774).Z,width:"549",height:"267"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only 1 GPU device in the VM definition can have ",(0,i.kt)("inlineCode",{parentName:"p"},"ramFB")," enabled. To attach multiple vGPUs, you must edit the VM configuration (in YAML) and add ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualGPUOptions")," to all non-primary vGPU devices."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"virtualGPUOptions:\n  display:\n     ramFB:\n       enabled: false \n")),(0,i.kt)("p",null,"Related issue: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/5289"},"https://github.com/harvester/harvester/issues/5289")),(0,i.kt)("h4",{id:"cap-on-usable-vgpus"},"Cap on Usable vGPUs"),(0,i.kt)("p",null,"When vGPU support is enabled on a GPU, the NVIDIA driver creates 16 vGPU devices by default. After you select the first profile, the NVIDIA driver automatically configures the profiles available for the remaining vGPUs."),(0,i.kt)("p",null,"The profile used also dictates the maximum number of vGPUs available for each GPU. Once the maximum is exhausted, no profiles can be selected for the remaining vGPUs and those devices cannot be configured."),(0,i.kt)("p",null,"Example (",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/grid/15.0/grid-vgpu-user-guide/index.html#vgpu-types-nvidia-a2"},"NVIDIA A2 GPU"),"):"),(0,i.kt)("p",null,"If you select the ",(0,i.kt)("inlineCode",{parentName:"p"},"NVIDIA A2-4Q")," profile, you can only configure 4 vGPU devices. Once those devices are configured, you cannot select any profiles for the remaining vGPUs."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(35914).Z,width:"2077",height:"562"})),(0,i.kt)("h3",{id:"technical-deep-dive"},"Technical Deep dive"),(0,i.kt)("p",null,"pcidevices-controller introduces the following CRDs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sriovgpudevices.devices.harvesterhci.io  "),(0,i.kt)("li",{parentName:"ul"},"vgpudevices.devices.harvesterhci.io  ")),(0,i.kt)("p",null,"On boot, pcidevices-controller scans the host for NVIDIA GPUs that support SR-IOV vGPU devices. When such devices are found, they are represented as a CRD."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: devices.harvesterhci.io/v1beta1\nkind: SRIOVGPUDevice\nmetadata:\n  creationTimestamp: "2024-02-21T05:57:37Z"\n  generation: 2\n  labels:\n    nodename: harvester-kgd9c\n  name: harvester-kgd9c-000008000\n  resourceVersion: "6641619"\n  uid: e3a97ee4-046a-48d7-820d-8c6b45cd07da\nspec:\n  address: "0000:08:00.0"\n  enabled: true\n  nodeName: harvester-kgd9c\nstatus:\n  vGPUDevices:\n  - harvester-kgd9c-000008004\n  - harvester-kgd9c-000008005\n  - harvester-kgd9c-000008016\n  - harvester-kgd9c-000008017\n  - harvester-kgd9c-000008020\n  - harvester-kgd9c-000008021\n  - harvester-kgd9c-000008022\n  - harvester-kgd9c-000008023\n  - harvester-kgd9c-000008006\n  - harvester-kgd9c-000008007\n  - harvester-kgd9c-000008010\n  - harvester-kgd9c-000008011\n  - harvester-kgd9c-000008012\n  - harvester-kgd9c-000008013\n  - harvester-kgd9c-000008014\n  - harvester-kgd9c-000008015\n  vfAddresses:\n  - "0000:08:00.4"\n  - "0000:08:00.5"\n  - "0000:08:01.6"\n  - "0000:08:01.7"\n  - "0000:08:02.0"\n  - "0000:08:02.1"\n  - "0000:08:02.2"\n  - "0000:08:02.3"\n  - "0000:08:00.6"\n  - "0000:08:00.7"\n  - "0000:08:01.0"\n  - "0000:08:01.1"\n  - "0000:08:01.2"\n  - "0000:08:01.3"\n  - "0000:08:01.4"\n  - "0000:08:01.5"\n')),(0,i.kt)("p",null,"When a SRIOVGPUDevice is enabled, the pcidevices controller works with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-driver-toolkit")," daemonset to manage the GPU devices."),(0,i.kt)("p",null,"On subsequent scan of the /sys tree by the pcidevices, the vGPU devices are scanned by the pcidevices controller and managed as ",(0,i.kt)("inlineCode",{parentName:"p"},"VGPUDevices")," CRD"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME                        ADDRESS        NODE NAME         ENABLED   UUID                                   VGPUTYPE       PARENTGPUDEVICE\nharvester-kgd9c-000008004   0000:08:00.4   harvester-kgd9c   true      dd6772a8-7db8-4e96-9a73-f94c389d9bc3   NVIDIA A2-4A   0000:08:00.0\nharvester-kgd9c-000008005   0000:08:00.5   harvester-kgd9c   true      9534e04b-4687-412b-833e-3ae95b97d4d1   NVIDIA A2-4Q   0000:08:00.0\nharvester-kgd9c-000008006   0000:08:00.6   harvester-kgd9c   true      a16e5966-9f7a-48a9-bda8-0d1670e740f8   NVIDIA A2-4A   0000:08:00.0\nharvester-kgd9c-000008007   0000:08:00.7   harvester-kgd9c   true      041ee3ce-f95c-451e-a381-1c9fe71918b2   NVIDIA A2-4Q   0000:08:00.0\nharvester-kgd9c-000008010   0000:08:01.0   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008011   0000:08:01.1   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008012   0000:08:01.2   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008013   0000:08:01.3   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008014   0000:08:01.4   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008015   0000:08:01.5   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008016   0000:08:01.6   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008017   0000:08:01.7   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008020   0000:08:02.0   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008021   0000:08:02.1   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008022   0000:08:02.2   harvester-kgd9c   false                                                           0000:08:00.0\nharvester-kgd9c-000008023   0000:08:02.3   harvester-kgd9c   false                                                           0000:08:00.0\n")),(0,i.kt)("p",null,"When a user enables and selects a profile for the ",(0,i.kt)("inlineCode",{parentName:"p"},"VGPUDevice")," the pcidevices controller sets up the device and sets up the correct profile on the said device."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: devices.harvesterhci.io/v1beta1\nkind: VGPUDevice\nmetadata:\n  creationTimestamp: "2024-02-26T03:04:47Z"\n  generation: 8\n  labels:\n    harvesterhci.io/parentSRIOVGPUDevice: harvester-kgd9c-000008000\n    nodename: harvester-kgd9c\n  name: harvester-kgd9c-000008004\n  resourceVersion: "21051017"\n  uid: b9c7af64-1e47-467f-bf3d-87b7bc3a8911\nspec:\n  address: "0000:08:00.4"\n  enabled: true\n  nodeName: harvester-kgd9c\n  parentGPUDeviceAddress: "0000:08:00.0"\n  vGPUTypeName: NVIDIA A2-4A\nstatus:\n  configureVGPUTypeName: NVIDIA A2-4A\n  uuid: dd6772a8-7db8-4e96-9a73-f94c389d9bc3\n  vGPUStatus: vGPUConfigured\n')),(0,i.kt)("p",null,"The pcidevices controller also runs a vGPU device plugin, which advertises the details of the various vGPU profiles to the kubelet. This is then used by the k8s scheduler to place the VM's requesting vGPU's to the correct nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'(\u2388|local:harvester-system)\u279c  ~ k get nodes harvester-kgd9c -o yaml | yq .status.allocatable\ncpu: "24"\ndevices.kubevirt.io/kvm: 1k\ndevices.kubevirt.io/tun: 1k\ndevices.kubevirt.io/vhost-net: 1k\nephemeral-storage: "149527126718"\nhugepages-1Gi: "0"\nhugepages-2Mi: "0"\nintel.com/82599_ETHERNET_CONTROLLER_VIRTUAL_FUNCTION: "1"\nmemory: 131858088Ki\nnvidia.com/NVIDIA_A2-4A: "2"\nnvidia.com/NVIDIA_A2-4C: "0"\nnvidia.com/NVIDIA_A2-4Q: "2"\npods: "200"\n')),(0,i.kt)("p",null,"The pcidevices controller also setups the integration with kubevirt and advertises the vGPU devices as externally managed devices in the Kubevirt CR to ensure that the VM can consume the vGPU."))}v.isMDXComponent=!0},24774:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/multiplevgpu-e0baf26650779d6e934d6e74b6ca7640.png"},35914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nvidia-a2-example-f6476be45cb7e65723e0fa202ea1ef57.png"},64838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sriovgpudevices-disabled-969fdd42cb4cb4c0179eac3584b12588.png"},1050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sriovgpudevices-enabled-a8964829cd0ad397572dc8c9a9aa8eb7.png"},68286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vgpuattachment-9e6a68d02bd0f694c6d67102800cba8e.png"},91676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vgpudevicelist-733490e0978706e8e4b5c914ed239ed6.png"},30332:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vgpuprofiles-2378338e5f2f13873d19cf8bbf7a99ce.png"}}]);