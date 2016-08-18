var express = require('express');
var work = express.Router();

var workDao = require('../dao/workDao');

work.get('/', function (req, res, next) {
    workDao.queryAll(req, res, next);
});

work.get('/update', function (req, res, next) {
    res.render('updateWorkInfo');
});

work.get('/add', function (req, res, next) {
    res.render('addWorkInfo');
});

work.post('/addWork', function (req, res, next) {
    workDao.add(req, res, next);
});

work.get('/queryWork', function (req, res, next) {
    workDao.queryById(req, res, next);
});

work.get('/queryAll', function (req, res, next) {
    workDao.queryAll(req, res, next);
});

work.get('/deleteWork', function (req, res, next) {
    workDao.delete(req, res, next);
});

work.post('/updateWork', function (req, res, next) {
    workDao.update(req, res, next);
});

module.exports = work;