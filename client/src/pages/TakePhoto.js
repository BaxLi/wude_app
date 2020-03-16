import React, { useContext } from 'react'
import {AuthContext} from '../context/auth.context'

export const TakePhoto=()=>{
    const {userId} = useContext(AuthContext)
    
//     const onClickHandler=()=>{
// const name=document.getElementById("fileInput")
//         console.log("photo", name)
//     }

   return (
     <div>
       <form action="/photo/uploadPhoto" method="post" noValidate encType="multipart/form-data">
         <h1>File Reader Example:</h1>
         <input id="id" name="_userId" type="hidden" value={userId} />
         <input id="photo" name="photo" type="file" accept=".png, .jpg, .jpeg" />
         <div className="form-actions">
           <button className="btn" type="submit">
             Send
           </button>
         </div>
       </form>
     </div>
   )
}