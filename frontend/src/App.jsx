import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Combined from './components/Combined'
import Home from './pages/Home/Home'
import Team from './pages/About/Team'
import Pricing from './pages/Pricing/Pricing'
import Login from './pages/Authentication/Login'
import SignUp from './pages/Authentication/SignUp'

const App = () => {
  return (
    
    <Routes >
      <Route path='/' element={<Combined>
        <Home/>
      </Combined>} />

      <Route path='/team' element={<Combined>
        <Team/>
      </Combined>} />
      <Route path='/pricing' element={<Combined>
        <Pricing/>
      </Combined>} />
      <Route path='/login' element={<Combined>
        <Login/>
      </Combined>} />
      <Route path='/signUp' element={<Combined>
        <SignUp/>
      </Combined>} />
    </Routes>
  )
}

export default App;