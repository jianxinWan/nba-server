/**
 * 用户业务操作
 */

const userSignIn = require('../models/user-signin');

 /**
  * 登录业务操作
  */

module.exports = {
    async signIn(formData){
        let resultData = await userSignIn.getOneByEmailAndPassword({
            'password': formData.password,
            'email': formData.email
        })
        return resultData;
    }
}
  