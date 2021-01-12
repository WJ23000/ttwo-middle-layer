'use strict';

const Controller = require('egg').Controller;

class RedisController extends Controller {
  // 获取所有用户列表
  async getUserList() {
    const { ctx } = this;
    const result = await ctx.service.redis.getUserList();
    ctx.body = result;
  }
}

module.exports = RedisController;