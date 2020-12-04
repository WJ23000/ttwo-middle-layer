const Service = require('egg').Service;

class MysqlService extends Service {
  // 根据用户id查询
  async user(id) {
    const { ctx, app } = this;
    if (!id) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await app.mysql.get('user', { id });
    // 对象不为空正常返回
    if (result != null) {
      return ctx.helper.resultHandler('success', result);
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }

  // 查所有用户
  async userAll() {
    const { ctx, app } = this;
    const result = await app.mysql.select('user');
    return ctx.helper.resultHandler('success', result);
  }

  // 插入一个新用户
  async createUser(username, nickname) {
    const { ctx, app } = this;
    if (!username || !nickname) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await app.mysql.insert('user', {
      username,
      nickname,
      create_time: ctx.helper.nowDateTime(),
    });
    if (result.affectedRows == 1) {
      return ctx.helper.resultHandler('success', '创建成功');
    }
    return result;
  }

  // 更新指定用户(根据主键更新)
  async updateUser(id, username) {
    const { ctx, app } = this;
    if (!id || !username) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await app.mysql.update('user', {
      id,
      username,
    });
    if (result.affectedRows == 1) {
      return ctx.helper.resultHandler('success', '更新成功');
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }

  // 删除指定用户
  async deleteUser(id) {
    const { ctx, app } = this;
    if (!id) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await app.mysql.delete('user', { id });
    if (result.affectedRows == 1) {
      return ctx.helper.resultHandler('success', '删除成功');
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }
}

module.exports = MysqlService;
