const Service = require("egg").Service;

class UserService extends Service {
  // 根据用户id查
  async user(id = 1) {
    const { app } = this;
    let result = await app.mysql.get("user", { id: id });
    if (result) {
      return result;
    } else {
      return "该数据不存在"
    }
  }
  // 查所有用户
  async userAll() {
    const { app } = this;
    let result = await app.mysql.select("user");
    return result;
  }
  // 创建一个新用户
  async createUser(username, nickname) {
    const { app } = this;
    if (!username || !nickname) {
      return "参数异常";
    }
    let result = await app.mysql.insert("user", {
      username: username,
      nickname: nickname,
    });
    if (result.affectedRows == 1) {
      return "创建成功";
    }
    return result;
  }
  // 删除指定用户
  async deleteUser(id) {
    const { app } = this;
    if (!id) {
      return "参数异常";
    }
    let result = await app.mysql.delete("user", { id: id });
    if (result.affectedRows == 1) {
      return "删除成功";
    } else {
      return "该数据不存在"
    }
  }
  // 更新指定用户(根据主键更新)
  async updateUser(id, username) {
    const { app } = this;
    if (!id || !username) {
      return "参数异常";
    }
    let result = await app.mysql.update("user", {
      id: id,
      username: username,
    });
    if (result.affectedRows == 1) {
      return "更新成功";
    } else {
      return "该数据不存在"
    }
  }
}

module.exports = UserService;
