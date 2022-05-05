var express = require('express');
var router = express.Router();

/* GET users listing. */
//http://localhost:3000/users/
router.get('/', function(req, res, next) {
  //接收Ajax透過GET傳過來的資料
  const name = req.query.name ? req.query.name : "Ajax";
  setTimeout(()=>{
    res.send(`Hello ${name}!!`);
  },5000)
  
});

//http://localhost:3000/users/register
router.get('/register',(req,res)=>{
  res.render('register',{ title: 'Ajax POST Demo' })
})




module.exports = router;
