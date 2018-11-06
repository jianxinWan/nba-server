const signInService = require('../services/user-signIn');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../util/tokenKey');
module.exports = {
    /**
     * 登录操作  
     * @param {object}上下文对象
     * 
     * */
    async signIn(ctx){
        let formData = ctx.request.body;
        let result = {
            success:false,
            message:'',
            data:null,
            code:''
        }
        let userResult = await signInService.signIn(formData);
        if(userResult){
            result.success = true;
            result.message ="登录成功";
            const userToken = {
                email:formData.email
            }
            const token = jwt.sign(userToken,jwtSecret.secret,{expiresIn:'24h'})
            //token签名，设置有效时长
            ctx.body = {
                result,
                token
            };
        }else{
            result.message = '登录失败';
            ctx.body = {
                result
            }
        }
    }
}