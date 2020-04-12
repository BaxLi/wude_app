const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String, default:"TEST", required: true },
  family: { type: String, default:"TEST", required: true },
  birthday: {type:Date, default: Date.now},
  email: { type: String, minlength: 6, maxlength: 40, required: true, unique: true },
  weight: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  gender: { type: Number,enum:[1,0], default: 0 },  // 0 is female
  password: { type: String, minlength: 6, required: true },
  position:{type:String,enum:['student', 'teacher','refery'], default:'student'},
  style:[{type:Types.ObjectId,ref:'Styles'}], 
  level:{type:String, enum:['Novice','Panda-1','Panda-2','Panda-3','Tiger-1','Tiger-2','Monkey', 'Shifu', 'panda'],default:'Novice'},
  dbrole:{type:String,enum:['admin','user'],default:'user'},
  achievements:[{type:Types.ObjectId, ref:'Achievements',default:[]}],   // possible achievements - small panda /* mid etc ++ additioanl 
  techniques:[{type:Types.ObjectId, ref:'Techniques',default:[]}]   // possible achievements - small panda /* mid etc ++ additioanl 
})

schema.method.findTeachers = function ({lst:[]}) {
  const tch=lst.map((t)=>t.position==="teacher")
  return tch
}

module.exports = model('User', schema)
