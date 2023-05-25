const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bannerSchema = new Schema({
  name:  String,
  email: String,
  active: Boolean
}, { versionKey: false })

const BannerModel = mongoose.model('banner', bannerSchema, 'banner')

module.exports = BannerModel
