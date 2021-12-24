import React, { useContext } from 'react'
import StateContext from './context'

interface Props {
    
}

const CountdownEnd = (props: Props) => {
    const { setState } = useContext(StateContext)
    return (
        <div>
            <h2>SU LE MANI!!!!!</h2>
            <button onClick={() => {setState("WELCOME")}}>New Countdown</button>
        </div>
    )
}

export default CountdownEnd
