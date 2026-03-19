const express=require("express")
const { addbook, getbook, deletebook, Updatebook } = require("../controler/bookcontrol")

const Bookrouter=express.Router()

Bookrouter.post("/addbook",addbook)
Bookrouter.get("/getbook",getbook)
Bookrouter.delete("/deletebook/:id",deletebook)
Bookrouter.patch("/updatebook/:id",Updatebook)

module.exports=Bookrouter