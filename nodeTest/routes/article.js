var express = require('express');
var article = express.Router();

var articleDao=require('../dao/articleDao');

article.get('/', function(req, res, next) {
  articleDao.queryAll(req, res, next);
});

article.get('/update', function (req, res, next) {
  res.render('updateArticleInfo');
});

article.get('/add', function (req, res, next) {
  res.render('addArticleInfo');
});

article.get('/delete', function (req, res, next) {
  res.render('deleteArticleInfo');
});

article.post('/addArticle', function (req, res, next) {
  articleDao.add(req, res, next);
});

article.get('/articleDetail', function (req, res, next) {
  articleDao.queryById(req, res, next);
});

article.get('/articleType', function (req, res, next) {
  articleDao.queryByType(req, res, next);
});

article.get('/queryAll', function (req, res, next) {
  articleDao.queryAll(req, res, next);
});

article.post('/deleteArticle', function (req, res, next) {
  articleDao.delete(req, res, next);
});

article.post('/updateArticle', function (req, res, next) {
  articleDao.update(req, res, next);
});

module.exports = article;