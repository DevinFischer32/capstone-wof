import React from "react";

export default function Solve(props) {
  const { switchScreen, solveFn, rightOrWrongSolve, message } = props;
  return (
    <div className="solve">
      <div className="header" id="solveHeader">
        <h1 id="solve-title">Solve The Phrase</h1>
        <div className="top-right">
          <button onClick={switchScreen}>Lose Turn</button>
        </div>
      </div>
      <div id="solve-msg">{message}</div>
      <div id="input-solve-container">
        <form>
          <input
            id="solveInput"
            type="text"
            onChange={solveFn}
            autoComplete="off"
          />

          <button onClick={rightOrWrongSolve} className="keysBtn" id="solveBtn">
            Solve Puzzle
          </button>
        </form>
        <h2 className="rule-input-solve">Single Spacing Only</h2>
        <h2 className="rule-input-solve">Spelling Important!</h2>
        <h2 className="rule-input-solve">Case Does Not Matter</h2>
      </div>
    </div>
  );
}
