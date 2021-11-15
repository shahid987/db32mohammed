var express = require('express');
const rocket_controllers= require('../controllers/rocket');
const rocket = require('../models/rocket');
var router = express.Router();


router.get('/',rocket_controllers.rocket_view_all_Page);
module.exports=router;