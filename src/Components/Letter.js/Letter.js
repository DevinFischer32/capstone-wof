import React from "react";

export default function Letter({ letter, index, visable }) {
  const singleQuote = "'";
  const dash = "-";
  let punc = letter === singleQuote || letter === dash;

  return (
    <div className="tile-border">
      <div
        className={punc ? "visable" : visable ? "visable" : "hidden"}
        id={`letter${index}`}
      >
        <p className="tile-layout">{letter}</p>
      </div>
    </div>
  );
}
