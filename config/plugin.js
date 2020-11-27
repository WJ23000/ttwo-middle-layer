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

  // 使用mysql
  mysql: {
    enable: true, // 开启
    package: 'egg-mysql', // 对应哪个包
  },

  // 使用sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
};
