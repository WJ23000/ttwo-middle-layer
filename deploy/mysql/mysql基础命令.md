# mysql基础命令

## 基础篇
```
1.  查看mysql版本号：mysql --version

2.  登录mysql：mysql -hlocalhost -uroot -proot(主机地址、用户名、密码)

3.  查看mysql安装位置：show variables like "%char%";

4.  显示所有数据库：show databases;

5.  显示连接数、并发数：show status like 'Threads%';

6.  显示数据库当前设置的最大连接数：show variables like '%max_connections%';

7.  显示当前连接数、最大连接数：show status like '%connect%';
    Max_used_connections：服务器启动后已经同时使用的连接的最大数量。
    Threads_connected：当前的连接数。

8.  显示前100条正在执行的mysql连接信息：show processlist;

9.  显示全部正在执行的mysql连接信息：show full processlist;
```

## 设置外网可访问权限
```
1.  创建数据库：creat database ttwo;

2.  使用mysql：use mysql;

3.  允许所有用户连接数据库：update user set host='%' where user='root';
    %：所有用户
    root：用户名

4.  查询user表中host和user列：select host,user from user;
    重新加载权限：flush privileges;

5.  授权所有用户连接：grant all privileges on *.* to 'root'@'%' identified by 'root' with grant option;
    重新加载权限：flush privileges;

6.  授权指定用户连接：grant all privileges on *.* to 'root'@'172.31.20.124' identified by 'root' with grant option;
    重新加载权限：flush privileges;
```