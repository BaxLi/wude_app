import React, { useContext } from 'react'
import {AuthContext} from '../../context/auth.context'
import { Button } from 'react-bootstrap'

const ShowUserLearningStyles = () => {
    const {userDetails}= useContext(AuthContext)
    console.log("ShowUserLearningStyles -> userDetails", userDetails)

    const rez=userDetails.style.map(st=>{
    return (<Button variant="primary" key={st._id}>{st.name}</Button>)
    })

  return <>
  STYLES by user 
  <hr/>
        {rez}
        no
        </>
}
export default  React.memo(ShowUserLearningStyles)