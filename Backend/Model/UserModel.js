const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");

const UserModel = new Schema({
    username:{
        type:String,
        required: [true, "Your username is required" ],
        unique:true
    },
    password:{
        type:String,
        required: [true, "Your Password is required" ],
        unique:true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

UserModel.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const user = mongoose.model("user",UserModel);
module.exports = user;