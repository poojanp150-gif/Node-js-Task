const mongoose=require("mongoose")

const userlogindata=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:Number
    },
    role:{
        type:String
    }
})

const usermodel=mongoose.model("userlogindata",userlogindata)

module.exports=usermodel