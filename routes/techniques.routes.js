const { Router } = require('express')
const router = Router()

const Techniques = require('../models/Techniques')
const GroupOfTechniques = require('../models/GroupOfTechniques')

router.get('/selectalltechniques', async (req, res) => {
  console.log('inside Techniques - GET')
  try {
    const tch = await Techniques.find()
    // console.log("inside /techniques -GET /selectallach ", ach)
    return res.status(201).json(tch)
  } catch (error) {
    console.log('db techniques find error')
  }
})
router.get('/selectallgroupsoftechniques', async (req, res) => {
  console.log('inside Techniques - GET')
  try {
    const tch = await GroupOfTechniques.find()
    return res.status(201).json(tch)
  } catch (error) {
    console.log('db GroupOfTechniques find error')
  }
})

router.post('/addtechnique', async (req, res) => {
  // here we can add as Group of techniques as Techniques 2-In-1 - !!!
  console.log('inside /techniques/addtechnique - POST', req.body)
  try {
    let isDouble = null
    let gr
    if (req.body.addto !== 'group') {
      isDouble = await Techniques.find({ name: req.body.name })
      gr = await GroupOfTechniques.findById(req.body.groupId)
    } else {
      isDouble = await GroupOfTechniques.find({ name: req.body.name })
    }

    if (!!isDouble.length) {
      return res.send(JSON.stringify('Current group/TECHNIQUE ALREADY EXIST in DB, any comments ?'))
    }
 
    if (!gr) throw Error('wrong group ')
    console.log("group=", gr);
    
    const newItem =
      req.body.addto !== 'group'
        ? new Techniques({ name: req.body.name, group:gr })
        : new GroupOfTechniques({ name: req.body.name })

    await newItem.save()
    res.status(201).json({ message: 'SUCCESS - new item inserted successfuly' })
  } catch (err) {
    console.log('err adding techniques', err)
  }
})

router.post('/delete/:id', async (req, res) => {
  console.log('inside /techniques/delete/:id - POST', req.params)
  try {
    await Techniques.findByIdAndRemove(req.params.id).then((res) => {
      console.log('res', res)
    })
    res.json({ message: ' deleted successfuly' })
  } catch (err) {
    console.log('err deleting techniques', err)
  }
  res.status(200)
})
router.post('/deletegroupsOfTechniques/:id', async (req, res) => {
  console.log('inside /techniques/deletegroupOFtechniques/:id - POST', req.params)
  try {
    await GroupOfTechniques.findByIdAndRemove(req.params.id).then((res) => {
      console.log('res', res)
    })
    res.json({ message: ' deleted successfuly' })
  } catch (err) {
    console.log('err deleting GROUP techniques', err)
  }
  res.status(200)
})

module.exports = router
