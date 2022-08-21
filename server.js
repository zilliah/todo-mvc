const express = require('express')
const app = express()
const connectDB = require('./config/database')
//link to routes
//get the stuff from ./routes/home.js
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')


//sets up to use environment variables
//gives location
//cant access env variables if dno't have this!
require('dotenv').config({path: './config/.env'})

//the DB connection function is actually called
//without calling it, won't connect! 
//it's only defined in /config/database.js
connectDB()

//select the view engine, ejs
app.set('view engine', 'ejs')
//set up public folder
app.use(express.static('public'))

//replace body parser
//to parse stuff from the request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//set up 2 main routes -> 2 different URLs
// 2nd params = variable! look up ^^
//fancy way of running the exported code from ./routes/home.js
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
//environment variable for the port so will use host's port
//start the server
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    