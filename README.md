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
$ 创建容器 docker run -d --name ttwo -p 7001:5215 ttwo
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
[nunjucks]: https://nunjucks.bootcss.com/
[sequelize]: https://www.sequelize.com.cn/
[moment]: http://momentjs.cn/
