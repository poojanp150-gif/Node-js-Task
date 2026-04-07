const mongoose=require("mongoose")

const task=mongoose.Schema({
    alltask:{
    type:String
    },
    category:{
        type:String
    }
})

const taskmodel=mongoose.model("taskdata",task)

module.exports=taskmodel