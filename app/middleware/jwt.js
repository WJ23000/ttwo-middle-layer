const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken"); // 引入jsonwebtoken

module.exports = (options, app) => {
  return async function userInterceptor(ctx, next) {
    let authToken = ctx.header.authorization; // 获取header里的authorization
    if (authToken) {
      authToken = authToken.substring(7); // 前端传入的token结构为'Bearer ' + token(所以需要截取)
      const res = verifyToken(authToken); // 解密获取token
      if (res.username && res.password) {
        // 如果需要限制单端登陆或者使用过程中废止某个token，或者更改token的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效
        // 此处使用redis中保存的token
        const redis_token = await app.redis.get("loginToken");
        if (authToken === redis_token) {
          await next();
        } else {
          ctx.body = { code: 4000401, msg: "一周内未使用本平台，请重新登录" };
          return;
        }
      } else {
        ctx.body = { code: 4000401, msg: "token令牌已过期，请重新登录" };
        return;
      }
    } else {
      ctx.body = { code: 4000401, msg: "无接口访问权限，请登录后重试" };
      return;
    }
  };
};

// 解密、验证token
function verifyToken(token) {
  const cert = fs.readFileSync(
    path.join(__dirname, "../public/keys/ttwo_public_2021_key.pem")
  ); // 公钥，看后面生成方法
  let res = "";
  try {
    const result = jwt.verify(token, cert, { algorithms: ["RS256"] }) || {};
    const { exp } = result;
    const current = Math.floor(Date.now() / 1000);
    console.log("token有效期时间", current, exp)
    if (current <= exp) {
      res = result.data || {};
      result;
    }
  } catch (e) {
    console.log("token已失效",e);
  }
  return res;
}
