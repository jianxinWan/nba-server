/**
 * 用户业务操作
 */

const userModel = require('./../models/user-info');

 /**
  * 登录业务操作
  */
const user = {
    async signIn(formData){
        let resultData = await userModel.getOneByEmailAndPassword({
            'password': formData.password,
            'email': formData.email
        })
        return resultData;
    }
}

module.exports = user;
  