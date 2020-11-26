'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.index.index);
  router.get('/welcome', controller.welcome.welcome);
  router.get('/home', controller.home.home);

  router.get('/list', controller.api.list);
  router.get('/apiList', controller.api.apiList);

  router.get('/user', controller.user.user);
  router.get('/userAll', controller.user.userAll);
  router.get('/createUser', controller.user.createUser);
  router.get('/deleteUser', controller.user.deleteUser);
  router.get('/updateUser', controller.user.updateUser);
};
