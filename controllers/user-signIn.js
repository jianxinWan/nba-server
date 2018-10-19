const signInService = require('../services/user-signIn');
const jwt = require('jsonwebtoken');
const jwtSecret = 'jwtdemo';
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
        console.log("enter siginIn api");
        let userResult = await signInService.signIn(formData);
        if(userResult){
            result.success = true;
            result.message ="登录成功";
            const userToken = {
                email:formData.email
            }
            const token = jwt.sign(userToken,jwtSecret,{expiresIn:'1h'})//token签名，有效时长为一小时
            console.log('login success!');
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
    }, 
    /**
     * 获取用户信息
     * @param {object} ctx 
     */
    async getUserInfo(ctx){
        const token = ctx.request.header.authorization;
        if(token){
            ctx.body = {
                msg:'认证成功'
            }
        } else{
            ctx.bod有= {
                message:'token错误',
                code:-1
            }
        }
        console.log(token);
        ctx.body = 'this is a test api';
    }
}