

const { Schema, model } = require('mongoose')

const schema = new Schema({
name:{type:String, default:"EDIT", required:true},
img:{type:String, default:'commonIcon.jpg', required:false}
})

module.exports = model('Styles', schema)