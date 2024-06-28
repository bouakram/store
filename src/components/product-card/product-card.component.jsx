import Button from '../button/button.components'
import './product-card.styles.scss'

function ProductCard({ product }) {
    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={product.name} />
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}$</span>
            </div>
            <Button button_type={'inverted'}>shop now</Button>
        </div>
    )
}

export default ProductCard