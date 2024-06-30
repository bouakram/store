
import DirectoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from './directory.styles.jsx'



function Directory({ categoriesList }) {
    return (
        <DirectoryContainer>
            {categoriesList?.map((ctg, i) => {
                return (
                    <DirectoryItem key={i} category={ctg} />
                )
            }
            )}
        </DirectoryContainer>
    )
}

export default Directory