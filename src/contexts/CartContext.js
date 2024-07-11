import React, { createContext, useState } from 'react'

//create context
export const CartContext = createContext()

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([])

  //add to cart
  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 }
    //check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  //remove from cart 
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }
  //clear cart
  const clearCart = () => {
    setCart([])
  }

  //increase amount
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id)
    addToCart(id, item)
  }

  //decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }

  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider