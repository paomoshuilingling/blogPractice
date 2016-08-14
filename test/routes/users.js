var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('updateUser');
});

/* ADD users. */
router.get('/addUser', function(req, res, next) {
  userDao.add(req, res, next);
});

/*queryAll user*/
router.get('/queryAll',function(req,res,next){
	console.log('查询所有user');
	userDao.queryAll(req,res,next);
});

/*query user*/
router.get('/query',function(req,res,next){
	userDao.queryById(req,res,next);
});

/*deleteUser user*/
router.get('/deleteUser',function(req,res,next){
	userDao.delete(req,res,next);
});

/*queryAll user*/
router.post('/updateUser',function(req,res,next){
	userDao.update(req,res,next);
});

module.exports = router;
