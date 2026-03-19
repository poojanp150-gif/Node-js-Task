const mongoose=require("mongoose")

const Books=mongoose.Schema({
    bookname:{
        type:String
    },
    authorName:{
        type:String
    },
    price:{
        type:Number
    },
    publicationDate:{
        type:Date
    }
})

const bookmodel=mongoose.model("Books",Books)

module.exports=bookmodel