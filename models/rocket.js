const mongoose = require("mongoose")
const rocketSchema = mongoose.Schema({
    rocket_type: String,
    quantity:{type:Number,min:10,max:500},
    cost:{type:Number,min:10,max:1000} 
})
module.exports = mongoose.model("Rocket",
    rocketSchema)