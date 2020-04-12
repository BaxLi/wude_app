import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { StartPage } from './pages/StartPage'
import { LinksPage } from './pages/LinksPage'
import { AuthPage } from './pages/AuthPage'
import { TakePhoto } from './pages/TakePhoto'
import { DetailsPage } from './pages/DetailsPage'
import { LogoutPage } from './pages/LogoutPage'
import { AdminPageWithContext } from './pages/AdminPageWithContext'

export const useRoutes = (isAutenticated = false, isAdmin=false) => {
  
  if (isAutenticated) {
    if (isAdmin) {
      return (
        <Switch>
          <Route path="/start" exact>
            <StartPage />
          </Route>
          <Route path="/links" exact>
            <LinksPage />
          </Route>
          <Route path="/takePhoto" exact>
            <TakePhoto />
          </Route>
          <Route path="/detail/:id">
            <DetailsPage />
          </Route>
          <Route path="/adminPage" exact>
            <AdminPageWithContext />
          </Route>
          <Route path="/logout" exact>
            <LogoutPage />
          </Route>
          <Redirect to="/start" />
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route path="/start" exact>
            <StartPage />
          </Route>
          <Route path="/links" exact>
            <LinksPage />
          </Route>
          <Route path="/takePhoto" exact>
            <TakePhoto />
          </Route>
          <Route path="/detail/:id">
            <DetailsPage />
          </Route>
          <Route path="/logout" exact>
            <LogoutPage />
          </Route>
          <Redirect to="/start" />
        </Switch>
      )
    }
  }
  return (
    <Switch>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  )
}
