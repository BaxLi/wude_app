import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { AdminContext } from '../../context/admin.context'

export const ShowAllNamesInLIsts = (props) => {
  const {deleteItem}=useContext(AdminContext)
  const {header}=props
  const componentKeyName = Object.keys(props)[0]
  // console.log("ShowAllNamesInLIsts -> componentKeyName", componentKeyName)
  const items=props[Object.keys(props)[0]] // here array of items -> should show name field
  
  // console.log("ShowAllNamesInLIsts -> items", items)

  const deleteItemHandler =(id) => {
    const answer = prompt("Really delete? write yes", 'NO')
    if (answer.toLowerCase()==='yes') 
      {
        deleteItem(componentKeyName, id)
      }
  }
  
  if (typeof items==='undefined') return null
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
