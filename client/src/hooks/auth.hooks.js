import {useState, useCallback, useEffect} from 'react'
const storageName='userData'
export const useAuth=()=>{

   const [token, settoken] = useState(null) 
   const [userId, setuserId] = useState(null)

   const login=useCallback((jwtToken, id)=>{
      settoken(jwtToken)
      setuserId(id)
      localStorage.setItem(storageName, JSON.stringify({userId:id, token:jwtToken}))
   },[])
   const logout=useCallback(()=>{
      settoken(null)
      setuserId(null)
      localStorage.removeItem(storageName)
   },[])

   useEffect(() => {
      const data=JSON.parse(localStorage.getItem(storageName))
      if (data && data.token) {
         login(data.token, data.userId)
      }
   }, [login])

   return {login, logout, token, userId}

}