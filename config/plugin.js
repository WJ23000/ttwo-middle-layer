'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 使用nunjucks模板引擎
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },

  // 使用cors跨域
  cors: {
    enable: true,
    package: 'egg-cors'
  },

  // 使用jwt
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },

  // 使用mysql
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },

  // 使用sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },

  // 使用redis
  redis: {
    enable: true,
    package: 'egg-redis'
  }
};
