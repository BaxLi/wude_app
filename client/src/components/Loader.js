import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
      <Spinner animation="border" variant="danger" />
    </div>
  )
}
export default React.memo(Loader)
