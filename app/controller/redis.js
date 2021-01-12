'use strict';

const Controller = require('egg').Controller;

class RedisController extends Controller {
  // 获取所有key
  async getAllKey() {
    const { ctx } = this;
    const result = await ctx.service.redis.getAllKey();
    ctx.body = result;
  }
  // 存储一个key
  async saveKey() {
    const { ctx } = this;
    const result = await ctx.service.redis.saveKey();
    ctx.body = result;
  }
  // 获取一个key
  async getKey() {
    const { ctx } = this;
    const result = await ctx.service.redis.getKey();
    ctx.body = result;
  }
  // 获取一个key
  async delKey() {
    const { ctx } = this;
    const result = await ctx.service.redis.delKey();
    ctx.body = result;
  }
  // 获取所有用户列表
  async getUserList() {
    const { ctx } = this;
    const result = await ctx.service.redis.getUserList();
    ctx.body = result;
  }
}

module.exports = RedisController;