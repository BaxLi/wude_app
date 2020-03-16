const { Router } = require('express')
const fs = require('fs')
const path = require('path')
const router = Router()
const multer = require('multer')
const UsersPhoto = require('../models/UsersPhoto')
// const upload = multer({ storage: multer.memoryStorage() });
// SET STORAGE
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function(req, file, cb) {
    cb(null, req.body._userId + '.jpg')
  }
})
var upload = multer({ storage: storage })

// UploadPhoto
router.post('/uploadPhoto', upload.single('photo'), async (req, res) => {
  // console.log("upload photo");
  try {
    if (req.file) {
      const userId = req.body._userId
      // console.log('Uploaded: ', req.file, "userid=",userId)
      try {
        const candidateToNewPhoto = await UsersPhoto.findOne({ userId })
        console.log('found candidate=', candidateToNewPhoto)

        const userWithNewPhoto = new UsersPhoto({ userId:userId, link: userId + '.jpg' })
        console.log('userWithNewPhoto=', userWithNewPhoto)

        if (!candidateToNewPhoto) {
          userWithNewPhoto.save()
          console.log('if (candidateToNewPhoto)=', candidateToNewPhoto)
        }
        else 
        { 
          console.log("update existing photo in db");
          userWithNewPhoto.update(candidateToNewPhoto._id, userWithNewPhoto)
        }

      } catch (error) {
        console.log('find candidate in UsersPhoto DB ERROR->', error)
      }
    }
    console.log('photo upload success!', req.file)
    res.redirect('/')
  } catch (error) {
    console.log('module saveFiles error')
    res.status(500).json({ message: 'saveFiles step error, try again' })
  }
})
router.get('/takePhoto', async (req, res) => {
  console.log('take photo')
  res.redirect('/')
})

router.get('/takePhoto/:id', async (req, res, next) => {
  console.log('Take photo ID')
  try {
    //first check if file exist in server uploadPhoto dir 
    //  const filePath=`${process.cwd()}\\public\\images`
     const filePath=`./public/images`
    // console.log("filepath=", filePath);
    const fileName = `${filePath}/${req.params.id}`.trim() + '.jpg'
    console.log('FILENAME=', fileName)
    let checkIfFileExist=false
      fs.access(fileName, err=>{
      
        if (!err) {
          console.log("File Exist err=", err)
          // res.sendStatus(200).json({status:"ok"})
          res.send({userId:req.params.id})
        }
        else 
        {
          console.log("File DONT Exist err=", err)
          res.send({userId:0})
        }

      })
  } catch (error) {
    res.status(500).json({
      message: 'files-routes: file didn-t exist'
    })
  }
})

module.exports = router
