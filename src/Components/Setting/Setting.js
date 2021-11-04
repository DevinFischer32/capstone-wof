import React from "react";
import { logout } from "../Firebase/firebase";

export default function Setting(props) {
  const { setSetting, setRules, rule } = props;

  return (
    <div className="setting-page">
      <div className="column settingStyle">
        <h1>Settings</h1>

        <button onClick={logout} id="logoutBtn" className="green settingBtn">
          Logout
        </button>
        <button
          className="green settingBtn"
          id="rulesBtn"
          onClick={() => {
            setRules(!rule);
            setSetting(true);
          }}
        >
          Game Rules How To Play
        </button>
        <button
          className="green settingBtn"
          id="ruleBtn-back"
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
