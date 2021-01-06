// 禁止百度爬虫
// options === app.config.author
module.exports = (options, app) => {
  return async function author(ctx, next) {
    const token = ctx.request.header.authorization;
    let decodeToken = "";
    let whiteUrls = options.whiteUrls || [];
    // 如果ctx.url在白名单中
    let isWhiteUrl = whiteUrls.some((whiteUrl) => ctx.url.startsWith(whiteUrl));
    if (!isWhiteUrl) {
      if (token) {
        try {
          // 解码token
          decodeToken = ctx.app.jwt.verify(token, options.secret); // 验证token
          await next();
        } catch (error) {
            ctx.body = {
                data: [],
                message: "token失效，请重新登录",
                status: '4000401'
            };
          return;
        }
      } else {
        ctx.body = {
            data: [],
            message: "缺少token，请重新登录",
            status: '4000401'
        };
        return;
      }
    } else {
      await next();
    }
  };
};
