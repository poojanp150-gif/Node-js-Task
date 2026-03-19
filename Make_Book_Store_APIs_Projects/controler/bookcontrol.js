const bookmodel = require("../Booksmodel")

const addbook=(async(req,res)=>{
    const data=await bookmodel.create(req.body)
    res.send(data)
})

const getbook=(async(req,res)=>{
    const data=await bookmodel.find({})
    res.send(data)
})

const deletebook=(async(req,res)=>{
    const data=await bookmodel.findByIdAndDelete(req.params.id)
    res.send("suscessfully book Delete")
})


const Updatebook=(async(req,res)=>{
    const data=await bookmodel.findByIdAndUpdate(req.params.id,req.body)
    res.send("suscessfully book Update")
})

module.exports={addbook,getbook,Updatebook,deletebook}