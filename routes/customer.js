var express = require('express');
var router = express.Router();
const connection = require('../modules/mysql_config');

//http://localhost:3000/customers/country
router.get('/country',(req,res,next)=>{
    const sql = "select distinct country from customers order by country";   
    connection.query(sql,function(err,results,fields){
        console.log(err)
       res.json(results);
    })
})


module.exports = router;