import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        setCartList ([
            ...cartList,
            product
        ])
    }

    const emptyCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value= {{
            cartList,
            addToCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )

}