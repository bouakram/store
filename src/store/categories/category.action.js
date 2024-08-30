// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./category.types";

// export const setCategoriesMap = (categoriesArray) => createAction(CATEGORIES_TYPES.SET_CATEGORIES, categoriesArray)

export const fetchCategoriesStart = () => createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error)

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart())
//     try {
//         const categoryMap = await getCategoriesAndDocuments('categories')
//         dispatch(fetchCategoriesSuccess(categoryMap))
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error))
//     }
// }