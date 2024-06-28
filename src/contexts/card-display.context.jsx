import { createContext, useState } from "react"

export const CardDisplayContext = createContext({
    display: false,
    setDisplay: () => null
})

function CardDisplayProvider({ children }) {
    const [display, setDisplay] = useState(false)
    return (
        <CardDisplayContext.Provider value={{ display, setDisplay }}>{children}</CardDisplayContext.Provider>
    )
}

export default CardDisplayProvider