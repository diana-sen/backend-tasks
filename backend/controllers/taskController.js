asyncHandler = require('express-async-handler')  //add async handler
const Task = require('../models/taskModel') //call the model 

const getTasks = asyncHandler(async(req,res) => {
    //calling  the tasks
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

const setTask = asyncHandler(async(req,res) => {
    //console.log(req.body)

    //Handling errors
    if (!req.body.texto) {
       //res.status(400).json({message: 'Please provide a task description'})  
      res.status(400) 
       throw new Error('Please provide a task description') 
    }

    //create task, using Task model
    const task = await Task.create ({
        texto: req.body.texto
    })

    res.status(201).json(task)
})

const updateTask = asyncHandler(async(req,res) => {
    res.status(200).json({message:`Task ${req.params.id} updated`})
})

const deleteTask = asyncHandler(async(req,res) => {
    res.status(200).json({message:`Task ${req.params.id} deleted`})
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}
