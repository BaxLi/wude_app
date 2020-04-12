import React from 'react'
// import { Container } from 'react-bootstrap'

import { useTeachers } from '../hooks/teachers.hook'
import  SingleTeacher from './SingleTeacher'
import Loader from './Loader'

const Teachers = () => {
  const { teachers, loadingTeachers } = useTeachers()
  // console.log('Table - loadingTeachers=', teachers)
  if (loadingTeachers) return <Loader />
  else
    return (
      <div>
        <div className="row">
          {teachers.map(tc => (
            <SingleTeacher key={tc._id} teacher={tc} />
          ))}
        </div>
      </div>
    )
}
export default React.memo(Teachers)
