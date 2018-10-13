const  mysql = require('mysql');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'520956wjx',
    database:'nba'
});

/**
 * 查询业务
 */
let query = (sql,value)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                reject(err);
            }else{
                connection.query(sql,value,(err,res)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(res);
                    }
                    connection.release();
                })
            }
        })
        
    })
}
module.exports = {
    query
}