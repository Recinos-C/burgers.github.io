var mysql = require("mysql");
// var app = express();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Najih_56@Forna",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    return;
  }
  console.log("connected as id " + connection.threadId);

});


module.exports = connection;