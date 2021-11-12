var express = require('express');
const rocket_controlers= require('../controllers/rocket');
var router = express.Router();
/* GET costumes */
router.get('/rocket/:id', Rocket_controller.rocket_detail); 
module.exports = router;