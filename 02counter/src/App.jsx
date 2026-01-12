import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // let counter = 10;
  const addValue = () => {
    // counter++;
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // these all not work together

    // we have to do like this
    // setCounter( (prevCounter) => {return prevCounter+1})
    // setCounter( (prevCounter) => {return prevCounter+1})
    // setCounter( (prevCounter) => {return prevCounter+1})
    console.log(counter)
  }
  const decreaseValue = () => {
    setCounter(counter--)
    console.log(counter)
  }

  return (
    <>
      <h1>Heading</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Addvalue {counter}</button>
      <br></br>
      <button onClick={decreaseValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
