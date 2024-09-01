import { RootState } from '../store';
import { CartState } from './cart.reducer';
import { createSelector } from "reselect"

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCardItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cardItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.display
)

export const selectCartTotal = createSelector(
    [selectCardItems],
    (cardItems) => cardItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
)