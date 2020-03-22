(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{205:function(t,a,e){"use strict";e.r(a);var s=e(28),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"osaka-jaddah"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#osaka-jaddah"}},[t._v("#")]),t._v(" Osaka <--\x3e Jaddah")]),t._v(" "),e("ul",[e("li",[t._v("Osaka vm 10.1.1.2  VCN-A")]),t._v(" "),e("li",[t._v("Jaddah vm 10.3.1.2 VCN-C")])]),t._v(" "),e("h2",{attrs:{id:"build-connection-step"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-connection-step"}},[t._v("#")]),t._v(" build connection step")]),t._v(" "),e("ol",[e("li",[t._v("In Region Osaka")]),t._v(" "),e("li",[t._v("Create DRG-1")]),t._v(" "),e("li",[t._v("Create Remote Peering-1")]),t._v(" "),e("li",[t._v("Attach VCN-A")]),t._v(" "),e("li",[t._v("Add DRG Route 10.3.0.0/16")]),t._v(" "),e("li",[t._v("In Region Jaddah")]),t._v(" "),e("li",[t._v("Create DRG-2")]),t._v(" "),e("li",[t._v("Create Remote Peering-2")]),t._v(" "),e("li",[t._v("Attach VCN-C")]),t._v(" "),e("li",[t._v("Add DRG Route 10.1.0.0/16")]),t._v(" "),e("li",[t._v("Establish remote peering connection from Osaka to Jaddah")])]),t._v(" "),e("h2",{attrs:{id:"traceroute-private-ip-10-3-1-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traceroute-private-ip-10-3-1-2"}},[t._v("#")]),t._v(" traceroute private ip 10.3.1.2")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("traceroute to 10.3.1.2 (10.3.1.2), 30 hops max, 60 byte packets\n 1  140.91.218.2 (140.91.218.2)  0.130 ms 140.91.218.7 (140.91.218.7)  0.093 ms  0.089 ms\n 2  140.91.220.13 (140.91.220.13)  336.242 ms 140.91.220.3 (140.91.220.3)  336.195 ms  336.206 ms\n 3  * * *\n 4  * * *\n")])])]),e("h2",{attrs:{id:"traceroute-public-ip-158-101-225-98"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traceroute-public-ip-158-101-225-98"}},[t._v("#")]),t._v(" traceroute public ip 158.101.225.98")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("traceroute to 158.101.225.98 (158.101.225.98), 30 hops max, 60 byte packets\n 1  140.91.218.2 (140.91.218.2)  0.140 ms 140.91.218.1 (140.91.218.1)  0.091 ms  0.085 ms\n 2  140.91.220.5 (140.91.220.5)  336.302 ms 140.91.220.1 (140.91.220.1)  336.345 ms 140.91.220.2 (140.91.220.2)  336.021 ms\n 3  * * *\n 4  * * *\n 5  * * *\n")])])]),e("h2",{attrs:{id:"ping-public-ip-158-101-225-98"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ping-public-ip-158-101-225-98"}},[t._v("#")]),t._v(" ping public ip 158.101.225.98")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("PING 158.101.225.98 (158.101.225.98) 56(84) bytes of data.\n64 bytes from 158.101.225.98: icmp_seq=1 ttl=62 time=336 ms\n64 bytes from 158.101.225.98: icmp_seq=2 ttl=62 time=336 ms\n64 bytes from 158.101.225.98: icmp_seq=3 ttl=62 time=336 ms\n")])])]),e("h2",{attrs:{id:"ping-private-ip-10-3-1-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ping-private-ip-10-3-1-2"}},[t._v("#")]),t._v(" ping private ip 10.3.1.2")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("PING 10.3.1.2 (10.3.1.2) 56(84) bytes of data.\n64 bytes from 10.3.1.2: icmp_seq=1 ttl=62 time=336 ms\n64 bytes from 10.3.1.2: icmp_seq=2 ttl=62 time=336 ms\n64 bytes from 10.3.1.2: icmp_seq=3 ttl=62 time=336 ms\n64 bytes from 10.3.1.2: icmp_seq=4 ttl=62 time=336 ms\n64 bytes from 10.3.1.2: icmp_seq=5 ttl=62 time=336 ms\n")])])]),e("h2",{attrs:{id:"sftp-private-ip-10-3-12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sftp-private-ip-10-3-12"}},[t._v("#")]),t._v(" sftp private ip 10.3.12")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Connected to 10.3.1.2.\nsftp> put a.tar\nUploading a.tar to /home/opc/a.tar\na.tar                                         100%  267MB   5.6MB/s   00:47\nsftp>\n")])])]),e("h2",{attrs:{id:"sftp-public-ip-158-101-225-98"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sftp-public-ip-158-101-225-98"}},[t._v("#")]),t._v(" sftp public ip 158.101.225.98")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Connected to 158.101.225.98.\nsftp> put a.tar\nUploading a.tar to /home/opc/a.tar\na.tar                                         100%  267MB   5.6MB/s   00:47\nsftp>\n")])])]),e("h2",{attrs:{id:"backbone-test-result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backbone-test-result"}},[t._v("#")]),t._v(" Backbone Test Result")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Region")]),t._v(" "),e("th",[t._v("Ping 公网IP")]),t._v(" "),e("th",[t._v("ping 内网IP")]),t._v(" "),e("th",[t._v("sftp 公网速度")]),t._v(" "),e("th",[t._v("sftp 内网速度")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Sao Paulo 到 Tokyo")]),t._v(" "),e("td",[t._v("306ms")]),t._v(" "),e("td",[t._v("304ms")]),t._v(" "),e("td",[t._v("6.1MB/s")]),t._v(" "),e("td",[t._v("6.1MB/s")])]),t._v(" "),e("tr",[e("td",[t._v("Sao Paulo 到 Mambai")]),t._v(" "),e("td",[t._v("305ms")]),t._v(" "),e("td",[t._v("305ms")]),t._v(" "),e("td",[t._v("6.1MB/s")]),t._v(" "),e("td",[t._v("6.1MB/s")])])])]),t._v(" "),e("p",[t._v("saopaulo - tokyo\nPING 158.101.146.215 (158.101.146.215) 56(84) bytes of data.\n64 bytes from 158.101.146.215: icmp_seq=1 ttl=62 time=315 ms\n64 bytes from 158.101.146.215: icmp_seq=2 ttl=62 time=315 ms\n64 bytes from 158.101.146.215: icmp_seq=3 ttl=62 time=315 ms\n64 bytes from 158.101.146.215: icmp_seq=4 ttl=62 time=315 ms\n64 bytes from 158.101.146.215: icmp_seq=5 ttl=62 time=315 ms")]),t._v(" "),e("p",[t._v("64 bytes from 10.1.1.2: icmp_seq=1 ttl=62 time=314 ms\n64 bytes from 10.1.1.2: icmp_seq=2 ttl=62 time=314 ms\n64 bytes from 10.1.1.2: icmp_seq=3 ttl=62 time=314 ms")]),t._v(" "),e("p",[t._v("Connected to 10.1.1.2.\nsftp> put a.tar\nUploading a.tar to /home/opc/a.tar\na.tar                                         100%  267MB   6.1MB/s   00:44\nsftp>")]),t._v(" "),e("p",[t._v("Connected to 152.67.38.64.\nsftp> put a.tar\nUploading a.tar to /home/opc/a.tar\na.tar                                         100%  267MB   6.1MB/s   00:43\nsftp")]),t._v(" "),e("h2",{attrs:{id:"reference-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference-link"}},[t._v("#")]),t._v(" Reference Link")]),t._v(" "),e("ul",[e("li",[t._v("https://docs.cloud.oracle.com/en-us/iaas/Content/Network/Tasks/remoteVCNpeering.htm")])])])}),[],!1,null,null,null);a.default=r.exports}}]);