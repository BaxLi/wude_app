import React from 'react'
// import { Link } from 'react-router-dom'
import Loader from '../Loader'
import { ListGroup } from 'react-bootstrap'
import { useAchievements } from '../../hooks/achievements.hook'
import { ShowSingleAchievement } from './ShowSingleAchievement'
export const ShowUserAchievements = user => {
  const { achievements, loadingAch } = useAchievements()
  if (loadingAch) return <Loader />
  const rez = achievements.map(a => 
        {return (<ListGroup.Item key={a._id} variant="warning">
                    <ShowSingleAchievement  achievement={a} />
                  </ListGroup.Item>)}
  )
  return <>
             <div className="warning">LEVEL</div>
                <ListGroup>
                  {rez}
                 </ListGroup>
        </>
}
