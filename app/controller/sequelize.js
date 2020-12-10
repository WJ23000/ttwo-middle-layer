'use strict';

const Controller = require('egg').Controller;

class SequelizeController extends Controller {
  // 根据用户id查询(get方式)
  async user() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { id } = ctx.query;
    const result = await ctx.service.sequelize.user(id);
    ctx.body = result;
  }

  // 分页查询用户信息(get方式)
  async userList() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { page, pageSize } = ctx.query;
    const result = await ctx.service.sequelize.userList(page, pageSize);
    ctx.body = result;
  }

  // 查所有用户(get方式)
  async userAll() {
    const { ctx } = this;
    const result = await ctx.service.sequelize.userAll();
    ctx.body = result;
  }

  // 插入一个新用户(post方式)
  async createUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const user = ctx.request.body;
    const result = await ctx.service.sequelize.createUser(user);
    ctx.body = result;
  }

  // 批量插入新用户(post方式)
  async batchCreateUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const userList = ctx.request.body;
    const result = await ctx.service.sequelize.batchCreateUser(userList);
    ctx.body = result;
  }

  // 更新指定用户(根据主键更新，post方式)
  async updateUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const user = ctx.request.body;
    const result = await ctx.service.sequelize.updateUser(user);
    ctx.body = result;
  }

  // 同时更新多个指定用户(根据主键更新，post方式)
  async updateManyUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const userList = ctx.request.body;
    const result = await ctx.service.sequelize.updateManyUser(userList);
    ctx.body = result;
  }

  // 批量更新用户(根据主键更新，post方式)
  async batchUpdateUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const userList = ctx.request.body;
    const result = await ctx.service.sequelize.batchUpdateUser(userList);
    ctx.body = result;
  }

  // 根据用户id删除(get方式)
  async deleteUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const { id } = ctx.query;
    const result = await ctx.service.sequelize.deleteUser(id);
    ctx.body = result;
  }

  // 批量删除指定用户(post方式)
  async batchDeleteUser() {
    const { ctx } = this;
    // 接收页面传递过来的参数
    const ids = ctx.request.body;
    const result = await ctx.service.sequelize.batchDeleteUser(ids);
    ctx.body = result;
  }
}

module.exports = SequelizeController;
