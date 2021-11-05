import React from "react";
import "./Payment.css";
import { useStateValue } from "../../State/StateProvider.js";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link className="link" to="/checkout">
            {basket?.length} items
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h4>Delivery Address</h4>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>412 Breitenberg Loaf Apt. 208</p>
            <p>Washington, D.C</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h4>Review Items and Delivery</h4>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h4>Payment Method</h4>
          </div>
          <div className="payment__Details card">
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
