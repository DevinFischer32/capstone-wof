import React from "react";

export default function Rules() {
  return (
    <div id="rules-container">
      <div className="center-column">
        <h1 id="GR">Game Rules</h1>
        <ul>
          <li>Vowels cost $250 no matter how many are in the word</li>
          <li>
            Solving the Phrase using the solve feature rewards $2000 for correct
            anwser
          </li>
          <li>
            Solving the Phrase using the Guess Feature rewards spin amount per
            Correct Guess
          </li>
          <li>
            Bankrupt sets your Bank Account to 0 and then lets you respin{" "}
          </li>
          <li>
            Free play allows you to get vowels for free and consonant reward
            $500 per Correct Guess
          </li>
        </ul>
        <h1 id="GR">How to Play</h1>
        <ul>
          <li>Click Spin Wheel</li>
          <li>Spaces, Dashes, and Single Quotes are exposed on the Board.</li>
          <li>Guess a Letter that Could be in the Phrase.</li>
          <li>If Guess is Correct continue Guessing</li>
          <li>If Guess is Wrong Respin</li>
          <li>You can Solve at any time after spining the wheel</li>
        </ul>
      </div>
    </div>
  );
}
