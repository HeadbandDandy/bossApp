const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes')


const PORT = process.env.PORT || 3306;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes)



//response for unmatched routes below
app.use((req, res) => {
    res.status(404).end();
})






// starts server after the connection
db.connect(err => {
    if(err) throw err;
    console.log('Database Connected Fam!');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})