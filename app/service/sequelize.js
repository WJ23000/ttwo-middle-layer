const Service = require('egg').Service;
const { Op } = require('sequelize');

class SequelizeService extends Service {
  // 登录
  async login(userInfo) {
    const { ctx } = this;
    let { username, password } = userInfo;
    if (!username || !password) {
      return ctx.helper.resultHandler('error', '请输入用户名或密码');
    }
    // 生成token
    const token = ctx.helper.getToken(username);
    ctx.set({'authorization': token})
    const result = await ctx.model.User.findAll({
      where: {
        username: {
          [Op.eq]: username
        },
        password: {
          [Op.eq]: password
        }
      }
    })
    const data = {
      token: token,
      userInfo: result
    }
    return ctx.helper.resultHandler('success', data);
  }

  // 根据用户id查询(已确认)
  // 示例：http://localhost:7001/sequelize/user?id=13
  async user(id) {
    const { ctx } = this;
    if (!id) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await ctx.model.User.findAll({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    return ctx.helper.resultHandler('success', result);
  }


  // 分页查询用户信息(已确认)
  // 示例：http://localhost:7001/sequelize/userList?page=1&pageSize=10
  async userList(page = 1, pageSize = 5) {
    const { ctx } = this;
    if (!page || !pageSize) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    let offset = (page - 1) * pageSize;
    let limit = parseInt(pageSize);
    const result = await ctx.model.User.findAll({
      order: [["id", "asc"]],
      offset,
      limit
    });
    return ctx.helper.resultHandler('success', result);
  }


  // 查所有用户(已确认)
  // 示例：http://localhost:7001/sequelize/userAll
  async userAll() {
    const { ctx } = this;
    const result = await ctx.model.User.findAll({
      order: [["id", "asc"]]
    });
    return ctx.helper.resultHandler('success', result);
  }


  // 插入一个新用户(已确认)
  // 示例：http://localhost:7001/sequelize/createUser
  // 参数：{ "username": "newuser","password": "","create_time": "" }
  async createUser(user) {
    const { ctx } = this;
    if (!user) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    // 处理数据
    user.password = "123456";
    user.create_time = ctx.helper.nowDateTime();
    const result = await ctx.model.User.create(user);
    return ctx.helper.resultHandler('success', result);
  }


  // 批量插入新用户(已确认)
  // 示例语句：http://localhost:7001/sequelize/batchCreateUser
  // 参数：[{ "username": "v1","password": "","create_time": "" },{ "username": "v2","password": "","create_time": "" }]
  async batchCreateUser(userList) {
    const { ctx } = this;
    if (!userList) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    // 处理数据
    userList.forEach(item => {
      item.password = '123456',
      item.create_time = ctx.helper.nowDateTime();
    });
    const result = await ctx.model.User.bulkCreate(userList);
    return ctx.helper.resultHandler('success', result);
  }


  // 更新指定用户(已确认)
  // 示例语句：http://localhost:7001/sequelize/updateUser
  // 参数：{ "id": "13","list": {"username": "updateuser"} }
  async updateUser(user) {
    const { ctx } = this;
    let { id, list } = user;
    if (!id || !list) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await ctx.model.User.update(user.list, {
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    return ctx.helper.resultHandler('success', result);
  }

  // 同时更新多个指定用户(已确认)
  // 示例语句：http://localhost:7001/sequelize/updateManyUser
  // 参数：{ "ids": [13,20],"list": {"password": "8888888"} }
  async updateManyUser(userList) {
    const { ctx } = this;
    let { ids, list } = userList;
    if (!ids || !list) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await ctx.model.User.update(list, {
      where: {
        id: {
          [Op.or]: ids
        }
      },
    });
    return ctx.helper.resultHandler('success', result);
  }

  // 批量更新用户
  // 示例语句：http://localhost:7001/sequelize/batchUpdateUser
  // 参数：[{ "username": "v1","password": "666666","create_time": "" },{ "username": "v2","password": "666666","create_time": "" }]
  async batchUpdateUser(userList) {
    const { ctx } = this;
    if (!userList) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    // 处理数据
    userList.forEach(item => {
      item.create_time = ctx.helper.nowDateTime();
    });
    const result = await ctx.model.User.bulkCreate(userList, { updateOnDuplicate: ["id","username"] });
    return ctx.helper.resultHandler('success', result);
  }


  // 删除指定用户(已确认)
  // 示例语句：http://localhost:7001/sequelize/deleteUser?id=20
  async deleteUser(id) {
    const { ctx } = this;
    if (!id) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await ctx.model.User.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    return ctx.helper.resultHandler('success', result);
  }


  // 批量删除指定用户(已确认)
  // 示例语句：http://localhost:7001/sequelize/batchDeleteUser
  // 参数：[20,21]
  async batchDeleteUser(ids) {
    const { ctx } = this;
    if (!ids) {
      return ctx.helper.resultHandler('error', '参数异常，请检查');
    }
    const result = await ctx.model.User.destroy({
      where: {
        id: ids,
      },
    });
    return ctx.helper.resultHandler('success', result);
  }
}

module.exports = SequelizeService;
