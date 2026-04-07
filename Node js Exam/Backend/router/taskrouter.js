const express=require("express")
const { addtask,showtask ,Delettask,Updatetask,updatetaskdata} = require("../controler/taskcontroler")
const { verify, Admin } = require("../controler/usercontroler")

const T_ROUTE=(express.Router())

T_ROUTE.post("/taskdata",verify,Admin,addtask)
T_ROUTE.get("/showalldata",showtask)
T_ROUTE.delete("/Deletetask/:id",verify,Admin,Delettask)
T_ROUTE.get("/Update/:id",Updatetask)
T_ROUTE.put("/update/:id",verify,Admin,updatetaskdata)

module.exports=T_ROUTE