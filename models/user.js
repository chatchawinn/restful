const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  frist_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String},
  token: { type: String},
  active: Boolean
}, { versionKey: false })

const UserModel = mongoose.model('user', userSchema, 'user')

module.exports = UserModel
