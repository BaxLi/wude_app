

const { Schema, model } = require('mongoose')

// DB of existing levels of achievements, for example Panda -1, (level) present number of achieved techniques inside this level
const schema = new Schema({
name:{type:String, default:"EDIT", required:true},
img:{type:String, default:'commonIcon.jpg', required:true}
// techniques:{type: Schema.Types.ObjectId, ref: 'techniques', required:false, default:[]},
})

module.exports = model('Achievements', schema)