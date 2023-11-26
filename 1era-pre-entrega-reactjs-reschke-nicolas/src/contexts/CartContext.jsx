import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    const addToCart = (product) => {
        const productIndex = cartList.findIndex(
            (item) => item.id === product.id
            );
            
            if (productIndex !== -1) {
                const newCart = [...cartList]
                newCart[productIndex].cant += product.cant
                setCartList(newCart)
            } else {
                setCartList([...cartList, product])
            }
        }
        
        const emptyCart = () => {
            setCartList([])
        }

    const sumQuantities = () => {
        return cartList.reduce((total, product) => total + product.cant, 0)
    }
    const totalPrice = () => {           
        return cartList.reduce((acum, prod) => acum + (prod.cant * prod.price), 0)     
    }

    const deleteItem = (productId) => {
        const newCart = cartList.map((product) => {
            if (product.id === productId && product.cant > 0) {
                return { ...product, cant: product.cant - 1 }
            }
            return product
        });
        setCartList(newCart.filter((product) => product.cant > 0))
    }

    return (
        <CartContext.Provider value= {{
            cartList,
            addToCart,
            emptyCart,
            sumQuantities,
            totalPrice,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}