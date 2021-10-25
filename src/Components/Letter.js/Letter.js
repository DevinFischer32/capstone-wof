import React from "react";

export default function Letter({ letter, index, visable }) {
  const singleQuote = "'";
  const dash = "-";
  const space = " ";
  let punc = letter === singleQuote || letter === dash;
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
