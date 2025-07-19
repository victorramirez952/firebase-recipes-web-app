import { useState } from 'react'
import './App.css'

import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.suscribeToAuthChanges(setUser);

  return (
    <>
      <div className="App">
        <div className="title-row">
          <h1 className='title'>Firebase recipes</h1>
          <LoginForm existingUser={user}/>
        </div>
      </div>
    </>
  )
}

export default App
