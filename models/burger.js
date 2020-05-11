var orm = require("../config/orm.js");

var burger_stuff = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    insert: function(col, val,cb){
        orm.insertOne("burgers", col,val,function(res){
            cb(res);
        })
    },
    update: function(obColVal,condition,cb){
        orm.updateOne("burgers", obColVal, condition, function(res){
            cb(res);
        })
    }
}

module.exports = burger_stuff;