import React, { useContext, useEffect, useState } from 'react'
import StateContext from './context'

interface Props {

}

const CountdownScreen = (props: Props) => {
    const { countdown, setCountdown, setState } = useContext(StateContext)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [timer, setTimer] = useState(-1)
    useEffect(() => {
        console.log("CountdownScreen.tsx: useEffect ", countdown,timer)
        if (countdown == 0) {
            console.log("CountdownScreen.tsx: useEffect: countdown == 0")
            if (timer != -1) {
                clearInterval(timer)
                setState("COUNTDOWNEND")
            }
        } else {
            setMinutes(Math.floor(countdown / 60))
            setSeconds(countdown % 60)
        }
    }, [countdown])

   

    return (
        <div>
            <h2>Countdown</h2>
            <p>
            minutes: {minutes}
            seconds: {seconds}
            </p>
            
            <button onClick={() => {
                setTimer(setInterval(() => {
                    setCountdown(prec => prec - 1)
                }, 1000))
            }}>Start</button>
        </div>
    )
}

export default CountdownScreen
