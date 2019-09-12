# 静态服务器 nginx

[nginx](http://nginx.org/en/docs/beginners_guide.html)配置文件和文件格式格式了解

`nginx`拥有`master`管理进程与几个`worker`工作进程。`master`管理进程用于读取，执行配置以及管理工作进程。`worker`工作进程处理请求。这样的设计，让`nginx`在不间断服务的前提下，升级`nginx`的可执行文件

`worker`工作进程的数量在配置文件里面定义，你可以指定有多少个进程，或者将其自动调整为 CPU 核心数

## [正向代理 vs 反向代理](https://www.zhihu.com/question/24723688/answer/148017358)

正向代理隐藏真实客户端，反向代理隐藏真实服务端。的确很精辟，一下子就懂了。我们一般会使用`nginx`配置反向代理的服务器

## nginx 配置文件

nginx 依据它的配置文件工作。默认情况下，其配置文件名为`nginx.conf`，放置在目录`/usr/local/nginx/conf`,`/etc/nginx`,或者`/usr/local/etc/nginx`

## nginx 配置文件格式

nginx 由模块组成，模块由`nginx`的配置文件的指令控制。配置有两种格式：一种简单配置，就是键值对，键值对用空格分开，并且以分号结尾。另一种为块配置项，块配置项由一个块配置项名(是否后面加上参数，取决于解析这个块配置项的模块)和一对大括号组成。如下所示：

```json
user  nobody;
worker_processes  8;
error_log  /var/log/nginx/error.log error;
#pid           logs/nginx.pid;
events {
    use epoll;
    worker_connections  50000;
}
```

## 查看 nginx 配置的详细错误信息

`nginx -t -c /etc/nginx/nginx.conf`

## 参考

- [nginxconfig.io](https://github.com/digitalocean/nginxconfig.io)
