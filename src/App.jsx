import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar'
import Heading from './component/Heading'
import './style.css'
import Card from './component/Card'
import ListCard from './component/ListCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto px-4 md:px-0'>
        <Navbar />
        <Heading />
        <ListCard />
        <h1>Halo</h1>
      </div>
    </>
  )
}

export default App
