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