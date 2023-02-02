const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    texto: {
        type:String,
        required:[true, 'Please write a value']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('task',taskSchema)