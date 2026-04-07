const taskmodel = require("../model/taskmodel")

const addtask=(async(req,res)=>{
const data=await taskmodel.create(req.body)
res.send({data,message:"successfuly data add"})
})

const showtask=(async(req,res)=>{
    const data =await taskmodel.find()
    res.send(data)
})

const Delettask=(async(req,res)=>{
    const data=await taskmodel.findByIdAndDelete(req.params.id)
    res.send(data)
})

const Updatetask=(async(req,res)=>{
     const data= await taskmodel.findById(req.params.id)
    res.send(data)
})
const updatetaskdata=(async(req,res)=>{
const data= await taskmodel.findByIdAndUpdate(
        req.params.id,req.body
    )
    res.send(data)
})

module.exports={addtask,showtask,Delettask,Updatetask,updatetaskdata}