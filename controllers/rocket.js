var Rocket = require('../models/rocket');
// List of all rockets
exports.rocket_list = function (req, res) {
    res.send('NOT IMPLEMENTED: rocket list');
};
// for a specific rocket.
exports.rocket_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await rocket.findById(req.params.id)
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

exports.rocket_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Rocket.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle rocket update form on PUT.
exports.rocket_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Rocket.findById(req.params.id)
        // Do updates of properties 
        if (req.body.rocket_type)
            toUpdate.rocket_type = req.body.rocket_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
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
exports.rocket_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Rocket.findById(req.query.id)
        res.render('rocketdetail', {
            title: 'Rocket Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a rocket. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.rocket_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('rocketcreate', {
            title: 'rocket Create'
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a rocket. 
// query provides the id 
exports.rocket_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Rocket.findById(req.query.id) 
        res.render('rocketupdate', { title: 'rocket Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle a delete one view with id from query 
exports.rocket_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Rocket.findById(req.query.id) 
        res.render('rocketdelete', { title: 'rocket Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};  