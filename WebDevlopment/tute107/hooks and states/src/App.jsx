import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  // function increse(){
  //   setCount(count = count+1)
  // }
  return (
    <>
    <p>this is incresing  {count} </p>
    <button class="custom-button" onClick={()=>(setCount(count*count))}>Click Me</button>
    </>
  )
}

export default App
