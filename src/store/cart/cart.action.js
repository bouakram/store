import { CARD_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

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

export const setItemToCard = (cardItems, productToAdd) => {
    const newCardItems = addCardItem(cardItems, productToAdd)
    return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, newCardItems)
}

export const updateCardItemsReducer = (newCardItems) => {
    const newCartTotal = newCardItems.reduce((total, item) => {
        return total + (item.quantity * item.price)
    }, 0)
    return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, { cardItems: newCardItems, total: newCartTotal })
}

export const decreaseItemQuantity = (cardItems, productToDecrease) => {
    const newCardItems = decreaseQuantity(cardItems, productToDecrease)
    return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, newCardItems)
}

export const removeItemFromCard = (cardItems, productToRemove) => {
    const newCardItems = removeFromCard(cardItems, productToRemove)
    return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, newCardItems)
}

export const setDisplay = (bool) => {
    return createAction(CARD_ACTION_TYPES.SET_CARD_DISPLAY, bool)
}