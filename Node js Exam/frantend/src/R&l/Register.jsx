import React, { useState } from 'react'
import api from '../api'
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [regdata,setregdata]=useState({
        username:"",password:"",userrole:""
    })
    const handleinput=((e)=>{
        const {name,value}=e.target
        setregdata((prev)=>({   
            ...prev,[name]:value
        }))
    })
    const navigate=useNavigate()
    const handlesubmit=(async(e)=>{
        e.preventDefault()
        console.log(regdata)
        await api.post("/addreg",regdata)
        navigate("/login")
        setregdata({
          username:"",password:"",userrole:""  
        })
    })
  return (
    <div>
       <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card shadow p-4" style={{ width: "350px" }}>
    
    <h3 className="text-center mb-3">Register</h3>

    <form onSubmit={handlesubmit}>
      
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input 
          type="text" 
          name="username" 
          value={regdata.username} 
          onChange={handleinput} 
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          type="password" 
          name="password" 
          value={regdata.password} 
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
            checked={"user" === regdata.userrole} 
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
            checked={"admin" === regdata.userrole} 
            onChange={handleinput} 
          />
          <label className="form-check-label">Admin</label>
        </div>
      </div>

      <button type="submit" className="btn btn-success w-100">
        Submit
      </button>
    </form>

    <p className="text-center mt-3">
      You already have an{" "}
      <span 
        onClick={() => navigate("/login")} 
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
