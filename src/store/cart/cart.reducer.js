import { CARD_ACTION_TYPES } from "./cart.type"

const INITIAL_STATE = {
    cardItems: [],
    total: 0,
    display: false
}

export const cardReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CARD_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cardItems: payload
            }
        case CARD_ACTION_TYPES.SET_CARD_DISPLAY:
            return {
                ...state,
                display: payload
            }
        default:
            return state
    }
}