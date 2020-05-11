var express = require("express");
var burger_stuff = require("../models/burger.js");
var router = express.Router();



router.get("/", function(req,res){
    burger_stuff.all(function(data){
        var obj = {
            burger_stuff: data
        };
        res.render("index", obj);
    })
})

router.post("/api/burger", function(res,req){
    burger_stuff.insert(["burger_name", "devoured"], [req.body.name,req.body.devoured],function(res){
        res.json({
            id: result.insertId
        })
    })
})

router.put("/api/burger/:id", function(req,res){
    var condition = "id= " + req.params.id;
    burger_stuff.update({
        devoured: req.body.devoured
    },
    condition,
    function(result){
        if (result.chanedRows === 0 ){
            return res.status(404).end();
        }
        res.status(200).end();
    }
    )
})

module.exports = router;