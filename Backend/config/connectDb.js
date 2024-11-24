const mongoose = require('mongoose')

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URl)
        console.log("connection established")
    }catch(error){
        console.log(`${error}`.bgRed)
    }
}

module.exports = connectDb