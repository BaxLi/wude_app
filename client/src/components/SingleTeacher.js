import React from 'react'
import { Image, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useCheckPhotoById } from '../hooks/checkPhotoByID.hook'
import Loader from './Loader'

const SingleTeacher = ({ teacher }) => {
const { result, loading } = useCheckPhotoById(teacher._id)
    if (loading) return <Loader /> 
 else 
 {
  return (
    <>
   <Image src={result} height="50px" width="auto" roundedCircle></Image>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Teacher</Card.Title>
          <Card.Text>{teacher.name}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )}
}

export default React.memo(SingleTeacher)
