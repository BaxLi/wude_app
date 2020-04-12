import React, { useContext } from 'react'
import {AuthContext} from '../context/auth.context'

export const TakePhoto=()=>{
    const {userId} = useContext(AuthContext)   
   return (
     <div>
       <form action="/photo/uploadPhoto" method="post" noValidate encType="multipart/form-data">
         <input id="id" name="_userId" type="hidden" value={userId} />
        
         <div className="form-actions">
         <input id="photo" name="photo" type="file" accept=".png, .jpg, .jpeg" />
           <button className="btn-sm" type="submit">
             Accept image
           </button>
         </div>
       </form>
     </div>
   )
}