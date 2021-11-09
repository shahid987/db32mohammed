const mongoose = require("mongoose")
const rocketSchema = mongoose.Schema({
    rocket_type: String,
    quantity: Number,
    cost: Number
})
module.exports = mongoose.model("Rocket",
    rocketSchema)