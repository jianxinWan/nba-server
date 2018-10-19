/**
 * 用户业务操作
 */

const userSignIn = require('../models/user-signIn');

 /**
  * 登录业务操作
  */

module.exports = {
    async signIn(formData){ 
        console.log("signIn  service");
        let resultData = await userSignIn.getOneByEmailAndPassword({
            'password': formData.password,
            'email': formData.email
        })
        return resultData;
    },
    /**
     * 检查邮箱是否为一
     * @param {*} options 
     */
    async checkOne(options){
        let resultData = await userSignIn.checkOne(options);
        return resultData;
    }
}
  