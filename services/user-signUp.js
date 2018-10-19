/**
 * 用户业务操作
 */

const userSignUp = require('../models/user-signUp');

 /***
  * 
  * 注册
  */

module.exports = {
    async signUp(formData){
        console.log(formData,'111');
        let resultData = await userSignUp.userInfoSignUp({
            userName: formData.userName,
            email: formData.email,
            password:formData.password,
            phone:formData.phone
        })
        console.log(resultData);
        return resultData;
    }
};
  