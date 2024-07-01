import { createContext, useEffect, useReducer, useState } from "react"

const addCardItem = (cardItems, productToAdd) => {
    const itemExist = cardItems.find(item => item.id === productToAdd.id)
    if (itemExist !== undefined) {
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

const INITIAL_STATE = {
    cardItems: [],
    total: 0,
    display: false
}

const CARD_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_CARD_DISPLAY: "SET_CARD_DISPLAY"
}

const cardReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case CARD_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CARD_ACTION_TYPES.SET_CARD_DISPLAY:
            return {
                ...state,
                display: payload
            }
        default:
            throw new Error(`unhandled type ${type} from cardReducer`)
    }
}

function CardDisplayProvider({ children }) {
    // const [display, setDisplay] = useState(false)
    // const [cardItems, setCardItems] = useState([])
    // const [total, setTotal] = useState(0)
    const [{ cardItems, total, display }, dispatch] = useReducer(cardReducer, INITIAL_STATE)
    const updateCardItemsReducer = (newCardItems) => {
        const newCartTotal = newCardItems.reduce((total, item) => {
            return total + (item.quantity * item.price)
        }, 0)
        dispatch({ type: "SET_CART_ITEMS", payload: { cardItems: newCardItems, total: newCartTotal } })
    }

    const setItemToCard = (productToAdd) => {
        const newCardItems = addCardItem(cardItems, productToAdd)
        updateCardItemsReducer(newCardItems)
    }

    const decreaseItemQuantity = (productToDecrease) => {
        const newCardItems = decreaseQuantity(cardItems, productToDecrease)
        updateCardItemsReducer(newCardItems)
    }

    const removeItemFromCard = (productToRemove) => {
        const newCardItems = removeFromCard(cardItems, productToRemove)
        updateCardItemsReducer(newCardItems)
    }

    const setDisplay = (bool) => {
        dispatch({ type: "SET_CARD_DISPLAY", payload: bool })
    }

    // useEffect(() => {
    //     const cartTotal = cardItems.reduce((total, item) => {
    //         return total + (item.quantity * item.price)
    //     }, 0)
    //     setTotal(cartTotal)
    // }, [cardItems])

    return (
        <cardContext.Provider value={{ display, setDisplay, total, setItemToCard, cardItems, decreaseItemQuantity, removeItemFromCard }}>{children}</cardContext.Provider>
    )
}

export default CardDisplayProvider