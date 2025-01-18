const express= require('express');
const router= express.Router();

router.post('/person',async(req,res,next)=>{
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
router.get('/person',async(req,res)=>{
    try {
        const data= await Person.find();
        console.log('data fetched successfully.')
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'internal server error'});
    }
})

module.exports=router;