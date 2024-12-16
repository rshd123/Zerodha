const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoldingSchema = new Schema({
    name:{
        type:String,
    },
    qty:{
        type:Number,
    },
    avg:{
        type:Number,
    },
    price:{
        type:Number,
    },
    net: {
        type:String,
    },
    day: {
        type:String
    }
});

const holding = mongoose.model("holding",HoldingSchema);
module.exports = holding;