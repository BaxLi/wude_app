import React, { useContext, useState } from 'react'
import { Modal, Button, Image, Table, Alert } from 'react-bootstrap'
import { AdminContext } from '../../../context/admin.context'

export const AddTechniqueToGroupForm = ({ show, setShow, id }) => {
  const { groupsOfTechniques, addTechnique } = useContext(AdminContext)
  const [form, setform] = useState({ name: '', img: ''})

  const changeHandler = (event) => {
    setform({ ...form, [event.target.name]: event.target.value })
  }

  const addTechniqueHandler = () => {
    if (form.name !== '') addTechnique({...form, 'groupId':id})
    else alert('enter some name')
  }

  if (typeof groupsOfTechniques === 'undefined' || groupsOfTechniques === []) return null
  const groupTechniqueName = groupsOfTechniques.find((gr) => gr._id === id)

  if (typeof groupTechniqueName === 'undefined') return null

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add new technique to the Group of techniques</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <Image src="" alt="image"></Image>
        </div>
        <div>
          <Table striped bordered>
            <tbody>
              <tr>
                <td>
                  <Alert variant="info">Group:</Alert>
                  <Alert variant="primary">{groupTechniqueName.name}</Alert>
                </td>
                <td>
                  <Alert variant="danger">Add new technique</Alert>
                </td>
                <td>
                  <div className="input-field ">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="yellow-input"
                      placeholder="name ?"
                      autoFocus={show}
                      onChange={changeHandler}
                    />
                    <label htmlFor="name">Technique</label>
                  </div>
                  <Button variant="primary" onClick={addTechniqueHandler}>
                    Add
                  </Button>
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
