import { useNavigate } from 'react-router-dom'
import { BackgroundImage, Body, DirectoryItemComponent } from './directory-item.styles'
import { FC } from 'react';
import { CategoryType } from '../directory/directory.component';

export type DirectoryItemProps = {
    category: CategoryType;
    route?: string
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category, route }) => {
    const navigate = useNavigate()

    const navigateHandler = (route: string) => {
        navigate(route)
    }
    return (
        <DirectoryItemComponent onClick={() => navigateHandler(category.route)}>
            <BackgroundImage imageurl={category.img} />
            <Body>
                <h2>{category.title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemComponent>
    )
}

export default DirectoryItem