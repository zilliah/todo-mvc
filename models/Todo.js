const mongoose = require('mongoose')

//schema = need to learn and explain this lol
//structure of the data put into the DB

//can see how data is structured WITHOUT direct DB access!



const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

//this is the ONLY  part that actually talks to the router!
module.exports = mongoose.model('Todo', TodoSchema)
