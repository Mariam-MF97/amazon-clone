import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import Login from "./components/Login/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./State/StateProvider.js";
import Footer from "./components/Footer/Footer";
import Payment from "./components/Payment/Payment";


const App = () => {
  const [{}, dispatch] = useStateValue();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Payment />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
