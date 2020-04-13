const { Schema, model } = require('mongoose')

const exc = new Schema({
  name: { type: String, required: true, default: 'need to be edited' },
  group: { type: Schema.Types.ObjectId, ref: 'GroupOfTechniques', required: true }
})

module.exports = model('Techniques', exc)
