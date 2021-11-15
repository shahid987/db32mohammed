var Rocket = require('../models/rocket');
// List of all rockets
exports.rocket_list = function (req, res) {
    res.send('NOT IMPLEMENTED: rocket list');
};
// for a specific rocket.
    exports.rocket_detail = async function(req, res) { 
        console.log("detail"  + req.params.id) 
        try { 
            result = await rocket.findById( req.params.id) 
            res.send(result) 
        } catch (error) { 
            res.status(500) 
            res.send(`{"error": document for id ${req.params.id} not found`); 
        } 
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

    exports.Rocket_delete = async function(req, res) { 
        console.log("delete "  + req.params.id) 
        try { 
            result = await Rocket.findByIdAndDelete( req.params.id) 
            console.log("Removed " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": Error deleting ${err}}`); 
        } 
    }; 
// Handle rocket update form on PUT.
exports.rocket_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Rocket.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.rocket_type)  
               toUpdate.rocket_type = req.body.rocket_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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