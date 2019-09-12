# DNS

##　 DNS 是什么?

DNS(The Domain Name Systems)就是互联网的电话号码簿，把域名转为 IP

## DNS 如何工作

![dns-resolution](./imgs/dns-resolution.png)

1. 本地的 DNS 客户端向 DNS 解析器发出解析 draveness.me 域名的请求；
2. DNS 解析器首先会向就近的根 DNS 服务器 . 请求顶级域名 DNS 服务的地址；
3. 拿到顶级域名 DNS 服务 me. 的地址之后会向顶级域名服务请求负责 dravenss.me. 域名解析的命名服务；
4. 得到授权的 DNS 命名服务时，就可以根据请求的具体的主机记录直接向该服务请求域名对应的 IP 地址；

对于 DNS 解析器，这里使用的 DNS 查询方式是迭代查询，每个 DNS 服务并不会直接返回 DNS 信息，而是会返回另一台 DNS 服务器的位置，由客户端依次询问不同级别的 DNS 服务直到查询得到了预期的结果；另一种查询方式叫做递归查询，也就是 DNS 服务器收到客户端的请求之后会直接返回准确的结果，如果当前服务器没有存储 DNS 信息，就会访问其他的服务器并将结果返回给客户端。

### 4 种 DNS 服务器

- DNS recursor
- Root nameserver
- TLD nameserver
- Authoritative nameserver

## 参考

- [What Is DNS? | How DNS Works](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [详解 DNS 与 CoreDNS 的实现原理](https://draveness.me/dns-coredns)
