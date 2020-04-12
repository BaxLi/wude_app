const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
name:{type:String, default:"need to be edited",required: true},
excersizes:[{type:Types.ObjectId,ref:'Excersizes', required:true, default:[]}]
})

module.exports = model('Techniques', schema)