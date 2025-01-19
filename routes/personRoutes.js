const express= require('express');
const router= express.Router();
const Person=require('../models/Person');
router.post('/',async(req,res,next)=>{
    try {
        const data= req.body;
        const newPerson= Person(data);
        const response=await newPerson.save();
        console.log('person saved successfully.')
        res.status(200).json(response);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({error:'internal server error'});
    }
    next();
    
})

//get method to get the person
router.get('/',async(req,res)=>{
    try {
        const data= await Person.find();
        console.log('data fetched successfully.')
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'internal server error'});
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const personId=req.params.id;  //we do send id as a parameter during update
        const updatedPersonData=req.body;
        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true, //returns the updated document
            runValidators:true,//runs mongoose validation
        })
        if(!response){
            return res.status(404).json({error: "person not found."})
        }

        console.log('data updated')
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'internal server error'});
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const personId=req.params.id;
    const response=await Person.findByIdAndDelete(personId);
    if(!response)return res.status(404).json({error: "person not found"});
    return res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'internal server error'});
    }
    
})

module.exports=router;