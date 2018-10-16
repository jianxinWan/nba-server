const nodemailer = require('nodemailer');
const config = require('../util/email-conf'); 

const transporter = nodemailer.createTransport(config);

module.exports.send = (mail)=>{
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mail,(err,info)=>{
            if(err){
                console.log("发送失败");
                reject(err);
            }else{
                console.log("发送成功！");
                resolve(info);
            }
        });
    });
}
