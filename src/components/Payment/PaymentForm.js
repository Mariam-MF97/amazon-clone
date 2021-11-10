import { useState, useRef, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../State/StateProvider.js";
import { getBasketTotal } from "../../State/reducer";
import "./Payment.css";
export default function PaymentForm() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef(null);
  const handlePayment = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  };
  return (
    <div className="payment_form">
      <Cards
        className="card"
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form className="cardForm">
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          ref={ref}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <Link to="/" className="link">
          <h5 className="payment__total">Total: {getBasketTotal(basket)}</h5>
          <button className="btn" onClick={handlePayment}>
            PAY
          </button>
        </Link>
      </form>
    </div>
  );
}
