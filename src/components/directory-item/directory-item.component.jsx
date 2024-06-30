import { useNavigate } from 'react-router-dom'
import { BackgroundImage, Body, DirectoryItemComponent } from './directory-item.styles.jsx'

function DirectoryItem({ category, route }) {
    const navigate = useNavigate()

    const navigateHandler = (route) => {
        navigate(route)
    }
    return (
        <DirectoryItemComponent onClick={() => navigateHandler(category.route)}>
            <BackgroundImage imageUrl={category.img} />
            <Body>
                <h2>{category.title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemComponent>
    )
}

export default DirectoryItem