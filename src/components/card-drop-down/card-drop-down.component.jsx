import './card-drop-down.styles.scss'
import Button from '../button/button.components'

function CardDropDown() {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button> check out</Button>
        </div>
    )
}

export default CardDropDown