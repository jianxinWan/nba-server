const router  = require('koa-router')();
const userInfoController = require('./../controllers/user-info');
const getSvgCodeController = require('./../controllers/getSvgCode');
const routers = router
    .post('/signIn',userInfoController.signIn)
    .get('/getUserInfo',userInfoController.getUserInfo)
    .get('/getSvgCode',getSvgCodeController.getSvgCode)
    .post('/getEmailVerify',getSvgCodeController.emailVerify)
    .post('/signUp')
module.exports = routers;