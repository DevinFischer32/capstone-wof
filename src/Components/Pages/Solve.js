import React from "react";
import Bank from "../SecondaryComponents/Bank";
export default function Solve(props) {
  const { solveFn, rightOrWrongSolve, message, name, bank } = props;
  return (
    <>
      <div className="solve">
        <div className="header" id="solveHeader">
          <h1 id="solve-title">Solve The Phrase</h1>
        </div>
        <div id="solve-msg">{message}</div>
        <div id="input-solve-container">
          <form>
            <input
              id="solveInput"
              minLength="1"
              type="text"
              onChange={solveFn}
              autoComplete="off"
            />

            <button
              onClick={rightOrWrongSolve}
              className="keysBtn"
              id="solveBtn"
            >
              Solve Puzzle
            </button>
          </form>
          <h2 className="rule-input-solve">Spelling Is Important!</h2>
          <h2 className="rule-input-solve">Case Does Not Matter</h2>
          <h2 className="rule-input-solve">Single Spacing Only</h2>
        </div>
        <div id="spacerSolve"></div>
        <div id="solveBank">
          <Bank name={name} bank={bank} />
        </div>
      </div>
    </>
  );
}
