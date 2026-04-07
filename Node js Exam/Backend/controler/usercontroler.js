const usermodel = require("../model/usermodel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const addreg=(async(req,res)=>{
    const {username,password,userrole}=req.body
    const hashpassword= await bcrypt.hash(password,10)
    const data=usermodel.create({
        username,userrole,password:hashpassword
    })
    res.send({data,message:"Successfully data save"})
})

const Login=(async(req,res)=>{
    const {username,password,userrole}=req.body

    const user=await usermodel.findOne({username})

    if(!user){
        return res.send({message:"User not found"})
    }

    if(userrole !==user.userrole){
        return res.send({message:"userrole not match"})
    }

    const ismatch= await bcrypt.compare(password,user.password)

    if(!ismatch){
        return res.send({message:"Password dont match"})
    }
    
    const payload={
        userrole,id:user.id
    }
    const token= jwt.sign(payload,"secretkey")

    res.send({token,message:"Login syccesfully"})
})


const verify=((req,res,next)=>{
 const authHeader = req.headers.authorization

  if (!authHeader) {
            return res.status(401).json({ message: "Login Please" })
        }
    const token = authHeader.split(" ")[1]


    if(!token){
       return  res.send({message:"Token Missing"})
    }

    const info=jwt.verify(token,"secretkey")
    req.userdatalogin=info
    next()
})

const Admin = (req, res, next) => {
    if (req.userdatalogin.userrole !== "admin") {
        return res.send({ message: "Admin only use" })
    }
    next()
}

module.exports={addreg,Login,verify,Admin}