import { createContext, useState, useEffect } from "react";

function addCartItem(cartItems, productToAdd) {
    // Check whether current array includes product to add
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id;
    });

    if (existingCartItem) {
        const updatedArray = cartItems.map((cartItem) => {
            if (cartItem.id === productToAdd.id) {
                // Return all properties of cart item plus incremented quantity
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            } else {
                return cartItem;
            }
        });

        return updatedArray;

    } else {
        // New array with all cartItems, all productToAdd props, and new quantity prop
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
}

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Params include incrementing total and current item being iterated through
        const newCartCount = cartItems.reduce((total, cartItem) => {
            // Add current item qunatity to total
            return total + cartItem.quantity
        // Include starting value
        }, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    function addItemToCart(productToAdd) {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { cartItems, addItemToCart, cartCount }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}