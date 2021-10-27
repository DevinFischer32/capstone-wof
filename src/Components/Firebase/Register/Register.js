import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

function Register(props) {
  const { setregister } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            className="login-textBox login-margin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login-textBox login-margin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="login-margin loginBtn-style" onClick={register}>
            Register
          </button>
          <button
            className=" login-margin loginBtn-style"
            onClick={signInWithGoogle}
          >
            Register with <span style={{ color: "#3f83ee" }}>G</span>
            <span style={{ color: "#e54233" }}>o</span>
            <span style={{ color: "#fabe06" }}>o</span>
            <span style={{ color: "#3f83ee" }}>G</span>
            <span style={{ color: "#32a351" }}>L</span>
            <span style={{ color: "#e54233" }}>E</span>
          </button>
          <div>Already have an account?</div>
          <button
            className="loginBtn-size login-margin"
            onClick={(e) => {
              setregister(false);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;
