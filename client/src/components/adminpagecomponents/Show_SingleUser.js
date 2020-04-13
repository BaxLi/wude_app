import React, { useContext } from 'react'
import { Image } from 'react-bootstrap'

import { useCheckPhotoById } from '../../hooks/checkPhotoByID.hook'
import { AdminContext } from '../../context/admin.context'

export const ShowSingleUser = ({ user, editUser, modal }) => {
  const { result } = useCheckPhotoById(user._id)
  const {styles}= useContext(AdminContext)
  const { name, family, birthday, email, gender, position, level, achievements, style } = user
  // console.log("ShowSingleUser -> styles", styles)
  if (!user) return null
  const gen = gender === 0 ? <div>F</div> : <div>M</div>
  const birth = new Date(birthday).toLocaleDateString('ru-Ru')
  const styleNames = (typeof style!=='undefined' && style.length===0) ?
  null : style.map((el) =>(' ' + styles.find(stl=>String(stl._id===el)).name + '-'))

  const clickUserHandle = () => {
    editUser(user)
    modal(true)
  }
  
  return (
    <tbody onClick={clickUserHandle}>
      <tr>
        <td>
          <Image src={result} height="35px"></Image>
        </td>
        <td>{name}</td>
        <td>{family}</td>
        <td>{birth}</td>
        <td>{email}</td>
        <td>{gen}</td>
        <td>{position}</td>
        <td>{styleNames}</td>
        <td>{level}</td>
        <td>{achievements}</td>
      </tr>
    </tbody>
  )
}
