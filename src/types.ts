

export type AppState = {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    countdown:number,
    setCountdown: React.Dispatch<React.SetStateAction<number>>
    
}