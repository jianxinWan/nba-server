const duUtils = require('../util/db-util');

/**
 * 
 * 检查邮箱是否唯一
 */

module.exports = {
    /**
     * 检查邮箱是否唯一
     * @param {*} options 
     */
    async checkOne(options){
        let _sql = `SELECT * from user_info where email="${options.email}" limit 1`;
        let result = await duUtils.query( _sql );
        return result;
    }
};