import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App(props) {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "Jayant",
    age: 20
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'> Tailwind test</h1>

      <Card username="chaiaurcode" />
      
    </>
  )
}

export default App
