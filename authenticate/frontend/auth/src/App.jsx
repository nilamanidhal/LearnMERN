import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen bg-gray-700 text-white text-3xl flex justify-center flex-col gap-3 items-center'>
   <span>hello</span>  <br/>
    <Register/>
    </div>
  )
}

export default App
