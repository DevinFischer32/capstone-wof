import React from "react";
import { logout } from "../../Firebase/firebase";

export default function Setting(props) {
  const { setSetting, setRules, rule } = props;

  return (
    <div className="setting-page">
      <div className="settingStyle">
        <h1>Settings</h1>

        <button onClick={logout} className="green settingBtn">
          Logout
        </button>
        <button
          id="rules-htpBtn"
          className="green settingBtn"
          onClick={() => {
            setRules(!rule);
            setSetting(true);
          }}
        >
          Game Rules How To Play
        </button>
        <button
          className="green settingBtn"
          onClick={() => {
            setSetting(true);
            setRules(false);
          }}
        >
          Back to Game
        </button>
      </div>
    </div>
  );
}
