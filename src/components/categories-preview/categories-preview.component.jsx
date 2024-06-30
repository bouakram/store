import { Fragment, useContext } from 'react'
// import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'

function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment >
            {
                Object.keys(categoriesMap).map(title => {
                    return <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview