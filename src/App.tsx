import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Homepage}/>
        </Switch>
        
    </div>
  )
}

export default App