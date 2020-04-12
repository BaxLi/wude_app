const { Router } = require('express')
const router = Router()

const User = require('../models/User')
const Styles=require('../models/Styles')

router.get('/selectallusers', async (req, res) => {  
    console.log("inside usersDbGetInfo.routes - get('/selectallusers'") 
    try {
        const users = await User.find()
        res.status(201).json(users)
    } catch (error) {
        console.log("db users find error");
    }
})

router.post('/setuserstyle/:id', async (req, res)=>{
    console.log("usersDbGetInfo.routes - '/selectuser/:id'") 
    let user=await (await User.findById(req.params.id)).populate('styles').execPopulate()

    if (!user) {res.json({message:'user was not found !'})}
    delete req.body._id

    console.log("req body ", req.body.style)
    await User.updateOne({"_id":req.params.id}, {$set:{style:req.body.style}})
        res.json({message:'user update successfuly !'})
})

module.exports=router