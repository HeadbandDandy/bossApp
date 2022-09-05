const mysql = require('mysql2')


const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'dandy',
    password: 'AllHailKIngDandy1!',
    database: 'election'
});


module.exports = db;