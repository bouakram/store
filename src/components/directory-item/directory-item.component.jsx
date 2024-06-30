import { BackgroundImage, Body, DirectoryItemComponent } from './directory-item.styles.jsx'

function DirectoryItem({ category }) {
    return (
        <DirectoryItemComponent key={category.id} >
            <BackgroundImage imageUrl={category.img} />
            <Body>
                <h2>{category.title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemComponent>
    )
}

export default DirectoryItem