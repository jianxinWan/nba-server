const jwt = require('jsonwebtoken');
const jwtSecret  = require('../util/tokenKey');
module.exports = {
    /**
     * 获取用户信息
     *
     */
    async getUserInfo(ctx){
        const token = ctx.request.header.authorization.slice(7);
        if(token){
            jwt.verify(token,jwtSecret.secret,(error,decoded)=>{
                if(error){
                    ctx.body = {
                        code:-1,
                        msg:error.message
                    }
                }else{
                    ctx.body = {
                        email:decoded.email,
                        msg:"token is ok!"
                    }
                }
            })
        }else{
            ctx.body = {
                msg:"token is error or null"
            }
        }
    }
}