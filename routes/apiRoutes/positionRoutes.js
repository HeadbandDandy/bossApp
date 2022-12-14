const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

const inputCheck = require('../../utils/inputCheck');

//below should get all employees
router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
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

// below should get a single employee
router.get('/employee/:id', (req, res) => {
    const sql = 'SELECT * FROM employees where id = ?';
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

// post route below should add an employee
router.post('/api/employee', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name','role_id', 'manager_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

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

// below should update a position
router.put('/employee/:id', (req, res) => {
    const errors = inputCheck(req.body);

    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `UPDATE employees WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee Not Found'
            });
        } else {
            res.json({
                message: 'Complete', 
                data: req.body, 
                changes: result.affectedRows
           });
        }
    });
});


module.exports = router;