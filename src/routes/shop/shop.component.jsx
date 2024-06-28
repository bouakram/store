import './shop.styles.scss'
import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/products.context'
import ProductCard from '../../components/product-card/product-card.component'

function Shop() {
    const { products } = useContext(ProductsContext)
    return (
        <div className='shop-container'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop