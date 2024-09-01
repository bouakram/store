import { CategoryItem } from "../categories/category.types";

export enum CARD_ACTION_TYPES {
    SET_CART_ITEMS = "SET_CART_ITEMS",
    SET_CARD_DISPLAY = "SET_CARD_DISPLAY"
}

export type CartItem = CategoryItem & {
    quantity: number
}