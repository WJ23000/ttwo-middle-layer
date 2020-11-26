"use strict";

const Controller = require("egg").Controller;

class IndexController extends Controller {
  async index() {
    const { ctx } = this;
    // 调用service层方法
    const result = await ctx.service.index.list();
    await ctx.render("index/list.html", result);
  }
}

module.exports = IndexController;
