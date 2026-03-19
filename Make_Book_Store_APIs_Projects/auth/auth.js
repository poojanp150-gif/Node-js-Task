const auth=((req,res,next)=>{
console.log(req.userdatalogin)

if(req.userdatalogin.role !== "admin"){
     return res.status(403).send("Access denied:Not an admin")
}
    next()
})

module.exports=auth