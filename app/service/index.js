const Service = require('egg').Service;

class IndexService extends Service {
  async list() {
    const dataList = {
      list: [
        {
          name: '基础',
          options: [
            { id: 1, name: '欢迎页', url: '/welcome', describe: '' },
            { id: 2, name: '首页', url: '/home', describe: '' },
          ],
        },
        {
          name: '数据转发',
          options: [
            { id: 3, name: '本地用户列表', url: '/list', describe: '' },
            { id: 4, name: 'api用户列表', url: '/apiList', describe: '' },
          ],
        },
        {
          name: 'mysql操作',
          options: [
            {
              id: 5,
              name: '查询指定用户信息',
              url: '/mysql/user',
              describe: '指定用户id',
            },
            {
              id: 6,
              name: '查询所有用户信息',
              url: '/mysql/userAll',
              describe: '',
            },
            {
              id: 7,
              name: '创建一个新用户',
              url: '/mysql/createUser',
              describe: '需指定username，nickname',
            },
            {
              id: 8,
              name: '更新指定用户',
              url: '/mysql/updateUser',
              describe: '需指定用户id，username',
            },
            {
              id: 9,
              name: '删除指定用户信息',
              url: '/mysql/deleteUser',
              describe: '需指定用户id',
            },
          ],
        },
        {
          name: 'sequelize操作',
          options: [
            {
              id: 10,
              name: '查询指定用户信息',
              url: '/sequelize/user',
              describe: '必须指定用户id',
            },
            {
              id: 11,
              name: '分页查询用户信息',
              url: '/sequelize/userList',
              describe: '可指定page、pageSize【limit使用pageSize时必须使用parseInt函数进行转换】',
            },
            {
              id: 12,
              name: '查询所有用户信息',
              url: '/sequelize/userAll',
              describe: '',
            },
            {
              id: 13,
              name: '插入一个新用户',
              url: '/sequelize/createUser',
              describe: '必须指定对象，由username、password、create_time的集合组成【username字段已设定索引为unique，不可创建重复的username】',
            },
            {
              id: 14,
              name: '批量插入新用户',
              url: '/sequelize/batchCreateUser',
              describe: '必须指定数组，由包含username、password、create_time的集合组成【username字段已设定索引为unique，不可创建重复的username】',
            },
            {
              id: 15,
              name: '更新指定用户',
              url: '/sequelize/updateUser',
              describe: '必须指定对象，用户id和包含username的list集合组成',
            },
            {
              id: 16,
              name: '批量更新指定用户',
              url: '/sequelize/batchUpdateUser',
              describe: '必须指定对象，由用户id组成的数组ids和包含username的list集合组成',
            },
            {
              id: 17,
              name: '删除指定用户信息',
              url: '/sequelize/deleteUser',
              describe: '必须指定用户id',
            },
            {
              id: 18,
              name: '批量删除指定用户信息',
              url: '/sequelize/batchDeleteUser',
              describe: '必须指定ids数组，包含用户id',
            },
          ],
        },
        {
          name: 'redis操作',
          options: [
            { id: 19, name: '查询所有key', url: '/queryAllKey', describe: '' },
            { id: 20, name: '存储一个key', url: '/saveKey', describe: '' },
            { id: 21, name: '获取一个key', url: '/getKey', describe: '' },
          ],
        },
      ],
    };
    return dataList;
  }
}

module.exports = IndexService;
