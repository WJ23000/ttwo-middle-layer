"use strict";

const Controller = require("egg").Controller;

class MysqlController extends Controller {
  // 根据用户id查询
  async user() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { id } = ctx.query;
    const result = await ctx.service.mysql.user(id);
    ctx.body = result;
  }

  // 查所有用户
  async userAll() {
    const { ctx } = this;
    const result = await ctx.service.mysql.userAll();
    ctx.body = result;
  }

  // 创建一个新用户
  async createUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { username, nickname } = ctx.query;
    const result = await ctx.service.mysql.createUser(username, nickname);
    ctx.body = result;
  }

  // 根据用户id删除
  async deleteUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { id } = ctx.query;
    const result = await ctx.service.mysql.deleteUser(id);
    ctx.body = result;
  }

  // 更新指定用户(根据主键更新)
  async updateUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { id, username } = ctx.query;
    const result = await ctx.service.mysql.updateUser(id, username);
    ctx.body = result;
  }
}

module.exports = MysqlController;
