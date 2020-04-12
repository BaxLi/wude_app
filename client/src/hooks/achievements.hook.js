import { useState, useEffect } from 'react'
import { useHttp } from './http.hook'

export const useAchievements = () => {
  const { request } = useHttp()
  const [loadingAch, setloadingAch] = useState(false)
  const [achievements, setachievements] = useState([])
  const checkAchievements = async () => {
    // console.log('achievements.hook.js  called')
    setloadingAch(true)
    try {
      const data = await request('/achievements/selectallach', 'GET')
      // console.log('server achievements answer = ', data)
      setachievements(data)
    } catch (err) {
      console.log('achievements error')
    }
    setloadingAch(false)
  }
  const addAchievment = async ach => {
    // console.log('achievements.hook.js addAchievment called', ach)

    const rez=await request('/achievements/addachievement', 'POST', {...ach})
    console.log("useAchievements -> rez", rez)
    checkAchievements()
  }
  useEffect(() => {
    checkAchievements()
  }, [])

  return { achievements, addAchievment, loadingAch }
}
