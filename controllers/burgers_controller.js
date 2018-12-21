var express=require("express");

var router=express.Router();
var burger=require("../models/burger.js");

router.get("/",function(req,res)
{
    burger.all(function(data)
    {
        var hbsobject={
            burgers:data
        };
        console.log(hbsobject);
        //res.send(hbsobject);
        res.render("index",hbsobject);
    });
});

router.post("/api/burgers",function(req,res)
{
    burger.create([
        "burger_name"
    ],[req.body.burger_name],function(result)
    {
        
        res.redirect('/');
    });
});



module.exports=router;