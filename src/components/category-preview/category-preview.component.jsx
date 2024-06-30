import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
import { CategoryPreviewContainer, Preview } from './category-preview.styles'

function CategoryPreview({ title, products }) {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={title}><span className='title'>{title}</span></Link>
            </h2>
            <Preview>
                {
                    products.filter((_, idx) => idx < 4)
                        .map((product => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        }))
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview