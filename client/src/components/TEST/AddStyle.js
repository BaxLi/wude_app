import React, {  useState, useContext } from 'react'
import Loader from '../Loader'
import {Button } from 'react-bootstrap'
import { AdminContext } from '../../context/admin.context'
export const AddStyle = () => {
    const {addStyle, loading} =useContext(AdminContext)
    const [form, setform] = useState({name: '', img:'' })
       
    const changeHandler = event => {
      setform({ ...form, [event.target.name]: event.target.value })
    }
    const addStyleHandler=()=>{
      addStyle(form)
    }
    if (loading) return <Loader />
    return (
      <div>
        <div className="input-field ">
          <input
            id="name"
            name="name"
            type="text"
            className="yellow-input"
            placeholder="Please enter new achievement name"
            onChange={changeHandler}
          />
          <label htmlFor="name">Achievement name</label>
        </div>
        <div className="input-field ">
          <input
            id="img"
            name="img"
            type="text"
            className="yellow-input"
            placeholder="Please enter achievement image name placed in public/images folder of the server"
            onChange={changeHandler}
          />
          <label htmlFor="name">Style IMAGE</label>
        </div>
        <Button variant="primary" onClick={addStyleHandler}>
          New STYLE
        </Button>
      </div>
    )
}