import React from 'react'
import{BrowserRouter} from 'react-router-dom'

import 'materialize-css'
import { HeaderMenu } from './components/HeaderMenu'
import { useRoutes } from './routes'

function App() {
  const routes=useRoutes()
  return (
    <BrowserRouter>
      <div className="container">
        <HeaderMenu />
        {routes}
      </div>
    </BrowserRouter>
  )
}

export default App;
