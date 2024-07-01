import { useContext } from 'react'
import { Arrow, CheckoutItemContainer, ImageContainer, Name, Price, Quantity, RemoveButton } from './checkout-item.styles.jsx'
import { cardContext } from '../../contexts/card.context.jsx'

function CheckoutItem({ Product }) {
    const { setItemToCard, decreaseItemQuantity, removeItemFromCard } = useContext(cardContext)
    const handleIncrease = () => {
        setItemToCard(Product)
    }
    const handleDecrease = () => {
        decreaseItemQuantity(Product)
    }
    const handleDeleteItem = () => {
        removeItemFromCard(Product)
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