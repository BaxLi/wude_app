import React from 'react'
import { Dropdown } from 'react-bootstrap'

export const AddDropDownButton = (props) => {
  const { message, items, selectedItem } = props

  const clickSelectionHadler = (id) => {
    selectedItem(id)
  }
  const addToSelection = items.map((i) => {
    return <Dropdown.Item key={i._id} onClick={() => clickSelectionHadler(i)}>{i.name}</Dropdown.Item>
  })
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {message}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {addToSelection}
      </Dropdown.Menu>
    </Dropdown>
  )
}
