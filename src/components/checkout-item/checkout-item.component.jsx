// import { useContext } from 'react'
import { Arrow, CheckoutItemContainer, ImageContainer, Name, Price, Quantity, RemoveButton } from './checkout-item.styles.jsx'
// import { cardContext } from '../../contexts/card.context.jsx'
import { decreaseItemQuantity, removeItemFromCard, setItemToCard } from '../../store/cart/cart.action.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCardItems } from '../../store/cart/cart.selector.js'

function CheckoutItem({ Product }) {
    // const { setItemToCard, decreaseItemQuantity, removeItemFromCard } = useContext(cardContext)
    const dispatch = useDispatch()
    const cardItems = useSelector(selectCardItems)

    const handleIncrease = () => {
        dispatch(setItemToCard(cardItems, Product))
    }
    const handleDecrease = () => {
        dispatch(decreaseItemQuantity(cardItems, Product))
    }
    const handleDeleteItem = () => {
        dispatch(removeItemFromCard(cardItems, Product))
    }
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={Product.imageUrl} alt={Product.name} />
            </ImageContainer>
            <Name>{Product.name}</Name>
            <Quantity>
                <Arrow onClick={handleDecrease}>&#10094;</Arrow>
                {Product.quantity}
                <Arrow onClick={handleIncrease}>&#10095;</Arrow>
            </Quantity>
            <Price className='price'>{Product.price}$</Price>
            <RemoveButton onClick={handleDeleteItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem