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
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
}


var orm = {
    selectAll: function (burgers, cb) {
        var query = "SELECT * FROM " + burgers + ";";
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burgers, col, val, cb) {
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