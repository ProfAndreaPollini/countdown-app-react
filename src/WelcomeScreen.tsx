import React, { useContext, useState } from 'react'
import StateContext from './context'

interface Props {
    
}

const WelcomeScreen = (props: Props) => {
    const { countdown, setCountdown,setState } = useContext(StateContext)
    const [minutes,setMinutes] = useState(0)
    return (
        <div>
            <h2>Welcome</h2>
            <p>Benvenuto nella countdown app</p>
            <input type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} />
            <div>{minutes}</div>
            <button onClick={() => {
                setCountdown(minutes*60)
                setState("COUNTDOWN")
            }}>Start</button>
        </div>
    )
}

export default WelcomeScreen
