import './card-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CardDisplayContext } from '../../contexts/card-display.context'

function CardIcon() {
    const { display, setDisplay } = useContext(CardDisplayContext)
    const handleDisplay = () => setDisplay(!display)
    return (
        <button className='cart-icon-container' onClick={handleDisplay}>
            <ShoppingIcon />
            <span className='item-count'>0</span>
        </button>
    )
}

export default CardIcon