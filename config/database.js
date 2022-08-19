const mongoose = require('mongoose')

//just a function that connects to DB using mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

//exporte sthe connection fxn
module.exports = connectDB


//CAN JUST COPY AND PASTE THIS FILE
//MIT LICENSE, CAN DO WHATEVER
//know what it does, but don't need to b able to write from scratch