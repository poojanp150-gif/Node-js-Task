import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [logdata,setlogdata]=useState({
         username:"",password:"",userrole:""  
    })
    const [message,setmessage]=useState("")
     const handleinput=((e)=>{
        const {name,value}=e.target
        setlogdata((prev)=>({   
            ...prev,[name]:value
        }))
    })
    const navigate=useNavigate()
    const handlesubmit=(async(e)=>{
        e.preventDefault()
        console.log(logdata)
        const res= await api.post("/login",logdata)
        setmessage(res.data.message)
        if (res.data.token) {
             localStorage.setItem("token",res.data.token)
         }
         navigate("/")
    })

    return (
        <div> 
          <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card p-4 shadow" style={{ width: "350px" }}>
    <h3 className="text-center mb-3">Login</h3>

    <form onSubmit={handlesubmit}>
      
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input 
          type="text" 
          name="username" 
          value={logdata.username} 
          onChange={handleinput} 
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          type="password" 
          name="password" 
          value={logdata.password} 
          onChange={handleinput} 
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label d-block">Role</label>

        <div className="form-check form-check-inline">
          <input 
            className="form-check-input"
            type="radio" 
            name="userrole" 
            value="user" 
            checked={"user" === logdata.userrole} 
            onChange={handleinput} 
          />
          <label className="form-check-label">User</label>
        </div>

        <div className="form-check form-check-inline">
          <input 
            className="form-check-input"
            type="radio" 
            name="userrole" 
            value="admin" 
            checked={"admin" === logdata.userrole} 
            onChange={handleinput} 
          />
          <label className="form-check-label">Admin</label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>

    {message && (
      <div className="alert alert-info mt-3 text-center">
        {message}
      </div>
    )}

    <p className="text-center mt-3">
      You have create{" "}
      <span 
        onClick={() => navigate("/register")} 
        style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
      >
        Account
      </span>
    </p>
  </div>
</div>
        </div>
    )
}
