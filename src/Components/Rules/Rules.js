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
      </div>
    </div>
  );
}
