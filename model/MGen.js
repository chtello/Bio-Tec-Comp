const mongoose = require("mongoose");

const genSchema = mongoose.Schema({
    adn:String,
    arnm:String,
    polipéptidos:String
});


const Mgen = mongoose.model("Mgen", genSchema);


module.exports = Mgen;