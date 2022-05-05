var express = require('express');
var router = express.Router();

/* GET home page. */
//http://localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//http://localhost:3000/ajaxget  對應到某支程式
router.get('/ajaxget',(req,res,next)=>{
  res.render('ajaxGet',{title:'Ajax Get Demo'})
})

router.get('/customers',(req,res)=>{
res.render('customer',{title:'連動式下拉選單'})
})

module.exports = router;
