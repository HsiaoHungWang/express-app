var express = require('express');
var router = express.Router();

/* GET users listing. */
//http://localhost:3000/users/
router.get('/', function(req, res, next) {
  res.send('Hello Ajax');
});




module.exports = router;
