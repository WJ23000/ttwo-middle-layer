'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async home() {
    const { ctx } = this;
    ctx.body = '主页';
  }
}

module.exports = HomeController;
