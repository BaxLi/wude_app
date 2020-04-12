import React, { useContext } from 'react'
import { useAdmin } from '../../hooks/admin.hooks'
import { Button } from 'react-bootstrap'
import { AdminContext } from '../../context/admin.context'

export const ShowAllNamesInLIsts = (props) => {
  const {deleteItem}=useContext(AdminContext)
  const {header}=props
  const componentKeyName = Object.keys(props)[0]
  const items=props[Object.keys(props)[0]] // here array of items -> should show name field

  const deleteItemHandler =(id) => {
    deleteItem(componentKeyName, id)
  }
    const rez = items.map((st) => (
      <div key={st._id}>
        <Button variant="outline-info" onClick={() => deleteItemHandler(st._id)}>
          {st.name}
        </Button>
      </div>
    ))
    return (
      <div>
        <h1>{header}</h1>
        <hr />
        {rez}
      </div>
    )
  
}
