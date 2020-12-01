const moment = require("moment");

// 时间戳转换
const relativeTime = (time) => moment(time).format("YYYY-MM-DD HH:mm:ss");

// 获取当前系统时间
const nowDateTime = () => moment().format("YYYY-MM-DD HH:mm:ss");

// 对mysql返回结果进行封装
const resultHandler = (type, data) => {
  // 操作成功(有数据)
  const success = {
    data: data,
    message: "成功",
    status: "4000200",
  };
  // 操作失败/异常
  const error = {
    data: data,
    message: "异常",
    status: "4000500",
  };
  return { success, error }[type];
};

module.exports = {
  relativeTime,
  nowDateTime,
  resultHandler,
};
