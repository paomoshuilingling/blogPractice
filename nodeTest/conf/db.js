// conf/db.js
// MySQL数据库联接配置
module.exports = {
  mysql: {
    host: 'localhost', 
    user: 'root',
    password: '123456',
    database:'blog', 
    // 前面建的blog表位于这个数据库中
    port: 3306
  }
};