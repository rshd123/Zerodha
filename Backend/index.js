require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL = "mongodb://localhost:27017/zerodha";
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
//holdings
const {holdingData} = require("./Data/Data.js");
const holding = require("./Model/HoldingModel.js");

//positions
const {positionData} = require("./Data/Data.js");
const position = require("./Model/PositionModel.js");

let user = require("./Model/UserModel.js");

const order = require("./Model/OrderModel.js");

const authRoute = require("./Routes/AuthRoute.js");

async function connect_to_DB(){
    await mongoose.connect(MONGO_URL);
};

connect_to_DB()
    .then(()=>{
        console.log("connected to DB");
    })

    .catch(()=>{
        console.log("Cannot connect to DB");
    })

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/",authRoute);

app.listen(port, ()=>{
    console.log('App is listening');
});


app.get("/allPositions", async (req,res)=>{
    let result = await position.find({});
    res.json(result);
});

app.get("/allHoldings",async (req,res)=>{
    let result = await holding.find({});
    res.json(result);
});

app.post('/newOrder', async (req,res)=>{
    let newOrder = new order({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();
    res.send("order saved");
});

app.get('/allOrders', async (req,res)=>{
    let result = await order.find({});
    res.json(result);
})

