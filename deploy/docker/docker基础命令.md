# docker命令说明

## 基础篇
```
1.  查看docker版本号：docker -v

2.  查看docker安装位置：where docker
```

## 镜像篇
```
1.  查找指定镜像：docker search nginx

2.  获取指定镜像：docker pull nginx

3.  查看镜像列表：docker images --all

5.  删除指定镜像：docker rmi xxx:latest
    xxx：镜像名或者镜像id前三位(先删除相关联的容器)
    latest：版本号

5.  创建镜像：docker build -t xxx .
    xxx：镜像名
    注意：文件夹路径定位到项目的根目录下
```

## 容器篇(nginx部署项目)
```
1.  新建&&启动容器：docker run -d --name xx -p 5210:80 xxx
    -d：代表后台启动
    --name xx：这是创建的容器名称
    -p 8080:80: 是将nginx的80映射到你服务器的5210端口(注意你服务器的端口是否开放5210，其他端口也可以)
    xxx：是刚刚创建的镜像名称

2.  浏览器运行http://localhost:5210或http://本地ip地址:5210成功打开部署的项目

3.  终止启动中的容器：docker container stop xxx
    xxx: 容器名或者容器id前三位

4.  启动指定容器：docker container start xxx
    xxx: 容器名或者容器id前三位

5.  删除指定容器：docker container rm xxx
    xxx: 容器名或者容器id前三位(删除容器前先终止启动中的容器)

6.  查看容器列表：docker ps -a

7.  查看容器信息(端口号)：docker inspect xxx
    xxx: 容器名或者容器id前三位

8.  查看指定容器并打开bash终端：docker exec -it xxx /bin/bash
    xxx：容器名或者容器id前三位
    /bin/bash: 打开shell终端

9.  查看容器日志：docker attach [options] xxx
    xxx：容器名或者容器id前三位
    
10. 查看当前目录中所有文件：ls
    进入指定文件夹目录：cd
    返回上级文件夹目录：cd ..(cd和..之间有一个空格)
    打印工作路径：pwd
    新建文件：touch xxx.js(xxx.js文件名)
    删除文件：rm xxx.js(xxx.js文件名)
    新建文件夹：mkdir xxx(xxx文件夹名)
    删除文件夹：rm -r xxx(xxx文件夹名，-r会删除文件夹中所有的文件)
    清屏：reset
    退出终端：exit或者Ctrl+d
    查看指定文件：tail -f xxx(xxx文件名，-f循环读取)
```

## 注意
```
1.  在项目根目录下创建default.conf和Dockerfile文件

2.  使用build打包当前项目
```

### 学习资料
See [https://yeasy.gitbook.io/docker_practice/](https://yeasy.gitbook.io/docker_practice/).
