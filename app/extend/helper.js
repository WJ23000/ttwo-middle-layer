const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken"); // 引入jsonwebtoken
const moment = require("moment");

// 时间戳转换
function relativeTime(time) {
  return moment(time).format("YYYY-MM-DD HH:mm:ss");
}

// 获取当前系统时间
function nowDateTime() {
  return moment().format("YYYY-MM-DD HH:mm:ss");
}

// 对接口返回进行封装
function resultHandler(type, data) {
  // 操作成功(有数据)
  const success = {
    data,
    message: "成功",
    status: "4000200",
  };
  // 操作失败/异常
  const error = {
    data,
    message: "异常",
    status: "4000500",
  };
  return { success, error }[type];
}

// 生成token
function getToken(data, expires = 7200) {
  const exp = Math.floor(Date.now() / 1000) + expires;
  const cert = fs.readFileSync(
    path.join(__dirname, "../public/keys/ttwo_private_2021_key.pem")
  ); // 私钥
  const token = jwt.sign({ data, exp }, cert, { algorithm: "RS256" });
  return token;
}

module.exports = {
  relativeTime,
  nowDateTime,
  resultHandler,
  getToken,
};
