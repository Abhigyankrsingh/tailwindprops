import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "abhi",
    age:21
  }

  return (
    <>
      <h1 className='p-4 mb-4 text-black bg-green-400 rounded-xl'>Tailwind test</h1>
      <Card username= "Sukana"/>
      <Card username=" Gojo"/>
    </>
  )
}

export default App
