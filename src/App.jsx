import { useState } from 'react'

import './App.css'
import Register from './components/pages/Register'
import UserList from './components/pages/userList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='max-w-[1400px] mx-auto'>
        <div className='grid gap-6 grid-cols-[30%_auto]'>
          <Register/>
          <UserList/>
        </div>
      </div>
      
    </div>
  )
}

export default App
