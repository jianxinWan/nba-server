const router  = require('koa-router')();
const userSignInController = require('../controllers/user-signIn');
const userSignUpController = require('../controllers/user-signUp');
const getSvgCodeController = require('./../controllers/getSvgCode');
const routers = router
    .post('/signIn',userSignInController.signIn)
    .get('/getUserInfo',userSignInController.getUserInfo)
    .get('/getSvgCode',getSvgCodeController.getSvgCode)
    .post('/getEmailVerify',getSvgCodeController.emailVerify)
    .post('/signUp',userSignUpController.singUp)
module.exports = routers;