const Service = require("egg").Service;

class RedisService extends Service {
    // 获取所有用户列表
    async getUserList() {
        const { ctx, app } = this;
        // 此处使用redis中保存的userList
        const result = await app.redis.get("userList");
        // 由JSON字符串转换为JSON对象 
        const data = JSON.parse(result); 
        return ctx.helper.resultHandler("success", data);
    }
}

module.exports = RedisService;