// import { useContext } from 'react'
import { Arrow, CheckoutItemContainer, ImageContainer, Name, Price, Quantity, RemoveButton } from './checkout-item.styles.jsx'
// import { cardContext } from '../../contexts/card.context.jsx'
import { decreaseItemQuantity, removeItemFromCard, setItemToCard } from '../../store/cart/cart.action.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCardItems } from '../../store/cart/cart.selector.js'
import { CartItem } from '../../store/cart/cart.type.js'
import { FC } from 'react'

export type CheckoutItemProps = {
    product: CartItem
}

const CheckoutItem: FC<CheckoutItemProps> = ({ product }) => {
    // const { setItemToCard, decreaseItemQuantity, removeItemFromCard } = useContext(cardContext)
    const dispatch = useDispatch()
    const cardItems = useSelector(selectCardItems)

    const handleIncrease = () => {
        dispatch(setItemToCard(cardItems, product))
    }
    const handleDecrease = () => {
        dispatch(decreaseItemQuantity(cardItems, product))
    }
    const handleDeleteItem = () => {
        dispatch(removeItemFromCard(cardItems, product))
    }
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={product.imageUrl} alt={product.name} />
            </ImageContainer>
            <Name>{product.name}</Name>
            <Quantity>
                <Arrow onClick={handleDecrease}>&#10094;</Arrow>
                {product.quantity}
                <Arrow onClick={handleIncrease}>&#10095;</Arrow>
            </Quantity>
            <Price className='price'>{product.price}$</Price>
            <RemoveButton onClick={handleDeleteItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem