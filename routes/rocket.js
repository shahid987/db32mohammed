var express = require('express');
const rocket_controllers= require('../controllers/rocket');

var router = express.Router();


router.get('/',rocket_controllers.rocket_view_all_Page);

router.get('/detail', rocket_controllers.rocket_view_one_Page);
router.get('/create', rocket_controllers.rocket_create_Page);
router.get('/update', rocket_controllers.rocket_update_Page);
router.get('/delete', rocket_controllers.rocket_delete_Page);
 
module.exports=router;