<<<<<<< HEAD
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Combined from './components/Combined'
import Home from './pages/Home/Home'
import Team from './pages/About/Team'
import Pricing from './pages/Pricing/Pricing'
import Login from './pages/Authentication/Login'
import SignUp from './pages/Authentication/SignUp'
=======
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login   from "./pages/Authentication/Login";
import SignUp  from "./pages/Authentication/SignUp";
import Home    from "./pages/Home/Home";
>>>>>>> e5e6787 (Login and SignUp)

console.log("✅ App rendering");


function App() {
  return (
<<<<<<< HEAD
    
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

=======
    <BrowserRouter>
      <Routes>

        { /* Redirect “/” to “/login” */ }
        <Route path="/" element={<Navigate to="/signup" replace />} />

        <Route path="/login"  element={<Login />}  />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            localStorage.getItem("authToken")
              ? <Home />
              : <Navigate to="/login" replace />
          }
        />

        { /* Catch-all */ }
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> e5e6787 (Login and SignUp)
export default App;