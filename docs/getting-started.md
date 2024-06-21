---
sidebar_position: 2
sidebar_label: Getting Started
title: "Getting Started"
keywords:
- Harvester
- getting started
- step by step
- deployment
---

A three-node [Harvester cluster](../glossary/#harvester-cluster) is required to fully realize multi-node features such as high availability. Certain versions of Harvester allow you to create clusters with two management nodes and one [witness node](../advanced/witness/) (and optionally, one or more worker nodes). You can also create [single-node clusters](../advanced/singlenodeclusters/) that support most Harvester features (excluding high availability, multi-replica support, and live migration).

This guide walks you through the steps required to deploy a high-availability cluster and virtual machines (VMs) that can host [guest clusters](../glossary/#guest-cluster--guest-kubernetes-cluster).

## 1. Verify that the minimum hardware and network requirements for installing and running Harvester are met.

Harvester is built for bare metal servers using enterprise-grade open-source software components. The installer automatically checks the hardware and displays warning messages if the minimum [requirements](../install/requirements) are not met.

## 2. Prepare the installation files based on the installation method that you want to use.

You can download the installation files from the [Harvester Releases](https://github.com/harvester/harvester/releases) page. The **Downloads** section of the release notes contains links to the ISO files and related artifacts. The following types of ISO files are available:

- **Full ISO**: Contains the core operating system components and all required container images, which are preloaded during installation. You must use a full ISO when installing Harvester behind a firewall or proxy, and in environments without internet connectivity.
- [**Net install ISO**](../install/net-install): Contains only the core operating system components. After installation is completed, the operating system pulls all required container images from the internet (mostly from Docker Hub).

<p>&nbsp;</p>
| Method | Required Installation Files | Other Requirements |
| --- | --- | --- |
| [ISO](../install/index) | ISO | N/A |
| [USB](../install/usb-install) | ISO | USB flash drive; utility such as [balenaEtcher](https://etcher.balena.io/) or the Linux [dd command](https://man7.org/linux/man-pages/man1/dd.1.html) |
| [PXE](../install/pxe-boot-install) | ISO, Linux kernel image (vmlinuz), initrd, SquashFS image | Directory on the HTTP server (for serving boot files); iPXE boot scripts (for automatic installation); DHCP server configuration |

## 3. Prepare the cluster configuration requirements.

- Cluster token: ASCII string that nodes use when joining the cluster
- Fixed IP address for each node: May be assigned statically or using DHCP (host reservation)
- Fixed virtual IP address (VIP) to be used as the cluster management address: VIP that nodes point to when joining the cluster and that you connect to when performing administration tasks after the cluster is deployed
- Addresses of DNS servers, NTP servers, and the proxy server (if necessary)

## 4. Deploy the first cluster node.

Deployment involves installing the operating system and other components on the host, and then rebooting once installation is completed. Deploying the first node creates the cluster, and the first node is assigned the management node by default.
    
During installation, you must configure node settings, define the cluster management address (VIP) and the cluster token, and specify other information. If necessary, you can configure more settings related to installation, the operating system, and advanced features using a [Harvester configuration](../install/harvester-configuration/) file.

Once installation is completed, the node restarts and then the Harvester console appears. The console displays information about the cluster (management URL and status) and the node (hostname, IP address, and status). After the cluster is initialized and all services start running, the cluster status changes to **Ready**.

## 5. Configure a strong password for the default `admin` user on the Harvester UI. 

Once the cluster status changes to **Ready**, you can access the [Harvester UI](../authentication) using the management URL displayed on the console.

## 6. Deploy the other nodes and join them to the cluster.

Deployment involves installing the operating system and other components on the host, and then rebooting once installation is completed. All other nodes join the cluster that was created when the first node was deployed.

During installation, you must configure node settings, and specify the cluster management address (virtual IP) and the cluster token that you defined previously. If necessary, you can configure more settings related to installation, the operating system, and advanced features using a [Harvester configuration](../install/harvester-configuration/) file.

When the cluster has three or more nodes, the two nodes added after the first node are automatically promoted to management nodes to form a high-availability (HA) cluster. All other nodes function as worker nodes.

## 7. Networking?

## 8. Import one or more VM images.

On the Harvester UI, you can import ISO, qcow2, and raw [images](../upload-image/) by uploading an image from the local file system, or by specifying the URL of an image that can be accessed from the cluster.

## 9. (Optional) Import SSH keys.

You can store SSH public keys in Harvester. When a VM is launched, a stored key can be [injected](../vm/access-to-the-vm/#ssh-access) into the VM to allow secure access via SSH. Validated keys are displayed on the **SSH Keys** screen on the Harvester UI.

## 10.