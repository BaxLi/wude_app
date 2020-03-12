import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {StartPage} from './pages/StartPage'
import {LinksPage} from './pages/LinksPage'
import {AuthPage} from './pages/AuthPage'
import {CreatePage} from './pages/CreatePage'
import {DetailsPage} from './pages/DetailsPage'


export const useRoutes=(isAutenticated=false)=>{

    if (isAutenticated) {
       return (
         <Switch>
           <Route path="/start" exact>
             <StartPage />
           </Route>
           <Route path="/links" exact>
             <LinksPage />
           </Route>
           <Route path="/create" exact>
             <CreatePage />
           </Route>
           <Route path="/detail/:id">
             <DetailsPage />
           </Route>
           <Redirect to="/start" />
         </Switch>
       )
    }
    return(
        <Switch>
             <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Redirect to="/auth" />
        </Switch>)


}