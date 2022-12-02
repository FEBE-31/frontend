import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar'
import Heading from './component/Heading'
import './style.css'
import Card from './component/Card'
import ListCard from './component/ListCard'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UserCampaign from './pages/UserCampagin'
import CreateCampaign from './pages/CreateCampaign'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto px-4 md:px-0'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/userCampaign' element={<UserCampaign />} />
          <Route path='/createCampaign' element={<CreateCampaign />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
