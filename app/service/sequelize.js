const Service = require("egg").Service;
const { Op } = require("sequelize");

class SequelizeService extends Service {
  // 根据用户id查询
  async user(id) {
    const { ctx } = this;
    if (!id) {
      return ctx.helper.resultHandler("error", "参数异常，请检查");
    }
    let result = await ctx.model.User.findAll({
        where: {
            id: {
                [Op.like]: id
            }
        }
    });
    // 对象不为空正常返回
    if (Object.keys(result).length > 0) {
      return ctx.helper.resultHandler("success", result);
    } else {
      return ctx.helper.resultHandler("error", "该数据不存在");
    }
  }

  // 分页查询用户信息
  async userList(page = 1, pageSize = 10) {
    
  }

  // 查所有用户
  async userAll() {
    const { ctx } = this;
    let result = await ctx.model.User.findAll();
    // 对象不为空正常返回
    if (Object.keys(result).length > 0) {
      return ctx.helper.resultHandler("success", result);
    } else {
      return ctx.helper.resultHandler("error", "该数据不存在");
    }
  }

  // 创建一个新用户
  async createUser(username, nickname) {
    const { ctx, app } = this;
    if (!username || !nickname) {
      return ctx.helper.resultHandler("error", "参数异常，请检查");
    }
    const item = {
        username: username,
        nickname: nickname,
        create_time: ctx.helper.nowDateTime()
    }
    let result = await ctx.model.User.create(item);
    if (result) {
      return ctx.helper.resultHandler("success", result);
    }
    return ctx.helper.resultHandler("success", result);
  }

  // 删除指定用户
  async deleteUser(id) {
    const { ctx, app } = this;
    if (!id) {
      return ctx.helper.resultHandler("error", "参数异常，请检查");
    }
    let result = await ctx.model.User.destroy({
        where: {
            id: {
                [Op.like]: id
            }
        }
    });
    if (result == 1) {
      return ctx.helper.resultHandler("success", "删除成功");
    } else {
      return ctx.helper.resultHandler("error", "该数据不存在");
    }
  }

  // 更新指定用户(根据主键更新)
  async updateUser(id, username) {
    const { ctx, app } = this;
    if (!id || !username) {
      return ctx.helper.resultHandler("error", "参数异常，请检查");
    }
    const item = {
        username: username
    }
    let result = await ctx.model.User.update(item, {
      where: {
          id: {
              [Op.like]: id
          }
      }
    });
    if (result.affectedRows == 1) {
      return ctx.helper.resultHandler("success", "更新成功");
    } else {
      return ctx.helper.resultHandler("error", "该数据不存在");
    }
  }
}

module.exports = SequelizeService;
