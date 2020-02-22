var mysql = require('mysql');

exports.Configure = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQLh@rsh17",
    database: "products"
});