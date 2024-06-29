import { createContext, useState } from "react"

const addCardItem = (cardItems, productToAdd) => {
    console.log(cardItems)
    console.log(productToAdd)
    const itemExist = cardItems.find(item => item.id === productToAdd.id)
    if (itemExist) {
        return cardItems.map(item => item.id === productToAdd.id ? { ...productToAdd, quantity: item.quantity + 1 } : item)
    }
    return [...cardItems, { ...productToAdd, quantity: 1 }]
}

export const cardContext = createContext({
    display: false,
    setDisplay: () => null,
    cardItems: [],
    setItemToCard: () => { },
})

function CardDisplayProvider({ children }) {
    const [display, setDisplay] = useState(false)
    const [cardItems, setCardItems] = useState([])

    const setItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd))
    }
    return (
        <cardContext.Provider value={{ display, setDisplay, setItemToCard, cardItems }}>{children}</cardContext.Provider>
    )
}

export default CardDisplayProvider