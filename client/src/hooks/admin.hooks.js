import {useState, useEffect, useCallback, useMemo} from 'react'

import { useHttp } from './http.hook'

export const useAdmin=()=>{
   const { request } = useHttp()
   const [loading, setloading] = useState(true)
   const [styles, setStyles] = useState([])
   const [techniques, setTechniques] = useState([])

   const checkStyles = async () => {
     setloading(true)
     try {
       const data = await request('/styles/selectallstyles', 'GET')
       setStyles([...data])
     } catch (err) {
       console.log('styles reading  error')
     }
     setloading(false)
   }

   const addStyle = async (stl) => {
     setloading(true)
     await request('/styles/addstyles', 'POST', { ...stl })
     await checkStyles()
     setloading(false)
   }

   const checkTechniques = async () => {
     setloading(true)
     try {
       const data = await request('/techniques/selectalltechniques', 'GET')
      //  console.log("checkTechniques -> data", data)
       setTechniques([...data])
     } catch (err) {
       console.log('Techniques DB reading  error')
     }
     setloading(false)
   }

   const addTechnique = async (th) => {
    setloading(true)
    await request('/techniques/addtechnique', 'POST', { ...th })
    await checkTechniques()
    setloading(false)
  }
  const deleteItem = async(itemName, itemId)=>{
    console.log("CLIENT admin.hooks deleteItem -> itemName", itemName)
    setloading(true)
      await request(`/${itemName}/delete/${itemId}`, 'POST')
      switch (itemName){
        case 'styles':
        console.log("deleteItem -> case styles")
          await checkStyles()
          break
        case 'techniques':
        console.log("deleteItem -> case techniques")
          await checkTechniques()
          break
      } 
    setloading(false)
  }
useEffect(() => { 
   checkStyles()
   checkTechniques()
}, [])

   return { loading, deleteItem, styles, addStyle, techniques, addTechnique }
}