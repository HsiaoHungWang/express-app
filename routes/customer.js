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
//http://localhost:3000/customers/city?country=USA
router.get('/city',(req,res,next)=>{
    const sql = "select distinct city from customers where country=? order by city";   
    connection.query(sql,[req.query.country],function(err,results,fields){
        console.log(err)
       res.json(results);
    })
})

//http://localhost:3000/customers/customers?city=Portland
router.get('/customers',(req,res,next)=>{
    const sql = "select * from northwind.customers where city=?";   
    connection.query(sql,[req.query.city],function(err,results,fields){
        console.log(err)
       res.json(results);
    })
})


module.exports = router;