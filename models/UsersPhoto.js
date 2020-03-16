const { Schema, model } = require('mongoose')

const schema = new Schema({
  userId: { type: String, default:"-", required: true },
  link: { type: String, default:"commonIcon.jpg", required: true }
})

module.exports = model('UsersPhoto', schema)