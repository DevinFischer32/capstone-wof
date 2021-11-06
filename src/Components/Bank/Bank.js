import React from "react";
import "./Bank.css";

export default function Bank(props) {
  const { name, bank } = props;
  return (
    <div id="bank-container">
      <h6 id="username">{name}</h6>
      <div className="flex-bank">
        <h5 id="dollarSign" className="bank-padding">
          $
        </h5>
        <p className="bank bank-padding">{bank}</p>
      </div>
    </div>
  );
}
