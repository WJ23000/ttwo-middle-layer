const Service = require("egg").Service;

class RedisService extends Service {
    // 获取所有用户列表
    async getUserList() {
        const { ctx, app } = this;
        // 此处使用redis中保存的userList
        const result = await app.redis.get("userList");
        return ctx.helper.resultHandler("success", result);
    }
}

module.exports = RedisService;