const express= require('express')
const app= express();
const db= require('./db')
const bodyParser=require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());//req.body will store the obj

const PORT= process.env.PORT ||3000;

const personRoute=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')
app.use('/person',personRoute);
app.use('/menu',menuRoutes)



app.get('/', function(req,res){
    res.send("welcome to my hotel.. how can i help you? we have list of Menus.")
})

//comment added for testing purpose.
app.listen(PORT, ()=>{
    console.log('listening to port 3000.');
})