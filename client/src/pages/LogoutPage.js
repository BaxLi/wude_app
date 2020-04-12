import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth.context'


export const LogoutPage = () => {
  const {logout}=useContext(AuthContext)
  useEffect(() => {logout()})
return (
<div>
 <h1> FINISHed!</h1>
</div>)

}
