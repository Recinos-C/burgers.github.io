var connection = require("./connection");

function qValue(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


var orm = {
    all: function (burgersInput, cb) {
        var query = "SELECT * FROM " + burgersInput + ";";
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // all notations must match when exporting items through MCV 
    // note all files are interwined and use the same names!
    create: function (burgersTable, col, val, cb) {
        var query = "INSERT INTO " + burgersTable + " (" + col.toString() + ") " + "VALUES ("+ qValue(val.length) + ") "
        connection.query(query, val, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    update: function (burgersTable, obColVal, condition, cb) {
        var query = "UPDATE " + burgersTable + "SET " + obColVal + " WHERE " + condition;
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result)
        })

    }

}

module.exports = orm;