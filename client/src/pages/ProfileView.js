import React, { useContext, useEffect, useMemo, useCallback } from 'react'
// import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { useCheckAvatar } from '../hooks/checkAvatar.hook'
import Loader from '../components/Loader'
import { Card, Image } from 'react-bootstrap'
import Teachers from '../components/Teachers'
import { ShowUserAchievements } from '../components/TEST/ShowUserAchievements'
import { UserInfoTable } from '../components/UserInfoTable'
import { ShowUserTechniques } from '../components/TEST/ShowUserTechniques'
import ShowUserLearningStyles from '../components/startPage/ShowUserLearningStyles'
import { ShowSchedule } from '../components/TEST/ShowSchedule'
import { useCommonHooks } from '../hooks/common.hooks'

export const ProfileView = user => {
  const { userId, userDetails } = useContext(AuthContext)
  const { result, loading } = useCheckAvatar(userId)
  const {userStylesClick}=useCommonHooks()
  useEffect(() => {
    // console.log('ProfileView re-render', result)
  })
const photoUser = useMemo(() => (<Card><img src={result} height="260px" alt="s"></img></Card>), [result])

// if (!userDetails) return <div>cant read details from DB try later /// </div>
if (loading || typeof (userDetails)==='undefined') return <Loader />
let userdetailsLevel
(userDetails)?userdetailsLevel=userDetails.level:userdetailsLevel='Novice'
const imgSrc=`http://localhost:5000/public/images/${userdetailsLevel}.jpg`

return (
    <div>
      <div className="row">
        {photoUser}
        <UserInfoTable user={userDetails} />
        <Card>
          <Card.Title className="center">Level</Card.Title>
          <Image src={imgSrc} height="260px"></Image>
        </Card>
        <Card onClick={userStylesClick}>
          <ShowUserLearningStyles  />
        </Card>
        <Card>
          <ShowUserAchievements user={userId}/>
        </Card>
        <Card>
          <ShowUserTechniques user={userId}/>
        </Card>
      </div>

      <div className="row">
        <ShowSchedule />
      </div>     

      <div className="row">
        <Teachers />
      </div>
    </div>
  )
}
