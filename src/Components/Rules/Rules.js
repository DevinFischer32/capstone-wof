import React from "react";

export default function Rules() {
  return (
    <div id="rules-container">
      <div className="center-column">
        <h1 className="GR">Game Rules</h1>
        <ul>
          <li>Vowels cost $250 flat fee.</li>
          <li>
            Solving the Phrase using the solve feature rewards $2000 for correct
            anwser.
          </li>
          <li>
            Solving the Phrase using the Guessing Feature rewards spin amount
            per Uncovered Letter.
          </li>
          <li>
            Bankrupt sets your Bank Account to $0 and then you'll be redirected
            to Spin agian.
          </li>
          <li>
            Free play allows you to get vowels for free and consonant reward
            $500 per Correct Guess.
          </li>
          <li>Spaces, Dashes, and Single Quotes are exposed on the Board.</li>
        </ul>
        <h1 className="GR" id="htp">
          How to Play
        </h1>
        <ul>
          <li>Click Spin Wheel and Wait for wheel to spin.</li>
          <li>Guess a Letter that Could be in the Phrase.</li>
          <li>
            If Guess is Correct continue Guessing, if not you'll be redirected
            to Spin agian.
          </li>
          <li>
            You can Solve at any time after spining the wheel, if Solve is
            correct A new word will generate.
          </li>
          <li>If solve is incorrect you'll be redirected to Spin agian. </li>
        </ul>
      </div>
    </div>
  );
}
