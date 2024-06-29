import './card-drop-down.styles.scss'
import Button from '../button/button.components'
import CartItem from '../card-item/cart-item.component'
import { useContext } from 'react'
import { cardContext } from '../../contexts/card-display.context'
import { useNavigate } from 'react-router-dom'

function CardDropDown() {
    const { cardItems } = useContext(cardContext)
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cardItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={goToCheckout}> check out</Button>
        </div>
    )
}

export default CardDropDown