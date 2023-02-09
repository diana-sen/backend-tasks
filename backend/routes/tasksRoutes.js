const express = require('express')
const router = express.Router()
const { getTasks, setTask, updateTask, deleteTask } = require('../controllers/taskController')

const { protect } = require('../middleware/authMiddleware')

//tasks endpoints

router.route('/').get(protect, getTasks).post(protect, setTask)
router.route('/:id').delete(protect, deleteTask).put(protect, updateTask)


//router.get('/', getTasks)

//router.post('/', setTask)

//router.put('/:id', updateTask)

//router.delete('/:id', deleteTask)

module.exports = router