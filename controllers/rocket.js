var Rocket = require('../models/rocket');
// List of all rockets
exports.rocket_list = function (req, res) {
    res.send('NOT IMPLEMENTED: rocket list');
};
// for a specific rocket.
exports.rocket_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: rocket detail: ' + req.params.id);
};
// Handle rocket create on POST.
exports.rocket_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Rocket();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"rocket_type":"regular", "quantity":13, "cost":43.56}
    document.rocket_type = req.body.rocket_type;
    document.quantity = req.body.quantity;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle rocket delete form on DELETE.
exports.rocket_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: rocket delete DELETE ' + req.params.id);
};
// Handle rocket update form on PUT.
exports.rocket_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: rocket update PUT' + req.params.id);
};

// List of all rockets
exports.rocket_list = async function (req, res) {
    try {
        theRocket = await Rocket.find();
        res.send(theRocket);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.rocket_view_all_Page = async function (req, res) {
    try {
        theRocket = await Rocket.find();
        res.render('rocket', {
            title: 'rocket Search Results',
            results: theRocket
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};