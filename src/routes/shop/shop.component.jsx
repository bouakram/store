import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../../components/categories-preview/categories-preview.component'
import Category from '../category/category.component'
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
// import { fetchCategoriesAsync } from '../../store/categories/category.action'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCategoriesStart } from '../../store/categories/category.action'
function Shop() {
    const dispatch = useDispatch()
    useEffect(() => {
        // const getCAtegoriesMap = async () => {
        // const categoryMap = await getCategoriesAndDocuments('categories')
        // dispatch(setCategoriesMap(categoryMap))
        // dispatch(fetchCategoriesAsync())
        dispatch(fetchCategoriesStart())
        // }
        // getCAtegoriesMap()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop