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
        res.send(hbsobject);
        //res.render("")
    });
});

module.exports=router;