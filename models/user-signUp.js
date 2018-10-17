const duUtils = require('../util/db-util');
/**
 * 用户注册  插入数据
 * @param {object} options 查找条件参数
 * @return {object|null}
 */

module.exports = {
    async userInfoSignUp(options){
        console.log(options);
        let _sql = `INSERT INTO user_info (username,email,password,phone,userId) VALUES (?,?,?,?,?) `;
        let result = await duUtils.query(_sql,[options.userName,options.email+'1',options.password,options.phone,'10']);
        if(Array.isArray(result) && result.length>0){
            result = result[0];
        }else{
            result = null;
        }
        return result;   
    }
}