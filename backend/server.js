
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')// ***
const port = process.env.PORT || 5000  //Define the port


//Create application
const app = express()  
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Creating endpoint root
app.use('/api/tasks', require('./routes/tasksRoutes'))

app.use(errorHandler)//*** Test production and environment to see behaviour

app.listen(port, ()=> console.log(`Server started on port ${port}`))


