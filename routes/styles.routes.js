const { Router } = require('express')
const router = Router()

const Style = require('../models/Styles')

router.get('/selectallstyles', async (req, res) => {  
    console.log("inside selectallstyles - GETAll") 
    try {
        const stl = await Style.find()
        // console.log("inside /techniques -GET /selectallach ", ach)
        return res.json(stl)
    } catch (error) {
        console.log("db styles find error");
    }
})

router.post('/addstyles', async (req, res) => {
  // console.log('inside /styles/addstyles - POST', req.body)
  try {
    const isDouble = await Style.find({ name: req.body.name })
    if (!!isDouble.length) {
      return res.json(JSON.stringify('Current Style ALREADY EXIST in DB, please remove it first'))
    }
    const newStyle = new Style({
      name: req.body.name,
      img: req.body.img
    })
    await newStyle.save()
    res.json({ message: 'SUCCESS - new techniques inserted successfuly' })
  } catch (err) {
    console.log('err adding techniques', err)
  }
})
router.post('/delete/:id', async (req, res) => {
  console.log('inside /styles/delete/:id - POST', req.params)
  try {
    await Style.findByIdAndRemove(req.params.id).then((res) => {console.log('res', res)
    })
    res.json({ message: ' deleted successfuly' })
  } catch (err) {
    console.log('err deleting techniques', err)
  }
  res.status(200)
})

module.exports = router