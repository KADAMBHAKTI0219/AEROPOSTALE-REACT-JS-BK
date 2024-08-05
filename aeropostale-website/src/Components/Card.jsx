import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";




const Card = ({ products }) => {
  // Provide default values in case products or products.colors is undefined
  const initialColor = (products && products.colors && products.colors[0]) || {};
  const [currentColor, setCurrentColor] = useState(initialColor);
  const {AddCart}=useContext(CartContext)
  
  const handleColorChange = (el) => {
    setCurrentColor(el);
  };

  return (
    <div className="product">
      <div className="display-img">
        <img
          src={currentColor.image || "default-image-url"} // Provide a fallback image URL
          alt={products?.title || "Product Name"}
          height={400}
          width={400}
        />
        <img
          src={currentColor.image2 || "default-image-url"} // Provide a fallback image URL
          alt={products?.title || "Product Name"}
          height={400}
          width={400}
        />
        <img
          src={currentColor.image3 || "default-image-url"} // Provide a fallback image URL
          alt={products?.title || "Product Name"}
          height={400}
          width={400}
        />
        <img
          src={currentColor.image4 || "default-image-url"} // Provide a fallback image URL
          alt={products?.title || "Product Name"}
          height={400}
          width={400}
        />
      </div>

      <h2>{products?.title || "Product Name"}</h2>
      <p>{products?.price || "Price"}</p>
      <div className="color-options">
        {(products?.colors || []).map((el, index) => (
          <button
            key={index}
            style={{ backgroundColor: el.color,height:"50px",width:"120px"}}
            onClick={() => handleColorChange(el)}
          ></button>
        ))}
        <button onClick={()=>AddCart(products)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Card
