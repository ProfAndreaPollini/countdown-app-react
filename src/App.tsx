import React,{ useState } from 'react'
import logo from './logo.svg'
import './App.css'
import StateContext from './context'
import WelcomeScreen from './WelcomeScreen'
import CountdownScreen from './CountdownScreen'
import CountdownEnd from './CountdownEnd'




function App() {
  const [state, setState] = useState("WELCOME")
  const [countdown, setCountdown] = useState(0)

  return (
    <StateContext.Provider value={{ state, setState,countdown, setCountdown }}>
      <div className="App">
        <h1>Count Down App</h1>
        {state == "WELCOME" && <WelcomeScreen />}
        {state == "COUNTDOWN" && <CountdownScreen />}
        {state == "COUNTDOWNEND" && <CountdownEnd />}
      </div>
    </StateContext.Provider>
  )
}

export default App
