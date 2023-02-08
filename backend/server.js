
const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')

const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')// ***
const port = process.env.PORT || 5000  //Define the port

connectDB()

//Create application
const app = express()  
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Creating endpoint root
app.use('/api/tasks', require('./routes/tasksRoutes'))

//Creating endpoint usersroutes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)//*** Test production and environment to see behaviour

app.listen(port, ()=> console.log(`Server started on port ${port}`))


