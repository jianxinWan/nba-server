const userSignUp = require('../services/user-signUp');
const checkEmail = require('../services/sendEmail');
module.exports = {
    /**
     * 注册控制
     * @param {object}  
     */
    async singUp(ctx){
        //判断验证码是否正确
        if(!ctx.session.emailCode){
            ctx.body = {
                success:false,
                msg:'验证码失效，请重新进行认证'
            }
        }else{
            if(ctx.request.body.emailCode === ctx.session.emailCode){
                const formData = ctx.request.body;
                let userInfo = {
                    userName:formData.userName,
                    email:ctx.session.email,
                    password:formData.password,
                    phone:formData.phoneNum
                }
                //再次检查用户信息是否唯一
                let resultDta = await checkEmail.checkOne(ctx.session);
                if(resultDta.length === 0){
                    const result = await userSignUp.signUp(userInfo);
                    if(result.serverStatus === 2){
                        ctx.body = {
                            success:true,
                            msg:'注册成功',
                            signUp:true
                        }
                    }
                }else{
                    ctx.body = {
                        success:false,
                        msg:'用户已存在'
                    }
                }
            }else{
                ctx.body = {
                    success:false,
                    msg:'邮箱验证码错误'
                }
            }
        }
    },
}