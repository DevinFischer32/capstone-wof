import React from "react";
import { logout } from "../Firebase/firebase";

export default function Setting(props) {
  const { setSetting, setRules, rule } = props;

  return (
    <div className="setting-page">
      <div className="column settingStyle">
        <h1>Settings</h1>

        <button onClick={logout} id="logoutBtn">
          Logout
        </button>
        <button
          id="logoutBtn"
          onClick={() => {
            setRules(!rule);
            setSetting(true);
          }}
        >
          Game Rules How To Play
        </button>
        <button
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
