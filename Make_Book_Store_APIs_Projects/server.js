const express=require("express")
const Bookrouter = require("./routes/Bookroute")
const db=require("./Config/db")
const app=express()

app.use(express.json())
app.use("/",Bookrouter)


app.listen(7505,()=>{
console.log("server on")
})
