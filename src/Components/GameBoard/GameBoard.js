import React from "react";

export default function GameBoard(props) {
  let { gameObject, splitWord, splitDivGen } = props;
  console.log(gameObject, "go");
  console.log(splitWord, "sw");
  console.log(splitDivGen, "sdg");

  const finalWord = gameObject.word;
  const finalType = gameObject.type;

  return (
    <div id="game-board">
      <div>{finalWord}</div>
      <div>{finalType}</div>
    </div>
  );
}
