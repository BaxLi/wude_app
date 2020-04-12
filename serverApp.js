const express=require('express')
const session=require('express-session')
const config=require('config')
const mongo=require('mongoose')
// var bodyParser = require('body-parser')
const dbSchema = require('./models/User')
const reqVar=require('./myMiddleware/reqVariablesSet')

const app=express() // this start server-side app
const PORT=config.get('port')||5000

// @ts-ignore
app.use( express.json({extended:true}) )
app.use('/public/images/',express.static('./public/images'));
app.use(session({
    secret:'secretKey9271',
    resave:false,
    saveUninitialized:false
}))
app.use(reqVar)
app.use('/api/auth',require('./routes/auth.routes'))
app.use('/photo',require('./routes/filesOnServer.routes'))
app.use('/teachers',require('./routes/selecteachers.routes'))
app.use('/users',require('./routes/usersDbGetInfo.routes'))
app.use('/achievements',require('./routes/achievements.routes'))
app.use('/techniques',require('./routes/techniques.routes'))
app.use('/styles',require('./routes/styles.routes'))

//let connect to DB
async function connectedToDB(){
    const timeStart=new Date().getTime()
    console.log("start connection to DB");  
try {
    const stat=await mongo.connect(config.get('mongoDBUri'), { 
        useNewUrlParser:true, 
        useUnifiedTopology:true,
        useCreateIndex:true
    })

} catch (error) {
    console.log("connection to DB failed, error=", error)
    process.exit(1)
}
mongo.set('useFindAndModify', false)
console.log("Finish connection to DB (in sec)",(new Date().getTime()-timeStart)/1000); 
}

connectedToDB()
app.listen(PORT,()=>console.log("Back-End STARTED on port=", PORT))
