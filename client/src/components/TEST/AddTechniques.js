import React, { useState, useContext } from 'react'
// import { Link } from 'react-router-dom'
import Loader from '../Loader'
import { Button } from 'react-bootstrap'
import { useAdmin } from '../../hooks/admin.hooks'
import { AdminContext } from '../../context/admin.context'
export const AddTechniques = user => {

    const {addTechnique, loading} =useContext(AdminContext)
    const [form, setform] = useState({name: '', levelsname:'', levels:[]})
       
    const changeHandler = event => {
      setform({ ...form, [event.target.name]: event.target.value })
    }
    const addTechniqueHandler=()=>{
  //split strin by comma or space
        addTechnique({name:form.name})
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
          <label htmlFor="name">Technique name</label>
        </div>
        <Button variant="warning" onClick={addTechniqueHandler}>
          New Technique
        </Button>
      </div>
    )
}