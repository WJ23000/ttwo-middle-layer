'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  // 本地静态数据
  async list() {
    const { ctx } = this;
    // 调用service层方法
    const result = await ctx.service.api.list();
    // 渲染模板文件, 并赋值给 ctx.body
    await ctx.render('api/list.html', result);
  }

  // 通过api获取数据
  async apiList() {
    const { ctx } = this;
    // 调用service层方法
    const result = await ctx.service.api.apiList();
    ctx.body = result;
    // await ctx.render('api/apiList.html', { list: data });
  }
}

module.exports = ApiController;

/**
 * 模板渲染的三种方式
 * 渲染模板文件, 并赋值给 ctx.body
 * await this.ctx.render("api/list.html", result);
 * 渲染模板文件, 仅返回不赋值
 * ctx.body = await this.ctx.renderView("api/list.html", result);
 * 渲染模板字符串, 仅返回不赋值
 * ctx.body = await this.ctx.renderString('hi, egg', result, {viewEngine: 'nunjucks'});
 */
