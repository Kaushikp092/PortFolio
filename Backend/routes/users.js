const express = require('express');
const route = express.Router();
const User = require('../modules/users');

route.get('/', async (req,res) => {
    try {
        const users = await User.find();
        if(users.length === 0) return res.status(404).json({
            message: 'Users not Found'
        })
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
})

route.post('/message', async (req,res)=>{
    try {
        const {name, email, message} = req.body;

        if(!name || !email || !message) return res.status(400).json({error: 'All fields are required'});
        const newUser = new User({name, email, message});
        await newUser.save();
        
        const users = await User.find();
        res.status(201).json({users});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
})

module.exports = route;