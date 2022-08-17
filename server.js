const express = require('express')
const app = express()
const connectDB = require('./config/database')
//get the stuff from ./routes/home.js
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//set up 2 main routes -> 2 different URLs
// 2nd params = variable! look up ^^
//fancy way of running the exported code from ./routes/home.js
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    