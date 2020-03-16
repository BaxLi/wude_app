const express=require('express')
const config=require('config')
const mongo=require('mongoose')
// var bodyParser = require('body-parser')

const app=express() // this start server-side app
const PORT=config.get('port')||5000

// @ts-ignore
app.use( express.json({extended:true}) )
app.use('/public/images/',express.static('./public/images'));

app.use('/api/auth',require('./routes/auth.routes'))
app.use('/photo',require('./routes/filesOnServer.routes'))

//let connect to DB
async function connectedToDB(){
try {
    await mongo.connect(config.get('mongoDBUri'), { 
        useNewUrlParser:true, 
        useUnifiedTopology:true,
        useCreateIndex:true
    })   
} catch (error) {
    console.log("connection to DB failed, error=", error)
    process.exit(1)
}
}

connectedToDB()

app.listen(PORT,()=>console.log("Back-End STARTED on port=", PORT))
