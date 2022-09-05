//index modules

const express = require('express');
const inquirer = require('inquirer');
const router = express.Router();




//index routes
router.use(require('./departmentRoutes'))
router.use(require('./roleRoutes'))
router.use(require('./employeeRoutes'))



module.exports = router;