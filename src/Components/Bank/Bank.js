import React from "react";
import "./Bank.css";

export default function Bank(props) {
  const { name, bank } = props;
  return (
    <div id="bank-container">
      <h6 id="username">{name}</h6>
      <div className="flex-align">
        <h5 id="dollarSign" className="bank">
          $
        </h5>
        <p className="bank">{bank}</p>
      </div>
    </div>
  );
}
