const router  = require('koa-router')();
const userInfoController = require('./../controllers/user-info');
const routers = router
    .post('/signIn',userInfoController.signIn)
    .post('/signUp')
    .get('/getUserInfo',userInfoController.getUserInfo)

module.exports = routers;