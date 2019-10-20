# DNS

## DNS 是什么?

DNS(The Domain Name Systems)就是互联网的电话号码簿，把域名转为 IP

## DNS 如何工作

![dns-resolution](./imgs/dns-resolution.png)

1. 本地的 DNS 客户端向 DNS 解析器发出解析 `draveness.me` 域名的请求；
2. DNS 解析器首先会向就近的根 DNS 服务器 . 请求顶级域名 DNS 服务的地址；
3. 拿到顶级域名 DNS 服务 `me.` 的地址之后会向顶级域名服务请求负责 `dravenss.me.` 域名解析的命名服务；
4. 得到授权的 DNS 命名服务时，就可以根据请求的具体的主机记录直接向该服务请求域名对应的 IP 地址；

对于 DNS 解析器，这里使用的 DNS 查询方式是迭代查询，每个 DNS 服务并不会直接返回 DNS 信息，而是会返回另一台 DNS 服务器的位置，由客户端依次询问不同级别的 DNS 服务直到查询得到了预期的结果；另一种查询方式叫做递归查询，也就是 DNS 服务器收到客户端的请求之后会直接返回准确的结果，如果当前服务器没有存储 DNS 信息，就会访问其他的服务器并将结果返回给客户端。

### 域名服务器

既然域名的命名空间是树形的，那么用于处理域名解析的 DNS 服务器也是树形的，只是在树的组织和每一层的职责上有一些不同。DNS 解析器从根域名服务器查找到顶级域名服务器的 IP 地址，又从顶级域名服务器查找到权威域名服务器的 IP 地址，最终从权威域名服务器查出了对应服务的 IP 地址。

4 种 DNS 服务器

- DNS recursor

> The recursor can be thought of as a librarian who is asked to go find a particular book somewhere in a library.

The DNS recursor is a server designed to receive queries from client machines through applications such as web browsers. Typically the recursor is then responsible for making additional requests in order to satisfy the client’s DNS query.

- Root nameserver

> It can be thought of like an index in a library that points to different racks of books

The root server is the first step in translating (resolving) human readable host names into IP addresses.

- TLD nameserver

> The top level domain server (TLD) can be thought of as a specific rack of books in a library.

This nameserver is the next step in the search for a specific IP address, and it hosts the last portion of a hostname

- Authoritative nameserver

> This final nameserver can be thought of as a dictionary on a rack of books, in which a specific name can be translated into its definition.

The authoritative nameserver is the last stop in the nameserver query. If the authoritative name server has access to the requested record, it will return the IP address for the requested hostname back to the DNS Recursor (the librarian) that made the initial request.

### Authoritative DNS server

an authoritative DNS server is a server that actually holds, and is responsible for, DNS resource records.

#### DNS 的记录类型

- A：地址记录（Address），返回域名指向的 IP 地址。
- NS：域名服务器记录（Name Server），返回保存下一级域名信息的服务器地址。该记录只能设置为域名，不能设置为 IP 地址。
- MX：邮件记录（Mail eXchange），返回接收电子邮件的服务器地址。
- CNAME：规范名称记录（Canonical Name），返回另一个域名，即当前查询的域名是另一个域名的跳转，详见下文。
- PTR：逆向查询记录（Pointer Record），只用于从 IP 地址查询域名

## 参考

- [What Is DNS? | How DNS Works](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [详解 DNS 与 CoreDNS 的实现原理](https://draveness.me/dns-coredns)
- [DNS 原理入门](http://www.ruanyifeng.com/blog/2016/06/dns.html)
