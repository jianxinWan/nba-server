const duUtils = require('../util/db-util');
const crypto = require('crypto');
/**
 * 用户注册  插入数据
 * @param {object} options 查找条件参数
 * @return {object|null}
 */

module.exports = {
    async userInfoSignUp(options){
        let _sql = `INSERT INTO user_info (username,email,password,phone,userId) VALUES (?,?,?,?,?) `;
        let md5 = crypto.createHash('md5');
        let cryptoPass = md5.update(options.password).digest('hex');
        let result = await duUtils.query(_sql,[options.userName,options.email,cryptoPass,options.phone,'10']);
        return result;   
    }
}