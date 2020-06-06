import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import Login from './components/auth/Login/Login'
import Register from './components/auth/Register/Register'
import Forgot from './components/auth/Forgot/Forgot'

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/forgot' component={Forgot}/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={Homepage}/>
        </Switch>
        
    </div>
  )
}

export default App