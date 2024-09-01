import { UnknownAction } from 'redux';
import { CartItem } from "./cart.type"
import { setCartItems, setDisplay } from './cart.action';

export type CartState = {
    readonly cardItems: CartItem[],
    readonly total: number,
    readonly display: boolean
}

const INITIAL_STATE: CartState = {
    cardItems: [],
    total: 0,
    display: false
}

export const cardReducer = (state = INITIAL_STATE, action = {} as UnknownAction): CartState => {

    if (setDisplay.match(action)) {
        return {
            ...state,
            display: action.payload
        }
    }

    if (setCartItems.match(action)) {
        return {
            ...state,
            cardItems: action.payload
        }
    }

    return state

    // const { type, payload } = action

    // switch (type) {
    //     case CARD_ACTION_TYPES.SET_CART_ITEMS:
    //         return {
    //             ...state,
    //             cardItems: payload
    //         }
    //     case CARD_ACTION_TYPES.SET_CARD_DISPLAY:
    //         return {
    //             ...state,
    //             display: payload
    //         }
    //     default:
    //         return state
    // }
}