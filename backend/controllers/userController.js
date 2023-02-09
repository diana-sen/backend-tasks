const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')


const userRegister = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Data is missing, please verify')
    }

   const userExist = await User.findOne({email})
    if (userExist) {
        res.status(400)
        throw new Error('This user already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    hashedPassword = await bcrypt.hash(password,salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('User register failed')
    }

   // res.json({message: 'User Register'})
})

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    // ask if user is find, then compare sent password to the saved user password 
    if (user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error ('Wrong user or password')
    }
})

const generateToken = (id) => {
    //sign id with secret
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

const dataUser = asyncHandler(async(req, res) => {
    const {_id, name, email} = req.user
    res.status(200).json({
        id: _id,
        name,
        email
    })
    res.json({message: 'User Data'})
})

module.exports = {
    userRegister,
    loginUser,
    dataUser
}