import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
import Loader from '../Loader'
import { Card, Table, Image, Button, Form } from 'react-bootstrap'
import {useAchievements} from '../../hooks/achievements.hook'
export const AddAchievements = user => {

    const {addAchievment, loadingAch} =useAchievements()
    const [form, setform] = useState({name: '', techniques:[], img:'' })
       
    const changeHandler = event => {
      setform({ ...form, [event.target.name]: event.target.value })
    }
    const addAchievmentHandler=()=>{
      // console.log("form=", form);
      addAchievment(form)
    }
    if (loadingAch) return <Loader />
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
          <label htmlFor="name">Achievement IMAGE</label>
        </div>
        <Button variant="primary" onClick={addAchievmentHandler}>
          New level
        </Button>
      </div>
    )
}