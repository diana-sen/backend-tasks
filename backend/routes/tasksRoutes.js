const express = require('express')
const router = express.Router()
const { getTasks, setTask, updateTask, deleteTask } = require('../controllers/taskController')

//tasks endpoints

router.route('/').get(getTasks).post(setTask)
router.route('/:id').delete(deleteTask).put(updateTask)


//router.get('/', getTasks)

//router.post('/', setTask)

//router.put('/:id', updateTask)

//router.delete('/:id', deleteTask)

module.exports = router