import {useState, useCallback, useEffect} from 'react'

const storageName='userData'

export const useAuth=()=>{
   const [token, settoken] = useState(null) 
   const [userId, setuserId] = useState(null)
   const [isAdmin, setisAdmin] = useState(false)
   const [userDetails, setuserDetails] = useState(null)
   const login=useCallback(async (jwtToken, id, userDetails)=>{
      setisAdmin(userDetails.isAdmin)
      delete userDetails.isAdmin
      settoken(jwtToken)
      setuserId(id)
      setuserDetails(userDetails)
      localStorage.setItem(storageName, JSON.stringify({userId:id, token:jwtToken, userDetails, isAdmin }))
   },[])
   const logout=useCallback(()=>{
      settoken(null)
      setuserId(null)
      setuserDetails(null)
      setisAdmin(false)
      localStorage.removeItem(storageName)
   },[])

   useEffect(() => {
      const data=JSON.parse(localStorage.getItem(storageName))
      if (data && data.token && data.userDetails) {
         login(data.token, data.userId, data.userDetails, data.isAdmin)
      }
   }, [login])

   return {login, logout, token, userId, userDetails, isAdmin}
}