import React from 'react'
import { Image } from 'react-bootstrap'

export const ShowSchedule = () => {
  const baseImg=`http://localhost:5000/public/images/OrarDeAntrenamente.png`
 
    return <div className="row">
              <Image src={baseImg} height="auto" width="auto"></Image>
            </div>
}
