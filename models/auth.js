const mongoose = require('mongoose')
const Schema = mongoose.Schema

const createUser = new Schema({
  firstname: {
    type:String,
    trim:true
  },
  lastname: {
    type:String,
    trim:true
  },
  username: {
    type:String,
    trim:true
  },
  email: {
    type:String,
    trim:true
  },
  phonenumber: {
    type:Number,
    trim:true
  },
  password: {
    type:String,
    trim:true
  }
})

module.exports = mongoose.model('user', createUser)