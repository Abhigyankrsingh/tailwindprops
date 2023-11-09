

import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='p-4 mb-4 text-black bg-green-400 rounded-xl'>Tailwind test</h1>
      <Card username= "Sukana" btnText = "click me"/>
      <Card username=" Gojo" btnText= "visit me"/>
    </>
  )
}

export default App
