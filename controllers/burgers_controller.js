var express = require("express");
var burger_stuff = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req,res){
    res.redirect("/burgers");
})
router.get("/burgers", function (req, res) {
    burger_stuff.all(function (data) {
        res.render("index", {burger: data})
        console.log(data)
    })
})
router.post("/burgers/create", function (res, req) {
    burger_stuff.create(req.body.burger_name, function (result) {
        console.log(result)
        res.redirect("/")
    })
})
router.put("/burger/:id", function (req, res) {
    var condition = req.params.id;
    burger_stuff.update(condition,function (result) {
            console.log(result)
            res.status(200).end();
        }
    )
})
module.exports = router;