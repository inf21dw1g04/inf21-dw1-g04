'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    //host: 'localhost',
    host: 'mysql', //USAR ESTE HOST NO DOCKER
    user: 'root',
    password: '12345678',
    database: "biblioteca"
});

connection.connect (function (err) {
    if (err) {
        console.log('Error on database connection.');
        throw err;
    }
});

module.exports = connection;