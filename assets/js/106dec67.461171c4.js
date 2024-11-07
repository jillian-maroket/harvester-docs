"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[35439],{41198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});t(67294);var a=t(3905);const i={sidebar_position:4,sidebar_label:"Harvester Configuration",title:"Harvester Configuration",keywords:["Harvester","harvester","Rancher","rancher","Harvester Configuration"],description:"Harvester configuration file can be provided during manual or automatic installation to configure various settings."},l=void 0,o={unversionedId:"install/harvester-configuration",id:"version-v0.3/install/harvester-configuration",title:"Harvester Configuration",description:"Harvester configuration file can be provided during manual or automatic installation to configure various settings.",source:"@site/versioned_docs/version-v0.3/install/harvester-configuration.md",sourceDirName:"install",slug:"/install/harvester-configuration",permalink:"/v0.3/install/harvester-configuration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/install/harvester-configuration.md",tags:[],version:"v0.3",lastUpdatedAt:1730967112,formattedLastUpdatedAt:"Nov 7, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Configuration",title:"Harvester Configuration",keywords:["Harvester","harvester","Rancher","rancher","Harvester Configuration"],description:"Harvester configuration file can be provided during manual or automatic installation to configure various settings."},sidebar:"api",previous:{title:"PXE Boot Installation",permalink:"/v0.3/install/pxe-boot-install"},next:{title:"Management Address",permalink:"/v0.3/install/management-address"}},r={},s=[{value:"Configuration Example",id:"configuration-example",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"<code>server_url</code>",id:"server_url",level:3},{value:"Definition",id:"definition",level:4},{value:"Example",id:"example",level:4},{value:"<code>token</code>",id:"token",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>os.ssh_authorized_keys</code>",id:"osssh_authorized_keys",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>os.write_files</code>",id:"oswrite_files",level:3},{value:"<code>os.hostname</code>",id:"oshostname",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>os.modules</code>",id:"osmodules",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>os.sysctls</code>",id:"ossysctls",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>os.dns_nameservers</code>",id:"osdns_nameservers",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Example",id:"example-6",level:4},{value:"<code>os.ntp_servers</code>",id:"osntp_servers",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>os.password</code>",id:"ospassword",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Example",id:"example-8",level:4},{value:"<code>os.environment</code>",id:"osenvironment",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Example",id:"example-9",level:4},{value:"<code>install.mode</code>",id:"installmode",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Example",id:"example-10",level:4},{value:"<code>install.networks</code>",id:"installnetworks",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Example",id:"example-11",level:4},{value:"<code>install.force_efi</code>",id:"installforce_efi",level:3},{value:"<code>install.device</code>",id:"installdevice",level:3},{value:"<code>install.silent</code>",id:"installsilent",level:3},{value:"<code>install.iso_url</code>",id:"installiso_url",level:3},{value:"<code>install.poweroff</code>",id:"installpoweroff",level:3},{value:"<code>install.no_format</code>",id:"installno_format",level:3},{value:"<code>install.debug</code>",id:"installdebug",level:3},{value:"<code>install.tty</code>",id:"installtty",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Example",id:"example-12",level:4},{value:"<code>install.vip</code>",id:"installvip",level:3},{value:"<code>install.vip_mode</code>",id:"installvip_mode",level:3},{value:"<code>install.vip_hw_addr</code>",id:"installvip_hw_addr",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Example",id:"example-13",level:4}],d={toc:s},p="wrapper";function m({components:e,...n}){return(0,a.kt)(p,{...d,...n,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/harvester-configuration"})),(0,a.kt)("h2",{id:"configuration-example"},"Configuration Example"),(0,a.kt)("p",null,"Harvester configuration file can be provided during manual or automatic installation to configure various settings. The following is a configuration example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'server_url: https://someserver:8443\ntoken: TOKEN_VALUE\nos:\n  ssh_authorized_keys:\n    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQAB...\n    - github:username\n  write_files:\n  - encoding: ""\n    content: test content\n    owner: root\n    path: /etc/test.txt\n    permissions: \'0755\'\n  hostname: myhost\n  modules:\n    - kvm\n    - nvme\n  sysctls:\n    kernel.printk: "4 4 1 7"\n    kernel.kptr_restrict: "1"\n  dns_nameservers:\n    - 8.8.8.8\n    - 1.1.1.1\n  ntp_servers:\n    - 0.us.pool.ntp.org\n    - 1.us.pool.ntp.org\n  password: rancher\n  environment:\n    http_proxy: http://myserver\n    https_proxy: http://myserver\ninstall:\n  mode: create\n  networks:\n    harvester-mgmt:\n      interfaces:\n      - name: ens5\n      default_route: true\n      method: dhcp\n  force_efi: true\n  device: /dev/vda\n  silent: true\n  iso_url: http://myserver/test.iso\n  poweroff: true\n  no_format: true\n  debug: true\n  tty: ttyS0\n  vip: 10.10.0.19\n  vip_hw_addr: 52:54:00:ec:0e:0b\n  vip_mode: dhcp\n')),(0,a.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,a.kt)("p",null,"Below is a reference of all configuration keys."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file contains credentials which should be kept secret. Please do not make the configuration file publicly accessible.")),(0,a.kt)("h3",{id:"server_url"},(0,a.kt)("inlineCode",{parentName:"h3"},"server_url")),(0,a.kt)("h4",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The URL of the Harvester server to join as an agent."),(0,a.kt)("p",null,"This configuration is mandatory when the installation is in ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. It tells the Harvester installer where the main server is."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server_url: https://someserver:8443\ninstall:\n  mode: join\n")),(0,a.kt)("h3",{id:"token"},(0,a.kt)("inlineCode",{parentName:"h3"},"token")),(0,a.kt)("h4",{id:"definition-1"},"Definition"),(0,a.kt)("p",null,"The cluster secret or node token. If the value matches the format of a node token it will\nautomatically be assumed to be a node token. Otherwise it is treated as a cluster secret."),(0,a.kt)("p",null,"In order for a new node to join the Harvester cluster, the token should match what the server has."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"token: myclustersecret\n")),(0,a.kt)("p",null,"Or a node token"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'token: "K1074ec55daebdf54ef48294b0ddf0ce1c3cb64ee7e3d0b9ec79fbc7baf1f7ddac6::node:77689533d0140c7019416603a05275d4"\n')),(0,a.kt)("h3",{id:"osssh_authorized_keys"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.ssh_authorized_keys")),(0,a.kt)("h4",{id:"definition-2"},"Definition"),(0,a.kt)("p",null,"A list of SSH authorized keys that should be added to the default user, ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher"),". SSH keys can be obtained from GitHub user accounts by using the format\n",(0,a.kt)("inlineCode",{parentName:"p"},"github:${USERNAME}"),". This is done by downloading the keys from ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/${USERNAME}.keys"),"."),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  ssh_authorized_keys:\n    - "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC2TBZGjE+J8ag11dzkFT58J3XPONrDVmalCNrKxsfADfyy0eqdZrG8hcAxAR/5zuj90Gin2uBR4Sw6Cn4VHsPZcFpXyQCjK1QDADj+WcuhpXOIOY3AB0LZBly9NI0ll+8lo3QtEaoyRLtrMBhQ6Mooy2M3MTG4JNwU9o3yInuqZWf9PvtW6KxMl+ygg1xZkljhemGZ9k0wSrjqif+8usNbzVlCOVQmZwZA+BZxbdcLNwkg7zWJSXzDIXyqM6iWPGXQDEbWLq3+HR1qKucTCSxjbqoe0FD5xcW7NHIME5XKX84yH92n6yn+rxSsyUfhJWYqJd+i0fKf5UbN6qLrtd/D"\n    - "github:ibuildthecloud"\n')),(0,a.kt)("h3",{id:"oswrite_files"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.write_files")),(0,a.kt)("p",null,"A list of files to write to disk on boot. The ",(0,a.kt)("inlineCode",{parentName:"p"},"encoding")," field specifies the content's encoding. Valid ",(0,a.kt)("inlineCode",{parentName:"p"},"encoding")," values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'""'),": content data are written in plain text. In this case, the ",(0,a.kt)("inlineCode",{parentName:"li"},"encoding")," field can be also omitted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b64"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"base64"),": content data are base64-encoded."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gz"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"gzip"),": content data are gzip-compressed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gz+base64"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"gzip+base64"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"gz+b64"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"gzip+b64"),": content data are gzip-compressed first and then base64-encoded.")),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  write_files:\n  - encoding: b64\n    content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4...\n    owner: root:root\n    path: /etc/connman/main.conf\n    permissions: '0644'\n  - content: |\n      # My new /etc/sysconfig/samba file\n\n      SMDBOPTIONS=\"-D\"\n    path: /etc/sysconfig/samba\n  - content: !!binary |\n      f0VMRgIBAQAAAAAAAAAAAAIAPgABAAAAwARAAAAAAABAAAAAAAAAAJAVAAAAAA\n      AEAAHgAdAAYAAAAFAAAAQAAAAAAAAABAAEAAAAAAAEAAQAAAAAAAwAEAAAAAAA\n      AAAAAAAAAwAAAAQAAAAAAgAAAAAAAAACQAAAAAAAAAJAAAAAAAAcAAAAAAAAAB\n      ...\n    path: /bin/arch\n    permissions: '0555'\n  - content: |\n      15 * * * * root ship_logs\n    path: /etc/crontab\n")),(0,a.kt)("h3",{id:"oshostname"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.hostname")),(0,a.kt)("h4",{id:"definition-3"},"Definition"),(0,a.kt)("p",null,"Set the system hostname. If the system hostname is supplied via DHCP, then that value will be used here. If this value is not set and one is not supplied via DHCP, then a random hostname will be generated."),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  hostname: myhostname\n")),(0,a.kt)("h3",{id:"osmodules"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.modules")),(0,a.kt)("h4",{id:"definition-4"},"Definition"),(0,a.kt)("p",null,"A list of kernel modules to be loaded on start."),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  modules:\n    - kvm\n    - nvme\n")),(0,a.kt)("h3",{id:"ossysctls"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.sysctls")),(0,a.kt)("h4",{id:"definition-5"},"Definition"),(0,a.kt)("p",null,"Kernel sysctl to set up on start. These are the typical configurations found in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf"),".\nValues must be specified as strings."),(0,a.kt)("h4",{id:"example-5"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  sysctls:\n    kernel.printk: 4 4 1 7 # the YAML parser will read as a string\n    kernel.kptr_restrict: "1" # force the YAML parser to read as a string\n')),(0,a.kt)("h3",{id:"osdns_nameservers"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.dns_nameservers")),(0,a.kt)("h4",{id:"definition-6"},"Definition"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fallback")," DNS name servers to use if DNS is not configured by DHCP or in the OS."),(0,a.kt)("h4",{id:"example-6"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  dns_nameservers:\n    - 8.8.8.8\n    - 1.1.1.1\n")),(0,a.kt)("h3",{id:"osntp_servers"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.ntp_servers")),(0,a.kt)("h4",{id:"definition-7"},"Definition"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fallback")," ntp servers to use if NTP is not configured elsewhere in the OS."),(0,a.kt)("h4",{id:"example-7"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  ntp_servers:\n    - 0.us.pool.ntp.org\n    - 1.us.pool.ntp.org\n")),(0,a.kt)("h3",{id:"ospassword"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.password")),(0,a.kt)("h4",{id:"definition-8"},"Definition"),(0,a.kt)("p",null,"The password for the default user, ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher"),". By default, there is no password for the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher")," user.\nIf you set a password at runtime it will be reset on the next boot. The\nvalue of the password can be clear text or an encrypted form. The easiest way to get this encrypted\nform is to change your password on a Linux system and copy the value of the second field from\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/shadow"),". You can also encrypt a password using ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl passwd -6"),"."),(0,a.kt)("h4",{id:"example-8"},"Example"),(0,a.kt)("p",null,"Encrypted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  password: "$6$kZYUnRaTxNdg4W8H$WSEJydGWsNpaRbbbRdTDLJ2hDLbkizxSFGW2RtexlqG6njEATaGQG9ssztjaKDCsaNUPBZ1E1YdsvSLMAi/IO/"\n')),(0,a.kt)("p",null,"Or clear text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  password: supersecure\n")),(0,a.kt)("h3",{id:"osenvironment"},(0,a.kt)("inlineCode",{parentName:"h3"},"os.environment")),(0,a.kt)("h4",{id:"definition-9"},"Definition"),(0,a.kt)("p",null,"Environment variables to be set on K3s and other processes like the boot process.\nPrimary use of this field is to set the HTTP proxy."),(0,a.kt)("h4",{id:"example-9"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  environment:\n    http_proxy: http://myserver\n    https_proxy: http://myserver\n")),(0,a.kt)("h3",{id:"installmode"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.mode")),(0,a.kt)("h4",{id:"definition-10"},"Definition"),(0,a.kt)("p",null,"Harvester installation mode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create"),": Creating a new Harvester installation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"join"),": Join an existing Harvester installation. Need to specify ",(0,a.kt)("inlineCode",{parentName:"li"},"server_url"),".")),(0,a.kt)("h4",{id:"example-10"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  mode: create\n")),(0,a.kt)("h3",{id:"installnetworks"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.networks")),(0,a.kt)("h4",{id:"definition-11"},"Definition"),(0,a.kt)("p",null,"Configure network interfaces for the host machine. Each key-value pair\nrepresents a network interface. The key name becomes the network name, and\nthe values are configurations for each network. Valid configuration fields are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"method"),": Method to assign an IP to this network. The following are supported:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static"),": Manually assign an IP and gateway."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dhcp"),": Request an IP from the DHCP server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"none"),": Do nothing. Useful when the interface does not need an IP, such as when creating ",(0,a.kt)("a",{parentName:"li",href:"/v0.3/networking/harvester-network#vlan-network"},"VLAN network")," NIC in Harvester."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ip"),": Static IP for this network. Required if ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," method is chosen."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subnet_mask"),": Subnet mask for this network. Required if ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," method is chosen."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gateway"),": Gateway for this network. Required if ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," method is chosen."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interfaces"),": An array of interface names. If provided, the installer then combines these NICs into a single logical bonded interface.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interfaces.name"),": The name of the slave interface for the bonded network."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default_route"),": Set the network as the default route or not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bond_options"),": Options for bonded interfaces. Refer to ",(0,a.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/networking/bonding.txt"},"here")," for more info. If not provided, the following options would be used:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode: balance-tlb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"miimon: 100"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A network called ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," is mandatory to establish a valid ",(0,a.kt)("a",{parentName:"p",href:"/v0.3/networking/harvester-network#management-network"},"management network"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.net-naming-scheme.html"},"systemd net naming scheme"),".\nPlease make sure the interface name is present on the target machine before installation.")),(0,a.kt)("h4",{id:"example-11"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  mode: create\n  networks:\n    harvester-mgmt:       # The management bond name. This is mandatory.\n      interfaces:\n      - name: ens5\n      default_route: true\n      method: dhcp\n      bond_options:\n        mode: balance-tlb\n        miimon: 100\n    harvester-vlan:       # The VLAN network bond name. User can then input `harvester-vlan` in the VLAN NIC setting in the GUI.\n      interfaces:\n      - name: ens6\n      method: none\n      bond_options:\n        mode: balance-tlb\n        miimon: 100\n    bond0:\n      interfaces:\n      - name: ens8\n      method: static\n      ip: 10.10.18.2\n      subnet_mask: 255.255.255.0\n      gateway: 192.168.11.1\n")),(0,a.kt)("h3",{id:"installforce_efi"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.force_efi")),(0,a.kt)("p",null,"Force EFI installation even when EFI is not detected. Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"installdevice"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.device")),(0,a.kt)("p",null,"The device to install the OS."),(0,a.kt)("h3",{id:"installsilent"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.silent")),(0,a.kt)("p",null,"Reserved."),(0,a.kt)("h3",{id:"installiso_url"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.iso_url")),(0,a.kt)("p",null,"ISO to download and install from if booting from kernel/vmlinuz and not ISO."),(0,a.kt)("h3",{id:"installpoweroff"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.poweroff")),(0,a.kt)("p",null,"Shutdown the machine after installation instead of rebooting"),(0,a.kt)("h3",{id:"installno_format"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.no_format")),(0,a.kt)("p",null,"Do not partition and format, assume layout exists already."),(0,a.kt)("h3",{id:"installdebug"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.debug")),(0,a.kt)("p",null,"Run the installation with additional logging and debugging enabled for the installed system."),(0,a.kt)("h3",{id:"installtty"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.tty")),(0,a.kt)("h4",{id:"definition-12"},"Definition"),(0,a.kt)("p",null,"The tty device used for the console."),(0,a.kt)("h4",{id:"example-12"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  tty: ttyS0,115200n8\n")),(0,a.kt)("h3",{id:"installvip"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.vip")),(0,a.kt)("h3",{id:"installvip_mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.vip_mode")),(0,a.kt)("h3",{id:"installvip_hw_addr"},(0,a.kt)("inlineCode",{parentName:"h3"},"install.vip_hw_addr")),(0,a.kt)("h4",{id:"definition-13"},"Definition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install.vip"),": The VIP of the Harvester management endpoint. After installation, users can access the Harvester GUI at the URL ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<VIP>"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install.vip_mode"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dhcp"),": Harvester will send DHCP requests to get the VIP. The ",(0,a.kt)("inlineCode",{parentName:"li"},"install.vip_hw_addr")," field needs to be provided."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static"),": Harvester uses a static VIP."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install.vip_hw_addr"),": The hardware address corresponding to the VIP. Users must configure their on-premise DHCP server to offer the configured VIP. The field is mandatory when ",(0,a.kt)("inlineCode",{parentName:"li"},"install.vip_mode")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"dhcp"),".")),(0,a.kt)("h4",{id:"example-13"},"Example"),(0,a.kt)("p",null,"Configure a static VIP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  vip: 192.168.0.100\n  vip_mode: static\n")),(0,a.kt)("p",null,"Configure a DHCP VIP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  vip: 10.10.0.19\n  vip_mode: dhcp\n  vip_hw_addr: 52:54:00:ec:0e:0b\n")))}m.isMDXComponent=!0}}]);