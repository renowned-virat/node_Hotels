const mongoose=require("mongoose");
require('dotenv').config();
//defining mongoDb connection URL
const mongoURL= process.env.DB_URL;
//const mongoURL= 'mongodb://localhost:27017/hotels'


//mongodb connection setup
mongoose.connect(mongoURL)

// this default connection object represents the mongodb connection.
const db= mongoose.connection;


//defining event listeners


db.on('error',(err)=>{
    console.log('Mongodb connection error:',err);
})

db.on('disconnected',()=>{
    console.log("Mongodb disconnected");
})
db.on('connected',()=>{
    console.log("connected to Mongodb server");
})
//export the database connection;
module.exports=db;