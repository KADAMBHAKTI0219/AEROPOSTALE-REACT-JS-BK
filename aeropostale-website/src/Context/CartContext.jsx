import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const[count,setcount]=useState(0)
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage or initialize as an empty array
    const savedCart = localStorage.getItem('cart');
    
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
    setcount(cart.length)
  }, [cart]);

  const AddCart = (item) => {
    
    setCart((prevCart) => [...prevCart, item]);
    alert("PRODUCT ADDED CART..!")
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{count,setCart, cart, AddCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};