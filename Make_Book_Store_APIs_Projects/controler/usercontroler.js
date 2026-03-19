const usermodel = require("../usermodel")
const jwt=require("jsonwebtoken")

const addlogin=(async(req,res)=>{
     const {username,password,role}=req.body
    const data=await usermodel.create({
        username:username,
        password:password,
        role:role || "user"
    })
    res.send(data)
})

const login=(async(req,res)=>{
    const {username,password}=req.body

    const user=await usermodel.findOne({username})
    if(!user){
         res.send("user not found")
    }else if(user.password !== password){
        res.send("invalid username")
    }else{
        const payload={
             username:user.username,role:user.role || "user"
        }
         const info=jwt.sign(payload,"secretkey")
    res.send(info)
    }

})


const verify=((req,res,next)=>{
     const token = req.headers.authorization.split(" ")[1];

    if(!token){
          return res.status(401).send("Token Missing");
    }

            const info = jwt.verify(token, "secretkey");

           req.userdatalogin = info; 
              next();
})

module.exports={addlogin,login,verify}