
import CategoryItem from '../category-item/CategoryItem'
import './categories.styles.scss'



function Categories({ categoriesList }) {
    return (
        <div className='categories-container'>
            {categoriesList?.map((ctg, i) => {
                return (
                    <CategoryItem key={i} category={ctg} />
                )
            }
            )}
        </div>
    )
}

export default Categories