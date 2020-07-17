(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(e,r,t){e.exports=t.p+"assets/img/dns-resolution.bea7ecbb.png"},393:function(e,r,t){"use strict";t.r(r);var a=t(42),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[e._v("#")]),e._v(" DNS")]),e._v(" "),a("h2",{attrs:{id:"dns-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-是什么"}},[e._v("#")]),e._v(" DNS 是什么?")]),e._v(" "),a("p",[e._v("DNS(The Domain Name Systems)就是互联网的电话号码簿，把域名转为 IP")]),e._v(" "),a("h2",{attrs:{id:"dns-如何工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-如何工作"}},[e._v("#")]),e._v(" DNS 如何工作")]),e._v(" "),a("p",[a("img",{attrs:{src:t(349),alt:"dns-resolution"}})]),e._v(" "),a("ol",[a("li",[e._v("本地的 DNS 客户端向 DNS 解析器发出解析 "),a("code",[e._v("draveness.me")]),e._v(" 域名的请求；")]),e._v(" "),a("li",[e._v("DNS 解析器首先会向就近的根 DNS 服务器 . 请求顶级域名 DNS 服务的地址；")]),e._v(" "),a("li",[e._v("拿到顶级域名 DNS 服务 "),a("code",[e._v("me.")]),e._v(" 的地址之后会向顶级域名服务请求负责 "),a("code",[e._v("dravenss.me.")]),e._v(" 域名解析的命名服务；")]),e._v(" "),a("li",[e._v("得到授权的 DNS 命名服务时，就可以根据请求的具体的主机记录直接向该服务请求域名对应的 IP 地址；")])]),e._v(" "),a("p",[e._v("对于 DNS 解析器，这里使用的 DNS 查询方式是迭代查询，每个 DNS 服务并不会直接返回 DNS 信息，而是会返回另一台 DNS 服务器的位置，由客户端依次询问不同级别的 DNS 服务直到查询得到了预期的结果；另一种查询方式叫做递归查询，也就是 DNS 服务器收到客户端的请求之后会直接返回准确的结果，如果当前服务器没有存储 DNS 信息，就会访问其他的服务器并将结果返回给客户端。")]),e._v(" "),a("h3",{attrs:{id:"域名服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名服务器"}},[e._v("#")]),e._v(" 域名服务器")]),e._v(" "),a("p",[e._v("既然域名的命名空间是树形的，那么用于处理域名解析的 DNS 服务器也是树形的，只是在树的组织和每一层的职责上有一些不同。DNS 解析器从根域名服务器查找到顶级域名服务器的 IP 地址，又从顶级域名服务器查找到权威域名服务器的 IP 地址，最终从权威域名服务器查出了对应服务的 IP 地址。")]),e._v(" "),a("p",[e._v("4 种 DNS 服务器")]),e._v(" "),a("ul",[a("li",[e._v("DNS recursor")])]),e._v(" "),a("blockquote",[a("p",[e._v("The recursor can be thought of as a librarian who is asked to go find a particular book somewhere in a library.")])]),e._v(" "),a("p",[e._v("The DNS recursor is a server designed to receive queries from client machines through applications such as web browsers. Typically the recursor is then responsible for making additional requests in order to satisfy the client’s DNS query.")]),e._v(" "),a("ul",[a("li",[e._v("Root nameserver")])]),e._v(" "),a("blockquote",[a("p",[e._v("It can be thought of like an index in a library that points to different racks of books")])]),e._v(" "),a("p",[e._v("The root server is the first step in translating (resolving) human readable host names into IP addresses.")]),e._v(" "),a("ul",[a("li",[e._v("TLD nameserver")])]),e._v(" "),a("blockquote",[a("p",[e._v("The top level domain server (TLD) can be thought of as a specific rack of books in a library.")])]),e._v(" "),a("p",[e._v("This nameserver is the next step in the search for a specific IP address, and it hosts the last portion of a hostname")]),e._v(" "),a("ul",[a("li",[e._v("Authoritative nameserver")])]),e._v(" "),a("blockquote",[a("p",[e._v("This final nameserver can be thought of as a dictionary on a rack of books, in which a specific name can be translated into its definition.")])]),e._v(" "),a("p",[e._v("The authoritative nameserver is the last stop in the nameserver query. If the authoritative name server has access to the requested record, it will return the IP address for the requested hostname back to the DNS Recursor (the librarian) that made the initial request.")]),e._v(" "),a("h3",{attrs:{id:"authoritative-dns-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authoritative-dns-server"}},[e._v("#")]),e._v(" Authoritative DNS server")]),e._v(" "),a("p",[e._v("an authoritative DNS server is a server that actually holds, and is responsible for, DNS resource records.")]),e._v(" "),a("h4",{attrs:{id:"dns-的记录类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-的记录类型"}},[e._v("#")]),e._v(" DNS 的记录类型")]),e._v(" "),a("ul",[a("li",[e._v("A：地址记录（Address），返回域名指向的 IP 地址。")]),e._v(" "),a("li",[e._v("NS：域名服务器记录（Name Server），返回保存下一级域名信息的服务器地址。该记录只能设置为域名，不能设置为 IP 地址。")]),e._v(" "),a("li",[e._v("MX：邮件记录（Mail eXchange），返回接收电子邮件的服务器地址。")]),e._v(" "),a("li",[e._v("CNAME：规范名称记录（Canonical Name），返回另一个域名，即当前查询的域名是另一个域名的跳转，详见下文。")]),e._v(" "),a("li",[e._v("PTR：逆向查询记录（Pointer Record），只用于从 IP 地址查询域名")])]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cloudflare.com/learning/dns/what-is-dns/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What Is DNS? | How DNS Works"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://draveness.me/dns-coredns",target:"_blank",rel:"noopener noreferrer"}},[e._v("详解 DNS 与 CoreDNS 的实现原理"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/06/dns.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("DNS 原理入门"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);