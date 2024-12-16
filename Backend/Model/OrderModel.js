const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
});

const order = mongoose.model("order",OrderSchema);
module.exports = order;