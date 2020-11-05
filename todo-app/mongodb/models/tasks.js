const mongoose = require('mongoose')

const Tasks = mongoose.model('Tasks', {
  userPhone : {
    type: Number,
    required: true,
    validate(value) {
      if(value.toString().length !== 10){
        throw new Error("Please enter a valid Phone number")
      }
    }
  },
  taskList : {
    type: Array,
    default: []
  },
  taskCount : {
    type: Number,
    default: 0
  }
})

module.exports = Tasks
