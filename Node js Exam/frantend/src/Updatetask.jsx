import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from './api'

export default function Updatetask() {
    const { id } = useParams()
    const [data, setdata] = useState({
        alltask: "", category: ""
    })
    const handlechange = ((e) => {
        const { name, value } = e.target
        setdata((prev) => ({
            ...prev, [name]: value
        }))
    })
    const navigate = useNavigate()
    useEffect(() => {
        const featchdata = (async () => {
            const res = await api.get(`Update/${id}`);
            setdata(res.data)
        })
        featchdata()
    }, [id])
    const handlesubmit = (async (e) => {
        e.preventDefault()
        await api.put(`/update/${id}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        navigate("/")
    })

    return (
        <div>
         

<form onSubmit={handlesubmit} className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow p-4">
        
        <h4 className="text-center mb-4">Update Task</h4>

        <div className="mb-3">
          <label className="form-label">Task Name</label>
          <input
            type="text"
            name="alltask"
            placeholder="Enter task name"
            value={data.alltask || ""}
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
            value={data.category || ""}
            onChange={handlechange}
            className="form-control"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>

      </div>
    </div>
  </div>
</form>
        </div>
    )
}
