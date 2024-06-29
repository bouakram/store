import './card-drop-down.styles.scss'
import Button from '../button/button.components'
import CartItem from '../card-item/cart-item.component'
import { useContext } from 'react'
import { cardContext } from '../../contexts/card-display.context'

function CardDropDown() {
    const { cardItems } = useContext(cardContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cardItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button> check out</Button>
        </div>
    )
}

export default CardDropDown