// import { useState } from 'react'
import './App.css'
import LoginSignup from './pages/Login/LoginSignup'
import LandingPage from './pages/Landing/LandingPage'
import { useState } from 'react'


function App() {
  const [IsAuth, setIsAuth] = useState(false)

  return (
    <>
      {!IsAuth ? (<LoginSignup onLogin={() => setIsAuth(true)} />) : <LandingPage logout={() => setIsAuth(false)}/>}
    </>
  )
}

export default App
