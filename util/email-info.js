module.exports = (code)=>{
    console.log(code);
    if(code){
        return {
            title: '验证码',
            htmlBody:
            `<div style="margin: 80px auto 0; width: 580px; background: #FFF; box-shadow: 0 0 10px #333; text-align:left;">
                <div style="margin: 0 40px; color: #999; border-bottom: 1px dotted #DDD; padding: 20px 0 20px; font-size: 13px; text-align: center;">
                    <h2>Hello Friend!</h2>
                </div>
                `
                + code +
                // <div style="padding: 30px 40px 40px;"
                // `
                //     `您好，请在 2 小时内点击此链接以完成激活
                //     <br />
                //     <a style="color: #009A61; text-decoration: none;" href="`+'http://localhost:8888/user/register/checkCode?name=origin_wan&code='+ +`" rel="noopener" target="_blank">` 
                //     + 'http://localhost:8888/user/register/checkCode?username='+  +'&code='+ code + '&email='+  +
                //     `</a>
                //     <br>
                //     完成激活后，如需设置密码
                //     <a href="#" rel="noopener" target="_blank" style="color:#009A61">请点击</a>
                //     <br>
                //     激活遇到问题？请联系我们
                // </div>
                `
                <div style="text-align: center;">
                    <a href="#" style="display: block;height: 160px;" rel="noopener" target="_blank">
                    </a>
                </div>
                <div style="background: #EEE; border-top: 1px solid #DDD; text-align: center; height: 90px; line-height: 90px;">
                    <a href="#" style="padding: 8px 18px; background: #009A61; color: #FFF; text-decoration: none; border-radius: 3px;" rel="noopener" target="_blank">完成激活 ➔</a>
                </div>
            </div>
            `
        }
    }
    
}
