var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var rocket_controller = require('../controllers/rocket');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// rocket ROUTES ///
// POST request for creating a rocket.
router.post('/resource/rocket', rocket_controller.rocket_create_post);
// DELETE request to delete rocket.
router.delete('/resource/rocket/:id', rocket_controller.rocket_delete);
// PUT request to update rocket.
router.put('/resource/rocket/:id', rocket_controller.rocket_update_put);
// GET request for one rocket.
router.get('/resource/rocket/:id', rocket_controller.rocket_detail);
// GET request for list of all rocket items.
router.get('/resource/rocket', rocket_controller.rocket_list);
module.exports = router;