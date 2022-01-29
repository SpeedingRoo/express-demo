const mySQL = require('mysql');

const db = mySQL.createConnection({
    host:'localhost',
    username:'root',
    password:'admin123',
    database:'my_db_01',
    port:3306
});

module.exports = db;