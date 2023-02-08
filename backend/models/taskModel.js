const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'User'

    },
    texto: {
        type:String,
        required:[true, 'Please write a value']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('task',taskSchema)