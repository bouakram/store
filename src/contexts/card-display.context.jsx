import { createContext, useEffect, useState } from "react"

const addCardItem = (cardItems, productToAdd) => {
    const itemExist = cardItems.find(item => item.id === productToAdd.id)
    if (itemExist) {
        return cardItems.map(item => item.id === productToAdd.id ? { ...productToAdd, quantity: item.quantity + 1 } : item)
    }
    return [...cardItems, { ...productToAdd, quantity: 1 }]
}

const decreaseQuantity = (cardItems, productToDecreaseQuantity) => {
    const itemExist = cardItems.find(item => item.id === productToDecreaseQuantity.id)

    if (itemExist.quantity === 1) {
        return cardItems.filter(item => item.id !== productToDecreaseQuantity.id)
    }

    return cardItems.map(item => item.id === productToDecreaseQuantity.id ? { ...item, quantity: item.quantity - 1 } : item)
}

const removeFromCard = (cardItems, itemToRemove) => {
    return cardItems.filter(item => item.id !== itemToRemove.id)
}

export const cardContext = createContext({
    display: false,
    setDisplay: () => null,
    cardItems: [],
    setItemToCard: () => { },
    decreaseQuantity: () => { },
    removeFromCard: () => { },
    total: 0
})

function CardDisplayProvider({ children }) {
    const [display, setDisplay] = useState(false)
    const [cardItems, setCardItems] = useState([])
    const [total, setTotal] = useState(0)

    const setItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd))
    }

    const decreaseItemQuantity = (productToDecrease) => {
        setCardItems(decreaseQuantity(cardItems, productToDecrease))
    }

    const removeItemFromCard = (productToRemove) => {
        setCardItems(removeFromCard(cardItems, productToRemove))
    }

    useEffect(() => {
        const cartTotal = cardItems.reduce((total, item) => {
            return total + (item.quantity * item.price)
        }, 0)
        setTotal(cartTotal)
    }, [cardItems])

    return (
        <cardContext.Provider value={{ display, setDisplay, total, setItemToCard, cardItems, decreaseItemQuantity, removeItemFromCard }}>{children}</cardContext.Provider>
    )
}

export default CardDisplayProvider