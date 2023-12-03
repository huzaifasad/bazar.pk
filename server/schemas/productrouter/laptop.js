const express = require('express');
const router = express.Router();
const Laptop = require('../productschema/Laptop.js');

router.post('/add', async(req, res) => {
   const { name, price, desc, productQuantity, ramSize, type,brand, images, features } = req.body;

    // Create a new laptop instance
    const newLaptop = new Laptop({
      name,
      price,
      desc,
      productQuantity,
      ramSize,
      type,
      brand,
    //   images,
      features,
    });

    // Save the laptop to the database
    const savedLaptop = await newLaptop.save();

    res.status(201).json({ message: 'Laptop added successfully', laptop: savedLaptop });
});

router.get('/get', async(req, res) => {
  // Handle getting a laptop by ID
  let data=await Laptop.find()
  console.log(data)
 
  res.send(data)
});

router.delete('/delete/:id',async(req,res)=>{
  let data=await Laptop.deleteOne({_id:req.params.id}) 
  res.send(data)
})
router.get('/update/:id', async(req,res)=>{
  let data=await Laptop.findOne({_id:req.params.id})
  if (data) {
    res.send(data)  
  }else{
    res.send('No Data')
  }
})
router.put('/update/:id', async(req,res)=>{
  let data=await Laptop.updateOne(
    {_id:req.params.id},
    {
      $set:req.body
    }
  )
  res.send(data)
  console.log(data)
  
})

// Add more routes as needed

module.exports = router;
