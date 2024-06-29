import { useContext } from 'react'
import Button from '../button/button.components'
import './product-card.styles.scss'
import { cardContext } from '../../contexts/card-display.context'

function ProductCard({ product }) {
    const { setItemToCard } = useContext(cardContext)
    const addProductToCard = () => setItemToCard(product)
    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={product.name} />
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}$</span>
            </div>
            <Button button_type={'inverted'} onClick={addProductToCard}>shop now</Button>
        </div>
    )
}

export default ProductCard