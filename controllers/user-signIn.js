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
        let userResult = await signInService.signIn(formData);
        if(userResult){
            result.success = true;
            result.message ="login success";
            const userToken = {
                email:formData.email
            }
            const token = jwt.sign(userToken,jwtSecret,{expiresIn:'1h'})//token签名，有效时长为一小时
            ctx.body = {
                result,
                token
            };
        }else{
            result.message = 'login faild  please try again';
            ctx.body = {
                result
            }
        }
    },    
    /**
     * 
     * @param {object} ctx 
     */
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