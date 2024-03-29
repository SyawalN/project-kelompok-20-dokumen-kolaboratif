const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.models.users || mongoose.model('users', Schema)