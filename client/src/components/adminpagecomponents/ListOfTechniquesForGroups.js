import React, { useContext, useState, useEffect } from 'react'

import { AdminContext } from '../../context/admin.context'
import { Spinner, Table } from 'react-bootstrap'
import { AddTechniqueToGroupForm } from './modals/AddTechniqueToGroupForm'
export const ListOfTechniquesForGroups = () => {
  const { groupsOfTechniques, techniques } = useContext(AdminContext)
  console.log("ListOfTechniquesForGroups -> techniques", techniques)
  const [show, setShow] = useState(false)
  const [groupToEdit, setGroupToEdit] = useState('')

  const addTechniqueToGroupHandle=(id)=>{
    setGroupToEdit(id)
    setShow(true)
  }
  if (typeof groupsOfTechniques === 'undefined') return <Spinner />
  const tech = groupsOfTechniques.map((group) => {
    const th=techniques.map(el=>
    {
      if (el.group===group._id) return <h8>{el.name} / </h8>
      else 
      return null
    })

    return (
      <tr key={group._id}>
        <td onClick={()=>addTechniqueToGroupHandle(group._id)}>{group.name}</td>
        <td>
          {th}
        </td>
      </tr>
    )
  })

  return (
    <div className="d-flex">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Group of Tech.</th>
            <th>Techniques</th>
          </tr>
        </thead>
        <tbody>{tech}</tbody>
      </Table>
      <AddTechniqueToGroupForm show={show} setShow={setShow} id={groupToEdit} />
    </div>
  )
}
