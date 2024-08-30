import {
    Fragment,
    // useContext, 
    useEffect,
    useState
} from 'react'
import { useParams } from 'react-router-dom'
// import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoryContainer } from './category.styles.jsx'
import { categoriesSelector, selectIsCategoriesLoading } from '../../store/categories/category.selector.js'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/spinner.component.jsx'

function Category() {
    const { category } = useParams()
    // const { categoriesMap } = useContext(CategoriesContext)
    const categories = useSelector(categoriesSelector)
    const isLoading = useSelector(selectIsCategoriesLoading)

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categories[category])
    }, [category, categories])
    return (
        <Fragment>
            {
                isLoading ?
                    <Spinner />
                    :
                    <CategoryContainer>
                        {
                            products?.map(product => {
                                return (
                                    <ProductCard key={product.id} product={product} />
                                )
                            })
                        }
                    </CategoryContainer>
            }
        </Fragment>
    )
}

export default Category