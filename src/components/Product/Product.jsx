import React from "react";
import { useStateValue } from "../../State/StateProvider.js";
import "./Product.css";

const Product = ({ id, description, price, img, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        description,
        price,
        img,
        rating,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{description}</p>
        <div className="ratingPrice">
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
      </div>
      <img className="product__img" src={img} alt="product" />
      <button className="product__button btn" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
};

export default Product;
