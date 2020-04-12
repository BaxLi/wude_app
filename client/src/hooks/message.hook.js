import React,{useCallback, useState} from 'react'
import Alert from 'react-bootstrap/Alert'

export const useMessage = () => {
  // const [show, setShow] = useState(true);
 
  return useCallback(text => {
     return (<Alert variant="danger" dismissible>
        <Alert.Heading> You got an error!</Alert.Heading>
        <p>{text}</p>
      </Alert>)}, [])
}