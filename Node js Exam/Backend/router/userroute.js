const express=require("express")
const { addreg, Login } = require("../controler/usercontroler")

const U_ROUTE=(express.Router())

U_ROUTE.post("/addreg",addreg)
U_ROUTE.post("/login",Login)

module.exports=U_ROUTE