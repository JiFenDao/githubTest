var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


 
/* 添加一个测试api*/
router.get('/testAPi',function(rep,res,next){
  res.send('{name:jaki,age:24}');
});


module.exports = router;



 