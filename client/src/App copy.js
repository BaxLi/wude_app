import React from 'react'
import{BrowserRouter} from 'react-router-dom'

import 'materialize-css'
import {HeaderMenu} from './components/HeaderMenu'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hooks'
import {AuthContext} from './context/auth.context'
import Test from './components/TEST/Test'

function App() {
  const {token, login, logout, userId}=useAuth()
  const isAutenticated=!!token
  const routes=useRoutes(true) // DEVELOPMENT ONLY - > CHANGE TO isAutenticated for production 
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAutenticated}}>
      <Test />
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
