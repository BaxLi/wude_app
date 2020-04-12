import React from 'react'
import{BrowserRouter} from 'react-router-dom'

import {HeaderMenu} from './components/header/HeaderMenu'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hooks'
import {AuthContext} from './context/auth.context'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {token, login, logout, userId, userDetails, isAdmin}=useAuth()
  const isAutenticated=!!token
  console.log("isAutenticated=", !!token, 'admin ?=', isAdmin);

  const routes=useRoutes(isAutenticated, true) // DEVELOPMENT ONLY - > CHANGE TO isAutenticated+ isAdmin for production 
  
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAutenticated, userDetails, isAdmin }}>
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
