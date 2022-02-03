const mySQL = require('mysql');

const db = mySQL.createConnection({
    host:'localhost',
    user:'root',
    password:'admin123',
    database:'express_db',
});

module.exports = db;