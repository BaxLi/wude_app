import {useState, useEffect} from 'react'

import { useHttp } from './http.hook'

export const useAdmin=()=>{
   const { request } = useHttp()
   const [loading, setloading] = useState(true)
   const [styles, setStyles] = useState([])
   const [groupsOfTechniques, setGroupsOfTechniques] = useState([])
   const [techniques, setTechniques] = useState([])
   const [users, setusers] = useState([])

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

   const checkTechniques = async (wt='') => {
     setloading(true)
     try {
       let data
       if (wt === 'group') {
        data = await request('/techniques/selectallgroupsoftechniques', 'GET')
        setGroupsOfTechniques([...data])
       } else {
        data = await request('/techniques/selectalltechniques', 'GET')
        setTechniques(data)
       } 
     } catch (err) {
       console.log('Techniques DB reading  error')
     }
     setloading(false)
   }

   const addTechnique = async (th, groupId='') => {
     //we have possibility to add or to techniques or to Group of techniques !!!
   console.log("addTechnique -> th", th)
  //  const newRequest={ ...th, 'groupId':groupId }
   
  //  console.log("addTechnique -> newRequest", newRequest)

    setloading(true)
    await request('/techniques/addtechnique', 'POST', { ...th })
    await checkTechniques(th.addto)
    setloading(false)
  }
  const deleteItem = async(itemName, itemId)=>{
    
    console.log("CLIENT admin.hooks deleteItem -> itemName", itemName)
    
    let sublevel=''
    let itemUrl=itemName
    setloading(true)
    
    if (itemName === 'groupsOfTechniques') {
      sublevel = 'groupsOfTechniques'.toLowerCase()
      itemUrl = 'techniques'
    }

      await request(`/${itemUrl}/delete${sublevel}/${itemId}`, 'POST')

      switch (itemName) {
        case 'styles':
          console.log('deleteItem -> case styles')
          await checkStyles()
          break
        case 'techniques':
          console.log('deleteItem -> case techniques')
          await checkTechniques()
          break
        case 'groupsOfTechniques':
            console.log('deleteItem -> case techniques')
            await checkTechniques('group')
            break
      } 
    setloading(false)
  }

  const checkUsers = async () => {
    setloading(true)
    try {
      const data = await request('/users/selectallusers', 'GET')
      setusers(data)
      setloading(false)
    } catch (err) {
      console.log('users.hook FRONTEND error', err)
      setloading(false)
    }
  }

  const updateUser = async (upd)=>{
    const data = await request(`/users/setuserstyle/${upd._id}`, 'POST', {...upd})
  }
useEffect(() => { 
   checkStyles()
   checkTechniques()
   checkTechniques('group')
   checkUsers()
}, [])

   return { loading, deleteItem, styles, addStyle, techniques, groupsOfTechniques, addTechnique, users, updateUser }
}