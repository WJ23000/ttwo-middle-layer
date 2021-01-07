# 利用OpenSSL生成私钥公钥
```
1.  安装git

2.  在需要保存密钥的盘符打开git命令窗口

3.  生成私钥：openssl genrsa -out ttwo_private_2021_key.pem 1024

4.  生成公钥: openssl rsa -in ttwo_private_2021_key.pem -pubout -out ttwo_public_2021_key.pem
```