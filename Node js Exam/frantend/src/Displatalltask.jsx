import React, { useEffect } from 'react'
import { useState } from 'react'
import api from './api'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Displatalltask() {
    const[data,setdata]=useState([])
useEffect(()=>{
featchdata()
})
const navigate=useNavigate()
    const featchdata=(async()=>{
        const res=await api.get("/showalldata")
        setdata(res.data)
    })
    const Delete=(async(id)=>{
       try{
await api.delete(`/Deletetask/${id}`,{
                 headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
            })
            featchdata()
        }catch (error){
            alert( "Login Please")
        navigate("/login")
        }
    })
     const updatedata=((id)=>{
         const token = localStorage.getItem("token")

    if (!token) {
        alert("Login Please")
        navigate("/login")
    } else{

        navigate(`/Update/${id}`)
    }
    })
     
  return (
    <div>
   

<div className="container mt-4">
  <h3 className="text-center mb-4">Task List</h3>

  <div className="row">
    {data && data.map((l) => (
      <div className="col-md-4 mb-4" key={l._id}>
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title text-primary">
              {l.alltask}
            </h5>
            <p className="card-text">
              <strong>Category:</strong> {l.category}
            </p>

            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => Delete(l._id)}
              >
                Delete
              </button>

              <button
                className="btn btn-warning btn-sm"
                onClick={() => updatedata(l._id)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        <Outlet/>
    </div>
  )
}
