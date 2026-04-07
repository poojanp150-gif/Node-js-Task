const mongoose=require("mongoose")

const user=mongoose.Schema({
    username:{
    type:String
    },
    password:{
        type:String
    },
    userrole:{
        type:String
    }
})

const usermodel=mongoose.model("userdata",user)

module.exports=usermodel