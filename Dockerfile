# Docker脚本

# 使用nginx
FROM nginx

# 删除nginx/html下的所有文件
RUN rm -rf /usr/share/nginx/html/*

# 将本地打包后的dist文件夹copy到nginx/html文件夹中
COPY dist/ /usr/share/nginx/html/ 

# 将本地nginx配置文件替换nginx默认配置文件(命名要一致)
COPY default.conf /etc/conf.d/default.conf 

EXPOSE 80