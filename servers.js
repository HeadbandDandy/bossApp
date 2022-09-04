const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');


const PORT = process.env.PORT || 3306;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());










app.listen(PORT, () => {
    console.log('The Server Works Fam!')
})