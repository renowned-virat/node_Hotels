const express=require('express');
const menuRoutes=express.Router();
const MenuItem =require('../models/MenuItem');

menuRoutes.get('/',async(req,res)=>{
    try {
        const response=await MenuItem.find();
        console.log('data fetched success.')
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'internal server error'})
    }
})
menuRoutes.post('/',async(req,res)=>{
    try {
        const data=req.body;
        const Item=new MenuItem(data);
        const response=await Item.save();
        res.status(200).json(response)
    } catch (error) {
        console.log("Internal server error",error);
        res.status(500).json({error:"internal server error."});
    }
})

menuRoutes.get('/:tastetype',async(req,res)=>{
    try {
        const tastetype=req.params.tastetype;
        if(tastetype=='spicy'|| tastetype=='sour'||tastetype=='sweet'){
            const response=await MenuItem.find({taste:tastetype});
            console.log('response fetched.');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'internal server error1.'})
            console.log('No item with this kind of taste.')
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error.'})
    }
})

module.exports=menuRoutes;