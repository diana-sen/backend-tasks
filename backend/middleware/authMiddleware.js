const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const User = require('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //obtain token
            token = req.headers.authorization.split(' ')[1]
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //obtain user data of the same token
            req.user = await User.findById(decoded.id).select('-password')
            
            next()

        } catch (error){
            console.log(error)
            res.status(401)
            throw new Error ('Wrong token')
        } 
    }

    if (!token){
        res.status(401)
        throw new Error ('There is no token')
    }
})

module.exports ={
    protect
}