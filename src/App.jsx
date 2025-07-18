import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import firebase from './FirebaseConfig';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="title-row">
          <h1>Firebase recipes</h1>
        </div>
      </div>
    </>
  )
}

export default App
