const nodemailer = require('nodemailer');
const config = {
    host: 'smtp.126.com', 
    port: 25,
    auth: {
        user: 'origin_wan@126.com', //刚才注册的邮箱账号
        pass: 'WJX520DY'  //邮箱的授权码，不是注册时的密码
    }
}
module.exports = config;