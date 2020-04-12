const { Router } = require('express')
const router = Router()
const User = require('../models/User')
router.get('/selectallteachers', async (req, res) => {  
    console.log("inside get('/selectallteachers'") 
    try {
        const users = await User.find({position:'teacher'})
        // console.log("get('/selectallteachers')rezult=", users);
        
        res.status(201).json(users)
    } catch (error) {
        console.log("db find error");
    }
})
//---------------------------------------------------------------------------------------------------
module.exports = router