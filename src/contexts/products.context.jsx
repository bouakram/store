import React, { createContext, useState } from 'react'
import SHOP_DATA from '../shopData.json'

export const ProductsContext = createContext({
    products: [],
})

function ProductsContextProvider({ children }) {
    const [products, setProducts] = useState(SHOP_DATA)
    return (
        <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
    )
}

export default ProductsContextProvider