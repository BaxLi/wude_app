import { useState, useMemo, useEffect } from 'react'
import { useHttp } from './http.hook'

export const useCheckPhotoById = id => {
  const { loading, request } = useHttp()
  const [result, setresult] = useState('http://localhost:5000/public/images/commonIcon.jpg')
  const [photoreturned, setphotoreturned] = useState({ userId: 1 })
  useEffect(() => {
    const checkIfAvatarExistOnServer = async () => {
      const data = await request(`/photo/takePhoto/${id}`, 'GET')
      setphotoreturned(data)
    }
    checkIfAvatarExistOnServer()
  }, [id])
  useMemo(() => {
    if (photoreturned.userId === id) {
      setresult(`http://localhost:5000/public/images/${id}.jpg`)
    } else {
      setresult(`http://localhost:5000/public/images/commonIcon.jpg`)
    }
  }, [photoreturned])
  return { result, loading, photoreturned }
}
