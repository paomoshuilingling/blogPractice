//dao/workSqlMapping.js
//CRUD SQL语句
var work = {
	insert: 'INSERT INTO work(id, type, title, content) VALUES(0,?,?,?)',
	update: 'update work set type=?, title=?, content=? where id=?',
	delete: 'delete from work where id=?',
	queryById: 'select * from work where id=?',
	queryAll: 'select * from work'
};

module.exports=work;