# docker 命令说明

## docker hub篇
```
1.  注册docker hub账号

2.  本地登录docker hub：docker login -u username -p password
    username：docker用户名
    password：docker密码

3.  本地退出docker hub：docker logout

4.  本地镜像重命名：docker tag xxx 区域名/组织名/xxx:latest
    区域名/组织名/xxx: 区域名/组织名/新镜像名(云服务器专用模式)
    latest：版本号

5.  上传镜像到docker hub：docker push  区域名/组织名/xxx:latest
    区域名/组织名/xxx: 区域名/组织名/新镜像名(云服务器专用模式)
    latest：版本号

6.  浏览器登录docker hub查看已上传的镜像
```

## 注意
```
1.  本地预先生成docker镜像文件
```

### docker hub地址(wjserver)
See [https://hub.docker.com/](https://hub.docker.com/).