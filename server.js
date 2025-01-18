const express= require('express')
const app= express();
const db= require('./db')
const bodyParser=require('body-parser');
app.use(bodyParser.json());//req.body will store the obj

const Person=require('./models/Person');
const MenuItem =require('./models/MenuItem');
const personRoute=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')
app.use('/',personRoute);
app.use('/',menuRoutes)



app.get('/', function(req,res){
    res.send("welcome to my hotel.. how can i help you? we have list of Menus.")
})


app.listen(3000, ()=>{
    console.log('listening to port 3000.');
})