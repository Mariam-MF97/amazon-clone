import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../State/StateProvider.js";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";


const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
         
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  description={item.description}
                  img={item.img}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
         
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
