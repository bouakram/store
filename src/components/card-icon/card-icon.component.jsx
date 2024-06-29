import './card-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { cardContext } from '../../contexts/card-display.context'

function CardIcon() {
    const { display, setDisplay, cardItems } = useContext(cardContext)
    const handleDisplay = () => setDisplay(!display)
    return (
        <button className='cart-icon-container' onClick={handleDisplay}>
            <ShoppingIcon />
            <span className='item-count'>{cardItems.length}</span>
        </button>
    )
}

export default CardIcon