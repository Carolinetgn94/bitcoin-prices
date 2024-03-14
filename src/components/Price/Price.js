import React, {useEffect} from "react";
import "./Price.css";

const coindeskURL = process.env.REACT_APP_COINDESK_URL;

function Price(props){

    return (
      <div>
        <h1>Bitcoin price in "stock name goes here" </h1>
        <div className="price">price goes here</div>
      </div>
    )
}

export default Price;
