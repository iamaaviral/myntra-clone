import React from 'react'

//whenever we want to use the information in provider
export const CartContext = React.createContext()


//This component provides me the state
export const CartProvider = (props) => {

    const [cartValue, setcartValue] = React.useState([])

    let addToCart = (selectedProduct) => {
        setcartValue([...cartValue, selectedProduct])
    }

    return (
        <CartContext.Provider value={{ cartValue, addToCart, name: 'aviral' }}>
            {props.children}
        </CartContext.Provider>
    )
}
