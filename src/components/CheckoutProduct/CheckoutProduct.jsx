import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../State/StateProvider.js";


const CheckoutProduct = ({ id, description, price, img, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
      <div className="checkoutproduct">
        <img src={img} alt="" className="checkoutproduct__image" />
        <div className="checkoutproduct__info">
          <p className="checkoutproduct__title">{description}</p>
          <p className="checkoutproduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutproduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button
            className="checkoutproduct__removeBtn btn"
            onClick={removeFromBasket}
          >
            Remove from basket
          </button>
        </div>
      </div>
  );
};

export default CheckoutProduct;
