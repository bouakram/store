import { CARD_ACTION_TYPES, CartItem } from "./cart.type";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";

const addCardItem = (cardItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
    const itemExist = cardItems.find(item => item.id === productToAdd.id)
    if (itemExist !== undefined) {
        return cardItems.map(item => item.id === productToAdd.id ? { ...productToAdd, quantity: item.quantity + 1 } : item)
    }
    return [...cardItems, { ...productToAdd, quantity: 1 }]
}

const decreaseQuantity = (cardItems: CartItem[], productToDecreaseQuantity: CartItem): CartItem[] => {
    const itemExist = cardItems.find(item => item.id === productToDecreaseQuantity.id)

    if (itemExist && itemExist.quantity === 1) {
        return cardItems.filter(item => item.id !== productToDecreaseQuantity.id)
    }

    return cardItems.map(item => item.id === productToDecreaseQuantity.id ? { ...item, quantity: item.quantity - 1 } : item)
}

const removeFromCard = (cardItems: CartItem[], itemToRemove: CartItem): CartItem[] => {
    return cardItems.filter(item => item.id !== itemToRemove.id)
}

export type SetDisplay = ActionWithPayload<CARD_ACTION_TYPES.SET_CARD_DISPLAY, boolean>
export type SetCartItem = ActionWithPayload<CARD_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>
export type UpdateCartItem = ActionWithPayload<CARD_ACTION_TYPES.SET_CART_ITEMS, { cardItems: CartItem[], total: number }>

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItem => {
    return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, cartItems)
})
export const updateCartItems = withMatcher((newCardItems: CartItem[], total: number): UpdateCartItem => {
    return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, { cardItems: newCardItems, total })
})

export const setItemToCard = (cardItems: CartItem[], productToAdd: CategoryItem) => {
    const newCardItems = addCardItem(cardItems, productToAdd)
    return setCartItems(newCardItems)
}

export const updateCardItemsReducer = (newCardItems: CartItem[]) => {
    const newCartTotal = newCardItems.reduce((total, item) => {
        return total + (item.quantity * item.price)
    }, 0)
    return updateCartItems(newCardItems, newCartTotal)
}

export const decreaseItemQuantity = (cardItems: CartItem[], productToDecrease: CartItem) => {
    const newCardItems = decreaseQuantity(cardItems, productToDecrease)
    return setCartItems(newCardItems)
}

export const removeItemFromCard = (cardItems: CartItem[], productToRemove: CartItem) => {
    const newCardItems = removeFromCard(cardItems, productToRemove)
    return setCartItems(newCardItems)
}

export const setDisplay = withMatcher((bool: boolean): SetDisplay => {
    return createAction(CARD_ACTION_TYPES.SET_CARD_DISPLAY, bool)
})