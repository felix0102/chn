(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{239:function(t,a,e){"use strict";e.r(a);var s=e(28),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"安装oracle-instant-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装oracle-instant-client"}},[t._v("#")]),t._v(" 安装Oracle instant client")]),t._v(" "),e("ul",[e("li",[t._v("https://oracle-base.com/articles/misc/oracle-instant-client-installation#yum")]),t._v(" "),e("li",[t._v("https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# (Optional) Get the latest repository info.\ncd /etc/yum.repos.d\nrm -f public-yum-ol7.repo\nwget https://yum.oracle.com/public-yum-ol7.repo\n\n# disable gpgcheck\n%s/gpgcheck=1/gpgcheck=0/g\n\n# Enable the instant client repository.\nyum install -y yum-utils\nyum-config-manager --enable ol7_oracle_instantclient\n\n# (Optional) Check what packages are available.\nyum list oracle-instantclient*\n\n# Install basic and sqlplus.\nyum install -y oracle-instantclient18.3-basic oracle-instantclient18.3-sqlplus\nyum install oracle-instantclient18.3-sqlplus\n\n配置环境变量：\nexport ORACLE_HOME=/usr/lib/oracle/18.3/client64\nexport LD_LIBRARY_PATH=$ORACLE_HOME/lib\nPATH=$PATH:$HOME/.local/bin:$HOME/bin:/$ORACLE_HOME/bin\n\ninstant client tools provides exp / imp utilities since v12.2.0.1.0. Unrestricted download is available:\n\nhttps://www.oracle.com/technetwork/database/database-technologies/instant-client/downloads/index.html\n\nhttps://serverfault.com/questions/334493/how-to-install-oracles-exp-imp-binaries\n\n")])])]),e("h3",{attrs:{id:"oracle-datadase-server-安装-创建用户及用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oracle-datadase-server-安装-创建用户及用户组"}},[t._v("#")]),t._v(" Oracle Datadase Server 安装 创建用户及用户组")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("groupadd oinstall #创建oinstall\ngroupadd dba # 创建dba组\nuseradd -g oinstall -G dba oracle #创建oracle用\n")])])]),e("h3",{attrs:{id:"创建目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[t._v("#")]),t._v(" 创建目录")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mkdir -p /u01/app/oracle\nchown -R oracle:oinstall /u01/app/oracle\nchmod -R 775 /u01/app/oracle\n")])])]),e("h3",{attrs:{id:"安装依赖的类库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖的类库"}},[t._v("#")]),t._v(" 安装依赖的类库")]),t._v(" "),e("ul",[e("li",[t._v("yum install oracle-rdbms-server-12cR1-preinstall")])]),t._v(" "),e("h3",{attrs:{id:"配置内核参数-etc-sysctl-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置内核参数-etc-sysctl-conf"}},[t._v("#")]),t._v(" 配置内核参数/etc/sysctl.conf")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("添加\noracle soft nproc 2047\noracle hard nproc 16384\noracle soft nofile 1024\noracle hard nofile 65536\noracle soft stack 10240\n")])])]),e("h3",{attrs:{id:"开始安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[t._v("#")]),t._v(" 开始安装")]),t._v(" "),e("ul",[e("li",[t._v("runInstaller -silent -responseFile /home/oracle/etc/db_install.rsp")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://raw.githubusercontent.com/felix0102/chn/master/oracle/db_install.rsp",target:"_blank",rel:"noopener noreferrer"}},[t._v("db_install.rsp"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"root进行相关配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#root进行相关配置"}},[t._v("#")]),t._v(" root进行相关配置")]),t._v(" "),e("p",[t._v("As a root user, execute the following script(s):")]),t._v(" "),e("ol",[e("li",[t._v("/u01/app/oracle/oraInventory/orainstRoot.sh")]),t._v(" "),e("li",[t._v("/u01/app/oracle/product/12.1.0/db_1/root.sh")])]),t._v(" "),e("h3",{attrs:{id:"配置启动监听"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置启动监听"}},[t._v("#")]),t._v(" 配置启动监听")]),t._v(" "),e("ul",[e("li",[t._v("/u01/app/oracle/product/12.1.0/db_1/bin/netca -silent -responseFile /home/oracle/netca.rsp")]),t._v(" "),e("li",[t._v("lsnrctl start")]),t._v(" "),e("li",[t._v("lsnrctl status")]),t._v(" "),e("li",[t._v("lsnrctl reload 重新启动监听")])]),t._v(" "),e("h3",{attrs:{id:"创建数据库实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库实例"}},[t._v("#")]),t._v(" 创建数据库实例")]),t._v(" "),e("ul",[e("li",[t._v("dbca -silent -responseFile /home/oracle/dbca.rsp")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("INFO: Adding ExitStatus VAR_VALIDATION_FAILURE to the exit status set\nWARNING: A log of this session is currently saved as: /tmp/OraInstall2013-11-15_02-29-20PM/installActions2013-11-15_02-29-20PM.log. Oracle recommends that if you want to keep this log, you should move it from the temporary location.\nINFO: Finding the most appropriate exit status for the current application\nINFO: Exit Status is -2\nINFO: Shutdown Oracle Database 12c Release 1 Installer\nINFO: Unloading Setup Driver\n")])])]),e("ul",[e("li",[t._v("Because DECLINE_SECURITY_UPDATES=false has been set before, so here he quit, failed to complete the installation")])]),t._v(" "),e("h3",{attrs:{id:"reference-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference-link"}},[t._v("#")]),t._v(" Reference Link")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/309bb3504285",target:"_blank",rel:"noopener noreferrer"}},[t._v("oracle12c installation silent"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=l.exports}}]);