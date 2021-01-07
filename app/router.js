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

  router.get('/mysql/user', controller.mysql.user);
  router.get('/mysql/userAll', controller.mysql.userAll);
  router.get('/mysql/createUser', controller.mysql.createUser);
  router.get('/mysql/updateUser', controller.mysql.updateUser);
  router.get('/mysql/deleteUser', controller.mysql.deleteUser);
  

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
  
};
