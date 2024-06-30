import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoryContainer } from './category.styles.jsx'

function Category() {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <CategoryContainer>
            {
                products?.map(product => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </CategoryContainer>
    )
}

export default Category