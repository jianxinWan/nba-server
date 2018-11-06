const svgCaptcha = require('svg-captcha');
const email = require('../services/sendEmail');
const emailInfo = require('../util/email-info');
const getRandom = require('../util/getRandom');
module.exports  =  {
    /**
     * 生成图片验证码
     * @param {*} ctx 
     */
    async getSvgCode (ctx){
        const svgCode = svgCaptcha.create({
            size: 4 ,// 验证码长度
            ignoreChars: '0o1i',// 验证码字符中排除 0o1i
            noise: 2, // 干扰线条的数量
            width:132,
            height:44
        });
        if(svgCode.data){
            ctx.session.svgCode = svgCode.text;
            ctx.body = svgCode.data;
        }else{
            ctx.body = {
                msg:'svgCode  create error!'
            }
        }
    },
    /**
     * 生成邮箱验证码
     * @param {*} ctx 
     */
    async emailVerify(ctx){
        let formData = ctx.request.body;
        if(formData.code && ctx.session.svgCode){
                //转换大小写
            let serverCode =String(ctx.session.svgCode).toLocaleLowerCase();
            let browserCode =String(formData.code).toLocaleLowerCase();
            if(serverCode === browserCode){
                let resultData = await email.checkOne(formData);
                if(resultData.length === 0){
                    const code  = getRandom(6);//后台生成随机验证码
                    const emailBase = emailInfo(code);//生成邮箱的基本内容
                    ctx.session.emailCode = code;//保存用户验证码
                    ctx.session.email = formData.email;//保存用户邮箱信息
                    let mailOptions = {
                        from: 'origin_wan@126.com', // 发件人地址
                        to: formData.email, // 收件人地址，多个收件人可以使用逗号分隔
                        subject: emailBase.title, // 邮件标题
                        html: emailBase.htmlBody // 邮件内容
                    };
                    let sendState = await email.sendMail(mailOptions);
                    if(sendState.accepted){
                        ctx.body = {
                            success:true,
                            msg:'验证成功'
                        }
                    }else{
                        ctx.body = {
                            success:false,
                            msg:'验证失败'
                        }
                    }
                }else{
                    ctx.body = {
                        success:false,
                        msg:'邮箱已被注册'
                    }
                }
            }else{
                ctx.body = {
                    success:false,
                    msg:'验证码错误！'
                }
            }
        }else{
            ctx.body ={
                success:false,
                msg:'验证码错误，请重新输入'
            }
        }
    }
}