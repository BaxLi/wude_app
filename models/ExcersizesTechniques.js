const { Schema, model } = require('mongoose')

const exc = new Schema({
name:{type:String, required:true, default:'need to be edited'},
status:{type:boolean, required:true, default:false}
})

module.exports = model('Excersizes', exc)