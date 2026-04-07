const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/examR&Login")

const db=mongoose.connection

db.on("connected",()=>{
console.log("database con..")
})