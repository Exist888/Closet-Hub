import { createContext, useState } from "react";
import PRODUCTS from "../data/mockProducts.json";

// Create context for products so we can easily pass products into any part of the app
export const ProductsContext = createContext({
    products: []
});

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState(PRODUCTS);
    console.log("Products: ", products);
    // Wrap products array in object to pass into Provider
    const value = { products };
    
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}