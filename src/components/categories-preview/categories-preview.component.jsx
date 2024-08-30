import {
    Fragment,
    // useContext 
} from 'react'
// import ProductCard from '../../components/product-card/product-card.component'
// import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { useSelector } from 'react-redux'
import { categoriesSelector, selectIsCategoriesLoading } from '../../store/categories/category.selector'
import Spinner from '../spinner/spinner.component'

function CategoriesPreview() {
    const categories = useSelector(categoriesSelector)
    const isLoading = useSelector(selectIsCategoriesLoading)
    // const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment >
            {
                isLoading ?
                    <Spinner />
                    :
                    Object.keys(categories).map(title => {
                        return <CategoryPreview key={title} title={title} products={categories[title]} />
                    })
            }
        </Fragment>
    )
}

export default CategoriesPreview