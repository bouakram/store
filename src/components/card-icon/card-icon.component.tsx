// import { cardContext } from '../../contexts/card.context.jsx'
import { setDisplay } from '../../store/cart/cart.action.js'
import { selectCardItems, selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { CartIconContainer, ItemCount, ShoppingCartIcon } from './card-icon.styles.jsx'
// import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function CardIcon() {
    const dispatch = useDispatch()

    const cardItems = useSelector(selectCardItems)
    const display = useSelector(selectIsCartOpen)
    // const { display, setDisplay, cardItems } = useContext(cardContext)
    const handleDisplay = () => dispatch(setDisplay(!display))
    return (
        <CartIconContainer onClick={handleDisplay}>
            <ShoppingCartIcon />
            <ItemCount as='span'>{cardItems?.length}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon