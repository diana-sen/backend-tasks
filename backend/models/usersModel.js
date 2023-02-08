const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please type a username']
    },
    email:{
        type: String,
        required: [true, 'Please type a user email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please type a password']
    },
    
},
    {
        timestamps: true
    }
)

module.exports= mongoose.model('User', userSchema)