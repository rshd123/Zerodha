const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
    product:String,
    name:String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const position = mongoose.model("position",PositionSchema);
module.exports = position;