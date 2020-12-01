/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // 用于cookie签名的密钥，应改为自己的，并保持安全
  config.keys = appInfo.author + "173568_a";

  // middleware中间件
  config.middleware = [
    'gzip',
    'robot'
  ];

  // 小于 1k 的响应体不压缩(中间件配置)
  config.gzip = {
    threshold: 1024,
  };

  // 禁止百度爬虫访问(中间件配置)
  config.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };

  // 使用nunjucks模板引擎(默认为nunjucks)
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
    mapping: {
      '.html': 'nunjucks',
    }
  };

  // 使用mysql
  config.mysql={
    client:{
        // 主机
        host:'localhost',
        // 端口号
        port:'3306',
        // 管理员用户名 
        user:'root',
        // 管理员密码 
        password:'root',
        // 数据库名
        database:'ttwo_dev'
    },
    // 加载到应用程序，默认为打开
    app:true,
    // 加载到代理中，默认值为“关闭”
    agent:false
  };

  // 使用sequelize操作mysql
  config.sequelize = {
    // 指定数据库类型（mysql, mariadb, postgres, mssql）
    dialect: 'mysql', // support: 
    // 主机
    host:'localhost',
    // 端口号
    port:'3306',
    // 管理员用户名 
    user:'root',
    // 管理员密码 
    password:'root',
    // 数据库名
    database:'ttwo_dev',
    // 保存时用的时间
    timezone: '+08:00', // 本地时区
    // 读取时用的时间
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      }
    },
    define: {
      // 禁止时间戳，如果不加这个会提示Unknown column 'created_at' in 'field list'错误
      timestamps: false,
      // 注意需要加上这个，egg-sequelize只是简单的使用Object.assign对配置和默认配置做了merge, 如果不加这个 update_at会被转变成 updateAt故报错
      underscored: true, 
      // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
      // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
      freezeTableName: true
    }
  };

  // api默认请求地址
  config.baseApi = 'http://gateway.dev.sysadmin.com/service-dl-platform/api/v1/oms'

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};