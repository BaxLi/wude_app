const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
name:{type:String, default:"need to be edited",required: true},
techniques:[{type:Types.ObjectId,ref:'Techniques', required:true, default:[]}]
})

module.exports = model('GroupOfTechniques', schema)