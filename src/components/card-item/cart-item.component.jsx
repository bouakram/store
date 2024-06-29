import './cart-item.styles.scss'

function CartItem({ cartItem }) {
    return (
        <div className='cart-item-container'>
            <img src={cartItem.imageUrl} />
            <div className='item-details'>
                <h2 className='name'>{cartItem.name}</h2>
                <span>{cartItem.quantity} x {cartItem.price}$</span>
            </div>
        </div>
    )
}

export default CartItem
