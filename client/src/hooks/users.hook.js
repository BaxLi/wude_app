import { useState, useEffect } from 'react'
import { useHttp } from './http.hook'

export const useUsers = () => {
  const { request } = useHttp()
  const [loadingUsers, setloadingUsers] = useState(false)
  const [users, setusers] = useState([])

  const checkUsers = async () => {
    console.log('userss.hook.js  called')
    setloadingUsers(true)
    try {
      const data = await request('/users/selectallusers', 'GET')
      // console.log('server teachers answer = ', data)
      setusers(data)
      setloadingUsers(false)
    } catch (err) {
      console.log('users.hook FRONTEND error', err)
      setloadingUsers(false)
    }
  }

  const updateUser = async (upd)=>{
    console.log('users.hook.js udateUser called ->', upd)
    const data = await request(`/users/setuserstyle/${upd._id}`, 'POST', {...upd})

  }
  useEffect(() => {
    checkUsers()
  }, [])
  return { users, updateUser, loadingUsers }
}
