import React from 'react'
// import { Link } from 'react-router-dom'
// import { Card, Table, Image, Button, Form } from 'react-bootstrap'

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
export const ShowSingleTechnique = ({ technique }) => {
  const {name, img='commonIcon.jpg'}=technique
  // const baseImg=`http://localhost:5000/public/images/${img}`
 
    return <div className="row">
              {/* <Image src={baseImg} height="25px" width="auto" roundedCircle></Image> */}
              {name}
            </div>
}
