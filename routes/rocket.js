var express = require('express');
const rocket_controlers= require('../controllers/rocket');
var router = express.Router();
/* GET costumes */
router.get('/', rocket_controlers.rocket_view_all_Page );
module.exports = router;