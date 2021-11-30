var express = require('express');
const rocket_controllers= require('../controllers/rocket');

var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/',rocket_controllers.rocket_view_all_Page);

router.get('/detail', rocket_controllers.rocket_view_one_Page);
router.get('/create',secured, rocket_controllers.rocket_create_Page);
router.get('/update',secured, rocket_controllers.rocket_update_Page);
router.get('/delete',secured, rocket_controllers.rocket_delete_Page);
 
module.exports=router;