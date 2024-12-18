const mongoose = require('mongoose')

//schema

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true , 'name is required']
        },
        email : {
            type : String,
            required : [true , 'email is required'],
            unique : true
        },
        password : {
            type : String,
            required : [true , 'password is required']
        },
    },
    {timestamps : true}
)

const user = mongoose.model('user',userSchema)
module.exports = user