import React from 'react'

import { AdminContext } from '../context/admin.context'
import { AdminPage } from './AdminPage'
import { useAdmin } from '../hooks/admin.hooks'
export const AdminPageWithContext = () => {
  const { styles, techniques, addStyle, addTechnique, deleteItem } = useAdmin()
  const isAdmin = true // TODO - TESTING ONLY - change in production to session parameter from servier!

  if (!isAdmin) return null

  return (
    <AdminContext.Provider value={{ styles, techniques, addStyle, addTechnique, deleteItem }}>
      <div className="container">
        <AdminPage />
      </div>
    </AdminContext.Provider>
  )
}
