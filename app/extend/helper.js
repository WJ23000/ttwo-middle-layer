const moment = require('moment');

// 时间戳转换
function relativeTime(time) {
  return moment(time).format('YYYY-MM-DD HH:mm:ss');
}

// 获取当前系统时间
function nowDateTime() {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

// 对mysql返回结果进行封装
function resultHandler(type, data) {
  // 操作成功(有数据)
  const success = {
    data,
    message: '成功',
    status: '4000200',
  };
  // 操作失败/异常
  const error = {
    data,
    message: '异常',
    status: '4000500',
  };
  return { success, error }[type];
};

// 生成token
function getToken(value) {
  const { app, config } = this;
  return app.jwt.sign(value, config.jwt.secret);
}

module.exports = {
  relativeTime,
  nowDateTime,
  resultHandler,
  getToken
};
