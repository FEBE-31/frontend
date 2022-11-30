import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Navbar />
        <Heading />
        <h1>Halo</h1>
      </div>
    </>
  )
}

export default App
