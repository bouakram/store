import './category-item.styles.scss'

function CategoryItem({ category }) {
    return (
        <div key={category.id} className="category-container">
            <div className="background-image" style={{ backgroundImage: `url(${category.img})` }} />
            <div className="category-body-container">
                <h2>{category.title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem