const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String, default:"TEST", required: true },
  family: { type: String, default:"TEST", required: true },
  birthday: {type:Date, default: Date.now},
  email: { type: String, minlength: 6, maxlength: 40, required: true, unique: true },
  weight: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  gender: { type: Number, default: 0 },
  password: { type: String, minlength: 6, required: true },
  achievements:[{type:Types.ObjectId, ref:'Panda', default:[]}]   // possible achievements - small panda /* mid etc ++ additioanl 
})

module.exports = model('User', schema)
