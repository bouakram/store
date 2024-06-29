import './checkout.styles.scss'
import { useContext } from 'react'
import { cardContext } from '../../contexts/card-display.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

function Checkout() {
    const { cardItems, total } = useContext(cardContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Delete</span>
                </div>
            </div>
            {cardItems.map((item) => (
                <CheckoutItem key={item.id} Product={item} />
            ))}
            <span className='total'>Total = {total}$</span>
        </div>
    )
}

export default Checkout