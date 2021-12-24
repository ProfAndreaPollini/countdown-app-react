import React from "react"
import { AppState } from "./types"

const StateContext = React.createContext<AppState>({
    state: "",
    setState: () => { },
    countdown: 0,
    setCountdown: () => { }
})
export default StateContext