### 阿里云

支付宝账号   Hu-7


### centos常用漏洞升级修复命令
```
centos常用漏洞升级修复命令
yum update kernel
yum update kernel-devel
yum update kernel-firmware
yum update kernel-headers
yum update nss-util
yum update nss
yum update nss-sysinit
yum update nss-tools
yum update vim-minimal
yum update openssh
yum update openssh-clients
yum update openssh-server
yum update python
yum update python-libs

升级系统内核：yum -y upgrade
升级所有包，改变软件设置和系统设置,系统版本内核都升级：yum -y update

升级所有包，不改变软件设置和系统设置，系统版本升级，内核不改变:yum -y upgrade
```

CentOS upgrade history

```
2019-12-04 lsb_release -a
LSB Version:	:base-4.0-amd64:base-4.0-noarch:core-4.0-amd64:core-4.0-noarch
Distributor ID:	CentOS
Description:	CentOS release 6.10 (Final)
Release:	6.10
Codename:	Final
```
```
2019-12-04 :lsb_release  -a
LSB Version:	:base-4.0-amd64:base-4.0-noarch:core-4.0-amd64:core-4.0-noarch
Distributor ID:	CentOS
Description:	CentOS release 6.9 (Final)
Release:	6.9
Codename:	Final
```