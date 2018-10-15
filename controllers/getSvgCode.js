const svgCaptcha = require('svg-captcha');
module.exports  =  {
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
    async emailVerify(ctx){
        let formData = ctx.request.body;
        if(formData.code){
            let serverCode = ctx.session.svgCode.toLocaleLowerCase();
            let browserCode = formData.code.toLocaleLowerCase();
            if(serverCode === browserCode){
                ctx.body = {
                    success:true,
                    msg:'the code is ok'
                }
            }else{
                ctx.body = {
                    success:false,
                    msg:'the code is error'
                }
            }
        }else{
            ctx.body = {
                success:false,
                msg:'the code is null!'
            }
        }
    }
}