const { Router } = require('express')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt=require('jsonwebtoken')
const config=require('config')

const router = Router()
const User = require('../models/User')


// NEW USER REGISTRATION, already have std prefix-> /api/auth -so final route /api/auth/register
router.post(
  '/register',
  [
    // 1x here we make pre-validation of input ifo at BACK_end side - this is middleware level
    check('email', 'incorrect email').isEmail(),
    check('name', 'incorrect name').isAlpha(),
    check('family', 'incorrect family').isAlpha(),
    check('pass', 'wrong password - min 6 sym').isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      //here we make pre-validation of input ifo at BACK_end side - this is middleware level - came fromn 1x
      const err = validationResult(req)
      if (!err.isEmpty()) {
        return res
          .status(400)
          .json({ errors: err.array(), message: 'entered values for registration validation error, see description !' })
      }

      const { name, family, email, pass } = req.body
      const candidateToRegisterExist = await User.findOne({ email })
      if (candidateToRegisterExist) {
        return res.status(400).json({ message: 'such email already registered !!!' })
      }

      try {
        const hashedPassword = await bcrypt.hash(pass, 17)
        const newUser = new User({
          name,
          family,
          email,
          pass: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ message: 'SUCCESS - new user created' })
      } catch (err) {
        console.log('auth.json - password encrypt error=', err)
        return res.status(500).json({ message: 'auth.json - SEREVR encrypt or save user error, try later...' })
      }
    } catch (err) {
      console.log('module auth.routes REGISTRATION error')
      res.status(500).json({ message: 'registration step error, try again' })
    }
  }
)

// LOGIN, already have std prefix-> /api/auth -so final route /api/auth/login
router.post(
    '/login',
    [
      // 1x here we make pre-validation of input ifo at BACK_end side - this is middleware level
      check('email', 'incorrect email').normalizeEmail().isEmail(),
      check('pass', 'Enter password').exists()
    ],
    async (req, res) => {
      try {
        //here we make pre-validation of input ifo at BACK_end side - this is middleware level - came fromn 1x
        const err = validationResult(req)
        if (!err.isEmpty()) {
          return res
            .status(400)
            .json({ errors: err.array(), message: 'LOGIN error !'})
        }
  
        const { email, pass } = req.body

        const candidateToLogin = await User.findOne({ email })
        if (candidateToLogin) {
          return res.status(400).json({ message: 'such email already registered !!!' })
        } 

        const passMatched=await bcrypt.compare(pass, candidateToLogin.pass)

        if (!passMatched) {
            return res.status(400).json({message:"wrong entered combination!"})
        }

        const token=jwt.sign(
            {userId:candidateToLogin._id},
            config.get('secretJWTKey'),
            {expiresIn:'1h'}    
            )
        
            res.json({token})
  
        try {
          const hashedPassword = await bcrypt.hash(pass, 17)
          const newUser = new User({
            name,
            // @ts-ignore
            family,
            email,
            pass: hashedPassword
          })
          await newUser.save()
          res.status(201).json({ message: 'SUCCESS - new user created' })
        } catch (err) {
          console.log('auth.json - password encrypt error=', err)
          return res.status(500).json({ message: 'auth.json - SEREVR encrypt or save user error, try later...' })
        }
  } catch (error) {
    console.log('module auth.routes LOGIN error')
    res.status(500).json({ message: 'LOGIN step error, try again' })
  }
})

module.exports = router
