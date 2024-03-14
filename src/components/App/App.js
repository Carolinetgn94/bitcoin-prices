import React, { useState } from "react";
import Home from "../Home/Home";
import "./App.css";
import Currencies from "../Currencies/Currencies";
import Currency from "../Currency/Currency";
import { Route, Link, Redirect } from "react-router-dom";

function App() {
  const [price, setPrice] = useState(null);
  const [currency, setCurrency] = useState("");
  
  const handleClick = (price) => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <Link onClick={() => setCurrency("")} to="/">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin Prices</h1>
        </Link>
        <Link onClick={() => setCurrency("")} to="/currencies">
        {currency ? `Currencies List > ${currency}` : `Currencies List > `}
          </Link>
      </nav>
      <main>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/currencies/:currency">
          <Currency setCurrency={setCurrency}/>
        </Route>

        <Route exact path="/currencies">
          <Currencies />
        </Route>
      </main>
    </div>
  );
}

export default App;
