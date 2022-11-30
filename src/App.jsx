import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Halo</h1>
    </>
  )
}

export default App
