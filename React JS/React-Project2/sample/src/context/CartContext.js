import { createContext, useContext, useMemo, useState } from "react"

const CartContext = createContext();
export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        setCart((prvcart) => {
            const existingItem = prvcart.find((item) => item.id === product.id)
            if (existingItem) {
                return prvcart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            } else {
                return [...prvcart, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (id) => {
        setCart((prvcart) => prvcart.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const countCart = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }, [cart])

    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, clearCart, isInCart, countCart, cart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

