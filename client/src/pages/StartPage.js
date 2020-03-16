import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import Loader from '../components/Loader'
import {useCheckAvatar} from '../hooks/checkAvatar.hook'

export const StartPage = () => {
  const { userId } = useContext(AuthContext)
  const { rezult: result, loading }= useCheckAvatar(userId);

 const rez = loading ? <Loader />:<div><img src={result} alt="avatar" height="60px"></img></div>

return (
<div>
  <Link to="/takePhoto">Take Photo</Link>
  {rez}
</div>)

}
