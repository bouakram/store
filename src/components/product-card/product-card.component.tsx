// import { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.components'
import './product-card.styles.jsx'
import { Footer, Image, Name, Price, ProductCardContainer } from './product-card.styles.jsx'
// import { cardContext } from '../../contexts/card.context.jsx'
import { useDispatch, useSelector, } from 'react-redux'
import { setItemToCard } from '../../store/cart/cart.action.js'
import { selectCardItems } from '../../store/cart/cart.selector.js'
import { CartItem } from '../../store/cart/cart.type'
import { FC } from 'react'

export type ProductCardProps = {
    product: CartItem
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    // const { setItemToCard } = useContext(cardContext)
    const dispatch = useDispatch()
    const cardItems = useSelector(selectCardItems)
    const addProductToCard = () => {
        dispatch(setItemToCard(cardItems, product))
    }
    return (
        <ProductCardContainer>
            <Image src={product.imageUrl} alt={product.name} />
            <Footer>
                <Name>{product.name}</Name>
                <Price>{product.price}$</Price>
            </Footer>
            <Button button_type={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>shop now</Button>
        </ProductCardContainer>
    )
}

export default ProductCard