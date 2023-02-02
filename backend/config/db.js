const mongoose = require('mongoose')

//connect to DB
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

    } catch (error){
        console.log(error)
    }
}

module.exports = connectDB