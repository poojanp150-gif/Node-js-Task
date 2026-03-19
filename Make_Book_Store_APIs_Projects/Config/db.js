const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/BookDetails")

const db=mongoose.connection

db.on("connected",()=>{
    console.log("datbase con..")
})