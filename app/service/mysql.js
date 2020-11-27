const Service = require("egg").Service;

class MysqlService extends Service {
  // 根据用户id查询
  async user(id = 1) {
    const { ctx, app } = this;
    if (!id) {
      return ctx.helper.resultHandler("error", "参数异常，请检查");
    }
    let result = await app.mysql.get("user", { id: id });
    if (result) {
      return ctx.helper.resultHandler("success", result);
    } else {
      return ctx.helper.resultHandler("error", result);
    }
  }

  // 查所有用户
  async userAll() {
    const { ctx, app } = this;
    let result = await app.mysql.select("user");
    return ctx.helper.resultHandler("success", result);
  }

  // 创建一个新用户
  async createUser(username, nickname) {
    const { ctx, app } = this;
    if (!username || !nickname) {
      return ctx.helper.resultHandler("error", "参数异常，请检查");
    }
    let result = await app.mysql.insert("user", {
      username: username,
      nickname: nickname,
      create_time: ctx.helper.nowDateTime(),
    });
    if (result.affectedRows == 1) {
      return ctx.helper.resultHandler("success", "创建成功");
    }
    return result;
  }

  // 删除指定用户
  async deleteUser(id) {
    const { ctx, app } = this;
    if (!id) {
      return ctx.helper.resultHandler("error", "参数异常，请检查");
    }
    let result = await app.mysql.delete("user", { id: id });
    if (result.affectedRows == 1) {
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
    let result = await app.mysql.update("user", {
      id: id,
      username: username,
    });
    if (result.affectedRows == 1) {
      return ctx.helper.resultHandler("success", "更新成功");
    } else {
      return ctx.helper.resultHandler("error", "该数据不存在");
    }
  }
}

module.exports = MysqlService;
