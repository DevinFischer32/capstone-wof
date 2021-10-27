import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, sendPasswordResetEmail } from "../firebase";

function Reset(props) {
  const { setreset, setregister } = props;
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/wheeloffortune");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <div className="style">
      <div className="container">
        <div className="login-conatiner">
          <input
            type="text"
            className="login-textBox login-margin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button
            className="loginBtn-size  login-margin"
            onClick={() => {
              sendPasswordResetEmail(email);
              setreset(false);
              setregister(false);
            }}
          >
            Send password reset email
          </button>
          <div>Don't have an account?</div>
          <button
            className="login-margin loginBtn-size"
            onClick={(e) => {
              setreset(false);
              setregister(true);
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reset;
