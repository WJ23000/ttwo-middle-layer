const Service = require("egg").Service;

class IndexService extends Service {
  async list() {
    const dataList = {
      list: [
        {
          name: "基础",
          options: [
            { id: 1, name: "欢迎页", url: "/welcome", describe: "" },
            { id: 2, name: "首页", url: "/home", describe: "" }
          ]
        },
        {
          name: "数据转发",
          options: [
            { id: 3, name: "本地用户列表", url: "/list", describe: "" },
            { id: 4, name: "api用户列表", url: "/apiList", describe: "" }
          ]
        },
        {
          name: "mysql操作",
          options: [
            {
              id: 5,
              name: "查询指定用户信息",
              url: "/user",
              describe: "可指定用户id",
            },
            { id: 6, name: "查询所有用户信息", url: "/userAll", describe: "" },
            {
              id: 7,
              name: "创建一个新用户",
              url: "/createUser",
              describe: "需指定username，nickname",
            },
            {
              id: 8,
              name: "删除指定用户信息",
              url: "/deleteUser",
              describe: "需指定用户id",
            },
            {
              id: 9,
              name: "更新指定用户",
              url: "/updateUser",
              describe: "需指定用户id，username",
            }
          ]
        },
        {
          name: "sequelize操作",
          options: []
        }
      ]
    };
    return dataList;
  }
}

module.exports = IndexService;
