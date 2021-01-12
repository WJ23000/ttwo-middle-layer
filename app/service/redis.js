const Service = require("egg").Service;

class RedisService extends Service {
    // 获取所有key
    async getAllKey() {
        const { ctx, app } = this;
        // 此处使用redis中保存的userList
        const result = await app.redis.get();
        return ctx.helper.resultHandler("success", data);
    }
    // 存储一个key
    async saveKey() {
        const { ctx, app } = this;
        // 此处使用redis中保存的userList
        app.redis.set("example", "一个示例");
        return ctx.helper.resultHandler("success", "example成功存储到redis");
    }
    // 获取一个key
    async getKey() {
        const { ctx, app } = this;
        // 此处使用redis中保存的userList
        const result = await app.redis.get("example");
        return ctx.helper.resultHandler("success", result);
    }
    // 删除一个key
    async delKey() {
        const { ctx, app } = this;
        // 此处使用redis中保存的userList
        const result = await app.redis.del("example");
        return ctx.helper.resultHandler("success", "example在redis中已删除");
    }
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