const userInfoService = require('./../services/user-info');
const jwt = require('jsonwebtoken');
const secret = 'jwt demo';
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
        let userResult = await userInfoService.signIn(formData);
        if(userResult){
            result.success = true;
            result.message ="login success";
            const userToken = {
                name:formData.email
            }
            const token = jwt.sign(userToken,secret,{expiresIn:'1h'})//token签名，有效时长为一小时
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
    async singUp(ctx){
    },
    /**
     * 获取用户信息
     * @param {object} ctx 
     */
    async getUserInfo(ctx){
        const token = ctx.request.header.authorization;
        ctx.body = 'this is a test api';
    }
}