const duUtils = require('../util/db-util');
const crypto = require('crypto');

/**
 * 根据用户名密码查找用户
 * @param {object} options 查找条件参数
 * @return {object|null}
 */

module.exports = {
    /**
     * 根据用户名密码查找
     * @param {} options 
     */
    async getOneByEmailAndPassword(options){
        console.log("signIn  model");
        let md5 = crypto.createHash("md5");
        let cryptopPass = md5.update(options.password).digest("hex");
        let _sql = `SELECT * FROM  user_info WHERE password="${cryptopPass}" AND email="${options.email}" limit 1`;
        let result = await duUtils.query(_sql);
        if(Array.isArray(result) && result.length >0){
            result = result[0];
        }else{
            result = null;
        }
        console.log("leave model");
        return result;
    }
};