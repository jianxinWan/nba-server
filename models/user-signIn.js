const duUtils = require('../util/db-util');

/**
 * 根据用户名密码查找用户
 * @param {object} options 查找条件参数
 * @return {object|null}
 */

module.exports = {
    async getOneByEmailAndPassword(options){
        let _sql = `SELECT * FROM  user_info WHERE password="${options.password}" AND email="${options.email}" limit 1`;
        let result = await duUtils.query(_sql);
        if(Array.isArray(result) && result.length >0){
            result = result[0];
        }else{
            result = null;
        }
        return result;
    }
};