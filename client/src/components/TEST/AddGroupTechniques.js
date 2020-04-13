import React, { useState, useContext } from 'react'
import Loader from '../Loader'
import { Button } from 'react-bootstrap'
import { AdminContext } from '../../context/admin.context'
export const AddGroupTechniques = () => {

    const {addTechnique, loading} =useContext(AdminContext)
    const [form, setform] = useState({name: '', addto:'group'})
       
    const changeHandler = event => {
      setform({ ...form, [event.target.name]: event.target.value })
    }
    const addTechniqueHandler=()=>{
  //split strin by comma or space
        addTechnique({...form})
        setform({...form, name:''}) // clear form input prev values 
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
            value={form.name}
            onChange={changeHandler}
          />
          <label htmlFor="name">Technique name</label>
      </div>
        <Button variant="warning" onClick={addTechniqueHandler}>
          New Technique group
        </Button>
      </div>
    )
}