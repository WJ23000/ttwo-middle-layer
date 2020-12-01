const Service = require("egg").Service;

class IndexService extends Service {
  async list() {
    const dataList = {
      list: [
        {
          name: "基础",
          options: [
            { id: 1, name: "欢迎页", url: "/welcome", describe: "" },
            { id: 2, name: "首页", url: "/home", describe: "" },
          ],
        },
        {
          name: "数据转发",
          options: [
            { id: 3, name: "本地用户列表", url: "/list", describe: "" },
            { id: 4, name: "api用户列表", url: "/apiList", describe: "" },
          ],
        },
        {
          name: "mysql操作",
          options: [
            {
              id: 5,
              name: "查询指定用户信息",
              url: "/mysql/user",
              describe: "指定用户id",
            },
            {
              id: 6,
              name: "查询所有用户信息",
              url: "/mysql/userAll",
              describe: "",
            },
            {
              id: 7,
              name: "创建一个新用户",
              url: "/mysql/createUser",
              describe: "需指定username，nickname",
            },
            {
              id: 8,
              name: "删除指定用户信息",
              url: "/mysql/deleteUser",
              describe: "需指定用户id",
            },
            {
              id: 9,
              name: "更新指定用户",
              url: "/mysql/updateUser",
              describe: "需指定用户id，username",
            },
          ],
        },
        {
          name: "sequelize操作",
          options: [
            {
              id: 5,
              name: "查询指定用户信息",
              url: "/sequelize/user",
              describe: "指定用户id",
            },
            {
              id: 6,
              name: "分页查询用户信息",
              url: "/sequelize/userList",
              describe: "需指定page、pageSize",
            },
            {
              id: 7,
              name: "查询所有用户信息",
              url: "/sequelize/userAll",
              describe: "",
            },
            {
              id: 8,
              name: "创建一个新用户",
              url: "/sequelize/createUser",
              describe: "需指定username、nickname，username已设定索引为unique不可重复",
            },
            {
              id: 9,
              name: "删除指定用户信息",
              url: "/sequelize/deleteUser",
              describe: "需指定用户id",
            },
            {
              id: 10,
              name: "更新指定用户",
              url: "/sequelize/updateUser",
              describe: "需指定用户id，username",
            },
          ],
        },
      ],
    };
    return dataList;
  }
}

module.exports = IndexService;
