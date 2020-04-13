import React, { useEffect, useContext } from 'react'
import { Card, Image } from 'react-bootstrap'

import {ShowAllNamesInLIsts} from '../components/adminpagecomponents/showAllNamesInLIsts'
import { AddAchievements } from '../components/TEST/AddAchievements'
import { AddGroupTechniques } from '../components/TEST/AddGroupTechniques'
import { AddStyle } from '../components/TEST/AddStyle'
import { AdminContext } from '../context/admin.context'
import { ShowAllUsers } from '../components/adminpagecomponents/showAllUsers'
import { ListOfTechniquesForGroups } from '../components/adminpagecomponents/ListOfTechniquesForGroups'

export const AdminPage = () => {

  const {styles, groupsOfTechniques} = useContext(AdminContext)
  const imgSrc = `http://localhost:5000/public/images/Admin.jpg`
  useEffect(() => {
    console.log('styles / techniques changed !', styles)
  }, [styles])

  return (
    <>
    <div className="row">
      <Image src={imgSrc} height="150px"></Image>
      <div>
        <ShowAllUsers />
      </div>
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
            <ShowAllNamesInLIsts groupsOfTechniques={groupsOfTechniques} header='Groups of Techniques'/>
          </Card>
          <Card>
            <div> ADD New technique GROUP</div>
            <AddGroupTechniques />
          </Card>
        </Card>
      </div>
    </div>
    {/* ------- new row -------------------- */}
    <div className="row">
    <ListOfTechniquesForGroups />
  </div>
  </>
  )
}
