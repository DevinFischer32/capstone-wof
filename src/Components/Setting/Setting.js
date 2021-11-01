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
          id="ruleBtn-back"
          onClick={(e) => {
            e.preventDefault();
            setSetting(true);
            setRules(!rule);
          }}
        >
          {rule ? "Back to Game" : "Rules"}
        </button>
      </div>
    </div>
  );
}
