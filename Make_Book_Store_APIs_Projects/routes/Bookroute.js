const express=require("express")
const { addbook, getbook, deletebook, Updatebook } = require("../controler/bookcontrol")
const { addlogin, login, verify } = require("../controler/usercontroler")
const auth = require("../auth/auth")

const Bookrouter=express.Router()

Bookrouter.post("/addbook",verify,auth,addbook)
Bookrouter.get("/getbook",getbook)
Bookrouter.delete("/deletebook/:id",verify,auth,deletebook)
Bookrouter.patch("/updatebook/:id",verify,auth,Updatebook)
Bookrouter.post("/addlogindata",addlogin)
Bookrouter.post("/login",login)
Bookrouter.post("/verify",verify)

module.exports=Bookrouter