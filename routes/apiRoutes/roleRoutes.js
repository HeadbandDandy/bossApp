const express = require('express');
const router = express.Router();

const db = require('../../db/connection');

const inputCheck = require('../../utils/inputCheck');

//view all roles
router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ 
            message: 'Complete', 
            data: rows
        });
    });
});

//select one role
router.get('/roles/:id', (req, res) => {
    const sql = `SELECT * FROM roles WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Complete', 
            data: row
        });
    });
});

//add a role
router.post('/role', ({ body }, res) => {
    const errors = inputCheck(body, 'title', 'salary');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO roles (title, salary)
    VALUES (?,?)`;
    const params = [body.title, body.salary];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Complete', 
            data: body
        });
    });
});

module.exports = router;