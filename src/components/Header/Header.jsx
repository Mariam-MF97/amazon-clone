import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../State/StateProvider.js";
import { getAuth, signOut } from "@firebase/auth";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const auth = getAuth();
  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
      dispatch({
        type: "EMPTY_BASKET",
      });
    }
  };
  return (
    <div className="header">
      <Link to="/" className="link">
        <img
          className="logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__search_input" type="text" />
      </div>
      <div className="header__nav">
        <Link
          to={!user && "/login"}
          onClick={handleAuthentication}
          className="link"
        >
          <div className="header__navElement">
            <span className="header__navElementOne">Hello, {user?.email}</span>
            <span className="header__navElementTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__navElement">
          <span className="header__navElementOne">Returns</span>
          <span className="header__navElementTwo">& Orders</span>
        </div>
        <div className="header__navElement">
          <span className="header__navElementOne">your</span>
          <span className="header__navElementTwo">Prime</span>
        </div>
        <Link to="/checkout" className="link">
          <div className="header__cart">
            <ShoppingBasketIcon />
            <span className="header__navElementTwo header__cartTwo">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
