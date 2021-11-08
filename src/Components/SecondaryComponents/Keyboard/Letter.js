import React from "react";

export default function Letter({ letter, index, visable }) {
  const singleQuote = "'";
  const dash = "-";
  const space = " ";
  const exp = "!";
  const quote = "?";
  let punc =
    letter === singleQuote ||
    letter === dash ||
    letter === exp ||
    letter === quote;
  let puncSpace = letter === space;

  return (
    <div className="tile-border">
      <div
        className={
          puncSpace
            ? "space"
            : punc
            ? "visable"
            : visable
            ? "visable"
            : "hidden"
        }
        id={`letter${index}`}
      >
        <p className="tile-layout">{letter}</p>
      </div>
    </div>
  );
}
