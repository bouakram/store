import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'
// import SHOP_DATA from '../shopData'

export const CategoriesContext = createContext({
    categoriesMap: [],
})

function CategoriesContextProvider({ children }) {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCAtegoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories')
            setCategoriesMap(categoryMap)
        }
        getCAtegoriesMap()
    }, [])
    return (
        <CategoriesContext.Provider value={{ categoriesMap }}> {children}</CategoriesContext.Provider >
    )
}

export default CategoriesContextProvider