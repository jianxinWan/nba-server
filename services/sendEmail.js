const nodemailer = require('nodemailer');
const config = require('../util/email-conf'); 
const checkEmail = require('../models/checkEmail');
const transporter = nodemailer.createTransport(config);

module.exports ={
    /**
     * 查找存在邮箱
     * @param {object} options 
     */
    async checkOne(options){
        let resultData = await checkEmail.checkOne({
            email:options.email
        })
        return resultData;
    },  
    /**
     * 发送邮件
     * @param {} mail 
     */
    async sendMail(mail){
        console.log('enter email server');
        return new Promise((resolve,reject)=>{
            transporter.sendMail(mail,(err,info)=>{
                if(err){
                    console.log(err);
                    console.log("发送失败");
                    reject(err);
                }else{
                    console.log("发送成功！");
                    resolve(info);
                }
            });
        });
    },
    
}
