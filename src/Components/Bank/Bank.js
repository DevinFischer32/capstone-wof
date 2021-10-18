import React from "react";
import "./Bank.css";

export default function Bank(props) {
  const { name } = props;
  return (
    <div id="bank-container">
      <h3 id="username">{name}</h3>
      <p id="bank">$500</p>
    </div>
  );
}
