import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';

const CartPage = () => {const { cart, removeFromCart } = useContext(CartContext);

  

return (
  <div>
    {cart.length === 0 ? (
      <h3>Your cart is empty</h3>
    ) : (
      cart.map((item) => (
        <div key={item.id} style={{display:"flex",borderBottom:"1px solid black",padding:"20px"}}>
          <div>
          <img src={item.colors[0].image} height={150} width={150} alt="" />
          </div>
          <div>
          <h5>{item.title}</h5>
          <p>Price: ${item.price}</p>
          
          <button onClick={() => removeFromCart(item.id)} style={{backgroundColor:"black",color:"white",borderRadius:"10px",border:"none"}}>DELETE</button>
          
          </div>
         
        </div>
      ))
    )}
  </div>
);
}

export default CartPage
