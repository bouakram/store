import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'
import { cardContext } from '../../contexts/card.context'

function Checkout() {
    const { cardItems, total } = useContext(cardContext)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Delete</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cardItems.map((item) => (
                <CheckoutItem key={item.id} Product={item} />
            ))}
            <Total>Total = {total}$</Total>
        </CheckoutContainer>
    )
}

export default Checkout