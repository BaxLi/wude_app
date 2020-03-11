const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String, minlength: 3, maxlength: 20, required: true },
  family: { type: String, minlength: 3, maxlength: 20, required: true },
  birthday: {type:Date, required: true, dafault:new Date().toISOString()},
  email: { type: String, minlength: 6, maxlength: 40, required: true, unique: true },
  weight: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  gender: { type: Number, default: 0 },
  pass: { type: String, minlength: 6, required: true },
  achievements:[{type:Types.ObjectId, ref:'Panda', default:{}}]   // possible achievements - small panda /* mid etc ++ additioanl 
})

module.exports = model('User', schema)
