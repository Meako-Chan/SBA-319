const express = require('express');
const router = express.Router();
const User = require('../models/users');

//Get all users
router.get('/', async(req, res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }catch (err){
        res.status(500).send(err.message);
    }
});

//Get user by id
router.get('/:id', async(req, res) => {
   try{
    let user = await User.findById(req.params.id);
    if(user === null) {
        return res.status(404).send('User not found');
    }
    res.json(user);

   } catch (err){
    res.status(500).send(err.message);
   }
});

//Create new user
router.post('/', async(req, res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
    
      try {
        const newUser = await user.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).send(err.message);
      }
})

// Update user by id
router.put('/:id', async(req, res) => {
   try{
    const user = await User.findById(req.params.id);
    if(user === null) {
        return res.status(404).send('User not found');
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    const updatedUser = await user.save();
    res.json(updatedUser);
   } catch (err) {
    res.status(400).send(err.message);
  }
});

//Delete user by id
router.delete('/:id', async(req, res) => {
   try{
    const user = await User.finyById(req.params.id);
    if(user === null) {
        return res.status(404).send('User not found');
    }
    await user.remove();
    res.json({ message: 'User deleted'});
   } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;

