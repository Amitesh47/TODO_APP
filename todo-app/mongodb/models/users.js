const mongoose = require('mongoose')

const Users = mongoose.model('Users',{
  phone : {
    type: Number,
    required: true,
    validate(value) {
      if(value.toString().length !== 10){
        throw new Error("Please enter a valid Phone number")
      }
    }
  },
  password : {
    type: String,
    required: true
  }
})

module.exports = Users
