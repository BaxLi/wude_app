const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
technics:{type:Types.ObjectId,ref:{lvl:description}, default:{}}
})

module.exports = model('Panda_small', schema)
