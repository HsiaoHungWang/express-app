var express = require('express');
const multer = require('multer');
var router = express.Router();

//沒有上傳檔案的multe設定
const upload = multer();

/* GET users listing. */
//http://localhost:3000/users?name=Jack&age=20
router.get('/', function(req, res, next) {
  //接收Ajax透過GET傳過來的資料
  const name = req.query.name ? req.query.name : "Ajax";
  setTimeout(()=>{
    res.send(`Hello ${name}!!`);
  },5000)
  
});

//GET http://localhost:3000/users/register
router.get('/register',(req,res)=>{
  res.render('register',{ title: 'Ajax POST Demo' })
})

// //POST http://localhost:3000/users/register
// router.post('/register',(req,res)=>{
//   //req.body 接收表單透過POST form-urlencoded 傳過來的資料
//   res.send(`POST:${req.body.email} - ${req.body.pwd}`)
// })


//POST http://localhost:3000/users/register
//沒有上傳檔案的FormData使用 upload.none() middleware
router.post('/register',upload.none(),(req,res)=>{
  //req.body 接收表單透過POST fromdata 傳過來的資料
  res.send(`POST:${req.body.email} - ${req.body.pwd}`)
})

module.exports = router;
