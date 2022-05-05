var express = require('express');
const multer = require('multer');
var router = express.Router();
// require('dotenv').config();

// console.log(process.env.MYSQL_DB);
// console.log(process.env.MYSQL_HOST);
//沒有上傳檔案的multe設定
//const upload = multer();

//上傳檔案的multer設定
const ext = {
  'image/jpeg':'.jpg',
  'image/png':'.png',
  'image/gif':'.gif',
}
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, 'public/uploads');
  },
  filename:(req,file,cb)=>{
     cb(null, new Date().getTime() + ext[file.mimetype]);
  }
})
const fileFilter = (req,file,cb)=>{ 
  cb(null, !!ext[file.mimetype]);
}
const upload = multer({storage, fileFilter});

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
// router.post('/register',upload.none(),(req,res)=>{
//   //req.body 接收表單透過POST fromdata 傳過來的資料
//   res.send(`POST:${req.body.email} - ${req.body.pwd}`)
// })


//POST http://localhost:3000/users/register
//沒有上傳檔案的FormData使用 upload.none() middleware
router.post('/register',upload.single("photo"),(req,res)=>{
  //req.body 接收表單透過POST fromdata 傳過來的文字資料
  //req.file 會接收上傳的檔案
  console.log(req.body);
  console.log(req.file)
  //res.send(`POST:${req.body.email} - ${req.body.pwd}`)
  res.send(`上傳檔案名稱為 ${req.file.filename}`)
})


module.exports = router;
