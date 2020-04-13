import React from 'react'
import Loader from '../Loader'
import { ListGroup } from 'react-bootstrap'
import {useAdmin} from '../../hooks/admin.hooks'
import { ShowSingleTechnique } from './ShowSingleTechnique'

export const ShowUserTechniques = user => {
const { groupsOfTechniques, loading }=useAdmin()

  if (loading) return <Loader />
  const rez = groupsOfTechniques.map(a => 
        {return (<ListGroup.Item key={a._id} variant="warning">
                    <ShowSingleTechnique  technique={a} />
                  </ListGroup.Item>)}
  )
  return <>
             <div className="warning">TECHNIQUES</div>
             <div>{rez}</div>
        </>
}
