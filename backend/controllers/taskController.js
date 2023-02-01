//This is what will be in charge of what the Route is going to do

const getTasks = (req,res) => {
    res.status(200).json({message: 'Obtain Tasks'})
}

const setTask = (req,res) => {
    //console.log(req.body)

    //Handling errors
    if (!req.body.texto) {
       //res.status(400).json({message: 'Please provide a task description'})  
      res.status(400) 
       throw new Error('Please provide a task description') 
    }
    res.status(201).json({message: 'Created Task'})
}

const updateTask = (req,res) => {
    res.status(200).json({message:`Task ${req.params.id} updated`})
}

const deleteTask = (req,res) => {
    res.status(200).json({message:`Task ${req.params.id} deleted`})
}

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}
