import { useContext } from 'react'
import { BUTTON_TYPE_CLASSES } from '../button/button.components'
import './product-card.styles.jsx'
import { Button, Footer, Image, Name, Price, ProductCardContainer } from './product-card.styles.jsx'
import { cardContext } from '../../contexts/card.context.jsx'

function ProductCard({ product }) {
    const { setItemToCard } = useContext(cardContext)
    const addProductToCard = () => {
        setItemToCard(product)
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