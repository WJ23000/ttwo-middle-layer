// 禁止百度爬虫
// options === app.config.robot
module.exports = (options, app) => {
    return async function robotMiddleware(ctx, next) {
      const source = ctx.get('user-agent') || '';
      const match = options.ua.some(ua => ua.test(source));
      if (match) {
        ctx.status = 403;
        ctx.message = 'Go away, robot.';
      } else {
        await next();
      }
    }
};

// 备注
// 1.cmd终端使用 curl http://localhost:7001/userServiceList -A "Baiduspider" 看看效果
// 2.那么User-Agent到底是什么呢? User-Agent会告诉网站服务器,访问者是通过什么工具来请求的,如果是爬虫请求,一般会拒绝,如果是用户浏览器,就会应答。
