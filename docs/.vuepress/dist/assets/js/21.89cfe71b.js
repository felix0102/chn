(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{252:function(e,l,t){"use strict";t.r(l);var o=t(28),s=Object(o.a)({},(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"yum-查看已经安装的软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-查看已经安装的软件"}},[e._v("#")]),e._v(" yum 查看已经安装的软件")]),e._v(" "),t("ul",[t("li",[e._v("yum list all ── 列出所有已安装的和可用的软件包")]),e._v(" "),t("li",[e._v("yum list installed ── 列出所有已经安装在系统中的软件包。输出结果的最右边一列是取得该软件包的软件仓库。标识为 installed 的软件包则说明它是做为系统基本组件而预安装的。")]),e._v(" "),t("li",[e._v("yum list available ── 列出所有启用的软件仓库中可用的软件包")]),e._v(" "),t("li",[e._v("yum grouplist ── 列出所有软件包组")]),e._v(" "),t("li",[e._v("yum repolist ── 列出所有启用的软件仓库的 ID，名称 及其包含的软件包的数量")])]),e._v(" "),t("h3",{attrs:{id:"新建-etc-yum-repos-d-google-chrome-repo-写入如下内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建-etc-yum-repos-d-google-chrome-repo-写入如下内容"}},[e._v("#")]),e._v(" 新建 /etc/yum.repos.d/google-chrome.repo,写入如下内容:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[google-chrome]\nname=google-chrome\nbaseurl=http://dl.google.com/linux/chrome/rpm/stable/x86_64\nenabled=1\ngpgcheck=1\ngpgkey=https://dl.google.com/linux/linux_signing_key.pub\n")])])]),t("ul",[t("li",[e._v("yum -y install google-chrome-stable --nogpgcheck")])])])}),[],!1,null,null,null);l.default=s.exports}}]);