var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('resume');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/back', function(req, res, next) {
  res.render('back');
});

module.exports = router;
