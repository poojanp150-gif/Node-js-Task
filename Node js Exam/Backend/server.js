const express=require("express")
const cors=require("cors")
const db=require("./config/db")
const U_ROUTE = require("./router/userroute")
const T_ROUTE = require("./router/taskrouter")
const app=express()
app.use(express.json())
app.use(cors())
app.use(U_ROUTE)
app.use(T_ROUTE)

app.listen(9696,()=>{
    console.log("server on")
})