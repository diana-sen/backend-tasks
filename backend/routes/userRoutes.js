const express = require('express')
const router = express.Router()
const { userRegister, loginUser, dataUser  } = require('../controllers/userController')


router.post('/', userRegister)
router.post('/login', loginUser)
router.get('/data', dataUser)



module.exports = router