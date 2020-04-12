import React, { useContext } from 'react'
import { Modal, Button, Image, Table } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { AddDropDownButton } from './AddDropDown'
import { useUsers } from '../../hooks/users.hook'

export const StyleAdminModal = ({ show, setShow, editingUser }) => {
  const { styles } = useContext(AuthContext)
  const {updateUser}=useUsers()
  
  const udateStyleHandler=(styleFull)=>{
    
    const updUser={...editingUser, style:[...editingUser.style, styleFull._id]}
    console.log("udateStyleHandler -> updUser", updUser)
    updateUser(updUser)
  }

  if (!show) return null

  const userStylesMap = styles.filter(item=>{
    if  (editingUser.style.includes(item._id.toString())) return true
   })

  const userStyles =userStylesMap.map(el=><Button variant="primary" key={el._id}>{el.name}</Button>)
  
  const stylesToAdd = styles.filter(item=>{
   if  (!editingUser.style.includes(item._id.toString())) return true
  })

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Learning Styles Admin's actions - Edit customer record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <Image src="https://skyandtelescope.org/wp-content/uploads/black-hole-in-a-galaxy-simulation-300px.jpg"></Image>
        </div>
        <div>
          <Table striped bordered>
            <tbody>
              <tr>
                <td>
                  <Button variant="outline-primary">Styles:</Button>
                </td>
                <td> {userStyles}</td>
                <td>
                  <Button variant="outline-success">Add New Style </Button>
                </td>
                <td>
                  <AddDropDownButton message="Styles" items={stylesToAdd} selectedItem={udateStyleHandler} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setShow(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
