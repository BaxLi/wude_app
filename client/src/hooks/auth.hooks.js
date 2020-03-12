import {useState, useCallback} from 'react'

export const useAuth=()=>{
   const [token, settoken] = useState(null) 
   const [userId, setuserId] = useState(null)

   const login=useCallback(()=>{},[])
   const logout=useCallback(()=>{},[])

   return {login, logout}

}