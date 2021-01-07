/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // 用于cookie签名的密钥，应改为自己的，并保持安全
  config.keys = appInfo.author + '173568_a';

  // middleware中间件
  config.middleware = [
    'gzip',
    'robot',
    'catchRequest',
    'jwt'
  ];

  // 小于 1k 的响应体不压缩(中间件配置)
  config.gzip = {
    enable: true,
    threshold: 1024,
  };

  // 禁止百度爬虫访问(中间件配置)
  config.robot = {
    enable: true,
    ua: [
      /Baiduspider/i,
    ],
  };

  // 对路由请求进行异常处理
  config.catchRequest = {
    enable: true
    // ignore: ['/log'] // 设置符合某些规则的请求不经过这个中间件。
  };

  // 对路由请求进行token校验
  config.jwt = {
    enable: true,
    ignore: [
      '/index', 
      '/sequelize/login', 
      '/sequelize/register'
    ] // 设置符合某些规则的请求不经过这个中间件(配置了此项，则不需要在router.js文件中使用中间件)
  };

  // 使用nunjucks模板引擎(默认为nunjucks)
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // 关闭csrf功能(不建议这么做，后期改回来)
  config.security = {
　　csrf: {
　　  enable: false,
      ignoreJSON: true
　　},
　　domainWhiteList: ['*'] // 允许访问接口的白名单
　};
    
  // 使用cors
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  // 使用mysql
  config.mysql = {
    client: {
      // 主机(外网可访问)
      host: '192.168.66.175',
      // 端口号
      port: '3306',
      // 管理员用户名
      user: 'root',
      // 管理员密码
      password: 'ZJhw@123456',
      // 数据库名
      database: 'ttwo_dev',
    },
    // 加载到应用程序，默认为打开
    app: true,
    // 加载到代理中，默认值为“关闭”
    agent: false,
  };

  // 使用sequelize操作mysql
  config.sequelize = {
    // 指定数据库类型（mysql, mariadb, postgres, mssql）
    dialect: 'mysql', // support:
    // 主机(外网可访问)
    host: '192.168.66.175',
    // 端口号
    port: '3306',
    // 管理员用户名
    user: 'root',
    // 管理员密码
    password: 'ZJhw@123456',
    // 数据库名
    database: 'ttwo_dev',
    // 保存时用的时间
    timezone: '+08:00', // 本地时区
    // 读取时用的时间
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        // for reading from database
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
    define: {
      // 禁止时间戳，如果不加这个会提示Unknown column 'created_at' in 'field list'错误
      timestamps: false,
      // 注意需要加上这个，egg-sequelize只是简单的使用Object.assign对配置和默认配置做了merge, 如果不加这个 update_at会被转变成 updateAt故报错
      underscored: true,
      // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
      // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
      freezeTableName: true,
    },
  };

  // 使用redis
  config.redis = {
    client: {
      // 主机(外网可访问)
      host: "127.0.0.1",
      // 端口号
      port: 6379,
      // 管理员密码
      password: "",
      db: 0
    }
  };

  // 使用socket.io
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [], // 针对消息的处理暂时不实现
      },
    },
  };

  // api默认请求地址
  config.baseApi = 'http://gateway.dev.sysadmin.com/service-dl-platform/api/v1/oms';

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
