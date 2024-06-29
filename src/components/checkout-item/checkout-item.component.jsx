import { useContext } from 'react'
import './checkout-item.styles.scss'
import { cardContext } from '../../contexts/card-display.context'

function CheckoutItem({ Product }) {
    const { setItemToCard, decreaseItemQuantity, removeItemFromCard } = useContext(cardContext)
    const handleIncrease = () => {
        setItemToCard(Product)
    }
    const handleDecrease = () => {
        decreaseItemQuantity(Product)
    }
    const handleDeleteItem = () => {
        removeItemFromCard(Product)
    }
    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={Product.imageUrl} alt={Product.name} />
            </div>
            <span className='name'>{Product.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleDecrease}>&#10094;</div>
                {Product.quantity}
                <div className='arrow' onClick={handleIncrease}>&#10095;</div>
            </span>
            <span className='price'>{Product.price}</span>
            <dib className='remove-button' onClick={handleDeleteItem}>&#10005;</dib>
        </div>
    )
}

export default CheckoutItem