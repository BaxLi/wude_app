const { Router } = require('express')
const router = Router()

const config=require('config')
const Achievements = require('../models/Achievements')

router.get('/selectallach', async (req, res) => {  
    // console.log("inside Achievements") 
    try {
        const ach = await Achievements.find()
        // console.log("inside /achievements -GET /selectallach ")
        return res.status(201).json(ach)
    } catch (error) {
        console.log("db achievements find error");
    }

})

router.post('/addachievement', async (req, res) => {
  const ListOfAchievements = config.get('achievements')
  // console.log('/addachievement')

  try {
    const checkIfIn = ListOfAchievements.includes(req.body.name.toString())
    // console.log("checkIfIn", checkIfIn , req.body.name)

    if (!checkIfIn) return res.send(JSON.stringify('Current achievement does not match predefined set'))

const isDouble= await Achievements.find({"name":req.body.name})
if (!isDouble) {return res.send(JSON.stringify('Current achievement ALREADY EXIST in DB, please remove it first'))}

    const newAch = new Achievements({ name: req.body.name, img:req.body.img })
    await newAch.save()

    res.status(201).json({ message: 'SUCCESS - new achievement inserted successfuly' })

  } catch (err) {
    console.log('err adding achievement', err)
  }
})

module.exports = router