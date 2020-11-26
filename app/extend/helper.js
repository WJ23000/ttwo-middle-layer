const moment = require("moment");

// 时间戳转换
exports.relativeTime = (time) => moment(time).format('YYYY-MM-DD HH:mm:ss');
