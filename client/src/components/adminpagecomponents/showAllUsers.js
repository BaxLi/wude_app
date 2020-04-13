import React, { useState, useContext } from 'react'
import { Spinner, Table } from 'react-bootstrap'

import { ShowSingleUser } from '../adminpagecomponents/Show_SingleUser'
import { StyleAdminModal } from '../../pages/Modals/StyleAdminModal'
import { AdminContext } from '../../context/admin.context'
export const ShowAllUsers = () => {
  const {users, loading} = useContext(AdminContext)
  const [show, setShow] = useState(false)
  const [userToEdit, setUserToEdit] = useState(null)

  // console.log('ShowAllUsers -> userToEdit', userToEdit, loading)
if (userToEdit===null) return <Spinner />
  if (loading) {
    // console.log('Spinner - ShowAllUsers')
    return <Spinner animation="border" variant="danger" />
  } else {
    const tableHeader = (
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Family Name</th>
          <th>Birthyday</th>
          <th>email</th>
          <th>Gen</th>
          <th>Position</th>
          <th>Style</th>
          <th>Level</th>
          <th>Achievements</th>
        </tr>
      </thead>
    )
    const rez = users.map((us) => {
      // console.log('ShowAllUsers -> us', us)
      return <ShowSingleUser key={us._id} 
                  user={us} 
                  editUser={setUserToEdit}  // callback to edit user cliked by
                  modal={setShow} />
    })
    return (
      <div>
        <Table striped bordered hover>
          {tableHeader}
          {rez}
        </Table>
        <StyleAdminModal show={show} setShow={setShow} editingUser={userToEdit} />
      </div>
    )
  }
}
