//dao/articleSqlMapping.js
//CRUD SQL语句
var article = {
    insert: 'INSERT INTO article(id, type, date, title, love, scan, comment, brief, content) VALUES(0,?,?,?,?,?,?,?,?)',
    update: 'update article set type=?, date=?, title=?, love=?, scan=?, comment=?, brief=?, content=? where id=?',
    delete: 'delete from article where id=?',
    queryById: 'select * from article where id=?',
    queryAll: 'select * from article'
};

module.exports = article;