import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../State/StateProvider.js";
import { getBasketTotal } from "../../State/reducer";
import { useHistory } from "react-router";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
             
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //hw
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="btn"
      onClick={(e)=> history.push("/payment")}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
