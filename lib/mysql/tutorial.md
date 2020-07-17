# 本地远程连接 mysql

## mysqld vs mysql

mysqld is the server executable (one of them)
mysql is the command line client
mysqladmin is a maintainance or administrative utility

## 安装

- [How To Install MySQL on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04)
- [How to Install MySQL on Debian 8 | Linode](https://www.linode.com/docs/databases/mysql/how-to-install-mysql-on-debian-8/)

```shell
sudo apt-get update
sudo apt-get install mysql-server
sudo mysql_secure_installation
```

## 卸载 mysql

```shell
sudo apt remove mysql-server
```

## 创建用户和数据库

```shell
create database testdb;
create user 'testuser'@'localhost' identified by 'password';
grant all on testdb.* to 'testuser';
```

### 给用户权限

- [How to Grant All Privileges on a Database in MySQL](https://chartio.com/resources/tutorials/how-to-grant-all-privileges-on-a-database-in-mysql/)

给用户权限之后需要刷新一下权限

```shell
mysql> GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';
mysql> FLUSH PRIVILEGES;
```

## 远程连接

- [MySQL root access from all hosts](https://stackoverflow.com/questions/11223235/mysql-root-access-from-all-hosts)

### bind to all addresses:

- [MySQL root access from all hosts](https://stackoverflow.com/questions/11223235/mysql-root-access-from-all-hosts)

我之前连接服务器数据库连接不上就是这个 bing addresses 的原因

The easiest way is to comment out the line in your my.cnf file:

`#bind-address = 127.0.0.1`

and restart mysql

`service mysql restart`
By default it binds only to localhost, but if you comment the line it binds to all interfaces it finds. Commenting out the line is equivalent to bind-address=\*.

To check where mysql service has binded execute as root:

`netstat -tupan | grep mysql`

## 导入数据库

## 导入命令 mysql vs source

shell 命令 mysql -u root -p dbname < dbname.sql 会做一个批处理（一次执行多条），处理效率高

```shell
mysql -u 用户名 -p 密码 数据库名< 要导入的数据库数据(runoob.sql)
```

mysql 命令 source dbname.sql ，把文件中的 sql 每次执行一句并输出，效率较低

```sql
mysql> create database abc; # 创建数据库
mysql> use abc; # 使用已创建的数据库
mysql> set names utf8; # 设置编码
mysql> source /home/abc/abc.sql # 导入备份数据库
```

## 查看配置文件

- [linux 下查看 mysql 的配置文件](https://zhuanlan.zhihu.com/p/52862020)

```shell
sudo vi /etc/mysql/debian.cnf
```

或者 `sudo vi /etc/mysql/mariadb.conf.d/50-server.cnf` 修改这里面的配置

## 参考
