import { useState, useContext, useMemo } from 'react'
import { useHttp } from './http.hook'
import { AuthContext } from '../context/auth.context'

export const useCheckAvatar = ()=> {
  const { userId } = useContext(AuthContext)
  const { loading, request } = useHttp()
  const [result, setrezult] = useState('http://localhost:5000/public/images/commonIcon.jpg')
  const [datareturned, setDatareturned] = useState({userId:1})
  useMemo( () => {
          const  checkIfAvatarExistOnServer= async ()=> {
              const data =await request(`/photo/takePhoto/${userId}`, 'GET')
              setDatareturned(data)
            }
            checkIfAvatarExistOnServer()
          },[ userId])  
  useMemo(() => {
    if ( datareturned.userId=== userId) {
        setrezult(`http://localhost:5000/public/images/${userId}.jpg`)
      } else {
        setrezult(`http://localhost:5000/public/images/commonIcon.jpg`)
      }},
  [userId, datareturned]
)
  return { result, loading, datareturned }
}

