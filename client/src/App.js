import React from 'react'
import{BrowserRouter} from 'react-router-dom'

import 'materialize-css'
import { HeaderMenu } from './components/HeaderMenu'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hooks'
import {AuthContext} from './context/auth.context'

function App() {
  const {token, login, logout, userId}=useAuth()
  const isAutenticated=!!token
  const routes=useRoutes(isAutenticated)
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAutenticated}}>
      <BrowserRouter>
        <div className="container">
          <HeaderMenu />
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
