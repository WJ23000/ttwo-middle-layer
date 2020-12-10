# 设置基础镜像
FROM node:12.16.1-alpine

# 指定时区
RUN apk --update add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && apk del tzdata

# 指定容器目录
RUN mkdir -p /usr/src/app

# 指定工作目录
WORKDIR /usr/src/app
 
# 复制package.json到指定工作目录(第一次会安装依赖，以后当package.json有更新时会重新安装依赖)
COPY package.json /usr/src/app/package.json

# 安装依赖
RUN npm i --registry=https://registry.npmjs.org/

# 复制所有文件到指定工作目录 
COPY . /usr/src/app

# 暴露容器端口号
EXPOSE 7001

# 启动应用(package.json的start启动命令不能包含--daemon)
CMD npm run start
