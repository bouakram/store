import { CartItemContainer, ItemDetails, Name } from './cart-item.styles.jsx'

function CartItem({ cartItem }) {
    return (
        <CartItemContainer>
            <img src={cartItem.imageUrl} alt={cartItem.name} />
            <ItemDetails>
                <Name>{cartItem.name}</Name>
                <span>{cartItem.quantity} x {cartItem.price}$</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem
