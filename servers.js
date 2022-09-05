const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./db/connection');


const PORT = process.env.PORT || 3306;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());









// starts server after the connection
db.connect(err => {
    if(err) throw err;
    console.log('Database Connected Fam!');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})