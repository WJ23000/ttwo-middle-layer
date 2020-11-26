'use strict';

const Controller = require('egg').Controller;

class WelcomeController extends Controller {
  async welcome() {
    const { ctx, query } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = WelcomeController;
