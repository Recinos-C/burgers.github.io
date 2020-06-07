var connection = require("./connection");

function qValue(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function sql(ob) {
    var arr = [];
    for (var key in ob) {   
            arr.push(key + "=" + value);  
    }
    return arr.toString();
}


var orm = {
    selectAll: function (burgers, cb) {
        var query = "SELECT * FROM " + burgers + ";";
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // all notations must match when exporting items through MCV 
    // note all files are interwined and use the same names!
    create: function (burgers, col, val, cb) {
        var query = "INSERT INTO " + burgers;

        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += qValue(val.length);
        queryString += ") ";
        connection.query(query, val, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    updateOne: function (burgers, obColVal, condition, cb) {
        var query = "UPDATE " + burgers + "SET " + sql(obColVal) + " WHERE " + condition;
        connection.query(query, val, function (err, result) {
            if (err) throw err;
            cb(result)
        })

    }

}

module.exports = orm;