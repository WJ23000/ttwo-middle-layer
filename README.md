# ttwo-middle-layer

bff+ssr

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### 镜像Deploy

```
$ 使用docker容器，需要去掉egg-scripts start --daemon --title=egg-server-ttwo-middle-layer中的--daemon
$ 创建Dockerfile文件
$ 创建镜像 docker build -t ttwo .
$ 创建容器 docker run -d --name ttwo -p 5215:7001 ttwo
```

### Introduction 项目结构
```
ttwo-middle-layer
├── app                     
|   ├── controller          <- 用于解析用户的输入，处理后返回相应的结果     
|   ├── extend              <- 用于框架的扩展
|   ├── io                  <- 用户io服务
|   ├── middleware          <- 用于编写中间件         
|   ├── model               <- 用于放置领域模型(由领域类相关插件约定，如 egg-sequelize)
|   ├── public              <- 用于放置静态资源
|   ├── schedule            <- 用于定时任务
|   ├── service             <- 用于编写业务逻辑层
|   ├── view                <- 用于放置模板文件                 
|   └── router.js           <- 用于配置 URL 路由规则
├── config                  
|   ├── config.{env}.js     <- 用于编写配置文件                 
|   └── plugin.js           <- 用于配置需要加载的插件
├── database                
├── logs                    
├── run                    
├── test                    <- 单元测试                        
├── .autod.conf.js                   
├── .eslintignore                    
├── .eslintrc                    
├── .gitignore                                  
├── .sequelizerc
├── .travis.yml
├── agent.js                <- 用于自定义启动时的初始化工作      
├── app.js                  <- 用于自定义启动时的初始化工作      
├── appveyor.yml
├── Dockerfile
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── yarn.lock
```

### 前端使用token
```
设置Headers的authorization = 'Bearer ' + ${token}(登录接口会返回，Bearer后面加一个空格)
```

### 前端通过csrf认证
```
设置Headers的x-csrf-evidence = ${csrf}(登录接口会返回)
```

### Api接口测试工具
```
使用Postman
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org/zh-cn/
[nunjucks]: https://nunjucks.bootcss.com/
[sequelize]: https://www.sequelize.com.cn/
[moment]: http://momentjs.cn/
