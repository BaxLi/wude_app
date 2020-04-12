import React, { useEffect, useContext } from 'react'
import { Card, Image } from 'react-bootstrap'

import {ShowAllNamesInLIsts} from '../components/adminpagecomponents/showAllNamesInLIsts'
import { AddAchievements } from '../components/TEST/AddAchievements'
import { AddTechniques } from '../components/TEST/AddTechniques'
import { AddStyle } from '../components/TEST/AddStyle'
import { AdminContext } from '../context/admin.context'

export const AdminPage = () => {

  const {styles, techniques} = useContext(AdminContext)
  const imgSrc = `http://localhost:5000/public/images/Admin.jpg`
  useEffect(() => {
    console.log('styles / techniques changed !', styles)
  }, [styles])

  return (
    <div className="row">
      <Image src={imgSrc} height="150px"></Image>
      <div>{/* <ShowAllUsers /> */}</div>
      <div className="row">
        <Card>
          <Card>
            <ShowAllNamesInLIsts styles={styles} header='Styles' />
          </Card>
          <Card>
            <div> ADD Style</div>
            <AddStyle />
          </Card>
        </Card>
        <Card>
          <div> ADD ACHIEVEMENTS</div>
          <AddAchievements />
        </Card>
        <Card>
          <Card>
            <ShowAllNamesInLIsts techniques={techniques} header='Techniques'/>
          </Card>
          <Card>
            <div> ADD TECHNIQUES</div>
            <AddTechniques />
          </Card>
        </Card>
      </div>
    </div>
  )
}
