'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/index', controller.index.index);
  router.get('/welcome', controller.welcome.welcome);
  router.get('/home', controller.home.home);

  router.get('/list', controller.api.list);
  router.get('/apiList', controller.api.apiList);

  router.post('/sequelize/login', controller.sequelize.login);
  router.get('/sequelize/user', controller.sequelize.user);
  router.get('/sequelize/userList', controller.sequelize.userList);
  router.get('/sequelize/userAll', controller.sequelize.userAll);
  router.post('/sequelize/createUser', controller.sequelize.createUser);
  router.post('/sequelize/batchCreateUser', controller.sequelize.batchCreateUser);
  router.post('/sequelize/updateUser', controller.sequelize.updateUser);
  router.post('/sequelize/updateManyUser', controller.sequelize.updateManyUser);
  router.post('/sequelize/batchUpdateUser', controller.sequelize.batchUpdateUser);
  router.get('/sequelize/deleteUser', controller.sequelize.deleteUser);
  router.post('/sequelize/batchDeleteUser', controller.sequelize.batchDeleteUser);

  router.get('/redis/getAllKey', controller.redis.getAllKey);
  router.get('/redis/saveKey', controller.redis.saveKey);
  router.get('/redis/getKey', controller.redis.getKey);
  router.get('/redis/delKey', controller.redis.delKey);
  router.get('/redis/getUserList', controller.redis.getUserList);
};
