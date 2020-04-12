const { Router } = require('express')
const router = Router()

const Techniques = require('../models/Techniques')

router.get('/selectalltechniques', async (req, res) => {  
    console.log("inside Techniques - GET") 
    try {
        const tch = await Techniques.find()
        // console.log("inside /techniques -GET /selectallach ", ach)
        return res.status(201).json(tch)
    } catch (error) {
        console.log("db techniques find error");
    }
})

router.post('/addtechnique', async (req, res) => {
  console.log('inside /techniques/addtechnique - POST', req.body)
  try {

    const isDouble= await Techniques.find({"name":req.body.name})

    if (!!isDouble.length) {return res.send(JSON.stringify('Current TECHNIQUE ALREADY EXIST in DB, any comments ?'))}

const newTechniques = new Techniques({ 
      name: req.body.name 
    })
    await newTechniques.save()
    res.status(201).json({ message: 'SUCCESS - new techniques inserted successfuly' })
  } catch (err) {
    console.log('err adding techniques', err)
  }
})

router.post('/delete/:id', async (req, res) => {
  console.log('inside /techniques/delete/:id - POST', req.params)
  try {
    await Techniques.findByIdAndRemove(req.params.id).then((res) => {console.log('res', res)
    })
    res.json({ message: ' deleted successfuly' })
  } catch (err) {
    console.log('err deleting techniques', err)
  }
  res.status(200)
})

module.exports = router