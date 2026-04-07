import React, { useState } from 'react'
import api from './api'
import { useNavigate } from 'react-router-dom'

export default function Alltasks() {
const [data,setdata]=useState({
    alltask:"",category:""
})
const [message,setmessage]=useState("")
    const handlechange=((e)=>{
        const {name,value}=e.target
        setdata((prev)=>({
            ...prev,[name]:value
        }))
    })
    const navigate=useNavigate()
    const handlesubmit=(async(e)=>{
        e.preventDefault()
        console.log(data)
       const res= await api.post("/taskdata",data,{
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
       })
        setmessage(res.data.message)
        navigate("/")
    })

  return (
    <div>
       <form onSubmit={handlesubmit} className="container mt-4">
  <div className="card p-4 shadow">
    <h4 className="mb-3 text-center">Add Task</h4>

    <div className="mb-3">
      <label className="form-label">Task Name</label>
      <input
        type="text"
        name="alltask"
        placeholder="Enter task name"
        value={data.alltask}
        onChange={handlechange}
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Category</label>
      <input
        type="text"
        name="category"
        placeholder="Enter category"
        value={data.category}
        onChange={handlechange}
        className="form-control"
      />
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>

    {message && (
      <div className="alert alert-info mt-3 text-center">
        {message}
      </div>
    )}
  </div>
</form>
    </div>
  )
}
