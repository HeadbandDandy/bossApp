const mysql = require('mysql2')


const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'boss_app'
});


module.exports = db;