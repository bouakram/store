import Button from '../button/button.components'
import CartItem from '../card-item/cart-item.component'
import { useContext } from 'react'
import { cardContext } from '../../contexts/card-display.context'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartItems, EmptyMessage } from './card-drop-down.styles.jsx'

function CardDropDown() {
    const { cardItems } = useContext(cardContext)
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cardItems.length ?
                    cardItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    :
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={goToCheckout}> check out</Button>
        </CartDropdownContainer>
    )
}

export default CardDropDown