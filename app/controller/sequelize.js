'use strict';

const Controller = require('egg').Controller;

class SequelizeController extends Controller {
  // 根据用户id查询
  async user() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { id } = ctx.query;
    const result = await ctx.service.sequelize.user(id);
    ctx.body = result;
  }

  // 分页查询用户信息
  async userList() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { page, pageSize } = ctx.query;
    const result = await ctx.service.sequelize.userList(page, pageSize);
    ctx.body = result;
  }

  // 查所有用户
  async userAll() {
    const { ctx } = this;
    const result = await ctx.service.sequelize.userAll();
    ctx.body = result;
  }

  // 插入一个新用户
  async createUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { username, nickname } = ctx.query;
    const result = await ctx.service.sequelize.createUser(username, nickname);
    ctx.body = result;
  }

  // 批量插入新用户
  async batchCreateUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { list } = ctx.query;
    const result = await ctx.service.sequelize.batchCreateUser(list);
    ctx.body = result;
  }

  // 更新指定用户(根据主键更新)
  async updateUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { id, username } = ctx.query;
    const result = await ctx.service.sequelize.updateUser(id, username);
    ctx.body = result;
  }

  // 更新指定用户(根据主键更新)
  async batchUpdateUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { ids, username } = ctx.query;
    const result = await ctx.service.sequelize.batchUpdateUser(ids, username);
    ctx.body = result;
  }

  // 根据用户id删除
  async deleteUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { id } = ctx.query;
    const result = await ctx.service.sequelize.deleteUser(id);
    ctx.body = result;
  }

  // 批量删除指定用户
  async batchDeleteUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { ids } = ctx.query;
    const result = await ctx.service.sequelize.batchDeleteUser(ids);
    ctx.body = result;
  }
}

module.exports = SequelizeController;
