const Service = require('egg').Service;
const { Op } = require('sequelize');

class SequelizeService extends Service {
  // 根据用户id查询
  async user(id) {
    const { ctx } = this;
    if (!id) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await ctx.model.User.findAll({
      where: {
        id: {
          [Op.like]: id,
        },
      },
    });
    // 对象不为空正常返回
    if (Object.keys(result).length > 0) {
      return ctx.helper.resultHandler('success', result);
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }

  // 分页查询用户信息
  async userList(page = 1, pageSize = 5) {
    const { ctx } = this;
    if (!page || !pageSize) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await ctx.model.User.findAll({
      order: [["id", "asc"]],
      offset: (page - 1) * pageSize,
      limit: pageSize
    });
    // 对象不为空正常返回
    if (Object.keys(result).length > 0) {
      return ctx.helper.resultHandler('success', result);
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }

  // 查所有用户
  async userAll() {
    const { ctx } = this;
    const result = await ctx.model.User.findAll();
    // 对象不为空正常返回
    if (Object.keys(result).length > 0) {
      return ctx.helper.resultHandler('success', result);
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }

  // 插入一个新用户
  async createUser(username, nickname) {
    const { ctx, app } = this;
    if (!username || !nickname) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const item = {
      username,
      password: '123456',
      nickname,
      create_time: ctx.helper.nowDateTime(),
    };
    const result = await ctx.model.User.create(item);
    console.log('数据重复', result);
    if (result) {
      return ctx.helper.resultHandler('success', result);
    }
    return ctx.helper.resultHandler('success', result);
  }

  // 批量插入新用户
  async batchCreateUser(list) {
    const { ctx, app } = this;
    if (!list) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    list.forEach(item => {
      item.password = '123456',
      item.create_time = ctx.helper.nowDateTime();
    });
    const result = await ctx.model.User.create(list);
    if (result) {
      return ctx.helper.resultHandler('success', result);
    }
    return ctx.helper.resultHandler('success', result);
  }

  // 更新指定用户(根据主键更新)
  async updateUser(id, username) {
    const { ctx, app } = this;
    if (!id || !username) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const item = {
      username,
    };
    const result = await ctx.model.User.update(item, {
      where: {
        id: {
          [Op.like]: id,
        },
      },
    });
    if (result == 1) {
      return ctx.helper.resultHandler('success', '更新成功');
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }

  // 批量更新指定用户(根据主键更新)
  async batchUpdateUser(ids, username) {
    const { ctx, app } = this;
    if (!ids || !username) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const item = {
      username,
    };
    const result = await ctx.model.User.update(item, {
      where: {
        id: ids,
      },
    });
    if (result == 1) {
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
    const result = await ctx.model.User.destroy({
      where: {
        id: {
          [Op.like]: id,
        },
      },
    });
    if (result == 1) {
      return ctx.helper.resultHandler('success', '删除成功');
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }

  // 批量删除指定用户
  async batchDeleteUser(ids) {
    const { ctx, app } = this;
    if (!ids) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await ctx.model.User.destroy({
      where: {
        id: ids,
      },
    });
    if (result == 1) {
      return ctx.helper.resultHandler('success', '删除成功');
    }
    return ctx.helper.resultHandler('error', '该数据不存在');

  }
}

module.exports = SequelizeService;
