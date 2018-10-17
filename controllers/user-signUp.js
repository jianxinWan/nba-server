const userSignUp = require('../services/user-signUp');
const jwt = require('jsonwebtoken');
const jwtSecret = 'jwtdemo';
module.exports = {
    /**
     * 登录处理
     * @param {object}  
     */
    async singUp(ctx){
        //判断验证码是否正确
        if(ctx.session.emailCode){
            ctx.body = {
                success:false,
                mes:'Verification code failure'
            }
        }else{
            if(ctx.request.body.emailCode !== ctx.session.emilCode){
                const formData = ctx.request.body;
                console.log(formData);
                let userInfo = {
                    userName:formData.userName,
                    email:ctx.session.emailCode,
                    password:formData.password,
                    emilCode:formData.emailCode,
                    phone:formData.phoneNum
                }
                const result = await userSignUp.signUp(userInfo);
                ctx.body = {
                    success:true,
                    msg:'regist success',
                    result
                }
                
            }else{
                ctx.body = {
                    success:false,
                    mes:'emailCode is error'
                }
            }
        }
        
    },
}