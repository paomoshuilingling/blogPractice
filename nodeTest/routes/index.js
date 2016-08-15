var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('resume');
});

router.get('/article', function(req, res, next) {
  res.render('article');
});

router.get('/work', function(req, res, next) {
  res.render('work');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
