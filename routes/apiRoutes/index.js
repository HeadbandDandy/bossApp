
//below contains the routes needed to complete tasks within the database



const express = require('express');
const router = express.Router();

router.use(require('./teamRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./positionRoutes'));


module.exports = router;