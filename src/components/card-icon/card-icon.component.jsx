import { cardContext } from '../../contexts/card.context.jsx'
import { CartIconContainer, ItemCount, ShoppingCartIcon } from './card-icon.styles.jsx'
import { useContext } from 'react'


function CardIcon() {
    const { display, setDisplay, cardItems } = useContext(cardContext)
    const handleDisplay = () => setDisplay(!display)
    return (
        <CartIconContainer onClick={handleDisplay}>
            <ShoppingCartIcon />
            <ItemCount as='span'>{cardItems?.length}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon