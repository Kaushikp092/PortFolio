const express = require('express');
const route = express.Router();
const User = require('../modules/users');

route.get('/', async (req,res) => {
    try {
        const users = await User.find();
        if(!users) return res.status(404).json({
            message: 'Users not Found'
        })
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

route.post('/', async (req,res)=>{
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            message : req.body.message
        })
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

module.exports = route;