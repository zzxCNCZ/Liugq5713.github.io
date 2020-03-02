# TCP

## 三次握手

所谓三次握手(Three-way Handshake)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送 3 个包。

三次握手的目的是连接服务器指定端口，建立 TCP 连接，并同步连接双方的序列号和确认号，交换 TCP 窗口大小信息。在 socket 编程中，客户端执行 connect() 时。将触发三次握手。

### 第一次握手(SYN=1, seq=x):

客户端发送一个 TCP 的 SYN(Synchronize) 标志位置 1 的包，指明客户端打算连接的服务器的端口，以及初始序号 X,保存在包头的序列号(Sequence Number)字段里。

发送完毕后，客户端进入 SYN_SEND 状态

### 第二次握手(SYN=1, ACK=1, seq=y, ACKnum=x+1):

服务器发回确认包(ACK)应答。即 SYN 标志位和 ACK 标志位均为 1。服务器端选择自己 ISN 序列号，放到 Seq 域里，同时将确认序号(Acknowledgement Number)设置为客户的 ISN 加 1，即 X+1。 发送完毕后，服务器端进入 SYN_RCVD 状态

### 第三次握手(ACK=1，ACKnum=y+1)

客户端再次发送确认包(ACK)，SYN 标志位为 0，ACK 标志位为 1，并且把服务器发来 ACK 的序号字段+1，放在确定字段中发送给对方，并且在数据段放写 ISN 的+1

发送完毕后，客户端进入 ESTABLISHED 状态，当服务器端接收到这个包时，也进入 ESTABLISHED 状态，TCP 握手结束。

三次握手的过程的示意图如下：

![tcp-connection-made-three-way-handshake](./imgs/tcp-connection-made-three-way-handshake.png)

## OSI 开放系统互联(Open System Interconnection)

| 名称                 | 功能                                                                                                        |
| :------------------- | :---------------------------------------------------------------------------------------------------------- |
| 应用层 Application   | 网络服务与使用者应用程序间的一个接口                                                                        |
| 表示层 Presentation  | 数据表示、数据安全、数据压缩                                                                                |
| 会话层 Session       | 会话层连接到传输层的映射；会话连接的流量控制；数据传输；会话连接恢复与释放；会话连接管理、差错控制          |
| 传输层 Transport     | 用一个寻址机制来标识一个特定的应用程序（端口号）                                                            |
| 网络层 Network       | 基于网络层地址（IP 地址）进行不同网络系统间的路径选择                                                       |
| 数据链路层 Data Link | 在物理层上建立、撤销、标识逻辑链接和链路复用 以及差错校验等功能。通过使用接收系统的硬件地址或物理地址来寻址 |
| 物理层 Physical      | 建立、维护和取消物理连接                                                                                    |

## gateway

转发其他服务器通信数据的服务器，接收从客户端发送来的请求时，它就像自己拥有资源的源服务器一样对请求进行处理。有时客户端可能都不会察觉，自己的通信目标是一个网关

## socket(套接字)

[Socket 为什么要翻译成套接字？](https://www.zhihu.com/question/21383903)

socket 是一种进程间通信机制，提供一种供应用程序访问通信协议的操作系统调用，并且通过将 socket 与 Unix 系统文件描述符相整合，使得网络读写数据（或者服务调用）和读写本地文件一样容易。很显然，这货已经离插座越来越远了，已经完全不再是硬件上的物件，而是一序列的“指令” ，按汉语的理解，已经具备了“套接”（建立网络通讯或进程间通讯）和“字”（可交互的有序指令串）的概念。

## ARP(Address Resolution Protocol )

Address Resolution Protocol (ARP) is a procedure for mapping a dynamic Internet Protocol address (IP address) to a permanent physical machine address in a local area network (LAN). The physical machine address is also known as a Media Access Control

## ICMP(Internet Control Message Protocol)

Stands for "Internet Control Message Protocol." When information is transferred over the Internet, computer systems send and receive data using the TCP/IP protocol. If there is a problem with the connection, error and status messages regarding the connection are sent using ICMP, which is part of the Internet protocol.

## netstat(network statistics)

displays network connections for Transmission Control Protocol (both incoming and outgoing), routing tables, and a number of network interface (network interface controller or software-defined network interface) and network protocol statistics.

## 私有地址规则

在制定私有地址规则时，这些地址属于公有地址中还没有分配的范围。换句话说，私有地址本身并没有什么特别的结构，只不过是将公有地址中没分配的一部分拿出来规定只能在内网使用它们而已

```txt
10.0.0.0～10.255.255.255￼
172.16.0.0～172.31.255.255￼
192.168.0.0～192.168.255.255
```
