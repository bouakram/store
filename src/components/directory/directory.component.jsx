
import DirectoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from './directory.styles.jsx'

const categories = [
    {
        id: 1,
        img: "https://static01.nyt.com/images/2023/10/15/fashion/09LITERARY-HARTS-kczw/09LITERARY-HARTS-kczw-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        title: "Hats",
        route: "shop/hats"
    },
    {
        id: 2,
        img: "https://hooke.ca/cdn/shop/files/HOOKE-MEN-LIGHTWEIGHT-INSULATED-HOOD-JACKET-BLK-1.webp?v=1689773252&width=2500",
        title: "Jacket",
        route: "shop/jackets"
    },
    {
        id: 3,
        img: "https://verbenas.com/5217-large_default/sneakers-one-nylonserraje-creambronzo.jpg",
        title: "Sneakers",
        route: "shop/sneakers",
    },
    {
        id: 4,
        img: "https://dunnes.btxmedia.com/pws/client/ds2/images/marketing/department/women/24/20/dresses2.jpg",
        title: "Women",
        route: "shop/womens"
    },
    {
        id: 5,
        img: "https://media.very.co.uk/i/sd/ctmt-213-mens-dept-1?%24poi%24=&aspect=1%3A1&w=900&qlt=default&fmt=jpg&fmt.jpeg.interlaced=true",
        title: "Mens",
        route: "shop/mens"
    }
]

function Directory() {
    return (
        <DirectoryContainer>
            {categories?.map((ctg, i) => {
                return (
                    <DirectoryItem key={i} category={ctg} />
                )
            }
            )}
        </DirectoryContainer>
    )
}

export default Directory